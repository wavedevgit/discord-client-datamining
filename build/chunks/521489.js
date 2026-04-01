/** chunk id: 521489 params = (module,exports,require) **/
n.d(t, {
    N: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(773690),
    c = n(110259),
    o = n(158954),
    d = n(397927),
    u = n(97469),
    m = n(783842),
    x = n(110992);

function h(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: i,
        "aria-label": h,
        onClose: g,
        trackingProps: f,
        children: _
    } = e, p = l.useId(), v = l.useMemo(() => ({
        id: p,
        headingId: `heading-${p}`,
        onClose: g,
        dismissable: !0
    }), [p, g]), A = (0, u.NC)(), {
        theme: j
    } = (0, d.wRf)(), E = (0, o.kSI)(t, n);
    return (0, a.jsx)(o.Vs9.Provider, {
        value: v,
        children: (0, a.jsx)(d.lGe, {
            id: p,
            role: "dialog",
            "aria-label": h,
            "aria-labelledby": null != h ? void 0 : v.headingId,
            returnRef: i,
            ...f,
            impressionType: f?.impressionType ?? c.ImpressionTypes.MODAL,
            children: (0, a.jsx)(o.Fmo, {
                forceLevel: 1,
                children: (0, a.jsx)("div", {
                    className: m.nw,
                    children: (0, a.jsx)(d.NPJ, {
                        theme: A,
                        children: e => (0, a.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: r()(x.container, m.yl, e),
                            style: E,
                            children: (0, a.jsx)("div", {
                                className: m.jE,
                                children: (0, a.jsx)(d.NPJ, {
                                    theme: j,
                                    children: e => (0, a.jsx)("div", {
                                        className: r()(e, m.h_),
                                        children: _
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