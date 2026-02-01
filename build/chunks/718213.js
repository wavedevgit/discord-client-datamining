/** chunk id: 718213, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => a
}), r(896048);
var n = r(64700);
let a = function(e, t) {
    let [r, a] = n.useState(e);
    return n.useEffect(() => {
        let r = setTimeout(() => {
            a(e)
        }, t);
        return () => {
            clearTimeout(r)
        }
    }, [e, t]), r
}