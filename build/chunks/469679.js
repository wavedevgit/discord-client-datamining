/** Chunk was on web.js **/
/** chunk id: 469679, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => a
});
var r = n(945810),
    i = n(927813);
let a = (0, r.mj)({
    name: "2026-01-reply-nudge",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        minUserDMAffinity: .6,
        minSinceReceiverMessageMs: 12 * i.A.Millis.HOUR,
        minLatestMessageAgeMs: 12 * i.A.Millis.HOUR
    },
    variations: {
        1: {
            enabled: !0,
            minUserDMAffinity: .6,
            minSinceReceiverMessageMs: 12 * i.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * i.A.Millis.HOUR
        },
        2: {
            enabled: !0,
            minUserDMAffinity: .7,
            minSinceReceiverMessageMs: 12 * i.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * i.A.Millis.HOUR
        },
        3: {
            enabled: !0,
            minUserDMAffinity: .6,
            minSinceReceiverMessageMs: 24 * i.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * i.A.Millis.HOUR
        },
        4: {
            enabled: !0,
            minUserDMAffinity: .7,
            minSinceReceiverMessageMs: 24 * i.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * i.A.Millis.HOUR
        },
        5: {
            enabled: !0,
            minUserDMAffinity: 0,
            minSinceReceiverMessageMs: 5 * i.A.Millis.MINUTE,
            minLatestMessageAgeMs: 5 * i.A.Millis.MINUTE
        }
    }
})