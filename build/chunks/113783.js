/** Chunk was on web.js **/
/** chunk id: 113783, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E5: () => s,
    J2: () => c,
    uy: () => u,
    zy: () => l
}), n(896048);
var r = n(311907),
    i = n(996439),
    a = n(63995),
    o = n(69407);

function s(e, t) {
    let [n] = (0, r.bG)([a.A], () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)], [e, t], i.D);
    return n
}

function l(e, t) {
    return (0, r.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t])
}

function c(e) {
    let [t] = (0, r.bG)([a.A], () => [a.A.getMutableRequestToSpeakParticipants(e), a.A.getRequestToSpeakParticipantsVersion(e)], [e], i.D);
    return t
}

function u(e) {
    return (0, r.bG)([a.A], () => a.A.getMutableParticipants(e, o.ip.SPEAKER).filter(e => e.type === o.wY.VOICE).length, [e])
}