/** chunk id: 6316 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(311907),
    s = n(904629),
    l = n(522055);

function o(e) {
    let t = (0, i.bG)([l.A], () => l.A.getStateForGuild(e));
    return r.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, s.k)(e)
    }, [t?.entitlements])
}