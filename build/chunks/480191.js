/** chunk id: 480191 params = (module,exports,require) **/
n.d(t, {
    A: () => D
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(835245),
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
    S = n(218394),
    N = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    w = n(38208),
    M = n(278664);

function D(e) {
    let {
        embedUrl: t,
        message: n,
        channel: l
    } = e, D = a.useRef(null), O = a.useRef(null), k = (0, j.D)(t, n), {
        setPopout: U
    } = (0, f.A)(n.id, R.Fd), B = (0, x.VL)(n, l, U, !0), G = I.kt.useSetting(), F = (0, S.j)(), [H, V] = a.useState(!1), [q, W] = a.useState(k?.coverImage == null), z = (0, o.bG)([v.Ay, b.default], () => v.Ay.isMember(k?.guildId, b.default.getCurrentUser()?.id), [k]), Y = (0, o.bG)([v.Ay], () => k?.authorId != null ? v.Ay.getMember(k.guildId, k.authorId) : null), Q = (0, m.A)(Y?.avatarDecoration != null ? Y?.avatarDecoration : k?.user?.avatarDecoration), [K, X, J] = a.useMemo(() => [Y?.colorString ?? "inherit", Y?.colorStrings ?? null, Y?.colorRoleId], [Y]), Z = (0, C.gn)(Y?.guildId, k?.authorId ?? void 0, X), {
        reducedMotion: $
    } = a.useContext(c.CZY), [ee, et] = a.useState(!1), en = a.useCallback(() => {
        V(!0)
    }, [V]), ei = a.useCallback(() => {
        V(!1)
    }, [V]), ea = a.useCallback(async () => {
        null != k && ((0, _.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
            media_post_id: k.threadId,
            channel_id: l.id,
            can_access: k.canAccess,
            is_member: z
        }), k.canAccess ? (0, g.A)(L.BVt.CHANNEL(k.guildId, k.threadId, k.messageId)) : z ? (0, g.A)(L.BVt.CHANNEL(k.guildId, k.parentChannelId)) : await y.Z2(k.guildId, {}, {
            channelId: k.parentChannelId
        }))
    }, [k, l, z]);
    if (null == k) return null;
    let el = (0, T.F_)({
            avatarDecoration: Q,
            size: (0, h.Te)(c._3J.SIZE_40),
            canAnimate: ee
        }),
        es = k.user?.getAvatarURL(k.guildId, 40, ee),
        er = () => {
            $.enabled || et(e => !e)
        },
        eo = k.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: w.wb,
        children: [(0, i.jsxs)("div", {
            className: w.iT,
            onMouseEnter: en,
            onMouseLeave: ei,
            children: [!q && (!0 === k.shouldShowBlurredThumbnailImage ? (0, i.jsx)("img", {
                src: M,
                alt: P.intl.string(P.t.rIbh8H),
                className: s()(w.xn, {
                    [w.p6]: k.shouldSpoiler
                }),
                onContextMenu: B,
                onError: () => W(!0)
            }) : (0, i.jsx)(p.A, {
                src: !(F && (G || H)) && ed ? `${eo}?format=png` : eo,
                backgroundSrc: `${eo}?format=png`,
                alt: P.intl.string(P.t.rIbh8H),
                aspectRatio: 16 / 9,
                className: s()(w.xn, {
                    [w.p6]: k.shouldSpoiler
                }),
                imageChildClassName: w.q_,
                onContextMenu: B,
                onError: () => W(!0)
            })), null != k.coverImageOverlayText && (0, i.jsx)(c.DUT, {
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
                            children: k.coverImageOverlayText
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
                    children: k.title
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: s()(w.hF, w.Fq),
                    children: k.subtitle
                })]
            }), (0, i.jsxs)("div", {
                className: w._5,
                children: [null != k.authorId && null != es && (0, i.jsx)(E.A, {
                    targetElementRef: O,
                    userId: k.authorId,
                    guildId: k.guildId,
                    channelId: l.id,
                    messageId: n.id,
                    roleId: J,
                    avatarUrl: k.avatarUrl,
                    newAnalyticsLocations: [u.A.AVATAR],
                    spacing: 12,
                    children: e => (0, i.jsx)("div", {
                        onMouseEnter: er,
                        onMouseLeave: er,
                        children: (0, i.jsx)(c.euF, {
                            ...e,
                            ref: O,
                            size: c._3J.SIZE_40,
                            src: es,
                            "aria-label": P.intl.string(P.t.KXz3XB),
                            avatarDecoration: el
                        })
                    })
                }), (0, i.jsxs)("div", {
                    className: w.Ny,
                    children: [(0, i.jsxs)("div", {
                        className: w.O9,
                        children: [null != k.channelName && (0, i.jsx)(c.d2$, {
                            size: "md",
                            color: "currentColor",
                            className: w.Xg
                        }), (0, i.jsx)(c.DUT, {
                            onClick: ea,
                            className: w.HA,
                            children: (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: k.channelName ?? k.guildName
                            })
                        })]
                    }), null != k.authorName && (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: w.wn,
                        children: P.intl.format(P.t.voIDKa, {
                            authorName: k.authorName,
                            authorNameHook: () => null == k.authorId ? (0, i.jsx)(c.V30, {
                                name: k.authorName,
                                colorString: K,
                                colorStrings: Z,
                                className: w.fh
                            }) : (0, i.jsx)(E.A, {
                                targetElementRef: D,
                                userId: k.authorId,
                                guildId: k.guildId,
                                channelId: l.id,
                                messageId: n.id,
                                roleId: J,
                                avatarUrl: k.avatarUrl,
                                newAnalyticsLocations: [u.A.USERNAME],
                                children: e => (0, i.jsx)(c.V30, {
                                    ...e,
                                    ref: D,
                                    name: k.authorName,
                                    colorString: K,
                                    colorStrings: Z,
                                    className: w.fh
                                })
                            }, (0, r.A)())
                        })
                    })]
                }), k.canAccess ? (0, i.jsx)(c.Button, {
                    variant: "primary",
                    onClick: ea,
                    text: k.ctaText
                }) : (0, i.jsx)(c.Button, {
                    onClick: ea,
                    variant: "primary",
                    text: k.ctaText
                })]
            })]
        })]
    })
}