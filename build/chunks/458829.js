/** chunk id: 458829, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => o
});
var l = n(284009),
    i = n.n(l),
    r = n(827343),
    a = n(956793),
    u = n(430452),
    d = n(108713),
    s = n(350701);

function o(e, t) {
    let n = e.sessionId ?? "";
    (0, d.Fc)(n), (0, d.ZG)();
    let l = t ?? e.channelId;
    i()(null != l, "attempted to transfer to unknown channel"), e.selfMute !== u.Ay.isSelfMute() && r.A.toggleSelfMute(), e.selfDeaf !== u.Ay.isSelfDeaf() && r.A.toggleSelfDeaf(), (0, s.A)(l, "discord_client", n), a.default.selectVoiceChannel(l, !1)
}