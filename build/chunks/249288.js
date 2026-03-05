/** chunk id: 249288, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(311907),
    s = n(73153);
let l = {
        toastsEnabledForChannel: {}
    },
    a = l;
class r extends i.Ay.PersistedStore {
    static displayName = "CallChatToastsStore";
    static persistKey = "CallChatToasts";
    initialize(e) {
        a = e ?? l
    }
    getToastsEnabled(e) {
        return a.toastsEnabledForChannel[e] ?? !0
    }
    getState() {
        return a
    }
}
let o = new r(s.h, {
    CALL_CHAT_TOASTS_SET_ENABLED: function(e) {
        let {
            channelId: t,
            toastsEnabled: n
        } = e;
        a.toastsEnabledForChannel[t] = n
    },
    LOGOUT: function() {
        a.toastsEnabledForChannel = {}
    }
})