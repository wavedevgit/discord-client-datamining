/** Chunk was on 74665 **/
/** chunk id: 659242, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => R
}), t(228524);
var l = t(627968),
    i = t(64700),
    r = t(503698),
    d = t.n(r),
    s = t(311907),
    a = t(397927),
    o = t(846293),
    c = t(688810),
    u = t(263063),
    _ = t(714991),
    g = t(967144),
    f = t(660110),
    v = t(657331),
    p = t(696451),
    h = t(71393),
    b = t(427262),
    m = t(285059),
    x = t(408607),
    j = t(722260),
    y = t(563312),
    A = t(826383),
    I = t(794782),
    N = t(974930),
    C = t(847494),
    O = t(888637),
    k = t(103355),
    E = t(167630),
    S = t(988794),
    P = t(985018),
    w = t(888804);

function D(e) {
    var n, t;
    let {
        creator: i,
        guildId: r,
        channelId: d
    } = e, {
        analyticsLocations: o
    } = (0, c.Ay)(), u = (0, s.bG)([p.Ay], () => p.Ay.getMember(r, i.id), [i, r]), _ = (0, g.gn)(null == u ? void 0 : u.guildId, null == u ? void 0 : u.userId, null != (n = null == u ? void 0 : u.colorStrings) ? n : null);
    return (0, l.jsxs)("div", {
        className: w.nM,
        children: [(0, l.jsx)(a.euF, {
            size: a._3J.SIZE_20,
            src: i.getAvatarURL(r, 20),
            "aria-label": null != (t = null == u ? void 0 : u.nick) ? t : b.Ay.getName(i),
            className: w.Kk
        }), (0, l.jsx)(a.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: P.intl.format(P.t["66DLFs"], {
                usernameHook: function() {
                    var e, n;
                    return (0, l.jsx)(a.DUT, {
                        onClick: () => (0, v.openUserProfileModal)({
                            guildId: r,
                            channelId: d,
                            userId: i.id,
                            roleId: null == u ? void 0 : u.colorRoleId,
                            sourceAnalyticsLocations: o
                        }),
                        className: w.xL,
                        tag: "span",
                        role: "link",
                        children: (0, l.jsx)(a.gyj, {
                            name: null != (e = null == u ? void 0 : u.nick) ? e : b.Ay.getName(i),
                            colorString: null != (n = null == u ? void 0 : u.colorString) ? n : null,
                            colorStrings: _
                        })
                    }, "open-user-profile")
                }
            })
        })]
    })
}

function T(e) {
    let {
        guild: n,
        onClick: t,
        onClose: r
    } = e, s = i.useCallback(e => {
        null == t || t(e), null != t && (null == r || r(e))
    }, [t, r]), o = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.A, {
            guild: n,
            size: u.A.Sizes.MINI,
            active: !0,
            className: d()(w.$f, w.Kk)
        }), (0, l.jsx)(_.A, {
            guild: n,
            tooltipPosition: "top",
            tooltipColor: a.STz.Colors.PRIMARY,
            size: 16,
            className: w.n2
        }), (0, l.jsx)(a.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: w.yX,
            children: n.name
        })]
    });
    return (0, l.jsx)("div", {
        className: w.nM,
        children: null != t ? (0, l.jsx)(a.DUT, {
            onClick: s,
            className: w.vk,
            role: "link",
            children: o
        }) : o
    })
}

function L(e) {
    let {
        userCount: n,
        onClick: t
    } = e;
    return (0, l.jsxs)("div", {
        className: w.nM,
        children: [(0, l.jsx)(a.nFg, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: w.Kk
        }), (0, l.jsx)(a.DUT, {
            onClick: t,
            className: w.tK,
            children: (0, l.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: P.intl.format(P.t["+DLsD8"], {
                    count: n
                })
            })
        })]
    })
}

function R(e) {
    let {
        guildEvent: n,
        guild: t,
        channel: r,
        headerId: d,
        onClose: c,
        onClickInterestedCount: u,
        containerRef: _,
        recurrenceId: g,
        setRecurrenceId: v
    } = e, p = (0, s.bG)([h.A], () => null != h.A.getGuild(t.id), [t.id]), {
        startTime: b,
        endTime: P
    } = (0, y.Ay)(n, g), R = (0, A.A)(n.guild_id, n.id, g), G = i.useCallback(e => {
        e.stopPropagation(), null != n && (0, o.rq)(n)
    }, [n]), U = (0, j.A)(g, n.id), B = (0, x.A)(n);
    i.useEffect(() => {
        m.A.getGuildEventUserCounts(t.id, n.id, null != g ? [g] : []), m.A.getGuildEventsForCurrentUser(t.id)
    }, [t.id, n.id, g]);
    let M = (0, I.Sn)(n.recurrence_rule),
        V = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, N.j)(U, b, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: _,
        children: [(0, l.jsxs)("div", {
            className: w.wx,
            children: [(0, l.jsx)(k.L, {
                startTime: b.toISOString(),
                endTime: null == P ? void 0 : P.toISOString(),
                status: null != V ? V : n.status,
                eventType: n.entity_type,
                guildEventId: n.id,
                recurrenceId: g
            }), (0, l.jsx)(a.Heading, {
                id: d,
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: w.DD,
                children: n.name
            })]
        }), (0, l.jsxs)("div", {
            className: w.rf,
            children: [(0, l.jsx)(T, {
                guild: t,
                onClick: p ? G : void 0,
                onClose: c
            }), (0, l.jsx)(E.A, {
                guildScheduledEvent: n,
                channel: r,
                onClose: c
            }), null != R && (0, l.jsx)(L, {
                userCount: R,
                onClick: u
            }), null != B && (0, l.jsx)(D, {
                creator: B,
                guildId: t.id,
                channelId: null == r ? void 0 : r.id
            }, B.id), null != n.description && (0, l.jsx)("div", {
                className: w.h_,
                children: (0, l.jsx)(C.A, {
                    description: n.description,
                    truncate: !1,
                    guildId: t.id
                })
            }), S.Tn.has(n.entity_type) && (0, l.jsx)(f.A, {
                noBackground: !0,
                divider: f.V.TOP,
                channelId: null == r ? void 0 : r.id
            })]
        }), null != M && (0, l.jsx)("hr", {
            className: w.yF
        }), null != M && (0, l.jsx)(O.A, {
            guildId: t.id,
            recurrenceRule: M,
            guildEventId: n.id,
            onRecurrenceClick: v,
            hideScroller: !0,
            activeRecurrenceId: g
        })]
    })
}