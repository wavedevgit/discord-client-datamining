/** chunk id: 784356 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(543233),
    d = n(76707),
    c = n(296388);
let u = e => {
    let {
        title: t,
        titleClassName: n,
        buttonClassName: s,
        perkImage: u,
        isCarousel: m,
        onCtaClick: _,
        perkComponent: g,
        subtitle: A,
        descriptionCta: x,
        customContent: p,
        cardVariant: h,
        subtitleClassName: T,
        imageOverlayText: E
    } = e, f = (0, o.Q)(h), S = null != E;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: l()(c.Iv, c.Gz)
        }), (0, i.jsx)(d.A, {
            title: t,
            cardVariantStyleInfo: f,
            titleClassName: n,
            subtitle: A,
            subtitleClassName: T,
            isOverlay: !1
        }), null != u && (0, i.jsxs)("div", {
            className: l()(c.V8, {
                [c.wP]: !m,
                [c.QN]: !m && !f?.perkImage?.disableHoverAnimation
            }, f?.perkImage?.className),
            children: [(0, i.jsx)("img", {
                src: u,
                alt: "",
                className: m ? S ? c.ls : c.gu : ""
            }), S ? (0, i.jsx)("div", {
                className: c.Yh,
                children: (0, i.jsx)(r.Text, {
                    className: c.nj,
                    variant: "text-md/bold",
                    children: E
                })
            }) : null]
        }), null != g && (0, i.jsxs)("div", {
            className: c.wX,
            children: [g, null != x && null != _ && (0, i.jsx)(a.$n, {
                "data-migration-pending": !0,
                className: s,
                fullWidth: !0,
                onClick: _,
                children: (0, i.jsx)("div", {
                    className: f?.descriptionCta?.className,
                    children: x
                })
            })]
        }), p]
    })
}