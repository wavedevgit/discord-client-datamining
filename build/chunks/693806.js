/** Chunk was on web.js **/
/** chunk id: 693806, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(961350),
    i = n(734057),
    a = n(977997);

function o() {
    let e = a.A.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
        t = null == e ? void 0 : e.channelId;
    return i.A.getChannel(t)
}