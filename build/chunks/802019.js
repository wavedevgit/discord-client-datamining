/** chunk id: 802019, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(962125),
    l = n(151271),
    c = n(652215),
    u = n(103551);
let d = e => {
        let {
            activeIndex: t,
            categoryListRef: n,
            getScrollOffsetForIndex: r
        } = e, a = i.useRef(c.An1), o = i.useRef(t);
        return i.useEffect(() => {
            null != t && t !== o.current && (a.current !== c.An1 && window.cancelAnimationFrame(a.current), a.current = window.requestAnimationFrame(() => {
                var e;
                if (null == n.current) return;
                let i = t > (null != (e = o.current) ? e : -1),
                    s = null != r ? r(t, i) : 0;
                n.current.scrollRowIntoView(t, {
                    animate: !0,
                    offset: s
                }), a.current = c.An1, o.current = t
            }))
        }, [t, n, r]), {
            categoryListRef: n
        }
    },
    f = function(e) {
        let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: a,
            store: c,
            children: f,
            className: p,
            listPadding: _,
            rowCount: h,
            getScrollOffsetForIndex: m,
            categoryHeight: g,
            onScroll: E,
            renderCategoryListItem: y,
            rowCountBySection: b,
            renderSection: O
        } = e, v = c.useStore(e => e.activeCategoryIndex);
        d({
            activeIndex: v,
            categoryListRef: t,
            getScrollOffsetForIndex: m
        });
        let A = i.useCallback(e => {
                let {
                    searchQuery: t
                } = l.RQ.getState();
                if (c.setActiveCategoryIndex(e), "" !== t)(0, l.Ri)("");
                else {
                    var r;
                    null == (r = n.current) || r.scrollToSectionTop(e)
                }
            }, [n, c]),
            I = i.useCallback(e => y(a[e], e, () => A(e), v === e), [v, a, A, y]),
            S = i.useMemo(() => "function" == typeof g ? e => g(a[e], e) : g, [a, g]);
        return (0, r.jsxs)("div", {
            className: o()(u.i, p),
            children: [(0, r.jsx)(s.A, {
                listPadding: _,
                onScroll: E,
                ref: t,
                renderRow: I,
                rowCount: h,
                rowHeight: S,
                hideScrollbar: !0,
                rowCountBySection: b,
                renderSection: O
            }), null == f ? void 0 : f(A)]
        })
    }