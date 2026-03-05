/** chunk id: 753806, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => v
});
var s = r(627968),
    n = r(271830),
    l = r(192308),
    a = r(988665),
    i = r(138298),
    o = r(734057),
    u = r(203982),
    c = r(504531),
    d = r(614690),
    h = r(256796),
    _ = r(822382),
    S = r(23667),
    E = r(956467),
    f = r(408730),
    g = r(771650),
    A = r(616252),
    p = r(65600),
    R = r(145331),
    m = r(768570),
    y = r(921242),
    T = r(652215);

function x(e) {
    let t = (0, _.bS)(e);
    A.A.clearSearchEditorState(e), h.A.clearSearchMessages(t), S.A.cleanUp(t), E.A.cleanUp(t)
}

function I(e) {
    let {
        searchContext: t,
        searchQueryString: r,
        searchQuery: s,
        offset: n
    } = e, l = (0, _.bS)(t);
    h.A.clearSearchMessages(l), A.A.setShowNoResultsAlt(t), A.A.setShowBlockedResults(t, !1), A.A.updateSearchResultsQuery(t, r, s, n), A.A.addSearchHistoryItem(t, r)
}

function L(e) {
    let {
        searchContext: t,
        searchQueryString: r,
        searchEverywhere: s,
        offset: n
    } = e, l = (0, _.bS)(t), a = p.A.getSearchMode(l) ?? y.z, i = {
        offset: n
    };
    t.type === T.I4_.DMS ? h.A.fetchTabMessages({
        searchContext: t,
        searchTabs: [m.$H.MESSAGES],
        searchQueryString: r,
        searchMode: a,
        getId: () => l,
        getLimit: () => T.T_y,
        pagination: i,
        trackExactTotalHits: !0,
        onFetchStart: e => {
            let {
                searchQueryString: r,
                searchQuery: s
            } = e;
            I({
                searchContext: t,
                searchQueryString: r,
                searchQuery: s,
                offset: n
            })
        }
    }) : h.A.fetchMessages({
        searchContext: t,
        searchQueryString: r,
        pagination: i,
        searchMode: a,
        searchEverywhere: s,
        onFetchStart: e => {
            let {
                searchQueryString: r,
                searchQuery: s
            } = e;
            I({
                searchContext: t,
                searchQueryString: r,
                searchQuery: s,
                offset: n
            })
        }
    })
}

function b(e) {
    let t = (0, _.bS)(e),
        r = p.A.getEditorState(t);
    return null != r ? c.pe(r) : null
}

function N(e, t) {
    let r = (0, _.bS)(e),
        s = p.A.getEditorState(r) ?? c.e_(d.ys(g.Ay)),
        n = c.t7(t, s);
    n = c.a4(n, 512);
    let l = (0, _._o)(t).filter(e => e.type !== a.Ay.NON_TOKEN_TYPE);
    n = c.uD(l, n, g.Ay), n = c.UO(0 + t.length, n), A.A.updateSearchEditorState(e, n)
}

function C(e) {
    u._.dispatch(T.jej.SET_SEARCH_QUERY, e)
}
let v = {
    cleanUpSearchState: x,
    fetchMessages: L,
    setSearchInputText: N,
    appendToSearchInputText: function(e, t) {
        let r = b(e);
        if (null == r) return;
        let s = r.endsWith(" ") ? r + t : r + " " + t;
        N(e, s), L({
            searchContext: e,
            searchQueryString: s,
            offset: 0
        })
    },
    getSearchInputText: b,
    ensureSearchInputDecorators: function(e) {
        let t, r = (0, _.bS)(e),
            s = p.A.getEditorState(r),
            l = s?.getCurrentContent(),
            a = s?.getSelection();
        null != l && null != a ? (t = c.Rg(d.ys(g.Ay), l), t = n.EditorState.forceSelection(t, a)) : t = c.e_(d.ys(g.Ay)), A.A.updateSearchEditorState(e, t)
    },
    setSearchQuery: function(e) {
        let {
            query: t,
            performSearch: r,
            replace: s,
            resultsState: n,
            searchQuerySource: l
        } = e, {
            mode: a,
            cursorScope: i
        } = n, o = 0;
        null != a.token ? o = a.token.start : i?.currentToken != null && (o = i.currentToken.end);
        let u = null != a.token ? a.token.end : o;
        C({
            query: t,
            anchor: o,
            focus: u,
            performSearch: r,
            replace: s,
            searchQuerySource: l
        })
    },
    dispatchSetSearchQuery: C,
    transitionStateToSearchContext: function(e, t, r) {
        let s = (0, _.bS)(e),
            n = p.A.getEditorState(s);
        if (null == n) return;
        let l = c.pe(n),
            a = t.type === T.I4_.CHANNEL ? (0, _.EH)(l) : l;
        N(t, a = a.trim());
        let o = p.A.getSearchMode(s);
        A.A.updateSearchMode(t, o ?? y.z), f.A.transferSession(e, t);
        let u = (0, _._o)(a),
            d = (0, _.Zf)(u);
        f.A.refreshQueryId(t), (0, R.fd)({
            searchContext: t,
            query: d,
            queryString: a,
            searchQuerySource: m.Q_.SEARCH_XDM_SETTINGS
        }), L({
            searchContext: t,
            searchQueryString: a,
            offset: 0
        });
        let S = (0, _.bS)(t);
        i.A.setSelectedSearchContext(S), A.A.clearSearchEditorState(e), h.A.clearSearchMessages(s), r?.()
    },
    cleanUpPrivateChannelSearchState: function() {
        p.A.getSearchStateIds().forEach(e => {
            let t = o.A.getChannel(e);
            null != t && t.isPrivate() && x({
                type: T.I4_.CHANNEL,
                channelId: t.id
            })
        })
    },
    openSearchFiltersModal: function(e) {
        (0, R.TJ)({
            searchContext: e
        }), (0, l.openModalLazy)(async () => {
            let {
                default: t
            } = await r.e("47230").then(r.bind(r, 561965));
            return r => (0, s.jsx)(t, {
                ...r,
                searchContext: e
            })
        }, {
            modalKey: y.b
        })
    }
}