/** chunk id: 534225 params = (module,exports,require) **/
l.d(t, {
    l: () => R
});
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(662518),
    u = l(311907),
    o = l(397927),
    c = l(157559),
    d = l(554375),
    m = l(964486),
    h = l(626584),
    g = l(885617),
    x = l(288224),
    j = l(71393),
    f = l(576705),
    _ = l(967198),
    b = l(954571),
    E = l(690521),
    v = l(339143),
    I = l(80569),
    A = l(380334),
    S = l(316628),
    N = l(421314),
    p = l(516628),
    O = l(150639),
    C = l(582617),
    y = l(652215),
    M = l(985018),
    w = l(507510);
let T = new h.A("EmojiStudio"),
    R = e => {
        let {
            guildId: t
        } = e, l = "userImage" in e ? e.userImage : void 0, r = "emoji" in e ? e.emoji : void 0, h = !!r, [R, D] = i.useState(l ?? null), [L, G] = i.useState(!1), F = (0, u.bG)([j.A, _.A, f.A], () => {
            let e = _.A.getGuildId(),
                t = j.A.getGuild(e);
            return f.A.can(y.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
        }), [H, z] = i.useState(t ?? F), [U, W] = i.useState(!1), [J, P] = i.useState(null), [B, K] = i.useState(null), [$, Y] = i.useState(function(e) {
            if (null == e) return "";
            let t = e?.file?.name ?? "",
                l = t.lastIndexOf("."),
                n = -1 === l ? t : t.substring(0, l);
            return E.Ay.sanitizeEmojiName(n)
        }(R)), [q, Q] = i.useState(null), V = i.useRef(Date.now()), X = i.useRef(0), Z = i.useRef(0), ee = i.useRef(!1), et = i.useRef(null), [el, en] = i.useState(!1), ei = i.useRef(null);
        i.useEffect(() => ((0, v.O)(!1), () => {
            (0, v.O)(!1)
        }), []), i.useEffect(() => {
            if (null == r) return;
            let e = g.A.getEmojiRawAsset(r.id);
            if (null != e) {
                D(e), Q(e.data), Y(r.name), G(!1);
                return
            }
            G(!0), (0, N.$)(r).then(e => {
                D(e), Q(e.data), Y(r.name), G(!1)
            }).catch(e => {
                T.error("Failed to fetch emoji image", e), P(I.j.MISSING_IMAGE_DATA), G(!1)
            })
        }, [r]);
        let er = i.useCallback(e => {
            let {
                reason: t
            } = e, l = J ?? B;
            b.default.track(y.HAw.EMOJI_STUDIO_ENDED, {
                reason: t,
                is_initial: 0 === X.current,
                has_image: null != R,
                error: null == l ? null : String(l),
                throttled_edit_count: Z.current,
                session_duration_ms: Date.now() - V.current,
                has_guild_selected: null != H
            })
        }, [J, B, V, R, H]);
        (0, m.l0)(() => {
            ee.current || er({
                reason: "closed"
            })
        });
        let ea = i.useCallback(async () => {
                if (P(null), null == H) return void P(I.j.MISSING_GUILD);
                if (null == R || R?.file == null || null == q) return void P(I.j.MISSING_IMAGE_DATA);
                W(!0);
                let e = null;
                try {
                    e = await (0, d.Gf)({
                        image: q,
                        guildId: H,
                        name: $,
                        analyticsLocation: {
                            page: y.liQ.EMOJI_STUDIO
                        }
                    }), x.X({
                        emojiId: e.id,
                        userImage: {
                            ...R
                        }
                    })
                } catch (e) {
                    W(!1), P((0, p.E2)(e)), T.error("Failed to upload emoji.", e);
                    return
                }
                if (null != r) try {
                    await (0, d.ak)(H, r.id, e.id)
                } catch (e) {
                    if (429 === e.status) c.A.show({
                        title: M.intl.string(M.t.iufib1),
                        body: M.intl.string(M.t.Whhv4w)
                    });
                    else {
                        W(!1), P((0, p.E2)(e)), T.error("Failed to delete emoji.", e);
                        return
                    }
                }(0, v.O)(!1), (0, o.OoC)(I.y), er({
                    reason: "uploaded"
                }), ee.current = !0, (0, A.T)({
                    emoji: e,
                    guildId: H
                }), W(!1)
            }, [H, R, r, q, er, $]),
            es = i.useCallback(() => {
                P(null), null != R && Q(R.data), Z.current = 0, (0, v.O)(!1), et.current?.reset()
            }, [et, R]),
            eu = i.useCallback(() => {
                (0, N.p)({
                    onClose: es
                })
            }, [es]),
            eo = i.useCallback(e => {
                let {
                    imageData: t,
                    imageDataTimestamp: l = 0,
                    error: n
                } = e, i = null;
                null != t && E.Ay.isDataTooBig(t) && (i = I.j.TOO_BIG), P(n ?? i), l < X.current || null != t && (Q(t), X.current = l)
            }, []),
            ec = i.useCallback(() => {
                Z.current++, (0, v.O)(!0)
            }, []),
            ed = h ? M.intl.string(M.t.FOYn8U) : M.intl.string(M.t.iMJO37);
        return L || null == R ? (0, n.jsx)("main", {
            className: w.iW,
            children: (0, n.jsxs)("div", {
                className: w.EN,
                children: [(0, n.jsx)("div", {
                    className: w.uv,
                    children: (0, n.jsx)(o.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: w.DD,
                        children: ed
                    })
                }), (0, n.jsx)("div", {
                    className: w.b,
                    children: (0, n.jsx)(o.JnF, {
                        size: "md",
                        onClick: eu
                    })
                })]
            })
        }) : (0, n.jsxs)("main", {
            className: a()(w.iW, {
                [w.WY]: null != R
            }),
            children: [(0, n.jsxs)("div", {
                className: w.EN,
                children: [(0, n.jsx)(C.n, {
                    ref: et,
                    file: R.file,
                    imageUri: R.data,
                    onUpdate: eo,
                    onThrottledEdit: ec
                }), (0, n.jsx)("div", {
                    className: w.uv,
                    children: (0, n.jsx)(o.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: w.DD,
                        children: ed
                    })
                }), (0, n.jsx)("div", {
                    className: w.b,
                    children: (0, n.jsx)(o.JnF, {
                        size: "md",
                        onClick: eu
                    })
                }), (0, n.jsx)("div", {
                    className: w.WA,
                    children: (0, n.jsx)(o.YNO, {
                        targetElementRef: ei,
                        "aria-label": M.intl.string(M.t.vznjTl),
                        position: "bottom",
                        align: "right",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, n.jsx)(o.W1t, {
                                "data-menu-migrated-auto": !0,
                                navId: "emoji-studio-context-menu",
                                onClose: t,
                                onSelect: t,
                                "aria-label": M.intl.string(M.t.vznjTl),
                                children: (0, n.jsx)(o.Drp, {
                                    id: "emoji-studio-reset",
                                    color: "danger",
                                    label: M.intl.string(M.t.ka3Yhm),
                                    action: es
                                })
                            })
                        },
                        shouldShow: el,
                        onRequestClose: () => en(!1),
                        children: () => (0, n.jsx)(o.K0, {
                            buttonRef: ei,
                            variant: "icon-only",
                            icon: o.n1$,
                            onClick: () => en(!0),
                            "aria-label": M.intl.string(M.t.u8IcM0)
                        })
                    })
                })]
            }), (0, n.jsxs)("aside", {
                className: w.HU,
                children: [(0, n.jsx)("div", {
                    className: w.ey,
                    children: (0, n.jsx)(o.D0$, {
                        label: M.intl.string(M.t.JmuIb5),
                        children: (0, n.jsxs)("ul", {
                            children: [(0, n.jsx)("li", {
                                children: (0, n.jsxs)("div", {
                                    className: w.Br,
                                    children: [(0, n.jsx)(k, {
                                        src: q,
                                        alt: M.intl.string(M.t["zS0K+s"])
                                    }), (0, n.jsx)("span", {
                                        children: "6"
                                    })]
                                })
                            }), (0, n.jsx)("li", {
                                children: (0, n.jsx)("div", {
                                    className: w.SA,
                                    children: (0, n.jsx)(k, {
                                        src: q,
                                        alt: M.intl.string(M.t["tE41+d"])
                                    })
                                })
                            })]
                        })
                    })
                }), (0, n.jsx)("div", {
                    children: (0, n.jsx)(S.e, {
                        label: M.intl.string(M.t.m0YV7M),
                        name: $,
                        onNameChange: Y
                    })
                }), h ? null : (0, n.jsx)("div", {
                    children: (0, n.jsx)(O.v, {
                        label: M.intl.string(M.t["9uKafS"]),
                        required: !0,
                        onChange: z,
                        selected: H,
                        onError: e => K(e),
                        labelledBy: "guild-selector-label",
                        isEmojiAnimated: (0, s.q)(R?.file?.type),
                        errorMessage: null != B ? (0, p.u1)(B) : void 0
                    })
                }), (0, n.jsxs)("div", {
                    className: w.jt,
                    children: [null != J && (0, n.jsx)(p.Fx, {
                        error: J,
                        variant: "text-sm/normal",
                        color: "text-feedback-critical"
                    }), (0, n.jsx)(o.Button, {
                        text: M.intl.string(M.t.Q7UP6F),
                        onClick: ea,
                        loading: U,
                        disabled: U || null == R || null == H || $.length < 2 || null != B,
                        fullWidth: !0
                    })]
                })]
            })]
        })
    },
    k = e => {
        let {
            src: t,
            alt: l
        } = e;
        return null == t || "" === t ? (0, n.jsx)("div", {
            className: w.A3
        }) : (0, n.jsx)("img", {
            src: t,
            alt: l
        })
    }