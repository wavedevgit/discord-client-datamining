/** Chunk was on 65298 **/
/** chunk id: 963763, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(158954),
    i = n(739560),
    s = n(387265);

function o(e) {
    let {
        items: t,
        onChange: n
    } = e, [o, c] = (0, i.A)(), d = (0, l.useCallback)(e => {
        c(e), null == n || n(e)
    }, [c, n]);
    return (0, a.jsx)(r.BJc, {
        gap: 16,
        children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(s.A, {
            content: e,
            onChange: d
        }, e))
    })
}