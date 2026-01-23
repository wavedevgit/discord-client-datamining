/** Chunk was on 97492 **/
/** chunk id: 170428, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(473503),
    a = n(706752),
    o = n(58736),
    c = n(267102),
    u = n(474397),
    d = n(378570),
    p = n(954571),
    h = n(652215),
    f = n(486974),
    g = n(985018),
    m = n(641131);

function b(e) {
    var t, n;
    let {
        channel: b
    } = e, A = l.useContext(p.AnalyticsContext), y = (0, c.aL)(), _ = g.intl.string(m.default["Beo/7v"]), {
        firstMessage: O
    } = (0, s.OA)(b), j = null == O || null == (t = O.messageSnapshots) ? void 0 : t[0], v = null == j || null == (n = j.moderatorReport) ? void 0 : n.reported_user_id;
    return b.isModeratorReportChannel() && null != v ? (0, r.jsx)(o.Ay.Icon, {
        onClick: () => {
            (0, d.iN)(b.id), (0, u.A)(), (0, a.z)(b.guild_id, v, b.id, {
                modViewPanel: f.g.INFO,
                sourceLocation: null != location ? location : A.location
            }), y.dispatch(h.jej.POPOUT_CLOSE)
        },
        tooltip: _,
        icon: i.quN,
        "aria-label": _
    }) : null
}