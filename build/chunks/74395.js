/** chunk id: 74395 params = (module,exports,require) **/
n.d(t, {
    t: () => o
});
var i = n(64700),
    r = n(810412),
    l = n(914853),
    s = n(509295),
    a = n(406595);

function o(e) {
    let {
        tab: t,
        targetId: n,
        shouldStopPropagation: o,
        widgetType: u
    } = e;
    return i.useCallback(e => {
        o && (e?.preventDefault(), e?.stopPropagation());
        let [i] = a.A.isFavorite(t, n);
        (0, s.k)({
            tab: t,
            targetId: n,
            isFavorite: !i
        }), (0, r.YX)(u, {
            type: r.Z5.FAVORITE,
            value: i ? r.IP.REMOVED_FROM_FAVORITES : r.IP.ADDED_TO_FAVORITES,
            secondaryValue: t,
            userId: t === l.x.FRIENDS ? n : void 0
        })
    }, [o, t, n, u])
}