/** chunk id: 250253 params = (module,exports,require) **/
i.d(t, {
    A: () => O,
    x: () => U
});
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(311907),
    d = i(435371),
    c = i(397927),
    o = i(241524),
    u = i(915089),
    m = i(164956),
    x = i(615405),
    h = i(486020),
    g = i(500345),
    v = i(599941),
    j = i(922975),
    A = i(700206),
    f = i(218597),
    p = i(320137),
    _ = i(881288),
    N = i(417360),
    b = i(792105),
    I = i(35275),
    T = i(366334),
    C = i(237867),
    E = i(98211),
    S = i(700974),
    L = i(2242),
    k = i(652215),
    y = i(985018),
    R = i(631616);
let G = e => {
        let {
            benefits: t,
            header: i,
            guildId: a
        } = e, [s, r] = n.useState(!1), d = s ? t : t.slice(0, 5), o = t.length > 5, m = t.length - 5, x = y.intl.formatToPlainString(y.t.XSdy72, {
            numTruncated: m
        }), h = (0, u.GV)();
        return 0 === t.length ? null : (0, l.jsxs)("div", {
            className: R.uO,
            children: [(0, l.jsx)(c.Heading, {
                variant: "text-xs/bold",
                color: "text-default",
                className: R.bV,
                id: h,
                children: i
            }), (0, l.jsx)(c.hKd, {
                size: 12
            }), (0, l.jsx)("ul", {
                className: R.Pp,
                "aria-labelledby": h,
                children: d.map((e, t) => (0, l.jsx)("li", {
                    children: (0, l.jsx)(T.A, {
                        guildId: a,
                        benefit: e
                    }, (0, g.nh)(e))
                }, t))
            }), o && (0, l.jsx)(M, {
                isViewAll: s,
                onToggle: () => r(e => !e),
                showMoreText: x
            })]
        })
    },
    P = e => {
        let {
            guildId: t,
            listingId: i
        } = e, n = (0, p.A)(t), [a] = j.UN(i, t), s = n.filter(e => a.has(e.id));
        return 0 === s.length ? null : (0, l.jsxs)("div", {
            className: R.uO,
            children: [(0, l.jsx)(c.Heading, {
                variant: "text-xs/bold",
                color: "text-default",
                className: R.bV,
                children: y.intl.format(y.t.NAnXEo, {
                    count: s.length
                })
            }), (0, l.jsx)(c.hKd, {
                size: 12
            }), (0, l.jsx)("div", {
                className: R.vX,
                children: s.map((e, t) => (0, l.jsx)(d.m_, {
                    text: e.name,
                    "aria-label": !1,
                    children: (0, l.jsx)("img", {
                        className: R.x6,
                        src: h.Ay.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 24
                        }),
                        width: 24,
                        height: 24,
                        alt: e.name
                    })
                }, e.id ?? t))
            })]
        })
    },
    U = e => {
        let {
            listingId: t,
            guildId: i,
            className: n
        } = e, a = (0, _.A)(i, t), [r] = j.lZ(t), d = (0, N.A)(r), [o] = j.$O(t), u = j.It(t, i), [m] = j.UN(t, i);
        return null == a && 0 === d.length && 0 === o.length && 0 === m.size ? null : (0, l.jsxs)("div", {
            className: s()(R.bp, n),
            children: [null != a && (0, l.jsxs)(c.Fmo, {
                component: (0, l.jsx)(c.Heading, {
                    variant: "text-xs/bold",
                    color: "text-default",
                    className: R.bV,
                    children: y.intl.string(y.t.FJZmYx)
                }),
                children: [(0, l.jsx)(c.hKd, {
                    size: 8
                }), (0, l.jsx)(b.A, {
                    role: u,
                    guildId: i,
                    className: R.gP
                })]
            }), (0, l.jsx)(G, {
                header: y.intl.string(y.t.LtfhAj),
                benefits: d,
                guildId: i
            }), (0, l.jsx)(G, {
                header: y.intl.string(y.t["8oxWpO"]),
                benefits: o,
                guildId: i
            }), (0, l.jsx)(P, {
                guildId: i,
                listingId: t
            })]
        })
    },
    M = e => {
        let {
            onToggle: t,
            isViewAll: i,
            showMoreText: n
        } = e, a = i ? y.intl.string(y.t["r/xxPU"]) : n;
        return (0, l.jsx)(c.QWc, {
            text: a,
            onClick: t,
            textVariant: "text-xs/medium",
            variant: "secondary"
        })
    },
    O = e => {
        let {
            listingId: t,
            guildId: i,
            groupListingId: a,
            analyticsLocation: u
        } = e, h = (0, v.dB)(t), {
            openModal: p,
            canOpenModal: _,
            cannotOpenReason: N,
            isCheckingTrialEligibility: b
        } = (0, S.A)(h, i, a, u), T = (0, r.bG)([x.A], () => x.A.isSyncing), {
            activeSubscription: G,
            activeSubscriptionListing: P
        } = (0, A.A)(a), O = P?.id === t, D = G?.status === k.Dmq.CANCELED, [F, w] = n.useState(!1), [H, B] = n.useState(!1), V = n.useCallback(e => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), B(t)
        }, []), [Y] = j.tx(t), [z] = j.I8(t), [K] = j.V_(t), [X] = j.hh(t), W = (0, f.A)(i, t), q = null != K && null == G && W, $ = (0, o.A)(L.Yl), [Q, Z] = n.useState(!1), J = Q || !$, ee = (0, r.bG)([m.A], () => m.A.isViewingServerShop(i)), et = h?.published === !0, ei = h?.soft_deleted === !0, el = y.intl.string(y.t.KzmEA9);
        return (et || ee) && !ei ? (0, l.jsxs)("article", {
            className: R.kL,
            "aria-label": Y,
            children: [q && (0, l.jsxs)("div", {
                className: s()(R.G_, R.rF),
                children: [y.intl.format(y.t.L2ouip, {
                    trialPeriodDuration: (0, g.Gg)({
                        interval: K.interval,
                        interval_count: K.interval_count
                    })
                }), (0, l.jsx)(d.m_, {
                    text: y.intl.formatToPlainString(y.t.FYyR4o, {
                        activeTrialUserLimit: X ?? 0
                    }),
                    children: (0, l.jsx)(c.mir, {
                        size: "xs",
                        color: "currentColor",
                        className: R.Xz
                    })
                })]
            }), (0, l.jsxs)("div", {
                className: q ? void 0 : R.e1,
                children: [(0, l.jsxs)("div", {
                    className: R.Og,
                    children: [$ ? (0, l.jsx)(E.$, {
                        listingId: t,
                        isListingPublished: et,
                        expanded: J,
                        onToggleExpanded: () => Z(e => !e)
                    }) : (0, l.jsx)(C.Hs, {
                        listingId: t,
                        isListingPublished: et
                    }), J && (0, l.jsxs)(c.BJc, {
                        gap: 16,
                        children: [$ && (0, l.jsx)("div", {
                            className: R.yF
                        }), O ? (0, l.jsx)(c.Button, {
                            disabled: !0,
                            fullWidth: !0,
                            variant: D ? "secondary" : "primary",
                            text: D ? y.intl.string(y.t.iKHmu0) : y.intl.string(y.t.XvAuMo)
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [_ ? null : (0, l.jsx)(c.po8, {
                                className: R.Ht,
                                messageType: c.YCn.INFO,
                                children: N
                            }), (0, l.jsx)(c.Button, {
                                fullWidth: !0,
                                text: y.intl.string(y.t.fM5ZsX),
                                disabled: !_ || T,
                                loading: b,
                                onClick: p,
                                icon: I.A,
                                variant: "primary"
                            })]
                        }), (0, l.jsxs)(c.BJc, {
                            gap: 8,
                            align: "center",
                            children: [(0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                className: s()((!H || !F) && R.Zp),
                                children: (0, l.jsx)("div", {
                                    ref: V,
                                    children: z
                                })
                            }), H && (0, l.jsx)(M, {
                                isViewAll: F,
                                onToggle: () => w(e => !e),
                                showMoreText: el
                            })]
                        })]
                    })]
                }), J && (0, l.jsx)(c.Fmo, {
                    children: (0, l.jsx)(U, {
                        listingId: t,
                        guildId: i
                    })
                })]
            })]
        }) : null
    }