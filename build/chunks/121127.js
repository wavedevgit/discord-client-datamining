/** chunk id: 121127, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
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
    E = n(309010),
    f = n(954571),
    h = n(652215),
    x = n(746080),
    M = n(486974),
    p = n(985018);

function C(e) {
    let {
        userId: t,
        guildId: n,
        channelId: C,
        location: y,
        onAction: S,
        appContext: I
    } = e, j = i.useContext(f.AnalyticsContext), v = (0, u.aL)(), D = (0, a.bG)([E.A], () => C ?? E.A.getChannelId(n, !0), [C, n]), O = (0, a.bG)([b.Ay], () => null == n ? null : b.Ay.getMember(n, t), [n, t]), T = (0, s.q)(n);
    return null != n && null != O && T ? (0, l.jsx)(r.Drp, {
        id: "mod-view",
        label: p.intl.string(p.t.kj3tz2),
        action: () => {
            S?.(), (0, c.A)(I), v.dispatch(h.jej.POPOUT_CLOSE);
            let e = m.A.getChannel(D),
                l = {
                    modViewPanel: M.g.INFO,
                    sourceLocation: y ?? j.location
                };
            if (e?.isThread() && null != e.parent_id) {
                g.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id && (d.h.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e.parent_id
                }), (0, A.iN)(e.id)), (0, o.z)(n, t, e.parent_id, l);
                return
            }(0, o.z)(n, t, D ?? x.VV.MEMBER_SAFETY, l)
        }
    }) : null
}