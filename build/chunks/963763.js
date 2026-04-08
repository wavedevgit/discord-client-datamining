/** chunk id: 963763 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(739560),
    r = n(387265);

function o(e) {
    let {
        items: t,
        onChange: n
    } = e, [o, d] = (0, l.A)(), c = (0, i.useCallback)(e => {
        d(e), n?.(e)
    }, [d, n]);
    return (0, a.jsx)(s.BJc, {
        gap: 16,
        children: t.filter(e => isNaN(Number(e))).map(e => (0, a.jsx)(r.A, {
            content: e,
            onChange: c
        }, e))
    })
}