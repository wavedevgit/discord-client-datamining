/** chunk id: 775505, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ed
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(607399),
    u = n(311907),
    d = n(838677),
    f = n(319060),
    p = n(397927),
    _ = n(537652),
    h = n(212245),
    m = n(688810),
    g = n(962125),
    E = n(850992),
    y = n(151271),
    b = n(60587),
    O = n(240864),
    v = n(887695),
    A = n(286509),
    I = n(450510),
    S = n(526292),
    T = n(89366),
    C = n(756349),
    N = n(202639),
    w = n(414872),
    R = n(253932),
    P = n(287809),
    D = n(954571),
    L = n(690521),
    x = n(474090),
    M = n(927578),
    j = n(240248),
    k = n(822123),
    U = n(535622),
    G = n(724511),
    F = n(484333),
    V = n(923861),
    B = n(732139),
    H = n(652215),
    Y = n(698279),
    W = n(788868),
    K = n(985018),
    z = n(586305);
let q = 0,
    Z = 0,
    Q = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    X = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    J = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    $ = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    ee = (0, j.xI)(f.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    et = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    en = 16,
    er = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    ei = 41,
    ea = 33,
    eo = e => e + 2 * er,
    es = e => {
        let {
            collapsedSections: t,
            diversitySurrogate: n,
            emojiGrid: a,
            emojiSize: s,
            onEmojiSelect: c,
            onSelectSoundmoji: f,
            searchQuery: _,
            sectionDescriptors: m,
            setCollapsedSections: g,
            getEmojiItemProps: O,
            getEmojiRowProps: v,
            isScrolling: T,
            isUsingKeyboardNavigation: N,
            allowAnimatedEmoji: R,
            channelGuildId: P,
            channelId: x,
            messageId: M,
            isBurstReaction: j,
            listHeaderClassName: W,
            activeSectionIndex: q,
            upsellGlowOpacity: er,
            emojiListRef: eo
        } = e, es = (0, h.p)(), el = i.useRef(H.An1), ec = i.useMemo(() => "" !== n ? d.A.convert.toCodePoint(n) : "", [n]), eu = (0, C.A)({
            location: "PremiumBrandRefreshCategorySection"
        }), ed = i.useCallback(e => {
            let t = m[e],
                n = m[e + 1];
            return e >= m.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked
        }, [m]), ef = i.useCallback(e => {
            if (e >= m.length - 1) return !1;
            let t = m[e],
                n = m[e + 1];
            return !t.isNitroLocked && n.isNitroLocked
        }, [m]), ep = i.useCallback(function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                r = new Set(t),
                i = t.has(e);
            i ? r.delete(e) : r.add(e), null != n && D.default.track(H.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                location: es.location,
                tab: Y.kx.EMOJI,
                collapsed: !i,
                guild_id: n.id
            }), e === B.R2.SOUNDMOJI && D.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
                collapsed: !i
            }), g(r)
        }, [es, t, g]), e_ = i.useCallback(e => {
            let {
                columnIndex: t,
                visibleRowIndex: n
            } = e, r = e.type === F.bm.SOUNDMOJI ? null : e.type === F.bm.EMOJI ? (0, L.N)(e.emoji) : e.name;
            el.current !== H.An1 && window.cancelAnimationFrame(el.current), el.current = window.requestAnimationFrame(() => {
                E.Om.setInspectedExpressionPosition(t, n, b.t.MOUSE_EVENT), E.Om.setSearchPlaceholder(r), el.current = H.An1
            })
        }, []), eh = (0, u.bG)([I.HP], () => I.HP.hasHotspot(I._2.FAVORITE_EMOJI_TOOLTIP), []), em = i.useMemo(() => l().memoize((e, t) => {
            let n = a[e],
                i = m[t.sectionIndex],
                o = () => {
                    var e;
                    null == (e = eo.current) || e.scrollToSectionTop(t.sectionIndex, {
                        animate: !0
                    })
                };
            return (0, r.jsx)(V.A, {
                emojiDescriptors: n,
                emojiSize: s,
                surrogateCodePoint: ec,
                onInspect: e_,
                onSelect: c,
                onSelectSoundmoji: f,
                getEmojiItemProps: O,
                getEmojiRowProps: v,
                isScrolling: T,
                isUsingKeyboardNavigation: N,
                rowIndex: e,
                allowAnimatedEmoji: R,
                showEmojiFavoriteTooltip: eh,
                channelGuildId: P,
                category: i.sectionId,
                selectedItemClassName: z.__invalid_selectedItem,
                channelId: x,
                messageId: M,
                isBurstReaction: j,
                inNitroLockedSection: i.isNitroLocked,
                handleScrollUpOnSectionCollapse: o
            }, e)
        }), [a, m, s, ec, e_, c, f, O, v, T, N, R, eh, P, x, M, j, eo]);
        i.useEffect(() => () => {
            var e, t;
            return null == (t = em.cache) || null == (e = t.clear) ? void 0 : e.call(t)
        }, [em]);
        let eg = i.useMemo(() => l().memoize(e => {
                let n = m[e];
                if (null == n) return;
                let {
                    guild: i,
                    categoryId: a,
                    type: s,
                    sectionId: l
                } = n;
                if (s === B.s.SEARCH_RESULTS) return;
                let c = s === B.s.GUILD ? null != i ? (0, r.jsx)(G.A, {
                        guild: i,
                        height: en,
                        width: en
                    }) : null : null != a ? (0, r.jsx)(U.A, {
                        categoryId: a,
                        height: en,
                        width: en,
                        size: "custom"
                    }) : null,
                    u = null == i ? void 0 : i.name;
                null != a && (u = (0, k.Nu)(a, null == i ? void 0 : i.name));
                let d = q === e,
                    f = n.isNitroLocked,
                    _ = f && !d,
                    h = f && d,
                    g = s === B.s.SOUNDMOJI ? (0, r.jsx)(p.DUT, {
                        className: z.f3,
                        onClick: () => {
                            (0, y.U)(Y.kx.SOUNDBOARD), D.default.track(H.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK)
                        },
                        children: K.intl.string(K.t.rUEjBe)
                    }) : void 0;
                return (0, r.jsx)(A.A, {
                    className: o()(z.wx, W, {
                        [z.RA]: _,
                        [z.sp]: h
                    }),
                    icon: c,
                    isCollapsed: t.has(l),
                    onClick: () => ep(l, i),
                    trailing: g,
                    children: u
                }, l)
            }), [m, t, ep, W, q]),
            eE = (0, S.k0)(),
            ey = i.useCallback((e, n) => {
                let i = m[e],
                    a = ef(e),
                    s = ed(e);
                return (0, r.jsx)("div", {
                    className: o()(z.Wy, {
                        [z.YD]: e === m.length - 1,
                        [z.jl]: t.has(i.sectionId),
                        [z.cW]: i.isNitroLocked,
                        [z.N4]: eu,
                        [z.T5]: a || s
                    }),
                    children: n
                }, e)
            }, [t, m, ef, ed, eu]),
            eb = i.useCallback(e => ef(e) ? eE ? (0, r.jsx)(w.ap, {}) : (0, r.jsx)(w.Ay, {
                glowOpacity: er,
                enableBrandRefresh: eu
            }) : ed(e) ? (0, r.jsx)("div", {
                className: o()(z.pQ, {
                    [z.N4]: eu
                })
            }) : null, [er, ef, ed, eE, eu]),
            eO = i.useCallback(e => ef(e) ? ei : ed(e) ? ea : 0, [ef, ed]),
            ev = i.useCallback(e => {
                var n;
                return e === m.length - 1 || t.has(null == (n = m[e]) ? void 0 : n.sectionId) || ef(e) || ed(e) ? 0 : et
            }, [t, m, ef, ed]);
        return {
            listPadding: i.useMemo(() => ["" !== _ ? $ : Q, X, J, Z], [_]),
            renderRow: em,
            renderSection: ey,
            renderSectionHeader: eg,
            renderSectionFooter: eb,
            sectionMarginBottom: ev,
            sectionHeaderHeight: i.useCallback(e => m[e].type === B.s.SEARCH_RESULTS ? 0 : ee, [m]),
            sectionFooterHeight: eO
        }
    },
    el = i.memo(function(e) {
        let {
            diversitySurrogate: t,
            emojiGrid: n,
            emojiListRef: a,
            emojiSize: o,
            onEmojiSelect: s,
            onSelectSoundmoji: l,
            setUpsellConfigs: d,
            sectionDescriptors: f,
            rowCountBySection: p,
            collapsedSections: b,
            setCollapsedSections: O,
            getEmojiItemProps: A,
            getEmojiRowProps: I,
            rowCount: S,
            isUsingKeyboardNavigation: C,
            channelGuildId: w,
            channelId: L,
            messageId: j,
            isBurstReaction: k,
            listHeaderClassName: U
        } = e, G = i.useRef(!1), V = E.Om.useStore(e => e.activeCategoryIndex), B = (0, y.RQ)(e => e.searchQuery), Y = R.Sf.useSetting(), Z = (0, u.bG)([P.default], () => P.default.getCurrentUser()), Q = (0, x.ki)(Z), {
            location: X
        } = (0, h.p)(), {
            analyticsLocations: J
        } = (0, m.Ay)(), [$, ee] = i.useState(0), [et, en] = i.useState(!1), [er, ei] = i.useState(0), {
            listPadding: ea,
            renderRow: el,
            renderSection: eu,
            renderSectionHeader: ed,
            renderSectionFooter: ef,
            sectionMarginBottom: ep,
            sectionHeaderHeight: e_,
            sectionFooterHeight: eh
        } = es({
            collapsedSections: b,
            diversitySurrogate: t,
            emojiGrid: n,
            emojiSize: o,
            onEmojiSelect: s,
            onSelectSoundmoji: l,
            searchQuery: B,
            sectionDescriptors: f,
            setCollapsedSections: O,
            getEmojiItemProps: A,
            getEmojiRowProps: I,
            isScrolling: G,
            isUsingKeyboardNavigation: C,
            allowAnimatedEmoji: Y,
            channelGuildId: w,
            channelId: L,
            messageId: j,
            isBurstReaction: k,
            listHeaderClassName: U,
            activeSectionIndex: $,
            upsellGlowOpacity: er,
            emojiListRef: a
        }), em = e => {
            ee(e), "" === B && E.Om.setActiveCategoryIndex(e)
        }, eg = (0, v.ci)({
            listRef: a,
            searchQuery: B,
            nitroLockedSectionStates: f,
            setUpsellGlowOpacity: ei
        }), eE = (0, v.Fk)({
            activeCategoryIndex: V,
            isScrolling: G,
            listRef: a,
            onActiveCategoryIndexChange: em,
            scrollOffset: q,
            searchQuery: B,
            disableForSearch: !1
        });
        (0, v.FV)({
            searchQuery: B,
            activeCategoryIndex: V,
            listRef: a
        });
        let ey = i.useCallback(e => {
                eg(e), eE(e), ec({
                    emojiListRef: a,
                    sectionDescriptors: f,
                    scrollTop: e,
                    searchQuery: B,
                    setShowUpsell: en
                })
            }, [eg, eE, a, f, B, en]),
            eb = f.length > 0;

        function eO() {
            let e = (0, M.Dd)(W.PremiumTypes.TIER_2);
            return K.intl.format(K.t.gMVjeS, {
                nitroTierName: e,
                onClick: () => {
                    d({
                        type: F.a2.PREMIUM,
                        emojiDescriptor: void 0
                    })
                }
            })
        }

        function ev() {
            var e;
            let t = (0, T.qD)();
            return null != (e = (0, M.LE)(t, W.pe.TIER_2)) ? e : K.intl.string(K.t.BmJkbd)
        }
        return i.useEffect(() => {
            et && D.default.track(H.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.EMOJI_PICKER_FLOATING_UPSELL,
                location: X,
                location_stack: J
            })
        }, [X, J, et]), i.useEffect(() => {
            "" !== B && (ei(0), en(!1))
        }, [B]), (0, r.jsxs)("div", {
            className: z.AD,
            children: [eb ? (0, r.jsx)(g.A, {
                role: "none presentation",
                className: z.p_,
                listPadding: ea,
                onScroll: ey,
                renderRow: el,
                renderSection: eu,
                renderSectionHeader: ed,
                renderSectionFooter: ef,
                rowCount: S,
                rowCountBySection: p,
                rowHeight: eo(o),
                sectionHeaderHeight: e_,
                sectionMarginBottom: ep,
                sectionFooterHeight: eh,
                stickyHeaders: !0,
                ref: a
            }) : (0, r.jsx)(_.A, {
                message: K.intl.string(K.t.IxxiKF),
                className: z.BZ
            }), Q || c.Fr ? null : (0, r.jsx)(N.d, {
                showUpsell: et,
                text: eO(),
                button: ev(),
                buttonAnalyticsObject: {
                    section: H.JJy.EMOJI_PICKER_FLOATING_UPSELL
                }
            })]
        })
    }),
    ec = l().throttle(eu, 300, {
        leading: !1,
        trailing: !0
    });

function eu(e) {
    let {
        emojiListRef: t,
        sectionDescriptors: n,
        scrollTop: r,
        searchQuery: i,
        setShowUpsell: a
    } = e;
    a((0, O.s)({
        listRef: t,
        searchQuery: i,
        nitroLockedSectionStates: n,
        scrollTop: r
    }).areOnlyNitroLockedSectionsVisible)
}
let ed = el