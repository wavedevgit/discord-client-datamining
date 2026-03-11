/** chunk id: 521489 params = (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => g
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(490249),
    o = n(110259),
    c = n(158954),
    u = n(397927),
    d = n(97469),
    m = n(538029),
    f = n(22789);

function g(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: a,
        "aria-label": g,
        onClose: h,
        trackingProps: p,
        children: y
    } = e, _ = i.useId(), x = i.useMemo(() => ({
        id: _,
        headingId: `heading-${_}`,
        onClose: h,
        dismissable: !0
    }), [_, h]), v = (0, d.NC)(), {
        theme: b
    } = (0, u.wRf)(), A = (0, c.kSI)(t, n);
    return (0, r.jsx)(c.Vs9.Provider, {
        value: x,
        children: (0, r.jsx)(u.lGe, {
            id: _,
            role: "dialog",
            "aria-label": g,
            "aria-labelledby": null != g ? void 0 : x.headingId,
            returnRef: a,
            ...p,
            impressionType: p?.impressionType ?? o.ImpressionTypes.MODAL,
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
                                        children: y
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