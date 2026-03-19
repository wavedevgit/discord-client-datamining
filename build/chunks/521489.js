/** chunk id: 521489 params = (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => h
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(497766),
    o = n(110259),
    c = n(158954),
    u = n(397927),
    d = n(97469),
    m = n(9836),
    f = n(52379);

function h(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: i,
        "aria-label": h,
        onClose: p,
        trackingProps: g,
        children: x
    } = e, _ = a.useId(), y = a.useMemo(() => ({
        id: _,
        headingId: `heading-${_}`,
        onClose: p,
        dismissable: !0
    }), [_, p]), v = (0, d.NC)(), {
        theme: b
    } = (0, u.wRf)(), A = (0, c.kSI)(t, n);
    return (0, r.jsx)(c.Vs9.Provider, {
        value: y,
        children: (0, r.jsx)(u.lGe, {
            id: _,
            role: "dialog",
            "aria-label": h,
            "aria-labelledby": null != h ? void 0 : y.headingId,
            returnRef: i,
            ...g,
            impressionType: g?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, r.jsx)(c.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: m.nw,
                    children: (0, r.jsx)(u.NPJ, {
                        theme: v,
                        children: e => (0, r.jsx)(l.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: s()(f.container, m.yl, e),
                            style: A,
                            children: (0, r.jsx)("div", {
                                className: m.jE,
                                children: (0, r.jsx)(u.NPJ, {
                                    theme: b,
                                    children: e => (0, r.jsx)("div", {
                                        className: s()(e, m.h_),
                                        children: x
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