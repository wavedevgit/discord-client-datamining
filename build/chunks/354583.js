/** chunk id: 354583, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => a
});
var i = t(311907),
    l = t(734057),
    r = t(309010);

function a() {
    return (0, i.bG)([r.A, l.A], () => {
        let e = r.A.getVoiceChannelId();
        if (null != e) {
            let n = l.A.getChannel(e);
            if (n?.isGuildStageVoice()) return n
        }
        return null
    })
}