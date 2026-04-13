/** chunk id: 517461 params = (module,exports,require) **/
n.d(t, {
    V: () => r
});
var l = n(64700),
    s = n(506774),
    i = n(964486);

function r(e, t) {
    let [n, r] = l.useState(() => {
        let n = s.w.get(e);
        return null != n ? n : t
    });
    return (0, i.Ay)(() => {
        null == s.w.get(e) && s.w.set(e, t)
    }), [n, l.useCallback(t => {
        r(t), s.w.set(e, t)
    }, [e])]
}