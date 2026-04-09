/** chunk id: 672814 params = (module,exports,require) **/
n.d(t, {
    e: () => V,
    r: () => R
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(774300),
    u = n(566903),
    c = n(714114),
    g = n(864436),
    h = n(835072),
    A = n(313961),
    x = n(85448),
    p = n(571694),
    I = n(47167),
    m = n(10862),
    S = n(410876),
    v = n(71393),
    y = n(535820),
    f = n(290863),
    E = n(994500),
    _ = n(287809),
    T = n(486020),
    C = n(240248),
    N = n(427262),
    b = n(652215),
    M = n(806931),
    j = n(985018),
    G = n(465892);
let R = 48;

function U(e, t) {
    if (null != e) return {
        suggestionData: y.A.getSelectedInviteMetadata(e),
        source: t
    }
}
let V = i.memo(function(e) {
    let t, {
            user: n,
            channel: s,
            inviteKey: y,
            location: R,
            row: V,
            source: w,
            ringingEnabled: O,
            inviteChannel: D,
            guildId: P
        } = e,
        [L, k] = i.useState(!1),
        [F, B] = i.useState(!1),
        H = (0, r.bG)([v.A], () => v.A.getGuild(s?.guild_id)),
        {
            status: K,
            isMobileOnline: z,
            activities: Q
        } = (0, r.cf)([f.A], () => null == n ? {
            status: void 0,
            isMobileOnline: void 0,
            activities: void 0
        } : {
            status: f.A.getStatus(n.id, P),
            isMobileOnline: f.A.isMobileOnline(n.id),
            activities: f.A.getActivities(n.id, P)
        }, [n, P]),
        {
            activityStatusText: W,
            activityStatusIcon: q
        } = i.useMemo(() => {
            if (null == Q) return {
                activityStatusText: {},
                activityStatusIcon: void 0
            };
            let e = Q.find(e => e.type !== b.$pd.CUSTOM_STATUS && e.type !== b.$pd.HANG_STATUS);
            return {
                activityStatusText: (0, u.A)(e, !1),
                activityStatusIcon: null == e ? void 0 : (0, h.f)(e)
            }
        }, [Q]),
        {
            voiceChannel: Y
        } = (0, c.A)({
            userId: n?.id
        }),
        J = (0, I.Ay)(Y),
        Z = (0, r.bG)([A.A], () => null != D && null != n ? A.A.getParticipant(D.id, n.id) : null),
        X = O && null != Z && Z.type === M.lp.USER && Z.ringing,
        $ = (0, o.S31)(o.clD.ONLINE),
        ee = i.useCallback(() => {
            null != y && (null != s ? (k(!0), d.A.enqueue({
                type: d.F.GROUP_DM,
                channel: s,
                inviteKey: y,
                location: R,
                inviteAnalyticsMetadata: U(V, w)
            }, e => {
                k(!1), B(e)
            })) : null != n && (k(!0), d.A.enqueue({
                type: d.F.USER,
                user: n,
                inviteKey: y,
                location: R,
                inviteAnalyticsMetadata: U(V, w)
            }, e => {
                k(!1), B(e)
            })))
        }, [y, s, n, R, V, w]),
        et = N.Ay.getName(n),
        en = null != n ? E.A.getNickname(n.id) : null,
        el = null != s ? (0, I.m1)(s, _.default, E.A) : null,
        ei = null != n ? n.getAvatarURL(s?.guild_id, 32) : null,
        es = null != s ? (0, p.Y)(s) : null,
        ea = null != H && null != s && null == es ? T.Ay.getGuildIconURL({
            id: s.guild_id,
            icon: H.icon,
            size: 32
        }) : null,
        er = K !== o.clD.OFFLINE ? K : void 0,
        eo = ei ?? es ?? ea,
        ed = et ?? el ?? void 0,
        eu = null != H && null == H.icon ? (0, C.oN)(H.name) : null,
        ec = null != eo && null != ed;
    null != n && (t = en ?? et);
    let eg = N.Ay.getUserTag(n, {
            decoration: "never"
        }),
        eh = (0, l.jsx)(o.Button, {
            variant: "secondary",
            text: F ? j.intl.string(j.t.dVT149) : j.intl.string(j.t.jYnGPG),
            size: "sm",
            loading: L,
            onClick: ee,
            disabled: F
        }),
        eA = null != W.text,
        ex = null != Y && null != J,
        ep = ex || eA || null != n;
    return (0, l.jsxs)("div", {
        className: G.Og,
        children: [(0, l.jsxs)("div", {
            className: G.mQ,
            children: [ec ? X ? (0, l.jsx)(x.A, {
                size: o._3J.SIZE_32,
                ringing: X,
                src: eo,
                className: G.hO
            }) : (0, l.jsx)(o.euF, {
                src: eo,
                "aria-label": ed,
                size: o._3J.SIZE_32,
                className: G.hO,
                status: null != n ? er : void 0,
                isMobile: null != n ? z : void 0
            }) : (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                className: G.q9,
                "aria-hidden": !0,
                children: eu
            }), (0, l.jsxs)("div", {
                className: a()(G.BT, {
                    [G.DF]: X
                }),
                children: [(0, l.jsxs)(o.Text, {
                    tag: "strong",
                    variant: "text-md/semibold",
                    lineClamp: 1,
                    children: [t, null != s ? (0, I.m1)(s, _.default, E.A, !0) : null]
                }), ep && (0, l.jsxs)("div", {
                    className: a()(G.eq, {
                        [G.DF]: X
                    }),
                    children: [ex ? (0, l.jsx)(m.A, {
                        size: "custom",
                        color: $,
                        channel: Y,
                        className: G.j8
                    }) : null != q ? (0, l.jsx)(g.A, {
                        icon: q,
                        className: G.j8
                    }) : null, ex ? (0, l.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-status-online",
                        lineClamp: 1,
                        children: J
                    }) : eA ? (0, l.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-status-online",
                        lineClamp: 1,
                        children: W.text
                    }) : (0, l.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: eg
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: X && ` • ${j.intl.string(j.t.sURrjb)}`
                    })]
                })]
            })]
        }), (0, l.jsxs)("div", {
            className: G.t$,
            children: [O && null != n && null != D && (0, l.jsx)(S.A, {
                user: n,
                channel: D,
                location: "InviteRow"
            }), eh]
        })]
    })
}, (e, t) => e.user === t.user && e.channel === t.channel && e.guildId === t.guildId && e.inviteChannel?.id === t.inviteChannel?.id && e.inviteKey === t.inviteKey && e.ringingEnabled === t.ringingEnabled)