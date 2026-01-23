/** Chunk was on 91042 **/
/** chunk id: 121127, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(397927),
    o = n(73153),
    d = n(706752),
    s = n(985925),
    u = n(267102),
    c = n(474397),
    A = n(378570),
    b = n(761640),
    g = n(734057),
    f = n(696451),
    m = n(309010),
    O = n(954571),
    p = n(652215),
    y = n(746080),
    E = n(486974),
    v = n(985018);

function h(e) {
    let {
        userId: t,
        guildId: n,
        channelId: h,
        location: j,
        onAction: x,
        appContext: S
    } = e, M = i.useContext(O.AnalyticsContext), C = (0, u.aL)(), D = (0, r.bG)([m.A], () => null != h ? h : m.A.getChannelId(n, !0), [h, n]), P = (0, r.bG)([f.Ay], () => null == n ? null : f.Ay.getMember(n, t), [n, t]), I = (0, s.q)(n);
    return null != n && null != P && I ? (0, l.jsx)(a.Drp, {
        id: "mod-view",
        label: v.intl.string(v.t.kj3tz2),
        action: () => {
            null == x || x(), (0, c.A)(S), C.dispatch(p.jej.POPOUT_CLOSE);
            let e = g.A.getChannel(D),
                l = {
                    modViewPanel: E.g.INFO,
                    sourceLocation: null != j ? j : M.location
                };
            if ((null == e ? void 0 : e.isThread()) && null != e.parent_id) {
                b.Ay.getCurrentSidebarChannelId(e.parent_id) === e.id && (o.h.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e.parent_id
                }), (0, A.iN)(e.id)), (0, d.z)(n, t, e.parent_id, l);
                return
            }(0, d.z)(n, t, null != D ? D : y.VV.MEMBER_SAFETY, l)
        }
    }) : null
}