/** chunk id: 104217, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => l
});
var i = n(73153);
let l = {
    disableFalsePositiveButton: function(t, e) {
        i.h.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT",
            messageId: e,
            channelId: t
        })
    }
}