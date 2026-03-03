/** chunk id: 582942, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => N
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(735438),
    o = i.n(r),
    c = i(311907),
    d = i(990078),
    u = i(397927),
    m = i(544420),
    x = i(587895),
    g = i(524799),
    h = i(409626),
    f = i(422069),
    j = i(611656),
    v = i(459746),
    p = i(225732),
    A = i(985018),
    E = i(851822),
    I = i(799864);
let _ = e => {
    let {
        game: t,
        onClose: i,
        trackClick: l
    } = e, a = (0, c.bG)([x.A], () => x.A.getApplication(t.applicationId));
    return (0, n.jsx)(d.m, {
        asContainer: !0,
        text: t.name,
        children: (0, n.jsx)(u.DUT, {
            className: I.fS,
            onClick: async () => {
                l(h.Ws.ClickSimilarGame, t.applicationId), (0, u.mMO)(() => Promise.resolve(e => (0, n.jsx)(p.default, {
                    applicationId: t.applicationId,
                    source: h.Ob.SimilarGames,
                    ...e
                }))), await new Promise(e => setTimeout(e, 10)), i()
            },
            children: (0, n.jsx)(v.A, {
                game: t,
                application: a,
                className: I.n1,
                size: v.w.SMALL
            })
        })
    })
};

function N(e) {
    let {
        applicationId: t,
        onClose: i,
        trackAction: a,
        similarGames: r,
        similarGamesError: d
    } = e, x = (0, c.bG)([f.A, g.A], () => {
        let e = void 0 === f.A.getSimilarGames(t) && null == f.A.getSimilarGamesError(t),
            i = r.some(e => g.A.isFetching(e));
        return e || i
    }), h = (0, c.yK)([g.A], () => r.map(e => g.A.getGame(e)).filter(e => null != e).filter(e => (0, j.oS)(e.applicationId)).slice(0, 5));
    return (l.useEffect(() => {
        r.length > 0 && m.A.getDetectableGamesSupplemental([t, ...r])
    }, [t, r]), x && null == d) ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)("div", {
            className: s()(I.vM, E.bV)
        }), (0, n.jsx)("div", {
            className: s()(E.nM, E.iH),
            children: o().range(0, 5).map(e => (0, n.jsx)("div", {
                className: I.nn
            }, e))
        })]
    }) : (x || 0 !== h.length) && null == d ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(u.Heading, {
            className: E.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: A.intl.string(A.t["6rLyQB"])
        }), (0, n.jsx)("div", {
            className: I.D$,
            children: h.map(e => (0, n.jsx)(_, {
                game: e,
                onClose: i,
                trackClick: a
            }, e.applicationId))
        })]
    }) : null
}