/** chunk id: 572595 params = (module,exports,require) **/
l.d(t, {
    M: () => c,
    t: () => d
});
var a = l(627968);
l(64700);
var r = l(397927),
    n = l(440938),
    s = l(4227),
    o = l(466459);
let i = "collectibles shop product details modal",
    d = e => {
        let {
            product: t,
            category: d,
            shouldCheckoutWithOrbs: c,
            analyticsSource: u,
            analyticsLocations: x,
            returnRef: h,
            tab: m,
            giftRecipient: b,
            giftingOrigin: p,
            cardId: g,
            sessionId: f,
            tilePosition: j
        } = e;
        if (t.isCategoryReward) {
            let {
                isPurchased: e
            } = (0, o.o)(s.A, t);
            if (!e) return
        }(0, r.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([l.e("57174"), l.e("91652"), l.e("37457"), l.e("8555"), l.e("57875"), l.e("90365"), l.e("28936"), l.e("68859"), l.e("48330"), l.e("92414"), l.e("94857"), l.e("48840"), l.e("49559"), l.e("18976"), l.e("37372"), l.e("98141"), l.e("41595"), l.e("21957"), l.e("52506"), l.e("22424")]).then(l.bind(l, 929400));
            return l => (0, a.jsx)(n.R9, {
                newValue: {
                    cardId: g,
                    sessionId: f,
                    tilePosition: j
                },
                children: (0, a.jsx)(e, {
                    ...l,
                    product: t,
                    category: d,
                    shouldCheckoutWithOrbs: c,
                    analyticsSource: u,
                    analyticsLocations: x,
                    returnRef: h,
                    tab: m,
                    giftRecipient: b,
                    giftingOrigin: p
                })
            })
        }, {
            modalKey: i
        })
    },
    c = () => {
        (0, r.OoC)(i)
    }