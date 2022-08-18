let isOpen = false 
function openMenu() {
    const container = document.getElementById("myContainer")
    const img = document.getElementById("imgOpen")
    if (isOpen) {
        container.style.display = "none"
        isOpen = false
        img.src = "/icons8-list-91.png"
        isOpen = false
    } else {
        container.style.display = "flex"  
        isOpen = true
        img.src="/icons8-menu-48.png"
        isOpen = true
    }
}