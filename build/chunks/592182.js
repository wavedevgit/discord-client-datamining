/** chunk id: 592182 params = (module,exports,require) **/
i.d(e, {
    A: () => R
});
var n = i(627968);
i(64700);
var l = i(503698),
    r = i.n(l),
    s = i(284009),
    a = i.n(s),
    o = i(311907),
    d = i(397927),
    u = i(707606),
    c = i(573648),
    m = i(235986),
    p = i(338234),
    A = i(159426),
    h = i(25528),
    g = i(655724),
    f = i(82149),
    T = i(734057),
    v = i(287809),
    C = i(977997),
    S = i(90644),
    E = i(61330),
    x = i(153331),
    y = i(33852),
    _ = i(834425),
    N = i(284525),
    I = i(730430),
    j = i(443493),
    D = i(462226),
    P = i(329151),
    U = i(738080),
    b = i(648246),
    L = i(305637),
    O = i(652215),
    M = i(37206);
let R = (0, u.A)(t => {
    let {
        activity: e,
        embeddedActivity: i,
        user: l,
        applicationStream: s,
        className: u,
        guildId: R,
        channelId: V,
        source: w,
        buttonVariant: G,
        type: H,
        onAction: W
    } = t, F = (0, o.bG)([v.default], () => {
        let t = v.default.getCurrentUser();
        return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t
    }), k = H === x.O.STREAM_PREVIEW || null != s, B = (0, S.A)(e), Y = B || k ? m.A.Direction.HORIZONTAL : m.A.Direction.VERTICAL, z = e?.type === O.$pd.HANG_STATUS, $ = (0, o.bG)([C.A, T.A], () => z ? T.A.getChannel(C.A.getVoiceStateForUser(l.id)?.channelId) : null), J = (0, o.bG)([T.A], () => null != V ? T.A.getChannel(V) : null, [V]), {
        enableUserHoverActivities: K
    } = (0, p.fC)({
        guildId: R ?? J?.guild_id,
        location: "UserActivityActions"
    }), {
        enableRequestToStream: Z
    } = A.m.useExperiment({
        guildId: R ?? J?.guild_id,
        location: "UserActivityActions"
    }, {
        autoTrackExposure: !1
    }), X = null != J && K && Z && (0, h.F9)(e), q = Y === m.A.Direction.VERTICAL;
    return (0, n.jsx)(m.A, {
        grow: 0,
        align: m.A.Align.STRETCH,
        direction: Y,
        wrap: q ? m.A.Wrap.WRAP : m.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, q ? M.Vd : M.xM),
        children: (() => {
            if ((0, E.A)(e)) return (0, n.jsx)(y.A, {
                platform: c.A.get(O.fg2.XBOX),
                variant: G,
                onAction: W,
                icon: d.YWd
            });
            if (e?.platform === O.yTV.PS4 || e?.platform === O.yTV.PS5) return (0, n.jsx)(y.A, {
                variant: G,
                platform: c.A.get(O.fg2.PLAYSTATION),
                onAction: W,
                icon: d.Xj
            });
            if (B) {
                let t = (0, n.jsx)(U.A, {
                        activity: e,
                        user: l,
                        guildId: R,
                        channelId: V,
                        source: w,
                        onAction: W
                    }),
                    i = (0, n.jsx)(P.A, {
                        activity: e,
                        user: l,
                        source: w,
                        onAction: W
                    });
                return (0, n.jsxs)(d.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [i, t]
                })
            }
            if ((0, f.Cy)(e)) {
                let t = (0, f.UW)(e);
                return null == t ? null : (0, n.jsx)(j.A, {
                    guildId: t.guildId,
                    channelId: t.channelId,
                    variant: G,
                    onAction: W
                })
            }
            return k ? (0, n.jsx)(L.A, {
                isCurrentUser: F.id === l.id,
                applicationStream: s,
                onAction: W
            }) : z && null != $ ? (0, n.jsx)(I.A, {
                userId: l.id,
                variant: G,
                hangStatusChannel: $,
                onAction: W
            }) : (0, n.jsxs)(n.Fragment, {
                children: [X && (0, n.jsx)(g.B, {
                    userId: l.id,
                    channel: J,
                    onAction: W
                }), (0, n.jsx)(b.A, {
                    activity: e,
                    variant: X ? "secondary" : G,
                    onAction: W
                }), (0, n.jsx)(N.A, {
                    activity: e,
                    embeddedActivity: i,
                    user: l,
                    variant: X ? "secondary" : G,
                    onAction: W
                }), (0, n.jsx)(D.A, {
                    activity: e,
                    user: l,
                    variant: X ? "secondary" : G,
                    onAction: W
                }), (0, n.jsx)(_.A, {
                    user: l,
                    activity: e,
                    variant: X ? "secondary" : G,
                    onAction: W
                })]
            })
        })()
    })
})