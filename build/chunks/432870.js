/** chunk id: 432870 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(607470),
    l = n(608416),
    a = n(48415),
    r = n(592151),
    o = n(844738);
let d = e => {
    let {
        supportHEVCAlpha: t,
        isMotionReduced: n,
        containerVisibilityPercentage: d,
        containerClassName: c,
        assetClassName: u
    } = e;
    return n ? (0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)("img", {
            src: o.A,
            alt: "",
            className: u
        })
    }) : (0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)(l.Ay, {
            scaleAnimationData: {
                startScale: .9,
                endScale: 1,
                duration: l.$G
            },
            yAxisAnimationData: {
                range: 20,
                duration: l.Mp,
                path: l.aV.SINE
            },
            parallaxAnimationData: {
                pathDirection: l.MN.UP,
                range: 200,
                containerVisibilityPercentage: d,
                changeOpacity: !1
            },
            animateXAxisWiggle: !0,
            children: t ? (0, i.jsx)("img", {
                src: a.A,
                alt: "",
                className: u
            }) : (0, i.jsx)(s.A, {
                muted: !0,
                autoPlay: !0,
                playsInline: !0,
                loop: !0,
                className: u,
                children: (0, i.jsx)("source", {
                    src: r.A
                })
            }, r.A)
        })
    })
}