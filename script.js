let isOpen = false 
function openMenu() {
    const container = document.getElementById("myContainer")
    if (isOpen) {
        container.style.display = "none"
        isOpen = false
    } else {
        container.style.display = "flex"  
        isOpen = true
    }
}