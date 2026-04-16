/** chunk id: 922529 params = (module,exports,require) **/
_.d(t, {
    A: () => c
});
var s = _(627968),
    i = _(64700),
    a = _(503698),
    n = _.n(a),
    r = _(837381),
    A = _(813516),
    l = _(701628);
let o = i.forwardRef(function(e, t) {
        let {
            className: _,
            isBeforeGroup: i = !1,
            itemId: a,
            ...o
        } = e, {
            children: c
        } = o, {
            role: I,
            onFocus: d,
            ...E
        } = (0, r.rm)(a ?? "");
        return (0, s.jsx)(A.A, {
            ...o,
            ...null != a ? {
                ...E,
                onFocus: d
            } : void 0,
            ref: t,
            role: "separator",
            "aria-label": "string" == typeof c ? c : void 0,
            className: n()(_, {
                [l.yF]: !0,
                [l.ov]: null != c,
                [l.rd]: i
            })
        })
    }),
    c = i.memo(o)