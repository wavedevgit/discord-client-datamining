/** chunk id: 65600, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var n = r(311907),
    s = r(73153),
    l = r(921242);
let a = new Map,
    i = !1;

function o(e) {
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

function c(e, t) {
    let r = a.get(e);
    return null == r ? null : t(r)
}
class u extends n.Ay.Store {
    static displayName = "SearchQueryStore";
    getEditorState(e) {
        return c(e, e => e.editorState)
    }
    shouldShowBlockedResults(e) {
        return c(e, e => e.showBlockedResults) ?? !1
    }
    shouldShowNoResultsAlt(e) {
        return c(e, e => e.showNoResultsAlt) ?? !1
    }
    getSearchResultsQueryString(e) {
        return c(e, e => e.searchResultsQueryString)
    }
    getSearchResultsQuery(e) {
        return c(e, e => e.searchResultsQuery)
    }
    getSearchMode(e) {
        return c(e, e => e.searchMode)
    }
    getSearchResultsOffset(e) {
        return c(e, e => e.searchResultsOffset)
    }
    getIsSearchTokensInitialized() {
        return i
    }
    getSearchStateIds() {
        return Array.from(a.keys())
    }
}
let d = new u(s.h, {
    SEARCH_RESULTS_QUERY_UPDATE: function(e) {
        let {
            id: t,
            queryString: r,
            query: n,
            offset: s
        } = e, l = o(t);
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
        o(t)
    },
    SEARCH_EDITOR_STATE_CHANGE: function(e) {
        let {
            id: t,
            editorState: r
        } = e;
        o(t).editorState = r
    },
    SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
        let {
            id: t,
            showBlocked: r
        } = e;
        o(t).showBlockedResults = r
    },
    SEARCH_SET_SHOW_NO_RESULTS_ALT: function(e) {
        let {
            id: t
        } = e;
        o(t).showNoResultsAlt = .05 > Math.random()
    },
    SEARCH_SEARCH_MODE_UPDATE: function(e) {
        let {
            id: t,
            searchMode: r
        } = e;
        o(t).searchMode = r
    },
    SEARCH_TOKENS_REFRESHED: function() {
        i = !0
    }
})