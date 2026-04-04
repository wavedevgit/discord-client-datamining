/** chunk id: 415539 params = (module,exports,require) **/
i.d(n, {
    A: () => o
});
var t = i(64700),
    a = i(868714),
    l = i(206572),
    s = i(311907),
    r = i(250105),
    d = i(217222);

function o(e, n) {
    let i = (0, a.A)(e),
        o = (0, l.A)(n),
        c = (0, t.useMemo)(() => (0, r.cT)("user", {
            location: o.location
        }), [o]),
        u = (0, s.yK)([d.A], () => i.flatMap(e => d.A.getEvaluationAndAssignment(e.definition.kind, (0, r.cT)(e.definition.kind, o), e.definition.name, c)), [i, o, c]);
    return (0, t.useMemo)(() => new Map(i.map(e => [e, e.getConfig(o)])), [i, o, u])
}