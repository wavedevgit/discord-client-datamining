/** Chunk was on 20545 **/
/** chunk id: 415539, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(114821), n(339614), n(896048);
var i = n(64700),
    l = n(868714),
    r = n(206572),
    s = n(311907),
    a = n(250105),
    d = n(217222);

function u(e, t) {
    let n = (0, l.A)(e),
        u = (0, r.A)(t),
        o = (0, s.yK)([d.A], () => n.flatMap(e => d.A.getEvaluationAndAssignment(e.definition.kind, (0, a.cT)(e.definition.kind, u), e.definition.name)), [n, u]);
    return (0, i.useMemo)(() => new Map(n.map(e => [e, e.getConfig(u)])), [n, u, o])
}