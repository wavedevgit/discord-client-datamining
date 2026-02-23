/** chunk id: 307973, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(503698),
    a = n.n(s),
    r = n(608416),
    l = n(285637),
    o = n(194225),
    c = n(104400),
    d = n(737968),
    u = n(275869),
    _ = n(979250);
let m = e => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: s,
        carContainerClassName: m,
        hammerContainerClassName: A,
        keyContainerClassName: g,
        starContainerClassName: h,
        boltAssetClassName: x,
        carAssetClassName: p,
        hammerAssetClassName: E,
        keyAssetClassName: C,
        starAssetClassName: T,
        animationSpeedScale: S = 1
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [null != s && (0, i.jsx)("div", {
            className: a()(l.nJ, s),
            children: (0, i.jsx)(r.Ay, {
                blurAnimationData: {
                    startBlurRadius: 10,
                    endBlurRadius: 0,
                    duration: r.$G
                },
                scaleAnimationData: {
                    startScale: .85,
                    endScale: 1,
                    duration: r.$G
                },
                yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: r.MN.UP,
                    range: 125,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: S,
                children: (0, i.jsx)("img", {
                    src: o.A,
                    className: x,
                    alt: ""
                })
            })
        }), null != m && (0, i.jsx)("div", {
            className: a()(l.IN, m),
            children: (0, i.jsx)(r.Ay, {
                yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: r.MN.DOWN,
                    range: 50,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: S,
                children: (0, i.jsx)("img", {
                    src: c.A,
                    className: p,
                    alt: ""
                })
            })
        }), null != A && (0, i.jsx)("div", {
            className: a()(l.Gj, A),
            children: (0, i.jsx)(r.Ay, {
                yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.SINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: r.MN.DOWN,
                    range: 120,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: S,
                children: (0, i.jsx)("img", {
                    src: d.A,
                    className: E,
                    alt: ""
                })
            })
        }), null != g && (0, i.jsx)("div", {
            className: a()(l.FV, g),
            children: (0, i.jsx)(r.Ay, {
                blurAnimationData: {
                    startBlurRadius: 5,
                    endBlurRadius: 0,
                    duration: r.Mp
                },
                scaleAnimationData: {
                    startScale: .85,
                    endScale: 1,
                    duration: r.Mp
                },
                yAxisAnimationData: {
                    range: 15,
                    duration: r.XN,
                    path: r.aV.SINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: r.MN.UP,
                    range: 200,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: S,
                children: (0, i.jsx)("img", {
                    src: u.A,
                    className: C,
                    alt: ""
                })
            })
        }), null != h && (0, i.jsx)("div", {
            className: a()(l.E1, h),
            children: (0, i.jsx)(r.Ay, {
                blurAnimationData: {
                    startBlurRadius: 0,
                    endBlurRadius: 2,
                    duration: r.$G
                },
                scaleAnimationData: {
                    startScale: 1,
                    endScale: .85,
                    duration: r.$G
                },
                yAxisAnimationData: {
                    range: 20,
                    duration: r.Mp,
                    path: r.aV.COSINE
                },
                parallaxAnimationData: null != n ? {
                    pathDirection: r.MN.UP,
                    range: 50,
                    containerVisibilityPercentage: n,
                    changeOpacity: !0
                } : void 0,
                animateXAxisWiggle: !0,
                isMotionReduced: t,
                animationSpeedScale: S,
                children: (0, i.jsx)("img", {
                    src: _.A,
                    className: T,
                    alt: ""
                })
            })
        })]
    })
}