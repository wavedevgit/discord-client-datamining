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
    m = n(827734),
    _ = n(397927),
    A = n(709066),
    E = n(585510),
    f = n(903093),
    h = n(785823),
    g = n(449585),
    p = n(137207),
    x = n(997509),
    C = n(916768),
    I = n(854627),
    T = n(342296),
    N = n(734057),
    S = n(696451),
    R = n(287809),
    v = n(643204),
    O = n(112758),
    M = n(809115),
    j = n(888675),
    b = n(652215),
    y = n(705751),
    L = n(985018),
    D = n(684532);

function U() {
    return (0, i.jsx)("div", {
        className: D.Om
    })
}

function P(e) {
    let {
        message: t,
        compact: n
    } = e, {
        notificationType: l
    } = (0, h.Bk)(t);
    switch (l) {
        case h.ZA:
        case c.W.RAID:
            return (0, i.jsx)(F, {
                message: t,
                compact: n
            });
        case c.W.MENTION_RAID:
            return (0, i.jsx)(H, {
                message: t,
                compact: n
            });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(w, {
                message: t,
                compact: n
            });
        case c.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(G, {
                compact: n
            });
        default:
            return (0, i.jsx)(k, {
                compact: n
            })
    }
}

function k(e) {
    let {
        compact: t
    } = e;
    return (0, i.jsx)(B, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(_.EpV, {
                size: "xs",
                color: m.A.colors.TEXT_DEFAULT.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                color: "text-default",
                children: L.intl.string(L.t.VdZCcC)
            })]
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t["NxHYX/"])
        })
    })
}

function G(e) {
    let {
        compact: t
    } = e;
    return (0, i.jsx)(B, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(_.EpV, {
                size: "xs",
                color: m.A.colors.TEXT_DEFAULT.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                color: "text-default",
                children: L.intl.string(L.t["2qTBw/"])
            })]
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Dc9wCp)
        })
    })
}

function w(e) {
    let {
        message: t,
        compact: n
    } = e, a = R.default.getUser((0, h.ZD)(t)), r = N.A.getBasicChannel(t.channel_id)?.guild_id, s = null != r && null != a ? S.Ay.getMember(r, a.id) : null, {
        avatarSrc: c,
        avatarDecorationSrc: d,
        eventHandlers: u
    } = (0, I.A)({
        userId: a?.id,
        guildId: r,
        size: 12
    }), A = l.useRef(null);
    return (0, i.jsx)(B, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(_.Hnu, {
                size: "xs",
                color: m.A.colors.TEXT_FEEDBACK_POSITIVE.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-positive",
                children: L.intl.string(L.t.lVLiFp)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: D.Ns,
            children: [(0, i.jsx)("div", {
                className: D.gk,
                children: null != s && null != a && (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: L.intl.string(L.t.qlFrXW)
                    }), (0, i.jsx)(T.A, {
                        targetElementRef: A,
                        user: a,
                        guildId: r,
                        channelId: t.channel_id,
                        messageId: t.id,
                        children: e => (0, i.jsxs)(_.DUT, {
                            innerRef: A,
                            className: D.rI,
                            ...e,
                            children: [(0, i.jsx)("div", {
                                ...u,
                                children: (0, i.jsx)(_.euF, {
                                    src: c,
                                    avatarDecoration: d,
                                    size: _._3J.SIZE_16,
                                    "aria-label": "TODO"
                                })
                            }), (0, i.jsxs)(_.Text, {
                                variant: "text-xs/medium",
                                style: {
                                    color: null != s.colorString ? s.colorString : m.A.colors.TEXT_DEFAULT.css
                                },
                                children: [" ", "@", a.username]
                            })]
                        })
                    })]
                })
            }), (0, i.jsx)(U, {}), (0, i.jsx)(_.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(t.timestamp).fromNow()
            })]
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t["QV/8u5"])
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
        resolvedReason: A
    } = (0, h.Bk)(t), p = (0, u.bG)([N.A], () => N.A.getChannel(t.channel_id), [t.channel_id]), x = p?.guild_id ?? null, {
        shouldShowIncidentActions: C
    } = (0, E.Li)(x), I = (0, O.Am)(t.author.id, t.channel_id), T = l.useCallback(() => {
        let e = p?.guild_id;
        null != e && (0, g.is)(t.id, e)
    }, [t.id, p]), S = c === d.p.DM_RAID, R = S ? _.EpV : _.EF8;
    return (0, i.jsx)(B, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(R, {
                size: "xs",
                color: m.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: S ? L.intl.string(L.t["8+lHUb"]) : L.intl.string(L.t.xMwcwV)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: D.Ns,
            children: [null != a && (0, i.jsx)(_.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: L.intl.format(L.t["4ylIiu"], {
                    joinCount: a
                })
            }), null != s && (0, i.jsx)(_.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: L.intl.format(L.t["5C8Mh3"], {
                    dmsSent: s
                })
            }), null != r && (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)(U, {}), (0, i.jsx)(_.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(r).fromNow()
                })]
            })]
        }),
        content: null != r ? (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.format(L.t["4QIIZl"], {
                dateTime: r.toLocaleString(L.intl.currentLocale, f.yc)
            })
        }) : null,
        footerButtons: C ? (0, i.jsxs)("div", {
            className: D.OZ,
            children: [(0, i.jsxs)("div", {
                className: D.AX,
                children: [(0, i.jsx)(_.lmn, {
                    size: "xs",
                    color: m.A.unsafe_rawColors.BRAND_500.css,
                    className: D.Dq
                }), (0, i.jsx)(_.QWc, {
                    variant: "primary",
                    size: "sm",
                    textVariant: "text-xs/medium",
                    text: L.intl.string(L.t.DEoVWZ),
                    onClick: e => {
                        I(e)
                    }
                })]
            }), (0, i.jsx)(U, {}), (0, i.jsx)("div", {
                className: D.AX,
                children: (0, i.jsx)(_.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: (0, h.Oj)(A),
                    onClick: T
                })
            })]
        }) : null
    })
}

function H(e) {
    let {
        message: t,
        compact: n
    } = e, a = N.A.getBasicChannel(t.channel_id)?.guild_id, {
        raidDatetime: r,
        decisionId: s,
        suspiciousMentionActivityUntil: c
    } = (0, h.Bk)(t);
    return (0, i.jsx)(B, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(_.EpV, {
                size: "xs",
                color: m.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: L.intl.string(L.t.C2uIXE)
            })]
        }),
        subheader: (0, i.jsx)("div", {
            className: D.Ns,
            children: null != r && (0, i.jsx)(_.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(r).fromNow()
            })
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t.SWIWEV)
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: D.OZ,
            children: [(0, i.jsx)("div", {
                className: D.AX,
                children: (0, i.jsx)(_.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: L.intl.string(L.t.oX14El),
                    onClick: function() {
                        null != a && null != s && (0, p.W5)(a, s, () => {
                            (0, C.w)(c), (0, p.wu)(a)
                        })
                    }
                })
            }), (0, i.jsx)(U, {}), (0, i.jsx)("div", {
                className: D.AX,
                children: (0, i.jsx)(_.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: L.intl.string(L.t["1R7QIx"]),
                    onClick: function() {
                        null != a && x.A.open(a, b.BEX.GUILD_AUTOMOD, void 0, b.nd0.AUTOMOD_MENTION_SPAM)
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
        subheader: l,
        content: a,
        footerButtons: s
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(D.gD, {
            [D.oE]: t
        }),
        children: [(0, i.jsxs)("div", {
            className: D.Ux,
            children: [(0, i.jsxs)("div", {
                className: D.LN,
                children: [(0, i.jsx)("div", {
                    className: D.MY,
                    children: n
                }), null != l && (0, i.jsx)("div", {
                    className: D.m_,
                    children: l
                })]
            }), a]
        }), null != s && (0, i.jsx)("div", {
            className: r()(D.Y4, D.UX, {
                [D.oE]: t
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
    } = (0, M.a)(!0), {
        notificationType: u
    } = (0, h.Bk)(l), m = null == u || u === c.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: d,
        children: (0, i.jsx)(j.A, {
            className: r()(D.rs, {
                [D.oE]: n
            }),
            iconNode: n ? null : (0, i.jsx)(M.l, {
                src: s
            }),
            iconContainerClassName: D.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(D.Qs, {
                    [D.oE]: n
                }),
                children: [(0, i.jsx)(v.ix, {
                    message: l,
                    messageClassname: D.he,
                    className: r()(D.QV, D.he, {
                        [D.oE]: n
                    }),
                    username: (0, i.jsxs)("div", {
                        className: D.he,
                        children: [(0, i.jsx)(_.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: D.Xh,
                            children: L.intl.string(L.t.hG1StD)
                        }), (0, i.jsx)(A.A, {
                            type: y.nu.SYSTEM_DM,
                            className: D.Al
                        }), m && (0, i.jsx)(_.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            tag: "span",
                            className: D.he,
                            children: L.intl.string(L.t.ufawcw)
                        })]
                    }),
                    compact: n,
                    showTimestamp: !0
                }), (0, i.jsx)("div", {
                    className: D.BZ
                }), (0, i.jsx)(P, {
                    message: l,
                    compact: n
                })]
            })
        })
    })
}