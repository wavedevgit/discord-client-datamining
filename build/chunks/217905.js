/** chunk id: 217905 params = (module,exports,require) **/
l.d(e, {
    F: () => i
});
var n = l(627968);
l(64700);
var s = l(855522),
    r = l(158954),
    a = l(744114);

function i(t) {
    let {
        benefits: e,
        description: l,
        imgSrc: i,
        title: o,
        tag: c,
        FallbackIcon: d
    } = t, u = null != i ? {
        "--custom-background-url": `url(${i.toString()})`
    } : void 0;
    return (0, n.jsxs)("div", {
        className: a.kL,
        children: [(0, n.jsxs)("div", {
            className: a.wx,
            children: [(0, n.jsx)("div", {
                className: a.y2,
                style: u
            }), (0, n.jsx)("div", {
                className: a.F0,
                children: null != i ? (0, n.jsx)("img", {
                    src: i.toString(),
                    alt: ""
                }) : (0, n.jsx)(d, {
                    size: "custom",
                    color: "var(--text-muted)",
                    height: 96,
                    width: 96
                })
            })]
        }), (0, n.jsxs)("div", {
            className: a.Qs,
            children: [(0, n.jsxs)("div", {
                className: a.zH,
                children: [null != c && (0, n.jsx)("div", {
                    children: c
                }), (0, n.jsx)(r.DZT, {
                    color: "text-strong",
                    variant: "heading-xl/semibold",
                    children: o
                }), null != l && "" !== l && (0, n.jsx)(r.EYj, {
                    color: "text-default",
                    variant: "text-md/normal",
                    className: a.h_,
                    children: l
                })]
            }), null != e && (0, n.jsxs)("div", {
                className: a.PX,
                children: [(0, n.jsx)(r.EYj, {
                    color: "text-default",
                    variant: "eyebrow",
                    children: s.A.Messages.STOREFRONT_BENEFITS_TITLE
                }), e]
            })]
        })]
    })
}