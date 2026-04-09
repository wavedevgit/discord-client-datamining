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
    b = l(967198),
    _ = l(954571),
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
    w = l(985018),
    M = l(507510);
let T = new h.A("EmojiStudio"),
    R = e => {
        let {
            guildId: t
        } = e, l = "userImage" in e ? e.userImage : void 0, r = "emoji" in e ? e.emoji : void 0, h = !!r, [R, D] = i.useState(l ?? null), [L, G] = i.useState(!1), F = (0, u.bG)([j.A, b.A, f.A], () => {
            let e = b.A.getGuildId(),
                t = j.A.getGuild(e);
            return f.A.can(y.xBc.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
        }), [H, z] = i.useState(t ?? F), [U, W] = i.useState(!1), [P, J] = i.useState(null), [B, K] = i.useState(null), [$, Y] = i.useState(function(e) {
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
                T.error("Failed to fetch emoji image", e), J(I.j.MISSING_IMAGE_DATA), G(!1)
            })
        }, [r]);
        let er = i.useCallback(e => {
            let {
                reason: t
            } = e, l = P ?? B;
            _.default.track(y.HAw.EMOJI_STUDIO_ENDED, {
                reason: t,
                is_initial: 0 === X.current,
                has_image: null != R,
                error: null == l ? null : String(l),
                throttled_edit_count: Z.current,
                session_duration_ms: Date.now() - V.current,
                has_guild_selected: null != H
            })
        }, [P, B, V, R, H]);
        (0, m.l0)(() => {
            ee.current || er({
                reason: "closed"
            })
        });
        let ea = i.useCallback(async () => {
                if (J(null), null == H) return void J(I.j.MISSING_GUILD);
                if (null == R || R?.file == null || null == q) return void J(I.j.MISSING_IMAGE_DATA);
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
                    W(!1), J((0, p.E2)(e)), T.error("Failed to upload emoji.", e);
                    return
                }
                if (null != r) try {
                    await (0, d.ak)(H, r.id, e.id)
                } catch (e) {
                    if (429 === e.status) c.A.show({
                        title: w.intl.string(w.t.iufib1),
                        body: w.intl.string(w.t.Whhv4w)
                    });
                    else {
                        W(!1), J((0, p.E2)(e)), T.error("Failed to delete emoji.", e);
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
                J(null), null != R && Q(R.data), Z.current = 0, (0, v.O)(!1), et.current?.reset()
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
                null != t && E.Ay.isDataTooBig(t) && (i = I.j.TOO_BIG), J(n ?? i), l < X.current || null != t && (Q(t), X.current = l)
            }, []),
            ec = i.useCallback(() => {
                Z.current++, (0, v.O)(!0)
            }, []),
            ed = h ? w.intl.string(w.t.FOYn8U) : w.intl.string(w.t.iMJO37);
        return L || null == R ? (0, n.jsx)("main", {
            className: M.iW,
            children: (0, n.jsxs)("div", {
                className: M.EN,
                children: [(0, n.jsx)("div", {
                    className: M.uv,
                    children: (0, n.jsx)(o.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: M.DD,
                        children: ed
                    })
                }), (0, n.jsx)("div", {
                    className: M.b,
                    children: (0, n.jsx)(o.JnF, {
                        size: "md",
                        onClick: eu
                    })
                })]
            })
        }) : (0, n.jsxs)("main", {
            className: a()(M.iW, {
                [M.WY]: null != R
            }),
            children: [(0, n.jsxs)("div", {
                className: M.EN,
                children: [(0, n.jsx)(C.n, {
                    ref: et,
                    file: R.file,
                    imageUri: R.data,
                    onUpdate: eo,
                    onThrottledEdit: ec
                }), (0, n.jsx)("div", {
                    className: M.uv,
                    children: (0, n.jsx)(o.Heading, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: M.DD,
                        children: ed
                    })
                }), (0, n.jsx)("div", {
                    className: M.b,
                    children: (0, n.jsx)(o.JnF, {
                        size: "md",
                        onClick: eu
                    })
                }), (0, n.jsx)("div", {
                    className: M.WA,
                    children: (0, n.jsx)(o.YNO, {
                        targetElementRef: ei,
                        "aria-label": w.intl.string(w.t.vznjTl),
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
                                "aria-label": w.intl.string(w.t.vznjTl),
                                children: (0, n.jsx)(o.Drp, {
                                    id: "emoji-studio-reset",
                                    color: "danger",
                                    label: w.intl.string(w.t.ka3Yhm),
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
                            "aria-label": w.intl.string(w.t.u8IcM0)
                        })
                    })
                })]
            }), (0, n.jsxs)("aside", {
                className: M.HU,
                children: [(0, n.jsx)("div", {
                    className: M.ey,
                    children: (0, n.jsx)(o.D0$, {
                        label: w.intl.string(w.t.JmuIb5),
                        children: (0, n.jsxs)("ul", {
                            children: [(0, n.jsx)("li", {
                                children: (0, n.jsxs)("div", {
                                    className: M.Br,
                                    children: [(0, n.jsx)(k, {
                                        src: q,
                                        alt: w.intl.string(w.t["zS0K+s"])
                                    }), (0, n.jsx)("span", {
                                        children: "6"
                                    })]
                                })
                            }), (0, n.jsx)("li", {
                                children: (0, n.jsx)("div", {
                                    className: M.SA,
                                    children: (0, n.jsx)(k, {
                                        src: q,
                                        alt: w.intl.string(w.t["tE41+d"])
                                    })
                                })
                            })]
                        })
                    })
                }), (0, n.jsx)("div", {
                    children: (0, n.jsx)(S.e, {
                        label: w.intl.string(w.t.m0YV7M),
                        name: $,
                        onNameChange: Y
                    })
                }), h ? null : (0, n.jsx)("div", {
                    children: (0, n.jsx)(O.v, {
                        label: w.intl.string(w.t["9uKafS"]),
                        required: !0,
                        onChange: z,
                        selected: H,
                        onError: e => K(e),
                        labelledBy: "guild-selector-label",
                        isEmojiAnimated: (0, s.q)(R?.file?.type),
                        errorMessage: null != B ? (0, p.u1)(B) : void 0
                    })
                }), (0, n.jsxs)("div", {
                    className: M.jt,
                    children: [null != P && (0, n.jsx)(p.Fx, {
                        error: P,
                        variant: "text-sm/normal",
                        color: "text-feedback-critical"
                    }), (0, n.jsx)(o.Button, {
                        text: w.intl.string(w.t.Q7UP6F),
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
            className: M.A3
        }) : (0, n.jsx)("img", {
            src: t,
            alt: l
        })
    }