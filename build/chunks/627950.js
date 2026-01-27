/** Chunk was on 92917 **/
/** chunk id: 627950, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(686956),
    i = n(22007),
    l = n(734057),
    a = n(71393),
    s = n(954571),
    o = n(449054),
    c = n(652215);
async function u(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        u = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        p = l.A.getChannel(u),
        m = !1;
    if (null == p && null != n && null == a.A.getGuild(n)) try {
        await (0, o.Z2)(n, {
            object: c.ZSU.FORWARD_BREADCRUMB
        }, {
            shouldNavigate: !1
        }), m = !0, await (0, r.k)(n), p = l.A.getChannel(u)
    } catch (e) {}
    s.default.track(c.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null == (t = l.A.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: u,
        breadcrumb_message_id: d,
        did_lurk: m
    });
    let f = m ? u : void 0;
    (0, i.A)(c.BVt.CHANNEL(n, u, d), {
        welcomeModalChannelId: f
    })
}