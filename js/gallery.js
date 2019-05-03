const galleryButton = (type, index) => {
    const gallery = allGalleries[index];
    const galleryImages = gallery.getElementsByTagName("img");
    const galleryInfo = galleryCounts[index];
    
    let NewCounter;
    
    if (type == "left") {
        NewCounter = Math.max(0, galleryInfo[0] - 1);
    }
    
    else if (type == "right") {
        NewCounter = Math.min(galleryInfo[1], galleryInfo[0] + 1);
    }
    console.log(NewCounter);
    galleryImages[galleryInfo[0]].style.display = "none";
    galleryImages[NewCounter].style.display = "inline-block";
    
    return [NewCounter, galleryInfo[1]];
};

const allGalleries = document.getElementsByClassName("pics-gallery");
let galleryCounts = [];
for (let i=0; i < allGalleries.length; i++) {
    const childImages = allGalleries[i].getElementsByTagName("img");
    const childButtons = allGalleries[i].getElementsByTagName("button");
    galleryCounts.push([0, childImages.length - 1]);
    
    childButtons[0].addEventListener("click", function(){galleryCounts[i] = galleryButton("left", i); console.log("left");});
    childButtons[1].addEventListener("click", function(){galleryCounts[i] = galleryButton("right", i); console.log("right");});
    
    for (let j=0; j < childImages.length; j++) {
        if (j > 0) {
            if ("style" in childImages[j]) {
                console.log(j);
                console.log(childImages[j]);
                childImages[j].style.display = "none";
            }
        }
    }
}
