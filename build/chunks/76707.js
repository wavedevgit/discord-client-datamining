/** chunk id: 76707 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(538662);
let o = e => {
    let {
        title: t,
        cardVariantStyleInfo: n,
        description: s,
        titleClassName: o,
        subtitle: d,
        subtitleClassName: c,
        isOverlay: u
    } = e, _ = null != d && !(u && n?.subtitle?.hideOnOverlay === !0), m = null != s;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.Heading, {
            variant: "heading-xl/extrabold",
            className: l()(a.Jf, o),
            children: t
        }), (_ || m) && (0, i.jsxs)("div", {
            className: c,
            children: [_ && (0, i.jsx)(r.Text, {
                variant: n?.subtitle?.textVariant ?? "text-sm/normal",
                children: d
            }), m && (0, i.jsxs)(r.Text, {
                variant: n?.description?.textVariant ?? "text-sm/normal",
                children: [_ && (0, i.jsx)("br", {}), s]
            })]
        })]
    })
}