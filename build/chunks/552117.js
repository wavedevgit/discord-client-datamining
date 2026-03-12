/** chunk id: 552117 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(421380),
    u = n(397927),
    _ = n(686956),
    m = n(964486),
    h = n(58149),
    p = n(235986),
    g = n(624793),
    A = n(477712),
    x = n(767143),
    f = n(652176),
    C = n(87719),
    E = n(465794),
    I = n(71393),
    b = n(287809),
    T = n(954571),
    v = n(927578),
    S = n(256449),
    y = n(679382),
    N = n(378058),
    j = n(148355),
    L = n(915488),
    R = n(652215),
    P = n(788868),
    M = n(985018),
    w = n(884795),
    O = n(906121);

function D(e) {
    T.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
        location_section: R.JJy.STICKER_POPOUT
    }), (0, C.e)()
}

function k(e) {
    let {
        sticker: t,
        description: n
    } = e;
    return (0, i.jsxs)(p.A, {
        children: [(0, i.jsx)(j.A, {
            sticker: t,
            size: 48,
            isInteracting: !0
        }), (0, i.jsxs)(p.A, {
            direction: p.A.Direction.VERTICAL,
            justify: p.A.Justify.CENTER,
            className: O.bM,
            children: [(0, i.jsx)(u.Text, {
                variant: "text-md/semibold",
                children: (0, i.jsx)(o.A, {
                    children: t.name
                })
            }), null != n && (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: n
            })]
        })]
    })
}
let U = e => {
        let {
            closePopout: t,
            sticker: n,
            channel: l,
            refreshPositionKey: a
        } = e, [o, d, c] = (0, s.yK)([y.A], () => [y.A.getStickerPack(n.pack_id), !y.A.hasLoadedStickerPacks, y.A.isPremiumPack(n.pack_id)], [n]), _ = (e => {
            let {
                sticker: t,
                stickerPack: n
            } = e;
            return r.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
        })({
            sticker: n,
            stickerPack: o
        });
        (0, S.Sr)(n.pack_id);
        let m = (0, S.pD)(l),
            p = {
                refreshPositionKey: a,
                channel: l
            },
            g = r.useRef(p);
        return (r.useEffect(() => {
            g.current = p
        }), r.useEffect(() => {
            let {
                refreshPositionKey: e
            } = g.current;
            e()
        }, [d]), r.useEffect(() => {
            let {
                channel: e
            } = g.current;
            T.default.track(R.HAw.OPEN_POPOUT, {
                type: R.JJy.STICKER_POPOUT,
                guild_id: e.getGuildId(),
                sticker_pack_id: n.pack_id,
                ...(0, h.dI)(e)
            })
        }, [n.pack_id]), d || null == o) ? (0, i.jsx)(f.Y0, {
            className: w.v0
        }) : (0, i.jsxs)(f.Uq, {
            className: w.Bm,
            children: [(0, i.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: n.name
            }), (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: c ? M.intl.format(M.t.auckXz, {
                    stickerPackName: o.name
                }) : M.intl.format(M.t.OzB6e3, {
                    stickerPackName: o.name
                })
            }), (0, i.jsx)("ul", {
                className: w.pQ,
                children: _.map(e => (0, i.jsx)(j.A, {
                    isInteracting: !0,
                    size: 80,
                    sticker: e
                }, e.id))
            }), c && (0, i.jsx)("div", {
                className: w.j0,
                children: (0, i.jsx)(u.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: M.intl.string(M.t.GPy3Ar),
                    onClick: () => {
                        c && (0, L.a)({
                            stickerPack: o,
                            stickerPickerCategories: m
                        }), t()
                    }
                }, "view-sticker-pack")
            })]
        })
    },
    G = e => {
        let t, {
                sticker: n,
                channel: l,
                closePopout: o,
                refreshPositionKey: C
            } = e,
            [S, y] = r.useState(null),
            [N, L] = r.useState(!1),
            U = b.default.getCurrentUser(),
            G = v.Ay.canUseCustomStickersEverywhere(U),
            B = (0, s.bG)([I.A], () => I.A.getGuild(n.guild_id)),
            F = null != B,
            [H, V] = r.useState(!1),
            [W, q] = r.useState(null),
            Y = r.useMemo(() => ({
                page: null != l.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                section: R.JJy.STICKER_POPOUT
            }), [l.guild_id]),
            {
                current: z
            } = r.useRef({
                guild_id: l.getGuildId(),
                ...(0, h.dI)(l)
            }),
            Q = {
                stickerSourceGuild: B,
                refreshPositionKey: C
            },
            K = r.useRef(Q);
        r.useEffect(() => {
            K.current = Q
        }), r.useEffect(() => {
            let {
                stickerSourceGuild: e
            } = K.current;
            (async () => {
                (null == e || e.features.has(R.GuildFeatures.DISCOVERABLE)) && y(await (0, A.A)(n.id)), L(!0)
            })()
        }, [n.id, F]);
        let J = n.guild_id === l.getGuildId(),
            X = null != S,
            Z = !1,
            $ = "Custom Sticker Popout";
        G ? t = F ? J ? M.intl.string(M.t.fZ0DiG) : M.intl.string(M.t["1f6D9m"]) : X ? M.intl.string(M.t.yHmoR9) : M.intl.string(M.t.vZaScH) : F ? (t = J ? M.intl.string(M.t.jNphpt) : M.intl.string(M.t.lyD5ZW), Z = !0, $ = "Custom Sticker Popout (Upsell)") : X ? (t = M.intl.string(M.t.IuXYch), Z = !0, $ = "Custom Sticker Popout (Upsell)") : (t = M.intl.format(M.t.hGWuxU, {
            openPremiumSettings: () => {
                D(l), o()
            }
        }), $ = "Custom Sticker Popout (Soft Upsell)");
        let ee = !Z && !F && X && G;
        if (r.useEffect(() => {
                let {
                    refreshPositionKey: e
                } = K.current;
                e()
            }, [N, S]), (0, m.Ay)(() => {
                T.default.track(R.HAw.OPEN_POPOUT, {
                    type: $,
                    ...z
                })
            }), !N) return (0, i.jsx)(f.Y0, {
            className: w.v0
        });
        {
            let e;
            return (0, i.jsxs)(f.Uq, {
                className: O.Bm,
                children: [(e = async () => {
                    if (null == S || F) return;
                    o();
                    let e = S.id;
                    try {
                        await _.A.joinGuild(e), _.A.transitionToGuildSync(e)
                    } catch {}
                }, (0, i.jsxs)("div", {
                    className: O.gH,
                    children: [(0, i.jsx)(k, {
                        description: t,
                        sticker: n
                    }), Z && (0, i.jsx)(E.A, {
                        className: O.lI,
                        subscriptionTier: P.pe.TIER_2,
                        size: c.$n.Sizes.SMALL,
                        fullWidth: !0,
                        textOptions: {
                            textOverride: M.intl.string(M.t["gl/XHJ"])
                        },
                        onSubscribeModalClose: t => t ? e() : o(),
                        postSuccessGuild: F || null == S ? void 0 : S,
                        premiumModalAnalyticsLocation: Y
                    }), ee && (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: O.lI,
                        children: (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            text: M.intl.string(M.t.riu2R5),
                            fullWidth: !0,
                            onClick: e
                        })
                    })]
                })), (null != B || null != S) && (() => {
                    if (!X && !F) return;
                    let e = (S?.stickers ?? []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
                        t = null != S ? g.GO.createFromDiscoverableGuild(S) : g.GO.createFromGuildRecord(B);
                    return (0, i.jsxs)("div", {
                        className: O.tl,
                        children: [(0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: O.YW,
                            children: F ? M.intl.string(M.t.kx6pEG) : M.intl.string(M.t.pDE7Gb)
                        }), (0, i.jsx)(x.G7, {
                            expressionSourceGuild: t,
                            hasJoinedExpressionSourceGuild: F,
                            isDisplayingJoinGuildButtonInPopout: ee
                        }), !F && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(u.DUT, {
                                onClick: () => {
                                    C(), V(!H)
                                },
                                className: O.wK,
                                children: (0, i.jsxs)(p.A, {
                                    children: [(0, i.jsx)(u.Text, {
                                        className: O.__invalid_showMoreEmojisLabel,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: M.intl.string(M.t.vtH5hn)
                                    }), (0, i.jsx)(u.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(O.ZB, {
                                            [O.cP]: !H
                                        })
                                    })]
                                })
                            }), H && (0, i.jsx)(p.A, {
                                wrap: p.A.Wrap.WRAP,
                                align: p.A.Align.START,
                                justify: p.A.Justify.START,
                                className: O.LX,
                                children: e.map(e => (0, i.jsx)(d.m, {
                                    text: e.name,
                                    ...f.Uk,
                                    children: (0, i.jsx)("div", {
                                        className: a()(O.Th, {
                                            [w.vT]: null != W && W !== e.id
                                        }),
                                        onMouseEnter: () => {
                                            q(e.id)
                                        },
                                        onMouseLeave: () => {
                                            q(null)
                                        },
                                        children: (0, i.jsx)(j.A, {
                                            size: 32,
                                            enlargeOnInteraction: !0,
                                            enlargeWithName: !1,
                                            enlargeScaleFactor: 2,
                                            isInteracting: W === e.id,
                                            sticker: e
                                        })
                                    }, e.id)
                                }, e.id))
                            })]
                        })]
                    })
                })()]
            })
        }
    };

function B(e) {
    let {
        channel: t,
        closePopout: n,
        sticker: r
    } = e;
    return (0, i.jsx)(f.Uq, {
        className: w.Bm,
        children: (0, i.jsx)(k, {
            sticker: r,
            description: M.intl.format(M.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), D(t)
                }
            })
        })
    })
}
let F = e => {
    let {
        renderableSticker: t,
        channel: n,
        closePopout: r,
        refreshPositionKey: l
    } = e, [a, s] = (0, S.Zq)(t, !0);
    return null != a && (0, N.FD)(a) ? (0, i.jsx)(U, {
        sticker: a,
        closePopout: r,
        channel: n,
        refreshPositionKey: l
    }) : null != a && (0, N.Xw)(a) ? (0, i.jsx)(G, {
        sticker: a,
        channel: n,
        closePopout: r,
        refreshPositionKey: l
    }) : s ? s && null == a ? (0, i.jsx)(B, {
        channel: n,
        closePopout: r,
        sticker: t
    }) : (r(), null) : (0, i.jsx)(f.Y0, {})
}