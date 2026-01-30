/** chunk id: 645034, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => i
}), t(896048);
var a = t(64700),
    r = t(198982);

function i(e, n) {
    let [t, i] = a.useState(!1), [l, o] = a.useState(null);
    return [async () => {
        i(!0), o(null);
        try {
            let n = await e();
            return i(!1), o(null), n
        } catch (t) {
            let e = new r.LG(t);
            return null == n || n(e), o(e), i(!1), null
        }
    }, {
        loading: t,
        error: l
    }]
}