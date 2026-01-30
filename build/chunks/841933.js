/** chunk id: 841933, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => w
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(989349),
    o = l.n(a),
    c = l(311907),
    d = l(397927),
    u = l(688810),
    x = l(726249),
    m = l(624458),
    j = l(513461),
    b = l(716416),
    h = l(886486),
    f = l(123393),
    g = l(534400),
    v = l(657331),
    _ = l(427157),
    A = l(71393),
    p = l(661191),
    T = l(427262),
    E = l(652215),
    S = l(743981),
    y = l(985018),
    O = l(971517),
    N = l(186891);

function I(e) {
    let {
        icon: t,
        label: l,
        onClick: r,
        disabled: i
    } = e;
    return (0, n.jsxs)(d.DUT, {
        className: s()(O.hP, {
            [O.r9]: i
        }),
        onClick: i ? E.tEg : r,
        "aria-label": l,
        children: [(0, n.jsx)(t, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
        }), (0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "none",
            children: l
        })]
    })
}

function R(e) {
    let {
        user: t,
        guildId: l,
        joinRequest: r
    } = e, {
        analyticsLocations: i
    } = (0, u.Ay)(), a = () => {
        (0, v.openUserProfileModal)({
            userId: t.id,
            joinRequestId: r.joinRequestId,
            sourceAnalyticsLocations: i
        })
    };
    return (0, n.jsxs)("div", {
        className: O.op,
        children: [(0, n.jsxs)("div", {
            className: N.FD,
            children: [(0, n.jsx)(d.DUT, {
                onClick: a,
                className: s()(O.vk, N.Wn),
                children: (0, n.jsx)(d.euF, {
                    src: t.getAvatarURL(l, 48),
                    "aria-label": t.username,
                    size: d._3J.SIZE_48
                })
            }), (0, n.jsxs)("div", {
                className: N.oS,
                children: [(0, n.jsxs)("div", {
                    className: N.K$,
                    children: [(0, n.jsx)(d.DUT, {
                        onClick: a,
                        className: O.vk,
                        children: (0, n.jsx)(d.Text, {
                            variant: "text-lg/medium",
                            children: null == t ? void 0 : t.globalName
                        })
                    }), (0, n.jsx)(g.Ay, {
                        primaryGuild: null == t ? void 0 : t.primaryGuild,
                        userId: null == t ? void 0 : t.id,
                        contextGuildId: l,
                        badgeSize: S.Sl.SIZE_16,
                        textVariant: "heading-md/semibold",
                        className: N.Dz,
                        containerClassName: N.UL
                    })]
                }), (0, n.jsx)(d.DUT, {
                    onClick: a,
                    className: O.vk,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: T.Ay.getUserTag(t)
                    })
                })]
            })]
        }), (0, n.jsx)(d.DUT, {
            className: N.d4,
            onClick: () => m.A.setSelectedGuildJoinRequest(l, null),
            children: (0, n.jsx)(d.PGe, {
                size: "md",
                color: "currentColor"
            })
        })]
    })
}

function C(e) {
    let {
        user: t,
        guildId: l,
        joinRequest: r
    } = e, {
        approveRequest: i,
        rejectRequest: s,
        handleOpenInterview: a,
        submitting: o
    } = (0, f.W)(l, t.id, r.joinRequestId, r.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: O.$l,
        children: [(0, n.jsx)(I, {
            icon: d.yr3,
            label: y.intl.string(y.t.BzjDQJ),
            onClick: i,
            disabled: o
        }), (0, n.jsx)(I, {
            icon: d.aXh,
            label: y.intl.string(y.t.hDtbsz),
            onClick: s,
            disabled: o
        }), (0, n.jsx)(I, {
            icon: d.oyn,
            label: y.intl.string(y.t.KQeYoC),
            onClick: a,
            disabled: o
        })]
    })
}

function D(e) {
    var t;
    let {
        joinRequest: l
    } = e, {
        actionedAt: r,
        actionedByUser: i,
        rejectionReason: s
    } = l;
    return (0, n.jsxs)("div", {
        className: O.Ik,
        children: [(0, n.jsx)(d.aXh, {
            size: "lg",
            color: d.LU0.colors.BACKGROUND_BASE_LOWER,
            secondaryColor: d.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: y.intl.string(y.t.bSZkla)
            }), null != i && null != r ? (0, n.jsxs)("div", {
                className: O.Ay,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: y.intl.formatToPlainString(y.t.qnimbL, {
                        username: null != (t = i.global_name) ? t : i.username
                    })
                }), (0, n.jsx)("div", {
                    className: O.Om
                }), (0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: o()(p.default.extractTimestamp(r)).format("ll")
                })]
            }) : null, null != s && (0, n.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: y.intl.formatToPlainString(y.t.fU5PPM, {
                    rejectionReason: s
                })
            })]
        })]
    })
}

function P(e) {
    var t;
    let {
        joinRequest: l
    } = e, {
        actionedAt: r,
        actionedByUser: i
    } = l;
    return (0, n.jsxs)("div", {
        className: O.Ik,
        children: [(0, n.jsx)(d.yr3, {
            size: "lg",
            color: d.LU0.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: d.LU0.colors.STATUS_POSITIVE_TEXT
        }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: y.intl.string(y.t.aURgY2)
            }), null != i && null != r ? (0, n.jsxs)("div", {
                className: O.Ay,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: y.intl.formatToPlainString(y.t.qnimbL, {
                        username: null != (t = i.global_name) ? t : i.username
                    })
                }), (0, n.jsx)("div", {
                    className: O.Om
                }), (0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: o()(p.default.extractTimestamp(r)).format("ll")
                })]
            }) : null]
        })]
    })
}

function M(e) {
    let {
        user: t,
        joinRequest: l
    } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.Text, {
            className: O._3,
            variant: "text-sm/medium",
            color: "text-muted",
            children: y.intl.string(y.t["ldCE/p"])
        }), (0, n.jsxs)("div", {
            className: O.TT,
            children: [(0, n.jsxs)("div", {
                className: O.lj,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: y.intl.string(y.t.SaDIpL)
                }), (0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o()(p.default.extractTimestamp(t.id)).format("ll")
                })]
            }), (0, n.jsxs)("div", {
                className: O.lj,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: y.intl.string(y.t["Vt4cn+"])
                }), (0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o()(l.createdAt).format("ll")
                })]
            })]
        })]
    })
}

function w(e) {
    let {
        guildId: t
    } = e, l = (0, b.R)({
        guildId: t
    }), {
        user: i
    } = null != l ? l : {}, a = r.useMemo(() => {
        var e;
        return null != (e = null == l ? void 0 : l.formResponses) ? e : []
    }, [null == l ? void 0 : l.formResponses]), o = r.useMemo(() => null != i ? new _.A(i) : null, [i]), u = (0, c.bG)([A.A], () => A.A.getGuild(t), [t]);
    return ((0, x.HU)({
        subsection: y.intl.string(y.t.nqrK8X),
        location: null == u ? void 0 : u.name
    }), null == l || null == u || null == o || null == i) ? null : (0, n.jsx)("section", {
        className: O.pz,
        children: (0, n.jsx)(d.HOs, {
            children: (0, n.jsxs)("div", {
                className: O.WH,
                children: [(0, n.jsxs)("div", {
                    className: O.Ui,
                    children: [(0, n.jsx)(R, {
                        user: o,
                        guildId: t,
                        joinRequest: l
                    }), l.applicationStatus === j.B5.SUBMITTED && (0, n.jsx)(C, {
                        user: o,
                        guildId: t,
                        joinRequest: l
                    }), l.applicationStatus === j.B5.REJECTED && (0, n.jsx)(D, {
                        joinRequest: l
                    }), l.applicationStatus === j.B5.APPROVED && (0, n.jsx)(P, {
                        joinRequest: l
                    })]
                }), (0, n.jsxs)("div", {
                    className: s()(O.Ui, O.gi),
                    children: [(0, n.jsx)(h.A, {
                        guildId: u.id,
                        formFields: a,
                        user: o,
                        showRequirements: !1
                    }), (0, n.jsx)(M, {
                        guildId: t,
                        user: o,
                        joinRequest: l
                    })]
                })]
            })
        })
    })
}