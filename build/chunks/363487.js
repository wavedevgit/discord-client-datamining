/** Chunk was on web.js **/
/** chunk id: 363487, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    G: () => s
});
var r = n(311907),
    i = n(71393),
    a = n(576705),
    o = n(818348);

function s(e, t) {
    return null == t || null == e.getGuildPermissions(t) ? null : e.can(o.xB.ADMINISTRATOR, t)
}

function l(e) {
    return (0, r.bG)([a.A, i.A], () => s(a.A, i.A.getGuild(e)))
}