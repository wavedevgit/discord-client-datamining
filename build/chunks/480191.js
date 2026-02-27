/** chunk id: 480191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(835245),
    o = n(417597),
    d = n(827734),
    c = n(397927),
    u = n(793574),
    _ = n(58149),
    m = n(325445),
    h = n(954921),
    p = n(234914),
    g = n(22007),
    A = n(77350),
    x = n(112758),
    f = n(754459),
    C = n(967144),
    E = n(342296),
    I = n(253932),
    b = n(696451),
    T = n(287809),
    v = n(486020),
    S = n(449054),
    y = n(218394),
    N = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    M = n(780247),
    w = n(278664);

function D(e) {
    let {
        embedUrl: t,
        message: n,
        channel: r
    } = e, D = l.useRef(null), k = l.useRef(null), O = (0, j.D)(t, n), {
        setPopout: U
    } = (0, f.A)(n.id, R.Fd), G = (0, x.VL)(n, r, U, !0), B = I.kt.useSetting(), F = (0, y.j)(), [H, V] = l.useState(!1), [W, q] = l.useState(O?.coverImage == null), Y = (0, o.bG)([b.Ay, T.default], () => b.Ay.isMember(O?.guildId, T.default.getCurrentUser()?.id), [O]), z = (0, o.bG)([b.Ay], () => O?.authorId != null ? b.Ay.getMember(O.guildId, O.authorId) : null), Q = (0, m.A)(z?.avatarDecoration != null ? z?.avatarDecoration : O?.user?.avatarDecoration), [K, J, X] = l.useMemo(() => [z?.colorString ?? "inherit", z?.colorStrings ?? null, z?.colorRoleId], [z]), Z = (0, C.gn)(z?.guildId, O?.authorId ?? void 0, J), {
        reducedMotion: $
    } = l.useContext(c.CZY), [ee, et] = l.useState(!1), en = l.useCallback(() => {
        V(!0)
    }, [V]), ei = l.useCallback(() => {
        V(!1)
    }, [V]), el = l.useCallback(async () => {
        null != O && ((0, _.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
            media_post_id: O.threadId,
            channel_id: r.id,
            can_access: O.canAccess,
            is_member: Y
        }), O.canAccess ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.threadId, O.messageId)) : Y ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.parentChannelId)) : await S.Z2(O.guildId, {}, {
            channelId: O.parentChannelId
        }))
    }, [O, r, Y]);
    if (null == O) return null;
    let er = (0, v.F_)({
            avatarDecoration: Q,
            size: (0, h.Te)(c._3J.SIZE_40),
            canAnimate: ee
        }),
        ea = O.user?.getAvatarURL(O.guildId, 40, ee),
        es = () => {
            $.enabled || et(e => !e)
        },
        eo = O.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: M.wb,
        children: [(0, i.jsxs)("div", {
            className: M.iT,
            onMouseEnter: en,
            onMouseLeave: ei,
            children: [!W && (!0 === O.shouldShowBlurredThumbnailImage ? (0, i.jsx)("img", {
                src: w,
                alt: P.intl.string(P.t.rIbh8H),
                className: a()(M.xn, {
                    [M.p6]: O.shouldSpoiler
                }),
                onContextMenu: G,
                onError: () => q(!0)
            }) : (0, i.jsx)(p.A, {
                src: !(F && (B || H)) && ed ? `${eo}?format=png` : eo,
                backgroundSrc: `${eo}?format=png`,
                alt: P.intl.string(P.t.rIbh8H),
                aspectRatio: 16 / 9,
                className: a()(M.xn, {
                    [M.p6]: O.shouldSpoiler
                }),
                imageChildClassName: M.q_,
                onContextMenu: G,
                onError: () => q(!0)
            })), null != O.coverImageOverlayText && (0, i.jsx)(c.DUT, {
                onClick: el,
                children: (0, i.jsx)("div", {
                    className: M.nx,
                    children: (0, i.jsxs)("div", {
                        className: M.BS,
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
            className: M.iQ,
            children: [(0, i.jsxs)("div", {
                className: M.OA,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: M.hF,
                    children: O.title
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: a()(M.hF, M.Fq),
                    children: O.subtitle
                })]
            }), (0, i.jsxs)("div", {
                className: M._5,
                children: [null != O.authorId && null != ea && (0, i.jsx)(E.A, {
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
                            src: ea,
                            "aria-label": P.intl.string(P.t.KXz3XB),
                            avatarDecoration: er
                        })
                    })
                }), (0, i.jsxs)("div", {
                    className: M.Ny,
                    children: [(0, i.jsxs)("div", {
                        className: M.O9,
                        children: [null != O.channelName && (0, i.jsx)(c.d2$, {
                            size: "md",
                            color: "currentColor",
                            className: M.Xg
                        }), (0, i.jsx)(c.DUT, {
                            onClick: el,
                            className: M.HA,
                            children: (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: O.channelName ?? O.guildName
                            })
                        })]
                    }), null != O.authorName && (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: M.wn,
                        children: P.intl.format(P.t.voIDKa, {
                            authorName: O.authorName,
                            authorNameHook: () => null == O.authorId ? (0, i.jsx)(c.V30, {
                                name: O.authorName,
                                colorString: K,
                                colorStrings: Z,
                                className: M.fh
                            }) : (0, i.jsx)(E.A, {
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
                                    className: M.fh
                                })
                            }, (0, s.A)())
                        })
                    })]
                }), O.canAccess ? (0, i.jsx)(c.Button, {
                    variant: "primary",
                    onClick: el,
                    text: O.ctaText
                }) : (0, i.jsx)(c.Button, {
                    onClick: el,
                    variant: "primary",
                    text: O.ctaText
                })]
            })]
        })]
    })
}