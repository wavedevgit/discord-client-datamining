/** Chunk was on web.js **/
/** chunk id: 487626, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => c,
    w: () => l
}), n(896048), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    o = n(734057),
    s = n(403362);

function l(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = i()(o.A.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
        l = i()(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(s.Vq).uniq().map(e => o.A.getChannel(e)).filter(s.Vq).sortBy("position").value(),
        c = new Set(l.map(e => e.id)),
        u = n.filter(e => !e.isCategory() && (null == e.parent_id || !c.has(e.parent_id)));
    for (let e of (u = i().sortBy(u, e => e.isGuildVocal() ? e.position + 1e4 : e.position), l)) {
        r || u.push(e);
        let o = t.has(e.id) ? a[e.id] : n.filter(t => t.parent_id === e.id);
        o = i().sortBy(null != o ? o : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), u.push(...o)
    }
    return u
}

function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, a.yK)([o.A], () => {
        let r = Array.from(t).map(e => o.A.getChannel(e)).filter(s.Vq);
        return l(e, t, r, n)
    })
}