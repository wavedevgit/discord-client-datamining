/** chunk id: 415539 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(64700),
    r = n(868714),
    i = n(206572),
    l = n(311907),
    o = n(250105),
    s = n(217222);

function _(e, t) {
    let n = (0, r.A)(e),
        _ = (0, i.A)(t),
        u = (0, a.useMemo)(() => (0, o.cT)("user", {
            location: _.location
        }), [_]),
        c = (0, l.yK)([s.A], () => n.flatMap(e => s.A.getEvaluationAndAssignment(e.definition.kind, (0, o.cT)(e.definition.kind, _), e.definition.name, u)), [n, _, u]);
    return (0, a.useMemo)(() => new Map(n.map(e => [e, e.getConfig(_)])), [n, _, c])
}