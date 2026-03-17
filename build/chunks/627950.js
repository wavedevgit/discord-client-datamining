/** chunk id: 627950 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(686956),
    r = n(22007),
    l = n(734057),
    a = n(71393),
    s = n(954571),
    o = n(449054),
    d = n(652215);
async function c(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        c = e.messageReference.message_id,
        u = l.A.getChannel(n),
        _ = !1;
    if (null == u && null != t && null == a.A.getGuild(t)) try {
        await (0, o.Z2)(t, {
            object: d.ZSU.FORWARD_BREADCRUMB
        }, {
            shouldNavigate: !1
        }), _ = !0, await (0, i.k)(t), u = l.A.getChannel(n)
    } catch {}
    s.default.track(d.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: l.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: c,
        did_lurk: _
    });
    let m = _ ? n : void 0;
    (0, r.A)(d.BVt.CHANNEL(t, n, c), {
        welcomeModalChannelId: m
    })
}