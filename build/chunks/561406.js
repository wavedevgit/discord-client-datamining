/** chunk id: 561406, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => f
}), r(228524);
var n = r(627968),
    i = r(64700),
    l = r(158954),
    c = r(397927),
    o = r(748112),
    a = r(997509),
    s = r(179690),
    u = r(167084),
    d = r(584508),
    b = r(652215),
    p = r(985018);

function y(e) {
    let {
        eligibility: t,
        eligibilityLoading: r,
        eligibilityError: l,
        guildId: p,
        onEligibilityBecameStale: y
    } = e, f = i.useMemo(() => ({
        onEligibilityBecameStale: y,
        sortedByIneligible: !0,
        actions: {
            onEnableMFAClick: s.Ay.enableMFA,
            onRequireModeratorMFAClick: () => {
                (0, c.OoC)(d.m), a.A.open(p, b.BEX.SAFETY, void 0, b.nd0.SAFETY_PERMISSIONS)
            }
        }
    }), [p, y]), O = (0, o.A)(t, f);
    return null != l ? (0, n.jsx)("div", {
        children: (0, n.jsx)(c.wx6, {
            type: "critical",
            children: l.message
        })
    }) : null == O || r ? (0, n.jsx)("div", {
        children: (0, n.jsx)(c.y$y, {})
    }) : (0, n.jsx)("div", {
        children: O.map((e, t) => (0, n.jsxs)(i.Fragment, {
            children: [(0, n.jsx)(u.e, {
                name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                description: e.description,
                checked: e.checked,
                actionLabel: e.actionLabel,
                actionHandler: e.actionHandler
            }), t < O.length - 1 ? (0, n.jsx)(c.cGx, {}) : null]
        }, e.checkedLabel))
    })
}

function f(e) {
    let {
        eligibility: t,
        eligibilityLoading: r,
        eligibilityError: i,
        refreshEligibility: o,
        guildId: a,
        transitionState: s
    } = e;
    return (0, n.jsx)(l.Modal, {
        transitionState: s,
        title: p.intl.string(p.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, c.OoC)(d.m)
        },
        children: (0, n.jsx)(y, {
            eligibility: t,
            eligibilityLoading: r,
            eligibilityError: i,
            guildId: a,
            onEligibilityBecameStale: o
        })
    })
}