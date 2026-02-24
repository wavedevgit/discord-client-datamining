/** chunk id: 657515, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    zH: () => h
});
var a = n(575593),
    i = n(517950),
    r = n(793574),
    o = n(810498),
    c = n(652215),
    s = n(985018),
    l = n(490111),
    _ = n(910026),
    d = n(380212),
    u = n(876318);
n(642827), n(669531);
var g = n(320306),
    b = n(516738),
    m = n(604156);
let I = {
        skuId: i.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: a.R.AVATAR_DECORATION,
        name: () => s.intl.string(s.t["R4q5+y"]),
        a11yLabel: () => s.intl.string(s.t.s1HWnQ)
    },
    A = {
        skuId: i.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: a.R.NAMEPLATE,
        palette: "sky",
        name: () => s.intl.string(s.t.OzB7sI),
        a11yLabel: () => s.intl.string(s.t.WX49A3)
    },
    E = {
        skuId: i.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: a.R.AVATAR_DECORATION,
        name: () => s.intl.string(s.t.ZK9IyY),
        a11yLabel: () => s.intl.string(s.t["m/y43M"])
    },
    p = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
    },
    h = {
        rewards: [I, A, E],
        rewardAssetIdMap: (0, o.t8)([I, A, E]),
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
            title: () => s.intl.string(s.t.Eeqjcv),
            description: () => s.intl.string(s.t["Wp+i/e"]),
            cta: () => s.intl.string(s.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: c.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNagbar: {
            description: () => s.intl.string(s.t.veQg0t),
            cta: () => s.intl.string(s.t.RzWDqY),
            analyticsLocation: r.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: c.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNotice: {
            getImageUrl: (e, t) => t ? _.A : l.A,
            title: () => s.intl.string(s.t.bLOiLM),
            description: () => s.intl.string(s.t["cE/UX7"]),
            cta: () => s.intl.string(s.t.RzWDqY),
            analyticsLocation: r.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: c.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelection: {
            heading: () => s.intl.string(s.t.OEtqpm),
            subheading: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return s.intl.formatToPlainString(s.t["2h5M+X"], {
                    availableCount: e
                })
            },
            mobileSubheading: e => s.intl.formatToPlainString(s.t["2h5M+X"], {
                availableCount: e
            }),
            gradientConfig: p,
            getImageUrl: (e, t) => t ? u.A : d.A,
            getBannerImageUrl: () => m.A,
            getBackgroundImageUrl: () => b.A
        },
        planSelectionBanner: {
            desktopBannerText: () => s.intl.string(s.t.Abiuci),
            mobileBannerText: () => s.intl.string(s.t.cMiNit),
            getImageUrl: () => u.A,
            gradientConfig: () => p,
            getBackgroundImageUrl: () => m.A
        },
        billingSettingsMarketingBanner: {
            getImageUrl: e => e ? u.A : d.A,
            title: () => s.intl.string(s.t.Eeqjcv),
            body: () => s.intl.string(s.t.IuMZS3),
            getBackgroundImageUrl: () => g.A,
            gradientConfig: {
                gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
            }
        },
        giftPurchaseConfirmation: {
            yearGiftText: s.t["0Z0G7m"],
            monthGiftText: s.t.qyhlUP,
            collectRewardButtonText: () => s.intl.string(s.t.kMYVwv),
            rewardCollectedText: () => s.intl.string(s.t.eZrmtq)
        },
        rewardSelection: {
            heading: () => s.intl.string(s.t["3JCuX1"]),
            primarySubtitle: () => s.intl.string(s.t.h2nMp0),
            secondarySubtitle: () => s.intl.string(s.t.y5wftM)
        }
    }