/** Chunk was on 2827 **/
/** chunk id: 76707, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(296388);
let o = e => {
    var t, n, i, o;
    let {
        title: c,
        shouldShowElement: d,
        cardVariantStyleInfo: u,
        description: _,
        titleClassName: p = "",
        subtitle: m = "",
        subtitleClassName: g
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Heading, {
            variant: "heading-xl/extrabold",
            className: l()(a.Jf, p),
            children: c
        }), "" !== m && (null == d || d(null == u ? void 0 : u.subtitle)) && (0, r.jsxs)("div", {
            className: g,
            children: [(0, r.jsx)(s.Text, {
                variant: null != (t = null == u || null == (i = u.subtitle) ? void 0 : i.textVariant) ? t : "text-sm/normal",
                children: m
            }), null != _ && (0, r.jsx)(s.Text, {
                variant: null != (n = null == u || null == (o = u.description) ? void 0 : o.textVariant) ? n : "text-sm/normal",
                children: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("br", {}), _]
                })
            })]
        })]
    })
}