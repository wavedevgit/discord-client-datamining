/** Chunk was on 21738 **/
/** chunk id: 289357, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $i: () => X,
    Ay: () => Z,
    Qv: () => B,
    SY: () => Q
}), n(896048);
var r, i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    c = n(397927),
    u = n(104171),
    d = n(713654),
    p = n(83241),
    h = n(214884),
    g = n(976860),
    f = n(323443),
    m = n(63995),
    A = n(69407),
    _ = n(110618),
    b = n(446600),
    E = n(964175),
    O = n(576705),
    y = n(607567),
    I = n(954571),
    v = n(403362),
    S = n(707592),
    C = n(698441),
    N = n(935159),
    T = n(473019),
    j = n(11550),
    x = n(435328),
    P = n(539446),
    w = n(563312),
    L = n(508654),
    R = n(9448),
    D = n(974930),
    M = n(666394),
    k = n(988794),
    U = n(652215),
    G = n(985018),
    V = n(177865);
let B = l.memo(function(e) {
    let {
        heading: t,
        location: n,
        locationIcon: r,
        details: l,
        detailsIcon: a,
        topic: o,
        onClickCloseIcon: u,
        children: d
    } = e;
    return (0, i.jsxs)("div", {
        className: V.kX,
        children: [(0, i.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [(0, i.jsx)("div", {
                className: V.Ok
            }), (0, i.jsx)(c.Text, {
                color: "text-feedback-positive",
                variant: "text-xs/semibold",
                className: V.U4,
                children: t
            }), null != u && (0, i.jsx)(c.DUT, {
                onClick: u,
                className: V.ut,
                "aria-label": G.intl.string(G.t.cpT0Cq),
                children: (0, i.jsx)(c.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }), (0, i.jsx)(c.Heading, {
            color: "text-strong",
            variant: "heading-md/semibold",
            className: V.eq,
            children: o
        }), (0, i.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [r, (0, i.jsx)(c.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: V.HA,
                children: n
            }), null != l && null != a && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.Text, {
                    className: V.hY,
                    color: "none",
                    variant: "text-xs/normal",
                    children: "•"
                }), a, (0, i.jsx)(c.Text, {
                    color: "none",
                    variant: "text-xs/normal",
                    className: V.zH,
                    children: l
                })]
            })]
        }), d]
    })
});

function H(e) {
    let {
        guildEvent: t,
        channel: n
    } = e, r = (0, o.yK)([y.Ay], () => y.Ay.getVoiceStatesForChannel(n).map(e => {
        let {
            user: t
        } = e;
        return t
    }), [n]), l = (0, d.gU)(n);
    return (0, i.jsx)(B, {
        onClickCloseIcon: () => (0, N.iF)({
            eventId: null == t ? void 0 : t.id
        }),
        heading: G.intl.string(G.t["X2K3/4"]),
        topic: t.name,
        location: n.name,
        locationIcon: null != l ? (0, i.jsx)(l, {
            size: "xs",
            color: "currentColor",
            className: V.uE
        }) : null,
        children: (0, i.jsx)(X, {
            channel: n,
            speakers: r,
            voiceType: 1
        })
    })
}

function F(e) {
    let {
        guildEvent: t,
        noticeType: n
    } = e, r = (0, D.G3)(t), l = (0, o.bG)([C.Ay], () => C.Ay.isInterestedInEventRecurrence(t.id, r), [t.id, r]), a = (0, o.bG)([j.A], () => j.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return l || null != a || (0, N.pE)(t.id), (0, i.jsx)(c.Button, {
        onClick: function() {
            (0, M.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, N.Lx)(t.id), 1e3)), I.default.track(U.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                guild_id: t.guild_id,
                notice_type: n
            })
        },
        text: G.intl.string(G.t.DlcqlU),
        icon: l ? c.A9s : c.XFE,
        variant: l ? "secondary" : "primary",
        size: "sm",
        fullWidth: !0
    })
}

function Y(e) {
    var t;
    let {
        guildEvent: n,
        noticeType: r
    } = e, a = (0, R.oF)(n), o = null != a ? (0, x.l)(a, !0) : null, u = (0, R.WN)(n), p = (0, d.gU)(u), {
        startTime: h,
        endTime: g
    } = (0, w.Ay)(n), {
        startDateTimeString: f,
        upcomingEvent: m,
        diffMinutes: A
    } = (0, D.CC)(h.toISOString(), null == g ? void 0 : g.toISOString()), _ = m ? A > 0 ? G.intl.formatToPlainString(G.t.PQlCWk, {
        minutes: A
    }) : G.intl.string(G.t.WINqKV) : G.intl.formatToPlainString(G.t.DC6h3G, {
        date: f
    });
    return l.useEffect(() => {
        I.default.track(U.HAw.CHANNEL_NOTICE_VIEWED, {
            notice_type: r,
            guild_id: n.guild_id
        })
    }, [n, r]), (0, i.jsxs)("div", {
        className: V.kX,
        children: [(0, i.jsxs)("div", {
            className: V.fI,
            children: [(0, i.jsx)(c.DUT, {
                onClick: () => (0, S.uR)({
                    eventId: n.id
                }),
                className: V.oP,
                children: (0, i.jsx)(c.Text, {
                    color: "text-strong",
                    variant: "text-md/semibold",
                    className: V.eq,
                    children: n.name
                })
            }), (0, i.jsx)(c.DUT, {
                onClick: () => {
                    I.default.track(U.HAw.CHANNEL_NOTICE_CLOSED, {
                        notice_type: r,
                        guild_id: n.guild_id
                    }), (0, N.Lx)(n.id)
                },
                className: V.ut,
                "aria-label": G.intl.string(G.t.cpT0Cq),
                children: (0, i.jsx)(c.PGe, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }), (0, i.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [(0, i.jsx)(c.CTc, {
                size: "custom",
                color: "currentColor",
                className: V.uE,
                width: 16,
                height: 16
            }), (0, i.jsx)(c.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                className: V.Sv,
                children: _
            })]
        }), (0, i.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [null != p ? (0, i.jsx)(p, {
                size: "xs",
                color: "currentColor",
                className: V.uE
            }) : (0, i.jsx)(c.BT6, {
                size: "custom",
                color: "currentColor",
                width: 16,
                height: 16,
                className: V.uE
            }), (0, i.jsx)(c.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: V.HA,
                children: null != (t = null == u ? void 0 : u.name) ? t : o
            })]
        }), (0, i.jsx)(F, {
            guildEvent: n,
            noticeType: r
        })]
    })
}

function K(e) {
    let {
        guildEvent: t
    } = e, n = (0, R.oF)(t);
    return null == n ? null : (0, i.jsx)(B, {
        onClickCloseIcon: () => (0, N.iF)({
            eventId: null == t ? void 0 : t.id
        }),
        heading: G.intl.string(G.t["1+boPi"]),
        topic: t.name,
        location: (0, x.l)(n, !0),
        locationIcon: (0, i.jsx)(c.BT6, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: V.uE
        }),
        children: (0, i.jsx)(W, {
            guildEvent: t
        })
    })
}

function W(e) {
    let {
        guildEvent: t
    } = e, n = l.useCallback(() => {
        (0, S.uR)({
            eventId: t.id
        })
    }, [t]);
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: V.PD,
        children: (0, i.jsx)(c.Button, {
            variant: "active",
            size: "sm",
            text: G.intl.string(G.t.z4FcDs),
            fullWidth: !0,
            onClick: n
        })
    })
}

function q(e) {
    let {
        channel: t,
        label: n
    } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: V.PD,
        children: (0, i.jsx)(c.Button, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, f.av)(t), (0, g.uh)(t.getGuildId(), t.id))
            }
        })
    })
}

function z(e) {
    let {
        stageInstance: t,
        channel: n
    } = e, r = (0, o.yK)([m.A], () => [...new Set(m.A.getMutableParticipants(n.id, A.ip.SPEAKER).map(e => e.user))], [n.id]), l = (0, o.bG)([m.A], () => m.A.getParticipantCount(n.id, A.ip.AUDIENCE), [n.id]), a = G.intl.formatToPlainString(G.t["+v2pN2"], {
        count: "".concat(l)
    });
    return (0, i.jsx)(B, {
        onClickCloseIcon: () => (0, N.iF)({
            stageId: null == t ? void 0 : t.id
        }),
        heading: G.intl.string(G.t["X2K3/4"]),
        location: n.name,
        details: a,
        detailsIcon: (0, i.jsx)(c.LoC, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: V.uE
        }),
        locationIcon: (0, i.jsx)(c.qux, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: V.uE
        }),
        topic: t.topic,
        children: (0, i.jsx)(X, {
            channel: n,
            speakers: r,
            voiceType: 2
        })
    })
}
var Q = ((r = {})[r.VOICE = 1] = "VOICE", r[r.STAGE = 2] = "STAGE", r[r.STUDY_ROOM = 3] = "STUDY_ROOM", r);

function X(e) {
    let {
        channel: t,
        speakers: n,
        voiceType: r
    } = e, a = t.getGuildId(), d = l.useMemo(() => n.slice(0, 3), [n]), p = (0, o.bG)([O.A], () => O.A.can(U.xBc.CONNECT, t)), h = (0, E.A)(t.id), g = G.intl.string(G.t.VJlc0S);
    switch (r) {
        case 1:
            g = G.intl.string(G.t.VJlc0S);
            break;
        case 2:
            g = G.intl.string(G.t.ZYO5OK), (null == h ? void 0 : h.speaker) ? g = G.intl.string(G.t["/cnSFc"]) : null != h && (g = G.intl.string(G.t.btSGOj));
            break;
        case 3:
            g = G.intl.string(G.t.wBoE6L);
            break;
        default:
            (0, v.xb)(r)
    }
    return null == a ? null : (0, i.jsxs)(i.Fragment, {
        children: [d.length > 0 ? (0, i.jsxs)("div", {
            className: s()(V.fI, V.pF),
            children: [(0, i.jsx)(u.Ay, {
                guildId: a,
                users: d,
                showUserPopout: !0,
                size: u.DN.SIZE_16
            }), (0, i.jsx)(c.Text, {
                color: "none",
                variant: "text-xs/normal",
                className: V.c8,
                children: (0, _.c)(a, d, null == t ? void 0 : t.id, n.length)
            })]
        }) : null, p && null == h && (0, i.jsx)(q, {
            channel: t,
            label: g
        })]
    })
}
let Z = l.memo(function(e) {
    let {
        guild: t
    } = e, {
        showRedesignedLiveChannelNotice: n
    } = (0, p.P)(!0), r = (0, P.V)(t.id), l = (0, L.BP)(t.id), a = (0, L.WG)(t.id), s = (0, o.bG)([b.A], () => b.A.getStageInstanceByChannel(null == r ? void 0 : r.id), [r]), {
        isStageNoticeHidden: c,
        isEventNoticeHidden: u
    } = (0, o.cf)([T.A], () => ({
        isStageNoticeHidden: T.A.isLiveChannelNoticeHidden({
            stageId: null == s ? void 0 : s.id
        }),
        isEventNoticeHidden: T.A.isLiveChannelNoticeHidden({
            eventId: null == l ? void 0 : l.id
        })
    }), [s, l]), d = null, g = null != s && null != r && !c;
    if (n) return (0, i.jsx)(h.A, {
        guild: t
    });
    null == l || u ? g && (d = (0, i.jsx)(z, {
        stageInstance: s,
        channel: r
    })) : l.entity_type === k.Ps.STAGE_INSTANCE && g ? d = (0, i.jsx)(z, {
        stageInstance: s,
        channel: r
    }) : l.entity_type === k.Ps.EXTERNAL ? d = (0, i.jsx)(K, {
        guildEvent: l
    }) : l.entity_type === k.Ps.VOICE && null != r && (d = (0, i.jsx)(H, {
        guildEvent: l,
        channel: r
    }));
    let f = t.features.has(U.GuildFeatures.COMMUNITY);
    if (null == d && null != a && !f) {
        let {
            upcomingEvent: e,
            noticeType: t
        } = a;
        d = (0, i.jsx)(Y, {
            guildEvent: e,
            noticeType: t
        })
    }
    return d
})