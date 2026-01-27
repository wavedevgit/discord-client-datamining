/** Chunk was on 43629 **/
/** chunk id: 469679, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => s
});
var i = n(945810),
    r = n(927813);
let s = (0, i.mj)({
    name: "2026-01-reply-nudge",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        minUserDMAffinity: .6,
        minSinceReceiverMessageMs: 12 * r.A.Millis.HOUR,
        minLatestMessageAgeMs: 12 * r.A.Millis.HOUR
    },
    variations: {
        1: {
            enabled: !0,
            minUserDMAffinity: .6,
            minSinceReceiverMessageMs: 12 * r.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * r.A.Millis.HOUR
        },
        2: {
            enabled: !0,
            minUserDMAffinity: .7,
            minSinceReceiverMessageMs: 12 * r.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * r.A.Millis.HOUR
        },
        3: {
            enabled: !0,
            minUserDMAffinity: .6,
            minSinceReceiverMessageMs: 24 * r.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * r.A.Millis.HOUR
        },
        4: {
            enabled: !0,
            minUserDMAffinity: .7,
            minSinceReceiverMessageMs: 24 * r.A.Millis.HOUR,
            minLatestMessageAgeMs: 12 * r.A.Millis.HOUR
        },
        5: {
            enabled: !0,
            minUserDMAffinity: 0,
            minSinceReceiverMessageMs: 5 * r.A.Millis.MINUTE,
            minLatestMessageAgeMs: 5 * r.A.Millis.MINUTE
        }
    }
})