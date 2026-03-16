/** chunk id: 657515 params = (module,exports,require) **/
"use strict";
n.d(t, {
    zH: () => f
});
var i = n(575593),
    a = n(517950),
    r = n(793574),
    l = n(810498),
    s = n(652215),
    _ = n(985018),
    o = n(490111),
    c = n(910026),
    d = n(380212),
    u = n(876318);
n(642827), n(669531);
var g = n(320306),
    b = n(516738),
    I = n(604156);
let A = {
        skuId: a.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: i.R.AVATAR_DECORATION,
        name: () => _.intl.string(_.t["R4q5+y"]),
        a11yLabel: () => _.intl.string(_.t.s1HWnQ)
    },
    S = {
        skuId: a.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: i.R.NAMEPLATE,
        palette: "sky",
        name: () => _.intl.string(_.t.OzB7sI),
        a11yLabel: () => _.intl.string(_.t.WX49A3)
    },
    E = {
        skuId: a.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: i.R.AVATAR_DECORATION,
        name: () => _.intl.string(_.t.ZK9IyY),
        a11yLabel: () => _.intl.string(_.t["m/y43M"])
    },
    m = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
    },
    f = {
        rewards: [A, S, E],
        rewardAssetIdMap: (0, l.t8)([A, S, E]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => n.e("51463").then(n.bind(n, 347066)).then(e => {
                    let {
                        default: t
                    } = e;
                    return fetch(t).then(e => e.json())
                }),
                getGlowAnimationData: () => Promise.resolve(null)
            },
            gradientConfig: {
                gradient: ["rgba(88, 101, 242, 0)", "rgba(88, 101, 242, 1)"]
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, t) => t ? c.A : o.A,
            title: () => _.intl.string(_.t.Eeqjcv),
            description: () => _.intl.string(_.t["Wp+i/e"]),
            cta: () => _.intl.string(_.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNagbar: {
            description: () => _.intl.string(_.t.veQg0t),
            cta: () => _.intl.string(_.t.RzWDqY),
            analyticsLocation: r.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: s.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNotice: {
            getImageUrl: (e, t) => t ? c.A : o.A,
            title: () => _.intl.string(_.t.bLOiLM),
            description: () => _.intl.string(_.t["cE/UX7"]),
            cta: () => _.intl.string(_.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelection: {
            heading: () => _.intl.string(_.t.OEtqpm),
            subheading: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return _.intl.formatToPlainString(_.t["2h5M+X"], {
                    availableCount: e
                })
            },
            mobileSubheading: e => _.intl.formatToPlainString(_.t["2h5M+X"], {
                availableCount: e
            }),
            gradientConfig: m,
            getImageUrl: (e, t) => t ? u.A : d.A,
            getBannerImageUrl: () => I.A,
            getBackgroundImageUrl: () => b.A
        },
        planSelectionBanner: {
            desktopBannerText: () => _.intl.string(_.t.Abiuci),
            mobileBannerText: () => _.intl.string(_.t.cMiNit),
            getImageUrl: () => u.A,
            gradientConfig: () => m,
            getBackgroundImageUrl: () => I.A
        },
        billingSettingsMarketingBanner: {
            getImageUrl: e => e ? u.A : d.A,
            title: () => _.intl.string(_.t.Eeqjcv),
            body: () => _.intl.string(_.t.IuMZS3),
            getBackgroundImageUrl: () => g.A,
            gradientConfig: {
                gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
            }
        },
        giftPurchaseConfirmation: {
            yearGiftText: _.t["0Z0G7m"],
            monthGiftText: _.t.qyhlUP,
            collectRewardButtonText: () => _.intl.string(_.t.kMYVwv),
            rewardCollectedText: () => _.intl.string(_.t.eZrmtq)
        },
        rewardSelection: {
            heading: () => _.intl.string(_.t["3JCuX1"]),
            primarySubtitle: () => _.intl.string(_.t.h2nMp0),
            secondarySubtitle: () => _.intl.string(_.t.y5wftM)
        }
    }