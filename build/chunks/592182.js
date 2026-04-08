/** chunk id: 592182 params = (module,exports,require) **/
n.d(e, {
    A: () => k
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    u = n(397927),
    d = n(707606),
    c = n(573648),
    h = n(235986),
    A = n(352306),
    m = n(829203),
    p = n(267102),
    g = n(159426),
    f = n(25528),
    E = n(655724),
    T = n(82149),
    C = n(657331),
    S = n(734057),
    _ = n(287809),
    v = n(977997),
    y = n(874546),
    I = n(90644),
    N = n(61330),
    x = n(709309),
    j = n(153331),
    P = n(33852),
    L = n(834425),
    O = n(284525),
    R = n(730430),
    D = n(443493),
    U = n(462226),
    M = n(913948),
    b = n(329151),
    G = n(738080),
    V = n(648246),
    H = n(305637),
    F = n(652215),
    w = n(346640),
    B = n(985018),
    W = n(758630);
let Y = t => {
        let {
            user: e,
            buttonVariant: n,
            activity: l,
            onAction: r
        } = t, s = (0, p.aL)();
        return (0, i.jsx)(L.A, {
            user: e,
            variant: n,
            activity: l,
            onAction: () => {
                A.s.getConfig({
                    location: "rich_presence"
                }).enabled && (s.dispatch(F.jej.POPOUT_CLOSE), (0, C.closeUserProfileModal)(), (0, m.A)({
                    source: "rich_presence"
                }), r?.())
            }
        }, "custom-activity-button")
    },
    k = (0, d.A)(t => {
        let {
            activity: e,
            embeddedActivity: n,
            user: l,
            applicationStream: s,
            className: d,
            guildId: A,
            channelId: m,
            source: p,
            buttonVariant: C,
            type: k,
            onAction: z
        } = t, J = (0, o.bG)([_.default], () => {
            let t = _.default.getCurrentUser();
            return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t
        }), K = k === j.O.STREAM_PREVIEW || null != s, $ = (0, I.A)(e), Z = $ || K ? h.A.Direction.HORIZONTAL : h.A.Direction.VERTICAL, X = e?.type === F.$pd.HANG_STATUS, q = (0, o.bG)([v.A, S.A], () => X ? S.A.getChannel(v.A.getVoiceStateForUser(l.id)?.channelId) : null), Q = (0, o.bG)([S.A], () => null != m ? S.A.getChannel(m) : null, [m]), {
            enableRequestToStream: tt
        } = g.m.useExperiment({
            guildId: A ?? Q?.guild_id,
            location: "UserActivityActions"
        }, {
            autoTrackExposure: !1
        }), te = null != Q && tt && (0, f.F9)(e), tn = (0, x.A)("voice_channel_activity_actions", e?.application_id);
        if (e?.application_id === w.L8) return e = {
            ...e,
            buttons: [B.intl.string(B.t.E4kW5O)]
        }, (0, i.jsx)(Y, {
            user: l,
            buttonVariant: C,
            activity: e,
            onAction: z
        });
        let ti = Z === h.A.Direction.VERTICAL;
        return (0, i.jsx)(h.A, {
            grow: 0,
            align: h.A.Align.STRETCH,
            direction: Z,
            wrap: ti ? h.A.Wrap.WRAP : h.A.Wrap.NO_WRAP,
            className: r()(d, W.jx, ti ? W.Vd : W.xM),
            children: (() => {
                if (!(0, y.A)(e)) {
                    if ((0, N.A)(e)) return (0, i.jsx)(P.A, {
                        platform: c.A.get(F.fg2.XBOX),
                        variant: C,
                        onAction: z,
                        icon: u.YWd
                    });
                    if (e?.platform === F.yTV.PS4 || e?.platform === F.yTV.PS5) return (0, i.jsx)(P.A, {
                        variant: C,
                        platform: c.A.get(F.fg2.PLAYSTATION),
                        onAction: z,
                        icon: u.Xj
                    })
                }
                if (tn.length > 0) return (0, i.jsx)(M.A, {
                    distributorCTAConfigs: tn,
                    buttonVariant: "overlay-primary"
                });
                if ($) {
                    let t = (0, i.jsx)(G.A, {
                            activity: e,
                            user: l,
                            guildId: A,
                            channelId: m,
                            source: p,
                            onAction: z
                        }),
                        n = (0, i.jsx)(b.A, {
                            activity: e,
                            user: l,
                            source: p,
                            onAction: z
                        });
                    return (0, i.jsxs)(u.ButtonGroup, {
                        size: "sm",
                        fullWidth: !0,
                        children: [n, t]
                    })
                }
                if ((0, T.Cy)(e)) {
                    let t = (0, T.UW)(e);
                    return null == t ? null : (0, i.jsx)(D.A, {
                        guildId: t.guildId,
                        channelId: t.channelId,
                        variant: C,
                        onAction: z
                    })
                }
                return K ? (0, i.jsx)(H.A, {
                    isCurrentUser: J.id === l.id,
                    applicationStream: s,
                    onAction: z
                }) : X && null != q ? (0, i.jsx)(R.A, {
                    userId: l.id,
                    variant: C,
                    hangStatusChannel: q,
                    onAction: z
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [te && (0, i.jsx)(E.B, {
                        userId: l.id,
                        channel: Q,
                        onAction: z
                    }), (0, i.jsx)(V.A, {
                        activity: e,
                        variant: te ? "secondary" : C,
                        onAction: z
                    }), (0, i.jsx)(O.A, {
                        activity: e,
                        embeddedActivity: n,
                        user: l,
                        variant: te ? "secondary" : C,
                        onAction: z
                    }), (0, i.jsx)(U.A, {
                        activity: e,
                        user: l,
                        variant: te ? "secondary" : C,
                        onAction: z
                    }), (0, i.jsx)(L.A, {
                        user: l,
                        activity: e,
                        variant: te ? "secondary" : C,
                        onAction: z
                    })]
                })
            })()
        })
    })