/** chunk id: 753806 params = (module,exports,require) **/
r.d(t, {
    A: () => v
});
var n = r(627968),
    s = r(271830),
    l = r(192308),
    a = r(988665),
    i = r(138298),
    o = r(734057),
    c = r(203982),
    u = r(504531),
    d = r(614690),
    h = r(256796),
    _ = r(822382),
    f = r(23667),
    S = r(956467),
    g = r(408730),
    E = r(771650),
    p = r(616252),
    A = r(65600),
    m = r(145331),
    y = r(768570),
    R = r(921242),
    x = r(652215);

function T(e) {
    let t = (0, _.bS)(e);
    p.A.clearSearchEditorState(e), h.A.clearSearchMessages(t), f.A.cleanUp(t), S.A.cleanUp(t)
}

function I(e) {
    let {
        searchContext: t,
        searchQueryString: r,
        searchQuery: n,
        offset: s
    } = e, l = (0, _.bS)(t);
    h.A.clearSearchMessages(l), p.A.setShowNoResultsAlt(t), p.A.setShowBlockedResults(t, !1), p.A.updateSearchResultsQuery(t, r, n, s), p.A.addSearchHistoryItem(t, r)
}

function b(e) {
    let {
        searchContext: t,
        searchQueryString: r,
        searchEverywhere: n,
        offset: s
    } = e, l = (0, _.bS)(t), a = A.A.getSearchMode(l) ?? R.z, i = {
        offset: s
    };
    t.type === x.I4_.DMS ? h.A.fetchTabMessages({
        searchContext: t,
        searchTabs: [y.$H.MESSAGES],
        searchQueryString: r,
        searchMode: a,
        getId: () => l,
        getLimit: () => x.T_y,
        pagination: i,
        trackExactTotalHits: !0,
        onFetchStart: e => {
            let {
                searchQueryString: r,
                searchQuery: n
            } = e;
            I({
                searchContext: t,
                searchQueryString: r,
                searchQuery: n,
                offset: s
            })
        }
    }) : h.A.fetchMessages({
        searchContext: t,
        searchQueryString: r,
        pagination: i,
        searchMode: a,
        searchEverywhere: n,
        onFetchStart: e => {
            let {
                searchQueryString: r,
                searchQuery: n
            } = e;
            I({
                searchContext: t,
                searchQueryString: r,
                searchQuery: n,
                offset: s
            })
        }
    })
}

function L(e) {
    let t = (0, _.bS)(e),
        r = A.A.getEditorState(t);
    return null != r ? u.pe(r) : null
}

function C(e, t) {
    let r = (0, _.bS)(e),
        n = A.A.getEditorState(r) ?? u.e_(d.ys(E.Ay)),
        s = u.t7(t, n);
    s = u.a4(s, 512);
    let l = (0, _._o)(t).filter(e => e.type !== a.Ay.NON_TOKEN_TYPE);
    s = u.uD(l, s, E.Ay), s = u.UO(0 + t.length, s), p.A.updateSearchEditorState(e, s)
}

function N(e) {
    c._.dispatch(x.jej.SET_SEARCH_QUERY, e)
}
let v = {
    cleanUpSearchState: T,
    fetchMessages: b,
    setSearchInputText: C,
    appendToSearchInputText: function(e, t) {
        let r = L(e);
        if (null == r) return;
        let n = r.endsWith(" ") ? r + t : r + " " + t;
        C(e, n), b({
            searchContext: e,
            searchQueryString: n,
            offset: 0
        })
    },
    getSearchInputText: L,
    ensureSearchInputDecorators: function(e) {
        let t, r = (0, _.bS)(e),
            n = A.A.getEditorState(r),
            l = n?.getCurrentContent(),
            a = n?.getSelection();
        null != l && null != a ? (t = u.Rg(d.ys(E.Ay), l), t = s.EditorState.forceSelection(t, a)) : t = u.e_(d.ys(E.Ay)), p.A.updateSearchEditorState(e, t)
    },
    setSearchQuery: function(e) {
        let {
            query: t,
            performSearch: r,
            replace: n,
            resultsState: s,
            searchQuerySource: l
        } = e, {
            mode: a,
            cursorScope: i
        } = s, o = 0;
        null != a.token ? o = a.token.start : i?.currentToken != null && (o = i.currentToken.end);
        let c = null != a.token ? a.token.end : o;
        N({
            query: t,
            anchor: o,
            focus: c,
            performSearch: r,
            replace: n,
            searchQuerySource: l
        })
    },
    dispatchSetSearchQuery: N,
    transitionStateToSearchContext: function(e, t, r) {
        let n = (0, _.bS)(e),
            s = A.A.getEditorState(n);
        if (null == s) return;
        let l = u.pe(s),
            a = t.type === x.I4_.CHANNEL ? (0, _.EH)(l) : l;
        C(t, a = a.trim());
        let o = A.A.getSearchMode(n);
        p.A.updateSearchMode(t, o ?? R.z), g.A.transferSession(e, t);
        let c = (0, _._o)(a),
            d = (0, _.Zf)(c);
        g.A.refreshQueryId(t), (0, m.fd)({
            searchContext: t,
            query: d,
            queryString: a,
            searchQuerySource: y.Q_.SEARCH_XDM_SETTINGS
        }), b({
            searchContext: t,
            searchQueryString: a,
            offset: 0
        });
        let f = (0, _.bS)(t);
        i.A.setSelectedSearchContext(f), p.A.clearSearchEditorState(e), h.A.clearSearchMessages(n), r?.()
    },
    cleanUpPrivateChannelSearchState: function() {
        A.A.getSearchStateIds().forEach(e => {
            let t = o.A.getChannel(e);
            null != t && t.isPrivate() && T({
                type: x.I4_.CHANNEL,
                channelId: t.id
            })
        })
    },
    openSearchFiltersModal: function(e) {
        (0, m.TJ)({
            searchContext: e
        }), (0, l.openModalLazy)(async () => {
            let {
                default: t
            } = await r.e("47230").then(r.bind(r, 561965));
            return r => (0, n.jsx)(t, {
                ...r,
                searchContext: e
            })
        }, {
            modalKey: R.b
        })
    }
}