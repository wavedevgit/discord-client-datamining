/** Chunk was on 88615 **/
/** chunk id: 6316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    l = n(311907),
    i = n(904629),
    o = n(522055);

function s(e) {
    let t = (0, l.bG)([o.A], () => o.A.getStateForGuild(e));
    return r.useMemo(() => {
        var e;
        let n = Object.values(null != (e = null == t ? void 0 : t.entitlements) ? e : {});
        return 0 === n.length ? [] : (0, i.k)(n)
    }, [null == t ? void 0 : t.entitlements])
}