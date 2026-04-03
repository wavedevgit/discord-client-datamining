/** chunk id: 608416 params = (module,exports,require) **/
n.d(t, {
    $G: () => c,
    Ay: () => x,
    MN: () => _,
    Mp: () => u,
    XN: () => m,
    aV: () => g
});
var i, s, l = n(627968),
    a = n(64700),
    r = n(687498),
    o = n(397927),
    d = n(396583);
let c = 3e3,
    u = 4e3,
    m = 6e3;
var g = ((i = {}).SINE = "sine", i.COSINE = "cosine", i),
    _ = ((s = {}).UP = "up", s.DOWN = "down", s);
let x = e => {
    let {
        blurAnimationData: t,
        scaleAnimationData: n,
        yAxisAnimationData: i,
        parallaxAnimationData: s,
        animateXAxisWiggle: c = !1,
        isMotionReduced: u = !1,
        animationSpeedScale: m = 1,
        children: g
    } = e, _ = (0, o.zhh)(null != i ? {
        from: {
            y: 0
        },
        to: {
            y: 1
        },
        config: {
            duration: i.duration * m
        },
        loop: !0
    } : {
        y: 0
    }), x = i?.path === "sine" ? Math.sin : Math.cos, [A, h] = (0, a.useState)(1), p = (0, o.zhh)(null != n ? {
        from: {
            scale: A > 0 ? n.startScale : n.endScale
        },
        to: {
            scale: A > 0 ? n.endScale : n.startScale
        },
        config: {
            duration: n.duration * m
        },
        onRest: () => h(e => -1 * e)
    } : {
        scale: 1
    }), [T, f] = (0, a.useState)(1), S = (0, o.zhh)(null != t ? {
        from: {
            blur: T > 0 ? t.startBlurRadius : t.endBlurRadius
        },
        to: {
            blur: T > 0 ? t.endBlurRadius : t.startBlurRadius
        },
        config: {
            duration: t.duration * m
        },
        onRest: () => f(e => -1 * e)
    } : {
        blur: 0
    }), b = (0, a.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * m), [m]), [E, C] = (0, a.useState)(0), [N, v] = (0, a.useState)(1), I = (0, o.zhh)({
        xOffset: E,
        config: {
            tension: 10,
            friction: 10,
            duration: b
        }
    });
    return ((0, d.A)(() => {
        C(N * (.5 * Math.random() * 5 + 2.5)), v(e => -1 * e)
    }, b), u) ? g : (0, l.jsx)(r.animated.div, {
        style: {
            transform: _.y?.to(e => {
                if (null == i) return "translateY(0px)";
                let t = x(e * Math.PI * 2) * i.range,
                    n = 0;
                if (null != s) {
                    let e = s.range * (1 - s.containerVisibilityPercentage);
                    n = "up" === s.pathDirection ? -e : e
                }
                return `translateY(${t+n}px)`
            }),
            translateX: c ? I.xOffset.to(e => `${e}px`) : 0,
            scale: p.scale,
            filter: S.blur?.to(e => `blur(${e}px)`),
            opacity: null != s && s.changeOpacity ? s.containerVisibilityPercentage : 1
        },
        children: g
    })
}