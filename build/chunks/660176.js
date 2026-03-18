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
    m = n(397927),
    A = n(709066),
    E = n(585510),
    I = n(903093),
    T = n(785823),
    N = n(449585),
    f = n(137207),
    C = n(997509),
    g = n(916768),
    h = n(854627),
    p = n(342296),
    R = n(734057),
    S = n(696451),
    x = n(287809),
    O = n(643204),
    M = n(112758),
    D = n(809115),
    P = n(888675),
    U = n(652215),
    v = n(705751),
    L = n(985018),
    j = n(234054);

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
    } = (0, T.Bk)(t);
    switch (l) {
        case T.ZA:
        case c.W.RAID:
            return (0, i.jsx)(B, {
                message: t,
                compact: n
            });
        case c.W.MENTION_RAID:
            return (0, i.jsx)(H, {
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
            children: [(0, i.jsx)(m.EpV, {
                size: "xs",
                color: _.A.colors.TEXT_DEFAULT.css
            }), (0, i.jsx)(m.Text, {
                variant: "text-md/semibold",
                color: "text-default",
                children: L.intl.string(L.t.VdZCcC)
            })]
        }),
        content: (0, i.jsx)(m.Text, {
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
    return (0, i.jsx)(w, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(m.EpV, {
                size: "xs",
                color: _.A.colors.TEXT_DEFAULT.css
            }), (0, i.jsx)(m.Text, {
                variant: "text-md/semibold",
                color: "text-default",
                children: L.intl.string(L.t["2qTBw/"])
            })]
        }),
        content: (0, i.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Dc9wCp)
        })
    })
}

function F(e) {
    let {
        message: t,
        compact: n
    } = e, a = x.default.getUser((0, T.ZD)(t)), r = R.A.getBasicChannel(t.channel_id)?.guild_id, s = null != r && null != a ? S.Ay.getMember(r, a.id) : null, {
        avatarSrc: c,
        avatarDecorationSrc: d,
        eventHandlers: u
    } = (0, h.A)({
        userId: a?.id,
        guildId: r,
        size: 12
    }), A = l.useRef(null);
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(m.Hnu, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css
            }), (0, i.jsx)(m.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-positive",
                children: L.intl.string(L.t.lVLiFp)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: j.Ns,
            children: [(0, i.jsx)("div", {
                className: j.gk,
                children: null != s && null != a && (0, i.jsxs)(l.Fragment, {
                    children: [(0, i.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: L.intl.string(L.t.qlFrXW)
                    }), (0, i.jsx)(p.A, {
                        targetElementRef: A,
                        user: a,
                        guildId: r,
                        channelId: t.channel_id,
                        messageId: t.id,
                        children: e => (0, i.jsxs)(m.DUT, {
                            innerRef: A,
                            className: j.rI,
                            ...e,
                            children: [(0, i.jsx)("div", {
                                ...u,
                                children: (0, i.jsx)(m.euF, {
                                    src: c,
                                    avatarDecoration: d,
                                    size: m._3J.SIZE_16,
                                    "aria-label": "TODO"
                                })
                            }), (0, i.jsxs)(m.Text, {
                                variant: "text-xs/medium",
                                style: {
                                    color: null != s.colorString ? s.colorString : _.A.colors.TEXT_DEFAULT.css
                                },
                                children: [" ", "@", a.username]
                            })]
                        })
                    })]
                })
            }), (0, i.jsx)(y, {}), (0, i.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(t.timestamp).fromNow()
            })]
        }),
        content: (0, i.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t["QV/8u5"])
        })
    })
}

function B(e) {
    let {
        message: t,
        compact: n
    } = e, {
        joinAttempts: a,
        raidDatetime: r,
        dmsSent: s,
        raidType: c,
        resolvedReason: A
    } = (0, T.Bk)(t), f = (0, u.bG)([R.A], () => R.A.getChannel(t.channel_id), [t.channel_id]), C = f?.guild_id ?? null, {
        shouldShowIncidentActions: g
    } = (0, E.Li)(C), h = (0, M.Am)(t.author.id, t.channel_id), p = l.useCallback(() => {
        let e = f?.guild_id;
        null != e && (0, N.is)(t.id, e)
    }, [t.id, f]), S = c === d.p.DM_RAID, x = S ? m.EpV : m.EF8;
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(x, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(m.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: S ? L.intl.string(L.t["8+lHUb"]) : L.intl.string(L.t.xMwcwV)
            })]
        }),
        subheader: (0, i.jsxs)("div", {
            className: j.Ns,
            children: [null != a && (0, i.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: L.intl.format(L.t["4ylIiu"], {
                    joinCount: a
                })
            }), null != s && (0, i.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: L.intl.format(L.t["5C8Mh3"], {
                    dmsSent: s
                })
            }), null != r && (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)(y, {}), (0, i.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(r).fromNow()
                })]
            })]
        }),
        content: null != r ? (0, i.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.format(L.t["4QIIZl"], {
                dateTime: r.toLocaleString(L.intl.currentLocale, I.yc)
            })
        }) : null,
        footerButtons: g ? (0, i.jsxs)("div", {
            className: j.OZ,
            children: [(0, i.jsxs)("div", {
                className: j.AX,
                children: [(0, i.jsx)(m.lmn, {
                    size: "xs",
                    color: _.A.unsafe_rawColors.BRAND_500.css,
                    className: j.Dq
                }), (0, i.jsx)(m.QWc, {
                    variant: "primary",
                    size: "sm",
                    textVariant: "text-xs/medium",
                    text: L.intl.string(L.t.DEoVWZ),
                    onClick: e => {
                        h(e)
                    }
                })]
            }), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                className: j.AX,
                children: (0, i.jsx)(m.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: (0, T.Oj)(A),
                    onClick: p
                })
            })]
        }) : null
    })
}

function H(e) {
    let {
        message: t,
        compact: n
    } = e, a = R.A.getBasicChannel(t.channel_id)?.guild_id, {
        raidDatetime: r,
        decisionId: s,
        suspiciousMentionActivityUntil: c
    } = (0, T.Bk)(t);
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(m.EpV, {
                size: "xs",
                color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css
            }), (0, i.jsx)(m.Text, {
                variant: "text-md/semibold",
                color: "text-feedback-critical",
                children: L.intl.string(L.t.C2uIXE)
            })]
        }),
        subheader: (0, i.jsx)("div", {
            className: j.Ns,
            children: null != r && (0, i.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "text-default",
                children: o()(r).fromNow()
            })
        }),
        content: (0, i.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t.SWIWEV)
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: j.OZ,
            children: [(0, i.jsx)("div", {
                className: j.AX,
                children: (0, i.jsx)(m.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: L.intl.string(L.t.oX14El),
                    onClick: function() {
                        null != a && null != s && (0, f.W5)(a, s, () => {
                            (0, g.w)(c), (0, f.wu)(a)
                        })
                    }
                })
            }), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                className: j.AX,
                children: (0, i.jsx)(m.QWc, {
                    variant: "primary",
                    textVariant: "text-xs/medium",
                    size: "sm",
                    text: L.intl.string(L.t["1R7QIx"]),
                    onClick: function() {
                        null != a && C.A.open(a, U.BEX.GUILD_AUTOMOD, void 0, U.nd0.AUTOMOD_MENTION_SPAM)
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
    } = (0, T.Bk)(l), _ = null == u || u === c.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: d,
        children: (0, i.jsx)(P.A, {
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
                        children: [(0, i.jsx)(m.Text, {
                            variant: "text-md/normal",
                            color: "text-brand",
                            tag: "span",
                            className: j.Xh,
                            children: L.intl.string(L.t.hG1StD)
                        }), (0, i.jsx)(A.A, {
                            type: v.nu.SYSTEM_DM,
                            className: j.Al
                        }), _ && (0, i.jsx)(m.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            tag: "span",
                            className: j.he,
                            children: L.intl.string(L.t.ufawcw)
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