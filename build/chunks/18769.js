/** chunk id: 18769 params = (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(627968),
    o = t(506456),
    n = t(653793),
    a = t(458306),
    i = t(524025);
let d = e => {
    let {
        backgroundImage: l,
        logoSrc: t,
        supplementalImage: d,
        href: s,
        ctaText: c
    } = e, u = (0, o.A)(l.src), h = (0, o.A)(t?.src), p = (0, o.A)(d?.src);
    return (0, r.jsxs)("div", {
        className: i.rJ,
        children: [(0, r.jsx)(n.A, {
            overflowable: !0,
            children: (0, r.jsx)("div", {
                className: i.rf,
                style: {
                    backgroundImage: `url(${u})`
                },
                children: (0, r.jsxs)("div", {
                    className: i.kb,
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("img", {
                        className: i.wm,
                        src: h,
                        alt: t?.alt ?? ""
                    }), null != c && (0, r.jsx)(a.ar, {
                        ctaText: c,
                        variant: "overlay-primary",
                        href: s
                    })]
                })
            })
        }), null != p && (0, r.jsx)("img", {
            className: i.hP,
            src: p,
            alt: d?.alt ?? ""
        })]
    })
}