/** chunk id: 521489 params = (module,exports,require) **/
n.d(t, {
    N: () => h
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(517738),
    o = n(110259),
    c = n(158954),
    d = n(397927),
    u = n(97469),
    m = n(382450),
    f = n(967744);

function h(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: i,
        "aria-label": h,
        onClose: x,
        trackingProps: g,
        children: p
    } = e, _ = a.useId(), v = a.useMemo(() => ({
        id: _,
        headingId: `heading-${_}`,
        onClose: x,
        dismissable: !0
    }), [_, x]), A = (0, u.NC)(), {
        theme: b
    } = (0, d.wRf)(), E = (0, c.kSI)(t, n);
    return (0, l.jsx)(c.Vs9.Provider, {
        value: v,
        children: (0, l.jsx)(d.lGe, {
            id: _,
            role: "dialog",
            "aria-label": h,
            "aria-labelledby": null != h ? void 0 : v.headingId,
            returnRef: i,
            ...g,
            impressionType: g?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, l.jsx)(c.Fmo, {
                forceLevel: 1,
                children: (0, l.jsx)("div", {
                    className: m.nw,
                    children: (0, l.jsx)(d.NPJ, {
                        theme: A,
                        children: e => (0, l.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: r()(f.container, m.yl, e),
                            style: E,
                            children: (0, l.jsx)("div", {
                                className: m.jE,
                                children: (0, l.jsx)(d.NPJ, {
                                    theme: b,
                                    children: e => (0, l.jsx)("div", {
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