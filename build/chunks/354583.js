/** chunk id: 354583, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    i = n(734057),
    l = n(309010);

function a() {
    return (0, r.bG)([l.A, i.A], () => {
        let e = l.A.getVoiceChannelId();
        if (null != e) {
            let t = i.A.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t
        }
        return null
    })
}