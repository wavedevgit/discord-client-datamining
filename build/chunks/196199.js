/** chunk id: 196199 params = (module,exports,require) **/
n.d(t, {
    A: () => b
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
    x = n(343557),
    A = n(242694),
    h = n(149524),
    p = n(501486),
    T = n(924699),
    f = n(184487),
    S = n(788868),
    E = n(515145);

function b(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([_.A], () => _.A.boostSlots), b = s.useMemo(() => Object.values(n), [n]), C = (0, l.bG)([g.default], () => g.default.getCurrentUser()), N = (0, l.bG)([u.A], () => u.A.affinities), v = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), I = N.length > 0 || v.length > 0, j = s.useMemo(() => b.filter(e => null != e.premiumGuildSubscription), [b]).length > 0, y = (0, l.bG)([c.A], () => c.A.getCurrentUserAppliedBoosts()), {
        fractionalState: O
    } = (0, a.A)({
        forceFetch: !0
    }), R = C?.isPremiumGroupMember(), P = t?.isPausedOrPausePending !== !0 && O === S.xc.NONE && !R;
    return (0, i.jsxs)("div", {
        className: E.GO,
        children: [(0, i.jsx)(r.kb, {
            className: E.ek
        }), (0, i.jsx)(T.A, {}), R && (0, i.jsx)(d.A, {}), !I && (0, i.jsx)(x.A, {}), (0, i.jsx)(A.A, {
            guildBoostSlots: b,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: t,
            pausedAppliedGuildBoosts: y,
            fractionalPremiumState: O
        }), (0, i.jsx)(f.A, {
            canAddBoosts: j && P
        }), (0, i.jsx)(o.A, {
            className: E.Q,
            hideHeading: !0,
            hideTier0: !0
        }), (0, i.jsx)(h.A, {}), (0, i.jsx)(p.A, {})]
    })
}