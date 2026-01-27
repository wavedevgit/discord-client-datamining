/** Chunk was on web.js **/
/** chunk id: 47199, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(544420),
    u = n(964486),
    d = n(627363),
    f = n(587895),
    p = n(429913),
    _ = n(524799),
    h = n(409626),
    m = n(265565),
    g = n(796812),
    E = n(379979);

function y(e) {
    let {
        applicationId: t,
        name: n,
        setPopoutRef: a,
        onClose: y,
        source: b
    } = e, O = (0, p.h)(t), v = (0, s.bG)([_.A], () => _.A.getGame(t)), {
        isFetching: A,
        fetchFailed: I,
        isFetchingDetectable: S,
        detectableFetchFailed: T
    } = (0, s.cf)([f.A, _.A], () => ({
        isFetching: f.A.isFetchingApplication(t),
        fetchFailed: f.A.didFetchingApplicationFail(t),
        isFetchingDetectable: _.A.isFetching(t),
        detectableFetchFailed: _.A.didFetchingFail(t)
    })), C = i.useRef(null), N = i.useMemo(() => (0, h.u9)(), []);
    i.useEffect(() => {
        c.A.getDetectableGamesSupplemental([t])
    }, [t]);
    let w = i.useCallback(() => {
        d.Ay.fetchApplication(t), c.A.getDetectableGamesSupplemental([t])
    }, [t]);
    i.useEffect(() => {
        null == a || a(null == C ? void 0 : C.current)
    }, [C, a]), (0, u.Ay)(() => {
        var e;
        (0, h.rw)({
            source: b,
            viewId: N,
            applicationId: t,
            gameName: null != (e = null == v ? void 0 : v.name) ? e : "",
            profileType: h.HV.MiniProfile
        })
    });
    let R = i.useMemo(() => A || S ? (0, r.jsx)("div", {
        className: o()(E.k, E.d),
        children: (0, r.jsx)(l.y$y, {})
    }) : I || T || null == O || null == v ? (0, r.jsx)("div", {
        className: E.k,
        children: (0, r.jsx)(m.A, {
            name: n,
            onRetry: w
        })
    }) : (0, r.jsx)("div", {
        className: E.k,
        children: (0, r.jsx)(g.Ay, {
            application: O,
            detectedGame: v,
            onClose: y
        })
    }), [A, S, I, T, O, v, n, w, y]);
    return (0, r.jsx)(l.lGe, {
        ref: C,
        "aria-label": null == O ? void 0 : O.name,
        children: R
    })
}