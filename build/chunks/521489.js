/** chunk id: 521489 params = (module,exports,require) **/
n.d(t, {
    N: () => x
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(407045),
    o = n(110259),
    c = n(158954),
    d = n(397927),
    u = n(97469),
    m = n(382450),
    f = n(967744);

function x(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: i,
        "aria-label": x,
        onClose: h,
        trackingProps: g,
        children: p
    } = e, _ = l.useId(), v = l.useMemo(() => ({
        id: _,
        headingId: `heading-${_}`,
        onClose: h,
        dismissable: !0
    }), [_, h]), A = (0, u.NC)(), {
        theme: b
    } = (0, d.wRf)(), E = (0, c.kSI)(t, n);
    return (0, a.jsx)(c.Vs9.Provider, {
        value: v,
        children: (0, a.jsx)(d.lGe, {
            id: _,
            role: "dialog",
            "aria-label": x,
            "aria-labelledby": null != x ? void 0 : v.headingId,
            returnRef: i,
            ...g,
            impressionType: g?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, a.jsx)(c.Fmo, {
                forceLevel: 1,
                children: (0, a.jsx)("div", {
                    className: m.nw,
                    children: (0, a.jsx)(d.NPJ, {
                        theme: A,
                        children: e => (0, a.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: r()(f.container, m.yl, e),
                            style: E,
                            children: (0, a.jsx)("div", {
                                className: m.jE,
                                children: (0, a.jsx)(d.NPJ, {
                                    theme: b,
                                    children: e => (0, a.jsx)("div", {
                                        className: r()(e, m.h_),
                                        children: p
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}