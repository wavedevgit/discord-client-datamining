/** chunk id: 592182, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    c = n(397927),
    u = n(707606),
    d = n(573648),
    p = n(235986),
    f = n(82149),
    m = n(734057),
    g = n(287809),
    y = n(977997),
    b = n(90644),
    _ = n(61330),
    h = n(153331),
    A = n(33852),
    v = n(834425),
    O = n(284525),
    S = n(730430),
    j = n(443493),
    x = n(462226),
    I = n(329151),
    E = n(738080),
    C = n(648246),
    P = n(305637),
    N = n(652215),
    T = n(620452);
let w = (0, u.A)(e => {
    let {
        activity: t,
        embeddedActivity: n,
        user: l,
        applicationStream: a,
        className: u,
        guildId: w,
        channelId: L,
        source: D,
        buttonVariant: R,
        type: k,
        onAction: M
    } = e, U = (0, o.bG)([g.default], () => {
        let e = g.default.getCurrentUser();
        return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), G = k === h.O.STREAM_PREVIEW || null != a, V = (0, b.A)(t), F = V || G ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL, W = (null == t ? void 0 : t.type) === N.$pd.HANG_STATUS, H = (0, o.bG)([y.A, m.A], () => {
        var e;
        return W ? m.A.getChannel(null == (e = y.A.getVoiceStateForUser(l.id)) ? void 0 : e.channelId) : null
    }), z = F === p.A.Direction.VERTICAL;
    return (0, r.jsx)(p.A, {
        grow: 0,
        align: p.A.Align.STRETCH,
        direction: F,
        wrap: z ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
        className: i()(u, T.jx, z ? T.Vd : T.xM),
        children: (() => {
            if ((0, _.A)(t)) return (0, r.jsx)(A.A, {
                platform: d.A.get(N.fg2.XBOX),
                variant: R,
                onAction: M,
                icon: c.YWd
            });
            if ((null == t ? void 0 : t.platform) === N.yTV.PS4 || (null == t ? void 0 : t.platform) === N.yTV.PS5) return (0, r.jsx)(A.A, {
                variant: R,
                platform: d.A.get(N.fg2.PLAYSTATION),
                onAction: M,
                icon: c.Xj
            });
            if (V) {
                let e = (0, r.jsx)(E.A, {
                        activity: t,
                        user: l,
                        guildId: w,
                        channelId: L,
                        source: D,
                        onAction: M
                    }),
                    n = (0, r.jsx)(I.A, {
                        activity: t,
                        user: l,
                        source: D,
                        onAction: M
                    });
                return (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, e]
                })
            }
            if ((0, f.Cy)(t)) {
                let e = (0, f.UW)(t);
                return null == e ? null : (0, r.jsx)(j.A, {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    variant: R,
                    onAction: M
                })
            }
            return G ? (0, r.jsx)(P.A, {
                isCurrentUser: U.id === l.id,
                applicationStream: a,
                onAction: M
            }) : W && null != H ? (0, r.jsx)(S.A, {
                userId: l.id,
                variant: R,
                hangStatusChannel: H,
                onAction: M
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(C.A, {
                    activity: t,
                    variant: R,
                    onAction: M
                }), (0, r.jsx)(O.A, {
                    activity: t,
                    embeddedActivity: n,
                    user: l,
                    variant: R,
                    onAction: M
                }), (0, r.jsx)(x.A, {
                    activity: t,
                    user: l,
                    variant: R,
                    onAction: M
                }), (0, r.jsx)(v.A, {
                    user: l,
                    activity: t,
                    variant: R,
                    onAction: M
                })]
            })
        })()
    })
})