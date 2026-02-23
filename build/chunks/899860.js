/** chunk id: 899860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(627968),
    i = n(64700),
    s = n(397927);
let l = function(e) {
    let {
        assetKey: t,
        initialValue: n,
        onMessageChange: l,
        title: r
    } = e, [o, d] = i.useState("");
    return i.useEffect(() => {
        d(n ?? "")
    }, [n]), (0, a.jsx)(s.ksK, {
        label: r,
        value: o,
        onChange: function(e) {
            d(e), l(t, e)
        }
    })
}