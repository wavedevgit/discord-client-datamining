/** chunk id: 68437 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    r = n(397927),
    a = n(685399),
    o = n(475889),
    c = n(693879),
    d = n(435470),
    u = n(84052),
    h = n(96566),
    A = n(863005),
    m = n(71393),
    _ = n(576705),
    p = n(222823),
    g = n(977997),
    f = n(669715),
    x = n(893943),
    E = n(892896),
    C = n(246084),
    I = n(436133),
    N = n(884415),
    b = n(775946),
    S = n(652215),
    T = n(790782),
    v = n(985018);

function y(e) {
    let {
        channel: t,
        isChannelSelected: n,
        isChannelCollapsed: y,
        voiceStates: j,
        enableConnectedUserLimit: R,
        enableActivities: O,
        isSubscriptionGated: L,
        needSubscriptionToAccess: M,
        isNewChannel: D,
        muted: G,
        resolvedUnreadSetting: U
    } = e, P = (0, s.bG)([p.Ay], () => p.Ay.getMentionCount(t.id)), w = (0, s.bG)([p.Ay], () => p.Ay.getIsMentionLowImportance(t.id)), k = (0, a.Ay)(t), V = (0, s.bG)([_.A], () => !_.A.can(S.xBc.CONNECT, t)), B = (0, o.H)(t), H = (0, s.bG)([g.A], () => g.A.hasVideo(t.id)), F = (0, h.qT)(t.id) && t.isGuildStageVoice(), K = (0, C.Ay)({
        channel: t,
        locked: V,
        video: (H || F) && null == B,
        selected: n
    }), W = (0, s.bG)([A.A], () => A.A.getNewThreadCount(t.guild_id, t.id)), Y = (0, d.ed)(t.guild_id, t.id), z = (0, s.bG)([m.A], () => m.A.getGuild(t.guild_id)?.features.has(S.GuildFeatures.COMMUNITY) ?? !1);
    if ((0, E.A)(P)) return (0, i.jsx)(b.A, {
        mentionsCount: P,
        isMentionLowImportance: w
    });
    if ((0, u.v)(L)) return (0, i.jsx)(u.A, {
        locked: M
    });
    if (D) return (0, i.jsx)(r.LpS, {
        text: v.intl.string(v.t.y2b7CA),
        color: l.A.colors.BADGE_BACKGROUND_BRAND.css
    });
    if (!G && U === T.e.ALL_MESSAGES && t.isForumLikeChannel() && null != W && W > 0) return (0, i.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-brand",
        children: v.intl.format(v.t.GkAbqY, {
            count: (0, r.Gub)(W)
        })
    });
    if (!G && t.isForumLikeChannel() && null != Y && Y > 0) return (0, i.jsx)(r.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: (0, r.Gub)(Y)
    });
    let q = j?.length ?? 0;
    return null != R && R && K ? (0, i.jsx)(N.A, {
        userCount: q,
        video: H || F,
        channel: t
    }) : y && (0, f.t)(j) && z ? (0, i.jsx)(r.LpS, {
        text: v.intl.string(v.t.dI3q4h),
        color: l.A.unsafe_rawColors.RED_400.css
    }) : null != B ? (0, i.jsx)(c.z, {
        textColor: "text-feedback-positive",
        entry: {
            start: B
        }
    }) : null != O && O && (0, x.X)(k) ? (0, i.jsx)(I.A, {
        embeddedApps: k,
        muted: G
    }) : null
}