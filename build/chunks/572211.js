/** chunk id: 572211 params = (module,exports,require) **/
n.d(t, {
    h: () => I,
    u: () => C
}), n(323874), n(14289), n(35956);
var i, r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(299619),
    d = n(172218),
    c = n(158954),
    u = n(311907),
    _ = n(435371),
    m = n(775602),
    h = n(176563),
    p = n(961350),
    g = n(354287),
    A = n(768349),
    x = n(838541),
    f = n(112247),
    C = ((i = {})[i.BOT = 0] = "BOT", i[i.ACTIVITY = 1] = "ACTIVITY", i);

function E(e) {
    let {
        onClick: t,
        children: n,
        className: i
    } = e;
    return null != t ? (0, r.jsx)(c.DUT, {
        onClick: t,
        className: s()({
            [f.or]: null != t
        }, i),
        children: n
    }) : (0, r.jsx)("div", {
        className: i,
        children: n
    })
}

function I(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: a,
        info: C,
        staticBannerSrc: I,
        videoBannerSrc: T,
        bannerAspectRatio: b = 0,
        iconSrc: v,
        actions: S = [],
        primaryActionFirst: y = !1,
        trackingConfig: N,
        onClickContent: j,
        onClickBanner: L
    } = e;
    t = N, N = {
        id: t?.id ?? "0",
        linkType: t?.linkType ?? A.J.UNKNOWN,
        referrerId: t?.referrerId ?? p.default.getId(),
        activityCustomId: t?.activityCustomId,
        onView: t?.onView,
        onLinkCopied: t?.onLinkCopied,
        guildId: t?.guildId,
        channelId: t?.channelId,
        messageId: t?.messageId,
        isDeadEnd: t?.isDeadEnd ?? !1
    };
    let {
        primaryColor: R,
        secondaryColor: P
    } = (0, h.A)(v ?? I), M = `linear-gradient(45deg, ${R}, ${P})`, D = (0, u.bG)([m.A], () => m.A.useReducedMotion), O = l.useRef(!1), w = (0, d.K)(e => {
        !1 === O.current && e && (N?.onView?.(), (0, g.wV)({
            appId: N.id,
            linkType: N.linkType,
            referrerId: N.referrerId,
            customId: N.activityCustomId,
            guildId: N.guildId,
            channelId: N.channelId,
            messageId: N.messageId
        }), O.current = !0)
    }, void 0), k = null != I, U = null != T && !1 === D, G = k || U, B = 0 === b ? f.pv : f.$g, F = l.useRef(null), H = l.useCallback(() => {
        let e = F.current;
        null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
    }, []), V = l.useMemo(() => !!U && new URL(T).pathname.endsWith(".gif"), [U, T]), W = l.useMemo(() => {
        if (null != j) return e => {
            j(e), (0, g.gx)({
                applicationId: N.id,
                linkType: N.linkType,
                area: g.kY.CONTENT,
                referrerId: N.referrerId,
                customId: N.activityCustomId,
                isDeadEnd: N.isDeadEnd
            })
        }
    }, [j, N]), q = l.useMemo(() => {
        if (null != L) return e => {
            L(e), (0, g.gx)({
                applicationId: N.id,
                linkType: N.linkType,
                area: g.kY.BANNER,
                referrerId: N.referrerId,
                customId: N.activityCustomId,
                isDeadEnd: N.isDeadEnd
            })
        }
    }, [L, N]);
    return (0, r.jsxs)("div", {
        ref: w,
        className: f.E6,
        children: [G && (0, r.jsxs)(E, {
            onClick: q,
            className: s()(f.cy, B, {
                [f.wk]: U
            }),
            children: [U && (V ? (0, r.jsx)("div", {
                className: f.O9,
                style: {
                    backgroundImage: `url(${T})`
                }
            }) : (0, r.jsx)(o.A, {
                ref: F,
                src: T,
                mediaLayoutType: x.dG.MOSAIC,
                loop: !0,
                muted: !0,
                className: f.O9
            })), k && (0, r.jsx)("div", {
                className: f.LR,
                style: {
                    backgroundImage: `url(${I})`
                },
                onTransitionEnd: H
            })]
        }), (0, r.jsxs)("div", {
            style: {
                background: M
            },
            children: [(0, r.jsxs)("div", {
                className: f.hQ,
                children: [null != i && (0, r.jsx)(c.EYj, {
                    variant: "text-sm/semibold",
                    color: "none",
                    className: f.wx,
                    children: i
                }), (0, r.jsxs)(E, {
                    onClick: W,
                    className: s()(f.FG, {
                        [f.ry]: null != W
                    }),
                    children: [null != v && (0, r.jsx)("div", {
                        className: f._8,
                        style: {
                            backgroundImage: `url(${v})`
                        }
                    }), (0, r.jsxs)("div", {
                        className: f.Qs,
                        children: [(0, r.jsx)(c.EYj, {
                            variant: "text-md/semibold",
                            color: "none",
                            lineClamp: 1,
                            className: f.eu,
                            children: n
                        }), (0, r.jsx)("div", {
                            className: f.rj,
                            children: C
                        })]
                    })]
                }), S.length > 0 && (0, r.jsx)("div", {
                    className: s()(f.AC, y ? f.ad : null),
                    children: S.map((e, t) => {
                        let {
                            label: n,
                            icon: i,
                            onClick: l,
                            disabled: a,
                            disabledReason: s,
                            submitting: o,
                            trackingArea: d,
                            isDeadEnd: u,
                            iconButton: m,
                            buttonRef: h
                        } = e, p = 0 === t;
                        return m ? (0, r.jsx)(_.m_, {
                            text: n,
                            targetElementRef: h,
                            children: (0, r.jsx)(c.K0, {
                                variant: p ? "overlay-primary" : "overlay-secondary",
                                disabled: a || null != s,
                                loading: o,
                                icon: i,
                                "aria-label": n,
                                buttonRef: h,
                                onClick: e => {
                                    l(e), (0, g.gx)({
                                        applicationId: N.id,
                                        linkType: N.linkType,
                                        area: d,
                                        referrerId: N.referrerId,
                                        customId: N.activityCustomId,
                                        isDeadEnd: u
                                    })
                                }
                            })
                        }, n) : (0, r.jsxs)("div", {
                            className: f.uc,
                            children: [(0, r.jsx)(c.$nd, {
                                variant: p ? "overlay-primary" : "overlay-secondary",
                                disabled: a || null != s,
                                loading: o,
                                icon: i,
                                text: n,
                                buttonRef: h,
                                onClick: e => {
                                    l(e), (0, g.gx)({
                                        applicationId: N.id,
                                        linkType: N.linkType,
                                        area: d,
                                        referrerId: N.referrerId,
                                        customId: N.activityCustomId,
                                        isDeadEnd: u
                                    })
                                },
                                fullWidth: !0
                            }), null != s && (0, r.jsx)(c.EYj, {
                                variant: "text-xs/medium",
                                color: "none",
                                className: f.H$,
                                children: s
                            })]
                        }, n)
                    })
                })]
            }), null != a && a]
        })]
    })
}