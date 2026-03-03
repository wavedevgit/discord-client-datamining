/** chunk id: 18769, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => c
});
var r = t(627968),
    o = t(158954),
    n = t(53566),
    i = t(506456),
    a = t(653793),
    d = t(524025);
let c = e => {
    let {
        backgroundImage: l,
        logoSrc: t,
        supplementalImage: c,
        href: s,
        ctaText: u
    } = e, h = (0, i.A)(l.src), p = (0, i.A)(t?.src), m = (0, i.A)(c?.src), _ = (0, n.S)(u ?? "");
    return (0, r.jsxs)("div", {
        className: d.rJ,
        children: [(0, r.jsx)(a.A, {
            overflowable: !0,
            children: (0, r.jsx)("div", {
                className: d.rf,
                style: {
                    backgroundImage: `url(${h})`
                },
                children: (0, r.jsxs)("div", {
                    className: d.kb,
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("img", {
                        className: d.wm,
                        src: p,
                        alt: t?.alt ?? ""
                    }), (0, r.jsx)(o.$nd, {
                        text: _,
                        variant: "overlay-primary"
                    })]
                })
            })
        }), null != m && (0, r.jsx)("img", {
            className: d.hP,
            src: m,
            alt: c?.alt ?? ""
        })]
    })
}