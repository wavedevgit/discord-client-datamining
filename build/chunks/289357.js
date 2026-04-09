/** chunk id: 289357 params = (module,exports,require) **/
n.d(t, {
    $i: () => $,
    Ay: () => Q,
    Qv: () => V,
    SY: () => z
});
var i, a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(311907),
    d = n(397927),
    c = n(104171),
    u = n(47167),
    A = n(713654),
    _ = n(976860),
    h = n(323443),
    m = n(63995),
    g = n(69407),
    p = n(110618),
    E = n(446600),
    I = n(964175),
    f = n(576705),
    C = n(607567),
    T = n(954571),
    N = n(403362),
    S = n(707592),
    x = n(698441),
    v = n(935159),
    b = n(473019),
    y = n(11550),
    O = n(435328),
    L = n(539446),
    R = n(563312),
    P = n(508654),
    D = n(9448),
    j = n(974930),
    M = n(666394),
    w = n(988794),
    U = n(652215),
    G = n(985018),
    k = n(999476);
let V = r.memo(function(e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: r,
        detailsIcon: l,
        topic: o,
        onClickCloseIcon: c,
        children: u
    } = e;
    return (0, a.jsxs)("div", {
        className: k.kX,
        children: [(0, a.jsxs)("div", {
            className: s()(k.fI, k.pF),
            children: [(0, a.jsx)("div", {
                className: k.Ok
            }), (0, a.jsx)(d.Text, {
                color: "text-feedback-positive",
                variant: "text-xs/semibold",
                className: k.U4,
                children: t
            }), null != c && (0, a.jsx)(d.DUT, {
                onClick: c,
                className: k.ut,
                "aria-label": G.intl.string(G.t.cpT0Cq),
                children: (0, a.jsx)(d.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }), (0, a.jsx)(d.Heading, {
            color: "text-strong",
            variant: "heading-md/semibold",
            className: k.eq,
            children: o
        }), (0, a.jsxs)("div", {
            className: s()(k.fI, k.pF),
            children: [i, (0, a.jsx)(d.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: k.HA,
                children: n
            }), null != r && null != l && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(d.Text, {
                    className: k.hY,
                    color: "none",
                    variant: "text-xs/normal",
                    children: "•"
                }), l, (0, a.jsx)(d.Text, {
                    color: "none",
                    variant: "text-xs/normal",
                    className: k.zH,
                    children: r
                })]
            })]
        }), u]
    })
});

function B(e) {
    let {
        guildEvent: t,
        channel: n
    } = e, i = (0, u.Ay)(n), r = (0, o.yK)([C.Ay], () => C.Ay.getVoiceStatesForChannel(n).map(e => {
        let {
            user: t
        } = e;
        return t
    }), [n]), l = (0, A.gU)(n);
    return (0, a.jsx)(V, {
        onClickCloseIcon: () => (0, v.iF)({
            eventId: t?.id
        }),
        heading: G.intl.string(G.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != l ? (0, a.jsx)(l, {
            size: "xs",
            color: "currentColor",
            className: k.uE
        }) : null,
        children: (0, a.jsx)($, {
            channel: n,
            speakers: r,
            voiceType: 1
        })
    })
}

function H(e) {
    let {
        guildEvent: t,
        noticeType: n
    } = e, i = (0, j.G3)(t), r = (0, o.bG)([x.Ay], () => x.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]), l = (0, o.bG)([y.A], () => y.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return r || null != l || (0, v.pE)(t.id), (0, a.jsx)(d.Button, {
        onClick: function() {
            (0, M.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, v.Lx)(t.id), 1e3)), T.default.track(U.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                guild_id: t.guild_id,
                notice_type: n
            })
        },
        text: G.intl.string(G.t.DlcqlU),
        icon: r ? d.A9s : d.XFE,
        variant: r ? "secondary" : "primary",
        size: "sm",
        fullWidth: !0
    })
}

function F(e) {
    let {
        guildEvent: t,
        noticeType: n
    } = e, i = (0, D.oF)(t), l = null != i ? (0, O.l)(i, !0) : null, o = (0, D.WN)(t), c = (0, u.Ay)(o), _ = (0, A.gU)(o), {
        startTime: h,
        endTime: m
    } = (0, R.Ay)(t), {
        startDateTimeString: g,
        upcomingEvent: p,
        diffMinutes: E
    } = (0, j.CC)(h.toISOString(), m?.toISOString()), I = p ? E > 0 ? G.intl.formatToPlainString(G.t.PQlCWk, {
        minutes: E
    }) : G.intl.string(G.t.WINqKV) : G.intl.formatToPlainString(G.t.DC6h3G, {
        date: g
    });
    return r.useEffect(() => {
        T.default.track(U.HAw.CHANNEL_NOTICE_VIEWED, {
            notice_type: n,
            guild_id: t.guild_id
        })
    }, [t, n]), (0, a.jsxs)("div", {
        className: k.kX,
        children: [(0, a.jsxs)("div", {
            className: k.fI,
            children: [(0, a.jsx)(d.DUT, {
                onClick: () => (0, S.uR)({
                    eventId: t.id
                }),
                className: k.oP,
                children: (0, a.jsx)(d.Text, {
                    color: "text-strong",
                    variant: "text-md/semibold",
                    className: k.eq,
                    children: t.name
                })
            }), (0, a.jsx)(d.DUT, {
                onClick: () => {
                    T.default.track(U.HAw.CHANNEL_NOTICE_CLOSED, {
                        notice_type: n,
                        guild_id: t.guild_id
                    }), (0, v.Lx)(t.id)
                },
                className: k.ut,
                "aria-label": G.intl.string(G.t.cpT0Cq),
                children: (0, a.jsx)(d.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }), (0, a.jsxs)("div", {
            className: s()(k.fI, k.pF),
            children: [(0, a.jsx)(d.CTc, {
                size: "custom",
                color: "currentColor",
                className: k.uE,
                width: 16,
                height: 16
            }), (0, a.jsx)(d.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: k.Sv,
                children: I
            })]
        }), (0, a.jsxs)("div", {
            className: s()(k.fI, k.pF),
            children: [null != _ ? (0, a.jsx)(_, {
                size: "xs",
                color: "currentColor",
                className: k.uE
            }) : (0, a.jsx)(d.BT6, {
                size: "custom",
                color: "currentColor",
                width: 16,
                height: 16,
                className: k.uE
            }), (0, a.jsx)(d.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: k.HA,
                children: c ?? l
            })]
        }), (0, a.jsx)(H, {
            guildEvent: t,
            noticeType: n
        })]
    })
}

function Y(e) {
    let {
        guildEvent: t
    } = e, n = (0, D.oF)(t);
    return null == n ? null : (0, a.jsx)(V, {
        onClickCloseIcon: () => (0, v.iF)({
            eventId: t?.id
        }),
        heading: G.intl.string(G.t["1+boPi"]),
        topic: t.name,
        location: (0, O.l)(n, !0),
        locationIcon: (0, a.jsx)(d.BT6, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: k.uE
        }),
        children: (0, a.jsx)(W, {
            guildEvent: t
        })
    })
}

function W(e) {
    let {
        guildEvent: t
    } = e, n = r.useCallback(() => {
        (0, S.uR)({
            eventId: t.id
        })
    }, [t]);
    return (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: k.PD,
        children: (0, a.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: G.intl.string(G.t.z4FcDs),
            fullWidth: !0,
            onClick: n
        })
    })
}

function K(e) {
    let {
        channel: t,
        label: n
    } = e;
    return (0, a.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: k.PD,
        children: (0, a.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, h.av)(t), (0, _.uh)(t.getGuildId(), t.id))
            }
        })
    })
}

function q(e) {
    let {
        stageInstance: t,
        channel: n
    } = e, i = (0, u.Ay)(n), r = (0, o.yK)([m.A], () => [...new Set(m.A.getMutableParticipants(n.id, g.ip.SPEAKER).map(e => e.user))], [n.id]), l = (0, o.bG)([m.A], () => m.A.getParticipantCount(n.id, g.ip.AUDIENCE), [n.id]), s = G.intl.formatToPlainString(G.t["+v2pN2"], {
        count: `${l}`
    });
    return (0, a.jsx)(V, {
        onClickCloseIcon: () => (0, v.iF)({
            stageId: t?.id
        }),
        heading: G.intl.string(G.t["X2K3/4"]),
        location: i,
        details: s,
        detailsIcon: (0, a.jsx)(d.LoC, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: k.uE
        }),
        locationIcon: (0, a.jsx)(d.qux, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: k.uE
        }),
        topic: t.topic,
        children: (0, a.jsx)($, {
            channel: n,
            speakers: r,
            voiceType: 2
        })
    })
}
var z = ((i = {})[i.VOICE = 1] = "VOICE", i[i.STAGE = 2] = "STAGE", i[i.STUDY_ROOM = 3] = "STUDY_ROOM", i);

function $(e) {
    let {
        channel: t,
        speakers: n,
        voiceType: i
    } = e, l = t.getGuildId(), u = r.useMemo(() => n.slice(0, 3), [n]), A = (0, o.bG)([f.A], () => f.A.can(U.xBc.CONNECT, t)), _ = (0, I.A)(t.id), h = G.intl.string(G.t.VJlc0S);
    switch (i) {
        case 1:
            h = G.intl.string(G.t.VJlc0S);
            break;
        case 2:
            h = G.intl.string(G.t.ZYO5OK), _?.speaker ? h = G.intl.string(G.t["/cnSFc"]) : null != _ && (h = G.intl.string(G.t.btSGOj));
            break;
        case 3:
            h = G.intl.string(G.t.wBoE6L);
            break;
        default:
            (0, N.xb)(i)
    }
    return null == l ? null : (0, a.jsxs)(a.Fragment, {
        children: [u.length > 0 ? (0, a.jsxs)("div", {
            className: s()(k.fI, k.pF),
            children: [(0, a.jsx)(c.Ay, {
                guildId: l,
                users: u,
                showUserPopout: !0,
                size: c.DN.SIZE_16
            }), (0, a.jsx)(d.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: k.c8,
                children: (0, p.c)(l, u, t?.id, n.length)
            })]
        }) : null, A && null == _ && (0, a.jsx)(K, {
            channel: t,
            label: h
        })]
    })
}
let Q = r.memo(function(e) {
    let {
        guild: t
    } = e, n = (0, L.V)(t.id), i = (0, P.BP)(t.id), r = (0, P.WG)(t.id), l = (0, o.bG)([E.A], () => E.A.getStageInstanceByChannel(n?.id), [n]), {
        isStageNoticeHidden: s,
        isEventNoticeHidden: d
    } = (0, o.cf)([b.A], () => ({
        isStageNoticeHidden: b.A.isLiveChannelNoticeHidden({
            stageId: l?.id
        }),
        isEventNoticeHidden: b.A.isLiveChannelNoticeHidden({
            eventId: i?.id
        })
    }), [l, i]), c = null, u = null != l && null != n && !s;
    null == i || d ? u && (c = (0, a.jsx)(q, {
        stageInstance: l,
        channel: n
    })) : i.entity_type === w.Ps.STAGE_INSTANCE && u ? c = (0, a.jsx)(q, {
        stageInstance: l,
        channel: n
    }) : i.entity_type === w.Ps.EXTERNAL ? c = (0, a.jsx)(Y, {
        guildEvent: i
    }) : i.entity_type === w.Ps.VOICE && null != n && (c = (0, a.jsx)(B, {
        guildEvent: i,
        channel: n
    }));
    let A = t.features.has(U.GuildFeatures.COMMUNITY);
    if (null == c && null != r && !A) {
        let {
            upcomingEvent: e,
            noticeType: t
        } = r;
        c = (0, a.jsx)(F, {
            guildEvent: e,
            noticeType: t
        })
    }
    return c
})