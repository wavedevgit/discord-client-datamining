/** Chunk was on 59275 **/
/** chunk id: 4196, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048), n(667532);
var r = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(12544),
    i = n(311907),
    o = n(153488),
    c = n(590180),
    u = n(248352),
    d = n(993408),
    g = n(511265),
    f = n(313276),
    m = n(206077),
    p = n(623373),
    _ = n(652215),
    b = n(985018);

function h(e) {
    let {
        sortedSkuIds: t,
        isPremiumUser: n,
        prioritizeUserDiscounts: l,
        orbsSupportedOnly: h
    } = e, E = (0, i.bG)([o.A], () => o.A.hasConsented(_.YAq.PERSONALIZATION)), v = r.useMemo(() => {
        var e;
        return null != (e = null == t ? void 0 : t[a.i.RECOMMENDED]) ? e : []
    }, [t]), C = r.useMemo(() => {
        var e;
        return null != (e = null == t ? void 0 : t[a.i.POPULAR]) ? e : []
    }, [t]), A = v.length > 0 && E, [x, S] = r.useState(A ? a.i.RECOMMENDED : a.i.POPULAR), O = (0, i.bG)([c.A], () => c.A.productsWithVariantsAsGroup), y = r.useMemo(() => (0, d.CE)(O), [O]), j = (0, i.bG)([u.A], () => u.A.getUserDiscounts()), T = (0, f.A)(), L = (0, g.p)(), [I, k] = r.useState([]), N = r.useCallback(() => {
        S(a.i.RANDOM), k(s().shuffle(y))
    }, [y]);
    r.useEffect(() => {
        k(s().shuffle(y))
    }, [y]);
    let R = r.useMemo(() => {
        let e = [];
        if (x === a.i.RECENT) e = y;
        else if (x === a.i.PRICE_LOW_TO_HIGH) e = (0, d.bf)([...y], n, h);
        else if (x === a.i.RECOMMENDED) {
            let t = T(v);
            e = l ? (0, d.Bs)(t, j) : t
        } else if (x === a.i.POPULAR) {
            let t = T(C);
            e = l ? (0, d.Bs)(t, j) : t
        } else x === a.i.RANDOM && (e = I);
        return h ? (0, p.ex)(L(e)) : L(e)
    }, [x, h, L, n, y, T, v, l, j, C, I]);
    return {
        sortType: x,
        setSortType: S,
        sortedItems: (0, m.X)(R),
        sortOptions: r.useMemo(() => {
            let e = [{
                value: a.i.POPULAR,
                label: b.intl.string(b.t.Y68e5p)
            }, {
                value: a.i.RECENT,
                label: b.intl.string(b.t["51Bhiz"])
            }, {
                value: a.i.PRICE_LOW_TO_HIGH,
                label: b.intl.string(b.t.m8RVU2)
            }];
            return A && e.unshift({
                value: a.i.RECOMMENDED,
                label: b.intl.string(b.t.zPWgFG)
            }), e
        }, [A]),
        showRecommendationOption: A,
        shuffleProducts: N
    }
}