/** Chunk was on web.js **/
/** chunk id: 365971, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q2: () => i,
    Xg: () => o,
    rw: () => a
});
var r = n(735438);

function i(e) {
    return e.__DISCORD_WINDOW_ID
}

function a(e) {
    let t = (0, r.uniqueId)("window-");
    return e.__DISCORD_WINDOW_ID = t, t
}

function o() {
    return i(window)
}