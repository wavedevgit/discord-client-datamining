/** chunk id: 121127 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(73153),
    o = n(706752),
    s = n(985925),
    u = n(267102),
    c = n(474397),
    A = n(378570),
    g = n(761640),
    m = n(734057),
    b = n(696451),
    f = n(309010),
    E = n(954571),
    x = n(652215),
    h = n(746080),
    C = n(486974),
    M = n(985018);

function p(e) {
    let {
        userId: t,
        guildId: n,
        channelId: p,
        location: j,
        onAction: v,
        appContext: I
    } = e, y = i.useContext(E.AnalyticsContext), S = (0, u.aL)(), D = (0, a.bG)([f.A], () => p ?? f.A.getChannelId(n, !0), [p, n]), O = (0, a.bG)([b.Ay], () => null == n ? null : b.Ay.getMember(n, t), [n, t]), T = (0, s.q)(n);
    return null != n && null != O && T ? (0, l.jsx)(r.Drp, {
        id: "mod-view",
        label: M.intl.string(M.t.kj3tz2),
        action: () => {
            v?.(), (0, c.A)(I), S.dispatch(x.jej.POPOUT_CLOSE);
            let e = m.A.getChannel(D),
                l = {
                    modViewPanel: C.g.INFO,
                    sourceLocation: j ?? y.location
                };
            if (e?.isThread() && null != e.parent_id) {
                g.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id && (d.h.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e.parent_id
                }), (0, A.iN)(e.id)), (0, o.z)(n, t, e.parent_id, l);
                return
            }(0, o.z)(n, t, D ?? h.VV.MEMBER_SAFETY, l)
        }
    }) : null
}