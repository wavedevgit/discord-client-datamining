/** Chunk was on 97492 **/
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
    p = n(96566),
    h = n(863005),
    f = n(71393),
    g = n(576705),
    m = n(222823),
    b = n(977997),
    A = n(669715),
    y = n(893943),
    _ = n(892896),
    O = n(246084),
    j = n(436133),
    v = n(884415),
    x = n(775946),
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
        isNewChannel: M,
        muted: L,
        resolvedUnreadSetting: k
    } = e, G = (0, l.bG)([m.Ay], () => m.Ay.getMentionCount(n.id)), U = (0, l.bG)([m.Ay], () => m.Ay.getIsMentionLowImportance(n.id)), B = (0, a.Ay)(n), V = (0, l.bG)([g.A], () => !g.A.can(E.xBc.CONNECT, n)), F = (0, o.H)(n), H = (0, l.bG)([b.A], () => b.A.hasVideo(n.id)), K = (0, p.qT)(n.id) && n.isGuildStageVoice(), W = (0, O.Ay)({
        channel: n,
        locked: V,
        video: (H || K) && null == F,
        selected: I
    }), z = (0, l.bG)([h.A], () => h.A.getNewThreadCount(n.guild_id, n.id)), Y = (0, u.ed)(n.guild_id, n.id), q = (0, l.bG)([f.A], () => {
        var e, t;
        return null != (e = null == (t = f.A.getGuild(n.guild_id)) ? void 0 : t.features.has(E.GuildFeatures.COMMUNITY)) && e
    });
    if ((0, _.A)(G)) return (0, r.jsx)(x.A, {
        mentionsCount: G,
        isMentionLowImportance: U
    });
    if ((0, d.v)(R)) return (0, r.jsx)(d.A, {
        locked: D
    });
    if (M) return (0, r.jsx)(s.LpS, {
        text: S.intl.string(S.t.y2b7CA),
        color: i.A.colors.BADGE_BACKGROUND_BRAND.css
    });
    if (!L && k === C.e.ALL_MESSAGES && n.isForumLikeChannel() && null != z && z > 0) return (0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "text-brand",
        children: S.intl.format(S.t.GkAbqY, {
            count: (0, s.Gub)(z)
        })
    });
    if (!L && n.isForumLikeChannel() && null != Y && Y > 0) return (0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: (0, s.Gub)(Y)
    });
    let X = null != (t = null == T ? void 0 : T.length) ? t : 0;
    return null != P && P && W ? (0, r.jsx)(v.A, {
        userCount: X,
        video: H || K,
        channel: n
    }) : N && (0, A.t)(T) && q ? (0, r.jsx)(s.LpS, {
        text: S.intl.string(S.t.dI3q4h),
        color: i.A.unsafe_rawColors.RED_400.css
    }) : null != F ? (0, r.jsx)(c.z, {
        textColor: "text-feedback-positive",
        entry: {
            start: F
        }
    }) : null != w && w && (0, y.X)(B) ? (0, r.jsx)(j.A, {
        embeddedApps: B,
        muted: L
    }) : null
}