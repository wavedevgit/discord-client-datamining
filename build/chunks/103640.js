/** chunk id: 103640, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    HN: () => l,
    RL: () => c,
    U$: () => o
}), n(896048);
var r = n(374994),
    i = n(31408);
let a = function(e, t) {
        let {
            multiplier: n,
            value: r
        } = e, [i, a] = t, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, s = r * n;
        return s <= 0 ? 0 : Math.min(o, i.reduce((e, t, n) => {
            if (s > t) {
                let e = a[n];
                if (n + 1 === i.length) return a[n];
                let r = i[n + 1],
                    o = a[n + 1],
                    l = r - t;
                return (s - t) / l * (o - e) + e
            }
            return s === t ? a[n] : e
        }, 0))
    },
    o = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.fZ.LEVEL_3;
        return a(e, [i.dw[t], i.MO[t]], 1e5)
    },
    s = [
        [1, .001],
        [25, .3],
        [100, .5],
        [250, .8],
        [500, .9],
        [2500, .95],
        [9001, 1]
    ],
    l = (s.map(e => {
        let [t] = e;
        return t
    }), s.map(e => {
        let [t, n] = e;
        return n
    }), e => 1 === e ? {
        color: (0, r.dE)("BRAND_500")
    } : 2 === e || 3 === e ? {
        color: (0, r.dE)("GREEN_360")
    } : 4 === e || 5 === e ? {
        color: (0, r.dE)("YELLOW_300"),
        square: !0
    } : 6 === e ? {
        color: (0, r.dE)("RED_400"),
        square: !0
    } : {
        color: (0, r.dE)("ORANGE_345"),
        flair: !0
    });

function c(e) {
    var t;
    return e.value * (null != (t = e.multiplier) ? t : 1)
}