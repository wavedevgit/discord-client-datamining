/** chunk id: 846577 params = (module,exports,require) **/
t.d(n, {
    P: () => u
});
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(966107),
    d = t(287809),
    s = t(985018);

function u(e) {
    let n = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return n?.isStaff() !== !0 ? null : (0, r.jsxs)(r.Fragment, {
        children: [!e.isMessageRequest && (0, r.jsx)(l.Drp, {
            id: "mark-as-message-request",
            label: s.intl.string(s.t.L6623r),
            action: () => (0, a.Sk)(e.id)
        }), (0, r.jsx)(l.Drp, {
            id: "clear-message-request",
            label: s.intl.string(s.t["85YWlY"]),
            action: () => (0, a.JH)(e.id)
        })]
    })
}