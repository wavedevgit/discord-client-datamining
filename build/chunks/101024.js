/** chunk id: 101024, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(942381),
    o = n(602034),
    s = n(397927),
    l = n(850992),
    c = n(151271),
    u = n(64306);
let d = i.forwardRef(function(e, t) {
    let {
        store: n,
        hasSendableExpressions: d,
        onKeyDown: f,
        gridNavigatorId: p,
        expressionsListRef: _,
        defaultSearchPlaceholder: h,
        emptySearchPlaceholder: m
    } = e, g = i.useRef(null), [E, y] = (0, c.RQ)(e => [e.searchQuery, e.isSearchSuggestion], a.x), b = n.useStore(e => e.searchPlaceholder), O = n.useStore(e => e.inspectedExpressionPosition, a.x), v = i.useCallback(e => {
        var t;
        n.setActiveCategoryIndex("" === e ? 0 : l.Uk), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, c.Ri)(e), null == (t = _.current) || t.scrollTo(0)
    }, [_, n]), A = i.useCallback(() => {
        (0, c.Ri)("")
    }, []);
    i.useImperativeHandle(t, () => ({
        focus: () => {
            var e;
            return null == (e = g.current) ? void 0 : e.focus()
        }
    })), i.useLayoutEffect(() => {
        if (y) {
            var e;
            null == (e = g.current) || e.focus()
        }
    }, [y]);
    let I = () => null != b ? b : d || null == m ? h : m;
    return (0, r.jsx)("div", {
        className: u.i,
        children: (0, r.jsx)(s.IWV, {
            autoFocus: d,
            disabled: !d,
            query: E,
            ref: g,
            placeholder: I(),
            onClear: A,
            onKeyDown: f,
            onChange: v,
            inputProps: {
                "aria-haspopup": "grid",
                "aria-controls": p,
                "aria-expanded": !0,
                "aria-activedescendant": (0, o.Aq)(p, O.columnIndex, O.rowIndex)
            }
        })
    })
})