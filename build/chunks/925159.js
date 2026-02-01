/** chunk id: 925159, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    r = n(397927),
    l = n(966327),
    a = n(587895),
    s = n(15285),
    o = n(769015),
    u = n(734057),
    c = n(309010),
    d = n(287809),
    h = n(562153),
    p = n(592598),
    f = n(581730),
    g = n(672396),
    m = n(985018),
    y = n(976723);

function A(e, t, n) {
    var A;
    if (p.A.isNotificationDisabled(g.KS.NowPlayingNotification)) return null;
    let v = d.default.getUser(e);
    if (null == v) return null;
    let b = c.A.getCurrentlySelectedChannelId(),
        E = u.A.getChannel(b),
        O = a.A.getApplication(t),
        x = s.Ay.getRunningGames().find(e => e.id === t),
        _ = null != (A = null == x ? void 0 : x.name) ? A : null == O ? void 0 : O.name,
        S = (0, h.mG)(null == E ? void 0 : E.guild_id, null == E ? void 0 : E.id, v),
        I = (0, i.jsxs)("div", {
            className: y.Ql,
            children: [(0, i.jsx)("div", {
                className: y.bf,
                children: (0, i.jsx)(l.A, {
                    user: v,
                    "aria-hidden": !0,
                    size: r._3J.SIZE_24
                })
            }), (0, i.jsx)("div", {
                className: y.rf,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: y.G3,
                    children: m.intl.format(m.t["q7/rgv"], {
                        username: null != S ? S : v.username,
                        gameName: _,
                        gameIcon: () => null != O || null != x ? (0, i.jsx)(o.A, {
                            game: O,
                            pid: null == x ? void 0 : x.pid,
                            size: o.M.XSMALL,
                            className: y.Gt
                        }) : null
                    })
                })
            })]
        }),
        {
            trackView: j,
            trackClick: T
        } = (0, f.Y9)(g.KS.NowPlayingNotification, {
            notif_type: g.KS.NowPlayingNotification,
            notif_user_id: v.id,
            activity_type: n.type,
            activity_name: null != _ ? _ : n.name
        });
    return {
        body: I,
        className: y.dn,
        wrapperClassName: y.P6,
        animationWrapperClassName: y.VG,
        maxBodyLines: 1,
        disableClickableRegions: !0,
        onNotificationShow: () => {
            j()
        },
        onDismissClick: () => {
            T("dismiss")
        }
    }
}