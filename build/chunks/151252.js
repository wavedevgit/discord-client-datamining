/** Chunk was on web.js **/
/** chunk id: 151252, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => s,
    m: () => a
});
var r = n(885973),
    i = n(746318);
let a = e => (0, r.C)(e) ? {
        enabled: !1
    } : {
        enabled: i.A.getCurrentConfig(e).enabled
    },
    s = e => {
        let t = i.A.useExperiment(e);
        return (0, r.C)(e) ? {
            enabled: !1
        } : {
            enabled: t.enabled
        }
    }