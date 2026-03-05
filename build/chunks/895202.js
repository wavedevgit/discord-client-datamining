/** chunk id: 895202 params = (module,exports,require) **/
t.d(n, {
    A: () => P,
    c: () => w
});
var l, i = t(627968),
    s = t(64700),
    a = t(503698),
    r = t.n(a),
    c = t(311907),
    o = t(435371),
    d = t(397927),
    u = t(148719),
    h = t(713654),
    m = t(931991),
    x = t(660110),
    v = t(576705),
    C = t(435328),
    A = t(530209),
    N = t(974930),
    g = t(428978),
    j = t(850183),
    k = t(557582),
    p = t(888637),
    E = t(823991),
    y = t(988794),
    _ = t(652215),
    T = t(985018),
    f = t(652426),
    w = ((l = {})[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL", l);

function I(e) {
    let {
        channel: n,
        onClick: t
    } = e, {
        canManageAllEvents: l
    } = (0, m.nr)(n), a = (0, c.bG)([v.A], () => !n.isGuildVocal() || v.A.can(_.xBc.CONNECT, n), [n]), x = s.useMemo(() => (0, u.A)(n), [n]), C = s.useMemo(() => {
        let e = (0, h.gU)(n);
        return null != e ? s.createElement(e, {
            color: "currentColor",
            size: "custom",
            width: 20,
            height: 20,
            className: f.Kk
        }) : null
    }, [n]);
    return (0, i.jsx)(o.m_, {
        text: T.intl.string(T.t.nHjY9C),
        shouldShow: !a && null != t,
        children: (0, i.jsxs)(d.DUT, {
            className: r()(f.mG, f.nU, {
                [f.MN]: a && null != t,
                [f.Pm]: !a && null != t
            }),
            onClick: t,
            children: [(0, i.jsx)(o.m_, {
                text: T.intl.string(T.t["48WXaW"]),
                shouldShow: l && x && a && null != t,
                children: C
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "none",
                className: f.h7,
                children: n.name
            })]
        })
    })
}

function G(e) {
    let {
        channel: n,
        onJoinClick: t,
        handleLocationClick: l,
        location: s,
        isExternal: a
    } = e;
    return null != n ? (0, i.jsx)(I, {
        channel: n,
        onClick: t
    }) : (0, i.jsxs)(d.DUT, {
        className: f.mG,
        onClick: l,
        children: [(0, i.jsx)(d.BT6, {
            size: "custom",
            color: "currentColor",
            height: 20,
            width: 20,
            className: r()(f.nU, f.Kk)
        }), (0, i.jsx)(d.Text, {
            className: a ? f.dC : f.h7,
            variant: "text-sm/normal",
            children: (0, C.l)(s, !0)
        })]
    })
}

function S(e) {
    let {
        channel: n,
        entityType: t,
        isJoined: l,
        isActive: s,
        isUserLurking: a,
        rsvped: r,
        canInvite: c,
        onContextMenu: o,
        onJoinClick: u,
        onRsvpClick: h,
        onStartClick: m,
        onInviteClick: x,
        onEndClick: v,
        onJoinGuildClick: C
    } = e, N = (0, A.D)(n, t), j = (0, g.Zq)({
        entityType: t,
        isJoined: l,
        isActive: s,
        isUserLurking: a,
        rsvped: r,
        canInvite: c,
        isChannelPublic: N,
        channel: n,
        onJoinClick: u,
        onRsvpClick: h,
        onStartClick: m,
        onInviteClick: x,
        onEndClick: v,
        onJoinGuildClick: C
    });
    return (0, i.jsxs)(d.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [null != o ? (0, i.jsx)(g.jD, {
            onClick: o
        }) : null, j?.map((e, n) => (0, i.jsx)(d.Button, {
            ...e
        }, n))]
    })
}

function P(e) {
    let {
        className: n,
        guild: t,
        channel: l,
        creator: s,
        name: a,
        entityType: c,
        description: o,
        imageLocation: u = 0,
        imageSource: h,
        isActive: m,
        isUserLurking: v,
        isJoined: C = !1,
        isMember: A = !1,
        speakers: g,
        speakerCount: _,
        rsvped: T,
        canInvite: w,
        location: I,
        truncate: P,
        onContextMenu: L,
        onJoinClick: b,
        onJoinGuildClick: U,
        onRsvpClick: M,
        onStartClick: B,
        onInviteClick: D,
        onEndClick: O,
        onClick: X,
        isNew: R,
        guildEvent: V,
        eventPreview: J,
        recurrenceRule: q,
        recurrenceId: z,
        hideAgeVerificationNotice: H
    } = e, K = c === y.Ps.EXTERNAL, Y = K ? e => e.stopPropagation() : void 0, F = [];
    if (null != q && null != event) {
        let e = (0, N.X7)(q);
        F = (0, N.er)(4, e, new Date(V.scheduled_start_time))
    }
    let W = F.length > 0;
    return (0, i.jsxs)(d.sqX, {
        "aria-label": a,
        onClick: () => X?.(z),
        onContextMenu: L,
        className: r()(f.Nr, {
            [f.oR]: C,
            [f.hT]: v
        }, n),
        children: [(0, i.jsxs)("div", {
            className: r()(f.Ms, {
                [f.AD]: W
            }),
            children: [0 === u && (0, i.jsx)(j.A, {
                source: h
            }), (0, i.jsx)(k.Ay, {
                creator: s,
                name: a,
                description: o,
                imageSource: 1 === u ? h : null,
                truncate: P,
                guildId: t?.id,
                isNew: R,
                guildEvent: V,
                eventPreview: J,
                recurrenceId: z
            }), m && null != t && null != g && _ > 0 && (0, i.jsx)(E.A, {
                guild: t,
                speakers: g,
                speakerCount: _,
                className: f.YK
            }), (0, i.jsx)("hr", {
                className: f.yF
            }), !H && y.Tn.has(V.entity_type) && (0, i.jsx)(x.A, {
                className: f.K4,
                noBackground: !0,
                divider: x.V.BOTTOM,
                channelId: l?.id
            }), (0, i.jsxs)("div", {
                className: r()(f.mG, f.qr),
                children: [(0, i.jsx)(G, {
                    channel: l,
                    onJoinClick: b,
                    handleLocationClick: Y,
                    location: I,
                    isExternal: K
                }), (0, i.jsx)("div", {
                    className: f.AQ,
                    children: (0, i.jsx)(S, {
                        channel: l,
                        entityType: c,
                        isActive: m,
                        isJoined: C,
                        isUserLurking: v,
                        isMember: A,
                        rsvped: T,
                        canInvite: w,
                        onContextMenu: L,
                        onRsvpClick: M,
                        onJoinGuildClick: U,
                        onInviteClick: D,
                        onJoinClick: b,
                        onStartClick: B,
                        onEndClick: O
                    })
                })]
            }), W && (0, i.jsx)("hr", {
                className: f.yF
            })]
        }), W && (0, i.jsx)(p.A, {
            guildId: t?.id,
            recurrenceRule: q,
            guildEventId: V.id,
            onRecurrenceClick: X
        })]
    })
}