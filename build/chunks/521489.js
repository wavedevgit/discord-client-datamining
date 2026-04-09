/** chunk id: 521489 params = (module,exports,require) **/
n.d(t, {
    N: () => g
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(687498),
    o = n(110259),
    c = n(158954),
    d = n(397927),
    u = n(97469),
    m = n(766383),
    x = n(277355);

function g(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: l,
        "aria-label": g,
        onClose: h,
        trackingProps: f,
        children: _
    } = e, p = i.useId(), v = i.useMemo(() => ({
        id: p,
        headingId: `heading-${p}`,
        onClose: h,
        dismissable: !0
    }), [p, h]), A = (0, u.NC)(), {
        theme: j
    } = (0, d.wRf)(), E = (0, c.kSI)(t, n);
    return (0, a.jsx)(c.Vs9.Provider, {
        value: v,
        children: (0, a.jsx)(d.lGe, {
            id: p,
            role: "dialog",
            "aria-label": g,
            "aria-labelledby": null != g ? void 0 : v.headingId,
            returnRef: l,
            ...f,
            impressionType: f?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, a.jsx)(c.Fmo, {
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