/** chunk id: 895202 params = (module,exports,require) **/
t.d(n, {
    A: () => R,
    c: () => w
});
var a, i = t(627968),
    r = t(64700),
    c = t(503698),
    l = t.n(c),
    o = t(311907),
    _ = t(435371),
    s = t(397927),
    d = t(148719),
    u = t(713654),
    b = t(931991),
    x = t(660110),
    p = t(576705),
    m = t(435328),
    h = t(530209),
    g = t(974930),
    v = t(428978),
    f = t(850183),
    k = t(557582),
    C = t(888637),
    N = t(823991),
    A = t(988794),
    j = t(652215),
    I = t(985018),
    U = t(652426),
    w = ((a = {})[a.BANNER = 0] = "BANNER", a[a.THUMBNAIL = 1] = "THUMBNAIL", a);

function y(e) {
    let {
        channel: n,
        onClick: t
    } = e, {
        canManageAllEvents: a
    } = (0, b.nr)(n), c = (0, o.bG)([p.A], () => !n.isGuildVocal() || p.A.can(j.xBc.CONNECT, n), [n]), x = r.useMemo(() => (0, d.A)(n), [n]), m = r.useMemo(() => {
        let e = (0, u.gU)(n);
        return null != e ? r.createElement(e, {
            color: "currentColor",
            size: "custom",
            width: 20,
            height: 20,
            className: U.Kk
        }) : null
    }, [n]);
    return (0, i.jsx)(_.m_, {
        text: I.intl.string(I.t.nHjY9C),
        shouldShow: !c && null != t,
        children: (0, i.jsxs)(s.DUT, {
            className: l()(U.mG, U.nU, {
                [U.MN]: c && null != t,
                [U.Pm]: !c && null != t
            }),
            onClick: t,
            children: [(0, i.jsx)(_.m_, {
                text: I.intl.string(I.t["48WXaW"]),
                shouldShow: a && x && c && null != t,
                children: m
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "none",
                className: U.h7,
                children: n.name
            })]
        })
    })
}

function T(e) {
    let {
        channel: n,
        onJoinClick: t,
        handleLocationClick: a,
        location: r,
        isExternal: c
    } = e;
    return null != n ? (0, i.jsx)(y, {
        channel: n,
        onClick: t
    }) : (0, i.jsxs)(s.DUT, {
        className: U.mG,
        onClick: a,
        children: [(0, i.jsx)(s.BT6, {
            size: "custom",
            color: "currentColor",
            height: 20,
            width: 20,
            className: l()(U.nU, U.Kk)
        }), (0, i.jsx)(s.Text, {
            className: c ? U.dC : U.h7,
            variant: "text-sm/normal",
            children: (0, m.l)(r, !0)
        })]
    })
}

function B(e) {
    let {
        channel: n,
        entityType: t,
        isJoined: a,
        isActive: r,
        isUserLurking: c,
        rsvped: l,
        canInvite: o,
        onContextMenu: _,
        onJoinClick: d,
        onRsvpClick: u,
        onStartClick: b,
        onInviteClick: x,
        onEndClick: p,
        onJoinGuildClick: m
    } = e, g = (0, h.D)(n, t), f = (0, v.Zq)({
        entityType: t,
        isJoined: a,
        isActive: r,
        isUserLurking: c,
        rsvped: l,
        canInvite: o,
        isChannelPublic: g,
        channel: n,
        onJoinClick: d,
        onRsvpClick: u,
        onStartClick: b,
        onInviteClick: x,
        onEndClick: p,
        onJoinGuildClick: m
    });
    return (0, i.jsxs)(s.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [null != _ ? (0, i.jsx)(v.jD, {
            onClick: _
        }) : null, f?.map((e, n) => (0, i.jsx)(s.Button, {
            ...e
        }, n))]
    })
}

function R(e) {
    let {
        className: n,
        guild: t,
        channel: a,
        creator: r,
        name: c,
        entityType: o,
        description: _,
        imageLocation: d = 0,
        imageSource: u,
        isActive: b,
        isUserLurking: p,
        isJoined: m = !1,
        isMember: h = !1,
        speakers: v,
        speakerCount: j,
        rsvped: I,
        canInvite: w,
        location: y,
        truncate: R,
        onContextMenu: S,
        onJoinClick: L,
        onJoinGuildClick: E,
        onRsvpClick: D,
        onStartClick: q,
        onInviteClick: G,
        onEndClick: M,
        onClick: K,
        isNew: P,
        guildEvent: W,
        eventPreview: J,
        recurrenceRule: Q,
        recurrenceId: z,
        hideAgeVerificationNotice: F
    } = e, O = o === A.Ps.EXTERNAL, V = O ? e => e.stopPropagation() : void 0, X = [];
    if (null != Q && null != event) {
        let e = (0, g.X7)(Q);
        X = (0, g.er)(4, e, new Date(W.scheduled_start_time))
    }
    let H = X.length > 0;
    return (0, i.jsxs)(s.sqX, {
        "aria-label": c,
        onClick: () => K?.(z),
        onContextMenu: S,
        className: l()(U.Nr, {
            [U.oR]: m,
            [U.hT]: p
        }, n),
        children: [(0, i.jsxs)("div", {
            className: l()(U.Ms, {
                [U.AD]: H
            }),
            children: [0 === d && (0, i.jsx)(f.A, {
                source: u
            }), (0, i.jsx)(k.Ay, {
                creator: r,
                name: c,
                description: _,
                imageSource: 1 === d ? u : null,
                truncate: R,
                guildId: t?.id,
                isNew: P,
                guildEvent: W,
                eventPreview: J,
                recurrenceId: z
            }), b && null != t && null != v && j > 0 && (0, i.jsx)(N.A, {
                guild: t,
                speakers: v,
                speakerCount: j,
                className: U.YK
            }), (0, i.jsx)("hr", {
                className: U.yF
            }), !F && A.Tn.has(W.entity_type) && (0, i.jsx)(x.A, {
                className: U.K4,
                noBackground: !0,
                divider: x.V.BOTTOM,
                channelId: a?.id
            }), (0, i.jsxs)("div", {
                className: l()(U.mG, U.qr),
                children: [(0, i.jsx)(T, {
                    channel: a,
                    onJoinClick: L,
                    handleLocationClick: V,
                    location: y,
                    isExternal: O
                }), (0, i.jsx)("div", {
                    className: U.AQ,
                    children: (0, i.jsx)(B, {
                        channel: a,
                        entityType: o,
                        isActive: b,
                        isJoined: m,
                        isUserLurking: p,
                        isMember: h,
                        rsvped: I,
                        canInvite: w,
                        onContextMenu: S,
                        onRsvpClick: D,
                        onJoinGuildClick: E,
                        onInviteClick: G,
                        onJoinClick: L,
                        onStartClick: q,
                        onEndClick: M
                    })
                })]
            }), H && (0, i.jsx)("hr", {
                className: U.yF
            })]
        }), H && (0, i.jsx)(C.A, {
            guildId: t?.id,
            recurrenceRule: Q,
            guildEventId: W.id,
            onRecurrenceClick: K
        })]
    })
}