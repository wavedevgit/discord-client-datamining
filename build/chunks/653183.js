/** chunk id: 653183 params = (module,exports,require) **/
n.d(t, {
    A: () => b
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
    _ = n(859241),
    m = n(197305),
    g = n(711014),
    A = n(287809),
    x = n(178368),
    h = n(927578),
    p = n(530240),
    T = n(564152),
    E = n(76740),
    S = n(21316),
    C = n(237267),
    f = n(240626),
    N = n(788868),
    I = n(637676);

function b(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([x.A], () => x.A.boostSlots), b = s.useMemo(() => Object.values(n), [n]), v = (0, l.bG)([A.default], () => A.default.getCurrentUser()), j = h.Ay.isPremium(v, N.PremiumTypes.TIER_2), y = (0, l.bG)([m.A], () => m.A.affinities), O = (0, l.bG)([g.Ay], () => g.Ay.getFlattenedGuildIds()), R = y.length > 0 || O.length > 0, L = b.length > 0, D = s.useMemo(() => b.filter(e => null != e.premiumGuildSubscription), [b]), P = D.length > 0, G = b.length > D.length, M = (0, l.bG)([_.A], () => _.A.getCurrentUserAppliedBoosts()), {
        fractionalState: U
    } = (0, a.A)({
        forceFetch: !0
    }), k = v?.isPremiumGroupMember(), V = t?.isPausedOrPausePending === !0 && U === N.xc.NONE, w = t?.isPausedOrPausePending !== !0 && U === N.xc.NONE && !k, B = j && U === N.xc.FP_SUB_PAUSED, H = U === N.xc.NONE && !k;
    return (0, i.jsxs)("div", {
        className: I.GO,
        children: [(0, i.jsx)(r.kb, {
            className: I.ek
        }), (0, i.jsx)(T.A, {
            hasGuildBoostSlots: L,
            hasAppliedGuildBoosts: P,
            hasBoostPerk: B,
            canAddBoosts: w
        }), H && (0, i.jsx)(C.A, {
            hasAppliedGuildBoosts: P,
            hasBoostPerk: B,
            hasGuildAffinitiesOrInGuild: R,
            subscriptionIsPausedOrPausePending: V
        }), k && (0, i.jsx)(u.A, {}), !R && (0, i.jsx)(E.A, {}), t?.isPaused && U !== N.xc.FP_SUB_PAUSED ? (0, i.jsx)(p.N, {
            appliedGuildBoosts: M,
            premiumSubscription: t
        }) : (0, i.jsx)(p.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, i.jsx)(f.A, {
            guildBoostSlots: b,
            fractionalPremiumState: U
        }), (0, i.jsx)(S.A, {
            canAddBoosts: P && w,
            canApplyBoosts: G
        }), (0, i.jsx)(c.A, {
            className: I.e4,
            hideHeading: !0,
            hideTier0: !0
        }), (0, i.jsx)(o.A, {
            cardClassName: I.KW
        }), (0, i.jsx)(d.A, {
            className: I.JL
        })]
    })
}