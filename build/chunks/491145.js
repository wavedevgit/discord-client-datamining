/** chunk id: 491145 params = (module,exports,require) **/
n.d(e, {
    A: () => j
});
var i = n(64700),
    s = n(902173),
    a = n(311907),
    r = n(397927),
    l = n(793574),
    d = n(532794),
    o = n(412260),
    c = n(852218),
    u = n(976860),
    h = n(287809),
    m = n(975571),
    b = n(474090),
    f = n(341915),
    g = n(561844),
    x = n(590202),
    C = n(654487),
    I = n(652215),
    N = n(788868),
    p = n(985018),
    A = n(237146),
    v = n(365720);
let T = {
    rewardSkuIds: [],
    promotionEndDate: null
};

function j(t, e, n) {
    let j = t.config.features.some(t => C.Tz.has(t)),
        E = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        _ = (0, b.YE)(E, N.PremiumTypes.TIER_2),
        y = (0, b.ki)(E),
        {
            rewardSkuIds: R,
            promotionEndDate: O
        } = (0, a.cf)([o.A], () => {
            if (!j) return T;
            let t = o.A.getMarketingMomentRewardSkuIds(),
                e = o.A.promotionsByType[c.pt.MARKETING_MOMENT],
                n = Object.keys(e);
            return {
                rewardSkuIds: t,
                promotionEndDate: n.length > 0 ? e[n[0]].endDate : null
            }
        }),
        k = R.length > 0,
        L = i.useCallback(async () => {
            j && (_ ? ((0, g.Y5)({
                questId: t.id,
                questContent: f.uF.REWARD_MODAL,
                questContentCTA: x.Cy.OPEN_NITRO_HOME,
                impressionId: e.impressionId,
                sourceQuestContent: e.sourceQuestContent
            }), await n?.(), (0, u.pX)(I.BVt.NITRO_HOME)) : ((0, g.Y5)({
                questId: t.id,
                questContent: f.uF.REWARD_MODAL,
                questContentCTA: x.Cy.OPEN_NITRO_CHECKOUT,
                impressionId: e.impressionId,
                sourceQuestContent: e.sourceQuestContent
            }), await n?.(), await (0, d.A)({
                subscriptionTier: N.pe.TIER_2,
                analyticsLocations: [l.A.QUEST_REWARD_MODAL]
            })))
        }, [j, _, t.id, e.impressionId, e.sourceQuestContent, n]);
    if (!j) return null;
    if (t.config.features.includes(s.L.NITRO_2_POINT_0_CTA)) {
        let t = m.A.getArticleURL(I.MVz.NITRO_2_POINT_0);
        return _ ? {
            title: p.intl.string(A.default.LIc2xy),
            subtitle: p.intl.format(A.default.gzazAe, {
                helpCenterLink: t
            }),
            ctaText: p.intl.string(A.default.HlVJm0),
            ctaIcon: void 0,
            ctaVariant: "primary",
            onClickCta: L
        } : y ? {
            title: p.intl.string(A.default.HTsycG),
            subtitle: p.intl.format(A.default["3JKWU6"], {
                helpCenterLink: t
            }),
            ctaText: p.intl.string(A.default["2iX+XV"]),
            ctaIcon: void 0,
            ctaVariant: "primary",
            onClickCta: L
        } : {
            title: p.intl.string(A.default.bOf5IH),
            subtitle: p.intl.format(A.default.SzOYGc, {
                helpCenterLink: t
            }),
            ctaText: p.intl.string(A.default["620Iwi"]),
            ctaIcon: void 0,
            ctaVariant: "primary",
            onClickCta: L
        }
    }
    return _ ? {
        title: p.intl.string(v.default.I8cv0h),
        subtitle: p.intl.string(v.default.wC4J6d),
        ctaText: p.intl.string(v.default.u29fVK),
        ctaIcon: void 0,
        ctaVariant: "primary",
        onClickCta: L
    } : k && null != O && O > new Date ? {
        title: p.intl.string(v.default.E0XZQW),
        subtitle: p.intl.format(y ? v.default["PyQY5+"] : v.default["Ri/ZGz"], {
            date: O,
            helpCenterLink: m.A.getArticleURL(I.MVz.NITRO_CONTROL_CAMPAIGN)
        }),
        ctaText: p.intl.string(y ? p.t.IJI7yk : p.t.pj0XBN),
        ctaIcon: r.tvc,
        ctaIconPosition: "start",
        ctaVariant: "expressive",
        onClickCta: L
    } : {
        title: p.intl.string(v.default.pVkPgD),
        subtitle: p.intl.string(v.default.vxubVL),
        ctaText: p.intl.string(y ? p.t.IJI7yk : p.t.pj0XBN),
        ctaIcon: r.tvc,
        ctaIconPosition: "start",
        ctaVariant: "expressive",
        onClickCta: L
    }
}