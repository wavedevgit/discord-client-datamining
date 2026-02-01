/** chunk id: 376696, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(80682),
    u = n(845056),
    d = n(685399),
    p = n(643501),
    f = n(279250),
    m = n(834757),
    g = n(727353),
    y = n(636920),
    b = n(565688),
    _ = n(93879),
    h = n(616356),
    A = n(961350),
    v = n(71393),
    O = n(576705),
    S = n(290863),
    j = n(977997),
    x = n(607567),
    I = n(338234),
    E = n(667936),
    C = n(188275),
    P = n(962966);

function N(e) {
    let {
        channel: t,
        user: n,
        onAction: i,
        excludeActivity: N,
        onWatchStream: T,
        previewIsOpen: w,
        hangStatusActivity: L
    } = e, D = l.useMemo(() => ({
        [t.guild_id]: [n.id]
    }), [t.guild_id, n.id]);
    (0, c.E)(D, "VoiceUserActivities");
    let R = (0, d.Ay)(t),
        k = l.useMemo(() => R.filter(e => e.embeddedActivity.userIds.has(n.id)), [R, n.id]),
        M = Array.from((0, d.Rz)(k).values()),
        [U, G] = (0, s.yK)([h.A], () => [h.A.getStreamForUser(n.id, t.getGuildId()), h.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
        [V, F] = (0, s.yK)([j.A, v.A, O.A, p.default], () => (0, f.eo)(t, j.A, v.A, O.A, p.default)),
        W = (0, s.bG)([A.default], () => A.default.getId()),
        H = (0, s.bG)([S.A], () => (0, m.nr)(U, S.A), [U]),
        z = (0, m.AO)(U),
        K = (0, u.m)(n, null != N ? N : H),
        B = (0, s.bG)([x.Ay], () => {
            var e;
            return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
        }, [t, n.id]),
        Y = l.useMemo(() => null != B ? [B] : [], [B]),
        {
            enableUserHoverActivities: J
        } = (0, I.fC)({
            guildId: t.guild_id,
            location: "VoiceUserActivities"
        }),
        Z = (0, b.m)({
            location: "voice_channel_activities"
        }),
        X = null != U,
        q = K.length + M.length > 0,
        $ = n.id === A.default.getId(),
        Q = null != L;
    return X || q || Q ? (0, r.jsxs)(o.HOs, {
        className: P.kL,
        children: [Q && null != L ? (0, r.jsx)("div", {
            className: P.Ak,
            children: (0, r.jsx)(y.Z, {
                hangStatusActivity: L,
                channel: t,
                userId: n.id,
                isSelf: $,
                analyticsSource: "VoiceUserActivities",
                onAction: i,
                className: P.AF,
                iconClassName: P.W9,
                textClassName: P.YJ
            })
        }) : null, Q && (X || q) && (0, r.jsx)("div", {
            className: P.zN
        }), null == U || null == T ? null : (0, r.jsxs)("div", {
            className: a()(P.yt, {
                [P.P0]: w
            }),
            children: [(0, r.jsx)(g.Z, {
                stream: U,
                activeStream: G,
                streamActivity: H,
                streamApplication: z,
                user: n,
                currentUserId: W,
                canWatch: V,
                unavailableReason: F,
                onWatchStream: T,
                onAction: i,
                showHeader: J,
                skipContainer: !0
            }), q && (0, r.jsx)("div", {
                className: P.zN
            })]
        }), M.map((e, n) => {
            var l;
            return (0, r.jsx)(E.A, {
                embeddedApp: e,
                presenceActivity: null != (l = e.presenceActivity) ? l : void 0,
                channel: t,
                onAction: i
            }, n)
        }), K.map((e, a) => Z && null != e.application_id && C.sQ.has(e.application_id) ? (0, r.jsxs)(l.Fragment, {
            children: [(0, r.jsx)(E.A, {
                presenceActivity: e,
                channel: t,
                members: Y,
                onAction: i
            }), (0, r.jsx)(_.A, {
                className: P.L,
                applicationId: e.application_id,
                userIds: [n.id],
                location: "voice_channel",
                guildId: t.guild_id,
                channelId: t.id
            })]
        }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(E.A, {
            presenceActivity: e,
            channel: t,
            members: Y,
            onAction: i
        }, a))]
    }) : null
}