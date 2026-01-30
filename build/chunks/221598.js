/** chunk id: 221598, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var r = n(73153);
let l = {
    setCallChatToastsEnabled(e, t) {
        r.h.dispatch({
            type: "CALL_CHAT_TOASTS_SET_ENABLED",
            channelId: e,
            toastsEnabled: t
        })
    }
}