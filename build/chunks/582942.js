/** chunk id: 582942, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => I
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(735438),
    c = i.n(r),
    o = i(311907),
    d = i(990078),
    u = i(397927),
    m = i(544420),
    x = i(587895),
    g = i(524799),
    h = i(409626),
    f = i(422069),
    j = i(611656),
    p = i(459746),
    v = i(225732),
    A = i(985018),
    _ = i(728528),
    N = i(470078);
let E = e => {
    let {
        game: t,
        onClose: i,
        trackClick: l
    } = e, a = (0, o.bG)([x.A], () => x.A.getApplication(t.applicationId));
    return (0, n.jsx)(d.m, {
        asContainer: !0,
        text: t.name,
        children: (0, n.jsx)(u.DUT, {
            className: N.fS,
            onClick: async () => {
                l(h.Ws.ClickSimilarGame, t.applicationId), (0, u.mMO)(() => Promise.resolve(e => (0, n.jsx)(v.default, {
                    applicationId: t.applicationId,
                    source: h.Ob.SimilarGames,
                    ...e
                }))), await new Promise(e => setTimeout(e, 10)), i()
            },
            children: (0, n.jsx)(p.A, {
                game: t,
                application: a,
                className: N.n1,
                size: p.w.SMALL
            })
        })
    })
};

function I(e) {
    let {
        applicationId: t,
        onClose: i,
        trackAction: a,
        similarGames: r,
        similarGamesError: d
    } = e, x = (0, o.bG)([f.A, g.A], () => {
        let e = void 0 === f.A.getSimilarGames(t) && null == f.A.getSimilarGamesError(t),
            i = r.some(e => g.A.isFetching(e));
        return e || i
    }), h = (0, o.yK)([g.A], () => r.map(e => g.A.getGame(e)).filter(e => null != e).filter(e => (0, j.oS)(e.applicationId)).slice(0, 5));
    return (l.useEffect(() => {
        r.length > 0 && m.A.getDetectableGamesSupplemental([t, ...r])
    }, [t, r]), x && null == d) ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)("div", {
            className: s()(N.vM, _.bV)
        }), (0, n.jsx)("div", {
            className: s()(_.nM, _.iH),
            children: c().range(0, 5).map(e => (0, n.jsx)("div", {
                className: N.nn
            }, e))
        })]
    }) : (x || 0 !== h.length) && null == d ? (0, n.jsxs)("div", {
        children: [(0, n.jsx)(u.Heading, {
            className: _.bV,
            variant: "text-md/semibold",
            color: "text-strong",
            children: A.intl.string(A.t["6rLyQB"])
        }), (0, n.jsx)("div", {
            className: N.D$,
            children: h.map(e => (0, n.jsx)(E, {
                game: e,
                onClose: i,
                trackClick: a
            }, e.applicationId))
        })]
    }) : null
}