/** chunk id: 922529 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(813516),
    c = n(701628);
let d = l.forwardRef(function(e, t) {
        let {
            className: n,
            isBeforeGroup: l = !1,
            itemId: s,
            ...d
        } = e, {
            children: u
        } = d, {
            role: h,
            onFocus: m,
            ...A
        } = (0, r.rm)(s ?? "");
        return (0, i.jsx)(o.A, {
            ...d,
            ...null != s ? {
                ...A,
                onFocus: m
            } : void 0,
            ref: t,
            role: "separator",
            "aria-label": "string" == typeof u ? u : void 0,
            className: a()(n, {
                [c.yF]: !0,
                [c.ov]: null != u,
                [c.rd]: l
            })
        })
    }),
    u = l.memo(d)