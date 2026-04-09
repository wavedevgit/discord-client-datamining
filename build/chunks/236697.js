/** chunk id: 236697 params = (module,exports,require) **/
n.d(t, {
    u: () => f
});
var i = n(627968),
    a = n(64700),
    r = n(964892),
    l = n(208756),
    s = n(135564),
    o = n(916845),
    d = n(627330),
    c = n(397927),
    u = n(688810),
    A = n(532794),
    _ = n(881373),
    h = n(788868),
    m = n(49999),
    g = n(653624),
    p = n(985018),
    E = n(991674),
    I = n(240703);

function f(e) {
    let {
        targetElementRef: t,
        dismissPopover: n,
        children: f
    } = e, {
        analyticsLocations: C
    } = (0, u.Ay)(), T = a.useCallback(() => {
        n(m.i.TAKE_ACTION), (0, A.A)({
            subscriptionTier: h.pe.TIER_2,
            analyticsLocations: C
        })
    }, [n, C]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            children: f
        }), (0, i.jsx)(r.x, {
            targetElementRef: t,
            onRequestClose: () => n(m.i.USER_DISMISS),
            alignmentStrategy: "edge",
            align: "top",
            position: "right",
            caretConfig: {
                align: "start"
            },
            gradientColor: "nitro-pink",
            children: (0, i.jsxs)("div", {
                "data-mana-component": "popover",
                children: [(0, i.jsx)(o.q, {
                    onClick: () => n(m.i.USER_DISMISS),
                    variant: "color-mix"
                }), (0, i.jsx)("div", {
                    className: E.h,
                    children: (0, i.jsx)("img", {
                        src: I.A,
                        alt: "",
                        "aria-hidden": !0,
                        className: E.S
                    })
                }), (0, i.jsx)(d.D, {
                    title: p.intl.string(g.default.OlObRa),
                    body: p.intl.format(g.default["A+56/R"], {
                        discountPercent: _.aW
                    }),
                    badge: {
                        type: "beta",
                        variant: "expressive"
                    }
                }), (0, i.jsx)(l.Z, {
                    actions: [{
                        text: p.intl.string(p.t.pj0XBN),
                        variant: "primary",
                        icon: c.tvc,
                        iconPosition: "start",
                        onClick: T
                    }]
                }), (0, i.jsx)(s.F, {})]
            })
        })]
    })
}