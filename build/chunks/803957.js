/** Chunk was on 58652 **/
/** chunk id: 803957, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(311907),
    s = n(397927),
    o = n(865116),
    d = n(147925),
    c = n(212335),
    u = n(357905);
let m = e => {
        let {
            child: t,
            onClick: n,
            nodeMap: r
        } = e, [m, p] = t, b = (0, a.bG)([o.Ay], () => o.Ay.get("iar_show_report_sub_type_labels")), x = r[p], g = null == x ? void 0 : x.report_type;
        return (0, l.jsxs)(s.DUT, {
            className: i()(u.Zm, c.lD),
            onClick: () => n(t),
            children: [(0, l.jsxs)("div", {
                className: u.OH,
                children: [(0, l.jsx)(s.Text, {
                    className: u.ix,
                    variant: "text-md/semibold",
                    children: m
                }), b && null != g && (0, l.jsx)(s.Text, {
                    className: u.Z$,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: g
                })]
            }), (0, l.jsx)(d.A, {
                className: u._2,
                direction: d.A.Directions.RIGHT
            })]
        })
    },
    p = e => {
        let {
            node: {
                children: t
            },
            onSelectChild: n,
            nodeMap: r
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map(e => {
            let [t, i] = e;
            return (0, l.jsx)(m, {
                child: e,
                onClick: n,
                nodeMap: r
            }, "".concat(t, "+").concat(i))
        });
        return (0, l.jsx)("div", {
            className: c.E8,
            children: i
        })
    }