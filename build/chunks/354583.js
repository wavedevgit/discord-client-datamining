/** chunk id: 354583 params = (module,exports,require) **/
n.d(e, {
    A: () => s
});
var i = n(311907),
    l = n(734057),
    r = n(309010);

function s() {
    return (0, i.bG)([r.A, l.A], () => {
        let t = r.A.getVoiceChannelId();
        if (null != t) {
            let e = l.A.getChannel(t);
            if (e?.isGuildStageVoice()) return e
        }
        return null
    })
}