/** chunk id: 657515 params = (module,exports,require) **/
n.d(e, {
    zH: () => L
});
var i = n(575593),
    r = n(517950),
    l = n(793574),
    a = n(810498),
    s = n(652215),
    o = n(985018),
    c = n(490111),
    d = n(910026),
    u = n(380212),
    h = n(876318);
n(642827), n(669531);
var C = n(320306),
    g = n(516738),
    A = n(604156);
let E = {
        skuId: r.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: i.R.AVATAR_DECORATION,
        name: () => o.intl.string(o.t["R4q5+y"]),
        a11yLabel: () => o.intl.string(o.t.s1HWnQ)
    },
    _ = {
        skuId: r.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: i.R.NAMEPLATE,
        palette: "sky",
        name: () => o.intl.string(o.t.OzB7sI),
        a11yLabel: () => o.intl.string(o.t.WX49A3)
    },
    m = {
        skuId: r.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: i.R.AVATAR_DECORATION,
        name: () => o.intl.string(o.t.ZK9IyY),
        a11yLabel: () => o.intl.string(o.t["m/y43M"])
    },
    p = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
    },
    L = {
        rewards: [E, _, m],
        rewardAssetIdMap: (0, a.t8)([E, _, m]),
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => n.e("51463").then(n.bind(n, 347066)).then(t => {
                    let {
                        default: e
                    } = t;
                    return fetch(e).then(t => t.json())
                }),
                getGlowAnimationData: () => Promise.resolve(null)
            },
            gradientConfig: {
                gradient: ["rgba(88, 101, 242, 0)", "rgba(88, 101, 242, 1)"]
            }
        },
        firstTimeNotice: {
            getImageUrl: (t, e) => e ? d.A : c.A,
            title: () => o.intl.string(o.t.Eeqjcv),
            description: () => o.intl.string(o.t["Wp+i/e"]),
            cta: () => o.intl.string(o.t.RzWDqY),
            analyticsLocation: l.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNagbar: {
            description: () => o.intl.string(o.t.veQg0t),
            cta: () => o.intl.string(o.t.RzWDqY),
            analyticsLocation: l.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: s.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNotice: {
            getImageUrl: (t, e) => e ? d.A : c.A,
            title: () => o.intl.string(o.t.bLOiLM),
            description: () => o.intl.string(o.t["cE/UX7"]),
            cta: () => o.intl.string(o.t.RzWDqY),
            analyticsLocation: l.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: s.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelection: {
            heading: () => o.intl.string(o.t.OEtqpm),
            subheading: function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return o.intl.formatToPlainString(o.t["2h5M+X"], {
                    availableCount: t
                })
            },
            mobileSubheading: t => o.intl.formatToPlainString(o.t["2h5M+X"], {
                availableCount: t
            }),
            gradientConfig: p,
            getImageUrl: (t, e) => e ? h.A : u.A,
            getBannerImageUrl: () => A.A,
            getBackgroundImageUrl: () => g.A
        },
        planSelectionBanner: {
            desktopBannerText: () => o.intl.string(o.t.Abiuci),
            mobileBannerText: () => o.intl.string(o.t.cMiNit),
            getImageUrl: () => h.A,
            gradientConfig: () => p,
            getBackgroundImageUrl: () => A.A
        },
        billingSettingsMarketingBanner: {
            getImageUrl: t => t ? h.A : u.A,
            title: () => o.intl.string(o.t.Eeqjcv),
            body: () => o.intl.string(o.t.IuMZS3),
            getBackgroundImageUrl: () => C.A,
            gradientConfig: {
                gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
            }
        },
        giftPurchaseConfirmation: {
            yearGiftText: o.t["0Z0G7m"],
            monthGiftText: o.t.qyhlUP,
            collectRewardButtonText: () => o.intl.string(o.t.kMYVwv),
            rewardCollectedText: () => o.intl.string(o.t.eZrmtq)
        },
        rewardSelection: {
            heading: () => o.intl.string(o.t["3JCuX1"]),
            primarySubtitle: () => o.intl.string(o.t.h2nMp0),
            secondarySubtitle: () => o.intl.string(o.t.y5wftM)
        }
    }