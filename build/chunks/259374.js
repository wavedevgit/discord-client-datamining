/** chunk id: 259374, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => a
});
var i = n(311907),
    l = n(734057),
    s = n(383501);

function a(e) {
    let {
        channelId: t
    } = e;
    return (0, i.bG)([s.A, l.A], () => (function(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, l.A];
        if (null == e || t.getChannelId() !== e) return !1;
        let i = n.getChannel(e);
        if (null == i || i.isGuildStageVoice()) return !1;
        let a = t.getSecureFramesState()?.version;
        return null != a && 0 !== a
    })(t, [s.A, l.A]), [t])
}
n(603266)