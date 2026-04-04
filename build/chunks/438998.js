/** chunk id: 438998 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(73153),
    a = n(421838),
    l = n(897513);
let r = {
    init() {
        i.h.subscribe("VOICE_CHANNEL_SELECT", e => {
            let {
                channelId: t
            } = e;
            null == t && a.sF(l._.VOICE_PANEL_INTRODUCTION)
        })
    }
}