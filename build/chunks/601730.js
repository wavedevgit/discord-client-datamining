/** chunk id: 601730 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(554146),
    r = n(397927),
    s = n(932001),
    a = n(722255),
    o = n(14594),
    c = n(652215),
    u = n(49999),
    d = n(985018);

function _() {
    let [e, t] = (0, s.Wl)(l.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
        cooldownDurationMs: o.aH
    });
    return e !== l.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, i.jsxs)(r.$Td, {
        color: r.Hv$.BRAND,
        children: [(0, i.jsx)(r.PMB, {
            onClick: () => t(u.i.DISMISS),
            noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR
        }), d.intl.string(d.t.XkeW9N), (0, i.jsx)(r.Z_L, {
            onClick: () => {
                (0, a.u)(), t(u.i.TAKE_ACTION)
            },
            noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
            children: d.intl.string(d.t.vcdNKv)
        })]
    })
}