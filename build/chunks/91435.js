/** Chunk was on web.js **/
/** chunk id: 91435, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => i
});
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-10-fetch-promotions-endpoint",
    defaultConfig: {
        enabled: !1
    },
    variations: {
        1: {
            enabled: !0
        }
    }
});

function i(e) {
    let {
        location: t
    } = e;
    return r.getConfig({
        location: t
    }).enabled
}