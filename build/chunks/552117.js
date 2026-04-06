/** chunk id: 552117 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
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
    N = n(256449),
    y = n(679382),
    S = n(378058),
    j = n(148355),
    L = n(915488),
    R = n(652215),
    P = n(788868),
    D = n(985018),
    M = n(865112),
    w = n(260268);

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
            className: w.bM,
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
            channel: s,
            refreshPositionKey: r
        } = e, [o, d, c] = (0, a.yK)([y.A], () => [y.A.getStickerPack(n.pack_id), !y.A.hasLoadedStickerPacks, y.A.isPremiumPack(n.pack_id)], [n]), _ = (e => {
            let {
                sticker: t,
                stickerPack: n
            } = e;
            return l.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
        })({
            sticker: n,
            stickerPack: o
        });
        (0, N.Sr)(n.pack_id);
        let m = (0, N.pD)(s),
            p = {
                refreshPositionKey: r,
                channel: s
            },
            g = l.useRef(p);
        return (l.useEffect(() => {
            g.current = p
        }), l.useEffect(() => {
            let {
                refreshPositionKey: e
            } = g.current;
            e()
        }, [d]), l.useEffect(() => {
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
            className: M.v0
        }) : (0, i.jsxs)(f.Uq, {
            className: M.Bm,
            children: [(0, i.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: n.name
            }), (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: c ? D.intl.format(D.t.auckXz, {
                    stickerPackName: o.name
                }) : D.intl.format(D.t.OzB6e3, {
                    stickerPackName: o.name
                })
            }), (0, i.jsx)("ul", {
                className: M.pQ,
                children: _.map(e => (0, i.jsx)(j.A, {
                    isInteracting: !0,
                    size: 80,
                    sticker: e
                }, e.id))
            }), c && (0, i.jsx)("div", {
                className: M.j0,
                children: (0, i.jsx)(u.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: D.intl.string(D.t.GPy3Ar),
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
                channel: s,
                closePopout: o,
                refreshPositionKey: C
            } = e,
            [N, y] = l.useState(null),
            [S, L] = l.useState(!1),
            U = v.default.getCurrentUser(),
            B = T.Ay.canUseCustomStickersEverywhere(U),
            G = (0, a.bG)([I.A], () => I.A.getGuild(n.guild_id)),
            F = null != G,
            [H, V] = l.useState(!1),
            [q, W] = l.useState(null),
            Y = l.useMemo(() => ({
                page: null != s.guild_id ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                section: R.JJy.STICKER_POPOUT
            }), [s.guild_id]),
            {
                current: z
            } = l.useRef({
                guild_id: s.getGuildId(),
                ...(0, h.dI)(s)
            }),
            Q = {
                stickerSourceGuild: G,
                refreshPositionKey: C
            },
            K = l.useRef(Q);
        l.useEffect(() => {
            K.current = Q
        }), l.useEffect(() => {
            let {
                stickerSourceGuild: e
            } = K.current;
            (async () => {
                (null == e || e.features.has(R.GuildFeatures.DISCOVERABLE)) && y(await (0, A.A)(n.id)), L(!0)
            })()
        }, [n.id, F]);
        let J = n.guild_id === s.getGuildId(),
            X = null != N,
            Z = !1,
            $ = "Custom Sticker Popout";
        B ? t = F ? J ? D.intl.string(D.t.fZ0DiG) : D.intl.string(D.t["1f6D9m"]) : X ? D.intl.string(D.t.yHmoR9) : D.intl.string(D.t.vZaScH) : F ? (t = J ? D.intl.string(D.t.jNphpt) : D.intl.string(D.t.lyD5ZW), Z = !0, $ = "Custom Sticker Popout (Upsell)") : X ? (t = D.intl.string(D.t.IuXYch), Z = !0, $ = "Custom Sticker Popout (Upsell)") : (t = D.intl.format(D.t.hGWuxU, {
            openPremiumSettings: () => {
                k(s), o()
            }
        }), $ = "Custom Sticker Popout (Soft Upsell)");
        let ee = !Z && !F && X && B;
        if (l.useEffect(() => {
                let {
                    refreshPositionKey: e
                } = K.current;
                e()
            }, [S, N]), (0, m.Ay)(() => {
                b.default.track(R.HAw.OPEN_POPOUT, {
                    type: $,
                    ...z
                })
            }), !S) return (0, i.jsx)(f.Y0, {
            className: M.v0
        });
        {
            let e;
            return (0, i.jsxs)(f.Uq, {
                className: w.Bm,
                children: [(e = async () => {
                    if (null == N || F) return;
                    o();
                    let e = N.id;
                    try {
                        await _.A.joinGuild(e), _.A.transitionToGuildSync(e)
                    } catch {}
                }, (0, i.jsxs)("div", {
                    className: w.gH,
                    children: [(0, i.jsx)(O, {
                        description: t,
                        sticker: n
                    }), Z && (0, i.jsx)(E.A, {
                        className: w.lI,
                        subscriptionTier: P.pe.TIER_2,
                        size: c.$n.Sizes.SMALL,
                        fullWidth: !0,
                        textOptions: {
                            textOverride: D.intl.string(D.t["gl/XHJ"])
                        },
                        onSubscribeModalClose: t => t ? e() : o(),
                        postSuccessGuild: F || null == N ? void 0 : N,
                        premiumModalAnalyticsLocation: Y
                    }), ee && (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: w.lI,
                        children: (0, i.jsx)(u.Button, {
                            variant: "primary",
                            size: "sm",
                            text: D.intl.string(D.t.riu2R5),
                            fullWidth: !0,
                            onClick: e
                        })
                    })]
                })), (null != G || null != N) && (() => {
                    if (!X && !F) return;
                    let e = (N?.stickers ?? []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
                        t = null != N ? g.GO.createFromDiscoverableGuild(N) : g.GO.createFromGuildRecord(G);
                    return (0, i.jsxs)("div", {
                        className: w.tl,
                        children: [(0, i.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: w.YW,
                            children: F ? D.intl.string(D.t.kx6pEG) : D.intl.string(D.t.pDE7Gb)
                        }), (0, i.jsx)(x.G7, {
                            expressionSourceGuild: t,
                            hasJoinedExpressionSourceGuild: F,
                            isDisplayingJoinGuildButtonInPopout: ee
                        }), !F && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(u.DUT, {
                                onClick: () => {
                                    C(), V(!H)
                                },
                                className: w.wK,
                                children: (0, i.jsxs)(p.A, {
                                    children: [(0, i.jsx)(u.Text, {
                                        className: w.__invalid_showMoreEmojisLabel,
                                        variant: "text-xs/normal",
                                        color: "none",
                                        children: D.intl.string(D.t.vtH5hn)
                                    }), (0, i.jsx)(u.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: r()(w.ZB, {
                                            [w.cP]: !H
                                        })
                                    })]
                                })
                            }), H && (0, i.jsx)(p.A, {
                                wrap: p.A.Wrap.WRAP,
                                align: p.A.Align.START,
                                justify: p.A.Justify.START,
                                className: w.LX,
                                children: e.map(e => (0, i.jsx)(d.m, {
                                    text: e.name,
                                    ...f.Uk,
                                    children: (0, i.jsx)("div", {
                                        className: r()(w.Th, {
                                            [M.vT]: null != q && q !== e.id
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
        sticker: l
    } = e;
    return (0, i.jsx)(f.Uq, {
        className: M.Bm,
        children: (0, i.jsx)(O, {
            sticker: l,
            description: D.intl.format(D.t.hGWuxU, {
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
        closePopout: l,
        refreshPositionKey: s
    } = e, [r, a] = (0, N.Zq)(t, !0);
    return null != r && (0, S.FD)(r) ? (0, i.jsx)(U, {
        sticker: r,
        closePopout: l,
        channel: n,
        refreshPositionKey: s
    }) : null != r && (0, S.Xw)(r) ? (0, i.jsx)(B, {
        sticker: r,
        channel: n,
        closePopout: l,
        refreshPositionKey: s
    }) : a ? null == r ? (0, i.jsx)(G, {
        channel: n,
        closePopout: l,
        sticker: t
    }) : (l(), null) : (0, i.jsx)(f.Y0, {})
}