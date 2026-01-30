/** chunk id: 259374, original params: e,t,n (module,exports,require) **/
n.d(t, {
    k: () => o
}), n(896048);
var r = n(311907),
    l = n(734057),
    i = n(383501);

function o(e) {
    let {
        channelId: t
    } = e;
    return (0, r.bG)([i.A, l.A], () => (function(e) {
        var t;
        let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, l.A];
        if (null == e || n.getChannelId() !== e) return !1;
        let o = r.getChannel(e);
        if (null == o || o.isGuildStageVoice()) return !1;
        let a = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
        return null != a && 0 !== a
    })(t, [i.A, l.A]), [t])
}
n(603266)