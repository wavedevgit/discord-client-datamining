/** chunk id: 438998 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(73153),
    l = n(421838),
    r = n(897513);
let a = {
    init() {
        i.h.subscribe("VOICE_CHANNEL_SELECT", e => {
            let {
                channelId: t
            } = e;
            null == t && l.sF(r._.VOICE_PANEL_INTRODUCTION)
        })
    }
}