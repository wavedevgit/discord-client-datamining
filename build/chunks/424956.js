/** chunk id: 424956 params = (module,exports,require) **/
n.d(t, {
    p: () => a
});
var i = n(64700),
    l = n(965660);

function a(e) {
    let {
        guildDiscoveryCardSeenManager: t,
        loadId: n
    } = e, a = i.useCallback((e, i) => {
        t.markAsSeen(i, e, n)
    }, [t, n]), r = i.useCallback((e, t, i, a) => (0, l.Wl)({
        loadId: n,
        guildId: e,
        index: t,
        categoryId: i,
        analyticsLocation: a
    }), [n]);
    return i.useMemo(() => ({
        onGuildCardSeen: a,
        onGuildCardClick: r
    }), [r, a])
}