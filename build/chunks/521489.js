/** chunk id: 521489 params = (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(497766),
    o = n(110259),
    c = n(158954),
    u = n(397927),
    d = n(97469),
    h = n(9836),
    _ = n(52379);

function f(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: a,
        "aria-label": f,
        onClose: m,
        trackingProps: p,
        children: b
    } = e, g = i.useId(), y = i.useMemo(() => ({
        id: g,
        headingId: `heading-${g}`,
        onClose: m,
        dismissable: !0
    }), [g, m]), v = (0, d.NC)(), {
        theme: x
    } = (0, u.wRf)(), E = (0, c.kSI)(t, n);
    return (0, r.jsx)(c.Vs9.Provider, {
        value: y,
        children: (0, r.jsx)(u.lGe, {
            id: g,
            role: "dialog",
            "aria-label": f,
            "aria-labelledby": null != f ? void 0 : y.headingId,
            returnRef: a,
            ...p,
            impressionType: p?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, r.jsx)(c.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: h.nw,
                    children: (0, r.jsx)(u.NPJ, {
                        theme: v,
                        children: e => (0, r.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: l()(_.container, h.yl, e),
                            style: E,
                            children: (0, r.jsx)("div", {
                                className: h.jE,
                                children: (0, r.jsx)(u.NPJ, {
                                    theme: x,
                                    children: e => (0, r.jsx)("div", {
                                        className: l()(e, h.h_),
                                        children: b
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