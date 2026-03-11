/** chunk id: 846577 params = (module,exports,require) **/
i.d(e, {
    P: () => u
});
var t = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(966107),
    d = i(287809),
    s = i(985018);

function u(n) {
    let e = (0, r.bG)([d.default], () => d.default.getCurrentUser());
    return e?.isStaff() !== !0 ? null : (0, t.jsxs)(t.Fragment, {
        children: [!n.isMessageRequest && (0, t.jsx)(l.Drp, {
            id: "mark-as-message-request",
            label: s.intl.string(s.t.L6623r),
            action: () => (0, a.Sk)(n.id)
        }), (0, t.jsx)(l.Drp, {
            id: "clear-message-request",
            label: s.intl.string(s.t["85YWlY"]),
            action: () => (0, a.JH)(n.id)
        })]
    })
}