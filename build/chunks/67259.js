/** chunk id: 67259, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = new Map;

function l(e) {
    let {
        channelId: t,
        enabled: n
    } = e;
    s.set(t, n)
}

function c(e) {
    let {
        channelId: t
    } = e;
    s.delete(t)
}
class u extends(r = i.Ay.Store) {
    getAlsoSendToChannel(e) {
        return !!s.has(e) && s.get(e)
    }
}
o(u, "displayName", "ThreadsAlsoSendToChannelStore");
let d = new u(a.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: l,
    CREATE_PENDING_SCHEDULED_MESSAGE: c
})