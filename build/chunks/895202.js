/** chunk id: 895202 params = (module,exports,require) **/
t.d(n, {
    A: () => E,
    c: () => S
});
var a, i = t(627968),
    r = t(64700),
    o = t(503698),
    l = t.n(o),
    s = t(311907),
    c = t(435371),
    _ = t(397927),
    d = t(148719),
    u = t(713654),
    h = t(931991),
    p = t(660110),
    b = t(576705),
    m = t(435328),
    x = t(530209),
    C = t(974930),
    g = t(428978),
    f = t(850183),
    v = t(557582),
    k = t(888637),
    N = t(823991),
    A = t(988794),
    j = t(652215),
    I = t(985018),
    U = t(340500),
    S = ((a = {})[a.BANNER = 0] = "BANNER", a[a.THUMBNAIL = 1] = "THUMBNAIL", a);

function y(e) {
    let {
        channel: n,
        onClick: t
    } = e, {
        canManageAllEvents: a
    } = (0, h.nr)(n), o = (0, s.bG)([b.A], () => !n.isGuildVocal() || b.A.can(j.xBc.CONNECT, n), [n]), p = r.useMemo(() => (0, d.A)(n), [n]), m = r.useMemo(() => {
        let e = (0, u.gU)(n);
        return null != e ? r.createElement(e, {
            color: "currentColor",
            size: "custom",
            width: 20,
            height: 20,
            className: U.Kk
        }) : null
    }, [n]);
    return (0, i.jsx)(c.m_, {
        text: I.intl.string(I.t.nHjY9C),
        shouldShow: !o && null != t,
        children: (0, i.jsxs)(_.DUT, {
            className: l()(U.mG, U.nU, {
                [U.MN]: o && null != t,
                [U.Pm]: !o && null != t
            }),
            onClick: t,
            children: [(0, i.jsx)(c.m_, {
                text: I.intl.string(I.t["48WXaW"]),
                shouldShow: a && p && o && null != t,
                children: m
            }), (0, i.jsx)(_.Text, {
                variant: "text-sm/normal",
                color: "none",
                className: U.h7,
                children: n.name
            })]
        })
    })
}

function R(e) {
    let {
        channel: n,
        onJoinClick: t,
        handleLocationClick: a,
        location: r,
        isExternal: o
    } = e;
    return null != n ? (0, i.jsx)(y, {
        channel: n,
        onClick: t
    }) : (0, i.jsxs)(_.DUT, {
        className: U.mG,
        onClick: a,
        children: [(0, i.jsx)(_.BT6, {
            size: "custom",
            color: "currentColor",
            height: 20,
            width: 20,
            className: l()(U.nU, U.Kk)
        }), (0, i.jsx)(_.Text, {
            className: o ? U.dC : U.h7,
            variant: "text-sm/normal",
            children: (0, m.l)(r, !0)
        })]
    })
}

function w(e) {
    let {
        channel: n,
        entityType: t,
        isJoined: a,
        isActive: r,
        isUserLurking: o,
        rsvped: l,
        canInvite: s,
        onContextMenu: c,
        onJoinClick: d,
        onRsvpClick: u,
        onStartClick: h,
        onInviteClick: p,
        onEndClick: b,
        onJoinGuildClick: m
    } = e, C = (0, x.D)(n, t), f = (0, g.Zq)({
        entityType: t,
        isJoined: a,
        isActive: r,
        isUserLurking: o,
        rsvped: l,
        canInvite: s,
        isChannelPublic: C,
        channel: n,
        onJoinClick: d,
        onRsvpClick: u,
        onStartClick: h,
        onInviteClick: p,
        onEndClick: b,
        onJoinGuildClick: m
    });
    return (0, i.jsxs)(_.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [null != c ? (0, i.jsx)(g.jD, {
            onClick: c
        }) : null, f?.map((e, n) => (0, i.jsx)(_.Button, {
            ...e
        }, n))]
    })
}

function E(e) {
    let {
        className: n,
        guild: t,
        channel: a,
        creator: r,
        name: o,
        entityType: s,
        description: c,
        imageLocation: d = 0,
        imageSource: u,
        isActive: h,
        isUserLurking: b,
        isJoined: m = !1,
        isMember: x = !1,
        speakers: g,
        speakerCount: j,
        rsvped: I,
        canInvite: S,
        location: y,
        truncate: E,
        onContextMenu: T,
        onJoinClick: B,
        onJoinGuildClick: D,
        onRsvpClick: L,
        onStartClick: M,
        onInviteClick: G,
        onEndClick: O,
        onClick: q,
        isNew: P,
        guildEvent: K,
        eventPreview: W,
        recurrenceRule: F,
        recurrenceId: J,
        hideAgeVerificationNotice: z
    } = e, V = s === A.Ps.EXTERNAL, X = V ? e => e.stopPropagation() : void 0, Q = [];
    if (null != F && null != event) {
        let e = (0, C.X7)(F);
        Q = (0, C.er)(4, e, new Date(K.scheduled_start_time))
    }
    let $ = Q.length > 0;
    return (0, i.jsxs)(_.sqX, {
        "aria-label": o,
        onClick: () => q?.(J),
        onContextMenu: T,
        className: l()(U.Nr, {
            [U.oR]: m,
            [U.hT]: b
        }, n),
        children: [(0, i.jsxs)("div", {
            className: l()(U.Ms, {
                [U.AD]: $
            }),
            children: [0 === d && (0, i.jsx)(f.A, {
                source: u
            }), (0, i.jsx)(v.Ay, {
                creator: r,
                name: o,
                description: c,
                imageSource: 1 === d ? u : null,
                truncate: E,
                guildId: t?.id,
                isNew: P,
                guildEvent: K,
                eventPreview: W,
                recurrenceId: J
            }), h && null != t && null != g && j > 0 && (0, i.jsx)(N.A, {
                guild: t,
                speakers: g,
                speakerCount: j,
                className: U.YK
            }), (0, i.jsx)("hr", {
                className: U.yF
            }), !z && A.Tn.has(K.entity_type) && (0, i.jsx)(p.A, {
                className: U.K4,
                noBackground: !0,
                divider: p.V.BOTTOM,
                channelId: a?.id
            }), (0, i.jsxs)("div", {
                className: l()(U.mG, U.qr),
                children: [(0, i.jsx)(R, {
                    channel: a,
                    onJoinClick: B,
                    handleLocationClick: X,
                    location: y,
                    isExternal: V
                }), (0, i.jsx)("div", {
                    className: U.AQ,
                    children: (0, i.jsx)(w, {
                        channel: a,
                        entityType: s,
                        isActive: h,
                        isJoined: m,
                        isUserLurking: b,
                        isMember: x,
                        rsvped: I,
                        canInvite: S,
                        onContextMenu: T,
                        onRsvpClick: L,
                        onJoinGuildClick: D,
                        onInviteClick: G,
                        onJoinClick: B,
                        onStartClick: M,
                        onEndClick: O
                    })
                })]
            }), $ && (0, i.jsx)("hr", {
                className: U.yF
            })]
        }), $ && (0, i.jsx)(k.A, {
            guildId: t?.id,
            recurrenceRule: F,
            guildEventId: K.id,
            onRecurrenceClick: q
        })]
    })
}