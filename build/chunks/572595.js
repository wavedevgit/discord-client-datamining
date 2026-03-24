/** chunk id: 572595 params = (module,exports,require) **/
a.d(t, {
    M: () => d,
    t: () => o
});
var l = a(627968);
a(64700);
var n = a(397927),
    r = a(4227),
    s = a(466459);
let i = "collectibles shop product details modal",
    o = e => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: d,
            analyticsSource: c,
            analyticsLocations: u,
            returnRef: x,
            tab: h,
            giftRecipient: m,
            giftingOrigin: b
        } = e;
        if (t.isCategoryReward) {
            let {
                isPurchased: e
            } = (0, s.o)(r.A, t);
            if (!e) return
        }(0, n.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([a.e("14138"), a.e("8555"), a.e("49924"), a.e("28936"), a.e("68859"), a.e("40396"), a.e("13088"), a.e("48330"), a.e("92414"), a.e("94857"), a.e("48840"), a.e("49559"), a.e("42006"), a.e("37372"), a.e("16783"), a.e("62452"), a.e("93612"), a.e("76760")]).then(a.bind(a, 929400));
            return a => (0, l.jsx)(e, {
                ...a,
                product: t,
                category: o,
                shouldCheckoutWithOrbs: d,
                analyticsSource: c,
                analyticsLocations: u,
                returnRef: x,
                tab: h,
                giftRecipient: m,
                giftingOrigin: b
            })
        }, {
            modalKey: i
        })
    },
    d = () => {
        (0, n.OoC)(i)
    }