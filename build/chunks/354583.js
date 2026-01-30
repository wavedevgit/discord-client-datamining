/** chunk id: 354583, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => l
});
var r = n(311907),
    i = n(734057),
    a = n(309010);

function l() {
    return (0, r.bG)([a.A, i.A], () => {
        let t = a.A.getVoiceChannelId();
        if (null != t) {
            let e = i.A.getChannel(t);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e
        }
        return null
    })
}