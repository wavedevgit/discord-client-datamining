/** chunk id: 660176 params = (module,exports,require) **/
n.d(t, {
    A: () => V
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    c = n(718564),
    d = n(348963),
    u = n(311907),
    _ = n(827734),
    A = n(397927),
    m = n(709066),
    E = n(585510),
    T = n(903093),
    I = n(785823),
    N = n(449585),
    g = n(137207),
    f = n(997509),
    C = n(916768),
    h = n(854627),
    p = n(342296),
    S = n(734057),
    x = n(696451),
    R = n(287809),
    O = n(643204),
    M = n(112758),
    D = n(809115),
    L = n(888675),
    U = n(652215),
    P = n(705751),
    v = n(985018),
    j = n(964516);

function y() {
    return (0, i.jsx)("div", {
        className: j.Om
    })
}

function k(e) {
    let {
        message: t,
        compact: n
    } = e, {
        notificationType: l
    } = (0, I.Bk)(t);
    switch (l) {
        case I.ZA:
        case c.W.RAID:
            return (0, i.jsx)(F, {
                message: t,
                compact: n
            });
        case c.W.MENTION_RAID:
            return (0, i.jsx)(B, {
                message: t,
                compact: n
            });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(H, {
                message: t,
                compact: n
            });
        case c.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(G, {
                compact: n
            });
        default:
            return (0, i.jsx)(b, {
                compact: n
            })
    }
}

function b(e) {
    let {
        compact: t
    } = e;
    return (0, i.jsx)(w, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
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
    return (0, i.jsx)(w, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
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

function H(e) {
    let {
        message: t,
        compact: n
    } = e, a = R.default.getUser((0, I.ZD)(t)), r = S.A.getBasicChannel(t.channel_id)?.guild_id, s = null != r && null != a ? x.Ay.getMember(r, a.id) : null, {
        avatarSrc: c,
        avatarDecorationSrc: d,
        eventHandlers: u
    } = (0, h.A)({
        userId: a?.id,
        guildId: r,
        size: 12
    }), m = l.useRef(null);
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
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
            className: j.Ns,
            children: [(0, i.jsx)("div", {
                className: j.gk,
                children: null != s && null != a && (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(A.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: v.intl.string(v.t.qlFrXW)
                    }), (0, i.jsx)(p.A, {
                        targetElementRef: m,
                        user: a,
                        guildId: r,
                        channelId: t.channel_id,
                        messageId: t.id,
                        children: e => (0, i.jsxs)(A.DUT, {
                            innerRef: m,
                            className: j.rI,
                            ...e,
                            children: [(0, i.jsx)("div", {
                                ...u,
                                children: (0, i.jsx)(A.euF, {
                                    src: c,
                                    avatarDecoration: d,
                                    size: A._3J.SIZE_16,
                                    "aria-label": "TODO"
                                })
                            }), (0, i.jsxs)(A.Text, {
                                variant: "text-xs/medium",
                                style: {
                                    color: null != s.colorString ? s.colorString : _.A.colors.TEXT_DEFAULT.css
                                },
                                children: [" ", "@", a.username]
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

function F(e) {
    let {
        message: t,
        compact: n
    } = e, {
        joinAttempts: a,
        raidDatetime: r,
        dmsSent: s,
        raidType: c,
        resolvedReason: m
    } = (0, I.Bk)(t), g = (0, u.bG)([S.A], () => S.A.getChannel(t.channel_id), [t.channel_id]), f = g?.guild_id ?? null, {
        shouldShowIncidentActions: C
    } = (0, E.Li)(f), h = (0, M.Am)(t.author.id, t.channel_id), p = l.useCallback(() => {
        let e = g?.guild_id;
        null != e && (0, N.is)(t.id, e)
    }, [t.id, g]), x = c === d.p.DM_RAID, R = x ? A.EpV : A.EF8;
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(R, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(A.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: x ? v.intl.string(v.t["8+lHUb"]) : v.intl.string(v.t.xMwcwV)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: j.Ns,
            children: [null != a && (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: v.intl.format(v.t["4ylIiu"], {
                    joinCount: a
                })
            }), null != s && (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: v.intl.format(v.t["5C8Mh3"], {
                    dmsSent: s
                })
            }), null != r && (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)(y, {}), (0, i.jsx)(A.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(r).fromNow()
                })]
            })]
        }),
        content: null != r ? (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.format(v.t["4QIIZl"], {
                dateTime: r.toLocaleString(v.intl.currentLocale, T.yc)
            })
        }) : null,
        footerButtons: C ? (0, i.jsxs)("div", {
            className: j.OZ,
            children: [(0, i.jsxs)("div", {
                className: j.AX,
                children: [(0, i.jsx)(A.lmn, {
                    size: "xs",
                    color: _.A.unsafe_rawColors.BRAND_500.css,
                    className: j.Dq
                }), (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    size: "sm",
                    textVariant: "text-xs/medium",
                    text: v.intl.string(v.t.DEoVWZ),
                    onClick: e => {
                        h(e)
                    }
                })]
            }), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                className: j.AX,
                children: (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: (0, I.Oj)(m),
                    onClick: p
                })
            })]
        }) : null
    })
}

function B(e) {
    let {
        message: t,
        compact: n
    } = e, a = S.A.getBasicChannel(t.channel_id)?.guild_id, {
        raidDatetime: r,
        decisionId: s,
        suspiciousMentionActivityUntil: c
    } = (0, I.Bk)(t);
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
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
            className: j.Ns,
            children: null != r && (0, i.jsx)(A.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(r).fromNow()
            })
        }),
        content: (0, i.jsx)(A.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t.SWIWEV)
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: j.OZ,
            children: [(0, i.jsx)("div", {
                className: j.AX,
                children: (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: v.intl.string(v.t.oX14El),
                    onClick: function() {
                        null != a && null != s && (0, g.W5)(a, s, () => {
                            (0, C.w)(c), (0, g.wu)(a)
                        })
                    }
                })
            }), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                className: j.AX,
                children: (0, i.jsx)(A.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: v.intl.string(v.t["1R7QIx"]),
                    onClick: function() {
                        null != a && f.A.open(a, U.BEX.GUILD_AUTOMOD, void 0, U.nd0.AUTOMOD_MENTION_SPAM)
                    }
                })
            })]
        })
    })
}

function w(e) {
    let {
        compact: t,
        header: n,
        subheader: l,
        content: a,
        footerButtons: s
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(j.gD, {
            [j.oE]: t
        }),
        children: [(0, i.jsxs)("div", {
            className: j.Ux,
            children: [(0, i.jsxs)("div", {
                className: j.LN,
                children: [(0, i.jsx)("div", {
                    className: j.MY,
                    children: n
                }), null != l && (0, i.jsx)("div", {
                    className: j.m_,
                    children: l
                })]
            }), a]
        }), null != s && (0, i.jsx)("div", {
            className: r()(j.Y4, j.UX, {
                [j.oE]: t
            }),
            children: s
        })]
    })
}

function V(e) {
    let {
        id: t,
        compact: n,
        message: l,
        channel: a
    } = e, {
        avatarSrc: s,
        eventHandlers: {
            onMouseEnter: o,
            onMouseLeave: d
        }
    } = (0, D.a)(!0), {
        notificationType: u
    } = (0, I.Bk)(l), _ = null == u || u === c.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: d,
        children: (0, i.jsx)(L.A, {
            className: r()(j.rs, {
                [j.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(D.l, {
                src: s
            }),
            iconContainerClassName: j.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(j.Qs, {
                    [j.oE]: n
                }),
                children: [(0, i.jsx)(O.ix, {
                    message: l,
                    messageClassname: j.he,
                    className: r()(j.QV, j.he, {
                        [j.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: j.he,
                        children: [(0, i.jsx)(A.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: j.Xh,
                            children: v.intl.string(v.t.hG1StD)
                        }), (0, i.jsx)(m.A, {
                            type: P.nu.SYSTEM_DM,
                            className: j.Al
                        }), _ && (0, i.jsx)(A.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            tag: "span",
                            className: j.he,
                            children: v.intl.string(v.t.ufawcw)
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: j.BZ
                }), (0, i.jsx)(k, {
                    message: l,
                    compact: n
                })]
            })
        })
    })
}