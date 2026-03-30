/** chunk id: 958140 params = (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => w
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
    g = n(961350),
    p = n(954571),
    f = n(69555),
    x = n(140547),
    E = n(242919),
    C = n(886019),
    I = n(806246),
    N = n(60821),
    S = n(391786),
    b = n(50122),
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
    U = n(442078),
    P = n(266915);

function w(e) {
    let {
        channel: t,
        setIsHangStatusInputFocused: n,
        setIsEmojiPickerOpen: l
    } = e, r = s.useRef(null), w = (0, d.bG)([E.A], () => E.A.getCustomHangStatus()), k = (0, b.A)(), V = (0, d.bG)([E.A], () => E.A.getFavoritedStatuses()), {
        defaultStatusVariant: B,
        allowPermanentClear: H
    } = (0, x.$j)({
        guildId: t.guild_id,
        location: "HangStatusPicker"
    }), F = (0, C.hy)(B), K = s.useRef(null), [W, Y] = s.useState(w?.status ?? ""), [z, q] = s.useState(w?.emoji ?? null), [X, Q] = s.useState(!1), J = (0, d.bG)([E.A], () => E.A.getCurrentHangStatus()), $ = F[J], Z = V.length > 0, ee = null == W || "" === W.trim(), et = (0, S.A)(t), en = W.trim().length > 0 && W.trim() !== w?.status?.trim() || null != z && !o()(z, w?.emoji), [ei, es] = s.useState(!1), el = (0, d.bG)([E.A], () => E.A.getFavoritedStatuses().length >= E.x), ea = W.length > 0 || null != z, [er, eo] = (0, _.kn)([u.M.HANG_STATUS_POPOVER_NUX]);
    s.useEffect(() => {
        p.default.track(O.HAw.HANG_STATUS_PICKER_OPENED, {
            ...(0, I.A)(t.id),
            num_favorites: V.length,
            num_recents: k.length
        })
    }, []), s.useEffect(() => {
        W.trim().length > 0 && ei && es(!1), null == z && ei && es(!1)
    }, [W, z, ei]), s.useEffect(() => {
        X || W !== (w?.status ?? "") && "" !== W.trim() ? n(!0) : n(!1)
    }, [W, w?.status, z, w?.emoji, n, X]);
    let ec = s.useCallback(e => {
            e !== J && ((0, f.Iq)(e, !0), null != z && q(null), "" !== W.trim() && Y(""))
        }, [J, z, W]),
        ed = s.useCallback(() => {
            q(null), Y(""), Q(!1)
        }, []),
        eu = s.useCallback(e => {
            let {
                emoji: t,
                status: n
            } = e;
            o()(t, w?.emoji) && n === w?.status || ((0, f.hS)(e.status, e.emoji, !0), q(e.emoji), Y(e.status))
        }, [w?.emoji, w?.status]),
        eh = s.useCallback(e => {
            e?.preventDefault?.(), null != z && 0 === W.trim().length && es(!0), ee || (eu({
                status: W,
                emoji: z ?? {
                    id: null,
                    name: "\uD83D\uDCAD",
                    animated: !1
                }
            }), r.current?.blur(), Q(!1))
        }, [W, z, eu, ee]),
        eA = s.useCallback(() => {
            let e = null,
                n = null;
            do
                if (0 === et.length || (e = (0, c.sample)(et), n = e?.id != null ? {
                        id: e.id,
                        name: e.name,
                        animated: e.animated
                    } : {
                        id: null,
                        name: e?.optionallyDiverseSequence ?? "",
                        animated: !1
                    }, 1 === et.length)) break; while (null == e || e?.name == null || o()(z, n));
            null != n && e?.name != null && (q(n), Y(e.name), Q(!0), r.current?.focus(), p.default.track(O.HAw.HANG_STATUS_RANDOMIZER_CLICKED, (0, I.A)(t.id)))
        }, [et, z, t.id]),
        em = s.useCallback((e, n) => {
            let i = (0, N.A)(n);
            (!el || e) && ((0, f.My)(i ? n : n.status, i ? null : n.emoji), p.default.track(O.HAw.HANG_STATUS_FAVORITE_CLICKED, {
                ...(0, I.A)(t.id),
                favorited: !e
            }))
        }, [t.id, el]),
        e_ = s.useCallback(() => {
            n(!1)
        }, [n]),
        eg = s.useCallback(() => {
            n(!0)
        }, [n]),
        ep = s.useCallback((e, t, n) => {
            let s = (0, N.A)(e),
                l = s ? F[e] : null,
                a = E.A.isFavorited(e),
                r = s ? (0, i.jsx)(y.A, {
                    userId: g.default.getId(),
                    size: 20,
                    hangStatusActivity: {
                        type: O.$pd.HANG_STATUS,
                        state: e
                    },
                    fallbackVariant: B,
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
                    s ? ec(e) : eu(e), Q(!1)
                },
                isFavorited: a,
                onFavoriteClick: () => em(a, e)
            }, `${n}-${t}`)
        }, [B, eu, ec, F, em]),
        ef = s.useCallback(() => {
            (0, f.eK)(!0, H), q(null), Y(""), Q(!1)
        }, [H]),
        ex = s.useCallback(e => {
            Q(!0), Y(e.substring(0, 60))
        }, []);
    return (0, i.jsxs)("div", {
        ref: K,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(U.popover, D.kL),
        children: [(0, i.jsx)(h.AM, {
            title: M.intl.string(M.t.waaIiO),
            body: M.intl.string(M.t.qDoPah),
            badge: "new",
            shouldShow: er === u.M.HANG_STATUS_POPOVER_NUX,
            graphic: {
                type: "image",
                src: P.A
            },
            targetElementRef: K,
            onRequestClose: () => eo(L.i.DISMISS)
        }), (0, i.jsx)("div", {
            role: "group",
            className: a()(G.groupLabel, D.wO),
            children: (0, i.jsxs)("form", {
                onSubmit: eh,
                className: D.hF,
                children: [(0, i.jsxs)("div", {
                    className: D.bd,
                    children: [(0, i.jsx)(A.ksK, {
                        inputRef: r,
                        value: X || ea ? W : $?.title ?? "",
                        onBlur: e_,
                        onFocus: eg,
                        onChange: ex,
                        placeholder: M.intl.string(M.t.KPop4s),
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)(v.R, {
                                customStatusEmoji: z,
                                setCustomStatusEmoji: q,
                                selectedDefaultStatus: X || ea ? null : J,
                                defaultStatusVariant: B,
                                setIsEmojiPickerOpen: l
                            })
                        },
                        trailing: null == w && null == J || en ? en ? {
                            icon: A.KS6,
                            onClick: eh,
                            "aria-label": M.intl.string(M.t["R3BPH+"]),
                            disabled: 0 === W.length
                        } : void 0 : {
                            icon: A.ucK,
                            onClick: ef,
                            "aria-label": M.intl.string(M.t.S90FuQ)
                        }
                    }), (0, i.jsx)(A.K0, {
                        variant: "secondary",
                        icon: T.j,
                        onClick: eA,
                        "aria-label": M.intl.string(M.t["5UAi59"])
                    })]
                }), ei && (0, i.jsx)(A.Text, {
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
                onSetActivityStatus: ed
            }), Z && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                    className: D.VA,
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: M.intl.string(M.t.k8fFjp)
                    }), (0, i.jsx)(A.Gg5, {
                        size: "xxs"
                    })]
                }), V.map((e, t) => ep(e, t, "favorite"))]
            }), k.length > 0 && Z && (0, i.jsxs)(i.Fragment, {
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
            }), k.map((e, t) => ep(e, t, "recent"))]
        })]
    })
}