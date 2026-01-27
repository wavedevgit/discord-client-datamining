/** Chunk was on 39048 **/
/** chunk id: 520057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    w: () => o
});
var r = n(136722),
    i = n(311907),
    l = n(71393),
    s = n(576705),
    a = n(652215);

function o(e) {
    return (0, i.bG)([l.A, s.A], () => {
        let t = l.A.getGuild(e);
        if (null == t) return !1;
        let n = s.A.getGuildPermissions(t);
        return null != n && r.zy(n, a.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS)
    })
}