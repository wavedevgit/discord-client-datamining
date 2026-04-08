/** chunk id: 300233 params = (module,exports,require) **/
n.d(t, {
    H: () => u,
    X: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(142120),
    a = n(579908),
    o = n(636194);
let d = l.createContext(void 0);

function c(e) {
    let t = l.useContext(d);
    if (null == t) throw Error(`${e??"useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let {
        listingsLoaded: n,
        fetchGroupListingsForGuild: i
    } = t;
    return l.useEffect(() => {
        i()
    }, [i]), n
}

function u(e) {
    let {
        guildId: t,
        children: n,
        refetchOnMount: c,
        includeSoftDeleted: u,
        countryCode: m,
        dontFetchWhileTrue: _
    } = e, h = (0, s.bG)([r.A], () => r.A.isConnected()), p = (0, s.bG)([o.A], () => null != t ? o.A.getSubscriptionGroupListingsForGuildFetchState(t) : o.e.FETCHED), [g, A] = l.useState(!0 === c), x = l.useCallback(() => {
        if (null == t || !h || !0 === _) return;
        let e = o.A.getSubscriptionGroupListingsForGuildFetchState(t);
        (g || e === o.e.NOT_FETCHED) && (A(!1), a.WA(t, {
            includeSoftDeleted: u,
            countryCode: m
        }))
    }, [h, t, u, m, _, g]), f = p === o.e.FETCHED && !g;
    return (0, i.jsx)(d.Provider, {
        value: {
            listingsLoaded: f,
            fetchGroupListingsForGuild: x
        },
        children: n
    })
}