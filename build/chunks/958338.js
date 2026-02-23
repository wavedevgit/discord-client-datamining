/** chunk id: 958338, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => d,
    Y: () => u
});
var i = n(64700),
    l = n(311907),
    a = n(544420),
    s = n(524799),
    r = n(958805),
    o = n(61881),
    c = n(911498);

function d(e) {
    let {
        bump: t,
        bumpMultiple: n,
        gameIds: r
    } = (0, c.s)();
    ! function(e) {
        let {
            remove: t,
            peekedGameIds: n
        } = (0, c.s)(), r = i.useMemo(() => n[e] ?? [], [n, e]);
        i.useEffect(() => {
            let e = r.filter(e => s.A.canFetch(e));
            e.length > 0 && a.A.getDetectableGamesSupplemental(e)
        }, [r]);
        let o = (0, l.yK)([s.A], () => r.map(e => s.A.isFetching(e)));
        i.useEffect(() => {
            for (let n of r) {
                let i = !s.A.canFetch(n) && !s.A.isFetching(n),
                    l = null != s.A.getCoverImageUrl(n);
                i && !l && t(n, e)
            }
        }, [r, t, e, o])
    }(e);
    let o = i.useMemo(() => r[e] ?? [], [r, e]),
        d = i.useCallback(n => {
            t(n, e)
        }, [t, e]),
        u = (0, l.yK)([s.A], () => o.map(e => s.A.isFetching(e)));
    i.useEffect(() => {
        let t = o.filter(e => {
            let t = !s.A.canFetch(e) && !s.A.isFetching(e),
                n = null != s.A.getCoverImageUrl(e);
            return t && !n
        });
        t.length > 0 && n(t, e)
    }, [o, e, n, u]);
    let g = i.useMemo(() => o.map(e => ({
        applicationId: e
    })), [o]);
    return {
        applicationIds: o,
        games: g,
        onAddGame: d
    }
}

function u(e, t) {
    let [n, a, s, d] = (0, l.yK)([o.A], () => [o.A.suggestedFetchAttempted, o.A.suggestedFetchError, o.A.suggestedGameIds, o.A.suggestedFetchIsLoading]), {
        onLoad: u
    } = (0, c.s)();
    i.useEffect(() => {
        !n && e && r.A.fetchSuggestedGames()
    }, [n, e]);
    let g = n && !d;
    i.useEffect(() => {
        if (!g) return;
        let e = t.map(e => e.games).flat();
        a || u(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e)
    }, [g])
}