/** Chunk was on 2827 **/
/** chunk id: 596513, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    i = n(607470),
    l = n(608416),
    s = n(48415),
    a = n(592151),
    o = n(844738);
let c = e => {
    let {
        supportHEVCAlpha: t,
        isMotionReduced: n,
        containerVisibilityPercentage: c,
        containerClassName: d,
        assetClassName: u
    } = e;
    return n ? (0, r.jsx)("div", {
        className: d,
        children: (0, r.jsx)("img", {
            src: o.A,
            alt: "",
            className: u
        })
    }) : (0, r.jsx)("div", {
        className: d,
        children: (0, r.jsx)(l.Ay, {
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
                containerVisibilityPercentage: c,
                changeOpacity: !1
            },
            animateXAxisWiggle: !0,
            children: t ? (0, r.jsx)("img", {
                src: s.A,
                alt: "",
                className: u
            }) : (0, r.jsx)(i.A, {
                muted: !0,
                autoPlay: !0,
                playsInline: !0,
                loop: !0,
                className: u,
                children: (0, r.jsx)("source", {
                    src: a.A
                })
            }, a.A)
        })
    })
}