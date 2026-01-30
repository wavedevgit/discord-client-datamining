/** chunk id: 543531, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Xt: () => o,
    wR: () => i,
    zK: () => a
});
var r = n(73153);

function i(e, t, n) {
    r.h.dispatch({
        type: "ANALYTICS_FEED_ITEM_SEEN",
        id: e,
        feedItemId: t,
        timestampMillis: n
    })
}

function a(e, t, n) {
    r.h.dispatch({
        type: "ANALYTICS_FEED_ITEM_UNSEEN",
        id: e,
        feedItemId: t,
        timestampMillis: n
    })
}

function o(e, t) {
    r.h.dispatch({
        type: "ANALYTICS_FEED_FLUSH",
        id: e,
        force: t
    })
}