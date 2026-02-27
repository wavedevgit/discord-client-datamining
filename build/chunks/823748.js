/** chunk id: 823748, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Bp: () => A,
    EX: () => h,
    TF: () => p
});
var i = n(64700),
    s = n(311907),
    l = n(71393),
    a = n(576705),
    r = n(363487),
    o = n(665171),
    c = n(488803),
    d = n(522055);

function u(e, t, n) {
    let i = !0 === (0, r.G)(t, e),
        s = (0, c.TS)(e.id, n);
    return i && s
}

function h(e) {
    return (0, s.yK)([l.A, a.A], () => l.A.getGuildsArray().filter(t => u(t, a.A, e)))
}

function A(e) {
    return (0, s.bG)([l.A, a.A], () => l.A.getGuildsArray().some(t => u(t, a.A, e)))
}

function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            shouldFetch: n = !1
        } = t,
        l = (0, s.bG)([d.A], () => {
            if (null == e) return !1;
            let {
                catalog: t
            } = d.A.getGlobalCatalogState();
            return Object.values(t).some(t => t.gameId === e)
        }, [e]),
        a = (0, s.bG)([d.A], () => d.A.shouldFetchGlobalCatalog());
    return i.useEffect(() => {
        null != e && n && a && (0, o.K)()
    }, [e, n, a]), l
}