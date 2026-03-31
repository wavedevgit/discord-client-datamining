/** chunk id: 458829 params = (module,exports,require) **/
n.d(t, {
    x: () => o
});
var i = n(284009),
    l = n.n(i),
    r = n(827343),
    a = n(956793),
    u = n(430452),
    d = n(108713),
    s = n(350701);

function o(e, t) {
    let n = e.sessionId ?? "";
    (0, d.Fc)(n), (0, d.ZG)();
    let i = t ?? e.channelId;
    l()(null != i, "attempted to transfer to unknown channel"), e.selfMute !== u.Ay.isSelfMute() && r.A.toggleSelfMute(), e.selfDeaf !== u.Ay.isSelfDeaf() && r.A.toggleSelfDeaf(), (0, s.A)(i, "discord_client", n), a.default.selectVoiceChannel(i, !1)
}