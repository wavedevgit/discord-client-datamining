/** chunk id: 105530, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => s,
    eY: () => o,
    zF: () => a
});
var r = n(311907),
    i = n(977997),
    a = function(e) {
        return e[e.NONE = 0] = "NONE", e[e.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK", e[e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", e[e.ON_STAGE = 3] = "ON_STAGE", e
    }({});

function o(e) {
    return null == e ? 0 : e.suppress && null != e.requestToSpeakTimestamp ? 1 : e.suppress || null == e.requestToSpeakTimestamp ? 3 * (!e.suppress && null == e.requestToSpeakTimestamp) : 2
}

function s(e, t) {
    return (0, r.bG)([i.A], () => null == e || null == t ? 0 : o(i.A.getVoiceStateForChannel(t, e)), [e, t])
}