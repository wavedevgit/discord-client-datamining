/** chunk id: 229289 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    r = n(417597),
    a = n(775602),
    s = n(608416),
    l = n(307973),
    c = n(968548),
    o = n(180894);
let d = e => {
    let {
        containerVisibilityPercentage: t
    } = e, n = (0, r.bG)([a.A], () => a.A.useReducedMotion);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: c.BI,
            children: (0, i.jsx)(s.Ay, {
                scaleAnimationData: {
                    startScale: .9,
                    endScale: 1,
                    duration: s.$G
                },
                yAxisAnimationData: {
                    range: 20,
                    duration: s.Mp,
                    path: s.aV.SINE
                },
                animateXAxisWiggle: !0,
                isMotionReduced: n,
                parallaxAnimationData: {
                    pathDirection: s.MN.UP,
                    range: 125,
                    containerVisibilityPercentage: t,
                    changeOpacity: !0
                },
                animationSpeedScale: 2,
                children: (0, i.jsx)("img", {
                    src: o.A,
                    alt: "",
                    className: c.Q
                })
            })
        }), (0, i.jsx)(l.A, {
            isMotionReduced: n,
            containerVisibilityPercentage: t,
            hammerContainerClassName: c.Gj,
            keyContainerClassName: c.FV,
            starContainerClassName: c.E1,
            hammerAssetClassName: c.Wv,
            keyAssetClassName: c.rs,
            starAssetClassName: c.OY,
            animationSpeedScale: 2
        })]
    })
}