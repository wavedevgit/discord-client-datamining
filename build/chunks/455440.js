/** chunk id: 455440, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(638769);
var r = n(64700),
    i = n(56494),
    a = n(26909),
    o = n(555045);

function s(e) {
    let {
        context: t,
        commands: n,
        limit: s = n.length
    } = e, l = (0, o.e)(t), c = (0, i.F)(l), u = r.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
    return r.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, t) => {
        let n = a.Ay.getScoreWithoutLoadingLatest(l, e);
        return a.Ay.getScoreWithoutLoadingLatest(l, t) - n
    }).slice(0, s), [c, u, l, s])
}