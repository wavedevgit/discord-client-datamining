/** Chunk was on 78572 **/
/** chunk id: 592182, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
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
    T = n(738080),
    P = n(648246),
    E = n(305637),
    w = n(652215),
    N = n(620452);
let C = (0, u.A)(e => {
    let {
        activity: t,
        embeddedActivity: n,
        user: i,
        applicationStream: a,
        className: u,
        guildId: C,
        channelId: D,
        source: L,
        buttonVariant: k,
        type: R,
        onAction: M
    } = e, V = (0, o.bG)([g.default], () => {
        let e = g.default.getCurrentUser();
        return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), U = R === h.O.STREAM_PREVIEW || null != a, G = (0, b.A)(t), W = G || U ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL, z = (null == t ? void 0 : t.type) === w.$pd.HANG_STATUS, H = (0, o.bG)([y.A, m.A], () => {
        var e;
        return z ? m.A.getChannel(null == (e = y.A.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null
    }), F = W === p.A.Direction.VERTICAL;
    return (0, r.jsx)(p.A, {
        grow: 0,
        align: p.A.Align.STRETCH,
        direction: W,
        wrap: F ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
        className: l()(u, N.jx, F ? N.Vd : N.xM),
        children: (() => {
            if ((0, _.A)(t)) return (0, r.jsx)(A.A, {
                platform: d.A.get(w.fg2.XBOX),
                variant: k,
                onAction: M,
                icon: c.YWd
            });
            if ((null == t ? void 0 : t.platform) === w.yTV.PS4 || (null == t ? void 0 : t.platform) === w.yTV.PS5) return (0, r.jsx)(A.A, {
                variant: k,
                platform: d.A.get(w.fg2.PLAYSTATION),
                onAction: M,
                icon: c.Xj
            });
            if (G) {
                let e = (0, r.jsx)(T.A, {
                        activity: t,
                        user: i,
                        guildId: C,
                        channelId: D,
                        source: L,
                        onAction: M
                    }),
                    n = (0, r.jsx)(I.A, {
                        activity: t,
                        user: i,
                        source: L,
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
                    variant: k,
                    onAction: M
                })
            }
            return U ? (0, r.jsx)(E.A, {
                isCurrentUser: V.id === i.id,
                applicationStream: a,
                onAction: M
            }) : z && null != H ? (0, r.jsx)(S.A, {
                userId: i.id,
                variant: k,
                hangStatusChannel: H,
                onAction: M
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(P.A, {
                    activity: t,
                    variant: k,
                    onAction: M
                }), (0, r.jsx)(O.A, {
                    activity: t,
                    embeddedActivity: n,
                    user: i,
                    variant: k,
                    onAction: M
                }), (0, r.jsx)(x.A, {
                    activity: t,
                    user: i,
                    variant: k,
                    onAction: M
                }), (0, r.jsx)(v.A, {
                    user: i,
                    activity: t,
                    variant: k,
                    onAction: M
                })]
            })
        })()
    })
})