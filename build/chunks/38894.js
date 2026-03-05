/** chunk id: 38894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(533129),
    s = n(403362),
    o = n(670412),
    d = n(351022),
    c = n(965660),
    u = n(383470),
    A = n(166641),
    h = n(324580);

function _(e) {
    let {
        onScroll: t,
        onGuildCardSeen: n,
        onGuildCardClick: a
    } = e, s = (0, l.bG)([d.A], () => d.A.getGuildIds({
        categoryId: h.Iq
    }) ?? h.VX), c = (0, l.bG)([d.A], () => d.A.getIsFetching({
        categoryId: h.Iq
    }) ?? !0);
    return r.useEffect(() => {
        o.A.fetchFeaturedGuilds()
    }, []), (0, i.jsx)(u.A, {
        tab: h.o.FEATURED,
        guildIds: s,
        loading: c,
        onScroll: t,
        onGuildCardSeen: n,
        onGuildCardClick: a
    })
}

function m(e) {
    let {
        tab: t,
        onScroll: n,
        onGuildCardSeen: a,
        onGuildCardClick: s
    } = e, A = (0, c.Ub)(t), _ = (0, l.bG)([d.A], () => d.A.getGuildIds({
        categoryId: A
    }) ?? h.VX), m = (0, l.bG)([d.A], () => d.A.getIsFetching({
        categoryId: A
    }) ?? !0);
    return r.useEffect(() => {
        o.A.fetchCategoryFeaturedGuilds({
            categoryId: A
        })
    }, [A]), (0, i.jsx)(u.A, {
        tab: t,
        guildIds: _,
        loading: m,
        onScroll: n,
        onGuildCardSeen: a,
        onGuildCardClick: s
    })
}

function g(e) {
    let {
        selectedTab: t,
        onScroll: n,
        onGuildCardSeen: l,
        onGuildCardClick: o
    } = e;
    switch (r.useEffect(() => {
            let e = (0, c.Ub)(t);
            (0, a.np)({
                selectedCategoryId: e
            })
        }, [t]), t) {
        case h.o.FEATURED:
            return (0, i.jsx)(_, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: l
            });
        case h.o.GAMING:
        case h.o.MUSIC:
        case h.o.ENTERTAINMENT:
        case h.o.TECH:
        case h.o.EDUCATION:
            return (0, i.jsx)(m, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: l
            }, t);
        case h.o.HUBS:
            return (0, i.jsx)(A.A, {
                onScroll: n
            });
        default:
            (0, s.xb)(t)
    }
}