/** chunk id: 572595, original params: e,t,l (module,exports,require) **/
l.d(t, {
    M: () => d,
    t: () => u
});
var i = l(627968);
l(64700);
var r = l(397927),
    n = l(4227),
    a = l(466459);
let s = "collectibles shop product details modal",
    u = e => {
        let {
            product: t,
            category: u,
            shouldCheckoutWithOrbs: d,
            analyticsSource: o,
            analyticsLocations: c,
            returnRef: h,
            tab: A
        } = e;
        if (t.isCategoryReward) {
            let {
                isPurchased: e
            } = (0, a.o)(n.A, t);
            if (!e) return
        }(0, r.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([l.e("8555"), l.e("28936"), l.e("68859"), l.e("40396"), l.e("13088"), l.e("48330"), l.e("92414"), l.e("94857"), l.e("48840"), l.e("49559"), l.e("37372"), l.e("99970"), l.e("95095"), l.e("41595"), l.e("93612"), l.e("16289")]).then(l.bind(l, 929400));
            return l => (0, i.jsx)(e, {
                ...l,
                product: t,
                category: u,
                shouldCheckoutWithOrbs: d,
                analyticsSource: o,
                analyticsLocations: c,
                returnRef: h,
                tab: A
            })
        }, {
            modalKey: s
        })
    },
    d = () => {
        (0, r.OoC)(s)
    }