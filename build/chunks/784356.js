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
        onCtaClick: m,
        perkComponent: g,
        subtitle: A,
        descriptionCta: x,
        customContent: h,
        cardVariant: p,
        subtitleClassName: T,
        imageOverlayText: E
    } = e, S = (0, o.Q)(p), C = null != E;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: l()(c.Iv, c.Gz)
        }), (0, i.jsx)(d.A, {
            title: t,
            cardVariantStyleInfo: S,
            titleClassName: n,
            subtitle: A,
            subtitleClassName: T,
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
                    children: E
                })
            }) : null]
        }), null != g && (0, i.jsxs)("div", {
            className: c.wX,
            children: [g, null != x && null != m && (0, i.jsx)(a.$n, {
                "data-migration-pending": !0,
                className: s,
                fullWidth: !0,
                onClick: m,
                children: (0, i.jsx)("div", {
                    className: S?.descriptionCta?.className,
                    children: x
                })
            })]
        }), h]
    })
}