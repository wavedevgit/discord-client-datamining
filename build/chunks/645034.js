/** chunk id: 645034 params = (module,exports,require) **/
t.d(n, {
    A: () => r
});
var a = t(64700),
    i = t(198982);

function r(e, n) {
    let [t, r] = a.useState(!1), [o, s] = a.useState(null);
    return [async () => {
        r(!0), s(null);
        try {
            let n = await e();
            return r(!1), s(null), n
        } catch (t) {
            let e = new i.LG(t);
            return n?.(e), s(e), r(!1), null
        }
    }, {
        loading: t,
        error: o
    }]
}