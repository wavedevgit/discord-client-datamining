/** Chunk was on web.js **/
/** chunk id: 613457, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(688810),
    o = n(706752),
    l = n(985925),
    c = n(997509),
    u = n(267102),
    d = n(474397),
    f = n(378570),
    p = n(961350),
    _ = n(309010),
    h = n(993401),
    m = n(652215),
    g = n(746080),
    E = n(486974),
    y = n(985018);

function b(e) {
    let {
        user: t,
        guildId: n,
        channelId: b,
        onClose: O,
        appContext: v
    } = e, {
        newestAnalyticsLocation: A
    } = (0, s.Ay)(), I = (0, u.aL)(), S = (0, i.bG)([p.default], () => p.default.getId() === (null == t ? void 0 : t.id)), T = (0, l.q)(null != n ? n : null), C = (0, i.bG)([_.A], () => null != b ? b : _.A.getChannelId(n, !0), [b, n]);
    return null == n || !T || S ? null : (0, r.jsx)(h.br, {
        action: "PRESS_MOD_VIEW",
        icon: a.quN,
        tooltipText: y.intl.string(y.t.kj3tz2),
        onClick: () => {
            c.A.close(), null != C && (0, f.iN)(C), (0, d.A)(v), I.dispatch(m.jej.POPOUT_CLOSE), (0, o.z)(n, t.id, null != C ? C : g.VV.MEMBER_SAFETY, {
                modViewPanel: E.g.INFO,
                sourceLocation: A
            }), null == O || O()
        }
    })
}