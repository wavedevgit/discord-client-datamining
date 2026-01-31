/** chunk id: 601730, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var r = n(627968),
    i = n(554146),
    l = n(397927),
    o = n(379848),
    a = n(722255),
    s = n(14594),
    c = n(652215),
    u = n(49999),
    E = n(985018);

function d() {
    let [e, t] = (0, o.Wl)(i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
        cooldownDurationMs: s.aH
    });
    return e !== i.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK ? null : (0, r.jsxs)(l.$Td, {
        color: l.Hv$.BRAND,
        children: [(0, r.jsx)(l.PMB, {
            onClick: () => t(u.i.DISMISS),
            noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR
        }), E.intl.string(E.t.XkeW9N), (0, r.jsx)(l.Z_L, {
            onClick: () => {
                (0, a.u)(), t(u.i.TAKE_ACTION)
            },
            noticeType: c.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
            children: E.intl.string(E.t.vcdNKv)
        })]
    })
}