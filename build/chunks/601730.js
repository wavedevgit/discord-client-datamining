/** chunk id: 601730 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => E
});
var i = n(627968),
    r = n(554146),
    s = n(397927),
    l = n(932001),
    a = n(722255),
    o = n(14594),
    c = n(652215),
    u = n(49999),
    d = n(985018);

function E() {
    let [t, e] = (0, l.Wl)(r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
        cooldownDurationMs: o.aH
    });
    return t !== r.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, i.jsxs)(s.$Td, {
        color: s.Hv$.BRAND,
        children: [(0, i.jsx)(s.PMB, {
            onClick: () => e(u.i.DISMISS),
            noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR
        }), d.intl.string(d.t.XkeW9N), (0, i.jsx)(s.Z_L, {
            onClick: () => {
                (0, a.u)(), e(u.i.TAKE_ACTION)
            },
            noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
            children: d.intl.string(d.t.vcdNKv)
        })]
    })
}