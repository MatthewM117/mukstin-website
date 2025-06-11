const finalImage = 'images/IntroAnimation/OnceWebsiteLoadsUp0090.png';
let doneIntro = false;

window.onload = function () {
    // opening animation
    const frameCount = 90;
    const framePrefix = 'images/IntroAnimation/OnceWebsiteLoadsUp00';
    const frameExtension = '.png';
    const frameRate = 40;

    let currentFrame = 1;
    const imgElement = document.getElementById('animated-frame');

    function padNumber(n) {
    return n.toString().padStart(2, '0');
    }

    const interval = setInterval(() => {
    currentFrame++;
    if (currentFrame > frameCount) {
        clearInterval(interval);
        imgElement.src = finalImage;
        doneIntro = true;
    } else {
        const padded = padNumber(currentFrame);
        imgElement.src = `${framePrefix}${padded}${frameExtension}`;
    }
    }, frameRate);
}

document.addEventListener('DOMContentLoaded', function () {
    // image hovering
    const box = document.getElementById('roundbox1');
    const box2 = document.getElementById('roundbox2');
    const img = document.getElementById('animated-frame');

    box.addEventListener('mouseenter', () => {
        if (doneIntro) {
            img.src = 'images/pointing1.png'; // hover image
        }
        
    });

    box.addEventListener('mouseleave', () => {
        if (doneIntro) {
            img.src = finalImage; // original
        }
    });

    box.addEventListener('mouseup', () => {
        if (doneIntro) {
            window.location.href = "https://www.youtube.com/@Mukstin";
        }
    });

    box2.addEventListener('mouseenter', () => {
        if (doneIntro) {
            img.src = 'images/pointing2.png'; // hover image
        }
        
    });

    box2.addEventListener('mouseleave', () => {
        if (doneIntro) {
            img.src = finalImage; // original
        }
    });

    box2.addEventListener('mouseup', () => {
        if (doneIntro) {
            window.location.href = "https://www.youtube.com/@Mukstin";
        }
    });
});
