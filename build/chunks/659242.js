/** Chunk was on 77986 **/
/** chunk id: 659242, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(311907),
    o = n(397927),
    u = n(846293),
    a = n(688810),
    d = n(263063),
    _ = n(714991),
    g = n(967144),
    f = n(660110),
    h = n(657331),
    v = n(696451),
    j = n(71393),
    x = n(427262),
    p = n(285059),
    m = n(408607),
    y = n(722260),
    b = n(563312),
    A = n(826383),
    O = n(794782),
    N = n(974930),
    C = n(847494),
    E = n(888637),
    k = n(103355),
    I = n(167630),
    S = n(988794),
    P = n(985018),
    w = n(888804);

function T(e) {
    var t, n;
    let {
        creator: r,
        guildId: i,
        channelId: s
    } = e, {
        analyticsLocations: u
    } = (0, a.Ay)(), d = (0, c.bG)([v.Ay], () => v.Ay.getMember(i, r.id), [r, i]), _ = (0, g.gn)(null == d ? void 0 : d.guildId, null == d ? void 0 : d.userId, null != (t = null == d ? void 0 : d.colorStrings) ? t : null);
    return (0, l.jsxs)("div", {
        className: w.nM,
        children: [(0, l.jsx)(o.euF, {
            size: o._3J.SIZE_20,
            src: r.getAvatarURL(i, 20),
            "aria-label": null != (n = null == d ? void 0 : d.nick) ? n : x.Ay.getName(r),
            className: w.Kk
        }), (0, l.jsx)(o.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: P.intl.format(P.t["66DLFs"], {
                usernameHook: function() {
                    var e, t;
                    return (0, l.jsx)(o.DUT, {
                        onClick: () => (0, h.openUserProfileModal)({
                            guildId: i,
                            channelId: s,
                            userId: r.id,
                            roleId: null == d ? void 0 : d.colorRoleId,
                            sourceAnalyticsLocations: u
                        }),
                        className: w.xL,
                        tag: "span",
                        role: "link",
                        children: (0, l.jsx)(o.gyj, {
                            name: null != (e = null == d ? void 0 : d.nick) ? e : x.Ay.getName(r),
                            colorString: null != (t = null == d ? void 0 : d.colorString) ? t : null,
                            colorStrings: _
                        })
                    }, "open-user-profile")
                }
            })
        })]
    })
}

function D(e) {
    let {
        guild: t,
        onClick: n,
        onClose: i
    } = e, c = r.useCallback(e => {
        null == n || n(e), null != n && (null == i || i(e))
    }, [n, i]), u = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.A, {
            guild: t,
            size: d.A.Sizes.MINI,
            active: !0,
            className: s()(w.$f, w.Kk)
        }), (0, l.jsx)(_.A, {
            guild: t,
            tooltipPosition: "top",
            tooltipColor: o.STz.Colors.PRIMARY,
            size: 16,
            className: w.n2
        }), (0, l.jsx)(o.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: w.yX,
            children: t.name
        })]
    });
    return (0, l.jsx)("div", {
        className: w.nM,
        children: null != n ? (0, l.jsx)(o.DUT, {
            onClick: c,
            className: w.vk,
            role: "link",
            children: u
        }) : u
    })
}

function L(e) {
    let {
        userCount: t,
        onClick: n
    } = e;
    return (0, l.jsxs)("div", {
        className: w.nM,
        children: [(0, l.jsx)(o.nFg, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: w.Kk
        }), (0, l.jsx)(o.DUT, {
            onClick: n,
            className: w.tK,
            children: (0, l.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: P.intl.format(P.t["+DLsD8"], {
                    count: t
                })
            })
        })]
    })
}

function G(e) {
    let {
        guildEvent: t,
        guild: n,
        channel: i,
        headerId: s,
        onClose: a,
        onClickInterestedCount: d,
        containerRef: _,
        recurrenceId: g,
        setRecurrenceId: h
    } = e, v = (0, c.bG)([j.A], () => null != j.A.getGuild(n.id), [n.id]), {
        startTime: x,
        endTime: P
    } = (0, b.Ay)(t, g), G = (0, A.A)(t.guild_id, t.id, g), R = r.useCallback(e => {
        e.stopPropagation(), null != t && (0, u.rq)(t)
    }, [t]), U = (0, y.A)(g, t.id), V = (0, m.A)(t);
    r.useEffect(() => {
        p.A.getGuildEventUserCounts(n.id, t.id, null != g ? [g] : []), p.A.getGuildEventsForCurrentUser(n.id)
    }, [n.id, t.id, g]);
    let M = (0, O.Sn)(t.recurrence_rule),
        K = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, N.j)(U, x, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: _,
        children: [(0, l.jsxs)("div", {
            className: w.wx,
            children: [(0, l.jsx)(k.L, {
                startTime: x.toISOString(),
                endTime: null == P ? void 0 : P.toISOString(),
                status: null != K ? K : t.status,
                eventType: t.entity_type,
                guildEventId: t.id,
                recurrenceId: g
            }), (0, l.jsx)(o.Heading, {
                id: s,
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: w.DD,
                children: t.name
            })]
        }), (0, l.jsxs)("div", {
            className: w.rf,
            children: [(0, l.jsx)(D, {
                guild: n,
                onClick: v ? R : void 0,
                onClose: a
            }), (0, l.jsx)(I.A, {
                guildScheduledEvent: t,
                channel: i,
                onClose: a
            }), null != G && (0, l.jsx)(L, {
                userCount: G,
                onClick: d
            }), null != V && (0, l.jsx)(T, {
                creator: V,
                guildId: n.id,
                channelId: null == i ? void 0 : i.id
            }, V.id), null != t.description && (0, l.jsx)("div", {
                className: w.h_,
                children: (0, l.jsx)(C.A, {
                    description: t.description,
                    truncate: !1,
                    guildId: n.id
                })
            }), S.Tn.has(t.entity_type) && (0, l.jsx)(f.A, {
                noBackground: !0,
                divider: f.V.TOP,
                channelId: null == i ? void 0 : i.id
            })]
        }), null != M && (0, l.jsx)("hr", {
            className: w.yF
        }), null != M && (0, l.jsx)(E.A, {
            guildId: n.id,
            recurrenceRule: M,
            guildEventId: t.id,
            onRecurrenceClick: h,
            hideScroller: !0,
            activeRecurrenceId: g
        })]
    })
}