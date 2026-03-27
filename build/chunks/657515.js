/** chunk id: 657515 params = (module,exports,require) **/
"use strict";
n.d(t, {
    zH: () => h
});
var i = n(575593),
    a = n(517950),
    r = n(793574),
    s = n(810498),
    o = n(652215),
    c = n(985018),
    l = n(490111),
    _ = n(910026),
    d = n(380212),
    u = n(876318);
n(642827), n(669531);
var b = n(320306),
    g = n(516738),
    m = n(604156);
let I = {
        skuId: a.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: i.R.AVATAR_DECORATION,
        name: () => c.intl.string(c.t["R4q5+y"]),
        a11yLabel: () => c.intl.string(c.t.s1HWnQ)
    },
    A = {
        skuId: a.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: i.R.NAMEPLATE,
        palette: "sky",
        name: () => c.intl.string(c.t.OzB7sI),
        a11yLabel: () => c.intl.string(c.t.WX49A3)
    },
    f = {
        skuId: a.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: i.R.AVATAR_DECORATION,
        name: () => c.intl.string(c.t.ZK9IyY),
        a11yLabel: () => c.intl.string(c.t["m/y43M"])
    },
    E = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
    },
    h = {
        rewards: [I, A, f],
        rewardAssetIdMap: (0, s.t8)([I, A, f]),
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
            getImageUrl: (e, t) => t ? _.A : l.A,
            title: () => c.intl.string(c.t.Eeqjcv),
            description: () => c.intl.string(c.t["Wp+i/e"]),
            cta: () => c.intl.string(c.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNagbar: {
            description: () => c.intl.string(c.t.veQg0t),
            cta: () => c.intl.string(c.t.RzWDqY),
            analyticsLocation: r.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNotice: {
            getImageUrl: (e, t) => t ? _.A : l.A,
            title: () => c.intl.string(c.t.bLOiLM),
            description: () => c.intl.string(c.t["cE/UX7"]),
            cta: () => c.intl.string(c.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelection: {
            heading: () => c.intl.string(c.t.OEtqpm),
            subheading: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return c.intl.formatToPlainString(c.t["2h5M+X"], {
                    availableCount: e
                })
            },
            mobileSubheading: e => c.intl.formatToPlainString(c.t["2h5M+X"], {
                availableCount: e
            }),
            gradientConfig: E,
            getImageUrl: (e, t) => t ? u.A : d.A,
            getBannerImageUrl: () => m.A,
            getBackgroundImageUrl: () => g.A
        },
        planSelectionBanner: {
            desktopBannerText: () => c.intl.string(c.t.Abiuci),
            mobileBannerText: () => c.intl.string(c.t.cMiNit),
            getImageUrl: () => u.A,
            gradientConfig: () => E,
            getBackgroundImageUrl: () => m.A
        },
        billingSettingsMarketingBanner: {
            getImageUrl: e => e ? u.A : d.A,
            title: () => c.intl.string(c.t.Eeqjcv),
            body: () => c.intl.string(c.t.IuMZS3),
            getBackgroundImageUrl: () => b.A,
            gradientConfig: {
                gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
            }
        },
        giftPurchaseConfirmation: {
            yearGiftText: c.t["0Z0G7m"],
            monthGiftText: c.t.qyhlUP,
            collectRewardButtonText: () => c.intl.string(c.t.kMYVwv),
            rewardCollectedText: () => c.intl.string(c.t.eZrmtq)
        },
        rewardSelection: {
            heading: () => c.intl.string(c.t["3JCuX1"]),
            primarySubtitle: () => c.intl.string(c.t.h2nMp0),
            secondarySubtitle: () => c.intl.string(c.t.y5wftM)
        }
    }