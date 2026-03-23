/** chunk id: 653183 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(531260),
    r = n(459793),
    o = n(449280),
    d = n(406245),
    c = n(836275),
    u = n(338548),
    m = n(859241),
    _ = n(197305),
    g = n(711014),
    A = n(287809),
    x = n(178368),
    p = n(927578),
    h = n(530240),
    f = n(564152),
    T = n(76740),
    E = n(21316),
    S = n(237267),
    b = n(240626),
    C = n(788868),
    N = n(637676);

function v(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([x.A], () => x.A.boostSlots), v = s.useMemo(() => Object.values(n), [n]), I = (0, l.bG)([A.default], () => A.default.getCurrentUser()), j = p.Ay.isPremium(I, C.PremiumTypes.TIER_2), y = (0, l.bG)([_.A], () => _.A.affinities), O = (0, l.bG)([g.Ay], () => g.Ay.getFlattenedGuildIds()), R = y.length > 0 || O.length > 0, L = v.length > 0, P = s.useMemo(() => v.filter(e => null != e.premiumGuildSubscription), [v]), D = P.length > 0, M = v.length > P.length, G = (0, l.bG)([m.A], () => m.A.getCurrentUserAppliedBoosts()), {
        fractionalState: k
    } = (0, a.A)({
        forceFetch: !0
    }), U = I?.isPremiumGroupMember(), w = t?.isPausedOrPausePending === !0 && k === C.xc.NONE, V = t?.isPausedOrPausePending !== !0 && k === C.xc.NONE && !U, B = j && k === C.xc.FP_SUB_PAUSED, F = k === C.xc.NONE && !U;
    return (0, i.jsxs)("div", {
        className: N.GO,
        children: [(0, i.jsx)(r.kb, {
            className: N.ek
        }), (0, i.jsx)(f.A, {
            hasGuildBoostSlots: L,
            hasAppliedGuildBoosts: D,
            hasBoostPerk: B,
            canAddBoosts: V
        }), F && (0, i.jsx)(S.A, {
            hasAppliedGuildBoosts: D,
            hasBoostPerk: B,
            hasGuildAffinitiesOrInGuild: R,
            subscriptionIsPausedOrPausePending: w
        }), U && (0, i.jsx)(u.A, {}), !R && (0, i.jsx)(T.A, {}), t?.isPaused && k !== C.xc.FP_SUB_PAUSED ? (0, i.jsx)(h.N, {
            appliedGuildBoosts: G,
            premiumSubscription: t
        }) : (0, i.jsx)(h.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, i.jsx)(b.A, {
            guildBoostSlots: v,
            fractionalPremiumState: k
        }), (0, i.jsx)(E.A, {
            canAddBoosts: D && V,
            canApplyBoosts: M
        }), (0, i.jsx)(c.A, {
            className: N.e4,
            hideHeading: !0,
            hideTier0: !0
        }), (0, i.jsx)(o.A, {
            cardClassName: N.KW
        }), (0, i.jsx)(d.A, {
            className: N.JL
        })]
    })
}