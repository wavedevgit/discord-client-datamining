/** chunk id: 18769 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(627968),
    n = t(506456),
    o = t(653793),
    i = t(458306),
    a = t(524025);
let s = e => {
    let {
        backgroundImage: l,
        logoSrc: t,
        supplementalImage: s,
        href: d,
        ctaText: c
    } = e, u = (0, n.A)(l.src), h = (0, n.A)(t?.src), m = (0, n.A)(s?.src);
    return (0, r.jsxs)("div", {
        className: a.rJ,
        children: [(0, r.jsx)(o.A, {
            overflowable: !0,
            children: (0, r.jsx)("div", {
                className: a.rf,
                style: {
                    backgroundImage: `url(${u})`
                },
                children: (0, r.jsxs)("div", {
                    className: a.kb,
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("img", {
                        className: a.wm,
                        src: h,
                        alt: t?.alt ?? ""
                    }), null != c && (0, r.jsx)(i.ar, {
                        ctaText: c,
                        variant: "overlay-primary",
                        href: d
                    })]
                })
            })
        }), null != m && (0, r.jsx)("img", {
            className: a.hP,
            src: m,
            alt: s?.alt ?? ""
        })]
    })
}