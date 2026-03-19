/** chunk id: 899860 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968),
    i = n(64700),
    l = n(397927);
let s = function(e) {
    let {
        assetKey: t,
        initialValue: n,
        onMessageChange: s,
        title: r
    } = e, [o, d] = i.useState("");
    return i.useEffect(() => {
        d(n ?? "")
    }, [n]), (0, a.jsx)(l.ksK, {
        label: r,
        value: o,
        onChange: function(e) {
            d(e), s(t, e)
        }
    })
}