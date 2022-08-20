let isOpen = false 
function openMenu() {
    const container = document.getElementById("myContainer")
    const img = document.getElementById("imgOpen")
    if (isOpen) {
        container.style.display = "none"
      
        img.src = "menu_multimedia_bars_media_icon.png"
        isOpen = false
        
    } else {
        container.style.display = "flex" 
        img.src = "cancel_close_delete_icon.png"
        isOpen = true

        
    }
}