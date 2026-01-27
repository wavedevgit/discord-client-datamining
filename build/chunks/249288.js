/** Chunk was on 41727 **/
/** chunk id: 249288, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r, l = n(311907),
    i = n(73153);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let a = {
        toastsEnabledForChannel: {}
    },
    o = a;
class c extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        o = null != e ? e : a
    }
    getToastsEnabled(e) {
        var t;
        return null == (t = o.toastsEnabledForChannel[e]) || t
    }
    getState() {
        return o
    }
}
s(c, "displayName", "CallChatToastsStore"), s(c, "persistKey", "CallChatToasts");
let u = new c(i.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function(e) {
        let {
            channelId: t,
            toastsEnabled: n
        } = e;
        o.toastsEnabledForChannel[t] = n
    },
    LOGOUT: function() {
        o.toastsEnabledForChannel = {}
    }
})