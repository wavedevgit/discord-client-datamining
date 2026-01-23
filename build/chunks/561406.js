/** Chunk was on 91699 **/
/** chunk id: 561406, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => y
}), r(228524);
var i = r(627968),
    n = r(64700),
    l = r(158954),
    c = r(397927),
    o = r(748112),
    s = r(997509),
    a = r(179690),
    d = r(167084),
    u = r(584508),
    h = r(652215),
    p = r(985018);

function b(e) {
    let {
        eligibility: t,
        eligibilityLoading: r,
        eligibilityError: l,
        guildId: p,
        onEligibilityBecameStale: b
    } = e, y = n.useMemo(() => ({
        onEligibilityBecameStale: b,
        sortedByIneligible: !0,
        actions: {
            onEnableMFAClick: a.Ay.enableMFA,
            onRequireModeratorMFAClick: () => {
                (0, c.OoC)(u.m), s.A.open(p, h.BEX.SAFETY, void 0, h.nd0.SAFETY_PERMISSIONS)
            }
        }
    }), [p, b]), f = (0, o.A)(t, y);
    return null != l ? (0, i.jsx)("div", {
        children: (0, i.jsx)(c.wx6, {
            type: "critical",
            children: l.message
        })
    }) : null == f || r ? (0, i.jsx)("div", {
        children: (0, i.jsx)(c.y$y, {})
    }) : (0, i.jsx)("div", {
        children: f.map((e, t) => (0, i.jsxs)(n.Fragment, {
            children: [(0, i.jsx)(d.e, {
                name: e.checked ? e.checkedLabel : e.uncheckedLabel,
                description: e.description,
                checked: e.checked,
                actionLabel: e.actionLabel,
                actionHandler: e.actionHandler
            }), t < f.length - 1 ? (0, i.jsx)(c.cGx, {}) : null]
        }, e.checkedLabel))
    })
}

function y(e) {
    let {
        eligibility: t,
        eligibilityLoading: r,
        eligibilityError: n,
        refreshEligibility: o,
        guildId: s,
        transitionState: a
    } = e;
    return (0, i.jsx)(l.Modal, {
        transitionState: a,
        title: p.intl.string(p.t["3s47iN"]),
        actions: [],
        onClose: async () => {
            await (0, c.OoC)(u.m)
        },
        children: (0, i.jsx)(b, {
            eligibility: t,
            eligibilityLoading: r,
            eligibilityError: n,
            guildId: s,
            onEligibilityBecameStale: o
        })
    })
}