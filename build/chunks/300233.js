/** chunk id: 300233 params = (module,exports,require) **/
n.d(t, {
    H: () => u,
    X: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(417597),
    l = n(142120),
    s = n(579908),
    o = n(636194);
let d = a.createContext(void 0);

function c(e) {
    let t = a.useContext(d);
    if (null == t) throw Error(`${e??"useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let {
        listingsLoaded: n,
        fetchGroupListingsForGuild: i
    } = t;
    return i(), n
}

function u(e) {
    let {
        guildId: t,
        children: n,
        refetchOnMount: c,
        includeSoftDeleted: u,
        countryCode: _,
        dontFetchWhileTrue: m
    } = e, h = (0, r.bG)([l.A], () => l.A.isConnected()), p = (0, r.bG)([o.A], () => null != t ? o.A.getSubscriptionGroupListingsForGuildFetchState(t) : o.e.FETCHED), g = a.useRef(c), A = a.useCallback(() => {
        if (null == t || !h || !0 === m) return;
        let e = o.A.getSubscriptionGroupListingsForGuildFetchState(t);
        (g.current || e === o.e.NOT_FETCHED) && (g.current = !1, s.WA(t, {
            includeSoftDeleted: u,
            countryCode: _
        }))
    }, [h, t, u, _, m]), x = a.useMemo(() => p === o.e.FETCHED && !0 !== g.current, [p, g]);
    return (0, i.jsx)(d.Provider, {
        value: {
            listingsLoaded: x,
            fetchGroupListingsForGuild: A
        },
        children: n
    })
}