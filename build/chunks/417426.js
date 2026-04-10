/** chunk id: 417426 params = (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(321073);
var i = n(562465),
    l = n(319400),
    r = n(73153),
    a = n(449054),
    s = n(965660),
    o = n(324580),
    d = n(652215);
let c = {
    fetchSearchResults: async function e(e, t) {
        let {
            categoryId: n,
            languageCode: c,
            offset: u,
            limit: A,
            withCounts: h
        } = t;
        r.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START",
            query: e,
            categoryId: n,
            languageCode: c
        });
        try {
            let t = await i.Bo.get({
                    url: d.Rsh.GUILD_DISCOVERY_SEARCH,
                    query: {
                        query: e,
                        category_id: n === o.Iq ? null : n,
                        offset: u,
                        limit: A,
                        language_code: c,
                        with_counts: h
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                }),
                l = t.body.guilds.map(s.uk),
                a = t.body.total_count;
            if (h) {
                let n = [];
                t.body.categories?.slice(0, 8).forEach(e => {
                    let {
                        id: t,
                        count: i
                    } = e;
                    n.push([Number(t), i])
                }), r.h.dispatch({
                    type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                    query: e,
                    categoryCounts: n
                })
            }
            r.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS",
                query: e,
                categoryId: n,
                languageCode: c,
                guilds: l,
                total: a
            })
        } catch (i) {
            let t = new l.LG(i);
            a.jb({
                categoryId: n,
                error: t,
                willRequestRetry: !1,
                isRequestRetry: !1
            }), h && r.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS",
                query: e,
                categoryCounts: []
            }), r.h.dispatch({
                type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE",
                query: e,
                categoryId: n,
                languageCode: c,
                error: i
            })
        }
    },
    clearSearchResults: function(e) {
        r.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR",
            ignoreQueries: e?.ignoreQueries ?? []
        })
    },
    resetSearchLayout: function() {
        r.h.dispatch({
            type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET"
        })
    }
}