(function() {
    gsap.registerPlugin(ScrollTrigger);

    // loading
    gsap.to('.loading', {y: '-100%', delay: 4})

    // header
    gsap.fromTo('header .logo', {y: '-150%'}, {y: 0, duration: 0.5, delay: 1})
    gsap.fromTo('header .txt_wrap *', {y: '-100%', autoAlpha: 0,}, {y: 0, autoAlpha: 1, duration: 0.5, stagger:0.2, delay: 2})

    let port = gsap.timeline({ scrollTrigger: { trigger: '.portfolio port1', start: 'top', end: '+=1500', scrub:1, pin: true}})
    // spin
    port.to('.spin', {rotation: -70, duration: 2})

    gsap.fromTo('.port1 .detail_page', {y: '20px', autoAlpha: 0}, {y: 0, autoAlpha:1, duration: 1, delay:2})

    let port01 = gsap.timeline({repeat: 0, delay:2})
    port01.to('.port1 .line_grow', {width:'100%', duration: 0.5})
    port01.fromTo('.port1 .txt_wrap *', {y: '50px', autoAlpha: 0,},{duration:1, y: 0, autoAlpha:1, stagger:0.1})

    gsap.fromTo('.port2 .detail_page', { scrollTrigger: {trigger: '.port2'}, y: '20px', autoAlpha: 0}, {y: 0, autoAlpha:1, duration: 1, delay: 1})

    let port02 = gsap.timeline({repeat: 0, delay:1})
    port02.to('.port2 .line_grow', {width:'100%', duration: 0.5})
    port02.fromTo('.port2 .txt_wrap *', {y: '50px', autoAlpha: 0,},{duration:1, y: 0, autoAlpha:1, stagger:0.1})
})();