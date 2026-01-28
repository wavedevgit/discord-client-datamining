/** Chunk was on 78572 **/
/** chunk id: 376696, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
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
    T = n(667936),
    P = n(188275),
    E = n(962966);

function w(e) {
    let {
        channel: t,
        user: n,
        onAction: l,
        excludeActivity: w,
        onWatchStream: N,
        previewIsOpen: C,
        hangStatusActivity: D
    } = e, L = i.useMemo(() => ({
        [t.guild_id]: [n.id]
    }), [t.guild_id, n.id]);
    (0, c.E)(L, "VoiceUserActivities");
    let k = (0, d.Ay)(t),
        R = i.useMemo(() => k.filter(e => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
        M = Array.from((0, d.Rz)(R).values()),
        [V, U] = (0, s.yK)([h.A], () => [h.A.getStreamForUser(n.id, t.getGuildId()), h.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
        [G, W] = (0, s.yK)([j.A, v.A, O.A, p.default], () => (0, f.eo)(t, j.A, v.A, O.A, p.default)),
        z = (0, s.bG)([A.default], () => A.default.getId()),
        H = (0, s.bG)([S.A], () => (0, m.nr)(V, S.A), [V]),
        F = (0, m.AO)(V),
        K = (0, u.m)(n, null != w ? w : H),
        Y = (0, s.bG)([x.Ay], () => {
            var e;
            return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
        }, [t, n.id]),
        B = i.useMemo(() => null != Y ? [Y] : [], [Y]),
        {
            enableUserHoverActivities: J
        } = (0, I.fC)({
            guildId: t.guild_id,
            location: "VoiceUserActivities"
        }),
        Z = (0, b.m)({
            location: "voice_channel_activities"
        }),
        X = null != V,
        q = K.length + M.length > 0,
        $ = n.id === A.default.getId(),
        Q = null != D;
    return X || q || Q ? (0, r.jsxs)(o.HOs, {
        className: E.kL,
        children: [Q && null != D ? (0, r.jsx)("div", {
            className: E.Ak,
            children: (0, r.jsx)(y.Z, {
                hangStatusActivity: D,
                channel: t,
                userId: n.id,
                isSelf: $,
                analyticsSource: "VoiceUserActivities",
                onAction: l,
                className: E.AF,
                iconClassName: E.W9,
                textClassName: E.YJ
            })
        }) : null, Q && (X || q) && (0, r.jsx)("div", {
            className: E.zN
        }), null == V || null == N ? null : (0, r.jsxs)("div", {
            className: a()(E.yt, {
                [E.P0]: C
            }),
            children: [(0, r.jsx)(g.Z, {
                stream: V,
                activeStream: U,
                streamActivity: H,
                streamApplication: F,
                user: n,
                currentUserId: z,
                canWatch: G,
                unavailableReason: W,
                onWatchStream: N,
                onAction: l,
                showHeader: J,
                skipContainer: !0
            }), q && (0, r.jsx)("div", {
                className: E.zN
            })]
        }), M.map((e, n) => {
            var i;
            return (0, r.jsx)(T.A, {
                embeddedApp: e,
                presenceActivity: null != (i = e.presenceActivity) ? i : void 0,
                channel: t,
                onAction: l
            }, n)
        }), K.map((e, a) => Z && null != e.application_id && P.sQ.has(e.application_id) ? (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(T.A, {
                presenceActivity: e,
                channel: t,
                members: B,
                onAction: l
            }), (0, r.jsx)(_.A, {
                className: E.L,
                applicationId: e.application_id,
                userIds: [n.id],
                location: "voice_channel",
                guildId: t.guild_id,
                channelId: t.id
            })]
        }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(T.A, {
            presenceActivity: e,
            channel: t,
            members: B,
            onAction: l
        }, a))]
    }) : null
}