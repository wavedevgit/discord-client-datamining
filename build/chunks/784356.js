/** Chunk was on 5606 **/
/** chunk id: 784356, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    o = n(543233),
    c = n(76707),
    d = n(296388);
let u = e => {
    var t, n, i;
    let {
        title: u,
        titleClassName: p,
        buttonClassName: _,
        perkImage: m,
        isCarousel: g,
        onCtaClick: f,
        perkComponent: b,
        subtitle: h = "",
        descriptionCta: A = "",
        customContent: E,
        cardVariant: x,
        subtitleClassName: O,
        imageOverlayText: C
    } = e, y = (0, o.Q)(x), j = null != C;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: l()(d.Iv, d.Gz)
        }), (0, r.jsx)(c.A, {
            title: u,
            shouldShowElement: e => (null == e ? void 0 : e.onlyShowOnHover) !== !0,
            cardVariantStyleInfo: y,
            titleClassName: p,
            subtitle: h,
            subtitleClassName: O
        }), null != m && (0, r.jsxs)("div", {
            className: l()(d.V8, {
                [d.wP]: !g,
                [d.QN]: !g && !(null == y || null == (t = y.perkImage) ? void 0 : t.disableHoverAnimation)
            }, null == y || null == (n = y.perkImage) ? void 0 : n.className),
            children: [(0, r.jsx)("img", {
                src: m,
                alt: "",
                className: g ? j ? d.ls : d.gu : ""
            }), j ? (0, r.jsx)("div", {
                className: d.Yh,
                children: (0, r.jsx)(a.Text, {
                    className: d.nj,
                    variant: "text-md/bold",
                    children: C
                })
            }) : null]
        }), null != b && (0, r.jsxs)("div", {
            className: d.wX,
            children: [b, 0 !== A.length && null != f && (0, r.jsx)(s.$n, {
                "data-migration-pending": !0,
                className: _,
                fullWidth: !0,
                onClick: f,
                children: (0, r.jsx)("div", {
                    className: null == y || null == (i = y.descriptionCta) ? void 0 : i.className,
                    children: A
                })
            })]
        }), E]
    })
}