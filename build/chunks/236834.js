/** chunk id: 236834, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(311907),
    a = n(427157),
    o = n(994500),
    s = n(816733),
    l = n(378135),
    c = n(788868);

function u() {
    let e = (0, l.k)(c.Dw),
        t = (0, i.bG)([s.A], () => s.A.getReferrer(null == e ? void 0 : e.trial_id)),
        n = (0, i.bG)([o.A], () => null == t || o.A.isBlockedOrIgnored(t.id));
    return r.useMemo(() => n || null == t ? null : new a.A(t), [t, n])
}