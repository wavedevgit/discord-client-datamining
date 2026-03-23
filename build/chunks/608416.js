/** chunk id: 608416 params = (module,exports,require) **/
n.d(t, {
    $G: () => c,
    Ay: () => A,
    MN: () => g,
    Mp: () => u,
    XN: () => m,
    aV: () => _
});
var i, s, l = n(627968),
    a = n(64700),
    r = n(497766),
    o = n(397927),
    d = n(396583);
let c = 3e3,
    u = 4e3,
    m = 6e3;
var _ = ((i = {}).SINE = "sine", i.COSINE = "cosine", i),
    g = ((s = {}).UP = "up", s.DOWN = "down", s);
let A = e => {
    let {
        blurAnimationData: t,
        scaleAnimationData: n,
        yAxisAnimationData: i,
        parallaxAnimationData: s,
        animateXAxisWiggle: c = !1,
        isMotionReduced: u = !1,
        animationSpeedScale: m = 1,
        children: _
    } = e, g = (0, o.zhh)(null != i ? {
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
    }), A = i?.path === "sine" ? Math.sin : Math.cos, [x, p] = (0, a.useState)(1), h = (0, o.zhh)(null != n ? {
        from: {
            scale: x > 0 ? n.startScale : n.endScale
        },
        to: {
            scale: x > 0 ? n.endScale : n.startScale
        },
        config: {
            duration: n.duration * m
        },
        onRest: () => p(e => -1 * e)
    } : {
        scale: 1
    }), [T, E] = (0, a.useState)(1), f = (0, o.zhh)(null != t ? {
        from: {
            blur: T > 0 ? t.startBlurRadius : t.endBlurRadius
        },
        to: {
            blur: T > 0 ? t.endBlurRadius : t.startBlurRadius
        },
        config: {
            duration: t.duration * m
        },
        onRest: () => E(e => -1 * e)
    } : {
        blur: 0
    }), S = (0, a.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * m), [m]), [C, b] = (0, a.useState)(0), [N, I] = (0, a.useState)(1), v = (0, o.zhh)({
        xOffset: C,
        config: {
            tension: 10,
            friction: 10,
            duration: S
        }
    });
    return ((0, d.A)(() => {
        b(N * (.5 * Math.random() * 5 + 2.5)), I(e => -1 * e)
    }, S), u) ? _ : (0, l.jsx)(r.animated.div, {
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
            scale: h.scale,
            filter: f.blur?.to(e => `blur(${e}px)`),
            opacity: null != s && s.changeOpacity ? s.containerVisibilityPercentage : 1
        },
        children: _
    })
}