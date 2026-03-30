/** chunk id: 236697 params = (module,exports,require) **/
n.d(t, {
    u: () => I
});
var i = n(627968),
    l = n(64700),
    a = n(964892),
    r = n(208756),
    s = n(135564),
    o = n(916845),
    d = n(627330),
    c = n(397927),
    u = n(688810),
    A = n(532794),
    h = n(788868),
    _ = n(49999),
    m = n(653624),
    p = n(985018),
    g = n(991674),
    E = n(8496);

function I(e) {
    let {
        targetElementRef: t,
        dismissPopover: n,
        children: I
    } = e, {
        analyticsLocations: f
    } = (0, u.Ay)(), C = l.useCallback(() => {
        n(_.i.TAKE_ACTION), (0, A.A)({
            subscriptionTier: h.pe.TIER_2,
            analyticsLocations: f
        })
    }, [n, f]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            children: I
        }), (0, i.jsx)(a.x, {
            targetElementRef: t,
            onRequestClose: () => n(_.i.USER_DISMISS),
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
                    onClick: () => n(_.i.USER_DISMISS),
                    variant: "color-mix"
                }), (0, i.jsx)("div", {
                    className: g.h,
                    children: (0, i.jsx)("img", {
                        src: E.A,
                        alt: "",
                        "aria-hidden": !0,
                        className: g.S
                    })
                }), (0, i.jsx)(d.D, {
                    title: p.intl.string(m.default.OlObRa),
                    body: p.intl.string(m.default["8Gl8gP"]),
                    badge: {
                        type: "beta",
                        variant: "expressive"
                    }
                }), (0, i.jsx)(r.Z, {
                    actions: [{
                        text: p.intl.string(p.t.pj0XBN),
                        variant: "primary",
                        icon: c.tvc,
                        iconPosition: "start",
                        onClick: C
                    }]
                }), (0, i.jsx)(s.F, {})]
            })
        })]
    })
}