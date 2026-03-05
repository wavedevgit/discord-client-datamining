/** chunk id: 229289, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(417597),
    l = n(775602),
    a = n(608416),
    r = n(307973),
    o = n(369877),
    d = n(180894);
let c = e => {
    let {
        containerVisibilityPercentage: t
    } = e, n = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: o.BI,
            children: (0, i.jsx)(a.Ay, {
                scaleAnimationData: {
                    startScale: .9,
                    endScale: 1,
                    duration: a.$G
                },
                yAxisAnimationData: {
                    range: 20,
                    duration: a.Mp,
                    path: a.aV.SINE
                },
                animateXAxisWiggle: !0,
                isMotionReduced: n,
                parallaxAnimationData: {
                    pathDirection: a.MN.UP,
                    range: 125,
                    containerVisibilityPercentage: t,
                    changeOpacity: !0
                },
                animationSpeedScale: 2,
                children: (0, i.jsx)("img", {
                    src: d.A,
                    alt: "",
                    className: o.Q
                })
            })
        }), (0, i.jsx)(r.A, {
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