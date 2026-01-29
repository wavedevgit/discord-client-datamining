/** Chunk was on 4670 **/
/** chunk id: 324734, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => A
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(271866),
    a = i(419954),
    u = i(147964),
    o = i(253932),
    d = i(780964),
    T = i(912615),
    c = i(985018);
let A = (0, a.zD)(d.X.ADVANCED_APPLICATION_TEST_MODE, {
    useTitle: () => c.intl.string(c.t.erOqlh),
    useSubtitle: () => c.intl.string(c.t["52hMnD"]),
    usePredicate: o.Q_.useSetting,
    useValue: () => (0, l.bG)([u.A], () => null != u.A.testModeApplicationId),
    setValue: e => {
        e ? (0, s.qfG)(e => (0, n.jsx)(T.A, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = i[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, e))) : r.cL()
    }
})