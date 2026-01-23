/** Chunk was on web.js **/
/** chunk id: 770171, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(962125),
    o = n(927578),
    l = n(151271),
    c = n(240864),
    u = n(887695),
    d = n(198743);
let f = 20,
    p = i.forwardRef(function(e, t) {
        let {
            categories: n,
            store: a,
            hasSearchResults: c,
            listPadding: p,
            renderRow: h,
            renderSection: m,
            renderSectionHeader: g,
            renderSectionFooter: E,
            renderInspector: y,
            renderEmptySearchState: b,
            rowCount: O,
            rowCountBySection: v,
            rowHeight: A,
            sectionHeaderHeight: I,
            sectionFooterHeight: S,
            renderUpsell: T,
            onScroll: C
        } = e, N = i.useRef(!1), w = i.useRef(null), R = (0, l.RQ)(e => e.searchQuery), P = a.useStore(e => e.activeCategoryIndex), D = i.useMemo(() => n.map(e => (0, o.Em)(e.categoryInfo) ? {
            isNitroLocked: e.categoryInfo.isNitroLocked
        } : {
            isNitroLocked: !1
        }), [n]), x = (0, u.Fk)({
            activeCategoryIndex: P,
            isScrolling: N,
            listRef: w,
            onActiveCategoryIndexChange: a.setActiveCategoryIndex,
            scrollOffset: f,
            searchQuery: R
        }), L = i.useCallback(e => {
            x(e), _({
                listRef: w,
                searchQuery: R,
                nitroLockedSectionStates: D,
                scrollTop: e
            }), null == C || C(e)
        }, [x, R, D, C]);
        return i.useEffect(() => {
            null != w.current && L(0)
        }, [L, w]), (0, u.FV)({
            searchQuery: R,
            activeCategoryIndex: P,
            listRef: w
        }), i.useImperativeHandle(t, () => ({
            scrollTo: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = w.current) ? void 0 : e.scrollTo(...n)
            },
            getRowDescriptors: () => {
                var e, t;
                return null != (e = null == (t = w.current) ? void 0 : t.getRowDescriptors()) ? e : []
            },
            getSectionDescriptors: () => {
                var e, t;
                return null != (e = null == (t = w.current) ? void 0 : t.getSectionDescriptors()) ? e : []
            },
            scrollToSectionTop: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = w.current) ? void 0 : e.scrollToSectionTop(...n)
            },
            scrollRowIntoView: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = w.current) ? void 0 : e.scrollRowIntoView(...n)
            },
            getScrollerNode: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = w.current) ? void 0 : e.getScrollerNode(...n)
            },
            scrollIntoViewNode: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = w.current) ? void 0 : e.scrollIntoViewNode(...n)
            },
            getListDimensions: function() {
                for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return null != (e = null == (t = w.current) ? void 0 : t.getListDimensions(...r)) ? e : {
                    height: -1,
                    totalHeight: -1
                }
            }
        }), []), (0, r.jsxs)("div", {
            className: d.i,
            children: [R.length > 0 && !c && null != b ? b() : (0, r.jsx)(s.A, {
                role: "none presentation",
                listPadding: p,
                onScroll: L,
                renderRow: h,
                renderSection: m,
                renderSectionHeader: g,
                renderSectionFooter: E,
                rowCount: O,
                rowCountBySection: v,
                rowHeight: A,
                sectionHeaderHeight: I,
                sectionFooterHeight: S,
                stickyHeaders: !0,
                ref: w
            }), null == T ? void 0 : T(), null == y ? void 0 : y()]
        })
    }),
    _ = (0, a.throttle)(h, 300, {
        leading: !1,
        trailing: !0
    });

function h(e) {
    let {
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: r,
        scrollTop: i
    } = e;
    if (null == t.current) return;
    let a = (0, c.s)({
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: r,
        scrollTop: i
    });
    l.RQ.setState({
        isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
        areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible
    })
}
let m = p