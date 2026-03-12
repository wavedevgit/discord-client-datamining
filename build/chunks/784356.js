/** chunk id: 784356 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(421380),
    a = n(397927),
    o = n(543233),
    d = n(76707),
    c = n(538662);
let u = e => {
    let {
        title: t,
        titleClassName: n,
        buttonClassName: s,
        perkImage: u,
        isCarousel: _,
        onCtaClick: m,
        perkComponent: g,
        subtitle: A,
        descriptionCta: h,
        customContent: x,
        cardVariant: p,
        subtitleClassName: T,
        imageOverlayText: E
    } = e, C = (0, o.Q)(p), S = null != E;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: l()(c.Iv, c.Gz)
        }), (0, i.jsx)(d.A, {
            title: t,
            cardVariantStyleInfo: C,
            titleClassName: n,
            subtitle: A,
            subtitleClassName: T,
            isOverlay: !1
        }), null != u && (0, i.jsxs)("div", {
            className: l()(c.V8, {
                [c.wP]: !_,
                [c.QN]: !_ && !C?.perkImage?.disableHoverAnimation
            }, C?.perkImage?.className),
            children: [(0, i.jsx)("img", {
                src: u,
                alt: "",
                className: _ ? S ? c.ls : c.gu : ""
            }), S ? (0, i.jsx)("div", {
                className: c.Yh,
                children: (0, i.jsx)(a.Text, {
                    className: c.nj,
                    variant: "text-md/bold",
                    children: E
                })
            }) : null]
        }), null != g && (0, i.jsxs)("div", {
            className: c.wX,
            children: [g, null != h && null != m && (0, i.jsx)(r.$n, {
                "data-migration-pending": !0,
                className: s,
                fullWidth: !0,
                onClick: m,
                children: (0, i.jsx)("div", {
                    className: C?.descriptionCta?.className,
                    children: h
                })
            })]
        }), x]
    })
}