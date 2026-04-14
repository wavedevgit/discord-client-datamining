/** chunk id: 767692 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(531260),
    a = n(459793),
    o = n(449280),
    d = n(406245),
    c = n(836275),
    u = n(338548),
    m = n(859241),
    g = n(197305),
    _ = n(711014),
    x = n(287809),
    h = n(178368),
    A = n(927578),
    p = n(609405),
    T = n(631643),
    f = n(343557),
    S = n(880807),
    E = n(12424),
    b = n(807905),
    C = n(788868),
    v = n(515145);

function N(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([h.A], () => h.A.boostSlots), N = s.useMemo(() => Object.values(n), [n]), I = (0, l.bG)([x.default], () => x.default.getCurrentUser()), j = A.Ay.isPremium(I, C.PremiumTypes.TIER_2), y = (0, l.bG)([g.A], () => g.A.affinities), O = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), R = y.length > 0 || O.length > 0, L = N.length > 0, P = s.useMemo(() => N.filter(e => null != e.premiumGuildSubscription), [N]), D = P.length > 0, G = N.length > P.length, M = (0, l.bG)([m.A], () => m.A.getCurrentUserAppliedBoosts()), {
        fractionalState: U
    } = (0, r.A)({
        forceFetch: !0
    }), k = I?.isPremiumGroupMember(), w = t?.isPausedOrPausePending === !0 && U === C.xc.NONE, V = t?.isPausedOrPausePending !== !0 && U === C.xc.NONE && !k, B = j && U === C.xc.FP_SUB_PAUSED, F = U === C.xc.NONE && !k;
    return (0, i.jsxs)("div", {
        className: v.GO,
        children: [(0, i.jsx)(a.kb, {
            className: v.ek
        }), (0, i.jsx)(T.A, {
            hasGuildBoostSlots: L,
            hasAppliedGuildBoosts: D,
            hasBoostPerk: B,
            canAddBoosts: V
        }), F && (0, i.jsx)(E.A, {
            hasAppliedGuildBoosts: D,
            hasBoostPerk: B,
            hasGuildAffinitiesOrInGuild: R,
            subscriptionIsPausedOrPausePending: w
        }), k && (0, i.jsx)(u.A, {}), !R && (0, i.jsx)(f.A, {}), t?.isPaused && U !== C.xc.FP_SUB_PAUSED ? (0, i.jsx)(p.N, {
            appliedGuildBoosts: M,
            premiumSubscription: t
        }) : (0, i.jsx)(p.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, i.jsx)(b.A, {
            guildBoostSlots: N,
            fractionalPremiumState: U
        }), (0, i.jsx)(S.A, {
            canAddBoosts: D && V,
            canApplyBoosts: G
        }), (0, i.jsx)(c.A, {
            className: v.e4,
            hideHeading: !0,
            hideTier0: !0
        }), (0, i.jsx)(o.A, {
            cardClassName: v.KW
        }), (0, i.jsx)(d.A, {
            className: v.JL
        })]
    })
}