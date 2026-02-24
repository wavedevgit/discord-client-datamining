/** chunk id: 438998, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(73153),
    r = n(421838),
    l = n(897513);
let a = {
    init() {
        i.h.subscribe("VOICE_CHANNEL_SELECT", e => {
            let {
                channelId: t
            } = e;
            null == t && r.sF(l._.VOICE_PANEL_INTRODUCTION)
        })
    }
}