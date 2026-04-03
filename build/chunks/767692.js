/** chunk id: 767692 params = (module,exports,require) **/
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
    g = n(197305),
    _ = n(711014),
    x = n(287809),
    A = n(178368),
    h = n(927578),
    p = n(609405),
    T = n(631643),
    f = n(343557),
    S = n(880807),
    b = n(12424),
    E = n(807905),
    C = n(788868),
    N = n(515145);

function v(e) {
    let {
        premiumSubscription: t
    } = e, n = (0, l.bG)([A.A], () => A.A.boostSlots), v = s.useMemo(() => Object.values(n), [n]), I = (0, l.bG)([x.default], () => x.default.getCurrentUser()), j = h.Ay.isPremium(I, C.PremiumTypes.TIER_2), y = (0, l.bG)([g.A], () => g.A.affinities), O = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()), R = y.length > 0 || O.length > 0, P = v.length > 0, L = s.useMemo(() => v.filter(e => null != e.premiumGuildSubscription), [v]), D = L.length > 0, G = v.length > L.length, M = (0, l.bG)([m.A], () => m.A.getCurrentUserAppliedBoosts()), {
        fractionalState: k
    } = (0, a.A)({
        forceFetch: !0
    }), U = I?.isPremiumGroupMember(), w = t?.isPausedOrPausePending === !0 && k === C.xc.NONE, V = t?.isPausedOrPausePending !== !0 && k === C.xc.NONE && !U, B = j && k === C.xc.FP_SUB_PAUSED, F = k === C.xc.NONE && !U;
    return (0, i.jsxs)("div", {
        className: N.GO,
        children: [(0, i.jsx)(r.kb, {
            className: N.ek
        }), (0, i.jsx)(T.A, {
            hasGuildBoostSlots: P,
            hasAppliedGuildBoosts: D,
            hasBoostPerk: B,
            canAddBoosts: V
        }), F && (0, i.jsx)(b.A, {
            hasAppliedGuildBoosts: D,
            hasBoostPerk: B,
            hasGuildAffinitiesOrInGuild: R,
            subscriptionIsPausedOrPausePending: w
        }), U && (0, i.jsx)(u.A, {}), !R && (0, i.jsx)(f.A, {}), t?.isPaused && k !== C.xc.FP_SUB_PAUSED ? (0, i.jsx)(p.N, {
            appliedGuildBoosts: M,
            premiumSubscription: t
        }) : (0, i.jsx)(p.A, {
            guildBoostSlots: n,
            premiumSubscription: t
        }), (0, i.jsx)(E.A, {
            guildBoostSlots: v,
            fractionalPremiumState: k
        }), (0, i.jsx)(S.A, {
            canAddBoosts: D && V,
            canApplyBoosts: G
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