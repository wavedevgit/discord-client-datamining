/** Chunk was on 41727 **/
/** chunk id: 245748, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(606878);

function o(e) {
    let {
        children: t,
        className: n,
        flashKey: i
    } = e, [o, c] = l.useState(!1), u = l.useRef(null);
    return l.useEffect(() => (c(!0), u.current = window.setTimeout(() => {
        c(!1)
    }, 2e3), () => {
        null != u.current && clearTimeout(u.current)
    }), [i]), (0, r.jsx)("div", {
        "data-flash": o,
        className: s()(a.j, n),
        children: t
    })
}