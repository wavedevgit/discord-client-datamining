/** Chunk was on 41727 **/
/** chunk id: 404522, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => o
});
var r = n(64700),
    l = n(311907),
    i = n(476370),
    s = n(795816),
    a = n(933958);
let o = e => {
    let {
        surface: t,
        skipFetchingShelf: n = !0
    } = e, o = (0, l.bG)([a.Ay], () => a.Ay.getState());
    return (0, r.useEffect)(() => {
        var e;
        (null == (e = o.lastCheckedForBadgeableActivities) || new Date(e).getTime() < Date.now() - 432e5) && !n && (0, s.LV)({
            guildId: null
        })
    }, [o.lastCheckedForBadgeableActivities, n]), (0, r.useMemo)(() => (0, i.C)({
        storeState: o,
        surface: t
    }), [o, t])
}