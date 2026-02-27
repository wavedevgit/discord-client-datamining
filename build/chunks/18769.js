/** chunk id: 18769, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    o = t(158954),
    n = t(653793),
    a = t(524025);
let i = e => {
    let {
        backgroundImage: l,
        logoSrc: t,
        supplementalImage: i,
        href: d,
        ctaText: c
    } = e;
    return (0, r.jsxs)("div", {
        className: a.rJ,
        children: [(0, r.jsx)(n.A, {
            overflowable: !0,
            children: (0, r.jsx)("div", {
                className: a.rf,
                style: {
                    backgroundImage: `url(${l})`
                },
                children: (0, r.jsxs)("div", {
                    className: a.kb,
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("img", {
                        className: a.wm,
                        src: t,
                        alt: ""
                    }), (0, r.jsx)(o.$nd, {
                        text: c,
                        variant: "overlay-primary"
                    })]
                })
            })
        }), null != i && (0, r.jsx)("img", {
            className: a.hP,
            src: i,
            alt: ""
        })]
    })
}