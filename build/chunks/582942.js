/** chunk id: 582942 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(735438),
    s = n.n(r),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(136086),
    x = n(885151),
    _ = n(409626),
    g = n(422069),
    f = n(611656),
    p = n(459746),
    h = n(225732),
    v = n(985018),
    A = n(728528),
    j = n(470078);
let I = e => {
    let {
        game: t,
        onClose: n,
        trackClick: l
    } = e, i = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, a.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        children: (0, a.jsx)(d.DUT, {
            className: j.fS,
            onClick: async () => {
                l(_.Ws.ClickSimilarGame, t.applicationId), (0, d.mMO)(() => Promise.resolve(e => (0, a.jsx)(h.default, {
                    applicationId: t.applicationId,
                    source: _.Ob.SimilarGames,
                    ...e
                }))), await new Promise(e => setTimeout(e, 10)), n()
            },
            children: (0, a.jsx)(p.A, {
                game: t,
                application: i,
                className: j.n1,
                size: p.w.SMALL
            })
        })
    })
};

function b(e) {
    let {
        applicationId: t,
        onClose: n,
        trackAction: l,
        similarGames: r,
        similarGamesError: c
    } = e, u = (0, o.bG)([g.A, m.A], () => {
        let e = void 0 === g.A.getSimilarGames(t) && null == g.A.getSimilarGamesError(t),
            n = r.some(e => m.A.isFetching(e));
        return e || n
    }), _ = (0, o.yK)([m.A], () => r.map(e => m.A.getGame(e)).filter(e => null != e).filter(e => (0, f.oS)(e.applicationId)).slice(0, 5));
    return ((0, x.k)(t), (0, x.W)(r), u && null == c) ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
            className: i()(j.vM, A.bV)
        }), (0, a.jsx)("div", {
            className: i()(A.nM, A.iH),
            children: s().range(0, 5).map(e => (0, a.jsx)("div", {
                className: j.nn
            }, e))
        })]
    }) : (u || 0 !== _.length) && null == c ? (0, a.jsxs)("div", {
        children: [(0, a.jsx)(d.Heading, {
            className: A.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: v.intl.string(v.t["6rLyQB"])
        }), (0, a.jsx)("div", {
            className: j.D$,
            children: _.map(e => null != e.supplementalData ? (0, a.jsx)(I, {
                game: e.supplementalData,
                onClose: n,
                trackClick: l
            }, e.applicationId) : null)
        })]
    }) : null
}