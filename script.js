const finalImage = 'images/IntroAnimation/IntroAnimation Frame 90.png';
let doneIntro = false;

window.onload = function () {
    // opening animation
    var lastTick = (new Date).getTime();

    const frameCount = 90;
    const framePrefix = 'images/IntroAnimation/IntroAnimation Frame ';
    const frameExtension = '.png';
    const frameRate = 40;

    let currentFrame = 0;
    const imgElement = document.getElementById('animated-frame');

    function padNumber(n) {
        return n.toString().padStart(2, '0');
    }

    // const interval = setInterval(() => {
    //     currentFrame++;
    //     if (currentFrame > frameCount) {
    //         clearInterval(interval);
    //         imgElement.src = finalImage;
    //         doneIntro = true;
    //     } else {
    //         //const padded = padNumber(currentFrame);
    //         imgElement.src = `${framePrefix}${currentFrame}${frameExtension}`;
    //         console.log(`${framePrefix}${currentFrame}${frameExtension}`);
    //     }
    // }, frameRate);

    var frameInterval = 1000 / 30; // targeting 30 fps
    var accumulatedTime = 0;

    function tick() {
        if (doneIntro) {
            return;
        }

        var now = (new Date).getTime();
        var deltaTime = now - lastTick;
        lastTick = now;

        accumulatedTime += deltaTime;

        if (accumulatedTime >= frameInterval) {
            accumulatedTime = 0;

            currentFrame++;
            if (currentFrame > frameCount) {
                //clearInterval(interval);
                imgElement.src = finalImage;
                doneIntro = true;
                return;
            } else {
                imgElement.src = `${framePrefix}${currentFrame}${frameExtension}`;
                console.log(`${framePrefix}${currentFrame}${frameExtension}`);
            }
        }

        window.requestAnimationFrame(tick);
    }

    tick()
}

document.addEventListener('DOMContentLoaded', function () {
    // image hovering
    const box2 = document.getElementById('portfolio');
    const box = document.getElementById('contact-me');
    const img = document.getElementById('animated-frame');

    box.addEventListener('mouseenter', () => {
        if (doneIntro) {
            img.src = 'images/pointing2.png'; // hover image
            box.src = 'images/Contact_Me_Option_Hovered_Over.webp';
        }
        
    });

    box.addEventListener('mouseleave', () => {
        if (doneIntro) {
            img.src = finalImage; // original
            box.src = 'images/Contact_Me_Option.webp';
        }
    });

    box.addEventListener('mouseup', () => {
        if (doneIntro) {
            window.location.href = "https://www.youtube.com/@Mukstin";
        }
    });

    box2.addEventListener('mouseenter', () => {
        if (doneIntro) {
            img.src = 'images/pointing1.png'; // hover image
            box2.src = 'images/Portfolio_Option_hoveredover.webp';
        }
        
    });

    box2.addEventListener('mouseleave', () => {
        if (doneIntro) {
            img.src = finalImage; // original
            box2.src = 'images/Portfolio_Option.webp';
        }
    });

    box2.addEventListener('mouseup', () => {
        if (doneIntro) {
            window.location.href = "https://www.youtube.com/@Mukstin";
        }
    });
});
