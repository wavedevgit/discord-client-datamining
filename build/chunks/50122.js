/** Chunk was on 97492 **/
/** chunk id: 50122, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(812729),
    l = n.n(r),
    i = n(311907),
    s = n(242919),
    a = n(60821);

function o() {
    let {
        recentStatuses: e,
        currentHangStatus: t,
        customHangStatus: n,
        favoritedStatuses: r
    } = (0, i.cf)([s.A], () => ({
        recentStatuses: s.A.getRecentStatuses(),
        currentHangStatus: s.A.getCurrentHangStatus(),
        customHangStatus: s.A.getCustomHangStatus(),
        favoritedStatuses: s.A.getFavoritedStatuses()
    })), o = 6 - r.length;
    return e.filter(e => {
        let r = (0, a.A)(e) ? e === t : l()(e, n);
        return !s.A.isFavorited(e) && !r
    }).slice(0, o)
}