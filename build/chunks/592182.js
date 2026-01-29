/** Chunk was on 6500 **/
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
    _ = n(977997),
    y = n(90644),
    A = n(61330),
    b = n(153331),
    h = n(33852),
    v = n(834425),
    O = n(284525),
    j = n(730430),
    S = n(443493),
    I = n(462226),
    x = n(329151),
    E = n(738080),
    P = n(648246),
    N = n(305637),
    T = n(652215),
    w = n(620452);
let C = (0, u.A)(e => {
    let {
        activity: t,
        embeddedActivity: n,
        user: i,
        applicationStream: a,
        className: u,
        guildId: C,
        channelId: L,
        source: D,
        buttonVariant: k,
        type: G,
        onAction: R
    } = e, M = (0, o.bG)([g.default], () => {
        let e = g.default.getCurrentUser();
        return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
    }), V = G === b.O.STREAM_PREVIEW || null != a, U = (0, y.A)(t), W = U || V ? p.A.Direction.HORIZONTAL : p.A.Direction.VERTICAL, F = (null == t ? void 0 : t.type) === T.$pd.HANG_STATUS, z = (0, o.bG)([_.A, m.A], () => {
        var e;
        return F ? m.A.getChannel(null == (e = _.A.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null
    }), K = W === p.A.Direction.VERTICAL;
    return (0, r.jsx)(p.A, {
        grow: 0,
        align: p.A.Align.STRETCH,
        direction: W,
        wrap: K ? p.A.Wrap.WRAP : p.A.Wrap.NO_WRAP,
        className: l()(u, w.jx, K ? w.Vd : w.xM),
        children: (() => {
            if ((0, A.A)(t)) return (0, r.jsx)(h.A, {
                platform: d.A.get(T.fg2.XBOX),
                variant: k,
                onAction: R,
                icon: c.YWd
            });
            if ((null == t ? void 0 : t.platform) === T.yTV.PS4 || (null == t ? void 0 : t.platform) === T.yTV.PS5) return (0, r.jsx)(h.A, {
                variant: k,
                platform: d.A.get(T.fg2.PLAYSTATION),
                onAction: R,
                icon: c.Xj
            });
            if (U) {
                let e = (0, r.jsx)(E.A, {
                        activity: t,
                        user: i,
                        guildId: C,
                        channelId: L,
                        source: D,
                        onAction: R
                    }),
                    n = (0, r.jsx)(x.A, {
                        activity: t,
                        user: i,
                        source: D,
                        onAction: R
                    });
                return (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, e]
                })
            }
            if ((0, f.Cy)(t)) {
                let e = (0, f.UW)(t);
                return null == e ? null : (0, r.jsx)(S.A, {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    variant: k,
                    onAction: R
                })
            }
            return V ? (0, r.jsx)(N.A, {
                isCurrentUser: M.id === i.id,
                applicationStream: a,
                onAction: R
            }) : F && null != z ? (0, r.jsx)(j.A, {
                userId: i.id,
                variant: k,
                hangStatusChannel: z,
                onAction: R
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(P.A, {
                    activity: t,
                    variant: k,
                    onAction: R
                }), (0, r.jsx)(O.A, {
                    activity: t,
                    embeddedActivity: n,
                    user: i,
                    variant: k,
                    onAction: R
                }), (0, r.jsx)(I.A, {
                    activity: t,
                    user: i,
                    variant: k,
                    onAction: R
                }), (0, r.jsx)(v.A, {
                    user: i,
                    activity: t,
                    variant: k,
                    onAction: R
                })]
            })
        })()
    })
})