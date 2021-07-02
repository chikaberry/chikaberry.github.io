/*let options={
    threshold: 1.5
    /* threshold how far in does the image has to be for it to load
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

*/

/*The data_src is there so it can only reference the one we set up for lazy loading*/

const images = document.querySelectorAll("[data-src]");


function preLoadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data-src")
}



const imgOptions = {
    threshold: 0,
    rootMargin:"0px 0px -300px 0px"
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => { 


    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imgOptions);


images.forEach(image => {
    imageObserver.observe(image);
});
    