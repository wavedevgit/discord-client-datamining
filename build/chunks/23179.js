/** Chunk was on 77870 **/
/** chunk id: 23179, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H
}), n(896048), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(435371),
    u = n(397927),
    d = n(964486),
    p = n(379848),
    h = n(651649),
    f = n(253932),
    g = n(734057),
    m = n(203982),
    b = n(517381),
    A = n(822382),
    y = n(868974),
    _ = n(771650),
    O = n(616252),
    j = n(753806),
    v = n(775427),
    x = n(969715),
    E = n(477654),
    C = n(65600),
    S = n(145331),
    I = n(976966),
    N = n(159083),
    T = n(229374),
    P = n(310420),
    w = n(652215),
    R = n(670455),
    D = n(985018),
    M = n(737299);
class L extends l.Component {
    componentDidMount() {
        this.autoAnalytics()
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId || this.props.searchOffset !== e.searchOffset) && this.autoAnalytics(e.searchRequestAnalyticsId)
    }
    render() {
        return null
    }
    constructor(...e) {
        var t;
        super(...e), t = this,
            function(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "autoAnalytics", function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null == t.props.searchRequestAnalyticsId || t.props.isSearching) return;
                let n = 0,
                    r = 0,
                    l = 0,
                    i = 0;
                t.props.messages.forEach(e => {
                    null != e.content && "" !== e.content && (n++, /https?:\/\/[^\s]+/.test(e.content) && i++), null != e.embeds && e.embeds.length > 0 && l++, null != e.attachments && e.attachments.length > 0 && r++
                });
                let s = (0, A.bS)(t.props.searchContext);
                0 === n ? (0, S.oK)({
                    searchContext: t.props.searchContext,
                    searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                    searchQueryString: j.A.getSearchInputText(t.props.searchContext),
                    searchQuery: C.A.getSearchResultsQuery(s)
                }) : (0, S.H9)({
                    searchContext: t.props.searchContext,
                    searchRequestAnalyticsId: t.props.searchRequestAnalyticsId,
                    prevSearchRequestAnalyticsId: e !== t.props.searchRequestAnalyticsId ? e : null,
                    isError: t.props.searchHasError,
                    limit: t.props.searchLimit,
                    offset: t.props.searchOffset,
                    page: Math.floor(t.props.searchOffset / t.props.searchLimit) + 1,
                    totalResults: t.props.searchTotalResults,
                    pageResults: null != t.props.messages ? t.props.messages.length : null,
                    isIndexing: t.props.searchIsIndexing,
                    pageNumMessages: n,
                    pageNumLinks: i,
                    pageNumEmbeds: l,
                    pageNumAttachments: r,
                    searchQueryString: j.A.getSearchInputText(t.props.searchContext),
                    searchQuery: C.A.getSearchResultsQuery(s)
                })
            })
    }
}

function k(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: M.Oq,
        children: (0, r.jsx)("div", {
            className: M.de,
            children: t
        })
    })
}

function G(e) {
    let {
        searchContext: t,
        isFeedbackVisible: n,
        dismissFeedbackEntrypoint: l
    } = e;
    return n ? (0, r.jsx)(P.A, {
        searchContext: t,
        dismissFeedbackEntrypoint: l
    }) : null
}

function U(e) {
    let {
        messages: t,
        blockCount: n,
        ignoreCount: l,
        search: i,
        searchContext: a,
        renderEmbeds: o,
        onClick: c,
        onScrollTo: u,
        onPageChange: d,
        paginationTotalCount: p,
        renderPageWrapper: h,
        onBlockedResultsClick: f,
        searchRequestAnalyticsId: g,
        searchResultsQuery: m,
        isFavoritesSearch: b
    } = e, {
        totalResults: A,
        isSearching: y,
        isIndexing: _,
        hasError: O
    } = i;
    if (O) return (0, r.jsxs)(k, {
        children: [(0, r.jsx)("div", {
            className: M.M6
        }), (0, r.jsx)("div", {
            className: s()(M.pZ, M.gJ),
            children: D.intl.string(D.t.uvDZBZ)
        })]
    });
    if (_) {
        let e = a.type === w.I4_.GUILD ? D.intl.string(D.t.AXPbZr) : D.intl.string(D.t.Q0JJjv);
        return (0, r.jsxs)(k, {
            children: [(0, r.jsx)(N.A, {}), (0, r.jsx)("div", {
                className: (M.pZ, M.Jy),
                children: e
            })]
        })
    }
    if (y) return null;
    if (A > 0) return (0, r.jsx)(T.A, {
        search: i,
        messages: t,
        onClick: c,
        blockCount: n,
        ignoreCount: l,
        renderEmbeds: o,
        scrollTo: u,
        onPageChange: d,
        paginationTotalCount: p,
        renderPageWrapper: h,
        onBlockedResultsClick: f,
        searchRequestAnalyticsId: g,
        searchResultsQuery: m,
        isFavoritesSearch: b
    });
    let {
        showNoResultsAlt: j
    } = i, v = j ? D.intl.string(D.t["VrK/2R"]) : D.intl.string(D.t.V6nAfF);
    return (0, r.jsxs)(k, {
        children: [(0, r.jsx)("div", {
            className: s()(M.$l, {
                [M.CC]: j
            })
        }), (0, r.jsx)("div", {
            className: s()(M.pZ, M.wV, {
                [M.CC]: j
            }),
            children: v
        })]
    })
}
let B = [],
    V = l.memo(function(e) {
        let {
            searchContext: t,
            search: n,
            renderEmbeds: i,
            searchRequestAnalyticsId: s,
            messages: d,
            blockCount: h,
            ignoreCount: f,
            isFeedbackVisible: b,
            dismissFeedbackEntrypoint: y,
            onSearchModeChange: O,
            onPageChange: v,
            searchMode: x,
            onBlockedResultsClick: N,
            searchResultsQuery: T,
            isFavoritesSearch: P,
            selectedChannelId: R
        } = e, L = l.useRef(null), k = l.useCallback(() => {
            j.A.cleanUpSearchState(t)
        }, [t]);
        l.useEffect(() => (m._.subscribe(w.jej.SEARCH_RESULTS_CLOSE, k), () => {
            m._.unsubscribe(w.jej.SEARCH_RESULTS_CLOSE, k)
        }), [k]);
        let V = l.useRef(n.showBlockedResults);
        l.useEffect(() => {
            if (V.current !== n.showBlockedResults) {
                V.current = n.showBlockedResults;
                let e = L.current;
                null != e && e.scrollToBottom()
            }
        }, [n.showBlockedResults]);
        let F = l.useCallback((e, t, n) => {
                let r = L.current;
                if (null == r) return;
                let l = r.getScrollerState().scrollTop - e;
                r.scrollTo({
                    to: l,
                    animate: t,
                    callback: n
                })
            }, []),
            {
                paginationTotalCount: H,
                paginationMaxIndex: K,
                isPaginationTotalCountLimited: W
            } = (0, E.o)({
                totalResults: n.totalResults,
                isSearching: n.isSearching
            }),
            z = l.useCallback((e, t) => {
                let n = K + 1;
                if (!W || e.targetPage !== n) return t;
                {
                    let e = D.intl.formatToPlainString(D.t["E+2azY"], {
                        maxPages: n
                    });
                    return (0, r.jsx)(c.m_, {
                        asContainer: !0,
                        text: e,
                        children: t
                    })
                }
            }, [W, K]),
            Y = l.useCallback(e => {
                e === x || n.isSearching || ((0, S.L6)({
                    searchContext: t,
                    searchRequestAnalyticsId: s,
                    mode: e
                }), O(e))
            }, [O, n.isSearching, t, x, s]),
            q = l.useCallback((e, r) => {
                let l = g.A.getChannel(e.channel_id),
                    i = null != l ? l.getGuildId() : null,
                    a = (0, A.bS)(t),
                    {
                        offset: o,
                        totalResults: c
                    } = n;
                (0, S.i4)({
                    searchContext: t,
                    searchRequestAnalyticsId: s,
                    guildId: i,
                    channelId: e.channel_id,
                    messageId: e.id,
                    pageResults: null != d ? d.length : null,
                    totalResults: c,
                    limit: w.T_y,
                    page: Math.floor(o / w.T_y) + 1,
                    offset: o,
                    index: r,
                    searchQueryString: j.A.getSearchInputText(t),
                    searchQuery: C.A.getSearchResultsQuery(a)
                })
            }, [n, t, s, d]),
            X = l.useCallback(e => {
                (0, S.kq)({
                    searchContext: t,
                    searchRequestAnalyticsId: s,
                    newPageIndex: e
                }), v(e)
            }, [v, t, s]),
            J = Math.floor(n.offset / w.T_y),
            Q = W && J >= K,
            Z = K + 1,
            $ = (0, a.yK)([C.A], () => {
                if (0 !== n.offset) return B;
                let e = d.length;
                if (e < 10) return B;
                let r = 0;
                if (d.forEach(e => {
                        (e.author.bot || null != e.webhookId) && r++
                    }), r / e < .75) return B;
                let l = (0, A.bS)(t),
                    i = C.A.getSearchResultsQueryString(l);
                return (0, A._o)(null != i ? i : "").some(e => e.type === w.LWr.FILTER_AUTHOR_TYPE) ? B : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT]
            }),
            [ee, et] = (0, p.kn)($),
            en = ee === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            er = l.useCallback(() => {
                if (n.isSearching) return;
                let e = "".concat(_.Ay[w.LWr.FILTER_AUTHOR_TYPE].key, " ").concat(D.intl.string(D.t.tPZo4p)) + " ";
                j.A.appendToSearchInputText(t, e)
            }, [t, n.isSearching]);
        return (0, r.jsxs)("section", {
            className: M.zt,
            "aria-label": D.intl.string(D.t["zkoeq/"]),
            children: [(0, r.jsx)(I.A, {
                searchContext: t,
                searchMode: x,
                onSearchModeChange: Y,
                totalResults: n.totalResults,
                isSearching: n.isSearching,
                isIndexing: n.isHistoricalIndexing,
                documentsIndexed: n.documentsIndexed,
                selectedChannelId: R
            }), (0, r.jsxs)(u.T7Y, {
                ref: L,
                className: M.XG,
                children: [Q && !n.isSearching && (0, r.jsx)(u.po8, {
                    className: M.VC,
                    messageType: u.YCn.WARNING,
                    children: D.intl.formatToPlainString(D.t["E+2azY"], {
                        maxPages: Z
                    })
                }), en && (0, r.jsx)(u.po8, {
                    className: M.QR,
                    messageType: u.YCn.INFO,
                    children: D.intl.format(D.t["gQeg/R"], {
                        handleClick: er
                    })
                }), (0, r.jsx)(U, {
                    messages: d,
                    blockCount: h,
                    ignoreCount: f,
                    search: n,
                    searchContext: t,
                    renderEmbeds: i,
                    onClick: q,
                    onScrollTo: F,
                    onPageChange: X,
                    paginationTotalCount: W ? H : void 0,
                    renderPageWrapper: z,
                    onBlockedResultsClick: N,
                    searchRequestAnalyticsId: s,
                    searchResultsQuery: T,
                    isFavoritesSearch: P
                })]
            }), (0, r.jsx)(G, {
                searchContext: t,
                isFeedbackVisible: b,
                dismissFeedbackEntrypoint: y
            })]
        })
    });

function F(e) {
    let {
        searchContext: t,
        selectedChannelId: n
    } = e, {
        isFeedbackVisible: i,
        dismissFeedbackEntrypoint: s
    } = function() {
        let [e, t] = l.useState(!1), n = (0, y.H)({
            location: "SearchResults"
        });
        return (0, d.Ay)(() => {
            n && h.A.possiblyShowFeedbackModal(R.MW.SEARCH_RESULTS, () => t(!0), () => t(!1))
        }), {
            dismissFeedbackEntrypoint: l.useCallback(() => {
                t(!1)
            }, []),
            isFeedbackVisible: e
        }
    }(), o = (0, A.bS)(t), c = (0, a.cf)([b.A, C.A], () => {
        var e, t, n, r, l;
        return {
            isSearching: null != (e = b.A.getIsFetching(o)) && e,
            isIndexing: null != (t = b.A.getIsIndexing(o)) && t,
            isHistoricalIndexing: null != (n = b.A.getIsHistoricalIndexing(o)) && n,
            documentsIndexed: b.A.getDocumentsIndexed(o),
            offset: null != (r = C.A.getSearchResultsOffset(o)) ? r : 0,
            totalResults: null != (l = b.A.getTotalCount(o)) ? l : 0,
            hasError: null != b.A.getError(o),
            showBlockedResults: C.A.shouldShowBlockedResults(o),
            showNoResultsAlt: C.A.shouldShowNoResultsAlt(o)
        }
    }), u = (0, a.bG)([b.A], () => b.A.getAnalyticsId(o)), {
        renderedMessages: p,
        ignoreCount: g,
        blockCount: m
    } = (0, x.A)({
        searchContext: t
    }), _ = (0, a.bG)([C.A], () => {
        var e;
        return null != (e = C.A.getSearchMode(o)) ? e : w.BBH.NEWEST
    }), v = l.useCallback(e => {
        if (c.isSearching) return;
        O.A.updateSearchMode(t, e);
        let n = j.A.getSearchInputText(t);
        null != n && j.A.fetchMessages({
            searchContext: t,
            searchQueryString: n,
            offset: 0
        })
    }, [c.isSearching, t]), E = l.useCallback(e => {
        if (c.isSearching) return;
        let n = j.A.getSearchInputText(t);
        null != n && j.A.fetchMessages({
            searchContext: t,
            searchQueryString: n,
            offset: e * w.T_y
        })
    }, [c.isSearching, t]), S = (0, a.bG)([C.A], () => {
        let e = (0, A.bS)(t);
        return C.A.getSearchResultsQuery(e)
    }), I = t.type === w.I4_.FAVORITES, N = l.useCallback(e => O.A.setShowBlockedResults(t, e), [t]), T = l.useDeferredValue(p), P = l.useDeferredValue(c), D = l.useDeferredValue(u);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(V, {
            searchContext: t,
            search: P,
            searchRequestAnalyticsId: D,
            messages: T,
            ignoreCount: g,
            blockCount: m,
            renderEmbeds: f.rs.useSetting(),
            isFeedbackVisible: i,
            dismissFeedbackEntrypoint: s,
            onPageChange: E,
            onSearchModeChange: v,
            searchMode: _,
            onBlockedResultsClick: N,
            searchResultsQuery: S,
            isFavoritesSearch: I,
            selectedChannelId: n
        }), (0, r.jsx)(L, {
            searchContext: t,
            searchRequestAnalyticsId: D,
            messages: T,
            searchOffset: P.offset,
            searchLimit: w.T_y,
            searchHasError: P.hasError,
            searchTotalResults: P.totalResults,
            searchIsIndexing: P.isHistoricalIndexing,
            isSearching: P.isSearching
        })]
    })
}

function H(e) {
    let {
        guildId: t,
        channelId: n
    } = e, l = (0, v.J)({
        guildId: t,
        channelId: n
    });
    return null == l ? null : (0, r.jsx)(F, {
        searchContext: l,
        selectedChannelId: n
    })
}