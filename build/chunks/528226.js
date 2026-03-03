/** chunk id: 528226, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968);
t(64700);
var o = t(506456),
    n = t(988064);
let i = e => {
    let {
        bannerSrc: l,
        logoSrc: t,
        backgroundColor: i,
        children: a
    } = e, d = (0, o.A)(l.src), c = (0, o.A)(t?.src);
    return (0, r.jsxs)("div", {
        className: n.ZK,
        style: {
            backgroundImage: `url(${d})`,
            backgroundColor: i
        },
        children: [null != c && (0, r.jsx)("img", {
            src: c,
            alt: t?.alt ?? "",
            className: n.wm
        }), null != a && (0, r.jsx)("div", {
            className: n.Y_,
            children: a
        })]
    })
}