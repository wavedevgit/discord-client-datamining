/** Chunk was on 41727 **/
/** chunk id: 958140, original params: e,t,n (module,exports,require) **/
n.d(t, {
    h: () => U
}), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(812729),
    o = n.n(a),
    c = n(735438),
    u = n(311907),
    d = n(554146),
    p = n(342494),
    h = n(397927),
    f = n(51183),
    g = n(379848),
    m = n(961350),
    b = n(954571),
    A = n(69555),
    y = n(140547),
    _ = n(242919),
    O = n(886019),
    j = n(806246),
    v = n(60821),
    x = n(391786),
    E = n(50122),
    C = n(132970),
    S = n(129104),
    I = n(559405),
    N = n(272997),
    T = n(266069);
n(708455);
var P = n(652215),
    w = n(49999),
    R = n(985018),
    D = n(680930),
    M = n(658122),
    L = n(266915);

function k(e) {
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
}

function G(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function U(e) {
    var t, n, i, a;
    let {
        channel: U,
        setIsHangStatusInputFocused: B,
        setIsEmojiPickerOpen: V,
        setPopoutRef: F
    } = e, H = l.useRef(null), K = (0, u.bG)([_.A], () => _.A.getCustomHangStatus()), W = (0, E.A)(), z = (0, u.bG)([_.A], () => _.A.getFavoritedStatuses()), {
        defaultStatusVariant: Y,
        allowPermanentClear: q
    } = (0, y.$j)({
        guildId: U.guild_id,
        location: "HangStatusPicker"
    }), X = (0, O.hy)(Y), J = l.useRef(null), [Q, Z] = l.useState(null != (t = null == K ? void 0 : K.status) ? t : ""), [$, ee] = l.useState(null != (n = null == K ? void 0 : K.emoji) ? n : null), [et, en] = l.useState(!1), er = (0, u.bG)([_.A], () => _.A.getCurrentHangStatus()), el = X[er], ei = z.length > 0, es = null == Q || "" === Q.trim(), ea = (0, x.A)(U), eo = Q.trim().length > 0 && Q.trim() !== (null == K || null == (a = K.status) ? void 0 : a.trim()) || null != $ && !o()($, null == K ? void 0 : K.emoji), [ec, eu] = l.useState(!1), ed = (0, u.bG)([_.A], () => _.A.getFavoritedStatuses().length >= _.x), ep = Q.length > 0 || null != $, [eh, ef] = (0, g.kn)([d.M.HANG_STATUS_POPOVER_NUX]);
    l.useEffect(() => {
        b.default.track(P.HAw.HANG_STATUS_PICKER_OPENED, G(k({}, (0, j.A)(U.id)), {
            num_favorites: z.length,
            num_recents: W.length
        }))
    }, []), l.useEffect(() => {
        Q.trim().length > 0 && ec && eu(!1), null == $ && ec && eu(!1)
    }, [Q, $, ec]), l.useEffect(() => {
        var e;
        et || Q !== (null != (e = null == K ? void 0 : K.status) ? e : "") && "" !== Q.trim() ? B(!0) : B(!1)
    }, [Q, null == K ? void 0 : K.status, $, null == K ? void 0 : K.emoji, B, et]), l.useEffect(() => {
        null == F || F(null == J ? void 0 : J.current)
    }, [J, F]);
    let eg = l.useCallback(e => {
            e !== er && ((0, A.Iq)(e, !0), null != $ && ee(null), "" !== Q.trim() && Z(""))
        }, [er, $, Q]),
        em = l.useCallback(() => {
            ee(null), Z(""), en(!1)
        }, []),
        eb = l.useCallback(e => {
            let {
                emoji: t,
                status: n
            } = e;
            o()(t, null == K ? void 0 : K.emoji) && n === (null == K ? void 0 : K.status) || ((0, A.hS)(e.status, e.emoji, !0), ee(e.emoji), Z(e.status))
        }, [null == K ? void 0 : K.emoji, null == K ? void 0 : K.status]),
        eA = l.useCallback(e => {
            var t, n;
            null == e || null == (t = e.preventDefault) || t.call(e), null != $ && 0 === Q.trim().length && eu(!0), es || (eb({
                status: Q,
                emoji: null != $ ? $ : {
                    id: null,
                    name: "\uD83D\uDCAD",
                    animated: !1
                }
            }), null == (n = H.current) || n.blur(), en(!1))
        }, [Q, $, eb, es]),
        ey = l.useCallback(() => {
            var e, t;
            let n = null,
                r = null;
            do
                if (0 === ea.length || (r = (null == (n = (0, c.sample)(ea)) ? void 0 : n.id) != null ? {
                        id: n.id,
                        name: n.name,
                        animated: n.animated
                    } : {
                        id: null,
                        name: null != (t = null == n ? void 0 : n.optionallyDiverseSequence) ? t : "",
                        animated: !1
                    }, 1 === ea.length)) break; while (null == n || (null == n ? void 0 : n.name) == null || o()($, r));
            null != r && (null == n ? void 0 : n.name) != null && (ee(r), Z(n.name), en(!0), null == (e = H.current) || e.focus(), b.default.track(P.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, j.A)(U.id)))
        }, [ea, $, U.id]),
        e_ = l.useCallback((e, t) => {
            let n = (0, v.A)(t);
            (!ed || e) && ((0, A.My)(n ? t : t.status, n ? null : t.emoji), b.default.track(P.HAw.HANG_STATUS_FAVORITE_CLICKED, G(k({}, (0, j.A)(U.id)), {
                favorited: !e
            })))
        }, [U.id, ed]),
        eO = l.useCallback(() => {
            B(!1)
        }, [B]),
        ej = l.useCallback(() => {
            B(!0)
        }, [B]),
        ev = l.useCallback((e, t, n) => {
            var l;
            let i = (0, v.A)(e),
                s = i ? X[e] : null,
                a = _.A.isFavorited(e),
                o = i ? (0, r.jsx)(I.A, {
                    userId: m.default.getId(),
                    size: 20,
                    hangStatusActivity: {
                        type: P.$pd.HANG_STATUS,
                        state: e
                    },
                    fallbackVariant: Y,
                    className: D.Kk
                }) : null != e.emoji && (0, r.jsx)(f.A, {
                    emoji: e.emoji,
                    hideTooltip: !0,
                    className: D.Kk
                });
            return (0, r.jsx)(T.u, {
                label: i ? null != (l = null == s ? void 0 : s.title) ? l : "" : e.status,
                icon: o,
                setStatus: () => {
                    i ? eg(e) : eb(e), en(!1)
                },
                isFavorited: a,
                onFavoriteClick: () => e_(a, e)
            }, "".concat(n, "-").concat(t))
        }, [Y, eb, eg, X, e_]),
        ex = l.useCallback(() => {
            (0, A.eK)(!0, q), ee(null), Z(""), en(!1)
        }, [q]),
        eE = l.useCallback(e => {
            en(!0), Z(e.substring(0, 60))
        }, []);
    return (0, r.jsxs)("div", {
        ref: J,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: s()(M.menu, D.kL),
        children: [(0, r.jsx)(p.AM, {
            title: R.intl.string(R.t.waaIiO),
            body: R.intl.string(R.t.qDoPah),
            badge: "new",
            shouldShow: eh === d.M.HANG_STATUS_POPOVER_NUX,
            graphic: {
                type: "image",
                src: L.A
            },
            targetElementRef: J,
            onRequestClose: () => ef(w.i.DISMISS)
        }), (0, r.jsx)("div", {
            role: "group",
            className: s()(M.groupLabel, D.wO),
            children: (0, r.jsxs)("form", {
                onSubmit: eA,
                className: s()(M.item, D.hF),
                children: [(0, r.jsxs)("div", {
                    className: D.bd,
                    children: [(0, r.jsx)(h.ksK, {
                        inputRef: H,
                        value: et || ep ? Q : null != (i = null == el ? void 0 : el.title) ? i : "",
                        onBlur: eO,
                        onFocus: ej,
                        onChange: eE,
                        placeholder: R.intl.string(R.t.KPop4s),
                        leading: {
                            type: "emoji",
                            button: (0, r.jsx)(S.R, {
                                customStatusEmoji: $,
                                setCustomStatusEmoji: ee,
                                selectedDefaultStatus: et || ep ? null : er,
                                defaultStatusVariant: Y,
                                setIsEmojiPickerOpen: V
                            })
                        },
                        trailing: null == K && null == er || eo ? eo ? {
                            icon: h.KS6,
                            onClick: eA,
                            "aria-label": R.intl.string(R.t["R3BPH+"]),
                            disabled: 0 === Q.length
                        } : void 0 : {
                            icon: h.ucK,
                            onClick: ex,
                            "aria-label": R.intl.string(R.t.S90FuQ)
                        }
                    }), (0, r.jsx)(h.K0, {
                        variant: "secondary",
                        icon: C.j,
                        onClick: ey,
                        "aria-label": R.intl.string(R.t["5UAi59"])
                    })]
                }), ec && (0, r.jsx)(h.Text, {
                    variant: "text-xs/normal",
                    className: D.iX,
                    color: "text-feedback-critical",
                    children: R.intl.string(R.t["s/oq0f"])
                })]
            })
        }), (0, r.jsxs)(h.HOs, {
            fade: !0,
            role: "group",
            className: s()(M.groupLabel, D.Os, D.XG),
            children: [(0, r.jsx)(N.k, {
                guildId: U.guild_id,
                onSetActivityStatus: em
            }), ei && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)("div", {
                    className: D.VA,
                    children: [(0, r.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(R.t.k8fFjp)
                    }), (0, r.jsx)(h.Gg5, {
                        size: "xxs"
                    })]
                }), z.map((e, t) => ev(e, t, "favorite"))]
            }), W.length > 0 && ei && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    role: "separator",
                    className: D.me
                }), (0, r.jsxs)("div", {
                    className: D.VA,
                    children: [(0, r.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(R.t["+9QSnj"])
                    }), (0, r.jsx)(h.O4, {
                        size: "xxs"
                    })]
                })]
            }), W.map((e, t) => ev(e, t, "recent"))]
        })]
    })
}