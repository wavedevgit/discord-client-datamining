/** Chunk was on web.js **/
/** chunk id: 608416, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $G: () => l,
    Ay: () => p,
    MN: () => f,
    Mp: () => c,
    XN: () => u,
    aV: () => d
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(108531),
    s = n(397927),
    o = n(396583);
let l = 3e3,
    c = 4e3,
    u = 6e3;
var d = function(e) {
        return e.SINE = "sine", e.COSINE = "cosine", e
    }({}),
    f = function(e) {
        return e.UP = "up", e.DOWN = "down", e
    }({});
let p = e => {
    var t, n;
    let {
        blurAnimationData: l,
        scaleAnimationData: c,
        yAxisAnimationData: u,
        parallaxAnimationData: d,
        animateXAxisWiggle: f = !1,
        isMotionReduced: p = !1,
        animationSpeedScale: _ = 1,
        children: h
    } = e, m = (0, s.zhh)(null != u ? {
        from: {
            y: 0
        },
        to: {
            y: 1
        },
        config: {
            duration: u.duration * _
        },
        loop: !0
    } : {
        y: 0
    }), g = (null == u ? void 0 : u.path) === "sine" ? Math.sin : Math.cos, [E, y] = (0, i.useState)(1), b = (0, s.zhh)(null != c ? {
        from: {
            scale: E > 0 ? c.startScale : c.endScale
        },
        to: {
            scale: E > 0 ? c.endScale : c.startScale
        },
        config: {
            duration: c.duration * _
        },
        onRest: () => y(e => -1 * e)
    } : {
        scale: 1
    }), [O, v] = (0, i.useState)(1), A = (0, s.zhh)(null != l ? {
        from: {
            blur: O > 0 ? l.startBlurRadius : l.endBlurRadius
        },
        to: {
            blur: O > 0 ? l.endBlurRadius : l.startBlurRadius
        },
        config: {
            duration: l.duration * _
        },
        onRest: () => v(e => -1 * e)
    } : {
        blur: 0
    }), I = (0, i.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]), S = 5, [T, C] = (0, i.useState)(0), [N, w] = (0, i.useState)(1), R = (0, s.zhh)({
        xOffset: T,
        config: {
            tension: 10,
            friction: 10,
            duration: I
        }
    });
    return ((0, o.A)(() => {
        C(N * (.5 * Math.random() * S + S / 2)), w(e => -1 * e)
    }, I), p) ? h : (0, r.jsx)(a.animated.div, {
        style: {
            transform: null == (t = m.y) ? void 0 : t.to(e => {
                if (null == u) return "translateY(0px)";
                let t = g(e * Math.PI * 2) * u.range,
                    n = 0;
                if (null != d) {
                    let e = d.range * (1 - d.containerVisibilityPercentage);
                    n = "up" === d.pathDirection ? -e : e
                }
                return "translateY(".concat(t + n, "px)")
            }),
            translateX: f ? R.xOffset.to(e => "".concat(e, "px")) : 0,
            scale: b.scale,
            filter: null == (n = A.blur) ? void 0 : n.to(e => "blur(".concat(e, "px)")),
            opacity: null != d && d.changeOpacity ? d.containerVisibilityPercentage : 1
        },
        children: h
    })
}