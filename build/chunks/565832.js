/** chunk id: 565832 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968),
    i = n(311907),
    l = n(935154),
    s = n(748319),
    r = n(287809),
    o = n(427262);

function d(e) {
    let {
        nameplate: t
    } = e, n = (0, i.bG)([r.default], () => r.default.getCurrentUser()), d = o.Ay.useName(n) ?? "";
    return (0, a.jsx)(s.g, {
        username: d,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: l.cl.ONLINE,
        currentUser: n,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        speakingWhileMuted: !1,
        speakingWhilePTTInactive: !1,
        occluded: !1,
        dismissibleContents: {
            avatar: [],
            settings: []
        },
        awaitingRemote: !1,
        nameplate: t,
        voiceChannel: null,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1
    })
}