/** chunk id: 552117 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
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
    E = n(725807),
    I = n(71393),
    v = n(287809),
    b = n(954571),
    T = n(927578),
    y = n(256449),
    S = n(679382),
    N = n(378058),
    j = n(148355),
    L = n(915488),
    R = n(652215),
    P = n(788868),
    M = n(985018),
    w = n(865112),
    D = n(260268);

function k(e) {
    b.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
        location_section: R.JJy.STICKER_POPOUT
    }), (0, C.e)()
}

function O(e) {
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
            className: D.bM,
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
            refreshPositionKey: r
        } = e, [o, d, c] = (0, s.yK)([S.A], () => [S.A.getStickerPack(n.pack_id), !S.A.hasLoadedStickerPacks, S.A.isPremiumPack(n.pack_id)], [n]), _ = (e => {
            let {
                sticker: t,
                stickerPack: n
            } = e;
            return a.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
        })({
            sticker: n,
            stickerPack: o
        });
        (0, y.Sr)(n.pack_id);
        let m = (0, y.pD)(l),
            p = {
                refreshPositionKey: r,
                channel: l
            },
            g = a.useRef(p);
        return (a.useEffect(() => {
            g.current = p
        }), a.useEffect(() => {
            let {
                refreshPositionKey: e
            } = g.current;
            e()
        }, [d]), a.useEffect(() => {
            let {
                channel: e
            } = g.current;
            b.default.track(R.HAw.OPEN_POPOUT, {
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
    B = e => {
        let t, {
                sticker: n,
                channel: l,
                closePopout: o,
                refreshPositionKey: C
            } = e,
            [y, S] = a.useState(null),
            [N, L] = a.useState(!1),
            U = v.default.getCurrentUser(),
            B = T.Ay.canUseCustomStickersEverywhere(U),
            G = (0, s.bG)([I.A], () => I.A.getGuild(n.guild_id)),
            F = null != G,
            [H, V] = a.useState(!1),
            [q, W] = a.useState(null),
            z = a.useMemo(() => ({
                page: null != l.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                section: R.JJy.STICKER_POPOUT
            }), [l.guild_id]),
            {
                current: Y
            } = a.useRef({
                guild_id: l.getGuildId(),
                ...(0, h.dI)(l)
            }),
            Q = {
                stickerSourceGuild: G,
                refreshPositionKey: C
            },
            K = a.useRef(Q);
        a.useEffect(() => {
            K.current = Q
        }), a.useEffect(() => {
            let {
                stickerSourceGuild: e
            } = K.current;
            (async () => {
                (null == e || e.features.has(R.GuildFeatures.DISCOVERABLE)) && S(await (0, A.A)(n.id)), L(!0)
            })()
        }, [n.id, F]);
        let X = n.guild_id === l.getGuildId(),
            J = null != y,
            Z = !1,
            $ = "Custom Sticker Popout";
        B ? t = F ? X ? M.intl.string(M.t.fZ0DiG) : M.intl.string(M.t["1f6D9m"]) : J ? M.intl.string(M.t.yHmoR9) : M.intl.string(M.t.vZaScH) : F ? (t = X ? M.intl.string(M.t.jNphpt) : M.intl.string(M.t.lyD5ZW), Z = !0, $ = "Custom Sticker Popout (Upsell)") : J ? (t = M.intl.string(M.t.IuXYch), Z = !0, $ = "Custom Sticker Popout (Upsell)") : (t = M.intl.format(M.t.hGWuxU, {
            openPremiumSettings: () => {
                k(l), o()
            }
        }), $ = "Custom Sticker Popout (Soft Upsell)");
        let ee = !Z && !F && J && B;
        if (a.useEffect(() => {
                let {
                    refreshPositionKey: e
                } = K.current;
                e()
            }, [N, y]), (0, m.Ay)(() => {
                b.default.track(R.HAw.OPEN_POPOUT, {
                    type: $,
                    ...Y
                })
            }), !N) return (0, i.jsx)(f.Y0, {
            className: w.v0
        });
        {
            let e;
            return (0, i.jsxs)(f.Uq, {
                className: D.Bm,
                children: [(e = async () => {
                    if (null == y || F) return;
                    o();
                    let e = y.id;
                    try {
                        await _.A.joinGuild(e), _.A.transitionToGuildSync(e)
                    } catch {}
                }, (0, i.jsxs)("div", {
                    className: D.gH,
                    children: [(0, i.jsx)(O, {
                        description: t,
                        sticker: n
                    }), Z && (0, i.jsx)(E.A, {
                        className: D.lI,
                        subscriptionTier: P.pe.TIER_2,
                        size: c.$n.Sizes.SMALL,
                        fullWidth: !0,
                        textOptions: {
                            textOverride: M.intl.string(M.t["gl/XHJ"])
                        },
                        onSubscribeModalClose: t => t ? e() : o(),
                        postSuccessGuild: F || null == y ? void 0 : y,
                        premiumModalAnalyticsLocation: z
                    }), ee && (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: D.lI,
                        children: (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            text: M.intl.string(M.t.riu2R5),
                            fullWidth: !0,
                            onClick: e
                        })
                    })]
                })), (null != G || null != y) && (() => {
                    if (!J && !F) return;
                    let e = (y?.stickers ?? []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
                        t = null != y ? g.GO.createFromDiscoverableGuild(y) : g.GO.createFromGuildRecord(G);
                    return (0, i.jsxs)("div", {
                        className: D.tl,
                        children: [(0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: D.YW,
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
                                className: D.wK,
                                children: (0, i.jsxs)(p.A, {
                                    children: [(0, i.jsx)(u.Text, {
                                        className: D.__invalid_showMoreEmojisLabel,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: M.intl.string(M.t.vtH5hn)
                                    }), (0, i.jsx)(u.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: r()(D.ZB, {
                                            [D.cP]: !H
                                        })
                                    })]
                                })
                            }), H && (0, i.jsx)(p.A, {
                                wrap: p.A.Wrap.WRAP,
                                align: p.A.Align.START,
                                justify: p.A.Justify.START,
                                className: D.LX,
                                children: e.map(e => (0, i.jsx)(d.m, {
                                    text: e.name,
                                    ...f.Uk,
                                    children: (0, i.jsx)("div", {
                                        className: r()(D.Th, {
                                            [w.vT]: null != q && q !== e.id
                                        }),
                                        onMouseEnter: () => {
                                            W(e.id)
                                        },
                                        onMouseLeave: () => {
                                            W(null)
                                        },
                                        children: (0, i.jsx)(j.A, {
                                            size: 32,
                                            enlargeOnInteraction: !0,
                                            enlargeWithName: !1,
                                            enlargeScaleFactor: 2,
                                            isInteracting: q === e.id,
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

function G(e) {
    let {
        channel: t,
        closePopout: n,
        sticker: a
    } = e;
    return (0, i.jsx)(f.Uq, {
        className: w.Bm,
        children: (0, i.jsx)(O, {
            sticker: a,
            description: M.intl.format(M.t.hGWuxU, {
                openPremiumSettings: () => {
                    n(), k(t)
                }
            })
        })
    })
}
let F = e => {
    let {
        renderableSticker: t,
        channel: n,
        closePopout: a,
        refreshPositionKey: l
    } = e, [r, s] = (0, y.Zq)(t, !0);
    return null != r && (0, N.FD)(r) ? (0, i.jsx)(U, {
        sticker: r,
        closePopout: a,
        channel: n,
        refreshPositionKey: l
    }) : null != r && (0, N.Xw)(r) ? (0, i.jsx)(B, {
        sticker: r,
        channel: n,
        closePopout: a,
        refreshPositionKey: l
    }) : s ? null == r ? (0, i.jsx)(G, {
        channel: n,
        closePopout: a,
        sticker: t
    }) : (a(), null) : (0, i.jsx)(f.Y0, {})
}