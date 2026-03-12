/** chunk id: 528226 params = (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(627968);
t(64700);
var n = t(506456),
    o = t(458306),
    i = t(350698);
let a = e => {
    let {
        bannerSrc: l,
        logoSrc: t,
        backgroundColor: a,
        href: s,
        children: d
    } = e, c = (0, n.A)(l.src), u = (0, n.A)(t?.src);
    return (0, r.jsxs)("div", {
        className: i.ZK,
        style: {
            backgroundImage: `url(${c})`,
            backgroundColor: a
        },
        children: [(0, r.jsxs)("div", {
            className: i.VW,
            children: [null != u && (0, r.jsx)("img", {
                src: u,
                alt: t?.alt ?? "",
                className: i.wm
            }), null != s && (0, r.jsx)(o.ar, {
                variant: "overlay-primary",
                href: s,
                ctaText: "COLLECTIBLES_SHOP_THE_COLLECTION"
            })]
        }), null != d && (0, r.jsx)("div", {
            className: i.Y_,
            children: d
        })]
    })
}