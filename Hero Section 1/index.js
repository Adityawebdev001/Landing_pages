// gsap.to(".imageContainer", {
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2,
//     stagger: 2
// })

// gsap.to(".text h1", {
//     ease: Expo.easeInOut,
//      stagger: 2,
//       top: 0
// })

// gsap.to(".text h1", {
//     delay: 2,
//     ease: Expo.easeInOut,
//      stagger: 2,
//       top: "-100%"
// })

function playAnimation() {
    // First animation set
    gsap.to(".imageContainer", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    });

    gsap.to(".text h1", {
        ease: Expo.easeInOut,
        stagger: 2,
        top: 0
    });

    gsap.to(".text h1", {
        delay: 2,
        ease: Expo.easeInOut,
        stagger: 2,
        top: "-100%",
        onComplete: () => {
            // Reset properties after animation ends, then rerun
            gsap.set(".imageContainer", { width: "0%" });
            gsap.set(".text h1", { top: "100%" });
            playAnimation(); // loop it
        }
    });
}

// Start the animation loop
playAnimation();
