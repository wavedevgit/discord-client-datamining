/** chunk id: 398590, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    bz: () => o,
    id: () => i,
    jH: () => a
});
var r = n(73153);

function i(e) {
    r.h.dispatch({
        type: "LAYER_PUSH",
        component: e
    })
}

function a() {
    r.h.dispatch({
        type: "LAYER_POP"
    })
}

function o() {
    r.h.dispatch({
        type: "LAYER_POP_ALL"
    })
}