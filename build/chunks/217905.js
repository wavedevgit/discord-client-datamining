/** Chunk was on 70104 **/
/** chunk id: 217905, original params: t,e,r (module,exports,require) **/
r.d(e, {
    F: () => a
}), r(228524);
var n = r(627968);
r(64700);
var l = r(855522),
    s = r(158954),
    i = r(183377);

function a(t) {
    let {
        benefits: e,
        description: r,
        imgSrc: a,
        title: o,
        tag: c,
        FallbackIcon: d
    } = t, u = null != a ? {
        "--custom-background-url": "url(".concat(a.toString(), ")")
    } : void 0;
    return (0, n.jsxs)("div", {
        className: i.kL,
        children: [(0, n.jsxs)("div", {
            className: i.wx,
            children: [(0, n.jsx)("div", {
                className: i.y2,
                style: u
            }), (0, n.jsx)("div", {
                className: i.F0,
                children: null != a ? (0, n.jsx)("img", {
                    src: a.toString(),
                    alt: ""
                }) : (0, n.jsx)(d, {
                    size: "custom",
                    color: "var(--text-muted)",
                    height: 96,
                    width: 96
                })
            })]
        }), (0, n.jsxs)("div", {
            className: i.Qs,
            children: [(0, n.jsxs)("div", {
                className: i.zH,
                children: [null != c && (0, n.jsx)("div", {
                    children: c
                }), (0, n.jsx)(s.DZT, {
                    color: "text-strong",
                    variant: "heading-xl/semibold",
                    children: o
                }), null != r && "" !== r && (0, n.jsx)(s.EYj, {
                    color: "text-default",
                    variant: "text-md/normal",
                    className: i.h_,
                    children: r
                })]
            }), null != e && (0, n.jsxs)("div", {
                className: i.PX,
                children: [(0, n.jsx)(s.EYj, {
                    color: "text-default",
                    variant: "eyebrow",
                    children: l.A.Messages.STOREFRONT_BENEFITS_TITLE
                }), e]
            })]
        })]
    })
}