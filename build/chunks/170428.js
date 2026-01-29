/** Chunk was on 1113 **/
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
    h = n(954571),
    p = n(652215),
    g = n(486974),
    f = n(985018),
    m = n(641131);

function b(e) {
    var t, n;
    let {
        channel: b
    } = e, A = l.useContext(h.AnalyticsContext), y = (0, c.aL)(), O = f.intl.string(m.default["Beo/7v"]), {
        firstMessage: _
    } = (0, s.OA)(b), x = null == _ || null == (t = _.messageSnapshots) ? void 0 : t[0], j = null == x || null == (n = x.moderatorReport) ? void 0 : n.reported_user_id;
    return b.isModeratorReportChannel() && null != j ? (0, r.jsx)(o.Ay.Icon, {
        onClick: () => {
            (0, d.iN)(b.id), (0, u.A)(), (0, a.z)(b.guild_id, j, b.id, {
                modViewPanel: g.g.INFO,
                sourceLocation: null != location ? location : A.location
            }), y.dispatch(p.jej.POPOUT_CLOSE)
        },
        tooltip: O,
        icon: i.quN,
        "aria-label": O
    }) : null
}