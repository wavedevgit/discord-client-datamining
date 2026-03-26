/** chunk id: 958140 params = (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => P
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(812729),
    o = n.n(r),
    c = n(735438),
    d = n(311907),
    u = n(554146),
    h = n(342494),
    A = n(397927),
    m = n(51183),
    _ = n(932001),
    p = n(961350),
    g = n(954571),
    f = n(69555),
    x = n(140547),
    E = n(242919),
    C = n(886019),
    I = n(806246),
    N = n(60821),
    b = n(391786),
    S = n(50122),
    T = n(132970),
    v = n(129104),
    y = n(559405),
    j = n(272997),
    R = n(266069);
n(708455);
var O = n(652215),
    L = n(49999),
    M = n(985018),
    D = n(435579),
    G = n(945375),
    U = n(266915);

function P(e) {
    let {
        channel: t,
        setIsHangStatusInputFocused: n,
        setIsEmojiPickerOpen: l
    } = e, r = s.useRef(null), P = (0, d.bG)([E.A], () => E.A.getCustomHangStatus()), w = (0, S.A)(), k = (0, d.bG)([E.A], () => E.A.getFavoritedStatuses()), {
        defaultStatusVariant: V,
        allowPermanentClear: B
    } = (0, x.$j)({
        guildId: t.guild_id,
        location: "HangStatusPicker"
    }), H = (0, C.hy)(V), F = s.useRef(null), [K, W] = s.useState(P?.status ?? ""), [Y, z] = s.useState(P?.emoji ?? null), [q, X] = s.useState(!1), J = (0, d.bG)([E.A], () => E.A.getCurrentHangStatus()), Q = H[J], $ = k.length > 0, Z = null == K || "" === K.trim(), ee = (0, b.A)(t), et = K.trim().length > 0 && K.trim() !== P?.status?.trim() || null != Y && !o()(Y, P?.emoji), [en, ei] = s.useState(!1), es = (0, d.bG)([E.A], () => E.A.getFavoritedStatuses().length >= E.x), el = K.length > 0 || null != Y, [ea, er] = (0, _.kn)([u.M.HANG_STATUS_POPOVER_NUX]);
    s.useEffect(() => {
        g.default.track(O.HAw.HANG_STATUS_PICKER_OPENED, {
            ...(0, I.A)(t.id),
            num_favorites: k.length,
            num_recents: w.length
        })
    }, []), s.useEffect(() => {
        K.trim().length > 0 && en && ei(!1), null == Y && en && ei(!1)
    }, [K, Y, en]), s.useEffect(() => {
        q || K !== (P?.status ?? "") && "" !== K.trim() ? n(!0) : n(!1)
    }, [K, P?.status, Y, P?.emoji, n, q]);
    let eo = s.useCallback(e => {
            e !== J && ((0, f.Iq)(e, !0), null != Y && z(null), "" !== K.trim() && W(""))
        }, [J, Y, K]),
        ec = s.useCallback(() => {
            z(null), W(""), X(!1)
        }, []),
        ed = s.useCallback(e => {
            let {
                emoji: t,
                status: n
            } = e;
            o()(t, P?.emoji) && n === P?.status || ((0, f.hS)(e.status, e.emoji, !0), z(e.emoji), W(e.status))
        }, [P?.emoji, P?.status]),
        eu = s.useCallback(e => {
            e?.preventDefault?.(), null != Y && 0 === K.trim().length && ei(!0), Z || (ed({
                status: K,
                emoji: Y ?? {
                    id: null,
                    name: "\uD83D\uDCAD",
                    animated: !1
                }
            }), r.current?.blur(), X(!1))
        }, [K, Y, ed, Z]),
        eh = s.useCallback(() => {
            let e = null,
                n = null;
            do
                if (0 === ee.length || (e = (0, c.sample)(ee), n = e?.id != null ? {
                        id: e.id,
                        name: e.name,
                        animated: e.animated
                    } : {
                        id: null,
                        name: e?.optionallyDiverseSequence ?? "",
                        animated: !1
                    }, 1 === ee.length)) break; while (null == e || e?.name == null || o()(Y, n));
            null != n && e?.name != null && (z(n), W(e.name), X(!0), r.current?.focus(), g.default.track(O.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, I.A)(t.id)))
        }, [ee, Y, t.id]),
        eA = s.useCallback((e, n) => {
            let i = (0, N.A)(n);
            (!es || e) && ((0, f.My)(i ? n : n.status, i ? null : n.emoji), g.default.track(O.HAw.HANG_STATUS_FAVORITE_CLICKED, {
                ...(0, I.A)(t.id),
                favorited: !e
            }))
        }, [t.id, es]),
        em = s.useCallback(() => {
            n(!1)
        }, [n]),
        e_ = s.useCallback(() => {
            n(!0)
        }, [n]),
        ep = s.useCallback((e, t, n) => {
            let s = (0, N.A)(e),
                l = s ? H[e] : null,
                a = E.A.isFavorited(e),
                r = s ? (0, i.jsx)(y.A, {
                    userId: p.default.getId(),
                    size: 20,
                    hangStatusActivity: {
                        type: O.$pd.HANG_STATUS,
                        state: e
                    },
                    fallbackVariant: V,
                    className: D.Kk
                }) : null != e.emoji && (0, i.jsx)(m.A, {
                    emoji: e.emoji,
                    hideTooltip: !0,
                    className: D.Kk
                });
            return (0, i.jsx)(R.u, {
                label: s ? l?.title ?? "" : e.status,
                icon: r,
                setStatus: () => {
                    s ? eo(e) : ed(e), X(!1)
                },
                isFavorited: a,
                onFavoriteClick: () => eA(a, e)
            }, `${n}-${t}`)
        }, [V, ed, eo, H, eA]),
        eg = s.useCallback(() => {
            (0, f.eK)(!0, B), z(null), W(""), X(!1)
        }, [B]),
        ef = s.useCallback(e => {
            X(!0), W(e.substring(0, 60))
        }, []);
    return (0, i.jsxs)("div", {
        ref: F,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(G.menu, D.kL),
        children: [(0, i.jsx)(h.AM, {
            title: M.intl.string(M.t.waaIiO),
            body: M.intl.string(M.t.qDoPah),
            badge: "new",
            shouldShow: ea === u.M.HANG_STATUS_POPOVER_NUX,
            graphic: {
                type: "image",
                src: U.A
            },
            targetElementRef: F,
            onRequestClose: () => er(L.i.DISMISS)
        }), (0, i.jsx)("div", {
            role: "group",
            className: a()(G.groupLabel, D.wO),
            children: (0, i.jsxs)("form", {
                onSubmit: eu,
                className: D.hF,
                children: [(0, i.jsxs)("div", {
                    className: D.bd,
                    children: [(0, i.jsx)(A.ksK, {
                        inputRef: r,
                        value: q || el ? K : Q?.title ?? "",
                        onBlur: em,
                        onFocus: e_,
                        onChange: ef,
                        placeholder: M.intl.string(M.t.KPop4s),
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)(v.R, {
                                customStatusEmoji: Y,
                                setCustomStatusEmoji: z,
                                selectedDefaultStatus: q || el ? null : J,
                                defaultStatusVariant: V,
                                setIsEmojiPickerOpen: l
                            })
                        },
                        trailing: null == P && null == J || et ? et ? {
                            icon: A.KS6,
                            onClick: eu,
                            "aria-label": M.intl.string(M.t["R3BPH+"]),
                            disabled: 0 === K.length
                        } : void 0 : {
                            icon: A.ucK,
                            onClick: eg,
                            "aria-label": M.intl.string(M.t.S90FuQ)
                        }
                    }), (0, i.jsx)(A.K0, {
                        variant: "secondary",
                        icon: T.j,
                        onClick: eh,
                        "aria-label": M.intl.string(M.t["5UAi59"])
                    })]
                }), en && (0, i.jsx)(A.Text, {
                    variant: "text-xs/normal",
                    className: D.iX,
                    color: "text-feedback-critical",
                    children: M.intl.string(M.t["s/oq0f"])
                })]
            })
        }), (0, i.jsxs)(A.HOs, {
            fade: !0,
            role: "group",
            className: a()(G.groupLabel, D.Os, D.XG),
            children: [(0, i.jsx)(j.k, {
                guildId: t.guild_id,
                onSetActivityStatus: ec
            }), $ && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                    className: D.VA,
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: M.intl.string(M.t.k8fFjp)
                    }), (0, i.jsx)(A.Gg5, {
                        size: "xxs"
                    })]
                }), k.map((e, t) => ep(e, t, "favorite"))]
            }), w.length > 0 && $ && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    role: "separator",
                    className: D.me
                }), (0, i.jsxs)("div", {
                    className: D.VA,
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: M.intl.string(M.t["+9QSnj"])
                    }), (0, i.jsx)(A.O4, {
                        size: "xxs"
                    })]
                })]
            }), w.map((e, t) => ep(e, t, "recent"))]
        })]
    })
}