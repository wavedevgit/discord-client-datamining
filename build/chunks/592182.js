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
    A = i(235986),
    m = i(159426),
    h = i(25528),
    p = i(655724),
    g = i(82149),
    f = i(734057),
    T = i(287809),
    S = i(977997),
    E = i(90644),
    C = i(61330),
    v = i(153331),
    _ = i(33852),
    I = i(834425),
    y = i(284525),
    x = i(730430),
    N = i(443493),
    j = i(462226),
    D = i(329151),
    O = i(738080),
    P = i(648246),
    U = i(305637),
    L = i(652215),
    R = i(540807);
let M = (0, u.A)(t => {
    let {
        activity: e,
        embeddedActivity: i,
        user: l,
        applicationStream: s,
        className: u,
        guildId: M,
        channelId: b,
        source: V,
        buttonVariant: G,
        type: H,
        onAction: w
    } = t, F = (0, o.bG)([T.default], () => {
        let t = T.default.getCurrentUser();
        return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t
    }), B = H === v.O.STREAM_PREVIEW || null != s, W = (0, E.A)(e), k = W || B ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL, Y = e?.type === L.$pd.HANG_STATUS, z = (0, o.bG)([S.A, f.A], () => Y ? f.A.getChannel(S.A.getVoiceStateForUser(l.id)?.channelId) : null), $ = (0, o.bG)([f.A], () => null != b ? f.A.getChannel(b) : null, [b]), {
        enableRequestToStream: J
    } = m.m.useExperiment({
        guildId: M ?? $?.guild_id,
        location: "UserActivityActions"
    }, {
        autoTrackExposure: !1
    }), K = null != $ && J && (0, h.F9)(e), Z = k === A.A.Direction.VERTICAL;
    return (0, n.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: k,
        wrap: Z ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, R.jx, Z ? R.Vd : R.xM),
        children: (() => {
            if ((0, C.A)(e)) return (0, n.jsx)(_.A, {
                platform: c.A.get(L.fg2.XBOX),
                variant: G,
                onAction: w,
                icon: d.YWd
            });
            if (e?.platform === L.yTV.PS4 || e?.platform === L.yTV.PS5) return (0, n.jsx)(_.A, {
                variant: G,
                platform: c.A.get(L.fg2.PLAYSTATION),
                onAction: w,
                icon: d.Xj
            });
            if (W) {
                let t = (0, n.jsx)(O.A, {
                        activity: e,
                        user: l,
                        guildId: M,
                        channelId: b,
                        source: V,
                        onAction: w
                    }),
                    i = (0, n.jsx)(D.A, {
                        activity: e,
                        user: l,
                        source: V,
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
                return null == t ? null : (0, n.jsx)(N.A, {
                    guildId: t.guildId,
                    channelId: t.channelId,
                    variant: G,
                    onAction: w
                })
            }
            return B ? (0, n.jsx)(U.A, {
                isCurrentUser: F.id === l.id,
                applicationStream: s,
                onAction: w
            }) : Y && null != z ? (0, n.jsx)(x.A, {
                userId: l.id,
                variant: G,
                hangStatusChannel: z,
                onAction: w
            }) : (0, n.jsxs)(n.Fragment, {
                children: [K && (0, n.jsx)(p.B, {
                    userId: l.id,
                    channel: $,
                    onAction: w
                }), (0, n.jsx)(P.A, {
                    activity: e,
                    variant: K ? "secondary" : G,
                    onAction: w
                }), (0, n.jsx)(y.A, {
                    activity: e,
                    embeddedActivity: i,
                    user: l,
                    variant: K ? "secondary" : G,
                    onAction: w
                }), (0, n.jsx)(j.A, {
                    activity: e,
                    user: l,
                    variant: K ? "secondary" : G,
                    onAction: w
                }), (0, n.jsx)(I.A, {
                    user: l,
                    activity: e,
                    variant: K ? "secondary" : G,
                    onAction: w
                })]
            })
        })()
    })
})