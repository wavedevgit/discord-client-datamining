/** chunk id: 925159, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    r = n(397927),
    l = n(684013),
    a = n(966327),
    o = n(587895),
    s = n(15285),
    u = n(769015),
    c = n(734057),
    d = n(309010),
    h = n(287809),
    p = n(562153),
    f = n(41984),
    g = n(589051),
    m = n(592598),
    A = n(395011),
    y = n(222506),
    O = n(145567),
    v = n(581730),
    b = n(672396),
    E = n(652215),
    _ = n(985018),
    S = n(976723);

function x(e, t, n) {
    var x;
    if (m.A.isNotificationDisabled(b.KS.NowPlayingNotification)) return null;
    let I = h.default.getUser(e);
    if (null == I) return null;
    let j = d.A.getCurrentlySelectedChannelId(),
        C = c.A.getChannel(j),
        T = o.A.getApplication(t),
        w = s.Ay.getRunningGames().find(e => e.id === t),
        N = null != (x = null == w ? void 0 : w.name) ? x : null == T ? void 0 : T.name,
        P = (0, p.mG)(null == C ? void 0 : C.guild_id, null == C ? void 0 : C.id, I),
        D = (0, i.jsxs)("div", {
            className: S.Ql,
            children: [(0, i.jsx)("div", {
                className: S.bf,
                children: (0, i.jsx)(a.A, {
                    user: I,
                    "aria-hidden": !0,
                    size: r._3J.SIZE_24
                })
            }), (0, i.jsx)("div", {
                className: S.rf,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-text-default",
                    className: S.G3,
                    children: _.intl.format(_.t["q7/rgv"], {
                        username: null != P ? P : I.username,
                        gameName: N,
                        gameIcon: () => null != T || null != w ? (0, i.jsx)(u.A, {
                            game: T,
                            pid: null == w ? void 0 : w.pid,
                            size: u.M.XSMALL,
                            className: S.Gt
                        }) : null
                    })
                })
            })]
        }),
        {
            trackView: R,
            trackClick: L
        } = (0, v.Y9)(b.KS.NowPlayingNotification, {
            notif_type: b.KS.NowPlayingNotification,
            notif_user_id: I.id,
            activity_type: n.type,
            activity_name: null != N ? N : n.name
        }),
        {
            hasChat: k
        } = (0, g.NI)("nowPlayingNotification");
    return {
        body: D,
        className: S.dn,
        wrapperClassName: S.P6,
        animationWrapperClassName: S.VG,
        maxBodyLines: 1,
        disableClickableRegions: !k,
        onNotificationShow: () => {
            R()
        },
        onNotificationClick: (e, t) => {
            k && (async () => {
                try {
                    let e = await (0, O.D$)({
                        target: {
                            kind: O.bB.DM_USER,
                            userId: I.id,
                            messageId: null
                        },
                        source: f.B9.NOTIFICATION_CLICK,
                        widgetType: E.uss.NOTIFICATIONS
                    });
                    if (null == e) return;
                    let n = A.A.getTargetPID();
                    y.A.isInputLocked(n) ? (L("unlock"), l.A.setInputLocked(!1, n)) : L("jump"), l.A.updateNotificationStatus(t, E.yFH.DISMISSED)
                } catch (e) {}
            })()
        },
        onDismissClick: () => {
            L("dismiss")
        }
    }
}