/** chunk id: 38894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(533129),
    s = n(403362),
    o = n(670412),
    c = n(351022),
    u = n(965660),
    d = n(383470),
    p = n(166641),
    h = n(324580);

function f(e) {
    let {
        onScroll: t,
        onGuildCardSeen: n,
        onGuildCardClick: a
    } = e, s = (0, l.bG)([c.A], () => {
        var e;
        return null != (e = c.A.getGuildIds({
            categoryId: h.Iq
        })) ? e : h.VX
    }), u = (0, l.bG)([c.A], () => {
        var e;
        return null == (e = c.A.getIsFetching({
            categoryId: h.Iq
        })) || e
    });
    return i.useEffect(() => {
        o.A.fetchFeaturedGuilds()
    }, []), (0, r.jsx)(d.A, {
        tab: h.o.FEATURED,
        guildIds: s,
        loading: u,
        onScroll: t,
        onGuildCardSeen: n,
        onGuildCardClick: a
    })
}

function g(e) {
    let {
        tab: t,
        onScroll: n,
        onGuildCardSeen: a,
        onGuildCardClick: s
    } = e, p = (0, u.Ub)(t), f = (0, l.bG)([c.A], () => {
        var e;
        return null != (e = c.A.getGuildIds({
            categoryId: p
        })) ? e : h.VX
    }), g = (0, l.bG)([c.A], () => {
        var e;
        return null == (e = c.A.getIsFetching({
            categoryId: p
        })) || e
    });
    return i.useEffect(() => {
        o.A.fetchCategoryFeaturedGuilds({
            categoryId: p
        })
    }, [p]), (0, r.jsx)(d.A, {
        tab: t,
        guildIds: f,
        loading: g,
        onScroll: n,
        onGuildCardSeen: a,
        onGuildCardClick: s
    })
}

function m(e) {
    let {
        selectedTab: t,
        onScroll: n,
        onGuildCardSeen: l,
        onGuildCardClick: o
    } = e;
    switch (i.useEffect(() => {
            let e = (0, u.Ub)(t);
            (0, a.np)({
                selectedCategoryId: e
            })
        }, [t]), t) {
        case h.o.FEATURED:
            return (0, r.jsx)(f, {
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
            return (0, r.jsx)(g, {
                tab: t,
                onScroll: n,
                onGuildCardClick: o,
                onGuildCardSeen: l
            }, t);
        case h.o.HUBS:
            return (0, r.jsx)(p.A, {
                onScroll: n
            });
        default:
            (0, s.xb)(t)
    }
}