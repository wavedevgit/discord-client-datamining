/** chunk id: 964459, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
});
var n = r(64700);
let l = () => {
    let e = n.useRef(!0);
    return n.useEffect(() => () => {
        e.current = !1
    }, []), n.useCallback(() => e.current, [])
}