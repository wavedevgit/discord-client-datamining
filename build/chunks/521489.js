/** chunk id: 521489 params = (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(382222),
    o = n(110259),
    u = n(158954),
    c = n(397927),
    d = n(97469),
    h = n(766383),
    m = n(277355);

function f(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: l,
        "aria-label": f,
        onClose: p,
        trackingProps: _,
        children: v
    } = e, y = i.useId(), g = i.useMemo(() => ({
        id: y,
        headingId: `heading-${y}`,
        onClose: p,
        dismissable: !0
    }), [y, p]), x = (0, d.NC)(), {
        theme: E
    } = (0, c.wRf)(), A = (0, u.kSI)(t, n);
    return (0, r.jsx)(u.Vs9.Provider, {
        value: g,
        children: (0, r.jsx)(c.lGe, {
            id: y,
            role: "dialog",
            "aria-label": f,
            "aria-labelledby": null != f ? void 0 : g.headingId,
            returnRef: l,
            ..._,
            impressionType: _?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: h.nw,
                    children: (0, r.jsx)(c.NPJ, {
                        theme: x,
                        children: e => (0, r.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: a()(m.container, h.yl, e),
                            style: A,
                            children: (0, r.jsx)("div", {
                                className: h.jE,
                                children: (0, r.jsx)(c.NPJ, {
                                    theme: E,
                                    children: e => (0, r.jsx)("div", {
                                        className: a()(e, h.h_),
                                        children: v
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