/** Chunk was on web.js **/
/** chunk id: 729394, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => i
});
var r = n(73153);

function i(e) {
    let {
        messageId: t,
        coverImageURL: n
    } = e;
    r.h.dispatch({
        type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
        messageId: t,
        coverImageURL: n
    })
}