/** chunk id: 753806, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => j
}), r(747238), r(812715), r(733351);
var n = r(627968),
    l = r(271830),
    s = r(192308),
    a = r(988665),
    i = r(138298),
    o = r(734057),
    c = r(203982),
    u = r(504531),
    d = r(614690),
    h = r(256796),
    f = r(822382),
    p = r(23667),
    g = r(956467),
    S = r(408730),
    E = r(771650),
    _ = r(616252),
    A = r(65600),
    y = r(145331),
    m = r(768570),
    b = r(921242),
    R = r(652215);

function v(e) {
    let t = (0, f.bS)(e);
    _.A.clearSearchEditorState(e), h.A.clearSearchMessages(t), p.A.cleanUp(t), g.A.cleanUp(t)
}

function O(e) {
    let {
        searchContext: t,
        searchQueryString: r,
        searchQuery: n,
        offset: l
    } = e, s = (0, f.bS)(t);
    h.A.clearSearchMessages(s), _.A.setShowNoResultsAlt(t), _.A.setShowBlockedResults(t, !1), _.A.updateSearchResultsQuery(t, r, n, l), _.A.addSearchHistoryItem(t, r)
}

function T(e) {
    var t;
    let {
        searchContext: r,
        searchQueryString: n,
        searchEverywhere: l,
        offset: s
    } = e, a = (0, f.bS)(r), i = null != (t = A.A.getSearchMode(a)) ? t : b.z, o = {
        offset: s
    };
    r.type === R.I4_.DMS ? h.A.fetchTabMessages({
        searchContext: r,
        searchTabs: [m.$H.MESSAGES],
        searchQueryString: n,
        searchMode: i,
        getId: () => a,
        getLimit: () => R.T_y,
        pagination: o,
        trackExactTotalHits: !0,
        onFetchStart: e => {
            let {
                searchQueryString: t,
                searchQuery: n
            } = e;
            O({
                searchContext: r,
                searchQueryString: t,
                searchQuery: n,
                offset: s
            })
        }
    }) : h.A.fetchMessages({
        searchContext: r,
        searchQueryString: n,
        pagination: o,
        searchMode: i,
        searchEverywhere: l,
        onFetchStart: e => {
            let {
                searchQueryString: t,
                searchQuery: n
            } = e;
            O({
                searchContext: r,
                searchQueryString: t,
                searchQuery: n,
                offset: s
            })
        }
    })
}

function x(e) {
    let t = (0, f.bS)(e),
        r = A.A.getEditorState(t);
    return null != r ? u.pe(r) : null
}

function I(e, t) {
    var r;
    let n = (0, f.bS)(e),
        l = null != (r = A.A.getEditorState(n)) ? r : u.e_(d.ys(E.Ay)),
        s = u.t7(t, l);
    s = u.a4(s, 512);
    let i = (0, f._o)(t).filter(e => e.type !== a.Ay.NON_TOKEN_TYPE);
    s = u.uD(i, s, E.Ay), s = u.UO(0 + t.length, s), _.A.updateSearchEditorState(e, s)
}

function L(e) {
    c._.dispatch(R.jej.SET_SEARCH_QUERY, e)
}
let j = {
    cleanUpSearchState: v,
    fetchMessages: T,
    setSearchInputText: I,
    appendToSearchInputText: function(e, t) {
        let r = x(e);
        if (null == r) return;
        let n = r.endsWith(" ") ? r + t : r + " " + t;
        I(e, n), T({
            searchContext: e,
            searchQueryString: n,
            offset: 0
        })
    },
    getSearchInputText: x,
    ensureSearchInputDecorators: function(e) {
        let t, r = (0, f.bS)(e),
            n = A.A.getEditorState(r),
            s = null == n ? void 0 : n.getCurrentContent(),
            a = null == n ? void 0 : n.getSelection();
        null != s && null != a ? (t = u.Rg(d.ys(E.Ay), s), t = l.EditorState.forceSelection(t, a)) : t = u.e_(d.ys(E.Ay)), _.A.updateSearchEditorState(e, t)
    },
    setSearchQuery: function(e) {
        let {
            query: t,
            performSearch: r,
            replace: n,
            resultsState: l,
            searchQuerySource: s
        } = e, {
            mode: a,
            cursorScope: i
        } = l, o = 0;
        null != a.token ? o = a.token.start : (null == i ? void 0 : i.currentToken) != null && (o = i.currentToken.end);
        let c = null != a.token ? a.token.end : o;
        L({
            query: t,
            anchor: o,
            focus: c,
            performSearch: r,
            replace: n,
            searchQuerySource: s
        })
    },
    dispatchSetSearchQuery: L,
    transitionStateToSearchContext: function(e, t, r) {
        let n = (0, f.bS)(e),
            l = A.A.getEditorState(n);
        if (null == l) return;
        let s = u.pe(l),
            a = t.type === R.I4_.CHANNEL ? (0, f.EH)(s) : s;
        I(t, a = a.trim());
        let o = A.A.getSearchMode(n);
        _.A.updateSearchMode(t, null != o ? o : b.z), S.A.transferSession(e, t);
        let c = (0, f._o)(a),
            d = (0, f.Zf)(c);
        S.A.refreshQueryId(t), (0, y.fd)({
            searchContext: t,
            query: d,
            queryString: a,
            searchQuerySource: m.Q_.SEARCH_XDM_SETTINGS
        }), T({
            searchContext: t,
            searchQueryString: a,
            offset: 0
        });
        let p = (0, f.bS)(t);
        i.A.setSelectedSearchContext(p), _.A.clearSearchEditorState(e), h.A.clearSearchMessages(n), null == r || r()
    },
    cleanUpPrivateChannelSearchState: function() {
        A.A.getSearchStateIds().forEach(e => {
            let t = o.A.getChannel(e);
            null != t && t.isPrivate() && v({
                type: R.I4_.CHANNEL,
                channelId: t.id
            })
        })
    },
    openSearchFiltersModal: function(e) {
        (0, y.TJ)({
            searchContext: e
        }), (0, s.openModalLazy)(async () => {
            let {
                default: t
            } = await r.e("47230").then(r.bind(r, 561965));
            return r => {
                var l, s;
                return (0, n.jsx)(t, (l = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({}, r), s = s = {
                    searchContext: e
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(s)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
                }), l))
            }
        }, {
            modalKey: b.b
        })
    }
}