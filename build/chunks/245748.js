/** chunk id: 245748, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(606878);

function o(e) {
    let {
        children: t,
        className: n,
        flashKey: i
    } = e, [o, c] = r.useState(!1), u = r.useRef(null);
    return r.useEffect(() => (c(!0), u.current = window.setTimeout(() => {
        c(!1)
    }, 2e3), () => {
        null != u.current && clearTimeout(u.current)
    }), [i]), (0, l.jsx)("div", {
        "data-flash": o,
        className: a()(s.j, n),
        children: t
    })
}