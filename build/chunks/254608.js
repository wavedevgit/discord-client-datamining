/** chunk id: 254608, original params: e,t,r (module,exports,require) **/
r.d(t, {
    l: () => i
});
var n = r(627968),
    l = r(64700),
    a = r(397927),
    o = r(457417),
    s = r(985018);
let i = () => {
    let {
        searchText: e,
        updateSearchText: t
    } = (0, o.Vw)(), r = l.useRef(null);
    return (0, l.useEffect)(() => {
        null !== r.current && "" === e && r.current.focus()
    }, [e, r]), (0, n.jsx)(a.IWV, {
        ref: r,
        query: e,
        onChange: e => {
            t(e)
        },
        onClear: () => {
            t("")
        },
        placeholder: s.intl.string(s.t["5h0QOP"]),
        "aria-label": s.intl.string(s.t["5h0QOP"]),
        autoFocus: !0
    })
}