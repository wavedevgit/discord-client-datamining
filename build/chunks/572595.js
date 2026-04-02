/** chunk id: 572595 params = (module,exports,require) **/
a.d(t, {
    M: () => c,
    t: () => d
});
var l = a(627968);
a(64700);
var n = a(397927),
    r = a(440938),
    s = a(4227),
    i = a(466459);
let o = "collectibles shop product details modal",
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
            } = (0, i.o)(s.A, t);
            if (!e) return
        }(0, n.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([a.e("57174"), a.e("14138"), a.e("49924"), a.e("8555"), a.e("91652"), a.e("40396"), a.e("90365"), a.e("28936"), a.e("68859"), a.e("48330"), a.e("92414"), a.e("94857"), a.e("48840"), a.e("49559"), a.e("18976"), a.e("37372"), a.e("26149"), a.e("49972"), a.e("21957"), a.e("85018")]).then(a.bind(a, 929400));
            return a => (0, l.jsx)(r.R9, {
                newValue: {
                    cardId: g,
                    sessionId: f,
                    tilePosition: j
                },
                children: (0, l.jsx)(e, {
                    ...a,
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
            modalKey: o
        })
    },
    c = () => {
        (0, n.OoC)(o)
    }