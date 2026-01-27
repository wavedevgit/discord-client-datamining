/** Chunk was on web.js **/
/** chunk id: 421838, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Kl: () => s,
    LF: () => l,
    sF: () => o
});
var r = n(73153),
    i = n(954571),
    a = n(652215);

function o(e) {
    i.default.track(a.HAw.HOTSPOT_HIDDEN, {
        hotspot_location: e
    }), r.h.wait(() => {
        r.h.dispatch({
            type: "HOTSPOT_HIDE",
            location: e
        })
    })
}

function s(e, t) {
    r.h.dispatch({
        type: "HOTSPOT_OVERRIDE_SET",
        location: e,
        enabled: t
    })
}

function l(e) {
    r.h.dispatch({
        type: "HOTSPOT_OVERRIDE_CLEAR",
        location: e
    })
}