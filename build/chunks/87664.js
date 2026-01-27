/** Chunk was on web.js **/
/** chunk id: 87664, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(311907),
    i = n(616356),
    a = n(994500),
    o = n(652215);

function s(e) {
    let t = (0, r.bG)([a.A], () => null != e ? a.A.getRelationshipType(e) : o.eA$.NONE),
        n = (0, r.bG)([i.A], () => null == e ? null : i.A.getAnyDiscoverableStreamForUser(e), [e]);
    return t === o.eA$.BLOCKED ? null : n
}