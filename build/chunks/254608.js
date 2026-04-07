/** chunk id: 254608 params = (module,exports,require) **/
a.d(t, {
    l: () => i
});
var n = a(627968),
    r = a(64700),
    l = a(397927),
    s = a(457417),
    o = a(985018);
let i = () => {
    let {
        searchText: e,
        updateSearchText: t
    } = (0, s.Vw)(), a = r.useRef(null);
    return (0, r.useEffect)(() => {
        null !== a.current && "" === e && a.current.focus()
    }, [e, a]), (0, n.jsx)(l.IWV, {
        ref: a,
        query: e,
        onChange: e => {
            t(e)
        },
        onClear: () => {
            t("")
        },
        placeholder: o.intl.string(o.t["5h0QOP"]),
        "aria-label": o.intl.string(o.t["5h0QOP"]),
        autoFocus: !0
    })
}