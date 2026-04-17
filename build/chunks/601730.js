/** chunk id: 601730 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(554146),
    s = n(397927),
    a = n(932001),
    r = n(722255),
    o = n(14594),
    d = n(652215),
    c = n(49999),
    u = n(985018);

function h() {
    let [e, t] = (0, a.Wl)(l.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
        cooldownDurationMs: o.aH
    });
    return e !== l.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, i.jsxs)(s.$Td, {
        color: s.Hv$.BRAND,
        children: [(0, i.jsx)(s.PMB, {
            onClick: () => t(c.i.DISMISS),
            noticeType: d.kqX.IGNORE_USER_FEEDBACK_NAGBAR
        }), u.intl.string(u.t.XkeW9N), (0, i.jsx)(s.Z_L, {
            onClick: () => {
                (0, r.u)(), t(c.i.TAKE_ACTION)
            },
            noticeType: d.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
            children: u.intl.string(u.t.vcdNKv)
        })]
    })
}