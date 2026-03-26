/** chunk id: 259374 params = (module,exports,require) **/
n.d(t, {
    k: () => a
});
var l = n(311907),
    i = n(734057),
    r = n(383501);

function a(e) {
    let {
        channelId: t
    } = e;
    return (0, l.bG)([r.A, i.A], () => (function(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, i.A];
        if (null == e || t.getChannelId() !== e) return !1;
        let l = n.getChannel(e);
        if (null == l || l.isGuildStageVoice()) return !1;
        let a = t.getSecureFramesState()?.version;
        return null != a && 0 !== a
    })(t, [r.A, i.A]), [t])
}
n(603266)