/** Chunk was on web.js **/
/** chunk id: 283823, original params: e,t,n (module,exports,require) **/
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
    c = n(793574),
    u = n(688810),
    d = n(250527),
    f = n(837011),
    p = n(90084),
    _ = n(635853),
    h = n(42780),
    m = n(576055),
    g = n(363551);
let E = 50001;

function y(e) {
    let {
        guildId: t,
        name: n,
        setPopoutRef: a,
        onClose: y
    } = e, {
        analyticsLocations: b
    } = (0, u.Ay)(c.A.GUILD_PROFILE), {
        guildProfile: O,
        fetchGuildProfile: v,
        fetchStatus: A
    } = (0, p.u)(t), I = (0, s.bG)([f.A], () => f.A.getErrorCode(t)), S = i.useRef(null), T = i.useCallback(() => {
        v(!0)
    }, [v]);
    i.useEffect(() => {
        v()
    }, [v]), i.useEffect(() => {
        (0, d.sf)(t, b)
    }, [t, b]), i.useEffect(() => {
        null == a || a(null == S ? void 0 : S.current)
    }, [S, a]);
    let C = i.useMemo(() => A === f.X.NOT_FETCHED || A === f.X.FETCHING ? (0, r.jsx)("div", {
        className: o()(g.k, g.d),
        children: (0, r.jsx)(l.y$y, {})
    }) : null == O && I === E ? (0, r.jsx)("div", {
        className: g.k,
        children: (0, r.jsx)(m.A, {
            guildId: t,
            name: n
        })
    }) : null == O ? (0, r.jsx)("div", {
        className: g.k,
        children: (0, r.jsx)(_.A, {
            name: n,
            onRetry: T
        })
    }) : (0, r.jsx)("div", {
        className: g.k,
        children: (0, r.jsx)(h.Ay, {
            profile: O,
            onClose: y
        })
    }), [A, O, I, t, n, T, y]);
    return (0, r.jsx)(l.lGe, {
        ref: S,
        "aria-label": null == O ? void 0 : O.name,
        children: C
    })
}