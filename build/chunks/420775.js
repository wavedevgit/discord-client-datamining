/** chunk id: 420775, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(735438),
    o = n(417597),
    u = n(397927),
    c = n(964486),
    E = n(570209),
    d = n(457699),
    _ = n(141468),
    g = n(465364),
    A = n(229374),
    T = n(383233),
    h = n(761640),
    I = n(696451),
    O = n(287809),
    m = n(706752),
    N = n(744432),
    f = n(62697),
    p = n(486974),
    S = n(652215),
    G = n(438536),
    R = n(618695);

function D(e) {
    var t, n;
    let {
        userId: a,
        guildId: D,
        location: C,
        className: L,
        onNavigate: b
    } = e, x = r.useRef(null), M = (0, o.bG)([h.Ay], () => h.Ay.getGuildSidebarState(D), [D]), v = r.useRef(0), [j, U] = r.useState(null != (t = null == M ? void 0 : M.details.additionalSearchQuery) ? t : {}), y = (0, N.KR)(a, D, {
        addtionalQuery: j,
        shouldDispatch: !0
    }), k = (0, o.bG)([O.default], () => O.default.getUser(a), [a]), P = (0, o.bG)([I.Ay], () => I.Ay.getMember(D, a), [D, a]);
    (0, c.u5)(() => {
        let e = null == M ? void 0 : M.details.scrollOffset;
        if (null != e) {
            var t;
            null == (t = x.current) || t.scrollTo({
                to: e,
                animate: !1
            })
        }
    });
    let F = r.useCallback(e => {
            null == M || (v.current = e.target.scrollTop, (0, m.z)(D, a, M.baseChannelId, {
                modViewPanel: p.g.MESSAGE_HISTORY,
                additionalSearchQuery: j,
                scrollOffset: v.current
            }))
        }, [D, a, M, j]),
        w = (0, s.throttle)(F, 300),
        X = r.useCallback(e => {
            var t, n;
            if (null == M) return;
            let l = (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), l.forEach(function(t) {
                        var l;
                        l = n[t], t in e ? Object.defineProperty(e, t, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = l
                    })
                }
                return e
            }({}, j), n = n = {
                offset: 25 * e
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t);
            U(l), (0, m.z)(D, a, M.baseChannelId, {
                modViewPanel: p.g.MESSAGE_HISTORY,
                additionalSearchQuery: l,
                scrollOffset: v.current
            })
        }, [D, a, M, j]),
        B = null != (n = null == j ? void 0 : j.offset) ? n : 0,
        V = (0, o.bG)([d.A], () => {
            if (null == y.result) return [];
            let e = (0, E.wG)("");
            return y.result.messages.map(e => {
                let [t] = e;
                return (0, _.rh)(t)
            }).map(t => {
                let n = d.A.getMessage(t.id, t.channel_id),
                    l = new T.Ay(t);
                return null != n && (l = l.merge({
                    attachments: n.attachments,
                    embeds: n.embeds
                })), l = l.set("customRenderedContent", (0, g.Ay)(l, {
                    postProcessor: e,
                    allowHeading: !0,
                    allowList: !0
                }))
            })
        }, [y.result]),
        H = r.useMemo(() => {
            var e, t, n, l;
            return null == y.result ? {
                documentsIndexed: 0,
                isSearching: !0,
                isIndexing: !1,
                isHistoricalIndexing: !1,
                offset: B,
                totalResults: 0,
                hasError: !1,
                showBlockedResults: !1,
                showNoResultsAlt: !1
            } : {
                documentsIndexed: null != (e = y.result.documents_indexed) ? e : 0,
                isSearching: !1,
                isIndexing: null != (t = y.result.doing_deep_historical_index) && t,
                isHistoricalIndexing: null != (n = y.result.doing_deep_historical_index) && n,
                offset: B,
                totalResults: null != (l = y.result.total_results) ? l : 0,
                hasError: !1,
                showBlockedResults: !1,
                showNoResultsAlt: !1
            }
        }, [y.result, B]);
    return null == k || null == P || null == H ? null : (0, l.jsxs)("div", {
        className: i()(G.kL, L),
        children: [(0, l.jsx)(f.A, {
            guildId: D,
            userId: a,
            onNavigate: b
        }), (0, l.jsx)(u.T7Y, {
            className: R.W,
            ref: x,
            onScroll: w,
            children: (0, l.jsx)(A.A, {
                messages: V,
                search: H,
                renderEmbeds: !0,
                blockCount: 0,
                ignoreCount: 0,
                scrollTo: S.tEg,
                onPageChange: X,
                onBlockedResultsClick: S.tEg
            })
        })]
    })
}