/** chunk id: 672821 params = (module,exports,require) **/
t.d(n, {
    A: () => L,
    c: () => I
});
var l, i = t(627968),
    s = t(64700),
    a = t(503698),
    r = t.n(a),
    c = t(311907),
    o = t(435371),
    d = t(397927),
    u = t(148719),
    h = t(47167),
    m = t(713654),
    x = t(931991),
    v = t(660110),
    C = t(576705),
    A = t(435328),
    N = t(530209),
    g = t(974930),
    j = t(428978),
    k = t(850183),
    p = t(557582),
    y = t(888637),
    E = t(823991),
    _ = t(988794),
    T = t(652215),
    f = t(985018),
    w = t(256538),
    I = ((l = {})[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL", l);

function G(e) {
    let {
        channel: n,
        onClick: t
    } = e, l = (0, h.Ay)(n), {
        canManageAllEvents: a
    } = (0, x.nr)(n), v = (0, c.bG)([C.A], () => !n.isGuildVocal() || C.A.can(T.xBc.CONNECT, n), [n]), A = s.useMemo(() => (0, u.A)(n), [n]), N = s.useMemo(() => {
        let e = (0, m.gU)(n);
        return null != e ? s.createElement(e, {
            color: "currentColor",
            size: "custom",
            width: 20,
            height: 20,
            className: w.Kk
        }) : null
    }, [n]);
    return (0, i.jsx)(o.m_, {
        text: f.intl.string(f.t.nHjY9C),
        shouldShow: !v && null != t,
        children: (0, i.jsxs)(d.DUT, {
            className: r()(w.mG, w.nU, {
                [w.MN]: v && null != t,
                [w.Pm]: !v && null != t
            }),
            onClick: t,
            children: [(0, i.jsx)(o.m_, {
                text: f.intl.string(f.t["48WXaW"]),
                shouldShow: a && A && v && null != t,
                children: N
            }), (0, i.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "none",
                className: w.h7,
                children: l
            })]
        })
    })
}

function S(e) {
    let {
        channel: n,
        onJoinClick: t,
        handleLocationClick: l,
        location: s,
        isExternal: a
    } = e;
    return null != n ? (0, i.jsx)(G, {
        channel: n,
        onClick: t
    }) : (0, i.jsxs)(d.DUT, {
        className: w.mG,
        onClick: l,
        children: [(0, i.jsx)(d.BT6, {
            size: "custom",
            color: "currentColor",
            height: 20,
            width: 20,
            className: r()(w.nU, w.Kk)
        }), (0, i.jsx)(d.Text, {
            className: a ? w.dC : w.h7,
            variant: "text-sm/normal",
            children: (0, A.l)(s, !0)
        })]
    })
}

function P(e) {
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
    } = e, A = (0, N.D)(n, t), g = (0, j.Zq)({
        entityType: t,
        isJoined: l,
        isActive: s,
        isUserLurking: a,
        rsvped: r,
        canInvite: c,
        isChannelPublic: A,
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
        children: [null != o ? (0, i.jsx)(j.jD, {
            onClick: o
        }) : null, g?.map((e, n) => (0, i.jsx)(d.Button, {
            ...e
        }, n))]
    })
}

function L(e) {
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
        isUserLurking: x,
        isJoined: C = !1,
        isMember: A = !1,
        speakers: N,
        speakerCount: j,
        rsvped: T,
        canInvite: f,
        location: I,
        truncate: G,
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
    } = e, K = c === _.Ps.EXTERNAL, Y = K ? e => e.stopPropagation() : void 0, F = [];
    if (null != q && null != event) {
        let e = (0, g.X7)(q);
        F = (0, g.er)(4, e, new Date(V.scheduled_start_time))
    }
    let W = F.length > 0;
    return (0, i.jsxs)(d.sqX, {
        "aria-label": a,
        onClick: () => X?.(z),
        onContextMenu: L,
        className: r()(w.Nr, {
            [w.oR]: C,
            [w.hT]: x
        }, n),
        children: [(0, i.jsxs)("div", {
            className: r()(w.Ms, {
                [w.AD]: W
            }),
            children: [0 === u && (0, i.jsx)(k.A, {
                source: h
            }), (0, i.jsx)(p.Ay, {
                creator: s,
                name: a,
                description: o,
                imageSource: 1 === u ? h : null,
                truncate: G,
                guildId: t?.id,
                isNew: R,
                guildEvent: V,
                eventPreview: J,
                recurrenceId: z
            }), m && null != t && null != N && j > 0 && (0, i.jsx)(E.A, {
                guild: t,
                speakers: N,
                speakerCount: j,
                className: w.YK
            }), (0, i.jsx)("hr", {
                className: w.yF
            }), !H && _.Tn.has(V.entity_type) && (0, i.jsx)(v.A, {
                className: w.K4,
                noBackground: !0,
                divider: v.V.BOTTOM,
                channelId: l?.id
            }), (0, i.jsxs)("div", {
                className: r()(w.mG, w.qr),
                children: [(0, i.jsx)(S, {
                    channel: l,
                    onJoinClick: b,
                    handleLocationClick: Y,
                    location: I,
                    isExternal: K
                }), (0, i.jsx)("div", {
                    className: w.AQ,
                    children: (0, i.jsx)(P, {
                        channel: l,
                        entityType: c,
                        isActive: m,
                        isJoined: C,
                        isUserLurking: x,
                        isMember: A,
                        rsvped: T,
                        canInvite: f,
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
                className: w.yF
            })]
        }), W && (0, i.jsx)(y.A, {
            guildId: t?.id,
            recurrenceRule: q,
            guildEventId: V.id,
            onRecurrenceClick: X
        })]
    })
}