/** chunk id: 50122, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(812729),
    s = n.n(i),
    l = n(311907),
    a = n(242919),
    r = n(60821);

function o() {
    let {
        recentStatuses: e,
        currentHangStatus: t,
        customHangStatus: n,
        favoritedStatuses: i
    } = (0, l.cf)([a.A], () => ({
        recentStatuses: a.A.getRecentStatuses(),
        currentHangStatus: a.A.getCurrentHangStatus(),
        customHangStatus: a.A.getCustomHangStatus(),
        favoritedStatuses: a.A.getFavoritedStatuses()
    })), o = 6 - i.length;
    return e.filter(e => {
        let i = (0, r.A)(e) ? e === t : s()(e, n);
        return !a.A.isFavorited(e) && !i
    }).slice(0, o)
}