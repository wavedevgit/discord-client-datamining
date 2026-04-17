/** chunk id: 572595 params = (module,exports,require) **/
n.d(t, {
    M: () => d,
    t: () => c
});
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(440938),
    r = n(4227),
    s = n(466459);
let o = "collectibles shop product details modal",
    c = e => {
        let {
            product: t,
            category: c,
            shouldCheckoutWithOrbs: d,
            analyticsSource: u,
            analyticsLocations: m,
            returnRef: f,
            tab: h,
            giftRecipient: x,
            giftingOrigin: g,
            cardId: p,
            sessionId: _,
            tilePosition: v
        } = e;
        if (t.isCategoryReward) {
            let {
                isPurchased: e
            } = (0, s.o)(r.A, t);
            if (!e) return
        }(0, a.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("57174"), n.e("91652"), n.e("37457"), n.e("8555"), n.e("57875"), n.e("90365"), n.e("28936"), n.e("68859"), n.e("48330"), n.e("92414"), n.e("94857"), n.e("48840"), n.e("49559"), n.e("18976"), n.e("37372"), n.e("98141"), n.e("41595"), n.e("21957"), n.e("56024")]).then(n.bind(n, 929400));
            return n => (0, l.jsx)(i.R9, {
                newValue: {
                    cardId: p,
                    sessionId: _,
                    tilePosition: v
                },
                children: (0, l.jsx)(e, {
                    ...n,
                    product: t,
                    category: c,
                    shouldCheckoutWithOrbs: d,
                    analyticsSource: u,
                    analyticsLocations: m,
                    returnRef: f,
                    tab: h,
                    giftRecipient: x,
                    giftingOrigin: g
                })
            })
        }, {
            modalKey: o
        })
    },
    d = () => {
        (0, a.OoC)(o)
    }