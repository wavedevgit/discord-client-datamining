/** chunk id: 217905 params = (module,exports,require) **/
l.d(e, {
    F: () => a
});
var s = l(627968);
l(64700);
var r = l(855522),
    n = l(158954),
    i = l(485967);

function a(t) {
    let {
        benefits: e,
        description: l,
        imgSrc: a,
        title: o,
        tag: c,
        FallbackIcon: d
    } = t, x = null != a ? {
        "--custom-background-url": `url(${a.toString()})`
    } : void 0;
    return (0, s.jsxs)("div", {
        className: i.kL,
        children: [(0, s.jsxs)("div", {
            className: i.wx,
            children: [(0, s.jsx)("div", {
                className: i.y2,
                style: x
            }), (0, s.jsx)("div", {
                className: i.F0,
                children: null != a ? (0, s.jsx)("img", {
                    src: a.toString(),
                    alt: ""
                }) : (0, s.jsx)(d, {
                    size: "custom",
                    color: "var(--text-muted)",
                    height: 96,
                    width: 96
                })
            })]
        }), (0, s.jsxs)("div", {
            className: i.Qs,
            children: [(0, s.jsxs)("div", {
                className: i.zH,
                children: [null != c && (0, s.jsx)("div", {
                    children: c
                }), (0, s.jsx)(n.DZT, {
                    color: "text-strong",
                    variant: "heading-xl/semibold",
                    children: o
                }), null != l && "" !== l && (0, s.jsx)(n.EYj, {
                    color: "text-default",
                    variant: "text-md/normal",
                    className: i.h_,
                    children: l
                })]
            }), null != e && (0, s.jsxs)("div", {
                className: i.PX,
                children: [(0, s.jsx)(n.EYj, {
                    color: "text-default",
                    variant: "eyebrow",
                    children: r.A.Messages.STOREFRONT_BENEFITS_TITLE
                }), e]
            })]
        })]
    })
}