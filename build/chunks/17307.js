/** chunk id: 17307 params = (module,exports,require) **/
n.d(t, {
    G4: () => m,
    LQ: () => g,
    t4: () => u,
    vx: () => _
}), n(321073);
var i = n(311907),
    s = n(582754),
    l = n(287809),
    r = n(166403),
    a = n(927578),
    o = n(322631),
    d = n(788868),
    c = n(985018);
let u = (e, t, n) => (0, s.Mw)(e) ? t : n,
    _ = e => {
        let {
            perksCards: t,
            variant: n,
            hideCardsOnNarrowScreen: i,
            isPremiumSubscriber: s,
            fractionalState: l,
            isInReverseTrial: r,
            recurring3PPromotionExperiment: a,
            showPremiumGroup: c,
            isPremiumGroupMember: u
        } = e, _ = [];
        switch (n) {
            case o.cJ.PERKS_DISCOVERABILITY:
                _ = !1 === s ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : l === d.xc.FP_ONLY || u ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case o.cJ.WHATS_NEW:
                _ = (e => {
                    let {
                        cards: t,
                        perksCards: n,
                        recurring3PPromotionExperiment: i,
                        showPremiumGroup: s
                    } = e, l = null != n.tenureBadge ? [n.tenureBadge] : [], r = 3 - l.length, a = e => {
                        let {
                            card: n
                        } = e;
                        t.length < r && t.push(n)
                    };
                    return s && a({
                        card: n.premiumGroup
                    }), i && a({
                        card: n.recurring3PPromotions
                    }), a({
                        card: n.displayNameStyles
                    }), a({
                        card: n.customThemes
                    }), a({
                        card: n.permadecos
                    }), a({
                        card: n.newAppStylesUpdateJune2024
                    }), t.push(...l), t
                })({
                    cards: _,
                    perksCards: t,
                    recurring3PPromotionExperiment: a,
                    showPremiumGroup: c
                });
                break;
            case o.cJ.CARD_CAROUSEL_FIRST_ROW:
                _ = !1 === s ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case o.cJ.CARD_CAROUSEL_SECOND_ROW:
                _ = !1 === s ? [t.customSoundsEverywhere, t.specialStickerAccess] : l === d.xc.FP_ONLY ? r ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
                break;
            case o.cJ.CARD_CAROUSEL_THIRD_ROW:
                _ = l === d.xc.FP_ONLY ? r ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge] : [t.entranceSoundsSeeAllVariation, t.badge]
        }
        return i && (_ = _.filter(e => !e.hideOnNarrowScreen)), _
    },
    m = e => {
        let t = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
            n = null != t ? a.Ay.getPremiumPlanItem(t) : null,
            s = (null != n ? a.Ay.getSkuIdForPlan(n.planId) : null) === d.pe.TIER_2;
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
        return (0, a.TW)(e)
    }