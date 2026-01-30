/** chunk id: 584682, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s,
    j: () => l
});
var r = n(311907),
    i = n(967198),
    a = n(181079),
    o = n(652215);

function s(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuildId());
    return null != t ? t : e.getGuildId()
}

function l(e) {
    return i.A.getGuildId() !== o.YYv ? e.getGuildId() : a.A.isFavorite(e.id) || e.isThread() && a.A.isFavorite(e.parent_id) ? o.YYv : e.getGuildId()
}