/** chunk id: 480191 params = (module,exports,require) **/
n.d(t, {
    A: () => D
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(835245),
    o = n(417597),
    d = n(827734),
    c = n(397927),
    u = n(793574),
    _ = n(58149),
    m = n(601255),
    h = n(562819),
    p = n(234914),
    g = n(22007),
    A = n(77350),
    x = n(112758),
    f = n(754459),
    C = n(967144),
    I = n(342296),
    E = n(253932),
    b = n(696451),
    v = n(287809),
    T = n(486020),
    y = n(449054),
    S = n(218394),
    N = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    w = n(960240),
    M = n(278664);

function D(e) {
    let {
        embedUrl: t,
        message: n,
        channel: r
    } = e, D = a.useRef(null), k = a.useRef(null), O = (0, j.D)(t, n), {
        setPopout: U
    } = (0, f.A)(n.id, R.Fd), B = (0, x.VL)(n, r, U, !0), G = E.kt.useSetting(), F = (0, S.j)(), [H, V] = a.useState(!1), [q, W] = a.useState(O?.coverImage == null), Y = (0, o.bG)([b.Ay, v.default], () => b.Ay.isMember(O?.guildId, v.default.getCurrentUser()?.id), [O]), z = (0, o.bG)([b.Ay], () => O?.authorId != null ? b.Ay.getMember(O.guildId, O.authorId) : null), Q = (0, m.A)(z?.avatarDecoration != null ? z?.avatarDecoration : O?.user?.avatarDecoration), [K, J, X] = a.useMemo(() => [z?.colorString ?? "inherit", z?.colorStrings ?? null, z?.colorRoleId], [z]), Z = (0, C.gn)(z?.guildId, O?.authorId ?? void 0, J), {
        reducedMotion: $
    } = a.useContext(c.CZY), [ee, et] = a.useState(!1), en = a.useCallback(() => {
        V(!0)
    }, [V]), ei = a.useCallback(() => {
        V(!1)
    }, [V]), ea = a.useCallback(async () => {
        null != O && ((0, _.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
            media_post_id: O.threadId,
            channel_id: r.id,
            can_access: O.canAccess,
            is_member: Y
        }), O.canAccess ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.threadId, O.messageId)) : Y ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.parentChannelId)) : await y.Z2(O.guildId, {}, {
            channelId: O.parentChannelId
        }))
    }, [O, r, Y]);
    if (null == O) return null;
    let er = (0, T.F_)({
            avatarDecoration: Q,
            size: (0, h.Te)(c._3J.SIZE_40),
            canAnimate: ee
        }),
        el = O.user?.getAvatarURL(O.guildId, 40, ee),
        es = () => {
            $.enabled || et(e => !e)
        },
        eo = O.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: w.wb,
        children: [(0, i.jsxs)("div", {
            className: w.iT,
            onMouseEnter: en,
            onMouseLeave: ei,
            children: [!q && (!0 === O.shouldShowBlurredThumbnailImage ? (0, i.jsx)("img", {
                src: M,
                alt: P.intl.string(P.t.rIbh8H),
                className: l()(w.xn, {
                    [w.p6]: O.shouldSpoiler
                }),
                onContextMenu: B,
                onError: () => W(!0)
            }) : (0, i.jsx)(p.A, {
                src: !(F && (G || H)) && ed ? `${eo}?format=png` : eo,
                backgroundSrc: `${eo}?format=png`,
                alt: P.intl.string(P.t.rIbh8H),
                aspectRatio: 16 / 9,
                className: l()(w.xn, {
                    [w.p6]: O.shouldSpoiler
                }),
                imageChildClassName: w.q_,
                onContextMenu: B,
                onError: () => W(!0)
            })), null != O.coverImageOverlayText && (0, i.jsx)(c.DUT, {
                onClick: ea,
                children: (0, i.jsx)("div", {
                    className: w.nx,
                    children: (0, i.jsxs)("div", {
                        className: w.BS,
                        children: [(0, i.jsx)(N.A, {
                            color: d.A.colors.WHITE.css
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "always-white",
                            children: O.coverImageOverlayText
                        })]
                    })
                })
            })]
        }), (0, i.jsxs)("div", {
            className: w.iQ,
            children: [(0, i.jsxs)("div", {
                className: w.OA,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: w.hF,
                    children: O.title
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: l()(w.hF, w.Fq),
                    children: O.subtitle
                })]
            }), (0, i.jsxs)("div", {
                className: w._5,
                children: [null != O.authorId && null != el && (0, i.jsx)(I.A, {
                    targetElementRef: k,
                    userId: O.authorId,
                    guildId: O.guildId,
                    channelId: r.id,
                    messageId: n.id,
                    roleId: X,
                    avatarUrl: O.avatarUrl,
                    newAnalyticsLocations: [u.A.AVATAR],
                    spacing: 12,
                    children: e => (0, i.jsx)("div", {
                        onMouseEnter: es,
                        onMouseLeave: es,
                        children: (0, i.jsx)(c.euF, {
                            ...e,
                            ref: k,
                            size: c._3J.SIZE_40,
                            src: el,
                            "aria-label": P.intl.string(P.t.KXz3XB),
                            avatarDecoration: er
                        })
                    })
                }), (0, i.jsxs)("div", {
                    className: w.Ny,
                    children: [(0, i.jsxs)("div", {
                        className: w.O9,
                        children: [null != O.channelName && (0, i.jsx)(c.d2$, {
                            size: "md",
                            color: "currentColor",
                            className: w.Xg
                        }), (0, i.jsx)(c.DUT, {
                            onClick: ea,
                            className: w.HA,
                            children: (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: O.channelName ?? O.guildName
                            })
                        })]
                    }), null != O.authorName && (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: w.wn,
                        children: P.intl.format(P.t.voIDKa, {
                            authorName: O.authorName,
                            authorNameHook: () => null == O.authorId ? (0, i.jsx)(c.V30, {
                                name: O.authorName,
                                colorString: K,
                                colorStrings: Z,
                                className: w.fh
                            }) : (0, i.jsx)(I.A, {
                                targetElementRef: D,
                                userId: O.authorId,
                                guildId: O.guildId,
                                channelId: r.id,
                                messageId: n.id,
                                roleId: X,
                                avatarUrl: O.avatarUrl,
                                newAnalyticsLocations: [u.A.USERNAME],
                                children: e => (0, i.jsx)(c.V30, {
                                    ...e,
                                    ref: D,
                                    name: O.authorName,
                                    colorString: K,
                                    colorStrings: Z,
                                    className: w.fh
                                })
                            }, (0, s.A)())
                        })
                    })]
                }), O.canAccess ? (0, i.jsx)(c.Button, {
                    variant: "primary",
                    onClick: ea,
                    text: O.ctaText
                }) : (0, i.jsx)(c.Button, {
                    onClick: ea,
                    variant: "primary",
                    text: O.ctaText
                })]
            })]
        })]
    })
}