/** Chunk was on 78528 **/
/** chunk id: 724591, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(827734),
    u = n(192308),
    d = n(397927),
    p = n(442433),
    h = n(379848),
    f = n(976860),
    g = n(871123),
    m = n(733391),
    b = n(832163),
    A = n(44724),
    y = n(849134),
    _ = n(203548),
    O = n(186111),
    j = n(371794),
    v = n(998218),
    x = n(652793),
    E = n(652215),
    C = n(49999),
    S = n(985018),
    I = n(811094);
let N = l.memo(function(e) {
    var t;
    let {
        guild: i,
        selected: N
    } = e, T = l.useRef(null), P = l.useRef(null), w = (0, u.useHasAnyModalOpen)(), R = (0, a.bG)([O.A], () => O.A.hasLayers());
    l.useEffect(() => {
        (0, m.Kh)(i.id)
    }, [i.id]);
    let D = (0, a.bG)([b.A], () => b.A.getAnnouncement(i.id)),
        [M, L] = (0, h.x_)(o.M.GAME_SHOP_NEW_BADGE, i.id, null != (t = null == D ? void 0 : D.id) ? t : ""),
        k = M === o.M.GAME_SHOP_NEW_BADGE;
    l.useEffect(() => {
        N && k && L(C.i.INDIRECT_ACTION)
    }, [L, N, k]);
    let U = l.useCallback(() => {
            var e, t;
            L(C.i.TAKE_ACTION);
            let n = null != (e = null == (t = b.A.getStorefrontState(i.id)) ? void 0 : t.activePage) ? e : 0;
            (0, f.pX)(E.BVt.CHANNELS_GAME_SHOP(i.id, n))
        }, [i.id, L]),
        G = l.useCallback(() => {
            (0, A.X)({
                guildId: i.id,
                forceFetch: k
            })
        }, [i.id, k]),
        B = l.useCallback(() => {
            L(C.i.USER_DISMISS)
        }, [L]),
        V = l.useCallback(e => {
            null != i && (0, p.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("99523").then(n.bind(n, 41614));
                return t => {
                    var n, l;
                    return (0, r.jsx)(e, (n = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, t), l = l = {
                        guild: i
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                    }), n))
                }
            })
        }, [i]),
        F = l.useCallback(() => {
            var e;
            null == (e = T.current) || e.onMouseEnter(null, 500)
        }, [T]),
        H = l.useCallback((e, t, n, l) => (0, r.jsx)(x.G, {
            innerClassName: e,
            ref: P,
            id: "game-shop-".concat(i.id),
            renderIcon: e => (0, r.jsx)(d.U1X, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: s()(e, n)
            }),
            text: (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                className: s()(I.UU, t),
                children: (null == i ? void 0 : i.id) === (0, g.zf)() ? S.intl.string(S.t.xFQAPs) : S.intl.string(S.t.vyaWs7)
            }),
            selected: N,
            onMouseDown: G,
            onClick: U,
            onContextMenu: V,
            trailing: (0, r.jsxs)(r.Fragment, {
                children: [k && (0, r.jsx)(d.LpS, {
                    text: S.intl.string(S.t.y2b7CA),
                    color: c.A.colors.BACKGROUND_BRAND.css
                }), l]
            })
        }), [i.id, N, G, U, V, k]),
        K = l.useMemo(() => {
            let e = null != D && null != D.assetId ? v.A.toURLSafe((0, j.YE)(D.applicationId, D.assetId, 128, "webp")) : void 0,
                t = null != D && null != D.backgroundImageAssetId ? v.A.toURLSafe((0, j.YE)(D.applicationId, D.backgroundImageAssetId, 128, "webp")) : void 0;
            if (null != e) return {
                imageUrl: e,
                backgroundImageUrl: t
            }
        }, [D]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.A, {
            ref: T,
            children: H
        }), w || R || !k || null == D ? null : (0, r.jsx)(y.A, {
            onActionClick: U,
            onActionMouseDown: G,
            onRender: F,
            onRequestClose: B,
            targetElementRef: P,
            skuImageDetails: K,
            title: S.intl.string(S.t["7PvvS9"]),
            body: S.intl.formatToPlainString(S.t["9J4h1a"], {
                applicationName: D.applicationName
            })
        })]
    })
})