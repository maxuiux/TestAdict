document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(
        MorphSVGPlugin,
        ScrollTrigger,
        ScrollToPlugin,
        MotionPathPlugin
    )

    const layers = [
        {
            id: '#c-1',
            initial: {
                opacity: 1,
                scale: 1,
                rotation: 0,
                transformOrigin: '50% 50%',
            },
            animation: {
                opacity: 0,
                scale: 0.4,
                rotation: -180,
                duration: 0.5,
                ease: 'power2.inOut',
            },
        },
        {
            id: '#c-2',
            initial: { opacity: 0, scale: 1, transformOrigin: '50% 50%' },
            animation: [
                { opacity: 1, scale: 1, duration: 0.5, ease: 'power1.out' },
                { morphSVG: '#c-3', duration: 0.5, ease: 'power2.inOut' },
            ],
        },
        {
            id: '#c-3',
            initial: { opacity: 0, scale: 1, transformOrigin: '50% 50%' },
            animation: {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.inOut',
            },
        },
        {
            id: '#c-4',
            initial: { opacity: 0, rotate: -45, transformOrigin: '50% 50%' },
            animation: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                duration: 0.25,
                ease: 'power2.inOut',
            },
        },
        {
            id: '#c-5',
            initial: {
                opacity: 0,
                scale: 0.6,
                rotation: 0,
                transformOrigin: '50% 50%',
            },
            animation: {
                opacity: 0,
                scale: 1.2,
                rotation: 15,
                duration: 0.4,
                ease: 'power2.inOut',
            },
        },
        {
            id: '#c-6',
            initial: {
                opacity: 0,
                scale: 0.6,
                rotation: 0,
                transformOrigin: '50% 50%',
            },
            animation: {
                opacity: 0,
                scale: 1.2,
                rotation: 15,
                duration: 0.4,
                ease: 'power2.inOut',
            },
        },
    ]

    let isAnimating = false

    // Установка начальных значений
    layers.forEach(({ id, initial }) => gsap.set(id, initial))

    document.querySelector('#c').addEventListener('mouseenter', () => {
        if (isAnimating) return
        isAnimating = true

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.delayedCall(0.2, () => {
                    const returnTl = gsap.timeline({
                        onComplete: () => {
                            isAnimating = false
                        },
                    })

                    layers.forEach(({ id, initial }) => {
                        returnTl.to(
                            id,
                            { ...initial, duration: 0.3, ease: 'power2.inOut' },
                            0
                        )
                    })
                })
            },
        })

        // Обработка одного объекта или массива шагов
        layers.forEach(({ id, animation }, i) => {
            if (Array.isArray(animation)) {
                animation.forEach((step, j) => {
                    tl.to(id, step, `+=${j === 0 ? i * 0.15 : 0}`) // задержка только на первом шаге
                })
            } else {
                tl.to(id, animation, i * 0.15)
            }
        })
    })
})
