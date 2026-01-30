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
    A = n(616356),
    h = n(961350),
    v = n(71393),
    O = n(576705),
    S = n(290863),
    j = n(977997),
    x = n(607567),
    I = n(338234),
    P = n(667936),
    E = n(188275),
    T = n(962966);

function N(e) {
    let {
        channel: t,
        user: n,
        onAction: i,
        excludeActivity: N,
        onWatchStream: w,
        previewIsOpen: C,
        hangStatusActivity: L
    } = e, D = l.useMemo(() => ({
        [t.guild_id]: [n.id]
    }), [t.guild_id, n.id]);
    (0, c.E)(D, "VoiceUserActivities");
    let k = (0, d.Ay)(t),
        R = l.useMemo(() => k.filter(e => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
        V = Array.from((0, d.Rz)(R).values()),
        [M, U] = (0, s.yK)([A.A], () => [A.A.getStreamForUser(n.id, t.getGuildId()), A.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
        [G, W] = (0, s.yK)([j.A, v.A, O.A, p.default], () => (0, f.eo)(t, j.A, v.A, O.A, p.default)),
        z = (0, s.bG)([h.default], () => h.default.getId()),
        F = (0, s.bG)([S.A], () => (0, m.nr)(M, S.A), [M]),
        H = (0, m.AO)(M),
        K = (0, u.m)(n, null != N ? N : F),
        Y = (0, s.bG)([x.Ay], () => {
            var e;
            return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
        }, [t, n.id]),
        B = l.useMemo(() => null != Y ? [Y] : [], [Y]),
        {
            enableUserHoverActivities: J
        } = (0, I.fC)({
            guildId: t.guild_id,
            location: "VoiceUserActivities"
        }),
        Z = (0, b.m)({
            location: "voice_channel_activities"
        }),
        X = null != M,
        q = K.length + V.length > 0,
        $ = n.id === h.default.getId(),
        Q = null != L;
    return X || q || Q ? (0, r.jsxs)(o.HOs, {
        className: T.kL,
        children: [Q && null != L ? (0, r.jsx)("div", {
            className: T.Ak,
            children: (0, r.jsx)(y.Z, {
                hangStatusActivity: L,
                channel: t,
                userId: n.id,
                isSelf: $,
                analyticsSource: "VoiceUserActivities",
                onAction: i,
                className: T.AF,
                iconClassName: T.W9,
                textClassName: T.YJ
            })
        }) : null, Q && (X || q) && (0, r.jsx)("div", {
            className: T.zN
        }), null == M || null == w ? null : (0, r.jsxs)("div", {
            className: a()(T.yt, {
                [T.P0]: C
            }),
            children: [(0, r.jsx)(g.Z, {
                stream: M,
                activeStream: U,
                streamActivity: F,
                streamApplication: H,
                user: n,
                currentUserId: z,
                canWatch: G,
                unavailableReason: W,
                onWatchStream: w,
                onAction: i,
                showHeader: J,
                skipContainer: !0
            }), q && (0, r.jsx)("div", {
                className: T.zN
            })]
        }), V.map((e, n) => {
            var l;
            return (0, r.jsx)(P.A, {
                embeddedApp: e,
                presenceActivity: null != (l = e.presenceActivity) ? l : void 0,
                channel: t,
                onAction: i
            }, n)
        }), K.map((e, a) => Z && null != e.application_id && E.sQ.has(e.application_id) ? (0, r.jsxs)(l.Fragment, {
            children: [(0, r.jsx)(P.A, {
                presenceActivity: e,
                channel: t,
                members: B,
                onAction: i
            }), (0, r.jsx)(_.A, {
                className: T.L,
                applicationId: e.application_id,
                userIds: [n.id],
                location: "voice_channel",
                guildId: t.guild_id,
                channelId: t.id
            })]
        }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(P.A, {
            presenceActivity: e,
            channel: t,
            members: B,
            onAction: i
        }, a))]
    }) : null
}