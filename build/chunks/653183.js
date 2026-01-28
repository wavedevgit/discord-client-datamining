/** Chunk was on 5606 **/
/** chunk id: 653183, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(531260),
    a = n(459793),
    o = n(449280),
    c = n(406245),
    d = n(836275),
    u = n(338548),
    p = n(859241),
    _ = n(197305),
    m = n(711014),
    g = n(287809),
    f = n(178368),
    b = n(927578),
    h = n(530240),
    A = n(564152),
    E = n(76740),
    x = n(21316),
    O = n(237267),
    C = n(240626),
    y = n(788868),
    j = n(637676);

function T(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([f.A], () => f.A.boostSlots), T = i.useMemo(() => Object.values(n), [n]), v = (0, l.bG)([g.default], () => g.default.getCurrentUser()), S = b.Ay.isPremium(v, y.PremiumTypes.TIER_2), I = (0, l.bG)([_.A], () => _.A.affinities), N = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), P = I.length > 0 || N.length > 0, R = T.length > 0, D = i.useMemo(() => T.filter(e => null != e.premiumGuildSubscription), [T]), w = D.length > 0, L = T.length > D.length, M = (0, l.bG)([p.A], () => p.A.getCurrentUserAppliedBoosts()), {
        fractionalState: G
    } = (0, s.A)({
        forceFetch: !0
    }), U = null == v ? void 0 : v.isPremiumGroupMember(), k = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && G === y.xc.NONE, H = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && G === y.xc.NONE && !U, B = S && G === y.xc.FP_SUB_PAUSED, V = G === y.xc.NONE && !U;
    return (0, r.jsxs)("div", {
        className: j.GO,
        children: [(0, r.jsx)(a.kb, {
            className: j.ek
        }), (0, r.jsx)(A.A, {
            hasGuildBoostSlots: R,
            hasAppliedGuildBoosts: w,
            hasBoostPerk: B,
            canAddBoosts: H
        }), V && (0, r.jsx)(O.A, {
            hasAppliedGuildBoosts: w,
            hasBoostPerk: B,
            hasGuildAffinitiesOrInGuild: P,
            subscriptionIsPausedOrPausePending: k
        }), U && (0, r.jsx)(u.A, {}), !P && (0, r.jsx)(E.A, {}), (null == t ? void 0 : t.isPaused) && G !== y.xc.FP_SUB_PAUSED ? (0, r.jsx)(h.N, {
            appliedGuildBoosts: M,
            premiumSubscription: t
        }) : (0, r.jsx)(h.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, r.jsx)(C.A, {
            guildBoostSlots: T,
            fractionalPremiumState: G
        }), (0, r.jsx)(x.A, {
            canAddBoosts: w && H,
            canApplyBoosts: L
        }), (0, r.jsx)(d.A, {
            className: j.e4,
            hideHeading: !0,
            hideTier0: !0
        }), (0, r.jsx)(o.A, {
            cardClassName: j.KW
        }), (0, r.jsx)(c.A, {
            className: j.JL
        })]
    })
}