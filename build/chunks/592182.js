/** chunk id: 592182 params = (module,exports,require) **/
i.d(t, {
    A: () => M
});
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    s = i(284009),
    r = i.n(s),
    o = i(311907),
    c = i(397927),
    d = i(707606),
    u = i(573648),
    m = i(235986),
    _ = i(159426),
    p = i(25528),
    h = i(655724),
    A = i(82149),
    g = i(734057),
    f = i(287809),
    v = i(977997),
    S = i(874546),
    I = i(90644),
    T = i(61330),
    C = i(153331),
    E = i(33852),
    y = i(834425),
    x = i(284525),
    N = i(730430),
    b = i(443493),
    L = i(462226),
    P = i(329151),
    j = i(738080),
    D = i(648246),
    U = i(305637),
    O = i(652215),
    R = i(540807);
let M = (0, d.A)(e => {
    let {
        activity: t,
        embeddedActivity: i,
        user: a,
        applicationStream: s,
        className: d,
        guildId: M,
        channelId: w,
        source: V,
        buttonVariant: G,
        type: H,
        onAction: F
    } = e, k = (0, o.bG)([f.default], () => {
        let e = f.default.getCurrentUser();
        return r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), W = H === C.O.STREAM_PREVIEW || null != s, B = (0, I.A)(t), Y = B || W ? m.A.Direction.HORIZONTAL : m.A.Direction.VERTICAL, z = t?.type === O.$pd.HANG_STATUS, $ = (0, o.bG)([v.A, g.A], () => z ? g.A.getChannel(v.A.getVoiceStateForUser(a.id)?.channelId) : null), J = (0, o.bG)([g.A], () => null != w ? g.A.getChannel(w) : null, [w]), {
        enableRequestToStream: K
    } = _.m.useExperiment({
        guildId: M ?? J?.guild_id,
        location: "UserActivityActions"
    }, {
        autoTrackExposure: !1
    }), q = null != J && K && (0, p.F9)(t), X = Y === m.A.Direction.VERTICAL;
    return (0, n.jsx)(m.A, {
        grow: 0,
        align: m.A.Align.STRETCH,
        direction: Y,
        wrap: X ? m.A.Wrap.WRAP : m.A.Wrap.NO_WRAP,
        className: l()(d, R.jx, X ? R.Vd : R.xM),
        children: (() => {
            if (!(0, S.A)(t)) {
                if ((0, T.A)(t)) return (0, n.jsx)(E.A, {
                    platform: u.A.get(O.fg2.XBOX),
                    variant: G,
                    onAction: F,
                    icon: c.YWd
                });
                if (t?.platform === O.yTV.PS4 || t?.platform === O.yTV.PS5) return (0, n.jsx)(E.A, {
                    variant: G,
                    platform: u.A.get(O.fg2.PLAYSTATION),
                    onAction: F,
                    icon: c.Xj
                })
            }
            if (B) {
                let e = (0, n.jsx)(j.A, {
                        activity: t,
                        user: a,
                        guildId: M,
                        channelId: w,
                        source: V,
                        onAction: F
                    }),
                    i = (0, n.jsx)(P.A, {
                        activity: t,
                        user: a,
                        source: V,
                        onAction: F
                    });
                return (0, n.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [i, e]
                })
            }
            if ((0, A.Cy)(t)) {
                let e = (0, A.UW)(t);
                return null == e ? null : (0, n.jsx)(b.A, {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    variant: G,
                    onAction: F
                })
            }
            return W ? (0, n.jsx)(U.A, {
                isCurrentUser: k.id === a.id,
                applicationStream: s,
                onAction: F
            }) : z && null != $ ? (0, n.jsx)(N.A, {
                userId: a.id,
                variant: G,
                hangStatusChannel: $,
                onAction: F
            }) : (0, n.jsxs)(n.Fragment, {
                children: [q && (0, n.jsx)(h.B, {
                    userId: a.id,
                    channel: J,
                    onAction: F
                }), (0, n.jsx)(D.A, {
                    activity: t,
                    variant: q ? "secondary" : G,
                    onAction: F
                }), (0, n.jsx)(x.A, {
                    activity: t,
                    embeddedActivity: i,
                    user: a,
                    variant: q ? "secondary" : G,
                    onAction: F
                }), (0, n.jsx)(L.A, {
                    activity: t,
                    user: a,
                    variant: q ? "secondary" : G,
                    onAction: F
                }), (0, n.jsx)(y.A, {
                    user: a,
                    activity: t,
                    variant: q ? "secondary" : G,
                    onAction: F
                })]
            })
        })()
    })
})