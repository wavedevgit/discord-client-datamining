/** Chunk was on 6500 **/
/** chunk id: 376696, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
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
    _ = n(636920),
    y = n(565688),
    A = n(93879),
    b = n(616356),
    h = n(961350),
    v = n(71393),
    O = n(576705),
    j = n(290863),
    S = n(977997),
    I = n(607567),
    x = n(338234),
    E = n(667936),
    P = n(188275),
    N = n(962966);

function T(e) {
    let {
        channel: t,
        user: n,
        onAction: l,
        excludeActivity: T,
        onWatchStream: w,
        previewIsOpen: C,
        hangStatusActivity: L
    } = e, D = i.useMemo(() => ({
        [t.guild_id]: [n.id]
    }), [t.guild_id, n.id]);
    (0, c.E)(D, "VoiceUserActivities");
    let k = (0, d.Ay)(t),
        G = i.useMemo(() => k.filter(e => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
        R = Array.from((0, d.Rz)(G).values()),
        [M, V] = (0, s.yK)([b.A], () => [b.A.getStreamForUser(n.id, t.getGuildId()), b.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
        [U, W] = (0, s.yK)([S.A, v.A, O.A, p.default], () => (0, f.eo)(t, S.A, v.A, O.A, p.default)),
        F = (0, s.bG)([h.default], () => h.default.getId()),
        z = (0, s.bG)([j.A], () => (0, m.nr)(M, j.A), [M]),
        K = (0, m.AO)(M),
        H = (0, u.m)(n, null != T ? T : z),
        Y = (0, s.bG)([I.Ay], () => {
            var e;
            return null != (e = I.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
        }, [t, n.id]),
        B = i.useMemo(() => null != Y ? [Y] : [], [Y]),
        {
            enableUserHoverActivities: J
        } = (0, x.fC)({
            guildId: t.guild_id,
            location: "VoiceUserActivities"
        }),
        Z = (0, y.m)({
            location: "voice_channel_activities"
        }),
        X = null != M,
        q = H.length + R.length > 0,
        $ = n.id === h.default.getId(),
        Q = null != L;
    return X || q || Q ? (0, r.jsxs)(o.HOs, {
        className: N.kL,
        children: [Q && null != L ? (0, r.jsx)("div", {
            className: N.Ak,
            children: (0, r.jsx)(_.Z, {
                hangStatusActivity: L,
                channel: t,
                userId: n.id,
                isSelf: $,
                analyticsSource: "VoiceUserActivities",
                onAction: l,
                className: N.AF,
                iconClassName: N.W9,
                textClassName: N.YJ
            })
        }) : null, Q && (X || q) && (0, r.jsx)("div", {
            className: N.zN
        }), null == M || null == w ? null : (0, r.jsxs)("div", {
            className: a()(N.yt, {
                [N.P0]: C
            }),
            children: [(0, r.jsx)(g.Z, {
                stream: M,
                activeStream: V,
                streamActivity: z,
                streamApplication: K,
                user: n,
                currentUserId: F,
                canWatch: U,
                unavailableReason: W,
                onWatchStream: w,
                onAction: l,
                showHeader: J,
                skipContainer: !0
            }), q && (0, r.jsx)("div", {
                className: N.zN
            })]
        }), R.map((e, n) => {
            var i;
            return (0, r.jsx)(E.A, {
                embeddedApp: e,
                presenceActivity: null != (i = e.presenceActivity) ? i : void 0,
                channel: t,
                onAction: l
            }, n)
        }), H.map((e, a) => Z && null != e.application_id && P.sQ.has(e.application_id) ? (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(E.A, {
                presenceActivity: e,
                channel: t,
                members: B,
                onAction: l
            }), (0, r.jsx)(A.A, {
                className: N.L,
                applicationId: e.application_id,
                userIds: [n.id],
                location: "voice_channel",
                guildId: t.guild_id,
                channelId: t.id
            })]
        }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(E.A, {
            presenceActivity: e,
            channel: t,
            members: B,
            onAction: l
        }, a))]
    }) : null
}