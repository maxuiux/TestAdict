document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)

    const tlAnimDecorStart = gsap.timeline({
        scrollTrigger: {
            trigger: '.header-info',
            start: 'top top',
            scrub: 1.1,
            // optional:
            // end: 'bottom top',
            // markers: true,
        },
    })

    const tlAnimDecorEnd = gsap.timeline({
        scrollTrigger: {
            trigger: '.anim-decor',
            start: 'top 20% top',
            scrub: 1.1,
            // optional:
            // end: 'bottom top',
            // markers: true,
        },
    })

    tlAnimDecorStart
        .to('#anim-decor-figure-top-left', {
            fill: '#12A720',
        })
        .to(
            '#anim-decor-figure-top-right',
            {
                fill: '#12A720',
            },
            0
        )
        .to(
            '#anim-decor-figure-bottom-left',
            {
                fill: '#12A720',
            },
            0
        )
        .to(
            '#anim-decor-figure-bottom-right',
            {
                fill: '#12A720',
            },
            0
        )
        .to(
            '#anim-decor-bg-1',
            {
                fill: '#0C5238',
            },
            0
        )
        .to(
            '#anim-decor-bg-2',
            {
                fill: '#FF6D38',
            },
            0
        )
        .to(
            '#anim-decor-triangle-top-left',
            {
                fill: '#ED58DF',
            },
            0
        )
        .to(
            '#anim-decor-triangle-top-right',
            {
                fill: '#ED58DF',
            },
            0
        )
        .to(
            '#anim-decor-circle-center',
            {
                fill: '#1B1464',
            },
            0
        )
        .to(
            '#anim-decor-circle-center',
            {
                fill: '#1B1464',
            },
            0
        )
        .to(
            '#anim-decor-rhomb-center',
            {
                fill: '#0000FF',
            },
            0
        )
        .to(
            '#anim-decor-square-center',
            {
                fill: '#FFF5DA',
            },
            '<'
        )

    tlAnimDecorEnd
        .to('#anim-decor-circle-center', {
            scale: 0.9,
            transformOrigin: '50% 50%',
            fill: '#12A720',
        })
        .to(
            '#anim-decor-rhomb-center',
            {
                scale: 0.9,
                rotate: 120,
                transformOrigin: '50% 50%',
                fill: '#D5E1E1',
            },
            0
        )
        .to(
            '#anim-decor-square-center',
            {
                scale: 0.9,
                rotate: -140,
                transformOrigin: '50% 50%',
                fill: '#FFFF00',
            },
            0
        )
        .to(
            '#anim-decor-bg-1',
            {
                fill: '#1B1464',
            },
            0
        )
        .to(
            '#anim-decor-bg-2',
            {
                fill: '#0000FF',
                scale: 1.1,
                transformOrigin: '50% 50%',
            },
            0
        )
        .to(
            '#anim-decor-figure-top-left',
            {
                fill: '#FF6D38',
                rotate: 80,
                transformOrigin: '50% 50%',
            },
            0
        )
        .to(
            '#anim-decor-figure-top-right',
            {
                fill: '#FF6D38',
                rotate: -80,
                transformOrigin: '50% 50%',
            },
            0
        )
        .to(
            '#anim-decor-figure-bottom-left',
            {
                fill: '#FF6D38',
                rotate: 80,
                transformOrigin: '50% 50%',
            },
            0
        )
        .to(
            '#anim-decor-figure-bottom-right',
            {
                fill: '#FF6D38',
                rotate: -80,
                transformOrigin: '50% 50%',
            },
            0
        )
        .to(
            '#anim-decor-triangle-top-left',
            {
                fill: '#0000FF',
                scale: 1.8,
                transformOrigin: '50% 50%',
            },
            0
        )
        .to(
            '#anim-decor-triangle-top-right',
            {
                fill: '#0000FF',
                scale: 1.8,
                transformOrigin: '50% 50%',
            },
            '<'
        )
})
