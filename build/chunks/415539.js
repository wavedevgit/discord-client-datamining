/** chunk id: 415539 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(64700),
    a = n(868714),
    l = n(206572),
    s = n(311907),
    r = n(250105),
    o = n(217222);

function c(e, t) {
    let n = (0, a.A)(e),
        c = (0, l.A)(t),
        d = (0, i.useMemo)(() => (0, r.cT)("user", {
            location: c.location
        }), [c]),
        u = (0, s.yK)([o.A], () => n.flatMap(e => o.A.getEvaluationAndAssignment(e.definition.kind, (0, r.cT)(e.definition.kind, c), e.definition.name, d)), [n, c, d]);
    return (0, i.useMemo)(() => new Map(n.map(e => [e, e.getConfig(c)])), [n, c, u])
}