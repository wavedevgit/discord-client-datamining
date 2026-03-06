/** chunk id: 521489 params = (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => m
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(380278),
    o = n(110259),
    u = n(158954),
    c = n(397927),
    d = n(97469),
    h = n(9836),
    f = n(52379);

function m(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: a,
        "aria-label": m,
        onClose: g,
        trackingProps: v,
        children: p
    } = e, y = i.useId(), x = i.useMemo(() => ({
        id: y,
        headingId: `heading-${y}`,
        onClose: g,
        dismissable: !0
    }), [y, g]), _ = (0, d.NC)(), {
        theme: b
    } = (0, c.wRf)(), j = (0, u.kSI)(t, n);
    return (0, r.jsx)(u.Vs9.Provider, {
        value: x,
        children: (0, r.jsx)(c.lGe, {
            id: y,
            role: "dialog",
            "aria-label": m,
            "aria-labelledby": null != m ? void 0 : x.headingId,
            returnRef: a,
            ...v,
            impressionType: v?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: h.nw,
                    children: (0, r.jsx)(c.NPJ, {
                        theme: _,
                        children: e => (0, r.jsx)(s.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: l()(f.container, h.yl, e),
                            style: j,
                            children: (0, r.jsx)("div", {
                                className: h.jE,
                                children: (0, r.jsx)(c.NPJ, {
                                    theme: b,
                                    children: e => (0, r.jsx)("div", {
                                        className: l()(e, h.h_),
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