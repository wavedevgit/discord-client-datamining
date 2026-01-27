/** Chunk was on 91042 **/
/** chunk id: 121127, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(73153),
    s = n(706752),
    d = n(985925),
    u = n(267102),
    c = n(474397),
    A = n(378570),
    b = n(761640),
    g = n(734057),
    f = n(696451),
    m = n(309010),
    p = n(954571),
    O = n(652215),
    y = n(746080),
    v = n(486974),
    E = n(985018);

function h(e) {
    let {
        userId: t,
        guildId: n,
        channelId: h,
        location: j,
        onAction: x,
        appContext: S
    } = e, M = r.useContext(p.AnalyticsContext), D = (0, u.aL)(), C = (0, i.bG)([m.A], () => null != h ? h : m.A.getChannelId(n, !0), [h, n]), I = (0, i.bG)([f.Ay], () => null == n ? null : f.Ay.getMember(n, t), [n, t]), P = (0, d.q)(n);
    return null != n && null != I && P ? (0, l.jsx)(a.Drp, {
        id: "mod-view",
        label: E.intl.string(E.t.kj3tz2),
        action: () => {
            null == x || x(), (0, c.A)(S), D.dispatch(O.jej.POPOUT_CLOSE);
            let e = g.A.getChannel(C),
                l = {
                    modViewPanel: v.g.INFO,
                    sourceLocation: null != j ? j : M.location
                };
            if ((null == e ? void 0 : e.isThread()) && null != e.parent_id) {
                b.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id && (o.h.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e.parent_id
                }), (0, A.iN)(e.id)), (0, s.z)(n, t, e.parent_id, l);
                return
            }(0, s.z)(n, t, null != C ? C : y.VV.MEMBER_SAFETY, l)
        }
    }) : null
}