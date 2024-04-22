const invoke = window.__TAURI__.invoke

document.addEventListener('DOMContentLoaded', () => {
   
    setTimeout(invoke('close_splashscreen'), 10000)
    
  })