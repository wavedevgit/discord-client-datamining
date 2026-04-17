/** chunk id: 660176 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => X
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(718564),
    u = n(348963),
    d = n(311907),
    _ = n(827734),
    A = n(397927),
    E = n(709066),
    m = n(585510),
    I = n(903093),
    T = n(785823),
    g = n(449585),
    N = n(137207),
    f = n(997509),
    C = n(916768),
    p = n(854627),
    h = n(342296),
    S = n(734057),
    R = n(696451),
    x = n(287809),
    O = n(643204),
    M = n(112758),
    D = n(809115),
    U = n(888675),
    P = n(652215),
    L = n(705751),
    v = n(985018),
    b = n(393239);

function y() {
    return (0, i.jsx)("div", {
        className: b.Om
    })
}

function k(e) {
    let {
        message: t,
        compact: n
    } = e, {
        notificationType: r
    } = (0, T.Bk)(t);
    switch (r) {
        case T.ZA:
        case c.W.RAID:
            return (0, i.jsx)(H, {
                message: t,
                compact: n
            });
        case c.W.MENTION_RAID:
            return (0, i.jsx)(w, {
                message: t,
                compact: n
            });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(F, {
                message: t,
                compact: n
            });
        case c.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(G, {
                compact: n
            });
        default:
            return (0, i.jsx)(j, {
                compact: n
            })
    }
}

function j(e) {
    let {
        compact: t
    } = e;
    return (0, i.jsx)(B, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(A.EpV, {
                size: "xs",
                color: _.A.colors.TEXT_DEFAULT.css
            }), (0, i.jsx)(A.Text, {
                variant: "text-md/semibold",
                color: "text-default",
                children: v.intl.string(v.t.VdZCcC)
            })]
        }),
        content: (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t["NxHYX/"])
        })
    })
}

function G(e) {
    let {
        compact: t
    } = e;
    return (0, i.jsx)(B, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(A.EpV, {
                size: "xs",
                color: _.A.colors.TEXT_DEFAULT.css
            }), (0, i.jsx)(A.Text, {
                variant: "text-md/semibold",
                color: "text-default",
                children: v.intl.string(v.t["2qTBw/"])
            })]
        }),
        content: (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t.Dc9wCp)
        })
    })
}

function F(e) {
    let {
        message: t,
        compact: n
    } = e, l = x.default.getUser((0, T.ZD)(t)), s = S.A.getBasicChannel(t.channel_id)?.guild_id, a = null != s && null != l ? R.Ay.getMember(s, l.id) : null, {
        avatarSrc: c,
        avatarDecorationSrc: u,
        eventHandlers: d
    } = (0, p.A)({
        userId: l?.id,
        guildId: s,
        size: 12
    }), E = r.useRef(null);
    return (0, i.jsx)(B, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(A.Hnu, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css
            }), (0, i.jsx)(A.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-positive",
                children: v.intl.string(v.t.lVLiFp)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: b.Ns,
            children: [(0, i.jsx)("div", {
                className: b.gk,
                children: null != a && null != l && (0, i.jsxs)(r.Fragment, {
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: v.intl.string(v.t.qlFrXW)
                    }), (0, i.jsx)(h.A, {
                        targetElementRef: E,
                        user: l,
                        guildId: s,
                        channelId: t.channel_id,
                        messageId: t.id,
                        children: e => (0, i.jsxs)(A.DUT, {
                            innerRef: E,
                            className: b.rI,
                            ...e,
                            children: [(0, i.jsx)("div", {
                                ...d,
                                children: (0, i.jsx)(A.euF, {
                                    src: c,
                                    avatarDecoration: u,
                                    size: A._3J.SIZE_16,
                                    "aria-label": "TODO"
                                })
                            }), (0, i.jsxs)(A.Text, {
                                variant: "text-xs/medium",
                                style: {
                                    color: null != a.colorString ? a.colorString : _.A.colors.TEXT_DEFAULT.css
                                },
                                children: [" ", "@", l.username]
                            })]
                        })
                    })]
                })
            }), (0, i.jsx)(y, {}), (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(t.timestamp).fromNow()
            })]
        }),
        content: (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t["QV/8u5"])
        })
    })
}

function H(e) {
    let {
        message: t,
        compact: n
    } = e, {
        joinAttempts: l,
        raidDatetime: s,
        dmsSent: a,
        raidType: c,
        resolvedReason: E
    } = (0, T.Bk)(t), N = (0, d.bG)([S.A], () => S.A.getChannel(t.channel_id), [t.channel_id]), f = N?.guild_id ?? null, {
        shouldShowIncidentActions: C
    } = (0, m.Li)(f), p = (0, M.Am)(t.author.id, t.channel_id), h = r.useCallback(() => {
        let e = N?.guild_id;
        null != e && (0, g.is)(t.id, e)
    }, [t.id, N]), R = c === u.p.DM_RAID, x = R ? A.EpV : A.EF8;
    return (0, i.jsx)(B, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(x, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(A.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: R ? v.intl.string(v.t["8+lHUb"]) : v.intl.string(v.t.xMwcwV)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: b.Ns,
            children: [null != l && (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: v.intl.format(v.t["4ylIiu"], {
                    joinCount: l
                })
            }), null != a && (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: v.intl.format(v.t["5C8Mh3"], {
                    dmsSent: a
                })
            }), null != s && (0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsx)(y, {}), (0, i.jsx)(A.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(s).fromNow()
                })]
            })]
        }),
        content: null != s ? (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.format(v.t["4QIIZl"], {
                dateTime: s.toLocaleString(v.intl.currentLocale, I.yc)
            })
        }) : null,
        footerButtons: C ? (0, i.jsxs)("div", {
            className: b.OZ,
            children: [(0, i.jsxs)("div", {
                className: b.AX,
                children: [(0, i.jsx)(A.lmn, {
                    size: "xs",
                    color: _.A.unsafe_rawColors.BRAND_500.css,
                    className: b.Dq
                }), (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    size: "sm",
                    textVariant: "text-xs/medium",
                    text: v.intl.string(v.t.DEoVWZ),
                    onClick: e => {
                        p(e)
                    }
                })]
            }), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                className: b.AX,
                children: (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: (0, T.Oj)(E),
                    onClick: h
                })
            })]
        }) : null
    })
}

function w(e) {
    let {
        message: t,
        compact: n
    } = e, l = S.A.getBasicChannel(t.channel_id)?.guild_id, {
        raidDatetime: s,
        decisionId: a,
        suspiciousMentionActivityUntil: c
    } = (0, T.Bk)(t);
    return (0, i.jsx)(B, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(A.EpV, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(A.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: v.intl.string(v.t.C2uIXE)
            })]
        }),
        subheader: (0, i.jsx)("div", {
            className: b.Ns,
            children: null != s && (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(s).fromNow()
            })
        }),
        content: (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t.SWIWEV)
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: b.OZ,
            children: [(0, i.jsx)("div", {
                className: b.AX,
                children: (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: v.intl.string(v.t.oX14El),
                    onClick: function() {
                        null != l && null != a && (0, N.W5)(l, a, () => {
                            (0, C.w)(c), (0, N.wu)(l)
                        })
                    }
                })
            }), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                className: b.AX,
                children: (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: v.intl.string(v.t["1R7QIx"]),
                    onClick: function() {
                        null != l && f.A.open(l, P.BEX.GUILD_AUTOMOD, void 0, P.nd0.AUTOMOD_MENTION_SPAM)
                    }
                })
            })]
        })
    })
}

function B(e) {
    let {
        compact: t,
        header: n,
        subheader: r,
        content: l,
        footerButtons: a
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(b.gD, {
            [b.oE]: t
        }),
        children: [(0, i.jsxs)("div", {
            className: b.Ux,
            children: [(0, i.jsxs)("div", {
                className: b.LN,
                children: [(0, i.jsx)("div", {
                    className: b.MY,
                    children: n
                }), null != r && (0, i.jsx)("div", {
                    className: b.m_,
                    children: r
                })]
            }), l]
        }), null != a && (0, i.jsx)("div", {
            className: s()(b.Y4, b.UX, {
                [b.oE]: t
            }),
            children: a
        })]
    })
}

function X(e) {
    let {
        id: t,
        compact: n,
        message: r,
        channel: l
    } = e, {
        avatarSrc: a,
        eventHandlers: {
            onMouseEnter: o,
            onMouseLeave: u
        }
    } = (0, D.a)(!0), {
        notificationType: d
    } = (0, T.Bk)(r), _ = null == d || d === c.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: u,
        children: (0, i.jsx)(U.A, {
            className: s()(b.rs, {
                [b.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(D.l, {
                src: a
            }),
            iconContainerClassName: b.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(b.Qs, {
                    [b.oE]: n
                }),
                children: [(0, i.jsx)(O.ix, {
                    message: r,
                    messageClassname: b.he,
                    className: s()(b.QV, b.he, {
                        [b.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: b.he,
                        children: [(0, i.jsx)(A.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: b.Xh,
                            children: v.intl.string(v.t.hG1StD)
                        }), (0, i.jsx)(E.A, {
                            type: L.nu.SYSTEM_DM,
                            className: b.Al
                        }), _ && (0, i.jsx)(A.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            tag: "span",
                            className: b.he,
                            children: v.intl.string(v.t.ufawcw)
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: b.BZ
                }), (0, i.jsx)(k, {
                    message: r,
                    compact: n
                })]
            })
        })
    })
}