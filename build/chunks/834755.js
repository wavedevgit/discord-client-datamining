/** Chunk was on web.js **/
/** chunk id: 834755, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => J
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(607399),
    u = n(621466),
    d = n(311907),
    f = n(554146),
    p = n(192308),
    _ = n(397927),
    h = n(817281),
    m = n(820284),
    g = n(761929),
    E = n(58149),
    y = n(184761),
    b = n(379848),
    O = n(937773),
    v = n(855057),
    A = n(750506),
    I = n(267102),
    S = n(704591),
    T = n(989799),
    C = n(256449),
    N = n(679382),
    w = n(669201),
    R = n(964404),
    P = n(712687),
    D = n(203982),
    L = n(151271),
    x = n(698279),
    M = n(652215),
    j = n(49999),
    k = n(732139),
    U = n(307731),
    G = n(823894),
    F = n(985018),
    V = n(228539);

function B(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            B(e, t, n[t])
        })
    }
    return e
}

function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function W(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function K(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = z(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function z(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let q = 498 + k.as.MEDIUM,
    Z = i.memo(function(e) {
        let {
            isActive: t,
            className: n,
            viewType: i,
            autoFocus: a = !1,
            "aria-controls": s
        } = e, l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(_.DUT, W(H({
            role: "tab",
            autoFocus: a,
            "aria-controls": t ? s : void 0
        }, l), {
            onClick: () => {
                E.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_TAB_CLICKED, {
                    tab: i,
                    badged: !1
                }), (0, L.U)(i)
            },
            "aria-current": t ? "page" : void 0,
            className: o()(n, V.oi, V.pc, {
                [V.Mv]: t
            })
        }))
    }),
    Q = e => {
        let {
            positionContainerRef: t,
            drawerRef: n,
            orientation: r
        } = e, a = (0, d.bG)([R.Ay], () => R.Ay.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [c, u] = i.useState(null != a ? a : x.wp.MIN), f = i.useMemo(() => {
            switch (c) {
                case x.wp.MIN:
                    return 498;
                case x.wp.MAX:
                    return null;
                default:
                    return c
            }
        }, [c]), p = i.useCallback(e => {
            let t = e >= o ? x.wp.MAX : e <= 498 ? x.wp.MIN : e;
            null == t && null != n.current && (n.current.style.width = ""), h.Ay.updatedUnsyncedSettings({
                expressionPickerWidth: t
            }), u(t)
        }, [n, o]), _ = (0, g.A)({
            initialElementDimension: f,
            maxDimension: o,
            minDimension: 498,
            resizableDomNodeRef: n,
            onElementResize: p,
            orientation: r
        });
        return i.useEffect(() => {
            let e = l().debounce(() => {
                null != t.current && s(t.current.offsetWidth)
            }, 500);
            return window.addEventListener("resize", e), () => {
                window.removeEventListener("resize", e)
            }
        }, [t]), i.useLayoutEffect(() => {
            null != t.current && s(t.current.offsetWidth)
        }, [t]), {
            drawerWidth: f,
            handleDrawerResizeHandleMouseDown: i.useCallback(e => {
                e.stopPropagation(), null != t.current && s(t.current.offsetWidth), _(e)
            }, [t, _])
        }
    };

function X(e) {
    var t, n, a, s;
    let {
        positionTargetRef: l,
        hideGifFavorites: h,
        onSelectGIF: R,
        onSelectEmoji: B,
        onSelectSticker: H,
        onSelectSound: Y,
        channel: W,
        type: K,
        position: z,
        align: X,
        positionLayerClassName: J,
        closeOnModalOuterClick: $ = !1,
        parentModalKey: ee
    } = e, et = i.useRef(null), en = i.useRef(!1), er = i.useRef(null), ei = i.useRef(null), {
        drawerWidth: ea,
        handleDrawerResizeHandleMouseDown: eo
    } = Q({
        positionContainerRef: et,
        drawerRef: ei,
        orientation: "left" === X ? g.R.HORIZONTAL_RIGHT : g.R.HORIZONTAL_LEFT
    }), es = (0, L.RQ)(e => e.activeView), el = (0, C.ZO)(W), {
        renderWindow: ec,
        windowDispatch: eu
    } = i.useContext(I.Ay), ed = (0, d.bG)([N.A], () => !N.A.hasLoadedStickerPacks), ef = (0, S.tj)({
        location: "expression_picker"
    }), ep = (0, d.bG)([P.A], () => P.A.isOpen()), e_ = null != ee, eh = (0, p.useIsModalAtTop)(null != ee ? ee : ""), {
        reorderExpressionPickerTabs: em
    } = y.C.useConfig({
        location: "expression_picker"
    }), eg = (null == (t = K.gifs) ? void 0 : t.allowSending) && !c.Fr && null != R, eE = (null == (n = K.stickers) ? void 0 : n.allowSending) && null != H, ey = !(null == (a = K.expressionPicker) ? void 0 : a.onlyEmojis) && (eg || eE), eb = i.useCallback(e => {
        var t;
        if (!e_ && (0, p.hasAnyModalOpen)() || e_ && !(eh && $) || ep || e.defaultPrevented) return;
        let {
            target: n
        } = e;
        if ((0, u.vq)(n) && null != n.closest("." + x.VQ)) return;
        for (;
            (0, u.vq)(n);) {
            if (n === ei.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
            n = n.parentNode
        }(0, L.v8)();
        let r = null == (t = (0, u.BF)(e)) ? void 0 : t.activeElement;
        (null == r || "BODY" === r.tagName) && D._.dispatchToLastSubscribed(M.jej.TEXTAREA_FOCUS)
    }, [$, eh, e_, ep]), eO = i.useCallback(() => {
        (0, L.v8)()
    }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            es === x.kx.GIF && (0, L.v8)()
        };
        return ec.addEventListener("mousedown", eb), ec.addEventListener("contextmenu", eb), eu.subscribe(M.jej.POPOUT_CLOSE, eO), D._.subscribe(M.jej.CLOSE_GIF_PICKER, e), () => {
            ec.removeEventListener("mousedown", eb), ec.removeEventListener("contextmenu", eb), eu.unsubscribe(M.jej.POPOUT_CLOSE, eO), D._.unsubscribe(M.jej.CLOSE_GIF_PICKER, e)
        }
    }, [es, eO, eb, ec, eu]), (0, _.tjt)(et);
    let [ev, eA] = (0, b.kn)(ef ? [f.M.SOUNDMOJI_BADGE] : [], void 0, !1), [eI, eS] = i.useState(!1);
    i.useEffect(() => {
        es === x.kx.SOUNDBOARD && eS(!0)
    }, [es]), i.useEffect(() => () => {
        eI && eA(j.i.TAKE_ACTION)
    }, [eI, eA]), i.useEffect(() => {
        (0, L.Ri)("")
    }, []), i.useEffect(() => {
        (!e_ && (0, p.hasAnyModalOpen)() || e_ && !eh) && (0, L.v8)()
    }, [eh, e_]), i.useEffect(() => {
        if (null != ei.current && !en.current) {
            var e, t, n, r;
            es === x.kx.EMOJI ? (null == er || null == (e = er.current) ? void 0 : e.onPickerOpen) != null && (null == er || null == (t = er.current) || t.onPickerOpen(), en.current = !0) : es === x.kx.STICKER ? (null == er || null == (n = er.current) ? void 0 : n.onPickerOpen) == null || ed || (null == er || null == (r = er.current) || r.onPickerOpen(), en.current = !0) : (E.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_OPENED, {
                width: ei.current.offsetWidth,
                tab: es,
                badged: !1
            }), en.current = !0)
        }
    });
    let eT = i.useCallback((e, t) => null == Y ? void 0 : Y(e, "emoji_picker", t), [Y]),
        eC = i.useCallback((e, t) => null == Y ? void 0 : Y(e, "soundboard_picker", t), [Y]),
        eN = (null == (s = K.soundmoji) ? void 0 : s.allowSending) === !0 && null != Y,
        ew = "left" === X ? "right" : "left",
        eR = null != J ? J : "left" === X ? V.sj : V.Jg,
        eP = eg ? (0, r.jsx)(Z, {
            id: k.g9,
            "aria-controls": k.ni,
            "aria-selected": es === x.kx.GIF,
            isActive: es === x.kx.GIF,
            viewType: x.kx.GIF,
            children: F.intl.string(F.t["6gUTsS"])
        }) : null,
        eD = eE ? (0, r.jsx)(Z, {
            id: G.LD,
            "aria-controls": G.GX,
            "aria-selected": es === x.kx.STICKER,
            isActive: es === x.kx.STICKER,
            autoFocus: !el,
            viewType: x.kx.STICKER,
            children: (0, r.jsx)("div", {
                className: V.dG,
                children: F.intl.string(F.t.nf1s3u)
            })
        }) : null,
        eL = (0, r.jsx)(Z, {
            id: k.k1,
            "aria-controls": k.Do,
            "aria-selected": es === x.kx.EMOJI,
            isActive: es === x.kx.EMOJI,
            viewType: x.kx.EMOJI,
            children: F.intl.string(F.t.Xu3wE3)
        });
    return (0, r.jsx)(m.A, {
        section: M.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(A.nE, {
            className: o()(V.T8, eR),
            targetRef: l,
            position: z,
            align: X,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: e => {
                var t;
                let {
                    isPositioned: n
                } = e;
                return (0, r.jsx)("section", {
                    className: o()(V.V6, {
                        [V.D0]: !ey
                    }),
                    ref: et,
                    role: "dialog",
                    "aria-label": F.intl.string(F.t.Utlwvi),
                    children: n ? (0, r.jsxs)("div", {
                        className: V.jP,
                        style: {
                            width: null == ea ? void 0 : ea,
                            [X]: 0
                        },
                        ref: ei,
                        children: [(0, r.jsx)("div", {
                            className: V.Di,
                            onMouseDown: eo,
                            style: {
                                [ew]: -2
                            }
                        }), (0, r.jsxs)("div", {
                            className: V.FG,
                            children: [ey ? (0, r.jsx)("nav", {
                                className: V.C$,
                                children: (0, r.jsxs)("div", {
                                    className: V.CT,
                                    role: "tablist",
                                    "aria-label": F.intl.string(F.t["2j4Vgd"]),
                                    children: [em ? (0, r.jsxs)(r.Fragment, {
                                        children: [eL, eP, eD]
                                    }) : (0, r.jsxs)(r.Fragment, {
                                        children: [eP, eD, eL]
                                    }), ef && eN && (0, r.jsx)(Z, {
                                        id: k.N6,
                                        "aria-controls": k.AA,
                                        "aria-selected": es === x.kx.SOUNDBOARD,
                                        isActive: es === x.kx.SOUNDBOARD,
                                        viewType: x.kx.SOUNDBOARD,
                                        children: (0, r.jsxs)("div", {
                                            className: V.sd,
                                            children: [F.intl.string(F.t.EHlAMc), null != ev && (0, r.jsx)(_.LpS, {
                                                text: F.intl.string(F.t.y2b7CA)
                                            })]
                                        })
                                    })]
                                })
                            }) : null, es === x.kx.STICKER && eE ? (0, r.jsx)(w.A, {
                                isLoading: ed,
                                channel: W,
                                containerWidth: ea,
                                onSelectSticker: H,
                                closePopout: eO,
                                ref: e => {
                                    er.current = e
                                }
                            }) : null, es === x.kx.GIF && eg ? (0, r.jsx)(v.A, {
                                onSelectGIF: R,
                                hideFavorites: h,
                                persistSearch: !0
                            }) : null, es === x.kx.EMOJI ? (0, r.jsx)(O.A, {
                                hasTabWrapper: !0,
                                containerContext: ey ? O.f.TABS_EXPRESSION_PICKER : O.f.NO_TABS_EXPRESSION_PICKER,
                                persistSearch: !0,
                                channel: W,
                                containerWidth: ea,
                                emojiSize: null != ea && ea < q ? k.as.MEDIUM : k.as.LARGE,
                                pickerIntention: U.b_.CHAT,
                                closePopout: eO,
                                onSelectEmoji: B,
                                onSelectSoundmoji: eT,
                                ref: e => {
                                    er.current = e
                                },
                                shouldShowSoundmojiInEmojiPicker: (null == (t = K.soundmoji) ? void 0 : t.allowSending) === !0
                            }) : null, es === x.kx.SOUNDBOARD ? (0, r.jsx)("div", {
                                className: V.z,
                                children: (0, r.jsx)(T.A, {
                                    guildId: W.guild_id,
                                    channel: W,
                                    containerWidth: ea,
                                    onClose: eO,
                                    onSelect: eC,
                                    analyticsSource: "expression-picker",
                                    renderHeader: e => (0, r.jsx)("div", {
                                        className: V.BG,
                                        children: e
                                    }),
                                    inExpressionPicker: !0,
                                    shouldValidateSelectedSound: !0
                                })
                            }) : null]
                        })]
                    }) : null
                })
            }
        })
    })
}
let J = i.memo(X)