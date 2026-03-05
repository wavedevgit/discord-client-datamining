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
    c = n(538662);
let u = e => {
    let {
        title: t,
        titleClassName: n,
        buttonClassName: s,
        perkImage: u,
        isCarousel: _,
        onCtaClick: g,
        perkComponent: m,
        subtitle: A,
        descriptionCta: h,
        customContent: p,
        cardVariant: x,
        subtitleClassName: E,
        imageOverlayText: T
    } = e, S = (0, o.Q)(x), C = null != T;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: l()(c.Iv, c.Gz)
        }), (0, i.jsx)(d.A, {
            title: t,
            cardVariantStyleInfo: S,
            titleClassName: n,
            subtitle: A,
            subtitleClassName: E,
            isOverlay: !1
        }), null != u && (0, i.jsxs)("div", {
            className: l()(c.V8, {
                [c.wP]: !_,
                [c.QN]: !_ && !S?.perkImage?.disableHoverAnimation
            }, S?.perkImage?.className),
            children: [(0, i.jsx)("img", {
                src: u,
                alt: "",
                className: _ ? C ? c.ls : c.gu : ""
            }), C ? (0, i.jsx)("div", {
                className: c.Yh,
                children: (0, i.jsx)(r.Text, {
                    className: c.nj,
                    variant: "text-md/bold",
                    children: T
                })
            }) : null]
        }), null != m && (0, i.jsxs)("div", {
            className: c.wX,
            children: [m, null != h && null != g && (0, i.jsx)(a.$n, {
                "data-migration-pending": !0,
                className: s,
                fullWidth: !0,
                onClick: g,
                children: (0, i.jsx)("div", {
                    className: S?.descriptionCta?.className,
                    children: h
                })
            })]
        }), p]
    })
}