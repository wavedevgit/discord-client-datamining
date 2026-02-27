/** chunk id: 365491, original params: e,t,s (module,exports,require) **/
s.d(t, {
    S: () => h,
    v: () => A
});
var r = s(64700),
    l = s(353640),
    n = s(499867),
    a = s(401864),
    o = s(124987),
    i = s(946716),
    c = s(856686);

function u(e, t) {
    let s = new Set(e);
    return s.has(t) ? s.delete(t) : s.add(t), s
}
let d = {
        sortType: o.$.RECENCY,
        sortDirection: a.A.DESC
    },
    b = {
        sortType: o.$.POPULARITY,
        sortDirection: a.A.DESC
    },
    p = {
        sortType: o.$.RELEVANCE,
        sortDirection: a.A.DESC
    },
    E = {
        itemTypeFilters: new Set,
        colorFilters: new Set,
        themeFilters: new Set,
        orbEligible: !1,
        sort: d,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null
    },
    S = e => {
        let {
            colorFilters: t,
            themeFilters: s,
            searchQuery: r,
            itemTypeFilters: l
        } = e;
        return t.size > 0 || s.size > 0 || "" !== r.trim() ? p : l.size > 0 ? b : d
    },
    A = (0, l.v)((0, n.eh)((e, t) => ({
        ...E,
        hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === d.sortType && t().sort.sortDirection === d.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: s,
                themeFilters: r,
                orbEligible: l,
                searchQuery: n
            } = t();
            return [e, s, r].some(e => e.size > 0) || l || "" !== n
        },
        hasRelevanceFilters: () => {
            let {
                colorFilters: e,
                themeFilters: s,
                searchQuery: r
            } = t();
            return e.size > 0 || s.size > 0 || "" !== r.trim()
        },
        onToggleItemType: t => {
            e(e => {
                let s = u(e.itemTypeFilters, t),
                    r = {
                        ...e,
                        itemTypeFilters: s,
                        queryPageOffset: 0
                    };
                return e.userHasSelectedSort || (r.sort = S(r)), r
            })
        },
        onToggleColor: t => {
            e(e => {
                let s = u(e.colorFilters, t),
                    r = {
                        ...e,
                        colorFilters: s,
                        queryPageOffset: 0
                    };
                return e.userHasSelectedSort || (r.sort = S(r)), r
            })
        },
        onToggleTheme: t => {
            e(e => {
                let s = u(e.themeFilters, t),
                    r = {
                        ...e,
                        themeFilters: s,
                        queryPageOffset: 0
                    };
                return e.userHasSelectedSort || (r.sort = S(r)), r
            })
        },
        onToggleOrbEligible: () => {
            e(e => {
                let t = {
                    ...e,
                    orbEligible: !e.orbEligible,
                    queryPageOffset: 0
                };
                return e.userHasSelectedSort || (t.sort = S(t)), t
            })
        },
        onSetSort: t => {
            e({
                sort: t,
                queryPageOffset: 0,
                userHasSelectedSort: !0
            })
        },
        onSetResponse: t => {
            e(e => ({
                ...e,
                ...t
            }))
        },
        onSetSearchQuery: t => {
            e(e => {
                let s = {
                    ...e,
                    searchQuery: t,
                    queryPageOffset: 0
                };
                return "" !== t.trim() ? (s.sort = p, s.userHasSelectedSort = !1) : e.userHasSelectedSort || (s.sort = S(s)), s
            })
        },
        setQueryPageSize: t => {
            e({
                queryPageSize: t
            })
        },
        setQueryPageOffset: t => {
            e({
                queryPageOffset: t
            })
        },
        setItemTypeFilter: t => {
            e(e => {
                let s = new Set([t]),
                    r = {
                        ...e,
                        colorFilters: new Set,
                        themeFilters: new Set,
                        orbEligible: !1,
                        itemTypeFilters: s,
                        queryPageOffset: 0
                    };
                return e.userHasSelectedSort || (r.sort = S(r)), r
            })
        },
        clearFilters: () => {
            e({
                colorFilters: new Set,
                themeFilters: new Set,
                itemTypeFilters: new Set,
                orbEligible: !1
            })
        },
        reset: () => {
            let {
                queryPageSize: s,
                queryPageOffset: r
            } = t();
            e({
                ...E,
                queryPageSize: s,
                queryPageOffset: r
            })
        },
        setCurrentTab: t => {
            e({
                currentTab: t
            })
        }
    }))),
    m = e => {
        let {
            itemTypeFilters: t,
            colorFilters: s,
            themeFilters: r,
            orbEligible: l,
            sort: n,
            searchQuery: a,
            queryPageSize: o,
            queryPageOffset: i
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(s),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: i,
            limit: o,
            sort_type: n.sortType,
            sort_direction: n.sortDirection,
            search: "" !== a ? a : void 0
        }
    },
    h = () => {
        let {
            onSetResponse: e,
            setSearchError: t,
            setIsFetchingResults: s
        } = (0, c.S)();
        r.useEffect(() => {
            let r = r => {
                let l = async () => {
                    s(!0);
                    try {
                        let t, s, l, n, a = await (0, i.$)(r);
                        e((t = a.skus, s = a.pagination.total, l = a.pagination.has_more, n = a.pagination.offset, {
                            skus: t,
                            totalCount: s,
                            hasMorePages: l,
                            pageOffset: n,
                            pageLimit: a.pagination.limit
                        }))
                    } catch (e) {
                        t(e?.message ?? "Unknown error")
                    } finally {
                        s(!1)
                    }
                };
                0 !== r.limit && l()
            };
            r(m(A.getState()));
            let l = A.subscribe(m, r, {
                    equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
                }),
                n = A.subscribe(e => e.hasFilters(), (e, t) => {
                    if (!e && t) {
                        let e = A.getState();
                        e.userHasSelectedSort || A.setState({
                            sort: S(e)
                        })
                    }
                });
            return () => {
                l(), n()
            }
        }, [e, t, s])
    }