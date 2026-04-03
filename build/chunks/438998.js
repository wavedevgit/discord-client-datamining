/** chunk id: 438998 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(73153),
    a = n(421838),
    r = n(897513);
let l = {
    init() {
        i.h.subscribe("VOICE_CHANNEL_SELECT", e => {
            let {
                channelId: t
            } = e;
            null == t && a.sF(r._.VOICE_PANEL_INTRODUCTION)
        })
    }
}