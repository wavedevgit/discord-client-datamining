/** chunk id: 926277 params = (module,exports,require) **/
n.d(t, {
    o: () => d,
    r: () => o
});
var i = n(311907),
    l = n(997590),
    r = n(324580),
    a = n(985018);

function s(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A];
    return e === r.Iq ? a.intl.string(a.t.Omu0fS) : t.getCategoryName(e)
}

function o(e) {
    let {
        categoryId: t
    } = e;
    return (0, i.bG)([l.A], () => s(t, [l.A]))
}

function d(e) {
    let {
        categoryIds: t
    } = e;
    return (0, i.cf)([l.A], () => {
        let e = {};
        return t.forEach(t => {
            e[t] = s(t, [l.A])
        }), e
    })
}