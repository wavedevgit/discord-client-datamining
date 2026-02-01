/** chunk id: 324734, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => S
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(271866),
    u = i(419954),
    a = i(147964),
    o = i(253932),
    d = i(780964),
    T = i(912615),
    A = i(985018);
let S = (0, u.zD)(d.X.ADVANCED_APPLICATION_TEST_MODE, {
    useTitle: () => A.intl.string(A.t.erOqlh),
    useSubtitle: () => A.intl.string(A.t["52hMnD"]),
    usePredicate: o.Q_.useSetting,
    useValue: () => (0, l.bG)([a.A], () => null != a.A.testModeApplicationId),
    setValue: t => {
        t ? (0, s.qfG)(t => (0, n.jsx)(T.A, function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable
                }))), n.forEach(function(e) {
                    var n;
                    n = i[e], e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n
                })
            }
            return t
        }({}, t))) : r.cL()
    }
})