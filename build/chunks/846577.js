/** chunk id: 846577 params = (module,exports,require) **/
t.d(e, {
    P: () => u
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(966107),
    d = t(287809),
    s = t(985018);

function u(n) {
    let e = (0, r.bG)([d.default], () => d.default.getCurrentUser());
    return e?.isStaff() !== !0 ? null : (0, i.jsxs)(i.Fragment, {
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