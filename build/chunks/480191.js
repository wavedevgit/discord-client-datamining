/** chunk id: 480191 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    T = n(696451),
    b = n(287809),
    v = n(486020),
    S = n(449054),
    y = n(218394),
    N = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    M = n(780247),
    D = n(278664);

function O(e) {
    let {
        embedUrl: t,
        message: n,
        channel: l
    } = e, O = r.useRef(null), w = r.useRef(null), k = (0, j.D)(t, n), {
        setPopout: U
    } = (0, f.A)(n.id, R.Fd), G = (0, x.VL)(n, l, U, !0), B = I.kt.useSetting(), F = (0, y.j)(), [H, V] = r.useState(!1), [W, q] = r.useState(k?.coverImage == null), Y = (0, o.bG)([T.Ay, b.default], () => T.Ay.isMember(k?.guildId, b.default.getCurrentUser()?.id), [k]), z = (0, o.bG)([T.Ay], () => k?.authorId != null ? T.Ay.getMember(k.guildId, k.authorId) : null), Q = (0, m.A)(z?.avatarDecoration != null ? z?.avatarDecoration : k?.user?.avatarDecoration), [K, J, X] = r.useMemo(() => [z?.colorString ?? "inherit", z?.colorStrings ?? null, z?.colorRoleId], [z]), Z = (0, C.gn)(z?.guildId, k?.authorId ?? void 0, J), {
        reducedMotion: $
    } = r.useContext(c.CZY), [ee, et] = r.useState(!1), en = r.useCallback(() => {
        V(!0)
    }, [V]), ei = r.useCallback(() => {
        V(!1)
    }, [V]), er = r.useCallback(async () => {
        null != k && ((0, _.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
            media_post_id: k.threadId,
            channel_id: l.id,
            can_access: k.canAccess,
            is_member: Y
        }), k.canAccess ? (0, g.A)(L.BVt.CHANNEL(k.guildId, k.threadId, k.messageId)) : Y ? (0, g.A)(L.BVt.CHANNEL(k.guildId, k.parentChannelId)) : await S.Z2(k.guildId, {}, {
            channelId: k.parentChannelId
        }))
    }, [k, l, Y]);
    if (null == k) return null;
    let el = (0, v.F_)({
            avatarDecoration: Q,
            size: (0, h.Te)(c._3J.SIZE_40),
            canAnimate: ee
        }),
        ea = k.user?.getAvatarURL(k.guildId, 40, ee),
        es = () => {
            $.enabled || et(e => !e)
        },
        eo = k.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: M.wb,
        children: [(0, i.jsxs)("div", {
            className: M.iT,
            onMouseEnter: en,
            onMouseLeave: ei,
            children: [!W && (!0 === k.shouldShowBlurredThumbnailImage ? (0, i.jsx)("img", {
                src: D,
                alt: P.intl.string(P.t.rIbh8H),
                className: a()(M.xn, {
                    [M.p6]: k.shouldSpoiler
                }),
                onContextMenu: G,
                onError: () => q(!0)
            }) : (0, i.jsx)(p.A, {
                src: !(F && (B || H)) && ed ? `${eo}?format=png` : eo,
                backgroundSrc: `${eo}?format=png`,
                alt: P.intl.string(P.t.rIbh8H),
                aspectRatio: 16 / 9,
                className: a()(M.xn, {
                    [M.p6]: k.shouldSpoiler
                }),
                imageChildClassName: M.q_,
                onContextMenu: G,
                onError: () => q(!0)
            })), null != k.coverImageOverlayText && (0, i.jsx)(c.DUT, {
                onClick: er,
                children: (0, i.jsx)("div", {
                    className: M.nx,
                    children: (0, i.jsxs)("div", {
                        className: M.BS,
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
            className: M.iQ,
            children: [(0, i.jsxs)("div", {
                className: M.OA,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    className: M.hF,
                    children: k.title
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: a()(M.hF, M.Fq),
                    children: k.subtitle
                })]
            }), (0, i.jsxs)("div", {
                className: M._5,
                children: [null != k.authorId && null != ea && (0, i.jsx)(E.A, {
                    targetElementRef: w,
                    userId: k.authorId,
                    guildId: k.guildId,
                    channelId: l.id,
                    messageId: n.id,
                    roleId: X,
                    avatarUrl: k.avatarUrl,
                    newAnalyticsLocations: [u.A.AVATAR],
                    spacing: 12,
                    children: e => (0, i.jsx)("div", {
                        onMouseEnter: es,
                        onMouseLeave: es,
                        children: (0, i.jsx)(c.euF, {
                            ...e,
                            ref: w,
                            size: c._3J.SIZE_40,
                            src: ea,
                            "aria-label": P.intl.string(P.t.KXz3XB),
                            avatarDecoration: el
                        })
                    })
                }), (0, i.jsxs)("div", {
                    className: M.Ny,
                    children: [(0, i.jsxs)("div", {
                        className: M.O9,
                        children: [null != k.channelName && (0, i.jsx)(c.d2$, {
                            size: "md",
                            color: "currentColor",
                            className: M.Xg
                        }), (0, i.jsx)(c.DUT, {
                            onClick: er,
                            className: M.HA,
                            children: (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: k.channelName ?? k.guildName
                            })
                        })]
                    }), null != k.authorName && (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: M.wn,
                        children: P.intl.format(P.t.voIDKa, {
                            authorName: k.authorName,
                            authorNameHook: () => null == k.authorId ? (0, i.jsx)(c.V30, {
                                name: k.authorName,
                                colorString: K,
                                colorStrings: Z,
                                className: M.fh
                            }) : (0, i.jsx)(E.A, {
                                targetElementRef: O,
                                userId: k.authorId,
                                guildId: k.guildId,
                                channelId: l.id,
                                messageId: n.id,
                                roleId: X,
                                avatarUrl: k.avatarUrl,
                                newAnalyticsLocations: [u.A.USERNAME],
                                children: e => (0, i.jsx)(c.V30, {
                                    ...e,
                                    ref: O,
                                    name: k.authorName,
                                    colorString: K,
                                    colorStrings: Z,
                                    className: M.fh
                                })
                            }, (0, s.A)())
                        })
                    })]
                }), k.canAccess ? (0, i.jsx)(c.Button, {
                    variant: "primary",
                    onClick: er,
                    text: k.ctaText
                }) : (0, i.jsx)(c.Button, {
                    onClick: er,
                    variant: "primary",
                    text: k.ctaText
                })]
            })]
        })]
    })
}