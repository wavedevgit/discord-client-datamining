/** Chunk was on 47841 **/
/** chunk id: 645745, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(827734),
    a = n(397927),
    o = n(147925),
    c = n(273926),
    d = n(243056),
    u = n(985018),
    g = n(592454);
let m = function(e) {
    let {
        channelId: t,
        formField: n,
        index: i,
        isDragEnabled: m,
        isDropHovered: p,
        onDrop: f,
        onEdit: b,
        onRemove: h,
        canRemove: x,
        title: j,
        actionsLocation: _,
        fieldStyle: O
    } = e, v = n.values, y = v.slice(0, 1), A = v.length - y.length;
    return (0, r.jsxs)(d.A, {
        field: n,
        index: i,
        isDragEnabled: m,
        isDropHovered: p,
        onDrop: f,
        onEdit: b,
        onRemove: h,
        title: j,
        canRemove: x,
        actionsLocation: _,
        fieldStyle: O,
        children: [(0, r.jsx)(c.IJ, {
            terms: y,
            channelId: t
        }), 0 !== A && (0, r.jsxs)(a.DUT, {
            className: l()(g.vs, g.vk),
            onClick: b,
            children: [(0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                className: g.vk,
                children: u.intl.format(u.t.jnhD0S, {
                    count: A
                })
            }), (0, r.jsx)(o.A, {
                className: g.IC,
                height: 14,
                width: 14,
                color: s.A.unsafe_rawColors.WHITE.css
            })]
        }), (0, r.jsx)(c.xs, {
            disabled: !0,
            checked: !1
        })]
    })
}