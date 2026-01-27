/** Chunk was on 34078 **/
/** chunk id: 952116, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(627968);
r(64700);
var s = r(397927),
    i = r(235986),
    l = r(13008),
    a = r(854378),
    o = r(985018),
    c = r(930774),
    u = r(473169);

function h(e) {
    let {
        title: t,
        subtitle: r,
        error: h,
        onSubmit: d,
        onCancel: p
    } = e;
    return (0, n.jsxs)(i.A, {
        direction: i.A.Direction.VERTICAL,
        children: [(0, n.jsx)(a.hE, {
            className: u.QB,
            children: t
        }), (0, n.jsx)(a.tK, {
            className: c.p6,
            children: r
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(l.A, {
                inputClassName: c.IX,
                onSubmit: d
            }), null != h ? (0, n.jsx)(s.Text, {
                className: c.z3,
                variant: "text-sm/normal",
                children: h
            }) : null]
        }), null != p && (0, n.jsx)("div", {
            className: c.x6,
            children: (0, n.jsx)(s.Button, {
                text: o.intl.string(o.t["ETE/oC"]),
                variant: "secondary",
                fullWidth: !0,
                onClick: p
            })
        })]
    })
}