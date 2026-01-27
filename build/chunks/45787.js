/** Chunk was on web.js **/
/** chunk id: 45787, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ad: () => i,
    BT: () => s,
    CK: () => l,
    Yd: () => o,
    xs: () => a
});
var r = n(73153);

function i() {
    r.h.dispatch({
        type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN"
    })
}

function a(e) {
    r.h.dispatch({
        type: "MESSAGE_GIFT_INTENT_SHOWN",
        recipientUserId: e
    })
}

function o(e) {
    r.h.dispatch({
        type: "GIFT_INTENT_FLOW_PURCHASED_GIFT",
        recipientUserId: e
    })
}

function s() {
    r.h.dispatch({
        type: "GIFT_UNREAD_NOTIFICATION_DISMISS"
    })
}

function l(e) {
    r.h.dispatch({
        type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS",
        recipientUserId: e
    })
}