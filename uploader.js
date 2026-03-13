// 玩家上传系统 - 本地存储版本
const Uploader = {
  // 初始化
  init() {
    this.setupDragDrop();
    this.setupForm();
    this.loadUploads();
  },
  
  // 设置拖拽上传
  setupDragDrop() {
    const dropZone = document.getElementById('dropZone');
    if (!dropZone) return;
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
      });
    });
    
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, () => dropZone.classList.add('dragover'));
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, () => dropZone.classList.remove('dragover'));
    });
    
    dropZone.addEventListener('drop', e => {
      const files = e.dataTransfer.files;
      this.handleFiles(files);
    });
    
    document.getElementById('fileInput')?.addEventListener('change', e => {
      this.handleFiles(e.target.files);
    });
  },
  
  // 处理文件
  handleFiles(files) {
    [...files].forEach(file => {
      if (!this.validateFile(file)) return;
      this.uploadFile(file);
    });
  },
  
  // 验证文件
  validateFile(file) {
    const max