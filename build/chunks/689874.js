/** Chunk was on 1113 **/
/** chunk id: 689874, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(311907),
    i = n(827734),
    s = n(990078),
    a = n(397927),
    o = n(313961),
    c = n(15285),
    u = n(616356),
    d = n(274372),
    h = n(572164),
    p = n(806931),
    g = n(985018),
    f = n(639291);
let m = e => {
    let {
        channelId: t
    } = e;
    return (0, l.bG)([u.A, o.A, d.A, c.Ay], () => {
        var e;
        if (null == t) return !1;
        let n = u.A.getCurrentUserActiveStream(),
            r = null == (e = c.Ay.getVisibleGame()) ? void 0 : e.windowHandle;
        return !!(null != n && (0, h.TD)() || null != r && (0, h.Ao)()) || o.A.getParticipants(t).some(e => e.type === p.lp.USER && d.A.isClipsEnabledForUser(e.user.id))
    }) ? (0, r.jsx)(s.m, {
        text: g.intl.string(g.t.DJXW3G),
        children: (0, r.jsxs)("div", {
            className: f.g0,
            children: [(0, r.jsx)(a.fkz, {
                icon: a.xgA,
                shape: a.EGs.ROUND_LEFT,
                color: i.A.unsafe_rawColors.PRIMARY_500.css,
                className: f.Z7
            }), (0, r.jsx)(a.LpS, {
                text: g.intl.string(g.t.pCMkDb),
                shape: a.EGs.ROUND_RIGHT,
                color: i.A.unsafe_rawColors.PRIMARY_500.css,
                className: f.lm
            })]
        })
    }) : null
}