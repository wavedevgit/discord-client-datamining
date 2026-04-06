/** chunk id: 608461 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    l = n(181658),
    s = n(985018);

function a(e) {
    let [t, n] = i.useState(!1), [a, r] = i.useState(null);
    return [i.useCallback(async function() {
        for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
        try {
            return r(null), n(!0), await e(...i)
        } catch (e) {
            e.message !== s.intl.string(s.t.N2yb9a) && r(e instanceof l.A ? e : new l.A(e))
        } finally {
            n(!1)
        }
    }, [e]), {
        loading: t,
        error: a
    }]
}