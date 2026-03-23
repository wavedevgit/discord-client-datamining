/** chunk id: 17307 params = (module,exports,require) **/
n.d(t, {
    G4: () => _,
    LQ: () => g,
    t4: () => u,
    vx: () => m
}), n(321073);
var i = n(311907),
    s = n(582754),
    l = n(287809),
    a = n(166403),
    r = n(927578),
    o = n(322631),
    d = n(788868),
    c = n(985018);
let u = (e, t, n) => (0, s.Mw)(e) ? t : n,
    m = e => {
        let {
            perksCards: t,
            variant: n,
            hideCardsOnNarrowScreen: i,
            isPremiumSubscriber: s,
            fractionalState: l,
            isInReverseTrial: a,
            recurring3PPromotionExperiment: r,
            showPremiumGroup: c,
            isPremiumGroupMember: u
        } = e, m = [];
        switch (n) {
            case o.cJ.PERKS_DISCOVERABILITY:
                m = !1 === s ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : l === d.xc.FP_ONLY || u ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case o.cJ.WHATS_NEW:
                m = (e => {
                    let {
                        cards: t,
                        perksCards: n,
                        recurring3PPromotionExperiment: i,
                        showPremiumGroup: s
                    } = e, l = null != n.tenureBadge ? [n.tenureBadge] : [], a = 3 - l.length, r = e => {
                        let {
                            card: n
                        } = e;
                        t.length < a && t.push(n)
                    };
                    return s && r({
                        card: n.premiumGroup
                    }), i && r({
                        card: n.recurring3PPromotions
                    }), r({
                        card: n.displayNameStyles
                    }), r({
                        card: n.customThemes
                    }), r({
                        card: n.permadecos
                    }), r({
                        card: n.newAppStylesUpdateJune2024
                    }), t.push(...l), t
                })({
                    cards: m,
                    perksCards: t,
                    recurring3PPromotionExperiment: r,
                    showPremiumGroup: c
                });
                break;
            case o.cJ.CARD_CAROUSEL_FIRST_ROW:
                m = !1 === s ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case o.cJ.CARD_CAROUSEL_SECOND_ROW:
                m = !1 === s ? [t.customSoundsEverywhere, t.specialStickerAccess] : l === d.xc.FP_ONLY ? a ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
                break;
            case o.cJ.CARD_CAROUSEL_THIRD_ROW:
                m = l === d.xc.FP_ONLY ? a ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
        }
        return i && (m = m.filter(e => !e.hideOnNarrowScreen)), m
    },
    _ = e => {
        let t = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
            n = null != t ? r.Ay.getPremiumPlanItem(t) : null,
            s = (null != n ? r.Ay.getSkuIdForPlan(n.planId) : null) === d.pe.TIER_2;
        return e ? s ? {
            title: c.intl.string(c.t.Aw5DRm),
            subtitle: c.intl.string(c.t.aHdO6o)
        } : {
            title: c.intl.string(c.t.N30YE4),
            subtitle: c.intl.string(c.t.GTUdNf)
        } : {
            title: c.intl.string(c.t["Uh3+CA"]),
            subtitle: c.intl.string(c.t["5TFEXv"])
        }
    },
    g = () => {
        let e = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return (0, r.TW)(e)
    }