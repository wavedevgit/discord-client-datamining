/** Chunk was on 1113 **/
/** chunk id: 68437, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(827734),
    s = n(397927),
    a = n(685399),
    o = n(475889),
    c = n(693879),
    u = n(435470),
    d = n(84052),
    h = n(96566),
    p = n(863005),
    g = n(71393),
    f = n(576705),
    m = n(222823),
    b = n(977997),
    A = n(669715),
    y = n(893943),
    O = n(892896),
    _ = n(246084),
    j = n(436133),
    x = n(884415),
    v = n(775946),
    E = n(652215),
    C = n(790782),
    S = n(985018);

function I(e) {
    var t;
    let {
        channel: n,
        isChannelSelected: I,
        isChannelCollapsed: N,
        voiceStates: T,
        enableConnectedUserLimit: P,
        enableActivities: w,
        isSubscriptionGated: R,
        needSubscriptionToAccess: D,
        isNewChannel: L,
        muted: M,
        resolvedUnreadSetting: G
    } = e, k = (0, l.bG)([m.Ay], () => m.Ay.getMentionCount(n.id)), U = (0, l.bG)([m.Ay], () => m.Ay.getIsMentionLowImportance(n.id)), V = (0, a.Ay)(n), B = (0, l.bG)([f.A], () => !f.A.can(E.xBc.CONNECT, n)), H = (0, o.H)(n), F = (0, l.bG)([b.A], () => b.A.hasVideo(n.id)), K = (0, h.qT)(n.id) && n.isGuildStageVoice(), Y = (0, _.Ay)({
        channel: n,
        locked: B,
        video: (F || K) && null == H,
        selected: I
    }), W = (0, l.bG)([p.A], () => p.A.getNewThreadCount(n.guild_id, n.id)), z = (0, u.ed)(n.guild_id, n.id), q = (0, l.bG)([g.A], () => {
        var e, t;
        return null != (e = null == (t = g.A.getGuild(n.guild_id)) ? void 0 : t.features.has(E.GuildFeatures.COMMUNITY)) && e
    });
    if ((0, O.A)(k)) return (0, r.jsx)(v.A, {
        mentionsCount: k,
        isMentionLowImportance: U
    });
    if ((0, d.v)(R)) return (0, r.jsx)(d.A, {
        locked: D
    });
    if (L) return (0, r.jsx)(s.LpS, {
        text: S.intl.string(S.t.y2b7CA),
        color: i.A.colors.BADGE_BACKGROUND_BRAND.css
    });
    if (!M && G === C.e.ALL_MESSAGES && n.isForumLikeChannel() && null != W && W > 0) return (0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "text-brand",
        children: S.intl.format(S.t.GkAbqY, {
            count: (0, s.Gub)(W)
        })
    });
    if (!M && n.isForumLikeChannel() && null != z && z > 0) return (0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: (0, s.Gub)(z)
    });
    let X = null != (t = null == T ? void 0 : T.length) ? t : 0;
    return null != P && P && Y ? (0, r.jsx)(x.A, {
        userCount: X,
        video: F || K,
        channel: n
    }) : N && (0, A.t)(T) && q ? (0, r.jsx)(s.LpS, {
        text: S.intl.string(S.t.dI3q4h),
        color: i.A.unsafe_rawColors.RED_400.css
    }) : null != H ? (0, r.jsx)(c.z, {
        textColor: "text-feedback-positive",
        entry: {
            start: H
        }
    }) : null != w && w && (0, y.X)(V) ? (0, r.jsx)(j.A, {
        embeddedApps: V,
        muted: M
    }) : null
}