/** Chunk was on web.js **/
/** chunk id: 885973, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => a
});
var r = n(287809),
    i = n(827152);
let a = e => {
    let t = r.default.getCurrentUser();
    return !(null != t && t.isStaff()) && !i.A.getCurrentConfig(e).enabled
}