/** chunk id: 65600 params = (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(311907),
    s = r(73153),
    l = r(921242);
let a = new Map,
    i = !1;

function u(e) {
    let t = a.get(e) ?? {
        editorState: null,
        showBlockedResults: !1,
        showNoResultsAlt: !1,
        searchResultsQueryString: null,
        searchResultsQuery: null,
        searchResultsOffset: null,
        searchMode: l.z
    };
    return a.set(e, t), t
}

function o(e, t) {
    let r = a.get(e);
    return null == r ? null : t(r)
}
class c extends n.Ay.Store {
    static displayName = "SearchQueryStore";
    getEditorState(e) {
        return o(e, e => e.editorState)
    }
    shouldShowBlockedResults(e) {
        return o(e, e => e.showBlockedResults) ?? !1
    }
    shouldShowNoResultsAlt(e) {
        return o(e, e => e.showNoResultsAlt) ?? !1
    }
    getSearchResultsQueryString(e) {
        return o(e, e => e.searchResultsQueryString)
    }
    getSearchResultsQuery(e) {
        return o(e, e => e.searchResultsQuery)
    }
    getSearchMode(e) {
        return o(e, e => e.searchMode)
    }
    getSearchResultsOffset(e) {
        return o(e, e => e.searchResultsOffset)
    }
    getIsSearchTokensInitialized() {
        return i
    }
    getSearchStateIds() {
        return Array.from(a.keys())
    }
}
let h = new c(s.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function(e) {
        let {
            id: t,
            queryString: r,
            query: n,
            offset: s
        } = e, l = u(t);
        l.searchResultsQueryString = r, l.searchResultsQuery = n, l.searchResultsOffset = s ?? 0
    },
    SEARCH_EDITOR_STATE_CLEAR: function(e) {
        let {
            id: t
        } = e;
        return a.delete(t)
    },
    SEARCH_ENSURE_SEARCH_STATE: function(e) {
        let {
            id: t
        } = e;
        u(t)
    },
    SEARCH_EDITOR_STATE_CHANGE: function(e) {
        let {
            id: t,
            editorState: r
        } = e;
        u(t).editorState = r
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
        let {
            id: t,
            showBlocked: r
        } = e;
        u(t).showBlockedResults = r
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function(e) {
        let {
            id: t
        } = e;
        u(t).showNoResultsAlt = .05 > Math.random()
    },
    SEARCH_SEARCH_MODE_UPDATE: function(e) {
        let {
            id: t,
            searchMode: r
        } = e;
        u(t).searchMode = r
    },
    SEARCH_TOKENS_REFRESHED: function() {
        i = !0
    }
})