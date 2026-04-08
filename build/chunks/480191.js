/** chunk id: 480191 params = (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(835245),
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
    E = n(342296),
    I = n(253932),
    v = n(696451),
    b = n(287809),
    T = n(486020),
    y = n(449054),
    N = n(218394),
    S = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    D = n(864705),
    M = n(278664);

function w(e) {
    let {
        embedUrl: t,
        message: n,
        channel: s
    } = e, w = l.useRef(null), k = l.useRef(null), O = (0, j.D)(t, n), {
        setPopout: U
    } = (0, f.A)(n.id, R.Fd), B = (0, x.VL)(n, s, U, !0), G = I.kt.useSetting(), F = (0, N.j)(), [H, V] = l.useState(!1), [q, W] = l.useState(O?.coverImage == null), z = (0, o.bG)([v.Ay, b.default], () => v.Ay.isMember(O?.guildId, b.default.getCurrentUser()?.id), [O]), Y = (0, o.bG)([v.Ay], () => O?.authorId != null ? v.Ay.getMember(O.guildId, O.authorId) : null), Q = (0, m.A)(Y?.avatarDecoration != null ? Y?.avatarDecoration : O?.user?.avatarDecoration), [K, J, X] = l.useMemo(() => [Y?.colorString ?? "inherit", Y?.colorStrings ?? null, Y?.colorRoleId], [Y]), Z = (0, C.gn)(Y?.guildId, O?.authorId ?? void 0, J), {
        reducedMotion: $
    } = l.useContext(c.CZY), [ee, et] = l.useState(!1), en = l.useCallback(() => {
        V(!0)
    }, [V]), ei = l.useCallback(() => {
        V(!1)
    }, [V]), el = l.useCallback(async () => {
        null != O && ((0, _.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
            media_post_id: O.threadId,
            channel_id: s.id,
            can_access: O.canAccess,
            is_member: z
        }), O.canAccess ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.threadId, O.messageId)) : z ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.parentChannelId)) : await y.Z2(O.guildId, {}, {
            channelId: O.parentChannelId
        }))
    }, [O, s, z]);
    if (null == O) return null;
    let es = (0, T.F_)({
            avatarDecoration: Q,
            size: (0, h.Te)(c._3J.SIZE_40),
            canAnimate: ee
        }),
        er = O.user?.getAvatarURL(O.guildId, 40, ee),
        ea = () => {
            $.enabled || et(e => !e)
        },
        eo = O.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: D.wb,
        children: [(0, i.jsxs)("div", {
            className: D.iT,
            onMouseEnter: en,
            onMouseLeave: ei,
            children: [!q && (!0 === O.shouldShowBlurredThumbnailImage ? (0, i.jsx)("img", {
                src: M,
                alt: P.intl.string(P.t.rIbh8H),
                className: r()(D.xn, {
                    [D.p6]: O.shouldSpoiler
                }),
                onContextMenu: B,
                onError: () => W(!0)
            }) : (0, i.jsx)(p.A, {
                src: !(F && (G || H)) && ed ? `${eo}?format=png` : eo,
                backgroundSrc: `${eo}?format=png`,
                alt: P.intl.string(P.t.rIbh8H),
                aspectRatio: 16 / 9,
                className: r()(D.xn, {
                    [D.p6]: O.shouldSpoiler
                }),
                imageChildClassName: D.q_,
                onContextMenu: B,
                onError: () => W(!0)
            })), null != O.coverImageOverlayText && (0, i.jsx)(c.DUT, {
                onClick: el,
                children: (0, i.jsx)("div", {
                    className: D.nx,
                    children: (0, i.jsxs)("div", {
                        className: D.BS,
                        children: [(0, i.jsx)(S.A, {
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
            className: D.iQ,
            children: [(0, i.jsxs)("div", {
                className: D.OA,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: D.hF,
                    children: O.title
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: r()(D.hF, D.Fq),
                    children: O.subtitle
                })]
            }), (0, i.jsxs)("div", {
                className: D._5,
                children: [null != O.authorId && null != er && (0, i.jsx)(E.A, {
                    targetElementRef: k,
                    userId: O.authorId,
                    guildId: O.guildId,
                    channelId: s.id,
                    messageId: n.id,
                    roleId: X,
                    avatarUrl: O.avatarUrl,
                    newAnalyticsLocations: [u.A.AVATAR],
                    spacing: 12,
                    children: e => (0, i.jsx)("div", {
                        onMouseEnter: ea,
                        onMouseLeave: ea,
                        children: (0, i.jsx)(c.euF, {
                            ...e,
                            ref: k,
                            size: c._3J.SIZE_40,
                            src: er,
                            "aria-label": P.intl.string(P.t.KXz3XB),
                            avatarDecoration: es
                        })
                    })
                }), (0, i.jsxs)("div", {
                    className: D.Ny,
                    children: [(0, i.jsxs)("div", {
                        className: D.O9,
                        children: [null != O.channelName && (0, i.jsx)(c.d2$, {
                            size: "md",
                            color: "currentColor",
                            className: D.Xg
                        }), (0, i.jsx)(c.DUT, {
                            onClick: el,
                            className: D.HA,
                            children: (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: O.channelName ?? O.guildName
                            })
                        })]
                    }), null != O.authorName && (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: D.wn,
                        children: P.intl.format(P.t.voIDKa, {
                            authorName: O.authorName,
                            authorNameHook: () => null == O.authorId ? (0, i.jsx)(c.V30, {
                                name: O.authorName,
                                colorString: K,
                                colorStrings: Z,
                                className: D.fh
                            }) : (0, i.jsx)(E.A, {
                                targetElementRef: w,
                                userId: O.authorId,
                                guildId: O.guildId,
                                channelId: s.id,
                                messageId: n.id,
                                roleId: X,
                                avatarUrl: O.avatarUrl,
                                newAnalyticsLocations: [u.A.USERNAME],
                                children: e => (0, i.jsx)(c.V30, {
                                    ...e,
                                    ref: w,
                                    name: O.authorName,
                                    colorString: K,
                                    colorStrings: Z,
                                    className: D.fh
                                })
                            }, (0, a.A)())
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