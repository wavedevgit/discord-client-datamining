/** chunk id: 846577 params = (module,exports,require) **/
t.d(n, {
    P: () => u
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    d = t(966107),
    a = t(287809),
    s = t(985018);

function u(e) {
    let n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return n?.isStaff() !== !0 ? null : (0, i.jsxs)(i.Fragment, {
        children: [!e.isMessageRequest && (0, i.jsx)(l.Drp, {
            id: "mark-as-message-request",
            label: s.intl.string(s.t.L6623r),
            action: () => (0, d.Sk)(e.id)
        }), (0, i.jsx)(l.Drp, {
            id: "clear-message-request",
            label: s.intl.string(s.t["85YWlY"]),
            action: () => (0, d.JH)(e.id)
        })]
    })
}