/** Chunk was on web.js **/
/** chunk id: 633057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(311907),
    i = n(429913),
    a = n(800828);

function o(e) {
    let t = (0, r.bG)([a.A], () => {
        let t = a.A.getGameRelationshipsForUser(e);
        if (0 !== t.length) return t[0].applicationId
    });
    return (0, i.h)(t)
}