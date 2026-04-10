/** chunk id: 415539 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(64700),
    i = n(868714),
    l = n(206572),
    r = n(311907),
    s = n(250105),
    o = n(217222);

function c(e, t) {
    let n = (0, i.A)(e),
        c = (0, l.A)(t),
        d = (0, a.useMemo)(() => (0, s.cT)("user", {
            location: c.location
        }), [c]),
        u = (0, r.yK)([o.A], () => n.flatMap(e => o.A.getEvaluationAndAssignment(e.definition.kind, (0, s.cT)(e.definition.kind, c), e.definition.name, d)), [n, c, d]);
    return (0, a.useMemo)(() => new Map(n.map(e => [e, e.getConfig(c)])), [n, c, u])
}