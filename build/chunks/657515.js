/** chunk id: 657515, original params: e,t,r (module,exports,require) **/
r.d(t, {
    zH: () => A
});
var a = r(575593),
    n = r(517950),
    i = r(793574),
    o = r(810498),
    _ = r(652215),
    l = r(985018),
    d = r(490111),
    u = r(910026),
    s = r(380212),
    m = r(876318);
r(642827), r(669531);
var p = r(320306),
    c = r(516738),
    f = r(604156);
let g = {
        skuId: n.a.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID,
        assetId: "a_670b722e56740d11d1e6fe55b8094013",
        type: a.R.AVATAR_DECORATION,
        name: () => l.intl.string(l.t["R4q5+y"]),
        a11yLabel: () => l.intl.string(l.t.s1HWnQ)
    },
    b = {
        skuId: n.a.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID,
        assetId: "nameplates/nameplates_v2/starfall_tides/",
        type: a.R.NAMEPLATE,
        palette: "sky",
        name: () => l.intl.string(l.t.OzB7sI),
        a11yLabel: () => l.intl.string(l.t.WX49A3)
    },
    C = {
        skuId: n.a.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID,
        assetId: "a_6d99f670de3fcee669660fe262e896ea",
        type: a.R.AVATAR_DECORATION,
        name: () => l.intl.string(l.t.ZK9IyY),
        a11yLabel: () => l.intl.string(l.t["m/y43M"])
    },
    I = {
        gradient: ["rgba(177, 186, 253, 1)", "rgba(91, 108, 242, 1)", "rgba(21, 18, 99, 1)"]
    },
    A = {
        rewards: [g, b, C],
        rewardAssetIdMap: (0, o.t8)([g, b, C]),
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
            getImageUrl: (e, t) => t ? u.A : d.A,
            title: () => l.intl.string(l.t.Eeqjcv),
            description: () => l.intl.string(l.t["Wp+i/e"]),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: i.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNagbar: {
            description: () => l.intl.string(l.t.veQg0t),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: i.A.SEASONAL_GIFTING_REMINDER_NAGBAR,
            analyticsPage: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        reminderNotice: {
            getImageUrl: (e, t) => t ? u.A : d.A,
            title: () => l.intl.string(l.t.bLOiLM),
            description: () => l.intl.string(l.t["cE/UX7"]),
            cta: () => l.intl.string(l.t.RzWDqY),
            analyticsLocation: i.A.GIFTING_PROMOTION_COACHMARK,
            analyticsPage: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
        },
        planSelection: {
            heading: () => l.intl.string(l.t.OEtqpm),
            subheading: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return l.intl.formatToPlainString(l.t["2h5M+X"], {
                    availableCount: e
                })
            },
            mobileSubheading: e => l.intl.formatToPlainString(l.t["2h5M+X"], {
                availableCount: e
            }),
            gradientConfig: I,
            getImageUrl: (e, t) => t ? m.A : s.A,
            getBannerImageUrl: () => f.A,
            getBackgroundImageUrl: () => c.A
        },
        planSelectionBanner: {
            desktopBannerText: () => l.intl.string(l.t.Abiuci),
            mobileBannerText: () => l.intl.string(l.t.cMiNit),
            getImageUrl: () => m.A,
            gradientConfig: () => I,
            getBackgroundImageUrl: () => f.A
        },
        billingSettingsMarketingBanner: {
            getImageUrl: e => e ? m.A : s.A,
            title: () => l.intl.string(l.t.Eeqjcv),
            body: () => l.intl.string(l.t.IuMZS3),
            getBackgroundImageUrl: () => p.A,
            gradientConfig: {
                gradient: ["rgba(74, 87, 192, 1)", "rgba(8, 5, 67, 1)"]
            }
        },
        giftPurchaseConfirmation: {
            yearGiftText: l.t["0Z0G7m"],
            monthGiftText: l.t.qyhlUP,
            collectRewardButtonText: () => l.intl.string(l.t.kMYVwv),
            rewardCollectedText: () => l.intl.string(l.t.eZrmtq)
        },
        rewardSelection: {
            heading: () => l.intl.string(l.t["3JCuX1"]),
            primarySubtitle: () => l.intl.string(l.t.h2nMp0),
            secondarySubtitle: () => l.intl.string(l.t.y5wftM)
        }
    }