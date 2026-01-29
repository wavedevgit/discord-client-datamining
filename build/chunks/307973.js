/** Chunk was on 2827 **/
/** chunk id: 307973, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(608416),
    a = n(285637),
    o = n(194225),
    c = n(104400),
    d = n(737968),
    u = n(275869),
    _ = n(979250);
let p = e => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: i,
        carContainerClassName: p,
        hammerContainerClassName: m,
        keyContainerClassName: g,
        starContainerClassName: A,
        boltAssetClassName: f,
        carAssetClassName: b,
        hammerAssetClassName: h,
        keyAssetClassName: E,
        starAssetClassName: O,
        animationSpeedScale: C = 1
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [null != i && (0, r.jsx)("div", {
            className: l()(a.nJ, i),
            children: (0, r.jsx)(s.Ay, {
                blurAnimationData: {
                    startBlurRadius: 10,
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
                children: (0, r.jsx)("img", {
                    src: o.A,
                    className: f,
                    alt: ""
                })
            })
        }), null != p && (0, r.jsx)("div", {
            className: l()(a.IN, p),
            children: (0, r.jsx)(s.Ay, {
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
                children: (0, r.jsx)("img", {
                    src: c.A,
                    className: b,
                    alt: ""
                })
            })
        }), null != m && (0, r.jsx)("div", {
            className: l()(a.Gj, m),
            children: (0, r.jsx)(s.Ay, {
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
                children: (0, r.jsx)("img", {
                    src: d.A,
                    className: h,
                    alt: ""
                })
            })
        }), null != g && (0, r.jsx)("div", {
            className: l()(a.FV, g),
            children: (0, r.jsx)(s.Ay, {
                blurAnimationData: {
                    startBlurRadius: 5,
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
                children: (0, r.jsx)("img", {
                    src: u.A,
                    className: E,
                    alt: ""
                })
            })
        }), null != A && (0, r.jsx)("div", {
            className: l()(a.E1, A),
            children: (0, r.jsx)(s.Ay, {
                blurAnimationData: {
                    startBlurRadius: 0,
                    endBlurRadius: 2,
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
                children: (0, r.jsx)("img", {
                    src: _.A,
                    className: O,
                    alt: ""
                })
            })
        })]
    })
}