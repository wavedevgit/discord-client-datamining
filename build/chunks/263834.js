/** Chunk was on web.js **/
/** chunk id: 263834, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => a
});
var r = n(73153),
    i = n(865116);

function a(e, t) {
    let n = "boolean" == typeof t ? t : !i.Ay.get(e);
    r.h.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n
    })
}