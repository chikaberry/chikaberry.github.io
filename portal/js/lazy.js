
let options={
    threshold: 0
    /* threshold how far in does the image has to be for it to load*/
}


const observer = new IntersectionObserver
(imageObserver, options);


function imageObserver(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const img_src = img.dataset.src;
            console.log("lazy loading", img);
            img.src = img_src;
            observer.unobserve(img);
        }
    })


}

let imgs = document.querySelectorAll("img.lazy");

imgs.forEach(img => {
    observer.observe(img);
    
})