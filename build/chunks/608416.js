/** chunk id: 608416 params = (module,exports,require) **/
n.d(t, {
    $G: () => d,
    Ay: () => A,
    MN: () => p,
    Mp: () => u,
    XN: () => _,
    aV: () => m
});
var i, r, a = n(627968),
    s = n(64700),
    l = n(208798),
    o = n(397927),
    c = n(396583);
let d = 3e3,
    u = 4e3,
    _ = 6e3;
var m = ((i = {}).SINE = "sine", i.COSINE = "cosine", i),
    p = ((r = {}).UP = "up", r.DOWN = "down", r);
let A = e => {
    let {
        blurAnimationData: t,
        scaleAnimationData: n,
        yAxisAnimationData: i,
        parallaxAnimationData: r,
        animateXAxisWiggle: d = !1,
        isMotionReduced: u = !1,
        animationSpeedScale: _ = 1,
        children: m
    } = e, p = (0, o.zhh)(null != i ? {
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
    }), A = i?.path === "sine" ? Math.sin : Math.cos, [g, f] = (0, s.useState)(1), h = (0, o.zhh)(null != n ? {
        from: {
            scale: g > 0 ? n.startScale : n.endScale
        },
        to: {
            scale: g > 0 ? n.endScale : n.startScale
        },
        config: {
            duration: n.duration * _
        },
        onRest: () => f(e => -1 * e)
    } : {
        scale: 1
    }), [b, x] = (0, s.useState)(1), R = (0, o.zhh)(null != t ? {
        from: {
            blur: b > 0 ? t.startBlurRadius : t.endBlurRadius
        },
        to: {
            blur: b > 0 ? t.endBlurRadius : t.startBlurRadius
        },
        config: {
            duration: t.duration * _
        },
        onRest: () => x(e => -1 * e)
    } : {
        blur: 0
    }), C = (0, s.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]), [N, E] = (0, s.useState)(0), [v, T] = (0, s.useState)(1), j = (0, o.zhh)({
        xOffset: N,
        config: {
            tension: 10,
            friction: 10,
            duration: C
        }
    });
    return ((0, c.A)(() => {
        E(v * (.5 * Math.random() * 5 + 2.5)), T(e => -1 * e)
    }, C), u) ? m : (0, a.jsx)(l.animated.div, {
        style: {
            transform: p.y?.to(e => {
                if (null == i) return "translateY(0px)";
                let t = A(e * Math.PI * 2) * i.range,
                    n = 0;
                if (null != r) {
                    let e = r.range * (1 - r.containerVisibilityPercentage);
                    n = "up" === r.pathDirection ? -e : e
                }
                return `translateY(${t+n}px)`
            }),
            translateX: d ? j.xOffset.to(e => `${e}px`) : 0,
            scale: h.scale,
            filter: R.blur?.to(e => `blur(${e}px)`),
            opacity: null != r && r.changeOpacity ? r.containerVisibilityPercentage : 1
        },
        children: m
    })
}