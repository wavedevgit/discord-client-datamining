/** Chunk was on 93952 **/
/** chunk id: 458829, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => d
});
var r = n(284009),
    l = n.n(r),
    i = n(827343),
    u = n(956793),
    a = n(430452),
    o = n(108713),
    c = n(350701);

function d(e, t) {
    var n;
    let r = null != (n = e.sessionId) ? n : "";
    (0, o.Fc)(r), (0, o.ZG)();
    let d = null != t ? t : e.channelId;
    l()(null != d, "attempted to transfer to unknown channel"), e.selfMute !== a.A.isSelfMute() && i.A.toggleSelfMute(), e.selfDeaf !== a.A.isSelfDeaf() && i.A.toggleSelfDeaf(), (0, c.A)(d, "discord_client", r), u.default.selectVoiceChannel(d, !1)
}