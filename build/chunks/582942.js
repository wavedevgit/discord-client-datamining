/** chunk id: 582942 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(735438),
    s = n.n(r),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(587895),
    m = n(311043),
    f = n(454908),
    h = n(409626),
    x = n(422069),
    g = n(611656),
    p = n(459746),
    _ = n(225732),
    v = n(985018),
    A = n(141535),
    b = n(192389);
let E = e => {
    let {
        game: t,
        onClose: n,
        trackClick: a
    } = e, i = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId));
    return (0, l.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        children: (0, l.jsx)(d.DUT, {
            className: b.fS,
            onClick: async () => {
                a(h.Ws.ClickSimilarGame, t.applicationId), (0, d.mMO)(() => Promise.resolve(e => (0, l.jsx)(_.default, {
                    applicationId: t.applicationId,
                    source: h.Ob.SimilarGames,
                    ...e
                }))), await new Promise(e => setTimeout(e, 10)), n()
            },
            children: (0, l.jsx)(p.A, {
                game: t,
                application: i,
                className: b.n1,
                size: p.w.SMALL
            })
        })
    })
};

function j(e) {
    let {
        applicationId: t,
        onClose: n,
        trackAction: a,
        similarGames: r,
        similarGamesError: c
    } = e, u = (0, o.bG)([x.A, m.A], () => {
        let e = void 0 === x.A.getSimilarGames(t) && null == x.A.getSimilarGamesError(t),
            n = r.some(e => m.A.isFetching(e));
        return e || n
    }), h = (0, o.yK)([m.A], () => r.map(e => m.A.getGame(e)).filter(e => null != e).filter(e => (0, g.oS)(e.applicationId)).slice(0, 5));
    return ((0, f.I)(t), (0, f.x)(r), u && null == c) ? (0, l.jsxs)("div", {
        children: [(0, l.jsx)("div", {
            className: i()(b.vM, A.bV)
        }), (0, l.jsx)("div", {
            className: i()(A.nM, A.iH),
            children: s().range(0, 5).map(e => (0, l.jsx)("div", {
                className: b.nn
            }, e))
        })]
    }) : (u || 0 !== h.length) && null == c ? (0, l.jsxs)("div", {
        children: [(0, l.jsx)(d.Heading, {
            className: A.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: v.intl.string(v.t["6rLyQB"])
        }), (0, l.jsx)("div", {
            className: b.D$,
            children: h.map(e => (0, l.jsx)(E, {
                game: e,
                onClose: n,
                trackClick: a
            }, e.applicationId))
        })]
    }) : null
}