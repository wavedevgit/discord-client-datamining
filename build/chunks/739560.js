/** Chunk was on 65298 **/
/** chunk id: 739560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
}), n(896048), n(667532);
var a = n(64700),
    l = n(506774);

function r() {
    let e = (0, a.useCallback)(e => {
        let t = new Set(i());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), l.w.set("RecentDismissibleOverrides", n)
    }, []);
    return [i(), e]
}

function i() {
    var e;
    return null != (e = l.w.get("RecentDismissibleOverrides")) ? e : []
}