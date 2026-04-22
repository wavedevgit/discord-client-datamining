/** chunk id: 841933 params = (module,exports,require) **/
l.d(t, {
    A: () => P
});
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    d = l.n(r),
    o = l(311907),
    c = l(397927),
    u = l(688810),
    x = l(726249),
    m = l(624458),
    h = l(513461),
    j = l(716416),
    _ = l(886486),
    g = l(123393),
    A = l(534400),
    f = l(657331),
    b = l(427157),
    v = l(71393),
    T = l(661191),
    N = l(427262),
    E = l(652215),
    S = l(743981),
    C = l(985018),
    I = l(982186),
    R = l(637498);

function p(e) {
    let {
        icon: t,
        label: l,
        onClick: s,
        disabled: i
    } = e;
    return (0, n.jsxs)(c.DUT, {
        className: a()(I.hP, {
            [I.r9]: i
        }),
        onClick: i ? E.tEg : s,
        "aria-label": l,
        children: [(0, n.jsx)(t, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }), (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "none",
            children: l
        })]
    })
}

function M(e) {
    let {
        user: t,
        guildId: l,
        joinRequest: s
    } = e, {
        analyticsLocations: i
    } = (0, u.Ay)(), r = () => {
        (0, f.openUserProfileModal)({
            userId: t.id,
            joinRequestId: s.joinRequestId,
            sourceAnalyticsLocations: i
        })
    };
    return (0, n.jsxs)("div", {
        className: I.op,
        children: [(0, n.jsxs)("div", {
            className: R.FD,
            children: [(0, n.jsx)(c.DUT, {
                onClick: r,
                className: a()(I.vk, R.Wn),
                children: (0, n.jsx)(c.euF, {
                    src: t.getAvatarURL(l, 48),
                    "aria-label": t.username,
                    size: c._3J.SIZE_48
                })
            }), (0, n.jsxs)("div", {
                className: R.oS,
                children: [(0, n.jsxs)("div", {
                    className: R.K$,
                    children: [(0, n.jsx)(c.DUT, {
                        onClick: r,
                        className: I.vk,
                        children: (0, n.jsx)(c.Text, {
                            variant: "text-lg/medium",
                            children: t?.globalName
                        })
                    }), (0, n.jsx)(A.Ay, {
                        primaryGuild: t?.primaryGuild,
                        userId: t?.id,
                        contextGuildId: l,
                        badgeSize: S.Sl.SIZE_16,
                        textVariant: "heading-md/semibold",
                        className: R.Dz,
                        containerClassName: R.UL
                    })]
                }), (0, n.jsx)(c.DUT, {
                    onClick: r,
                    className: I.vk,
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: N.Ay.getUserTag(t)
                    })
                })]
            })]
        }), (0, n.jsx)(c.DUT, {
            className: R.d4,
            onClick: () => m.A.setSelectedGuildJoinRequest(l, null),
            children: (0, n.jsx)(c.PGe, {
                size: "md",
                color: "currentColor"
            })
        })]
    })
}

function D(e) {
    let {
        user: t,
        guildId: l,
        joinRequest: s
    } = e, {
        approveRequest: i,
        rejectRequest: a,
        handleOpenInterview: r,
        submitting: d
    } = (0, g.W)(l, t.id, s.joinRequestId, s.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: I.$l,
        children: [(0, n.jsx)(p, {
            icon: c.yr3,
            label: C.intl.string(C.t.BzjDQJ),
            onClick: i,
            disabled: d
        }), (0, n.jsx)(p, {
            icon: c.aXh,
            label: C.intl.string(C.t.hDtbsz),
            onClick: a,
            disabled: d
        }), (0, n.jsx)(p, {
            icon: c.oyn,
            label: C.intl.string(C.t.KQeYoC),
            onClick: r,
            disabled: d
        })]
    })
}

function y(e) {
    let {
        joinRequest: t
    } = e, {
        actionedAt: l,
        actionedByUser: s,
        rejectionReason: i
    } = t;
    return (0, n.jsxs)("div", {
        className: I.Ik,
        children: [(0, n.jsx)(c.aXh, {
            size: "lg",
            color: c.LU0.colors.BACKGROUND_BASE_LOWER,
            secondaryColor: c.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: C.intl.string(C.t.bSZkla)
            }), null != s && null != l ? (0, n.jsxs)("div", {
                className: I.Ay,
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: C.intl.formatToPlainString(C.t.qnimbL, {
                        username: s.global_name ?? s.username
                    })
                }), (0, n.jsx)("div", {
                    className: I.Om
                }), (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: d()(T.default.extractTimestamp(l)).format("ll")
                })]
            }) : null, null != i && (0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.formatToPlainString(C.t.fU5PPM, {
                    rejectionReason: i
                })
            })]
        })]
    })
}

function G(e) {
    let {
        joinRequest: t
    } = e, {
        actionedAt: l,
        actionedByUser: s
    } = t;
    return (0, n.jsxs)("div", {
        className: I.Ik,
        children: [(0, n.jsx)(c.yr3, {
            size: "lg",
            color: c.LU0.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: c.LU0.colors.STATUS_POSITIVE_TEXT
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: C.intl.string(C.t.aURgY2)
            }), null != s && null != l ? (0, n.jsxs)("div", {
                className: I.Ay,
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: C.intl.formatToPlainString(C.t.qnimbL, {
                        username: s.global_name ?? s.username
                    })
                }), (0, n.jsx)("div", {
                    className: I.Om
                }), (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: d()(T.default.extractTimestamp(l)).format("ll")
                })]
            }) : null]
        })]
    })
}

function L(e) {
    let {
        user: t,
        joinRequest: l
    } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.Text, {
            className: I._3,
            variant: "text-sm/medium",
            color: "text-muted",
            children: C.intl.string(C.t["ldCE/p"])
        }), (0, n.jsxs)("div", {
            className: I.TT,
            children: [(0, n.jsxs)("div", {
                className: I.lj,
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: C.intl.string(C.t.SaDIpL)
                }), (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: d()(T.default.extractTimestamp(t.id)).format("ll")
                })]
            }), (0, n.jsxs)("div", {
                className: I.lj,
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: C.intl.string(C.t["Vt4cn+"])
                }), (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: d()(l.createdAt).format("ll")
                })]
            })]
        })]
    })
}

function P(e) {
    let {
        guildId: t
    } = e, l = (0, j.R)({
        guildId: t
    }), {
        user: i
    } = l ?? {}, r = s.useMemo(() => l?.formResponses ?? [], [l?.formResponses]), d = s.useMemo(() => null != i ? new b.A(i) : null, [i]), u = (0, o.bG)([v.A], () => v.A.getGuild(t), [t]);
    return ((0, x.HU)({
        subsection: C.intl.string(C.t.nqrK8X),
        location: u?.name
    }), null == l || null == u || null == d || null == i) ? null : (0, n.jsx)("section", {
        className: I.pz,
        children: (0, n.jsx)(c.HOs, {
            children: (0, n.jsxs)("div", {
                className: I.WH,
                children: [(0, n.jsxs)("div", {
                    className: I.Ui,
                    children: [(0, n.jsx)(M, {
                        user: d,
                        guildId: t,
                        joinRequest: l
                    }), l.applicationStatus === h.B5.SUBMITTED && (0, n.jsx)(D, {
                        user: d,
                        guildId: t,
                        joinRequest: l
                    }), l.applicationStatus === h.B5.REJECTED && (0, n.jsx)(y, {
                        joinRequest: l
                    }), l.applicationStatus === h.B5.APPROVED && (0, n.jsx)(G, {
                        joinRequest: l
                    })]
                }), (0, n.jsxs)("div", {
                    className: a()(I.Ui, I.gi),
                    children: [(0, n.jsx)(_.A, {
                        guildId: u.id,
                        formFields: r,
                        user: d,
                        showRequirements: !1
                    }), (0, n.jsx)(L, {
                        guildId: t,
                        user: d,
                        joinRequest: l
                    })]
                })]
            })
        })
    })
}