/** chunk id: 608416 params = (module,exports,require) **/
n.d(t, {
    $G: () => d,
    Ay: () => g,
    MN: () => p,
    Mp: () => u,
    XN: () => _,
    aV: () => m
});
var i, r, a = n(627968),
    s = n(64700),
    l = n(294426),
    c = n(397927),
    o = n(396583);
let d = 3e3,
    u = 4e3,
    _ = 6e3;
var m = ((i = {}).SINE = "sine", i.COSINE = "cosine", i),
    p = ((r = {}).UP = "up", r.DOWN = "down", r);
let g = e => {
    let {
        blurAnimationData: t,
        scaleAnimationData: n,
        yAxisAnimationData: i,
        parallaxAnimationData: r,
        animateXAxisWiggle: d = !1,
        isMotionReduced: u = !1,
        animationSpeedScale: _ = 1,
        children: m
    } = e, p = (0, c.zhh)(null != i ? {
        from: {
            y: 0
        },
        to: {
            y: 1
        },
        config: {
            duration: i.duration * _
        },
        loop: !0
    } : {
        y: 0
    }), g = i?.path === "sine" ? Math.sin : Math.cos, [A, x] = (0, s.useState)(1), h = (0, c.zhh)(null != n ? {
        from: {
            scale: A > 0 ? n.startScale : n.endScale
        },
        to: {
            scale: A > 0 ? n.endScale : n.startScale
        },
        config: {
            duration: n.duration * _
        },
        onRest: () => x(e => -1 * e)
    } : {
        scale: 1
    }), [f, b] = (0, s.useState)(1), N = (0, c.zhh)(null != t ? {
        from: {
            blur: f > 0 ? t.startBlurRadius : t.endBlurRadius
        },
        to: {
            blur: f > 0 ? t.endBlurRadius : t.startBlurRadius
        },
        config: {
            duration: t.duration * _
        },
        onRest: () => b(e => -1 * e)
    } : {
        blur: 0
    }), C = (0, s.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]), [R, v] = (0, s.useState)(0), [E, j] = (0, s.useState)(1), I = (0, c.zhh)({
        xOffset: R,
        config: {
            tension: 10,
            friction: 10,
            duration: C
        }
    });
    return ((0, o.A)(() => {
        v(E * (.5 * Math.random() * 5 + 2.5)), j(e => -1 * e)
    }, C), u) ? m : (0, a.jsx)(l.animated.div, {
        style: {
            transform: p.y?.to(e => {
                if (null == i) return "translateY(0px)";
                let t = g(e * Math.PI * 2) * i.range,
                    n = 0;
                if (null != r) {
                    let e = r.range * (1 - r.containerVisibilityPercentage);
                    n = "up" === r.pathDirection ? -e : e
                }
                return `translateY(${t+n}px)`
            }),
            translateX: d ? I.xOffset.to(e => `${e}px`) : 0,
            scale: h.scale,
            filter: N.blur?.to(e => `blur(${e}px)`),
            opacity: null != r && r.changeOpacity ? r.containerVisibilityPercentage : 1
        },
        children: m
    })
}