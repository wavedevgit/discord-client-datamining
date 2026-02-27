/** chunk id: 18769, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => n
});
var r = l(627968),
    a = l(158954),
    d = l(653793),
    c = l(524025);
let n = e => {
    let {
        backgroundImage: t,
        logoSrc: l,
        supplementalImage: n,
        href: o,
        ctaText: s
    } = e;
    return (0, r.jsxs)("div", {
        className: c.rJ,
        children: [(0, r.jsx)(d.A, {
            overflowable: !0,
            children: (0, r.jsx)("div", {
                className: c.rf,
                style: {
                    backgroundImage: `url(${t})`
                },
                children: (0, r.jsxs)("div", {
                    className: c.kb,
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("img", {
                        className: c.wm,
                        src: l,
                        alt: ""
                    }), (0, r.jsx)(a.$nd, {
                        text: s,
                        variant: "overlay-primary"
                    })]
                })
            })
        }), null != n && (0, r.jsx)("img", {
            className: c.hP,
            src: n,
            alt: ""
        })]
    })
}