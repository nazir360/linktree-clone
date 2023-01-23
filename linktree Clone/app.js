const shareButton = document.querySelectorAll('.tile-share-button');
async function copyText(elem){
    elem.preventDefault()
    const link = this.getAttribute("link")
    console.log(link)
    try{
        await NavigationPreloadManager.clipboard.writeText(link)
        alert("copied the text :" + link)
    }
catch(err){
    console.error(err)
}
}
shareButton.forEach(shareButton => shareButton.addEventListener("click",copyText))