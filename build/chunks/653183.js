/** Chunk was on 60667 **/
/** chunk id: 653183, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
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
    _ = n(859241),
    p = n(197305),
    m = n(711014),
    g = n(287809),
    A = n(178368),
    f = n(927578),
    h = n(530240),
    b = n(564152),
    E = n(76740),
    x = n(21316),
    O = n(237267),
    C = n(240626),
    T = n(788868),
    I = n(637676);

function S(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([A.A], () => A.A.boostSlots), S = i.useMemo(() => Object.values(n), [n]), j = (0, l.bG)([g.default], () => g.default.getCurrentUser()), v = f.Ay.isPremium(j, T.PremiumTypes.TIER_2), N = (0, l.bG)([p.A], () => p.A.affinities), y = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), P = N.length > 0 || y.length > 0, R = S.length > 0, D = i.useMemo(() => S.filter(e => null != e.premiumGuildSubscription), [S]), w = D.length > 0, L = S.length > D.length, M = (0, l.bG)([_.A], () => _.A.getCurrentUserAppliedBoosts()), {
        fractionalState: U
    } = (0, s.A)({
        forceFetch: !0
    }), G = null == j ? void 0 : j.isPremiumGroupMember(), k = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && U === T.xc.NONE, V = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && U === T.xc.NONE && !G, H = v && U === T.xc.FP_SUB_PAUSED, B = U === T.xc.NONE && !G;
    return (0, r.jsxs)("div", {
        className: I.GO,
        children: [(0, r.jsx)(a.kb, {
            className: I.ek
        }), (0, r.jsx)(b.A, {
            hasGuildBoostSlots: R,
            hasAppliedGuildBoosts: w,
            hasBoostPerk: H,
            canAddBoosts: V
        }), B && (0, r.jsx)(O.A, {
            hasAppliedGuildBoosts: w,
            hasBoostPerk: H,
            hasGuildAffinitiesOrInGuild: P,
            subscriptionIsPausedOrPausePending: k
        }), G && (0, r.jsx)(u.A, {}), !P && (0, r.jsx)(E.A, {}), (null == t ? void 0 : t.isPaused) && U !== T.xc.FP_SUB_PAUSED ? (0, r.jsx)(h.N, {
            appliedGuildBoosts: M,
            premiumSubscription: t
        }) : (0, r.jsx)(h.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, r.jsx)(C.A, {
            guildBoostSlots: S,
            fractionalPremiumState: U
        }), (0, r.jsx)(x.A, {
            canAddBoosts: w && V,
            canApplyBoosts: L
        }), (0, r.jsx)(d.A, {
            className: I.e4,
            hideHeading: !0,
            hideTier0: !0
        }), (0, r.jsx)(o.A, {
            cardClassName: I.KW
        }), (0, r.jsx)(c.A, {
            className: I.JL
        })]
    })
}