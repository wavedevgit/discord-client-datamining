/** chunk id: 307973 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(608416),
    r = n(181307),
    o = n(194225),
    d = n(104400),
    c = n(737968),
    u = n(275869),
    _ = n(979250);
let m = e => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: s,
        carContainerClassName: m,
        hammerContainerClassName: g,
        keyContainerClassName: A,
        starContainerClassName: x,
        boltAssetClassName: h,
        carAssetClassName: p,
        hammerAssetClassName: T,
        keyAssetClassName: E,
        starAssetClassName: S,
        animationSpeedScale: C = 1
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [null != s && (0, i.jsx)("div", {
            className: l()(r.nJ, s),
            children: (0, i.jsx)(a.Ay, {
                blurAnimationData: {
                    startBlurRadius: 10,
                    endBlurRadius: 0,
                    duration: a.$G
                },
                scaleAnimationData: {
                    startScale: .85,
                    endScale: 1,
                    duration: a.$G
                },
                yAxisAnimationData: {
                    range: 15,
                    duration: a.XN,
                    path: a.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: a.MN.UP,
                    range: 125,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: o.A,
                    className: h,
                    alt: ""
                })
            })
        }), null != m && (0, i.jsx)("div", {
            className: l()(r.IN, m),
            children: (0, i.jsx)(a.Ay, {
                yAxisAnimationData: {
                    range: 15,
                    duration: a.XN,
                    path: a.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: a.MN.DOWN,
                    range: 50,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: d.A,
                    className: p,
                    alt: ""
                })
            })
        }), null != g && (0, i.jsx)("div", {
            className: l()(r.Gj, g),
            children: (0, i.jsx)(a.Ay, {
                yAxisAnimationData: {
                    range: 15,
                    duration: a.XN,
                    path: a.aV.SINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: a.MN.DOWN,
                    range: 120,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: c.A,
                    className: T,
                    alt: ""
                })
            })
        }), null != A && (0, i.jsx)("div", {
            className: l()(r.FV, A),
            children: (0, i.jsx)(a.Ay, {
                blurAnimationData: {
                    startBlurRadius: 5,
                    endBlurRadius: 0,
                    duration: a.Mp
                },
                scaleAnimationData: {
                    startScale: .85,
                    endScale: 1,
                    duration: a.Mp
                },
                yAxisAnimationData: {
                    range: 15,
                    duration: a.XN,
                    path: a.aV.SINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: a.MN.UP,
                    range: 200,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: u.A,
                    className: E,
                    alt: ""
                })
            })
        }), null != x && (0, i.jsx)("div", {
            className: l()(r.E1, x),
            children: (0, i.jsx)(a.Ay, {
                blurAnimationData: {
                    startBlurRadius: 0,
                    endBlurRadius: 2,
                    duration: a.$G
                },
                scaleAnimationData: {
                    startScale: 1,
                    endScale: .85,
                    duration: a.$G
                },
                yAxisAnimationData: {
                    range: 20,
                    duration: a.Mp,
                    path: a.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: a.MN.UP,
                    range: 50,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: C,
                children: (0, i.jsx)("img", {
                    src: _.A,
                    className: S,
                    alt: ""
                })
            })
        })]
    })
}