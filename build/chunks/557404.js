/** chunk id: 557404 params = (module,exports,require) **/
n.d(t, {
    $: () => r
});
var i = n(64700),
    l = n(576420);

function r(e) {
    let {
        scrollerRef: t,
        favoriteTargetIds: n,
        getScrollTargetForTargetId: r,
        getFallbackScrollTarget: s,
        padding: a = 8,
        animate: o = !1
    } = e, u = l.Ay.useState(e => e.recentlyAddedFavoriteTimestampMsByKey), d = i.useMemo(() => (function(e) {
        let {
            targetIds: t,
            timestampsByKey: n
        } = e, i = Date.now(), r = null;
        for (let e of t) {
            let t = n[e];
            null == t || t > i || !(i - t > l.WS) && (null == r || t > r.addedTimestampMs) && (r = {
                targetId: e,
                addedTimestampMs: t
            })
        }
        return r
    })({
        targetIds: n,
        timestampsByKey: u
    }), [n, u]), c = i.useRef(null);
    i.useEffect(() => {
        if (null == d) return;
        let e = c.current;
        if (e?.targetId === d.targetId && e.addedTimestampMs === d.addedTimestampMs) return;
        let n = t.current;
        if (null == n) return;
        let i = r(d.targetId) ?? s?.() ?? null;
        null != i && (c.current = d, n.scrollToIndex({
            section: i.section,
            row: i.row,
            padding: a,
            animate: o
        }))
    }, [o, d, s, r, a, t])
}