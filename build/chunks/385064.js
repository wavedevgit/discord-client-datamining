/** chunk id: 385064 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(284009),
    l = n.n(a),
    i = n(846293),
    r = n(976860),
    s = n(71393),
    o = n(449054),
    c = n(652215);
async function d(e) {
    let {
        invite: t,
        guildId: n,
        channelId: a,
        messageId: d,
        analyticsLocationStack: u
    } = e;
    l()(u.length > 0, "analyticsLocationStack must have at least one location");
    let m = u[u.length - 1],
        x = null;
    if (null != t && (n = t.guild?.id, x = new Set(t.guild?.features)), null == n) return;
    let h = s.A.getGuild(n);
    if (h?.joinedAt == null)
        if (null == x || x.has(c.GuildFeatures.PREVIEW_ENABLED)) return void await (0, o.Z2)(n, {}, {
            shouldNavigate: !0,
            channelId: a,
            messageId: d,
            joinSource: c.Q4z.GAME_PROFILE_ANNOUNCEMENTS
        }, u);
        else null != t && await i.Ay.acceptInvite({
            inviteKey: t.code,
            context: {
                location: m
            },
            skipOnboarding: !0
        });
    (0, r.pX)(c.BVt.CHANNEL(n, a, d), {
        sourceLocationStack: u
    })
}