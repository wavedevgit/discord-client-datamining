/** chunk id: 592182 params = (module,exports,require) **/
i.d(t, {
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
    A = i(235986),
    m = i(338234),
    p = i(159426),
    h = i(25528),
    g = i(655724),
    f = i(82149),
    T = i(734057),
    S = i(287809),
    E = i(977997),
    C = i(90644),
    v = i(61330),
    _ = i(153331),
    x = i(33852),
    y = i(834425),
    I = i(284525),
    N = i(730430),
    j = i(443493),
    D = i(462226),
    P = i(329151),
    O = i(738080),
    U = i(648246),
    L = i(305637),
    b = i(652215),
    M = i(620452);
let R = (0, u.A)(e => {
    let {
        activity: t,
        embeddedActivity: i,
        user: l,
        applicationStream: s,
        className: u,
        guildId: R,
        channelId: G,
        source: V,
        buttonVariant: H,
        type: w,
        onAction: F
    } = e, B = (0, o.bG)([S.default], () => {
        let e = S.default.getCurrentUser();
        return a()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), W = w === _.O.STREAM_PREVIEW || null != s, k = (0, C.A)(t), Y = k || W ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL, $ = t?.type === b.$pd.HANG_STATUS, z = (0, o.bG)([E.A, T.A], () => $ ? T.A.getChannel(E.A.getVoiceStateForUser(l.id)?.channelId) : null), J = (0, o.bG)([T.A], () => null != G ? T.A.getChannel(G) : null, [G]), {
        enableUserHoverActivities: K
    } = (0, m.fC)({
        guildId: R ?? J?.guild_id,
        location: "UserActivityActions"
    }), {
        enableRequestToStream: Z
    } = p.m.useExperiment({
        guildId: R ?? J?.guild_id,
        location: "UserActivityActions"
    }, {
        autoTrackExposure: !1
    }), q = null != J && K && Z && (0, h.F9)(t), X = Y === A.A.Direction.VERTICAL;
    return (0, n.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: Y,
        wrap: X ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, X ? M.Vd : M.xM),
        children: (() => {
            if ((0, v.A)(t)) return (0, n.jsx)(x.A, {
                platform: c.A.get(b.fg2.XBOX),
                variant: H,
                onAction: F,
                icon: d.YWd
            });
            if (t?.platform === b.yTV.PS4 || t?.platform === b.yTV.PS5) return (0, n.jsx)(x.A, {
                variant: H,
                platform: c.A.get(b.fg2.PLAYSTATION),
                onAction: F,
                icon: d.Xj
            });
            if (k) {
                let e = (0, n.jsx)(O.A, {
                        activity: t,
                        user: l,
                        guildId: R,
                        channelId: G,
                        source: V,
                        onAction: F
                    }),
                    i = (0, n.jsx)(P.A, {
                        activity: t,
                        user: l,
                        source: V,
                        onAction: F
                    });
                return (0, n.jsxs)(d.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [i, e]
                })
            }
            if ((0, f.Cy)(t)) {
                let e = (0, f.UW)(t);
                return null == e ? null : (0, n.jsx)(j.A, {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    variant: H,
                    onAction: F
                })
            }
            return W ? (0, n.jsx)(L.A, {
                isCurrentUser: B.id === l.id,
                applicationStream: s,
                onAction: F
            }) : $ && null != z ? (0, n.jsx)(N.A, {
                userId: l.id,
                variant: H,
                hangStatusChannel: z,
                onAction: F
            }) : (0, n.jsxs)(n.Fragment, {
                children: [q && (0, n.jsx)(g.B, {
                    userId: l.id,
                    channel: J,
                    onAction: F
                }), (0, n.jsx)(U.A, {
                    activity: t,
                    variant: q ? "secondary" : H,
                    onAction: F
                }), (0, n.jsx)(I.A, {
                    activity: t,
                    embeddedActivity: i,
                    user: l,
                    variant: q ? "secondary" : H,
                    onAction: F
                }), (0, n.jsx)(D.A, {
                    activity: t,
                    user: l,
                    variant: q ? "secondary" : H,
                    onAction: F
                }), (0, n.jsx)(y.A, {
                    user: l,
                    activity: t,
                    variant: q ? "secondary" : H,
                    onAction: F
                })]
            })
        })()
    })
})