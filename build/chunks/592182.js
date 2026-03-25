/** chunk id: 592182 params = (module,exports,require) **/
i.d(e, {
    A: () => M
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
    p = i(235986),
    m = i(159426),
    h = i(25528),
    A = i(655724),
    g = i(82149),
    T = i(734057),
    f = i(287809),
    S = i(977997),
    E = i(90644),
    C = i(61330),
    v = i(153331),
    x = i(33852),
    y = i(834425),
    _ = i(284525),
    N = i(730430),
    I = i(443493),
    j = i(462226),
    D = i(329151),
    O = i(738080),
    P = i(648246),
    L = i(305637),
    U = i(652215),
    R = i(620452);
let M = (0, u.A)(t => {
    let {
        activity: e,
        embeddedActivity: i,
        user: l,
        applicationStream: s,
        className: u,
        guildId: M,
        channelId: b,
        source: G,
        buttonVariant: V,
        type: H,
        onAction: w
    } = t, F = (0, o.bG)([f.default], () => {
        let t = f.default.getCurrentUser();
        return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t
    }), B = H === v.O.STREAM_PREVIEW || null != s, W = (0, E.A)(e), k = W || B ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL, Y = e?.type === U.$pd.HANG_STATUS, $ = (0, o.bG)([S.A, T.A], () => Y ? T.A.getChannel(S.A.getVoiceStateForUser(l.id)?.channelId) : null), z = (0, o.bG)([T.A], () => null != b ? T.A.getChannel(b) : null, [b]), {
        enableRequestToStream: J
    } = m.m.useExperiment({
        guildId: M ?? z?.guild_id,
        location: "UserActivityActions"
    }, {
        autoTrackExposure: !1
    }), K = null != z && J && (0, h.F9)(e), Z = k === p.A.Direction.VERTICAL;
    return (0, n.jsx)(p.A, {
        grow: 0,
        align: p.A.Align.STRETCH,
        direction: k,
        wrap: Z ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
        className: r()(u, R.jx, Z ? R.Vd : R.xM),
        children: (() => {
            if ((0, C.A)(e)) return (0, n.jsx)(x.A, {
                platform: c.A.get(U.fg2.XBOX),
                variant: V,
                onAction: w,
                icon: d.YWd
            });
            if (e?.platform === U.yTV.PS4 || e?.platform === U.yTV.PS5) return (0, n.jsx)(x.A, {
                variant: V,
                platform: c.A.get(U.fg2.PLAYSTATION),
                onAction: w,
                icon: d.Xj
            });
            if (W) {
                let t = (0, n.jsx)(O.A, {
                        activity: e,
                        user: l,
                        guildId: M,
                        channelId: b,
                        source: G,
                        onAction: w
                    }),
                    i = (0, n.jsx)(D.A, {
                        activity: e,
                        user: l,
                        source: G,
                        onAction: w
                    });
                return (0, n.jsxs)(d.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [i, t]
                })
            }
            if ((0, g.Cy)(e)) {
                let t = (0, g.UW)(e);
                return null == t ? null : (0, n.jsx)(I.A, {
                    guildId: t.guildId,
                    channelId: t.channelId,
                    variant: V,
                    onAction: w
                })
            }
            return B ? (0, n.jsx)(L.A, {
                isCurrentUser: F.id === l.id,
                applicationStream: s,
                onAction: w
            }) : Y && null != $ ? (0, n.jsx)(N.A, {
                userId: l.id,
                variant: V,
                hangStatusChannel: $,
                onAction: w
            }) : (0, n.jsxs)(n.Fragment, {
                children: [K && (0, n.jsx)(A.B, {
                    userId: l.id,
                    channel: z,
                    onAction: w
                }), (0, n.jsx)(P.A, {
                    activity: e,
                    variant: K ? "secondary" : V,
                    onAction: w
                }), (0, n.jsx)(_.A, {
                    activity: e,
                    embeddedActivity: i,
                    user: l,
                    variant: K ? "secondary" : V,
                    onAction: w
                }), (0, n.jsx)(j.A, {
                    activity: e,
                    user: l,
                    variant: K ? "secondary" : V,
                    onAction: w
                }), (0, n.jsx)(y.A, {
                    user: l,
                    activity: e,
                    variant: K ? "secondary" : V,
                    onAction: w
                })]
            })
        })()
    })
})