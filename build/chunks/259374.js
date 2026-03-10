/** chunk id: 259374 params = (module,exports,require) **/
t.d(n, {
    k: () => a
});
var i = t(311907),
    l = t(734057),
    r = t(383501);

function a(e) {
    let {
        channelId: n
    } = e;
    return (0, i.bG)([r.A, l.A], () => (function(e) {
        let [n, t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, l.A];
        if (null == e || n.getChannelId() !== e) return !1;
        let i = t.getChannel(e);
        if (null == i || i.isGuildStageVoice()) return !1;
        let a = n.getSecureFramesState()?.version;
        return null != a && 0 !== a
    })(n, [r.A, l.A]), [n])
}
t(603266)