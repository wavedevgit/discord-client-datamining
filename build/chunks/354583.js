/** chunk id: 354583 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var l = n(311907),
    i = n(734057),
    r = n(309010);

function a() {
    return (0, l.bG)([r.A, i.A], () => {
        let e = r.A.getVoiceChannelId();
        if (null != e) {
            let t = i.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t
        }
        return null
    })
}