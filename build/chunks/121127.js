/** chunk id: 121127 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(73153),
    s = n(706752),
    o = n(985925),
    u = n(267102),
    c = n(474397),
    A = n(378570),
    g = n(761640),
    b = n(734057),
    m = n(696451),
    E = n(309010),
    f = n(954571),
    h = n(652215),
    x = n(746080),
    M = n(486974),
    C = n(985018);

function p(e) {
    let {
        userId: t,
        guildId: n,
        channelId: p,
        location: I,
        onAction: j,
        appContext: v
    } = e, D = i.useContext(f.AnalyticsContext), S = (0, u.aL)(), y = (0, a.bG)([E.A], () => p ?? E.A.getChannelId(n, !0), [p, n]), T = (0, a.bG)([m.Ay], () => null == n ? null : m.Ay.getMember(n, t), [n, t]), O = (0, o.q)(n);
    return null != n && null != T && O ? (0, l.jsx)(r.Drp, {
        id: "mod-view",
        label: C.intl.string(C.t.kj3tz2),
        action: () => {
            j?.(), (0, c.A)(v), S.dispatch(h.jej.POPOUT_CLOSE);
            let e = b.A.getChannel(y),
                l = {
                    modViewPanel: M.g.INFO,
                    sourceLocation: I ?? D.location
                };
            if (e?.isThread() && null != e.parent_id) {
                g.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id && (d.h.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e.parent_id
                }), (0, A.iN)(e.id)), (0, s.z)(n, t, e.parent_id, l);
                return
            }(0, s.z)(n, t, y ?? x.VV.MEMBER_SAFETY, l)
        }
    }) : null
}