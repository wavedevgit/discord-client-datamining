/** Chunk was on web.js **/
/** chunk id: 338821, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ef,
    B: () => ec
}), n(896048), n(30146);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(110259),
    l = n(311907),
    c = n(397927),
    u = n(442433),
    d = n(537652),
    f = n(212245),
    p = n(793574),
    _ = n(688810),
    h = n(139286),
    m = n(915089),
    g = n(724511),
    E = n(850992),
    y = n(151271),
    b = n(836963),
    O = n(89366),
    v = n(105713),
    A = n(202639),
    I = n(414872),
    S = n(421162),
    T = n(523006),
    C = n(253932),
    N = n(383501),
    w = n(287809),
    R = n(977997),
    P = n(147925),
    D = n(954571),
    x = n(927578),
    L = n(209932),
    j = n(807348),
    M = n(766708),
    k = n(536432),
    U = n(102597),
    G = n(904054),
    V = n(147472),
    F = n(918530),
    B = n(114028),
    H = n(862933),
    Y = n(985417),
    W = n(797179),
    K = n(652215),
    z = n(698279),
    q = n(788868),
    Z = n(985018),
    X = n(426889);

function Q(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            Q(e, t, n[t])
        })
    }
    return e
}

function $(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function ee(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let et = 16,
    en = 48,
    er = 32,
    ei = 8,
    ea = 32 + I.kg - ei,
    es = 150,
    eo = "3",
    el = {
        [j.Cx.SEARCH]: p.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
        [j.Cx.DEFAULTS]: p.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
        [j.Cx.GUILD]: p.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
        [j.Cx.FAVORITES]: p.A.SOUNDBOARD_FAVORITES_SECTION,
        [j.Cx.RECENTLY_HEARD]: p.A.SOUNDBOARD_RECENTLY_HEARD_SECTION,
        [j.Cx.FREQUENTLY_USED]: p.A.SOUNDBOARD_FREQUENTLY_USED_SECTION
    };

function ec(e, t, n) {
    return null == n && e.type === j.Cx.GUILD && !t || e.type === j.Cx.GUILD && e.guild.id !== n && !t
}

function eu(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: i,
        isSectionNitroLocked: a,
        showNitroDivider: o,
        enablePickerUpsellPremiumBrandRefresh: l
    } = e;

    function u() {
        switch (t.type) {
            case j.Cx.FAVORITES:
                return (0, r.jsx)(c.Gg5, {
                    size: "xs",
                    color: "currentColor",
                    className: X.nr
                });
            case j.Cx.RECENTLY_HEARD:
                return (0, r.jsx)(c.O4, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: X.nr
                });
            case j.Cx.FREQUENTLY_USED:
                return (0, r.jsx)(c.Uy2, {
                    className: X.nr
                });
            case j.Cx.GUILD:
                return (0, r.jsx)(g.A, {
                    guild: t.guild,
                    height: et,
                    width: et
                });
            case j.Cx.DEFAULTS:
                return (0, r.jsx)(c.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: X.nr
                });
            case j.Cx.SEARCH:
                return (0, r.jsx)(c.$p$, {
                    size: "md",
                    color: "currentColor",
                    className: X.nr
                })
        }
    }

    function d() {
        switch (t.type) {
            case j.Cx.FAVORITES:
                return Z.intl.string(Z.t.k8fFjp);
            case j.Cx.RECENTLY_HEARD:
                return Z.intl.string(Z.t["8i/+SA"]);
            case j.Cx.FREQUENTLY_USED:
                return Z.intl.string(Z.t["+cGVV6"]);
            case j.Cx.GUILD:
                return t.guild.name;
            case j.Cx.DEFAULTS:
                return Z.intl.string(Z.t.Rtvk9X);
            case j.Cx.SEARCH:
                return Z.intl.string(Z.t["zkoeq/"])
        }
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [o && (0, r.jsx)(I.Ay, {
            colorOpacity: .35,
            glowOpacity: .35,
            className: X.yH,
            enableBrandRefresh: l
        }), (0, r.jsx)("div", {
            className: s()(X.hd, {
                [X.Jb]: a,
                [X.VD]: a,
                [X.N4]: l
            }),
            children: (0, r.jsx)(c.DUT, {
                className: X.bV,
                onClick: i,
                "aria-expanded": !n,
                children: (0, r.jsxs)("div", {
                    className: X.M2,
                    children: [u(), (0, r.jsx)(c.Heading, {
                        variant: "text-sm/semibold",
                        color: "none",
                        className: X.Gf,
                        children: d()
                    }), (0, r.jsx)(P.A, {
                        className: X.nr,
                        direction: n ? P.A.Directions.RIGHT : P.A.Directions.DOWN
                    })]
                })
            })
        })]
    })
}

function ed() {
    return (0, r.jsx)(d.A, {
        message: Z.intl.string(Z.t.bgDdNK)
    })
}

function ef(e) {
    let {
        guildId: t,
        channel: a,
        containerWidth: d,
        onClose: g,
        onSelect: I,
        shouldValidateSelectedSound: P = !1,
        suppressPlaySound: Q = !1,
        shouldShowUpsell: $ = !0,
        gridNotice: et,
        soundButtonOverlay: ei,
        listPadding: ef,
        renderHeader: ep,
        defaultSoundsOnly: e_ = !1,
        inExpressionPicker: eh,
        analyticsSource: em,
        enablePickerUpsellPremiumBrandRefresh: eg
    } = e, {
        audioRef: eE
    } = i.useContext(T.A), {
        analyticsLocations: ey
    } = (0, _.Ay)(), {
        analyticsLocations: eb
    } = (0, _.Ay)(p.A.PREMIUM_UPSELL), {
        location: eO
    } = (0, f.p)(), ev = i.useMemo(() => ee(J({}, eO), {
        section: K.JJy.SOUNDBOARD_SOUND_PICKER
    }), [eO]), [eA, eI] = i.useState(null), eS = (0, l.bG)([w.default], () => w.default.getCurrentUser()), eT = (0, x.TW)(eS, q.PremiumTypes.TIER_2), eC = (0, l.bG)([R.A], () => {
        var e;
        return R.A.getVoiceState(t, null != (e = null == eS ? void 0 : eS.id) ? e : K.dJq)
    }), eN = (null == eC ? void 0 : eC.selfDeaf) || (null == eC ? void 0 : eC.mute) || (null == eC ? void 0 : eC.suppress), ew = (0, y.RQ)(e => e.searchQuery), eR = null != ew && "" !== ew, eP = (0, m.GV)(), eD = M.r.useConfig({
        location: "SoundboardSoundGrid"
    }), {
        categories: ex,
        availableSounds: eL,
        soundCounts: ej
    } = (0, F.Ay)(a, {
        moveDefaultsToBottom: eD.enabled
    }, e_), [eM, ek] = i.useState([]), eU = (0, F.Ip)(ex, eM, ew), eG = (0, y.RQ)(e => e.isNitroLockedSectionVisible), eV = i.useMemo(() => eU.filter(e => e.items.length > 0), [eU]), eF = i.useMemo(() => eV.findLastIndex(e => !!(0, x.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked), [eV]), eB = !eT && $ && -1 !== eF, eH = !eT && eD.enabled && !eD.bottomBar && ex.length > 6, eY = C.b0.useSetting(), eW = i.useMemo(() => new Set(eY), [eY]), eK = null == a, ez = x.Ay.canUseCustomCallSounds(eS), eq = i.useCallback(e => {
        eW.has(e) ? eW.delete(e) : eW.add(e), C.b0.updateSetting(Array.from(eW))
    }, [eW]), eZ = i.useCallback((e, t, n, r) => {
        if (null != I && !P) return I(e, n);
        let i = (0, k.Ir)(eS, e, a, !1);
        if (null != I && P && i) I(e, n);
        else if (!Q && i && (0, k.Au)(a)) {
            var s;
            (0, k.Ak)(e, null != (s = null == a ? void 0 : a.id) ? s : K.dJq, t, r), eR && D.default.track(K.HAw.SEARCH_RESULT_SELECTED, {
                search_type: K.I4_.SOUNDBOARD,
                channel_id: null == a ? void 0 : a.id,
                query: ew,
                location_stack: t
            })
        } else {
            if ((0, k.Ir)(eS, e, a)) return;
            $ && eI(e)
        }
    }, [Q, eS, a, $, eR, ew, I, P]), eX = i.useCallback((e, t) => {
        switch (e.item.type) {
            case j.uq.SOUND:
                var n;
                let r = null != (n = el[null == e ? void 0 : e.category]) ? n : null,
                    i = null == e ? void 0 : e.item.index;
                return eZ(e.item.sound, null == r ? ey : [...ey, r], (null == t ? void 0 : t.shiftKey) !== !0, i);
            case j.uq.ADD_SOUND:
                return g(), (0, W.A)(e.item.guild.id)
        }
    }, [ey, eZ, g]), eQ = i.useCallback((e, n, i, o, l) => {
        let c = eV[i.sectionIndex],
            u = $ && ec(c.categoryInfo, eT, t) && eB;
        return (0, r.jsx)("ul", ee(J({}, n), {
            className: s()(X.a, {
                [X.uL]: u,
                [X.N4]: eg
            }),
            children: e.map((e, t) => (0, r.jsx)(Y.A, {
                descriptor: e,
                soundButtonProps: {
                    channel: a,
                    interactive: eK ? ez : !eN,
                    forceSecondaryActions: !0,
                    analyticsLocations: ey
                },
                rowIndex: i.rowIndex,
                columnIndex: t,
                isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                suppressPlaySound: Q,
                getItemProps: o,
                onSelectItem: eX,
                onItemMouseEnter: l,
                buttonOverlay: ei,
                isNitroLocked: u,
                shouldShowUpsell: $,
                inExpressionPicker: eh
            }, t))
        }), "row-".concat(n["aria-rowindex"]))
    }, [eV, $, eT, t, Q, eX, a, eK, ez, eN, ey, ei, eB, eh, eg]), eJ = i.useCallback((e, t) => {
        if (e <= 0 || !$) return !1;
        let n = eV[e],
            r = eV[e - 1],
            i = ec(n.categoryInfo, eT, t),
            a = ec(r.categoryInfo, eT, t);
        return i && !a
    }, [eV, $, eT]), e$ = i.useCallback(() => {
        let e = L.A.getSoundById(eo);
        null != e && eI(e)
    }, []), e0 = i.useCallback(() => {
        let e = (0, x.Dd)(q.PremiumTypes.TIER_2);
        return Z.intl.format(Z.t["tw/SSq"], {
            nitroTierName: e,
            onClick: e$
        })
    }, [e$]), e1 = i.useCallback(e => eJ(e, t) ? ea : er, [t, eJ]), e2 = i.useCallback(e => {
        let t = e === eV.length - 1;
        return eB && t ? 70 : eB && e === eF ? 20 : 0
    }, [eV.length, eB, eF]), e3 = i.useCallback((e, t) => (0, r.jsx)("div", {
        children: t
    }, e), []), e6 = i.useCallback((e, n) => {
        let i = "".concat(e.key),
            a = $ && ec(e.categoryInfo, eT, t),
            s = eJ(n, t),
            o = eW.has(i),
            l = () => {
                D.default.track(K.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                    location: {
                        page: K.liQ.SOUNDBOARD_POPOUT
                    },
                    tab: z.kx.SOUNDBOARD,
                    guild_id: null != t ? t : null,
                    collapsed: !o,
                    sticker_pack_id: null,
                    num_expressions: e.items.length
                }), eq(i)
            };
        return (0, r.jsx)(eu, {
            categoryInfo: e.categoryInfo,
            toggleCollapsed: l,
            collapsed: o,
            isSectionNitroLocked: a && eB,
            showNitroDivider: s && eB,
            enablePickerUpsellPremiumBrandRefresh: eg
        }, "header-".concat(i))
    }, [eW, eq, t, eJ, $, eT, eB, eg]), e4 = i.useCallback((e, t) => {
        let n = t === eV.length - 1,
            i = t === eF;
        return eB && n ? (0, r.jsx)("div", {
            className: s()(X.Lk, {
                [X.Ns]: i,
                [X.N4]: eg
            })
        }) : eB && t === eF ? (0, r.jsx)("div", {
            className: s()(X.a3, {
                [X.Ns]: i,
                [X.N4]: eg
            })
        }) : null
    }, [eF, eB, eV.length, eg]), e5 = i.useCallback(e => ek((0, V.lG)(e, eL, eS, a, ey)), [a, eS, eL, ey]), e7 = i.useCallback(e => {
        (0, u.L3)(e, async () => {
            let {
                default: e
            } = await n.e("51111").then(n.bind(n, 323002));
            return t => (0, r.jsx)(e, J({
                sourceAnalyticsLocations: ey
            }, t))
        })
    }, [ey]), e8 = i.useCallback(() => eh ? (0, r.jsx)(v.Gq, {
        renderPopout: () => (0, r.jsx)(v.qn, {}),
        tooltipText: Z.intl.string(Z.t["19lt24"]),
        position: "top",
        clickableClassName: s()(X.Jm, X.Zz),
        children: (0, r.jsx)(c.HKD, {
            size: "md",
            color: "currentColor",
            className: X.By
        })
    }) : (0, r.jsx)(c.DUT, {
        tabIndex: 0,
        className: X.Jm,
        onClick: e7,
        "aria-label": Z.intl.string(Z.t.kbFsAD),
        children: (0, r.jsx)(c.HKD, {
            size: "md",
            color: "currentColor",
            className: X.By
        })
    }), [eh, e7]), e9 = i.useCallback(e => {
        let n = ex.filter(e => !eH || e.categoryInfo.type !== j.Cx.DEFAULTS);
        return (0, r.jsx)(B.A, {
            soundboardListRef: e,
            categories: n,
            shouldUpsellLockedCategories: eB,
            listPadding: ef,
            guildId: t,
            inExpressionPicker: eh,
            showPinnedDefaultsShortcut: eH
        })
    }, [ex, eB, ef, t, eh, eH]), te = i.useCallback(() => {
        var e;
        let t = (0, O.qD)();
        return null != (e = (0, x.LE)(t, q.pe.TIER_2)) ? e : Z.intl.string(Z.t.pj0XBN)
    }, []), tt = i.useCallback(() => {
        if (eB) {
            let e = eG;
            return eD.enabled && (e = !0), (0, r.jsx)(A.d, {
                showUpsell: e,
                text: e0(),
                button: te(),
                buttonAnalyticsObject: {
                    section: K.JJy.SOUND_PICKER_FLOATING_UPSELL
                }
            })
        }
        return null
    }, [e0, te, eB, eD.enabled, eG]), tn = i.useCallback(e => {
        var t;
        return (null == e ? void 0 : e.item.type) !== j.uq.SOUND ? null : (0, r.jsx)(H.A, {
            closePicker: g,
            soundboardSound: null != (t = null == e ? void 0 : e.item.sound) ? t : null
        })
    }, [g]), tr = "https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png", ti = i.useCallback(() => {
        var e;
        let t = L.A.getSoundById(eo),
            n = new Audio((0, U.A)(eo));
        null != eE.current && eE.current.pause(), eE.current = n, n.currentTime = 0, n.volume = (0, G.A)(null != (e = null == t ? void 0 : t.volume) ? e : 1), n.play()
    }, [eE]), ta = (0, l.bG)([N.A], () => N.A.getMediaSessionId());
    return (0, h.A)({
        type: o.ImpressionTypes.POPOUT,
        name: o.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
            source: em,
            guild_id: t,
            media_session_id: ta,
            available_custom_sounds_count: ej.unlockedCustomSoundCount,
            unavailable_custom_sounds_count: ej.lockedCustomSoundCount,
            favorite_sounds_count: ej.favoriteSoundCount
        }
    }), (0, r.jsxs)(r.Fragment, {
        children: [null != eA ? (0, r.jsx)(S.A, {
            containerContext: eh ? S.N.TAB_PARENT_CONTAINER : S.N.NONE,
            image: {
                url: tr,
                width: 220,
                height: 132
            },
            title: Z.intl.string(eh ? Z.t.rZEEvU : Z.t.jGDYF0),
            description: Z.intl.string(eh ? Z.t.ZPNG5A : Z.t["grL/hg"]),
            enableSocialProof: !0,
            analyticsLocationSection: K.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
            upsellViewedTrackingData: {
                type: q.e.SOUND_PICKER_SOUND_CLICKED,
                is_external: !0,
                location: ee(J({}, ev), {
                    object: K.ZSU.SOUNDBOARD_SOUND
                }),
                location_stack: eb,
                sku_id: x.Ay.getSkuIdForPremiumType(q.PremiumTypes.TIER_2)
            },
            onClose: () => eI(null),
            onLearnMore: g,
            onDisplay: ti
        }) : void 0, (0, r.jsx)(b.A, {
            categories: eV,
            collapsedCategories: eW,
            containerWidth: d,
            store: E.LW,
            onSelectItem: eX,
            onSearchExpressions: e5,
            hasSearchResults: eM.length > 0,
            defaultSearchPlaceholder: Z.intl.string(Z.t.sKt3xS),
            renderRow: eQ,
            renderSectionHeader: e6,
            renderSectionFooter: e4,
            renderSection: e3,
            renderCategoryList: e9,
            renderHeaderAccessories: e8,
            rowHeight: en,
            sectionHeaderHeight: e1,
            sectionFooterHeight: e2,
            itemNodeWidth: es,
            gridNavigatorId: eP,
            renderEmptySearchState: ed,
            renderInspector: tn,
            gridNotice: et,
            renderHeader: ep,
            renderUpsell: tt
        })]
    })
}