// 燕云十六声 - 玩家上传系统
const UploadSystem = {
  uploads: [],
  
  init() {
    this.loadUploads();
    this.setupEventListeners();
    this.renderUploads();
  },
  
  // 加载上传数据
  loadUploads() {
    const saved = localStorage.getItem('yanyun_uploads');
    this.uploads = saved ? JSON.parse(saved) : [];
  },
  
  // 保存上传数据
  saveUploads() {
    localStorage.setItem('yanyun_uploads', JSON.stringify(this.uploads));
  },
  
  // 设置事件监听
  setupEventListeners() {
    // 文件选择
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('dropZone');
    
    if (fileInput) {
      fileInput.addEventListener('change', e => this.handleFiles(e.target.files));
    }
    
    if (dropZone) {
      dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
      
      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
      });
      
      dropZone.addEventListener('drop', e => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        this.handleFiles(e.dataTransfer.files);
      });
      
      dropZone.addEventListener('click', () => fileInput?.click());
    }
    
    // 表单提交
    const form = document.getElementById('uploadForm');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        this.submitUpload();
      });
    }
  },
  
  // 处理文件
  handleFiles(files) {
    [...files].forEach(file => {
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm'];
      if (!validTypes.includes(file.type)) {
        alert(`不支持的文件类型：${file.type}。请上传图片 (JPG/PNG/WebP/GIF) 或视频 (MP4/WebM)`);
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) {
        alert('文件大小超过 10MB 限制');
        return;
      }
      
      this.readFile(file);
    });
  },
  
  // 读取文件
  readFile(file) {
    const reader = new FileReader();
    reader.onload = e => {
      const upload = {
        id: Date.now(),
        file: e.target.result,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        uploadDate: new Date().toISOString(),
        fashionId: document.getElementById('fashionId')?.value || '',
        fashionName: document.getElementById('fashionName')?.value || '',
        category: document.getElementById('category')?.value || 'image',
        description: document.getElementById('description')?.value || '',
        dyes: this.extractDyes(),
        likes: 0,
        views: 0
      };
      
      this.uploads.unshift(upload);
      this.saveUploads();
      this.renderUploads();
      this.showNotification('上传成功！');
      this.resetForm();
    };
    reader.readAsDataURL(file);
  },
  
  // 提取染色方案
  extractDyes() {
    const dyeInputs = document.querySelectorAll('.dye-color-input');
    const dyes = [];
    dyeInputs.forEach(input => {
      if (input.value) dyes.push(input.value);
    });
    return dyes;
  },
  
  // 提交上传
  submitUpload() {
    const fashionName = document.getElementById('fashionName')?.value;
    const category = document.getElementById('category')?.value;
    
    if (!fashionName) {
      alert('请填写时装名称');
      return;
    }
    
    // 文件已在 handleFiles 中处理
  },
  
  // 渲染上传列表
  renderUploads() {
    const grid = document.getElementById('uploadsGrid');
    if