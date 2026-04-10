/** chunk id: 424956 params = (module,exports,require) **/
n.d(t, {
    p: () => r
});
var i = n(64700),
    l = n(965660);

function r(e) {
    let {
        guildDiscoveryCardSeenManager: t,
        loadId: n
    } = e, r = i.useCallback((e, i) => {
        t.markAsSeen(i, e, n)
    }, [t, n]), a = i.useCallback((e, t, i, r) => (0, l.Wl)({
        loadId: n,
        guildId: e,
        index: t,
        categoryId: i,
        analyticsLocation: r
    }), [n]);
    return i.useMemo(() => ({
        onGuildCardSeen: r,
        onGuildCardClick: a
    }), [a, r])
}