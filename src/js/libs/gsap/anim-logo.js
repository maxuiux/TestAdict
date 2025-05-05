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
                duration: 0.4,
                ease: 'power2.inOut',
            },
        },
        {
            id: '#c-2',
            initial: {
                opacity: 0,
                scale: 0.5,
                transformOrigin: '50% 50%',
                rotate: -45,
            },
            animation: [
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.09,
                    ease: 'power1.out',
                },
                {
                    morphSVG: '#c-3',
                    rotate: 0,
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'power2.inOut',
                },
            ],
        },
        {
            id: '#c-3',
            initial: {
                opacity: 0,
                rotate: -45,
                scale: 0.4,
                transformOrigin: '50% 50%',
            },
            animation: [
                {
                    opacity: 1,
                    rotate: -45,
                    scale: 1,
                    duration: 0.1,
                    ease: 'power1.out',
                },
                {
                    rotate: 0,
                    duration: 0.2,
                    ease: 'power2.inOut',
                },
                {
                    morphSVG: '#c-4',
                    duration: 0.05,
                    ease: 'power1.inOut',
                },
            ],
        },
        {
            id: '#c-4',
            initial: {
                opacity: 0,
                scale: 0.4,
                rotate: 0,
                transformOrigin: '50% 50%',
            },
            animation: [
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.05,
                    ease: 'power1.out',
                },
                {
                    morphSVG: '#c-5',
                    duration: 0.4,
                    ease: 'power2.inOut',
                },
            ],
        },
        {
            id: '#c-5',
            initial: {
                opacity: 0,
                rotate: 0,
                scale: 0.4,
                transformOrigin: '50% 50%',
            },
            animation: [
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: 'power1.out',
                },
            ],
        },
    ]

    let isAnimating = false

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

                    layers.forEach(({ id, initial, animation }) => {
                        const revert = {
                            ...initial,
                            duration: 0.3,
                            ease: 'power2.inOut',
                        }

                        if (Array.isArray(animation)) {
                            if (animation.some((step) => 'morphSVG' in step)) {
                                revert.morphSVG = id
                            }
                        } else if ('morphSVG' in animation) {
                            revert.morphSVG = id
                        }

                        returnTl.to(id, revert, 0)
                    })
                })
            },
        })

        layers.forEach(({ id, animation }, i) => {
            if (Array.isArray(animation)) {
                animation.forEach((step, j) => {
                    tl.to(id, step, `+=${j === 0 ? i * 0.15 : 0}`)
                })
            } else {
                tl.to(id, animation, i * 0.15)
            }
        })
    })
})
