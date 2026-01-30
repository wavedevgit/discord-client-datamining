/** chunk id: 647117, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => U
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(990078),
    l = n(319060),
    c = n(397927),
    u = n(212245),
    d = n(724511),
    f = n(850992),
    p = n(151271),
    _ = n(802019),
    h = n(71393),
    m = n(954571),
    g = n(240248),
    E = n(256449),
    y = n(679382),
    b = n(842086),
    O = n(378058),
    v = n(148355),
    A = n(652215),
    I = n(698279),
    S = n(985018),
    T = n(89945);
let C = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    N = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    w = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    R = (0, g.xI)(l.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    P = (0, g.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    D = (0, g.xI)(l.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    L = [C, C, C, C],
    x = (N + w) * 2 + C,
    M = P + 2 * D,
    j = 7,
    k = e => {
        let {
            activeIndex: t,
            stickerPickerCategories: n,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: l,
            setShouldRenderShortcut: f
        } = e, _ = (0, u.p)(), g = (0, p.RQ)(e => "" !== e.searchQuery), E = i.useCallback((e, a, l) => {
            var u, f;
            let p, E = (null == (u = n[0]) ? void 0 : u.type) === b.Z2.FAVORITE,
                C = +!!E,
                w = (null == (f = n[C]) ? void 0 : f.type) === b.Z2.RECENT,
                P = n.length > 0,
                D = n.length;
            if (0 === a && E) return (0, r.jsx)("div", {
                role: "listitem",
                "aria-setsize": D,
                "aria-posinset": a,
                children: (0, r.jsx)(c.DUT, {
                    "aria-label": S.intl.string(S.t.y3LQCG),
                    className: o()(T._0, T.dC, {
                        [T.d8]: P && !E,
                        [T.k1]: !g && E && 0 === t,
                        [T.ls]: !w
                    }),
                    onClick: l,
                    children: (0, r.jsx)(c.Gg5, {
                        size: "custom",
                        color: "currentColor",
                        className: T.AB,
                        height: R,
                        width: R
                    })
                })
            }, "favorites");
            if (a === C && w) return (0, r.jsx)("div", {
                role: "listitem",
                "aria-setsize": D,
                "aria-posinset": a,
                children: (0, r.jsx)(c.DUT, {
                    "aria-label": S.intl.string(S.t.RxAmVC),
                    className: o()(T._0, T.dC, T.ls, {
                        [T.d8]: P && !w,
                        [T.k1]: !g && w && t === C
                    }),
                    onClick: l,
                    children: (0, r.jsx)(c.O4, {
                        size: "custom",
                        color: "currentColor",
                        className: T.AB,
                        height: R,
                        width: R
                    })
                })
            }, "recent");
            let L = t === a,
                x = n[a],
                M = n[a + 1],
                j = null != M && x.type === b.Z2.GUILD && M.type !== b.Z2.GUILD,
                k = x.type === b.Z2.PACK,
                U = "",
                G = null;
            if (x.type === b.Z2.GUILD || x.type === b.Z2.EMPTY_GUILD_UPSELL) {
                let e = h.A.getGuild(x.id);
                null != e && (p = e.id, U = e.name, G = (0, r.jsx)(d.A, {
                    guild: e,
                    isSelected: L
                }))
            } else if (k) {
                let e = y.A.getStickerPack(x.id);
                null != e && (U = e.name, G = (0, r.jsx)(v.A, {
                    disableAnimation: !L || g,
                    size: N,
                    sticker: (0, O.Id)(e)
                }))
            }
            return (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)(s.m, {
                    position: "right",
                    text: U,
                    children: (0, r.jsx)("div", {
                        role: "listitem",
                        "aria-setsize": D,
                        "aria-posinset": a,
                        children: (0, r.jsx)(c.DUT, {
                            "aria-label": U,
                            className: o()(T._0, {
                                [T.ND]: k,
                                [T.Ms]: !g && L && k
                            }),
                            onClick: () => {
                                x.type === b.Z2.PACK && m.default.track(A.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                    location: null == _ ? void 0 : _.location,
                                    tab: I.kx.STICKER,
                                    sticker_pack_id: x.id,
                                    guild_id: p
                                }), l()
                            },
                            children: G
                        })
                    })
                }), j ? (0, r.jsx)("hr", {
                    className: T.ny
                }, "separator") : null]
            }, x.id)
        }, [t, _, g, n]), C = i.useCallback((e, t) => t ? x : 0, []);
        return {
            getScrollOffsetForIndex: C,
            renderCategoryListItem: E,
            rowHeight: i.useCallback((e, t) => {
                let r = n[t],
                    i = n[t + 1];
                return N + (null != i && r.type === b.Z2.GUILD && i.type !== b.Z2.GUILD ? M : w)
            }, [n]),
            onScroll: i.useCallback(e => {
                var t;
                let n = null == (t = a.current) ? void 0 : t.getListDimensions();
                null == n || f(e + n.height - P < l)
            }, [l, a, f])
        }
    },
    U = e => {
        let {
            stickersListRef: t,
            channel: n
        } = e, a = i.useRef(null), [s, l] = i.useState(!0), u = f.bM.useStore(e => e.activeCategoryIndex), d = (0, E.pD)(n), {
            firstStandardStickerCategoryIndex: p,
            firstStandardStickerCategoryOffsetTop: h,
            guildCategoryCount: m,
            hasFirstPartyStickerPacks: g
        } = i.useMemo(() => {
            var e, t;
            let n = d.filter(e => e.type === b.Z2.GUILD).length,
                r = n + +((null == (e = d[0]) ? void 0 : e.type) === b.Z2.RECENT) + +((null == (t = d[0]) ? void 0 : t.type) === b.Z2.FAVORITE),
                i = r * (N + w) - w + M;
            return {
                firstStandardStickerCategoryIndex: r + 1,
                firstStandardStickerCategoryOffsetTop: i,
                guildCategoryCount: n,
                hasFirstPartyStickerPacks: null != d.find(e => e.type === b.Z2.PACK)
            }
        }, [d]);
        i.useLayoutEffect(() => {
            l(m >= j)
        }, [m]);
        let {
            renderCategoryListItem: y,
            rowHeight: O,
            onScroll: v
        } = k({
            activeIndex: u,
            stickerPickerCategories: d,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: h,
            setShouldRenderShortcut: l
        }), A = i.useCallback(e => {
            var t;
            e(p), null == (t = a.current) || t.scrollTo(h)
        }, [p, h]);
        return (0, r.jsx)(_.A, {
            className: T.jv,
            categoryListRef: a,
            expressionsListRef: t,
            store: f.bM,
            listPadding: L,
            onScroll: v,
            renderCategoryListItem: y,
            rowCount: d.length,
            categories: d,
            categoryHeight: O,
            children: e => g && s && (0, r.jsx)(c.DUT, {
                className: o()(T.Fe, {
                    [T.Q6]: !s
                }),
                onClick: () => A(e),
                children: (0, r.jsx)(c.tEP, {
                    size: "md",
                    color: "currentColor"
                })
            })
        })
    }