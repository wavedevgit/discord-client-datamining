/** chunk id: 729394 params = (module,exports,require) **/
n.d(t, {
    K: () => a
});
var i = n(73153);

function a(e) {
    let {
        messageId: t,
        coverImageURL: n
    } = e;
    i.h.dispatch({
        type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
        messageId: t,
        coverImageURL: n
    })
}