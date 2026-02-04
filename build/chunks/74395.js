/** chunk id: 74395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => o
}), n(896048);
var l = n(64700),
    r = n(810412),
    i = n(914853),
    s = n(509295),
    a = n(406595);

function o(e) {
    let {
        tab: t,
        targetId: n,
        shouldStopPropagation: o,
        widgetType: u
    } = e;
    return l.useCallback(e => {
        o && (null == e || e.preventDefault(), null == e || e.stopPropagation());
        let [l] = a.A.isFavorite(t, n);
        (0, s.k)({
            tab: t,
            targetId: n,
            isFavorite: !l
        }), (0, r.YX)(u, {
            type: r.Z5.FAVORITE,
            value: l ? r.IP.REMOVED_FROM_FAVORITES : r.IP.ADDED_TO_FAVORITES,
            secondaryValue: t,
            userId: t === i.x.FRIENDS ? n : void 0
        })
    }, [o, t, n, u])
}