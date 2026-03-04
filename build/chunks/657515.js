/** chunk id: 657515, original params: e,t,r (module,exports,require) **/
r.d(t, {
    zH: () => C
});
var a = r(575593),
    n = r(517950),
    _ = r(793574),
    i = r(810498),
    o = r(652215),
    d = r(985018),
    l = r(490111),
    s = r(910026),
    c = r(380212),
    u = r(876318);
r(642827), r(669531);
var p = r(320306),
    m = r(516738),
    f = r(604156);
let b = {
        skuId: n.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: a.R.AVATAR_DECORATION,
        name: () => d.intl.string(d.t["R4q5+y"]),
        a11yLabel: () => d.intl.string(d.t.s1HWnQ)
    },
    I = {
        skuId: n.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: a.R.NAMEPLATE,
        palette: "sky",
        name: () => d.intl.string(d.t.OzB7sI),
        a11yLabel: () => d.intl.string(d.t.WX49A3)
    },
    g = {
        skuId: n.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: a.R.AVATAR_DECORATION,
        name: () => d.intl.string(d.t.ZK9IyY),
        a11yLabel: () => d.intl.string(d.t["m/y43M"])
    },
    A = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
    },
    C = {
        rewards: [b, I, g],
        rewardAssetIdMap: (0, i.t8)([b, I, g]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => r.e("51463").then(r.bind(r, 347066)).then(e => {
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
            getImageUrl: (e, t) => t ? s.A : l.A,
            title: () => d.intl.string(d.t.Eeqjcv),
            description: () => d.intl.string(d.t["Wp+i/e"]),
            cta: () => d.intl.string(d.t.RzWDqY),
            analyticsLocation: _.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNagbar: {
            description: () => d.intl.string(d.t.veQg0t),
            cta: () => d.intl.string(d.t.RzWDqY),
            analyticsLocation: _.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNotice: {
            getImageUrl: (e, t) => t ? s.A : l.A,
            title: () => d.intl.string(d.t.bLOiLM),
            description: () => d.intl.string(d.t["cE/UX7"]),
            cta: () => d.intl.string(d.t.RzWDqY),
            analyticsLocation: _.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: o.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelection: {
            heading: () => d.intl.string(d.t.OEtqpm),
            subheading: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return d.intl.formatToPlainString(d.t["2h5M+X"], {
                    availableCount: e
                })
            },
            mobileSubheading: e => d.intl.formatToPlainString(d.t["2h5M+X"], {
                availableCount: e
            }),
            gradientConfig: A,
            getImageUrl: (e, t) => t ? u.A : c.A,
            getBannerImageUrl: () => f.A,
            getBackgroundImageUrl: () => m.A
        },
        planSelectionBanner: {
            desktopBannerText: () => d.intl.string(d.t.Abiuci),
            mobileBannerText: () => d.intl.string(d.t.cMiNit),
            getImageUrl: () => u.A,
            gradientConfig: () => A,
            getBackgroundImageUrl: () => f.A
        },
        billingSettingsMarketingBanner: {
            getImageUrl: e => e ? u.A : c.A,
            title: () => d.intl.string(d.t.Eeqjcv),
            body: () => d.intl.string(d.t.IuMZS3),
            getBackgroundImageUrl: () => p.A,
            gradientConfig: {
                gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
            }
        },
        giftPurchaseConfirmation: {
            yearGiftText: d.t["0Z0G7m"],
            monthGiftText: d.t.qyhlUP,
            collectRewardButtonText: () => d.intl.string(d.t.kMYVwv),
            rewardCollectedText: () => d.intl.string(d.t.eZrmtq)
        },
        rewardSelection: {
            heading: () => d.intl.string(d.t["3JCuX1"]),
            primarySubtitle: () => d.intl.string(d.t.h2nMp0),
            secondarySubtitle: () => d.intl.string(d.t.y5wftM)
        }
    }