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
    g = n(51183),
    f = n(379848),
    m = n(961350),
    b = n(954571),
    A = n(69555),
    y = n(140547),
    O = n(242919),
    j = n(886019),
    x = n(806246),
    _ = n(60821),
    v = n(391786),
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
    L = n(658122),
    M = n(266915);

function G(e) {
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

function k(e, t) {
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
        setIsHangStatusInputFocused: V,
        setIsEmojiPickerOpen: B,
        setPopoutRef: H
    } = e, F = l.useRef(null), Y = (0, u.bG)([O.A], () => O.A.getCustomHangStatus()), K = (0, E.A)(), W = (0, u.bG)([O.A], () => O.A.getFavoritedStatuses()), {
        defaultStatusVariant: z,
        allowPermanentClear: X
    } = (0, y.$j)({
        guildId: U.guild_id,
        location: "HangStatusPicker"
    }), q = (0, j.hy)(z), J = l.useRef(null), [Q, Z] = l.useState(null != (t = null == Y ? void 0 : Y.status) ? t : ""), [$, ee] = l.useState(null != (n = null == Y ? void 0 : Y.emoji) ? n : null), [et, en] = l.useState(!1), er = (0, u.bG)([O.A], () => O.A.getCurrentHangStatus()), el = q[er], ei = W.length > 0, es = null == Q || "" === Q.trim(), ea = (0, v.A)(U), eo = Q.trim().length > 0 && Q.trim() !== (null == Y || null == (a = Y.status) ? void 0 : a.trim()) || null != $ && !o()($, null == Y ? void 0 : Y.emoji), [ec, eu] = l.useState(!1), ed = (0, u.bG)([O.A], () => O.A.getFavoritedStatuses().length >= O.x), ep = Q.length > 0 || null != $, [eh, eg] = (0, f.kn)([d.M.HANG_STATUS_POPOVER_NUX]);
    l.useEffect(() => {
        b.default.track(P.HAw.HANG_STATUS_PICKER_OPENED, k(G({}, (0, x.A)(U.id)), {
            num_favorites: W.length,
            num_recents: K.length
        }))
    }, []), l.useEffect(() => {
        Q.trim().length > 0 && ec && eu(!1), null == $ && ec && eu(!1)
    }, [Q, $, ec]), l.useEffect(() => {
        var e;
        et || Q !== (null != (e = null == Y ? void 0 : Y.status) ? e : "") && "" !== Q.trim() ? V(!0) : V(!1)
    }, [Q, null == Y ? void 0 : Y.status, $, null == Y ? void 0 : Y.emoji, V, et]), l.useEffect(() => {
        null == H || H(null == J ? void 0 : J.current)
    }, [J, H]);
    let ef = l.useCallback(e => {
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
            o()(t, null == Y ? void 0 : Y.emoji) && n === (null == Y ? void 0 : Y.status) || ((0, A.hS)(e.status, e.emoji, !0), ee(e.emoji), Z(e.status))
        }, [null == Y ? void 0 : Y.emoji, null == Y ? void 0 : Y.status]),
        eA = l.useCallback(e => {
            var t, n;
            null == e || null == (t = e.preventDefault) || t.call(e), null != $ && 0 === Q.trim().length && eu(!0), es || (eb({
                status: Q,
                emoji: null != $ ? $ : {
                    id: null,
                    name: "\uD83D\uDCAD",
                    animated: !1
                }
            }), null == (n = F.current) || n.blur(), en(!1))
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
            null != r && (null == n ? void 0 : n.name) != null && (ee(r), Z(n.name), en(!0), null == (e = F.current) || e.focus(), b.default.track(P.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, x.A)(U.id)))
        }, [ea, $, U.id]),
        eO = l.useCallback((e, t) => {
            let n = (0, _.A)(t);
            (!ed || e) && ((0, A.My)(n ? t : t.status, n ? null : t.emoji), b.default.track(P.HAw.HANG_STATUS_FAVORITE_CLICKED, k(G({}, (0, x.A)(U.id)), {
                favorited: !e
            })))
        }, [U.id, ed]),
        ej = l.useCallback(() => {
            V(!1)
        }, [V]),
        ex = l.useCallback(() => {
            V(!0)
        }, [V]),
        e_ = l.useCallback((e, t, n) => {
            var l;
            let i = (0, _.A)(e),
                s = i ? q[e] : null,
                a = O.A.isFavorited(e),
                o = i ? (0, r.jsx)(I.A, {
                    userId: m.default.getId(),
                    size: 20,
                    hangStatusActivity: {
                        type: P.$pd.HANG_STATUS,
                        state: e
                    },
                    fallbackVariant: z,
                    className: D.Kk
                }) : null != e.emoji && (0, r.jsx)(g.A, {
                    emoji: e.emoji,
                    hideTooltip: !0,
                    className: D.Kk
                });
            return (0, r.jsx)(T.u, {
                label: i ? null != (l = null == s ? void 0 : s.title) ? l : "" : e.status,
                icon: o,
                setStatus: () => {
                    i ? ef(e) : eb(e), en(!1)
                },
                isFavorited: a,
                onFavoriteClick: () => eO(a, e)
            }, "".concat(n, "-").concat(t))
        }, [z, eb, ef, q, eO]),
        ev = l.useCallback(() => {
            (0, A.eK)(!0, X), ee(null), Z(""), en(!1)
        }, [X]),
        eE = l.useCallback(e => {
            en(!0), Z(e.substring(0, 60))
        }, []);
    return (0, r.jsxs)("div", {
        ref: J,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: s()(L.menu, D.kL),
        children: [(0, r.jsx)(p.AM, {
            title: R.intl.string(R.t.waaIiO),
            body: R.intl.string(R.t.qDoPah),
            badge: "new",
            shouldShow: eh === d.M.HANG_STATUS_POPOVER_NUX,
            graphic: {
                type: "image",
                src: M.A
            },
            targetElementRef: J,
            onRequestClose: () => eg(w.i.DISMISS)
        }), (0, r.jsx)("div", {
            role: "group",
            className: s()(L.groupLabel, D.wO),
            children: (0, r.jsxs)("form", {
                onSubmit: eA,
                className: s()(L.item, D.hF),
                children: [(0, r.jsxs)("div", {
                    className: D.bd,
                    children: [(0, r.jsx)(h.ksK, {
                        inputRef: F,
                        value: et || ep ? Q : null != (i = null == el ? void 0 : el.title) ? i : "",
                        onBlur: ej,
                        onFocus: ex,
                        onChange: eE,
                        placeholder: R.intl.string(R.t.KPop4s),
                        leading: {
                            type: "emoji",
                            button: (0, r.jsx)(S.R, {
                                customStatusEmoji: $,
                                setCustomStatusEmoji: ee,
                                selectedDefaultStatus: et || ep ? null : er,
                                defaultStatusVariant: z,
                                setIsEmojiPickerOpen: B
                            })
                        },
                        trailing: null == Y && null == er || eo ? eo ? {
                            icon: h.KS6,
                            onClick: eA,
                            "aria-label": R.intl.string(R.t["R3BPH+"]),
                            disabled: 0 === Q.length
                        } : void 0 : {
                            icon: h.ucK,
                            onClick: ev,
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
            className: s()(L.groupLabel, D.Os, D.XG),
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
                }), W.map((e, t) => e_(e, t, "favorite"))]
            }), K.length > 0 && ei && (0, r.jsxs)(r.Fragment, {
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
            }), K.map((e, t) => e_(e, t, "recent"))]
        })]
    })
}