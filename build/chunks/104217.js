/** chunk id: 104217 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(73153);
let r = {
    disableFalsePositiveButton: function(e, t) {
        i.h.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
            messageId: t,
            channelId: e
        })
    }
}