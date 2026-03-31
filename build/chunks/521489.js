/** chunk id: 521489 params = (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(382222),
    o = n(110259),
    c = n(158954),
    u = n(397927),
    d = n(97469),
    h = n(766383),
    m = n(277355);

function f(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: a,
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
    } = (0, u.wRf)(), A = (0, c.kSI)(t, n);
    return (0, r.jsx)(c.Vs9.Provider, {
        value: g,
        children: (0, r.jsx)(u.lGe, {
            id: y,
            role: "dialog",
            "aria-label": f,
            "aria-labelledby": null != f ? void 0 : g.headingId,
            returnRef: a,
            ..._,
            impressionType: _?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, r.jsx)(c.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: h.nw,
                    children: (0, r.jsx)(u.NPJ, {
                        theme: x,
                        children: e => (0, r.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: l()(m.container, h.yl, e),
                            style: A,
                            children: (0, r.jsx)("div", {
                                className: h.jE,
                                children: (0, r.jsx)(u.NPJ, {
                                    theme: E,
                                    children: e => (0, r.jsx)("div", {
                                        className: l()(e, h.h_),
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