/** Chunk was on web.js **/
/** chunk id: 275589, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => eh
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(942381),
    o = n(311907),
    s = n(319060),
    l = n(397927),
    c = n(537652),
    u = n(212245),
    d = n(793574),
    f = n(688810),
    p = n(962125),
    _ = n(724511),
    h = n(850992),
    m = n(151271),
    g = n(60587),
    E = n(887695),
    y = n(286509),
    b = n(253932),
    O = n(71393),
    v = n(287809),
    A = n(954571),
    I = n(240248),
    S = n(410558),
    T = n(361670),
    C = n(631576),
    N = n(891090),
    w = n(679382),
    R = n(842086),
    P = n(378058),
    D = n(148355),
    L = n(102001),
    x = n(672182),
    M = n(582721),
    j = n(652215),
    k = n(698279),
    U = n(985018),
    G = n(780465),
    F = n(911385);

function V(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            V(e, t, n[t])
        })
    }
    return e
}

function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let W = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    K = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    z = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    q = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    Z = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    Q = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    X = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    J = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    $ = (0, I.xI)(s.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    ee = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    et = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    en = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    er = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    ei = ee + 2 * en + er,
    ea = et + 2 * en + er,
    eo = 20,
    es = [z, Z, Q, X],
    el = [q, Z, Q, X],
    ec = 12,
    eu = (0, I.xI)(s.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    ed = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
    ef = e => {
        let {
            onSuggestionClick: t
        } = e;
        return (0, r.jsx)("div", {
            className: G.yB,
            children: ed.map(e => (0, r.jsx)(l.DUT, {
                className: G.x_,
                onClick: () => t(e),
                children: (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: e
                })
            }, e))
        })
    },
    ep = e => {
        let {
            onSelectSticker: t,
            channel: n,
            currentUser: r
        } = e, a = (0, u.p)(), o = (0, m.RQ)(e => e.searchQuery);
        return {
            handleStickerInspect: i.useCallback(e => {
                let {
                    visibleRowIndex: t,
                    columnIndex: n,
                    gridSectionIndex: r
                } = e;
                h.bM.setActiveCategoryIndex(r), h.bM.setInspectedExpressionPosition(n, t, g.t.MOUSE_EVENT), e.type === R.op.STICKER && h.bM.setSearchPlaceholder(e.sticker.name)
            }, []),
            handleSelect: i.useCallback((e, i) => {
                if (e.type !== R.op.STICKER) return;
                let {
                    sticker: s
                } = e;
                if (null == s) return;
                let l = Y(B({}, a.location), {
                    object: "" === o ? j.ZSU.STICKER_PICKER_VIEW_ALL : j.ZSU.STICKER_SEARCH_VIEW_ALL
                });
                if (null != s && !(0, T.G7)(s, r, n)) {
                    let e = (0, P.Xw)(s);
                    (0, T.W$)(s, r, n) === T.Ux.SENDABLE_WITH_PREMIUM && (0, S.U)(!0), e && T.Ux.SENDABLE_WITH_BOOSTED_GUILD;
                    return
                }
                i ? (0, P.o1)(s.id) ? (0, C.vr)(s.id) : ((0, N.Dt)({
                    sticker: s,
                    location: Y(B({}, l), {
                        object: j.ZSU.STICKER
                    })
                }), (0, C.uK)(s.id)) : t(e)
            }, [a.location, o, r, n, t])
        }
    },
    e_ = e => {
        let {
            collapsedStickersCategories: t,
            gridWidth: n,
            onSelectSticker: a,
            getStickerItemProps: s,
            getStickerRowProps: c,
            gutterWidth: d,
            inspectedStickerPosition: f,
            isScrolling: p,
            isUsingKeyboardNavigation: h,
            stickersGrid: m,
            stickersCategories: g,
            filteredStickers: E,
            ownedStickerPacks: I,
            channel: S
        } = e, T = (0, u.p)(), C = (0, o.bG)([v.default], () => v.default.getCurrentUser()), {
            handleStickerInspect: N,
            handleSelect: x
        } = ep({
            onSelectSticker: a,
            channel: S,
            currentUser: C
        }), [F, V] = i.useState(!1), B = i.useCallback(e => {
            b.tP.updateSetting(Array.from(e))
        }, []), H = i.useCallback(e => {
            let t = m[e];
            return null != t ? (0, r.jsx)(M.A, {
                getStickerItemProps: s,
                getStickerRowProps: c,
                gutterWidth: d,
                inspectedStickerPosition: f,
                isScrolling: p,
                isUsingKeyboardNavigation: h,
                onInspect: N,
                onSelect: x,
                rowIndex: e,
                stickerClassName: G.yI,
                stickerDescriptors: t,
                stickerSize: n > W ? ee : et,
                preferAnimation: n <= K,
                ownedStickerPacks: I,
                isDisplayingIndividualStickers: !0,
                channel: S,
                currentUser: C
            }, e) : null
        }, [m, s, c, d, f, p, h, N, x, n, I, S, C]), Y = i.useCallback((e, t) => (0, r.jsx)("div", {
            children: t
        }, e), []), z = i.useCallback(function(e) {
            let {
                isStickerPack: n = !0
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = new Set(t), i = t.has(e);
            i ? r.delete(e) : r.add(e), A.default.track(j.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                location: null == T ? void 0 : T.location,
                tab: k.kx.STICKER,
                collapsed: !i,
                sticker_pack_id: n ? e : null
            }), B(r)
        }, [T, t, B]), q = i.useCallback(e => {
            let n = g[e];
            if (null != E) {
                let {
                    sendable: t,
                    sendableWithPremium: n
                } = E;
                if (0 === e && t.length > 0) return null;
                let i = t.length > 0 && n.length > 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [i ? (0, r.jsx)("div", {
                        className: G.yF,
                        children: (0, r.jsx)(l.cGx, {})
                    }) : null, (0, r.jsx)(y.A, {
                        className: G.jH,
                        "aria-label": U.intl.string(U.t.wbfJFh),
                        children: U.intl.string(U.t["05Z/0l"])
                    }, "stickers-you-might-like-header")]
                })
            }
            switch (n.type) {
                case R.Z2.FAVORITE:
                    return (0, r.jsx)(y.A, {
                        className: G.jH,
                        "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                            categoryName: n.name
                        }),
                        icon: (0, r.jsx)(l.Gg5, {
                            size: "xs",
                            color: "currentColor"
                        }),
                        isCollapsed: t.has(n.id),
                        onClick: () => z(n.id, {
                            isStickerPack: !1
                        }),
                        children: n.name
                    }, "header-".concat(n.id));
                case R.Z2.RECENT:
                    return (0, r.jsx)(y.A, {
                        className: G.jH,
                        "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                            categoryName: n.name
                        }),
                        icon: (0, r.jsx)(l.O4, {
                            size: "xs",
                            color: "currentColor"
                        }),
                        isCollapsed: t.has(n.id),
                        onClick: () => z(n.id, {
                            isStickerPack: !1
                        }),
                        children: n.name
                    }, "header-".concat(n.id));
                case R.Z2.GUILD:
                case R.Z2.EMPTY_GUILD_UPSELL: {
                    let e = O.A.getGuild(n.id);
                    if (null == e) return null;
                    return (0, r.jsx)(y.A, {
                        className: G.jH,
                        "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                            categoryName: e.name
                        }),
                        icon: (0, r.jsx)(_.A, {
                            guild: e,
                            height: 16,
                            width: 16
                        }),
                        isCollapsed: t.has(e.id),
                        onClick: () => z(e.id),
                        children: e.name
                    }, "h".concat(e.id))
                }
                case R.Z2.PACK: {
                    let e = w.A.getStickerPack(n.id);
                    if (null == e) return null;
                    return (0, r.jsx)(y.A, {
                        className: G.jH,
                        "aria-label": U.intl.formatToPlainString(U.t["7lLCjZ"], {
                            categoryName: e.name
                        }),
                        icon: (0, r.jsx)(D.A, {
                            disableAnimation: !0,
                            size: ec,
                            sticker: (0, P.Id)(e)
                        }),
                        isCollapsed: t.has(e.id),
                        onClick: () => z(e.id),
                        children: e.name
                    }, "h".concat(e.id))
                }
            }
        }, [t, g, z, E]), Z = i.useCallback(e => {
            if (null != E) {
                let {
                    sendable: t,
                    sendableWithPremium: n
                } = E;
                return 0 === e && t.length > 0 ? 0 : $ + (t.length > 0 && n.length > 0 ? J : 0)
            }
            return $
        }, [E]);
        return {
            renderRow: H,
            renderSection: Y,
            renderSectionHeader: q,
            sectionHeaderHeight: Z,
            renderSectionFooter: i.useCallback(e => {
                let n = g[e],
                    i = t.has(n.id);
                return n.type !== R.Z2.EMPTY_GUILD_UPSELL || null != E || i ? null : (0, r.jsx)(L.A, {
                    className: G.Ij,
                    guildId: n.id,
                    channel: S,
                    shouldTrackUpsellViewed: !F,
                    setTrackedUpsellViewed: V
                }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
            }, [g, t, E, S, F]),
            sectionFooterHeight: i.useCallback(e => {
                let n = g[e],
                    r = t.has(n.id);
                return n.type !== R.Z2.EMPTY_GUILD_UPSELL || r ? 0 : eu
            }, [g, t])
        }
    },
    eh = i.forwardRef(function(e, t) {
        let {
            collapsedStickersCategories: n,
            gridWidth: s,
            filteredStickers: l,
            getStickerItemProps: u,
            getStickerRowProps: _,
            gutterWidth: g,
            isUsingKeyboardNavigation: y,
            onSelectSticker: b,
            rowCount: O,
            rowCountBySection: v,
            stickersCategories: A,
            stickersGrid: I,
            channel: S
        } = e, T = i.useRef(!1), C = i.useRef(null), [N, R] = h.bM.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], a.x), {
            analyticsLocations: P
        } = (0, f.Ay)(d.A.STICKER_PICKER), D = (0, m.RQ)(e => e.searchQuery), L = (0, o.bG)([w.A], () => w.A.getPremiumPacks()), {
            renderRow: M,
            renderSection: j,
            renderSectionFooter: k,
            sectionFooterHeight: V,
            renderSectionHeader: B,
            sectionHeaderHeight: H
        } = e_({
            collapsedStickersCategories: n,
            gridWidth: s,
            stickersCategories: A,
            stickersGrid: I,
            isScrolling: T,
            isUsingKeyboardNavigation: y,
            onSelectSticker: b,
            getStickerItemProps: u,
            getStickerRowProps: _,
            gutterWidth: g,
            inspectedStickerPosition: R,
            filteredStickers: l,
            ownedStickerPacks: i.useMemo(() => new Set(L.map(e => e.id)), [L]),
            channel: S
        }), Y = (0, E.Fk)({
            activeCategoryIndex: N,
            isScrolling: T,
            listRef: C,
            onActiveCategoryIndexChange: h.bM.setActiveCategoryIndex,
            scrollOffset: eo,
            searchQuery: D
        });
        return (0, E.FV)({
            searchQuery: D,
            activeCategoryIndex: N,
            listRef: C
        }), i.useImperativeHandle(t, () => ({
            scrollTo: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = C.current) ? void 0 : e.scrollTo(...n)
            },
            getRowDescriptors: () => {
                var e, t;
                return null != (e = null == (t = C.current) ? void 0 : t.getRowDescriptors()) ? e : []
            },
            getSectionDescriptors: () => {
                var e, t;
                return null != (e = null == (t = C.current) ? void 0 : t.getSectionDescriptors()) ? e : []
            },
            scrollToSectionTop: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = C.current) ? void 0 : e.scrollToSectionTop(...n)
            },
            scrollRowIntoView: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = C.current) ? void 0 : e.scrollRowIntoView(...n)
            },
            getScrollerNode: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = C.current) ? void 0 : e.getScrollerNode(...n)
            },
            scrollIntoViewNode: function() {
                for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return null == (e = C.current) ? void 0 : e.scrollIntoViewNode(...n)
            },
            getListDimensions: function() {
                for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return null != (e = null == (t = C.current) ? void 0 : t.getListDimensions(...r)) ? e : {
                    height: -1,
                    totalHeight: -1
                }
            }
        }), []), (0, r.jsx)(f.f5, {
            value: P,
            children: (0, r.jsxs)("div", {
                className: G.iE,
                children: [null != l && 0 === l.sendable.length && 0 === l.sendableWithPremium.length ? (0, r.jsx)(c.A, {
                    message: U.intl.string(U.t["zc+LQd"]),
                    className: G.__invalid_noSearchResultsContainer,
                    noResultsImageURL: F,
                    suggestions: (0, r.jsx)(ef, {
                        onSuggestionClick: e => (0, m.Ri)(e, !0)
                    })
                }) : (0, r.jsx)(p.A, {
                    role: "none presentation",
                    listPadding: null != l ? el : es,
                    onScroll: Y,
                    renderRow: M,
                    renderSection: null == l ? j : void 0,
                    renderSectionHeader: B,
                    renderSectionFooter: k,
                    rowCount: O,
                    rowCountBySection: v,
                    rowHeight: s > W ? ei : ea,
                    sectionHeaderHeight: H,
                    sectionFooterHeight: V,
                    stickyHeaders: !0,
                    ref: C
                }), (0, r.jsx)(x.A, {
                    stickersGrid: I
                })]
            })
        })
    })