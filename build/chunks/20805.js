/** chunk id: 20805, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $R: () => g,
    Lf: () => f,
    P: () => l,
    Tq: () => c,
    UQ: () => o,
    aj: () => h,
    fe: () => d,
    p6: () => u,
    qQ: () => a,
    yl: () => m,
    zD: () => s
});
var r = n(681154),
    i = n(808380);

function a(e) {
    return (null == e ? void 0 : e.content_type) === r.ContentInventoryEntryType.PLAYED_GAME
}

function o(e) {
    return (null == e ? void 0 : e.content_type) === r.ContentInventoryEntryType.TOP_GAME
}

function s(e) {
    return a(e) || o(e)
}

function l(e) {
    return (null == e ? void 0 : e.extra) != null && "application_id" in (null == e ? void 0 : e.extra)
}

function c(e) {
    return (null == e ? void 0 : e.content_type) === r.ContentInventoryEntryType.LISTENED_SESSION
}

function u(e) {
    return (null == e ? void 0 : e.content_type) === r.ContentInventoryEntryType.TOP_ARTIST
}

function d(e) {
    return c(e) || u(e)
}

function f(e) {
    return (null == e ? void 0 : e.content_type) === r.ContentInventoryEntryType.WATCHED_MEDIA
}

function p(e) {
    return !!s(e) && e.extra.platform === i.Y.XBOX
}

function _(e) {
    return !!s(e) && e.extra.platform === i.Y.PLAYSTATION
}

function h(e) {
    return p(e) || _(e)
}

function m(e) {
    return (null == e ? void 0 : e.content_type) === r.ContentInventoryEntryType.LAUNCHED_ACTIVITY
}

function g(e) {
    return s(e) || c(e) || f(e) || l(e)
}