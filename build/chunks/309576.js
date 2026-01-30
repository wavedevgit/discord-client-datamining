/** chunk id: 309576, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => a
});
var r = n(73153),
    i = n(15285);

function a(e, t) {
    i.Ay.getSystemServiceStatus(e).state !== t.state && r.h.dispatch({
        type: "SYSTEM_SERVICE_INITIALIZE",
        status: t,
        modules: [e]
    })
}