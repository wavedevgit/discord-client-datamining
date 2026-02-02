/** chunk id: 653183, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
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
    b = n(530240),
    h = n(564152),
    E = n(76740),
    O = n(21316),
    x = n(237267),
    C = n(240626),
    S = n(788868),
    T = n(637676);

function I(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([A.A], () => A.A.boostSlots), I = i.useMemo(() => Object.values(n), [n]), N = (0, l.bG)([g.default], () => g.default.getCurrentUser()), j = f.Ay.isPremium(N, S.PremiumTypes.TIER_2), y = (0, l.bG)([p.A], () => p.A.affinities), v = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()), P = y.length > 0 || v.length > 0, R = I.length > 0, D = i.useMemo(() => I.filter(e => null != e.premiumGuildSubscription), [I]), L = D.length > 0, w = I.length > D.length, M = (0, l.bG)([_.A], () => _.A.getCurrentUserAppliedBoosts()), {
        fractionalState: G
    } = (0, s.A)({
        forceFetch: !0
    }), U = null == N ? void 0 : N.isPremiumGroupMember(), k = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && G === S.xc.NONE, B = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && G === S.xc.NONE && !U, H = j && G === S.xc.FP_SUB_PAUSED, V = G === S.xc.NONE && !U;
    return (0, r.jsxs)("div", {
        className: T.GO,
        children: [(0, r.jsx)(a.kb, {
            className: T.ek
        }), (0, r.jsx)(h.A, {
            hasGuildBoostSlots: R,
            hasAppliedGuildBoosts: L,
            hasBoostPerk: H,
            canAddBoosts: B
        }), V && (0, r.jsx)(x.A, {
            hasAppliedGuildBoosts: L,
            hasBoostPerk: H,
            hasGuildAffinitiesOrInGuild: P,
            subscriptionIsPausedOrPausePending: k
        }), U && (0, r.jsx)(u.A, {}), !P && (0, r.jsx)(E.A, {}), (null == t ? void 0 : t.isPaused) && G !== S.xc.FP_SUB_PAUSED ? (0, r.jsx)(b.N, {
            appliedGuildBoosts: M,
            premiumSubscription: t
        }) : (0, r.jsx)(b.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, r.jsx)(C.A, {
            guildBoostSlots: I,
            fractionalPremiumState: G
        }), (0, r.jsx)(O.A, {
            canAddBoosts: L && B,
            canApplyBoosts: w
        }), (0, r.jsx)(d.A, {
            className: T.e4,
            hideHeading: !0,
            hideTier0: !0
        }), (0, r.jsx)(o.A, {
            cardClassName: T.KW
        }), (0, r.jsx)(c.A, {
            className: T.JL
        })]
    })
}