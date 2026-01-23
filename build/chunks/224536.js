/** Chunk was on web.js **/
/** chunk id: 224536, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(976860),
    i = n(71393),
    a = n(379610),
    s = n(652215);
let o = {
    onOpenHubInvite(e) {
        let {
            guild: t
        } = e;
        null != t && (null != i.A.getGuild(t.id) ? (0, r.pX)(s.BVt.CHANNEL(t.id)) : (0, a.A)(e.code))
    }
}