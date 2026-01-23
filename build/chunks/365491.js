/** Chunk was on 59275 **/
/** chunk id: 365491, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => v,
    v: () => h
}), n(896048), n(733351), n(638769), n(457529);
var r = n(64700),
    l = n(353640),
    s = n(499867),
    a = n(401864),
    i = n(124987),
    o = n(946716),
    c = n(856686);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function d(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g(e, t) {
    let n = new Set(e);
    return n.has(t) ? n.delete(t) : n.add(t), n
}
let f = {
        sortType: i.$.RECENCY,
        sortDirection: a.A.DESC
    },
    m = {
        sortType: i.$.POPULARITY,
        sortDirection: a.A.DESC
    },
    p = {
        sortType: i.$.RELEVANCE,
        sortDirection: a.A.DESC
    },
    _ = {
        itemTypeFilters: new Set,
        colorFilters: new Set,
        themeFilters: new Set,
        orbEligible: !1,
        sort: f,
        searchQuery: "",
        queryPageSize: 0,
        queryPageOffset: 0,
        isFetchingResults: !1,
        userHasSelectedSort: !1,
        currentTab: null
    },
    b = e => {
        let {
            colorFilters: t,
            themeFilters: n,
            searchQuery: r,
            itemTypeFilters: l
        } = e;
        return t.size > 0 || n.size > 0 || "" !== r.trim() ? p : l.size > 0 ? m : f
    },
    h = (0, l.v)((0, s.eh)((e, t) => d(u({}, _), {
        hasDefaultFilters: () => !t().hasFilters() && t().sort.sortType === f.sortType && t().sort.sortDirection === f.sortDirection,
        hasFilters: () => {
            let {
                itemTypeFilters: e,
                colorFilters: n,
                themeFilters: r,
                orbEligible: l,
                searchQuery: s
            } = t();
            return [e, n, r].some(e => e.size > 0) || l || "" !== s
        },
        hasRelevanceFilters: () => {
            let {
                colorFilters: e,
                themeFilters: n,
                searchQuery: r
            } = t();
            return e.size > 0 || n.size > 0 || "" !== r.trim()
        },
        onToggleItemType: t => {
            e(e => {
                let n = g(e.itemTypeFilters, t),
                    r = d(u({}, e), {
                        itemTypeFilters: n,
                        queryPageOffset: 0
                    });
                return e.userHasSelectedSort || (r.sort = b(r)), r
            })
        },
        onToggleColor: t => {
            e(e => {
                let n = g(e.colorFilters, t),
                    r = d(u({}, e), {
                        colorFilters: n,
                        queryPageOffset: 0
                    });
                return e.userHasSelectedSort || (r.sort = b(r)), r
            })
        },
        onToggleTheme: t => {
            e(e => {
                let n = g(e.themeFilters, t),
                    r = d(u({}, e), {
                        themeFilters: n,
                        queryPageOffset: 0
                    });
                return e.userHasSelectedSort || (r.sort = b(r)), r
            })
        },
        onToggleOrbEligible: () => {
            e(e => {
                let t = d(u({}, e), {
                    orbEligible: !e.orbEligible,
                    queryPageOffset: 0
                });
                return e.userHasSelectedSort || (t.sort = b(t)), t
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
            e(e => u({}, e, t))
        },
        onSetSearchQuery: t => {
            e(e => {
                let n = d(u({}, e), {
                    searchQuery: t,
                    queryPageOffset: 0
                });
                return "" !== t.trim() ? (n.sort = p, n.userHasSelectedSort = !1) : e.userHasSelectedSort || (n.sort = b(n)), n
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
                let n = new Set([t]),
                    r = d(u({}, e), {
                        colorFilters: new Set,
                        themeFilters: new Set,
                        orbEligible: !1,
                        itemTypeFilters: n,
                        queryPageOffset: 0
                    });
                return e.userHasSelectedSort || (r.sort = b(r)), r
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
                queryPageSize: n,
                queryPageOffset: r
            } = t();
            e(d(u({}, _), {
                queryPageSize: n,
                queryPageOffset: r
            }))
        },
        setCurrentTab: t => {
            e({
                currentTab: t
            })
        }
    }))),
    E = e => {
        let {
            itemTypeFilters: t,
            colorFilters: n,
            themeFilters: r,
            orbEligible: l,
            sort: s,
            searchQuery: a,
            queryPageSize: i,
            queryPageOffset: o
        } = e;
        return {
            item_types: Array.from(t),
            colors: Array.from(n),
            themes: Array.from(r),
            orbs_eligible: !!l || void 0,
            offset: o,
            limit: i,
            sort_type: s.sortType,
            sort_direction: s.sortDirection,
            search: "" !== a ? a : void 0
        }
    },
    v = () => {
        let {
            onSetResponse: e,
            setSearchError: t,
            setIsFetchingResults: n
        } = (0, c.S)();
        r.useEffect(() => {
            let r = r => {
                let l = async () => {
                    var l;
                    n(!0);
                    try {
                        let t, n, l, s, a = await (0, o.$)(r);
                        e((t = a.skus, n = a.pagination.total, l = a.pagination.has_more, s = a.pagination.offset, {
                            skus: t,
                            totalCount: n,
                            hasMorePages: l,
                            pageOffset: s,
                            pageLimit: a.pagination.limit
                        }))
                    } catch (e) {
                        t(null != (l = null == e ? void 0 : e.message) ? l : "Unknown error")
                    } finally {
                        n(!1)
                    }
                };
                0 !== r.limit && l()
            };
            r(E(h.getState()));
            let l = h.subscribe(E, r, {
                    equalityFn: (e, t) => JSON.stringify(e) === JSON.stringify(t)
                }),
                s = h.subscribe(e => e.hasFilters(), (e, t) => {
                    if (!e && t) {
                        let e = h.getState();
                        e.userHasSelectedSort || h.setState({
                            sort: b(e)
                        })
                    }
                });
            return () => {
                l(), s()
            }
        }, [e, t, n])
    }