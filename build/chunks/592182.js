/** chunk id: 592182 params = (module,exports,require) **/
i.d(e, {
    A: () => W
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
    m = i(352306),
    A = i(829203),
    h = i(267102),
    g = i(159426),
    f = i(25528),
    S = i(655724),
    T = i(82149),
    E = i(657331),
    C = i(734057),
    v = i(287809),
    y = i(977997),
    I = i(874546),
    _ = i(90644),
    N = i(61330),
    x = i(153331),
    j = i(33852),
    P = i(834425),
    L = i(284525),
    O = i(730430),
    U = i(443493),
    R = i(462226),
    D = i(329151),
    b = i(738080),
    M = i(648246),
    G = i(305637),
    V = i(652215),
    H = i(346640),
    w = i(985018),
    F = i(758630);
let B = t => {
        let {
            user: e,
            buttonVariant: i,
            activity: l,
            onAction: r
        } = t, s = (0, h.aL)();
        return (0, n.jsx)(P.A, {
            user: e,
            variant: i,
            activity: l,
            onAction: () => {
                m.s.getConfig({
                    location: "rich_presence"
                }).enabled && (s.dispatch(V.jej.POPOUT_CLOSE), (0, E.closeUserProfileModal)(), (0, A.A)({
                    source: "rich_presence"
                }), r?.())
            }
        }, "custom-activity-button")
    },
    W = (0, u.A)(t => {
        let {
            activity: e,
            embeddedActivity: i,
            user: l,
            applicationStream: s,
            className: u,
            guildId: m,
            channelId: A,
            source: h,
            buttonVariant: E,
            type: W,
            onAction: k
        } = t, Y = (0, o.bG)([v.default], () => {
            let t = v.default.getCurrentUser();
            return a()(null != t, "UserActivityActions: currentUser cannot be undefined"), t
        }), $ = W === x.O.STREAM_PREVIEW || null != s, z = (0, _.A)(e), J = z || $ ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL, K = e?.type === V.$pd.HANG_STATUS, Z = (0, o.bG)([y.A, C.A], () => K ? C.A.getChannel(y.A.getVoiceStateForUser(l.id)?.channelId) : null), q = (0, o.bG)([C.A], () => null != A ? C.A.getChannel(A) : null, [A]), {
            enableRequestToStream: X
        } = g.m.useExperiment({
            guildId: m ?? q?.guild_id,
            location: "UserActivityActions"
        }, {
            autoTrackExposure: !1
        }), Q = null != q && X && (0, f.F9)(e);
        if (e?.application_id === H.L8) return e = {
            ...e,
            buttons: [w.intl.string(w.t.E4kW5O)]
        }, (0, n.jsx)(B, {
            user: l,
            buttonVariant: E,
            activity: e,
            onAction: k
        });
        let tt = J === p.A.Direction.VERTICAL;
        return (0, n.jsx)(p.A, {
            grow: 0,
            align: p.A.Align.STRETCH,
            direction: J,
            wrap: tt ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
            className: r()(u, F.jx, tt ? F.Vd : F.xM),
            children: (() => {
                if (!(0, I.A)(e)) {
                    if ((0, N.A)(e)) return (0, n.jsx)(j.A, {
                        platform: c.A.get(V.fg2.XBOX),
                        variant: E,
                        onAction: k,
                        icon: d.YWd
                    });
                    if (e?.platform === V.yTV.PS4 || e?.platform === V.yTV.PS5) return (0, n.jsx)(j.A, {
                        variant: E,
                        platform: c.A.get(V.fg2.PLAYSTATION),
                        onAction: k,
                        icon: d.Xj
                    })
                }
                if (z) {
                    let t = (0, n.jsx)(b.A, {
                            activity: e,
                            user: l,
                            guildId: m,
                            channelId: A,
                            source: h,
                            onAction: k
                        }),
                        i = (0, n.jsx)(D.A, {
                            activity: e,
                            user: l,
                            source: h,
                            onAction: k
                        });
                    return (0, n.jsxs)(d.ButtonGroup, {
                        size: "sm",
                        fullWidth: !0,
                        children: [i, t]
                    })
                }
                if ((0, T.Cy)(e)) {
                    let t = (0, T.UW)(e);
                    return null == t ? null : (0, n.jsx)(U.A, {
                        guildId: t.guildId,
                        channelId: t.channelId,
                        variant: E,
                        onAction: k
                    })
                }
                return $ ? (0, n.jsx)(G.A, {
                    isCurrentUser: Y.id === l.id,
                    applicationStream: s,
                    onAction: k
                }) : K && null != Z ? (0, n.jsx)(O.A, {
                    userId: l.id,
                    variant: E,
                    hangStatusChannel: Z,
                    onAction: k
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [Q && (0, n.jsx)(S.B, {
                        userId: l.id,
                        channel: q,
                        onAction: k
                    }), (0, n.jsx)(M.A, {
                        activity: e,
                        variant: Q ? "secondary" : E,
                        onAction: k
                    }), (0, n.jsx)(L.A, {
                        activity: e,
                        embeddedActivity: i,
                        user: l,
                        variant: Q ? "secondary" : E,
                        onAction: k
                    }), (0, n.jsx)(R.A, {
                        activity: e,
                        user: l,
                        variant: Q ? "secondary" : E,
                        onAction: k
                    }), (0, n.jsx)(P.A, {
                        user: l,
                        activity: e,
                        variant: Q ? "secondary" : E,
                        onAction: k
                    })]
                })
            })()
        })
    })