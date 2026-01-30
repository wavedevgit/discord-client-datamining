/** chunk id: 645745, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    o = n(827734),
    c = n(397927),
    s = n(147925),
    a = n(273926),
    d = n(243056),
    u = n(985018),
    f = n(592454);
let j = function(e) {
    let {
        channelId: t,
        formField: n,
        index: i,
        isDragEnabled: j,
        isDropHovered: p,
        onDrop: b,
        onEdit: y,
        onRemove: m,
        canRemove: O,
        title: v,
        actionsLocation: x,
        fieldStyle: h
    } = e, g = n.values, P = g.slice(0, 1), w = g.length - P.length;
    return (0, r.jsxs)(d.A, {
        field: n,
        index: i,
        isDragEnabled: j,
        isDropHovered: p,
        onDrop: b,
        onEdit: y,
        onRemove: m,
        title: v,
        canRemove: O,
        actionsLocation: x,
        fieldStyle: h,
        children: [(0, r.jsx)(a.IJ, {
            terms: P,
            channelId: t
        }), 0 !== w && (0, r.jsxs)(c.DUT, {
            className: l()(f.vs, f.vk),
            onClick: y,
            children: [(0, r.jsx)(c.Text, {
                variant: "text-md/normal",
                className: f.vk,
                children: u.intl.format(u.t.jnhD0S, {
                    count: w
                })
            }), (0, r.jsx)(s.A, {
                className: f.IC,
                height: 14,
                width: 14,
                color: o.A.unsafe_rawColors.WHITE.css
            })]
        }), (0, r.jsx)(a.xs, {
            disabled: !0,
            checked: !1
        })]
    })
}