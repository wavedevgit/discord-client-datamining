/** chunk id: 608416 params = (module,exports,require) **/
n.d(t, {
    $G: () => c,
    Ay: () => A,
    MN: () => g,
    Mp: () => u,
    XN: () => _,
    aV: () => m
});
var i, s, l = n(627968),
    r = n(64700),
    a = n(490249),
    o = n(397927),
    d = n(396583);
let c = 3e3,
    u = 4e3,
    _ = 6e3;
var m = ((i = {}).SINE = "sine", i.COSINE = "cosine", i),
    g = ((s = {}).UP = "up", s.DOWN = "down", s);
let A = e => {
    let {
        blurAnimationData: t,
        scaleAnimationData: n,
        yAxisAnimationData: i,
        parallaxAnimationData: s,
        animateXAxisWiggle: c = !1,
        isMotionReduced: u = !1,
        animationSpeedScale: _ = 1,
        children: m
    } = e, g = (0, o.zhh)(null != i ? {
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
    }), A = i?.path === "sine" ? Math.sin : Math.cos, [h, x] = (0, r.useState)(1), p = (0, o.zhh)(null != n ? {
        from: {
            scale: h > 0 ? n.startScale : n.endScale
        },
        to: {
            scale: h > 0 ? n.endScale : n.startScale
        },
        config: {
            duration: n.duration * _
        },
        onRest: () => x(e => -1 * e)
    } : {
        scale: 1
    }), [T, E] = (0, r.useState)(1), C = (0, o.zhh)(null != t ? {
        from: {
            blur: T > 0 ? t.startBlurRadius : t.endBlurRadius
        },
        to: {
            blur: T > 0 ? t.endBlurRadius : t.startBlurRadius
        },
        config: {
            duration: t.duration * _
        },
        onRest: () => E(e => -1 * e)
    } : {
        blur: 0
    }), S = (0, r.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]), [f, N] = (0, r.useState)(0), [b, I] = (0, r.useState)(1), v = (0, o.zhh)({
        xOffset: f,
        config: {
            tension: 10,
            friction: 10,
            duration: S
        }
    });
    return ((0, d.A)(() => {
        N(b * (.5 * Math.random() * 5 + 2.5)), I(e => -1 * e)
    }, S), u) ? m : (0, l.jsx)(a.animated.div, {
        style: {
            transform: g.y?.to(e => {
                if (null == i) return "translateY(0px)";
                let t = A(e * Math.PI * 2) * i.range,
                    n = 0;
                if (null != s) {
                    let e = s.range * (1 - s.containerVisibilityPercentage);
                    n = "up" === s.pathDirection ? -e : e
                }
                return `translateY(${t+n}px)`
            }),
            translateX: c ? v.xOffset.to(e => `${e}px`) : 0,
            scale: p.scale,
            filter: C.blur?.to(e => `blur(${e}px)`),
            opacity: null != s && s.changeOpacity ? s.containerVisibilityPercentage : 1
        },
        children: m
    })
}