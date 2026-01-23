/** Chunk was on 42944 **/
/** chunk id: 415539, original params: e,a,n (module,exports,require) **/
n.d(a, {
    A: () => c
}), n(114821), n(339614), n(896048);
var t = n(64700),
    l = n(868714),
    i = n(206572),
    r = n(311907),
    s = n(250105),
    o = n(217222);

function c(e, a) {
    let n = (0, l.A)(e),
        c = (0, i.A)(a),
        d = (0, r.yK)([o.A], () => n.flatMap(e => o.A.getEvaluationAndAssignment(e.definition.kind, (0, s.cT)(e.definition.kind, c), e.definition.name)), [n, c]);
    return (0, t.useMemo)(() => new Map(n.map(e => [e, e.getConfig(c)])), [n, c, d])
}