/** Chunk was on 97492 **/
/** chunk id: 106044, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(961350),
    l = n(63995),
    i = n(69407),
    s = n(312006),
    a = n(446600);

function o(e) {
    if (!e.isGuildStageVoice() || !a.A.isLive(e.id)) return !1;
    let t = r.default.getId();
    return !!s.Ay.isModerator(t, e.id) && !!s.Ay.isSpeaker(t, e.id) && (null == l.A.getMutableParticipants(e.id).find(n => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id)) || null == l.A.getMutableParticipants(e.id, i.ip.SPEAKER).find(n => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id)))
}