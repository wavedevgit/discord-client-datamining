/** chunk id: 415539 params = (module,exports,require) **/
t.d(n, {
    A: () => o
});
var i = t(64700),
    a = t(868714),
    l = t(206572),
    s = t(311907),
    r = t(250105),
    d = t(217222);

function o(e, n) {
    let t = (0, a.A)(e),
        o = (0, l.A)(n),
        c = (0, i.useMemo)(() => (0, r.cT)("user", {
            location: o.location
        }), [o]),
        u = (0, s.yK)([d.A], () => t.flatMap(e => d.A.getEvaluationAndAssignment(e.definition.kind, (0, r.cT)(e.definition.kind, o), e.definition.name, c)), [t, o, c]);
    return (0, i.useMemo)(() => new Map(t.map(e => [e, e.getConfig(o)])), [t, o, u])
}