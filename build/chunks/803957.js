/** chunk id: 803957, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(311907),
    s = n(397927),
    o = n(865116),
    d = n(147925),
    c = n(212335),
    u = n(357905);
let _ = e => {
        let {
            child: t,
            onClick: n,
            nodeMap: a
        } = e, [_, m] = t, x = (0, r.bG)([o.Ay], () => o.Ay.get("iar_show_report_sub_type_labels")), p = a[m], g = p?.report_type;
        return (0, l.jsxs)(s.DUT, {
            className: i()(u.Zm, c.lD),
            onClick: () => n(t),
            children: [(0, l.jsxs)("div", {
                className: u.OH,
                children: [(0, l.jsx)(s.Text, {
                    className: u.ix,
                    variant: "text-md/semibold",
                    children: _
                }), x && null != g && (0, l.jsx)(s.Text, {
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
    m = e => {
        let {
            node: {
                children: t
            },
            onSelectChild: n,
            nodeMap: a
        } = e;
        if (null == t || 0 === t.length) return null;
        let i = t.map(e => {
            let [t, i] = e;
            return (0, l.jsx)(_, {
                child: e,
                onClick: n,
                nodeMap: a
            }, `${t}+${i}`)
        });
        return (0, l.jsx)("div", {
            className: c.E8,
            children: i
        })
    }