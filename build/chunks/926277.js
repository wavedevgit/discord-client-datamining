/** chunk id: 926277 params = (module,exports,require) **/
n.d(t, {
    o: () => d,
    r: () => o
});
var i = n(311907),
    a = n(997590),
    r = n(324580),
    l = n(985018);

function s(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A];
    return e === r.Iq ? l.intl.string(l.t.Omu0fS) : t.getCategoryName(e)
}

function o(e) {
    let {
        categoryId: t
    } = e;
    return (0, i.bG)([a.A], () => s(t, [a.A]))
}

function d(e) {
    let {
        categoryIds: t
    } = e;
    return (0, i.cf)([a.A], () => {
        let e = {};
        return t.forEach(t => {
            e[t] = s(t, [a.A])
        }), e
    })
}