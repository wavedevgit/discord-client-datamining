/** chunk id: 259374, original params: e,n,t (module,exports,require) **/
t.d(n, {
    k: () => s
}), t(896048);
var l = t(311907),
    r = t(734057),
    i = t(383501);

function s(e) {
    let {
        channelId: n
    } = e;
    return (0, l.bG)([i.A, r.A], () => (function(e) {
        var n;
        let [t, l] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, r.A];
        if (null == e || t.getChannelId() !== e) return !1;
        let s = l.getChannel(e);
        if (null == s || s.isGuildStageVoice()) return !1;
        let a = null == (n = t.getSecureFramesState()) ? void 0 : n.version;
        return null != a && 0 !== a
    })(n, [i.A, r.A]), [n])
}
t(603266)