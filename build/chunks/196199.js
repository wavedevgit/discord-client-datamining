/** chunk id: 196199 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(531260),
    r = n(459793),
    o = n(527113),
    d = n(338548),
    c = n(859241),
    u = n(197305),
    m = n(711014),
    g = n(287809),
    _ = n(178368),
    x = n(609405),
    A = n(343557),
    h = n(242694),
    p = n(149524),
    T = n(501486),
    f = n(924699),
    S = n(184487),
    E = n(788868),
    b = n(533224);

function C(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([_.A], () => _.A.boostSlots), C = s.useMemo(() => Object.values(n), [n]), N = (0, l.bG)([g.default], () => g.default.getCurrentUser()), v = (0, l.bG)([u.A], () => u.A.affinities), I = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), j = v.length > 0 || I.length > 0, y = s.useMemo(() => C.filter(e => null != e.premiumGuildSubscription), [C]).length > 0, O = (0, l.bG)([c.A], () => c.A.getCurrentUserAppliedBoosts()), {
        fractionalState: R
    } = (0, a.A)({
        forceFetch: !0
    }), P = N?.isPremiumGroupMember(), L = t?.isPausedOrPausePending !== !0 && R === E.xc.NONE && !P;
    return (0, i.jsxs)("div", {
        className: b.GO,
        children: [(0, i.jsx)(r.kb, {
            className: b.ek
        }), (0, i.jsx)(f.A, {}), P && (0, i.jsx)(d.A, {}), !j && (0, i.jsx)(A.A, {}), t?.isPaused && R !== E.xc.FP_SUB_PAUSED ? (0, i.jsx)(x.N, {
            appliedGuildBoosts: O,
            premiumSubscription: t
        }) : (0, i.jsx)(x.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, i.jsx)(h.A, {
            guildBoostSlots: C,
            fractionalPremiumState: R
        }), (0, i.jsx)(S.A, {
            canAddBoosts: y && L
        }), (0, i.jsx)(o.A, {
            className: b.Q,
            hideHeading: !0,
            hideTier0: !0
        }), (0, i.jsx)(p.A, {}), (0, i.jsx)(T.A, {})]
    })
}