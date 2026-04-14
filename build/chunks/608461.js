/** chunk id: 608461 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(64700),
    a = n(181658),
    l = n(985018);

function s(e) {
    let [t, n] = i.useState(!1), [s, r] = i.useState(null);
    return [i.useCallback(async function() {
        for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        try {
            return r(null), n(!0), await e(...i)
        } catch (e) {
            e.message !== l.intl.string(l.t.N2yb9a) && r(e instanceof a.A ? e : new a.A(e))
        } finally {
            n(!1)
        }
    }, [e]), {
        loading: t,
        error: s
    }]
}