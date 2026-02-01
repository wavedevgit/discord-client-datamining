/** chunk id: 846577, original params: e,t,n (module,exports,require) **/
n.d(t, {
    P: () => d
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(966107),
    s = n(287809),
    o = n(985018);

function d(e) {
    let t = (0, r.bG)([s.default], () => s.default.getCurrentUser());
    return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
        children: [!e.isMessageRequest && (0, i.jsx)(l.Drp, {
            id: "mark-as-message-request",
            label: o.intl.string(o.t.L6623r),
            action: () => (0, a.Sk)(e.id)
        }), (0, i.jsx)(l.Drp, {
            id: "clear-message-request",
            label: o.intl.string(o.t["85YWlY"]),
            action: () => (0, a.JH)(e.id)
        })]
    })
}