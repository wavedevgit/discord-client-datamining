/** chunk id: 307973 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(608416),
    l = n(738472),
    o = n(194225),
    c = n(104400),
    d = n(737968),
    u = n(275869),
    _ = n(979250);
let m = e => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: r,
        carContainerClassName: m,
        hammerContainerClassName: p,
        keyContainerClassName: A,
        starContainerClassName: g,
        boltAssetClassName: f,
        carAssetClassName: h,
        hammerAssetClassName: b,
        keyAssetClassName: x,
        starAssetClassName: R,
        animationSpeedScale: C = 1,
        blurScale: N = 1
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [null != r && (0, i.jsx)("div", {
            className: a()(l.nJ, r),
            children: (0, i.jsx)(s.Ay, {
                blurAnimationData: {
                    startBlurRadius: 10 * N,
                    endBlurRadius: 0,
                    duration: s.$G
                },
                scaleAnimationData: {
                    startScale: .85,
                    endScale: 1,
                    duration: s.$G
                },
                yAxisAnimationData: {
                    range: 15,
                    duration: s.XN,
                    path: s.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: s.MN.UP,
                    range: 125,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: o.A,
                    className: f,
                    alt: ""
                })
            })
        }), null != m && (0, i.jsx)("div", {
            className: a()(l.IN, m),
            children: (0, i.jsx)(s.Ay, {
                yAxisAnimationData: {
                    range: 15,
                    duration: s.XN,
                    path: s.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: s.MN.DOWN,
                    range: 50,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: c.A,
                    className: h,
                    alt: ""
                })
            })
        }), null != p && (0, i.jsx)("div", {
            className: a()(l.Gj, p),
            children: (0, i.jsx)(s.Ay, {
                yAxisAnimationData: {
                    range: 15,
                    duration: s.XN,
                    path: s.aV.SINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: s.MN.DOWN,
                    range: 120,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: d.A,
                    className: b,
                    alt: ""
                })
            })
        }), null != A && (0, i.jsx)("div", {
            className: a()(l.FV, A),
            children: (0, i.jsx)(s.Ay, {
                blurAnimationData: {
                    startBlurRadius: 5 * N,
                    endBlurRadius: 0,
                    duration: s.Mp
                },
                scaleAnimationData: {
                    startScale: .85,
                    endScale: 1,
                    duration: s.Mp
                },
                yAxisAnimationData: {
                    range: 15,
                    duration: s.XN,
                    path: s.aV.SINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: s.MN.UP,
                    range: 200,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: u.A,
                    className: x,
                    alt: ""
                })
            })
        }), null != g && (0, i.jsx)("div", {
            className: a()(l.E1, g),
            children: (0, i.jsx)(s.Ay, {
                blurAnimationData: {
                    startBlurRadius: 0,
                    endBlurRadius: 2 * N,
                    duration: s.$G
                },
                scaleAnimationData: {
                    startScale: 1,
                    endScale: .85,
                    duration: s.$G
                },
                yAxisAnimationData: {
                    range: 20,
                    duration: s.Mp,
                    path: s.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: s.MN.UP,
                    range: 50,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: _.A,
                    className: R,
                    alt: ""
                })
            })
        })]
    })
}