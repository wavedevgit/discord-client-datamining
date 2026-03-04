/** chunk id: 582942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(735438),
    r = n.n(s),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(136086),
    x = n(885151),
    g = n(409626),
    h = n(422069),
    f = n(611656),
    j = n(459746),
    p = n(225732),
    _ = n(985018),
    I = n(851822),
    v = n(799864);
let E = e => {
    let {
        game: t,
        onClose: n,
        trackClick: l
    } = e, a = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, i.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        children: (0, i.jsx)(d.DUT, {
            className: v.fS,
            onClick: async () => {
                l(g.Ws.ClickSimilarGame, t.applicationId), (0, d.mMO)(() => Promise.resolve(e => (0, i.jsx)(p.default, {
                    applicationId: t.applicationId,
                    source: g.Ob.SimilarGames,
                    ...e
                }))), await new Promise(e => setTimeout(e, 10)), n()
            },
            children: (0, i.jsx)(j.A, {
                game: t,
                application: a,
                className: v.n1,
                size: j.w.SMALL
            })
        })
    })
};

function A(e) {
    let {
        applicationId: t,
        onClose: n,
        trackAction: l,
        similarGames: s,
        similarGamesError: c
    } = e, u = (0, o.bG)([h.A, m.A], () => {
        let e = void 0 === h.A.getSimilarGames(t) && null == h.A.getSimilarGamesError(t),
            n = s.some(e => m.A.isFetching(e));
        return e || n
    }), g = (0, o.yK)([m.A], () => s.map(e => m.A.getGame(e)).filter(e => null != e).filter(e => (0, f.oS)(e.applicationId)).slice(0, 5));
    return ((0, x.k)(t), (0, x.W)(s), u && null == c) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            className: a()(v.vM, I.bV)
        }), (0, i.jsx)("div", {
            className: a()(I.nM, I.iH),
            children: r().range(0, 5).map(e => (0, i.jsx)("div", {
                className: v.nn
            }, e))
        })]
    }) : (u || 0 !== g.length) && null == c ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(d.Heading, {
            className: I.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: _.intl.string(_.t["6rLyQB"])
        }), (0, i.jsx)("div", {
            className: v.D$,
            children: g.map(e => null != e.supplementalData ? (0, i.jsx)(E, {
                game: e.supplementalData,
                onClose: n,
                trackClick: l
            }, e.applicationId) : null)
        })]
    }) : null
}