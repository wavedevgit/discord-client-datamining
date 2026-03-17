/** chunk id: 608461 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    r = n(181658),
    l = n(985018);

function a(e) {
    let [t, n] = i.useState(!1), [a, s] = i.useState(null);
    return [i.useCallback(async function() {
        for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
        try {
            return s(null), n(!0), await e(...i)
        } catch (e) {
            e.message !== l.intl.string(l.t.N2yb9a) && s(e instanceof r.A ? e : new r.A(e))
        } finally {
            n(!1)
        }
    }, [e]), {
        loading: t,
        error: a
    }]
}