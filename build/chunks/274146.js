/** Chunk was on 78528 **/
/** chunk id: 274146, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(73153),
    o = n(334738),
    c = n(222823),
    u = n(954571),
    d = n(208882),
    p = n(938764),
    h = n(519480),
    f = n(352123),
    g = n(372536),
    m = n(268965),
    b = n(667369),
    A = n(647026),
    y = n(946116),
    _ = n(652215),
    O = n(650583),
    j = n(10544);
let v = e => {
    let {
        channel: t,
        guild: v
    } = e, {
        currentCategoryId: x,
        directoryEntries: E,
        categoryCounts: C,
        allEntriesCount: S,
        isLoading: I
    } = (0, i.cf)([h.A], () => {
        let e = h.A.getCurrentCategoryId(t.id),
            n = h.A.getDirectoryEntries(t.id, e === y.mU.ALL ? null : e),
            r = h.A.getDirectoryCategoryCounts(t.id);
        return {
            currentCategoryId: e,
            directoryEntries: n,
            categoryCounts: r,
            allEntriesCount: h.A.getDirectoryAllEntriesCount(t.id),
            isLoading: h.A.isFetching()
        }
    });
    l.useEffect(() => () => {
        let e = c.Ay.lastMessageId(t.id);
        null != e && a.h.wait(() => {
            (0, o.ack)(t.id, {
                object: _.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                objectType: _.AnalyticsObjectTypes.ACK_AUTOMATIC
            }, !0, !0, e)
        })
    }, [t.id]);
    let N = l.useMemo(() => null != E ? (0, b._)(Object.values(E), x) : null, [E, x]),
        {
            mostRecentQuery: T,
            searchFetching: P,
            searchResults: w
        } = (0, i.cf)([p.A], () => {
            let {
                mostRecentQuery: e,
                fetching: n
            } = p.A.getSearchState(t.id);
            return {
                mostRecentQuery: e,
                searchFetching: n,
                searchResults: p.A.getSearchResults(t.id, e)
            }
        }),
        [R, D] = l.useState(T),
        M = "" !== T,
        L = {
            mostRecentQuery: T
        },
        k = l.useRef(L);
    l.useEffect(() => {
        k.current = L
    }), l.useEffect(() => {
        let {
            mostRecentQuery: e
        } = k.current;
        d.Yc(t.id), d.YS(t.id), D(e)
    }, [t.id]), l.useEffect(() => {
        u.default.track(_.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
            directory_channel_id: t.id,
            directory_guild_id: v.id,
            primary_category_id: x
        })
    }, [t.id, v.id, x]);
    let U = (0, f.b)(t),
        G = l.useMemo(() => U ? () => {
            (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("6759").then(n.bind(n, 953722));
                return n => {
                    var l, i;
                    return (0, r.jsx)(e, (l = function(e) {
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
                    }({}, n), i = i = {
                        directoryGuildName: v.name,
                        directoryGuildId: v.id,
                        directoryChannelId: t.id,
                        currentCategoryId: x === y.mU.ALL ? null : x
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                    }), l))
                }
            })
        } : void 0, [U, v.name, v.id, t.id, x]),
        B = e => {
            0 !== R.trim().length && e.key === O.dh.ENTER && (d.Se(t.id, R), u.default.track(_.HAw.GUILD_DIRECTORY_SEARCH, {
                directory_channel_id: t.id,
                directory_guild_id: v.id
            }))
        },
        V = () => {
            D(""), d.BA(t.id)
        };
    return M ? (0, r.jsx)(A.A, {
        searchQuery: R,
        setSearchQuery: D,
        mostRecentQuery: T,
        handleSearchKeyPress: B,
        handleClearSearch: V,
        handleCreateOrAddGuild: G,
        searchResults: w,
        searchFetching: P
    }) : null == N && null == x ? (0, r.jsx)("div", {
        className: j.$$,
        children: (0, r.jsx)(s.y$y, {
            className: j.u1
        })
    }) : (null == N ? void 0 : N.length) === 0 && null == x ? (0, r.jsx)("div", {
        className: j.$$,
        children: (0, r.jsx)(g.A, {
            guild: v,
            onAddGuild: G
        })
    }) : (0, r.jsx)(m.A, {
        channel: t,
        searchQuery: R,
        setSearchQuery: D,
        handleSearchKeyPress: B,
        handleClearSearch: V,
        handleCreateOrAddGuild: G,
        currentCategoryId: x,
        handleSelectCategory: e => {
            d.uU(t.id, e)
        },
        directoryEntries: N,
        categoryCounts: C,
        allEntriesCount: S,
        isLoading: I
    })
}