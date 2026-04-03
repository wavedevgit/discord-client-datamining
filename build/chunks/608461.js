/** chunk id: 608461 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(64700),
    l = n(181658),
    r = n(985018);

function s(e) {
    let [t, n] = i.useState(!1), [s, a] = i.useState(null);
    return [i.useCallback(async function() {
        for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        try {
            return a(null), n(!0), await e(...i)
        } catch (e) {
            e.message !== r.intl.string(r.t.N2yb9a) && a(e instanceof l.A ? e : new l.A(e))
        } finally {
            n(!1)
        }
    }, [e]), {
        loading: t,
        error: s
    }]
}