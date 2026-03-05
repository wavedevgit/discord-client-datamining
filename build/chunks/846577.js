/** chunk id: 846577 params = (module,exports,require) **/
e.d(t, {
    P: () => u
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(966107),
    d = e(287809),
    s = e(985018);

function u(n) {
    let t = (0, r.bG)([d.default], () => d.default.getCurrentUser());
    return t?.isStaff() !== !0 ? null : (0, i.jsxs)(i.Fragment, {
        children: [!n.isMessageRequest && (0, i.jsx)(l.Drp, {
            id: "mark-as-message-request",
            label: s.intl.string(s.t.L6623r),
            action: () => (0, a.Sk)(n.id)
        }), (0, i.jsx)(l.Drp, {
            id: "clear-message-request",
            label: s.intl.string(s.t["85YWlY"]),
            action: () => (0, a.JH)(n.id)
        })]
    })
}