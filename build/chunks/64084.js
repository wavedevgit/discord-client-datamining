/** chunk id: 64084 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968),
    l = n(64700),
    a = n(775135),
    r = n(904272);

function s(e) {
    let {
        guild: t,
        setHasSubheader: n
    } = e, s = l.useRef(null);
    return l.useLayoutEffect(() => {
        let e = s.current;
        null != e && n(e.childNodes.length > 0)
    }), (0, i.jsx)("div", {
        className: r.k,
        ref: s,
        children: (0, i.jsx)(a.A, {
            guild: t
        })
    })
}