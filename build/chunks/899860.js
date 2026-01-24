/** Chunk was on 36054 **/
/** chunk id: 899860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(397927);
let i = function(e) {
    let {
        assetKey: t,
        initialValue: n,
        onMessageChange: i,
        title: s
    } = e, [o, c] = l.useState("");
    return l.useEffect(() => {
        c(null != n ? n : "")
    }, [n]), (0, a.jsx)(r.ksK, {
        label: s,
        value: o,
        onChange: function(e) {
            c(e), i(t, e)
        }
    })
}