/** Chunk was on web.js **/
/** chunk id: 184264, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(942381),
    l = n(311907),
    c = n(3203),
    u = n(990078),
    d = n(332779),
    f = n(151271),
    p = n(617617),
    _ = n(234320),
    h = n(184761),
    m = n(355622),
    g = n(545428),
    E = n(652215),
    y = n(698279),
    b = n(985018),
    O = n(111314);

function v(e, t) {
    let {
        disabled: n,
        type: a,
        channel: v
    } = e, [A, I] = i.useState(!1), S = (0, l.bG)([p.A], () => {
        var e, t;
        return A && Object.values(null != (e = null == (t = p.A.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : t.gifs) ? e : {}).length <= 2
    }), [T, C, N, w] = (0, f.RQ)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.x), R = i.useRef(0), P = i.useCallback(() => {
        I(!0), clearTimeout(R.current), R.current = setTimeout(() => {
            I(!1), R.current = 0
        }, 2e3)
    }, []);
    (0, _.Vo)({
        event: E.jej.FAVORITE_GIF,
        handler: P
    });
    let D = i.useCallback(() => {
            (0, f.r$)(y.kx.GIF, a, v.id)
        }, [a, v.id]),
        {
            Component: L,
            events: x,
            play: M
        } = (0, c.V)(),
        j = (0, h.p)(d.T),
        k = a === m.oU.NORMAL ? j : void 0;
    if (n) return null;
    let U = T === y.kx.GIF && C === a && w === v.id;
    return (0, r.jsx)(u.m, {
        keyboardShortcut: S ? void 0 : k,
        text: b.intl.string(S ? b.t.mE2e8A : b.t.nffuyb),
        shouldShow: S || null != k,
        forceOpen: S,
        children: (0, r.jsx)("div", {
            ref: t,
            className: o()(y.VQ, O.UD),
            children: (0, r.jsx)(g.A, {
                className: O.x6,
                onMouseEnter: x.onMouseEnter,
                onMouseLeave: x.onMouseLeave,
                onClick: () => {
                    D(), M()
                },
                isActive: U,
                pulse: A,
                "aria-label": b.intl.string(b.t.PtVpk2),
                "aria-expanded": U,
                "aria-haspopup": "dialog",
                "aria-controls": N,
                children: (0, r.jsx)(L, {
                    size: "refresh_sm",
                    color: "currentColor"
                })
            })
        })
    })
}
let A = i.memo(i.forwardRef(v))