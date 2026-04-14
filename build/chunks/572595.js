/** chunk id: 572595 params = (module,exports,require) **/
i.d(t, {
    M: () => d,
    t: () => a
});
var r = i(627968);
i(64700);
var l = i(397927),
    n = i(440938),
    s = i(4227),
    u = i(466459);
let o = "collectibles shop product details modal",
    a = e => {
        let {
            product: t,
            category: a,
            shouldCheckoutWithOrbs: d,
            analyticsSource: c,
            analyticsLocations: I,
            returnRef: h,
            tab: g,
            giftRecipient: S,
            giftingOrigin: m,
            cardId: A,
            sessionId: f,
            tilePosition: E
        } = e;
        if (t.isCategoryReward) {
            let {
                isPurchased: e
            } = (0, u.o)(s.A, t);
            if (!e) return
        }(0, l.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([i.e("57174"), i.e("91652"), i.e("37457"), i.e("8555"), i.e("7828"), i.e("90365"), i.e("28936"), i.e("68859"), i.e("48330"), i.e("92414"), i.e("94857"), i.e("48840"), i.e("49559"), i.e("18976"), i.e("37372"), i.e("67477"), i.e("41595"), i.e("21957"), i.e("8404")]).then(i.bind(i, 929400));
            return i => (0, r.jsx)(n.R9, {
                newValue: {
                    cardId: A,
                    sessionId: f,
                    tilePosition: E
                },
                children: (0, r.jsx)(e, {
                    ...i,
                    product: t,
                    category: a,
                    shouldCheckoutWithOrbs: d,
                    analyticsSource: c,
                    analyticsLocations: I,
                    returnRef: h,
                    tab: g,
                    giftRecipient: S,
                    giftingOrigin: m
                })
            })
        }, {
            modalKey: o
        })
    },
    d = () => {
        (0, l.OoC)(o)
    }