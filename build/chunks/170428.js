/** chunk id: 170428, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(473503),
    a = n(706752),
    o = n(58736),
    c = n(267102),
    d = n(474397),
    u = n(378570),
    h = n(954571),
    A = n(652215),
    m = n(486974),
    p = n(985018),
    g = n(733045);

function _(e) {
    let {
        channel: t
    } = e, n = s.useContext(h.AnalyticsContext), _ = (0, c.aL)(), f = p.intl.string(g.default["Beo/7v"]), {
        firstMessage: x
    } = (0, r.OA)(t), C = x?.messageSnapshots?.[0], E = C?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != E ? (0, i.jsx)(o.Ay.Icon, {
        onClick: () => {
            (0, u.iN)(t.id), (0, d.A)(), (0, a.z)(t.guild_id, E, t.id, {
                modViewPanel: m.g.INFO,
                sourceLocation: location ?? n.location
            }), _.dispatch(A.jej.POPOUT_CLOSE)
        },
        tooltip: f,
        icon: l.quN,
        "aria-label": f
    }) : null
}