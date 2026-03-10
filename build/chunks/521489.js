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
    u = n(158954),
    c = n(397927),
    d = n(97469),
    f = n(538029),
    m = n(22789);

function g(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        returnRef: a,
        "aria-label": g,
        onClose: h,
        trackingProps: y,
        children: p
    } = e, v = i.useId(), x = i.useMemo(() => ({
        id: v,
        headingId: `heading-${v}`,
        onClose: h,
        dismissable: !0
    }), [v, h]), b = (0, d.NC)(), {
        theme: A
    } = (0, c.wRf)(), _ = (0, u.kSI)(t, n);
    return (0, r.jsx)(u.Vs9.Provider, {
        value: x,
        children: (0, r.jsx)(c.lGe, {
            id: v,
            role: "dialog",
            "aria-label": g,
            "aria-labelledby": null != g ? void 0 : x.headingId,
            returnRef: a,
            ...y,
            impressionType: y?.impressionType ?? o.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.Fmo, {
                forceLevel: 1,
                children: (0, r.jsx)("div", {
                    className: f.nw,
                    children: (0, r.jsx)(c.NPJ, {
                        theme: b,
                        children: e => (0, r.jsx)(l.animated.div, {
                            "data-mana-component": "layer-modal",
                            className: s()(m.container, f.yl, e),
                            style: _,
                            children: (0, r.jsx)("div", {
                                className: f.jE,
                                children: (0, r.jsx)(c.NPJ, {
                                    theme: A,
                                    children: e => (0, r.jsx)("div", {
                                        className: s()(e, f.h_),
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