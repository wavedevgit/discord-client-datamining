/** chunk id: 592182, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => b
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    d = n(397927),
    u = n(707606),
    c = n(573648),
    A = n(235986),
    p = n(338234),
    m = n(159426),
    h = n(25528),
    g = n(655724),
    E = n(82149),
    f = n(734057),
    C = n(287809),
    S = n(977997),
    T = n(90644),
    v = n(61330),
    y = n(153331),
    N = n(33852),
    x = n(834425),
    _ = n(284525),
    I = n(730430),
    j = n(443493),
    P = n(462226),
    U = n(329151),
    L = n(738080),
    R = n(648246),
    O = n(305637),
    D = n(652215),
    M = n(620452);
let b = (0, u.A)(t => {
    let {
        activity: e,
        embeddedActivity: n,
        user: l,
        applicationStream: a,
        className: u,
        guildId: b,
        channelId: H,
        source: G,
        buttonVariant: F,
        type: w,
        onAction: V
    } = t, W = (0, o.bG)([C.default], () => {
        let t = C.default.getCurrentUser();
        return s()(null != t, "UserActivityActions: currentUser cannot be undefined"), t
    }), k = w === y.O.STREAM_PREVIEW || null != a, Y = (0, T.A)(e), B = Y || k ? A.A.Direction.HORIZONTAL : A.A.Direction.VERTICAL, z = e?.type === D.$pd.HANG_STATUS, J = (0, o.bG)([S.A, f.A], () => z ? f.A.getChannel(S.A.getVoiceStateForUser(l.id)?.channelId) : null), $ = (0, o.bG)([f.A], () => null != H ? f.A.getChannel(H) : null, [H]), {
        enableUserHoverActivities: K
    } = (0, p.fC)({
        guildId: b ?? $?.guild_id,
        location: "UserActivityActions"
    }), {
        enableRequestToStream: Z
    } = m.m.useExperiment({
        guildId: b ?? $?.guild_id,
        location: "UserActivityActions"
    }, {
        autoTrackExposure: !1
    }), q = null != $ && K && Z && (0, h.F9)(e), X = B === A.A.Direction.VERTICAL;
    return (0, i.jsx)(A.A, {
        grow: 0,
        align: A.A.Align.STRETCH,
        direction: B,
        wrap: X ? A.A.Wrap.WRAP : A.A.Wrap.NO_WRAP,
        className: r()(u, M.jx, X ? M.Vd : M.xM),
        children: (() => {
            if ((0, v.A)(e)) return (0, i.jsx)(N.A, {
                platform: c.A.get(D.fg2.XBOX),
                variant: F,
                onAction: V,
                icon: d.YWd
            });
            if (e?.platform === D.yTV.PS4 || e?.platform === D.yTV.PS5) return (0, i.jsx)(N.A, {
                variant: F,
                platform: c.A.get(D.fg2.PLAYSTATION),
                onAction: V,
                icon: d.Xj
            });
            if (Y) {
                let t = (0, i.jsx)(L.A, {
                        activity: e,
                        user: l,
                        guildId: b,
                        channelId: H,
                        source: G,
                        onAction: V
                    }),
                    n = (0, i.jsx)(U.A, {
                        activity: e,
                        user: l,
                        source: G,
                        onAction: V
                    });
                return (0, i.jsxs)(d.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, t]
                })
            }
            if ((0, E.Cy)(e)) {
                let t = (0, E.UW)(e);
                return null == t ? null : (0, i.jsx)(j.A, {
                    guildId: t.guildId,
                    channelId: t.channelId,
                    variant: F,
                    onAction: V
                })
            }
            return k ? (0, i.jsx)(O.A, {
                isCurrentUser: W.id === l.id,
                applicationStream: a,
                onAction: V
            }) : z && null != J ? (0, i.jsx)(I.A, {
                userId: l.id,
                variant: F,
                hangStatusChannel: J,
                onAction: V
            }) : (0, i.jsxs)(i.Fragment, {
                children: [q && (0, i.jsx)(g.B, {
                    userId: l.id,
                    channel: $,
                    onAction: V
                }), (0, i.jsx)(R.A, {
                    activity: e,
                    variant: q ? "secondary" : F,
                    onAction: V
                }), (0, i.jsx)(_.A, {
                    activity: e,
                    embeddedActivity: n,
                    user: l,
                    variant: q ? "secondary" : F,
                    onAction: V
                }), (0, i.jsx)(P.A, {
                    activity: e,
                    user: l,
                    variant: q ? "secondary" : F,
                    onAction: V
                }), (0, i.jsx)(x.A, {
                    user: l,
                    activity: e,
                    variant: q ? "secondary" : F,
                    onAction: V
                })]
            })
        })()
    })
})