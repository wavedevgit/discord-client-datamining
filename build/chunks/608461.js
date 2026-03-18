/** chunk id: 608461 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(64700),
    r = n(181658),
    a = n(985018);

function l(e) {
    let [t, n] = i.useState(!1), [l, s] = i.useState(null);
    return [i.useCallback(async function() {
        for (var t = arguments.length, i = Array(t), l = 0; l < t; l++) i[l] = arguments[l];
        try {
            return s(null), n(!0), await e(...i)
        } catch (e) {
            e.message !== a.intl.string(a.t.N2yb9a) && s(e instanceof r.A ? e : new r.A(e))
        } finally {
            n(!1)
        }
    }, [e]), {
        loading: t,
        error: l
    }]
}