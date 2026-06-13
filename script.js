/* ==========================
   TYPING ANIMATION
========================== */

const typingElement = document.querySelector(".typing");

const professions = [
    "Software Developer",
    "Java Developer",
    "Python Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Computer Science Engineer"
];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentProfession =
        professions[professionIndex];

    if (!deleting) {

        typingElement.textContent =
            currentProfession.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentProfession.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentProfession.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            professionIndex++;

            if (
                professionIndex === professions.length
            ) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 120
    );
}

typeEffect();

/* ==========================
   DARK / LIGHT MODE
========================== */

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );

        const icon =
            themeToggle.querySelector("i");

        if (
            document.body.classList.contains(
                "light-theme"
            )
        ) {
            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

        } else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );
        }
    }
);

/* ==========================
   SCROLL PROGRESS BAR
========================== */

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        document.getElementById(
                "progress-bar"
            ).style.width =
            progress + "%";
    }
);

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
    document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute(
            "data-target"
        );

        const increment =
            target / 100;

        const updateCounter = () => {

            const current = +counter.innerText;

            if (current < target) {

                counter.innerText =
                    Math.ceil(
                        current + increment
                    );

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                    target;
            }
        };

        updateCounter();
    });
};

const statsSection =
    document.querySelector(
        ".stats-section"
    );

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    startCounter();

                    counterObserver.unobserve(
                        statsSection
                    );
                }
            });
        }, {
            threshold: 0.5
        }
    );

if (statsSection) {
    counterObserver.observe(
        statsSection
    );
}

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const sections =
    document.querySelectorAll(
        ".section"
    );

sections.forEach(section => {
    section.classList.add(
        "hidden"
    );
});

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {
                    entry.target.classList.add(
                        "show"
                    );
                }
            });
        }, {
            threshold: 0.15
        }
    );

sections.forEach(section => {
    revealObserver.observe(
        section
    );
});

/* ==========================
   SMOOTH NAVIGATION
========================== */

document
    .querySelectorAll(
        '.nav-links a'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            'click',
            function(e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute(
                            'href'
                        )
                    );

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        );
    });

/* ==========================
   CONTACT FORM
========================== */

const form =
    document.querySelector(
        ".contact-form"
    );

if (form) {

    form.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            const name =
                this.querySelector(
                    'input[type="text"]'
                ).value;

            if (
                name.trim() === ""
            ) {
                alert(
                    "Please enter your name."
                );

                return;
            }

            alert(
                "Thank you! Your message has been submitted."
            );

            this.reset();
        }
    );
}

/* ==========================
   PARTICLE BACKGROUND
========================== */

particlesJS(
    "particles-js", {
        particles: {
            number: {
                value: 90,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: [
                    "#00E5FF",
                    "#7B2FF7",
                    "#FF4D9D"
                ]
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 4,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#00E5FF",
                opacity: 0.3,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                out_mode: "bounce"
            }
        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "repulse"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true
            },

            modes: {

                repulse: {
                    distance: 120
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    }
);

/* ==========================
   ACTIVE NAV LINK
========================== */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        document
            .querySelectorAll(
                "section"
            )
            .forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    pageYOffset >=
                    sectionTop
                ) {
                    current =
                        section.getAttribute(
                            "id"
                        );
                }
            });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }
);

/* ==========================
   HERO IMAGE TILT EFFECT
========================== */

const image =
    document.querySelector(
        ".image-circle"
    );

if (image) {

    image.addEventListener(
        "mousemove",
        e => {

            const x =
                e.offsetX;

            const y =
                e.offsetY;

            const rotateY =
                (x - 150) / 20;

            const rotateX =
                (150 - y) / 20;

            image.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        }
    );

    image.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "rotateX(0) rotateY(0)";
        }
    );
}