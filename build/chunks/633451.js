/** chunk id: 633451, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(417597),
    l = n(775602),
    s = n(608416),
    a = n(307973),
    o = n(660595),
    c = n(180894);
let d = e => {
    let {
        containerVisibilityPercentage: t
    } = e, n = (0, i.bG)([l.A], () => l.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: o.BI,
            children: (0, r.jsx)(s.Ay, {
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
                children: (0, r.jsx)("img", {
                    src: c.A,
                    alt: "",
                    className: o.Q
                })
            })
        }), (0, r.jsx)(a.A, {
            isMotionReduced: n,
            containerVisibilityPercentage: t,
            hammerContainerClassName: o.Gj,
            keyContainerClassName: o.FV,
            starContainerClassName: o.E1,
            hammerAssetClassName: o.Wv,
            keyAssetClassName: o.rs,
            starAssetClassName: o.OY,
            animationSpeedScale: 2
        })]
    })
}