/** chunk id: 4196, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => x
}), s(667532);
var n = s(64700),
    l = s(735438),
    r = s.n(l),
    a = s(12544),
    i = s(311907),
    o = s(153488),
    c = s(590180),
    d = s(248352),
    u = s(993408),
    g = s(511265),
    _ = s(313276),
    m = s(206077),
    h = s(623373),
    p = s(652215),
    f = s(985018);

function x(e) {
    let {
        sortedSkuIds: t,
        isPremiumUser: s,
        prioritizeUserDiscounts: l,
        orbsSupportedOnly: x
    } = e, E = (0, i.bG)([o.A], () => o.A.hasConsented(p.YAq.PERSONALIZATION)), C = n.useMemo(() => t?.[a.i.RECOMMENDED] ?? [], [t]), A = n.useMemo(() => t?.[a.i.POPULAR] ?? [], [t]), b = C.length > 0 && E, [S, v] = n.useState(b ? a.i.RECOMMENDED : a.i.POPULAR), L = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup), I = n.useMemo(() => (0, u.CE)(L), [L]), j = (0, i.bG)([d.A], () => d.A.getUserDiscounts()), k = (0, _.A)(), T = (0, g.p)(), [O, N] = n.useState([]), y = n.useCallback(() => {
        v(a.i.RANDOM), N(r().shuffle(I))
    }, [I]);
    n.useEffect(() => {
        N(r().shuffle(I))
    }, [I]);
    let R = n.useMemo(() => {
        let e = [];
        if (S === a.i.RECENT) e = I;
        else if (S === a.i.PRICE_LOW_TO_HIGH) e = (0, u.bf)([...I], s, x);
        else if (S === a.i.RECOMMENDED) {
            let t = k(C);
            e = l ? (0, u.Bs)(t, j) : t
        } else if (S === a.i.POPULAR) {
            let t = k(A);
            e = l ? (0, u.Bs)(t, j) : t
        } else S === a.i.RANDOM && (e = O);
        return x ? (0, h.ex)(T(e)) : T(e)
    }, [S, x, T, s, I, k, C, l, j, A, O]);
    return {
        sortType: S,
        setSortType: v,
        sortedItems: (0, m.X)(R),
        sortOptions: n.useMemo(() => {
            let e = [{
                value: a.i.POPULAR,
                label: f.intl.string(f.t.Y68e5p)
            }, {
                value: a.i.RECENT,
                label: f.intl.string(f.t["51Bhiz"])
            }, {
                value: a.i.PRICE_LOW_TO_HIGH,
                label: f.intl.string(f.t.m8RVU2)
            }];
            return b && e.unshift({
                value: a.i.RECOMMENDED,
                label: f.intl.string(f.t.zPWgFG)
            }), e
        }, [b]),
        showRecommendationOption: b,
        shuffleProducts: y
    }
}