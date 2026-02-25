/** chunk id: 289357, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $i: () => Q,
    Ay: () => X,
    Qv: () => B,
    SY: () => $
});
var i, r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(104171),
    u = n(713654),
    A = n(83241),
    h = n(214884),
    _ = n(976860),
    m = n(323443),
    p = n(63995),
    g = n(69407),
    E = n(110618),
    I = n(446600),
    f = n(964175),
    C = n(576705),
    T = n(607567),
    N = n(954571),
    S = n(403362),
    x = n(707592),
    v = n(698441),
    y = n(935159),
    b = n(695400),
    O = n(11550),
    L = n(435328),
    R = n(539446),
    P = n(563312),
    j = n(508654),
    D = n(9448),
    M = n(974930),
    w = n(666394),
    U = n(988794),
    G = n(652215),
    k = n(985018),
    V = n(855523);
let B = l.memo(function(e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: l,
        detailsIcon: a,
        topic: o,
        onClickCloseIcon: c,
        children: u
    } = e;
    return (0, r.jsxs)("div", {
        className: V.kX,
        children: [(0, r.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [(0, r.jsx)("div", {
                className: V.Ok
            }), (0, r.jsx)(d.Text, {
                color: "text-feedback-positive",
                variant: "text-xs/semibold",
                className: V.U4,
                children: t
            }), null != c && (0, r.jsx)(d.DUT, {
                onClick: c,
                className: V.ut,
                "aria-label": k.intl.string(k.t.cpT0Cq),
                children: (0, r.jsx)(d.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }), (0, r.jsx)(d.Heading, {
            color: "text-strong",
            variant: "heading-md/semibold",
            className: V.eq,
            children: o
        }), (0, r.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [i, (0, r.jsx)(d.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: V.HA,
                children: n
            }), null != l && null != a && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.Text, {
                    className: V.hY,
                    color: "none",
                    variant: "text-xs/normal",
                    children: "•"
                }), a, (0, r.jsx)(d.Text, {
                    color: "none",
                    variant: "text-xs/normal",
                    className: V.zH,
                    children: l
                })]
            })]
        }), u]
    })
});

function H(e) {
    let {
        guildEvent: t,
        channel: n
    } = e, i = (0, o.yK)([T.Ay], () => T.Ay.getVoiceStatesForChannel(n).map(e => {
        let {
            user: t
        } = e;
        return t
    }), [n]), l = (0, u.gU)(n);
    return (0, r.jsx)(B, {
        onClickCloseIcon: () => (0, y.iF)({
            eventId: t?.id
        }),
        heading: k.intl.string(k.t["X2K3/4"]),
        topic: t.name,
        location: n.name,
        locationIcon: null != l ? (0, r.jsx)(l, {
            size: "xs",
            color: "currentColor",
            className: V.uE
        }) : null,
        children: (0, r.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 1
        })
    })
}

function F(e) {
    let {
        guildEvent: t,
        noticeType: n
    } = e, i = (0, M.G3)(t), l = (0, o.bG)([v.Ay], () => v.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]), a = (0, o.bG)([O.A], () => O.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return l || null != a || (0, y.pE)(t.id), (0, r.jsx)(d.Button, {
        onClick: function() {
            (0, w.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, y.Lx)(t.id), 1e3)), N.default.track(G.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                guild_id: t.guild_id,
                notice_type: n
            })
        },
        text: k.intl.string(k.t.DlcqlU),
        icon: l ? d.A9s : d.XFE,
        variant: l ? "secondary" : "primary",
        size: "sm",
        fullWidth: !0
    })
}

function Y(e) {
    let {
        guildEvent: t,
        noticeType: n
    } = e, i = (0, D.oF)(t), a = null != i ? (0, L.l)(i, !0) : null, o = (0, D.WN)(t), c = (0, u.gU)(o), {
        startTime: A,
        endTime: h
    } = (0, P.Ay)(t), {
        startDateTimeString: _,
        upcomingEvent: m,
        diffMinutes: p
    } = (0, M.CC)(A.toISOString(), h?.toISOString()), g = m ? p > 0 ? k.intl.formatToPlainString(k.t.PQlCWk, {
        minutes: p
    }) : k.intl.string(k.t.WINqKV) : k.intl.formatToPlainString(k.t.DC6h3G, {
        date: _
    });
    return l.useEffect(() => {
        N.default.track(G.HAw.CHANNEL_NOTICE_VIEWED, {
            notice_type: n,
            guild_id: t.guild_id
        })
    }, [t, n]), (0, r.jsxs)("div", {
        className: V.kX,
        children: [(0, r.jsxs)("div", {
            className: V.fI,
            children: [(0, r.jsx)(d.DUT, {
                onClick: () => (0, x.uR)({
                    eventId: t.id
                }),
                className: V.oP,
                children: (0, r.jsx)(d.Text, {
                    color: "text-strong",
                    variant: "text-md/semibold",
                    className: V.eq,
                    children: t.name
                })
            }), (0, r.jsx)(d.DUT, {
                onClick: () => {
                    N.default.track(G.HAw.CHANNEL_NOTICE_CLOSED, {
                        notice_type: n,
                        guild_id: t.guild_id
                    }), (0, y.Lx)(t.id)
                },
                className: V.ut,
                "aria-label": k.intl.string(k.t.cpT0Cq),
                children: (0, r.jsx)(d.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }), (0, r.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [(0, r.jsx)(d.CTc, {
                size: "custom",
                color: "currentColor",
                className: V.uE,
                width: 16,
                height: 16
            }), (0, r.jsx)(d.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: V.Sv,
                children: g
            })]
        }), (0, r.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [null != c ? (0, r.jsx)(c, {
                size: "xs",
                color: "currentColor",
                className: V.uE
            }) : (0, r.jsx)(d.BT6, {
                size: "custom",
                color: "currentColor",
                width: 16,
                height: 16,
                className: V.uE
            }), (0, r.jsx)(d.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: V.HA,
                children: o?.name ?? a
            })]
        }), (0, r.jsx)(F, {
            guildEvent: t,
            noticeType: n
        })]
    })
}

function q(e) {
    let {
        guildEvent: t
    } = e, n = (0, D.oF)(t);
    return null == n ? null : (0, r.jsx)(B, {
        onClickCloseIcon: () => (0, y.iF)({
            eventId: t?.id
        }),
        heading: k.intl.string(k.t["1+boPi"]),
        topic: t.name,
        location: (0, L.l)(n, !0),
        locationIcon: (0, r.jsx)(d.BT6, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: V.uE
        }),
        children: (0, r.jsx)(W, {
            guildEvent: t
        })
    })
}

function W(e) {
    let {
        guildEvent: t
    } = e, n = l.useCallback(() => {
        (0, x.uR)({
            eventId: t.id
        })
    }, [t]);
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: V.PD,
        children: (0, r.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: k.intl.string(k.t.z4FcDs),
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
    return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: V.PD,
        children: (0, r.jsx)(d.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, m.av)(t), (0, _.uh)(t.getGuildId(), t.id))
            }
        })
    })
}

function z(e) {
    let {
        stageInstance: t,
        channel: n
    } = e, i = (0, o.yK)([p.A], () => [...new Set(p.A.getMutableParticipants(n.id, g.ip.SPEAKER).map(e => e.user))], [n.id]), l = (0, o.bG)([p.A], () => p.A.getParticipantCount(n.id, g.ip.AUDIENCE), [n.id]), a = k.intl.formatToPlainString(k.t["+v2pN2"], {
        count: `${l}`
    });
    return (0, r.jsx)(B, {
        onClickCloseIcon: () => (0, y.iF)({
            stageId: t?.id
        }),
        heading: k.intl.string(k.t["X2K3/4"]),
        location: n.name,
        details: a,
        detailsIcon: (0, r.jsx)(d.LoC, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: V.uE
        }),
        locationIcon: (0, r.jsx)(d.qux, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: V.uE
        }),
        topic: t.topic,
        children: (0, r.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 2
        })
    })
}
var $ = ((i = {})[i.VOICE = 1] = "VOICE", i[i.STAGE = 2] = "STAGE", i[i.STUDY_ROOM = 3] = "STUDY_ROOM", i);

function Q(e) {
    let {
        channel: t,
        speakers: n,
        voiceType: i
    } = e, a = t.getGuildId(), u = l.useMemo(() => n.slice(0, 3), [n]), A = (0, o.bG)([C.A], () => C.A.can(G.xBc.CONNECT, t)), h = (0, f.A)(t.id), _ = k.intl.string(k.t.VJlc0S);
    switch (i) {
        case 1:
            _ = k.intl.string(k.t.VJlc0S);
            break;
        case 2:
            _ = k.intl.string(k.t.ZYO5OK), h?.speaker ? _ = k.intl.string(k.t["/cnSFc"]) : null != h && (_ = k.intl.string(k.t.btSGOj));
            break;
        case 3:
            _ = k.intl.string(k.t.wBoE6L);
            break;
        default:
            (0, S.xb)(i)
    }
    return null == a ? null : (0, r.jsxs)(r.Fragment, {
        children: [u.length > 0 ? (0, r.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [(0, r.jsx)(c.Ay, {
                guildId: a,
                users: u,
                showUserPopout: !0,
                size: c.DN.SIZE_16
            }), (0, r.jsx)(d.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: V.c8,
                children: (0, E.c)(a, u, t?.id, n.length)
            })]
        }) : null, A && null == h && (0, r.jsx)(K, {
            channel: t,
            label: _
        })]
    })
}
let X = l.memo(function(e) {
    let {
        guild: t
    } = e, {
        showRedesignedLiveChannelNotice: n
    } = (0, A.P)(!0), i = (0, R.V)(t.id), l = (0, j.BP)(t.id), a = (0, j.WG)(t.id), s = (0, o.bG)([I.A], () => I.A.getStageInstanceByChannel(i?.id), [i]), {
        isStageNoticeHidden: d,
        isEventNoticeHidden: c
    } = (0, o.cf)([b.A], () => ({
        isStageNoticeHidden: b.A.isLiveChannelNoticeHidden({
            stageId: s?.id
        }),
        isEventNoticeHidden: b.A.isLiveChannelNoticeHidden({
            eventId: l?.id
        })
    }), [s, l]), u = null, _ = null != s && null != i && !d;
    if (n) return (0, r.jsx)(h.A, {
        guild: t
    });
    null == l || c ? _ && (u = (0, r.jsx)(z, {
        stageInstance: s,
        channel: i
    })) : l.entity_type === U.Ps.STAGE_INSTANCE && _ ? u = (0, r.jsx)(z, {
        stageInstance: s,
        channel: i
    }) : l.entity_type === U.Ps.EXTERNAL ? u = (0, r.jsx)(q, {
        guildEvent: l
    }) : l.entity_type === U.Ps.VOICE && null != i && (u = (0, r.jsx)(H, {
        guildEvent: l,
        channel: i
    }));
    let m = t.features.has(G.GuildFeatures.COMMUNITY);
    if (null == u && null != a && !m) {
        let {
            upcomingEvent: e,
            noticeType: t
        } = a;
        u = (0, r.jsx)(Y, {
            guildEvent: e,
            noticeType: t
        })
    }
    return u
})