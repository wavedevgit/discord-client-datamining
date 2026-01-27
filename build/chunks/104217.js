/** Chunk was on 92917 **/
/** chunk id: 104217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(73153);
let i = {
    disableFalsePositiveButton: function(e, t) {
        r.h.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
            messageId: t,
            channelId: e
        })
    }
}