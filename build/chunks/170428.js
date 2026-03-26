/** chunk id: 170428 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(473503),
    r = n(706752),
    o = n(58736),
    c = n(267102),
    d = n(474397),
    u = n(378570),
    h = n(954571),
    A = n(652215),
    m = n(486974),
    _ = n(985018),
    p = n(641131);

function g(e) {
    let {
        channel: t
    } = e, n = s.useContext(h.AnalyticsContext), g = (0, c.aL)(), f = _.intl.string(p.default["Beo/7v"]), {
        firstMessage: x
    } = (0, a.OA)(t), E = x?.messageSnapshots?.[0], C = E?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != C ? (0, i.jsx)(o.Ay.Icon, {
        onClick: () => {
            (0, u.iN)(t.id), (0, d.A)(), (0, r.z)(t.guild_id, C, t.id, {
                modViewPanel: m.g.INFO,
                sourceLocation: location ?? n.location
            }), g.dispatch(A.jej.POPOUT_CLOSE)
        },
        tooltip: f,
        icon: l.quN,
        "aria-label": f
    }) : null
}