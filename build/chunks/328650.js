/** chunk id: 328650, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Z
}), n(938796), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(735438),
    d = n.n(c),
    u = n(821418),
    p = n(665260),
    m = n(311907),
    g = n(827734),
    b = n(990078),
    f = n(397927),
    h = n(846293),
    x = n(579872),
    j = n(414079),
    O = n(297413),
    y = n(361739),
    A = n(966327),
    v = n(736653),
    _ = n(429913),
    N = n(47167),
    E = n(576470),
    T = n(235986),
    C = n(769015),
    w = n(834409),
    S = n(671576),
    I = n(540683),
    P = n(234355),
    k = n(957103),
    R = n(526132),
    L = n(734057),
    D = n(317525),
    M = n(994500),
    G = n(287809),
    U = n(347951),
    B = n(537855),
    W = n(652215),
    H = n(985018),
    V = n(928128),
    z = n(506823),
    K = n(473169);

function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function Y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function q(e) {
    let {
        isDisabled: t,
        inviter: n,
        showChannel: r,
        channel: l,
        inviteSource: s,
        inviteSourceTrailingContent: o,
        uses: c,
        expiresAt: d,
        roles: u,
        guildId: p,
        showRolesColumn: m,
        onRevokeInvite: g
    } = e;
    return (0, i.jsxs)(T.A, {
        className: a()(V._O, z.N, {
            [V.Gg]: t
        }),
        children: [(0, i.jsxs)(T.A, {
            grow: 4,
            basis: 0,
            align: T.A.Align.CENTER,
            className: V.Qq,
            children: [null != n && (0, i.jsx)(A.A, {
                user: n,
                size: f._3J.SIZE_24,
                className: V.my
            }), (0, i.jsxs)("div", {
                children: [null != n && (0, i.jsx)(O.A, {
                    discriminatorClass: V.D2,
                    user: n
                }), r && null != l && (0, i.jsx)(f.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: (0, N.m1)(l, G.default, M.A, !0)
                })]
            })]
        }), (0, i.jsx)(T.A, {
            grow: 3,
            shrink: 1,
            basis: 0,
            align: T.A.Align.CENTER,
            className: V.Qq,
            children: (0, i.jsxs)("div", {
                className: V.AL,
                children: [s, o]
            })
        }), (0, i.jsx)(T.A, {
            grow: 1,
            basis: 0,
            align: T.A.Align.CENTER,
            className: V.Qq,
            children: (0, i.jsx)(f.Text, {
                className: V.r9,
                variant: "text-sm/normal",
                children: c
            })
        }), (0, i.jsx)(T.A, {
            grow: 2,
            basis: 0,
            align: T.A.Align.CENTER,
            className: a()(V.Qq, V.sA),
            children: (0, i.jsx)(f.Text, {
                className: V.qW,
                variant: "text-sm/normal",
                children: d
            })
        }), m && null != p && (0, i.jsx)(T.A, {
            grow: 2,
            basis: 0,
            align: T.A.Align.CENTER,
            className: V.Qq,
            children: (0, i.jsx)(k.A, {
                roles: u,
                guildId: p
            })
        }), (0, i.jsx)(j.A, {
            className: V.eb,
            onClick: g
        })]
    })
}

function J(e) {
    var t, n;
    let {
        invite: r,
        showChannel: l = !1,
        inviteDisabled: a = !1,
        hide: s = !1,
        showRolesColumn: o
    } = e, c = null == (n = r.guild) ? void 0 : n.id, d = r.uses;
    r.maxUses > 0 && (d = "".concat(r.uses, "/").concat(r.maxUses));
    let g = (0, m.bG)([D.A], () => null == c ? [] : r.roles.map(e => D.A.getRole(c, e.id)).filter(e => null != e), [c, r.roles]);
    return (0, i.jsx)(q, {
        isDisabled: a,
        inviter: r.inviter,
        showChannel: l,
        channel: r.channel,
        inviteSource: (0, i.jsx)(f.Text, {
            className: V.Rg,
            variant: "text-sm/normal",
            children: s ? "..." : r.code
        }),
        inviteSourceTrailingContent: !s && (0, p.Lt)(null != (t = r.flags) ? t : 0, u.Q.IS_APPLICATION_BYPASS) ? (0, i.jsxs)("div", {
            className: V.XH,
            children: [(0, i.jsx)(f.Text, {
                className: V.Qq,
                variant: "text-xs/normal",
                color: "text-muted",
                children: H.intl.string(H.t["1i1bUl"])
            }), (0, i.jsx)(b.m, {
                text: H.intl.string(H.t["jvd/LF"]),
                children: (0, i.jsx)(f.mir, {
                    size: "xxs",
                    color: "currentColor",
                    className: V.G
                })
            })]
        }) : null,
        uses: d,
        expiresAt: (0, i.jsx)(E.A, {
            deadline: r.getExpiresAt()
        }),
        roles: g,
        guildId: c,
        showRolesColumn: o,
        onRevokeInvite: () => {
            h.Ay.revokeInvite(r)
        }
    })
}

function Q(e) {
    let {
        applicationId: t,
        channel: r,
        showChannel: l = !1,
        inviteDisabled: a = !1,
        showRolesColumn: s
    } = e, o = (0, _.h)(t), c = (0, m.bG)([G.default], () => {
        var e;
        return G.default.getUser(null == (e = r.linkedLobby) ? void 0 : e.linked_by)
    }), d = (0, R.e)(r);
    return (0, i.jsx)(q, {
        isDisabled: a,
        inviter: c,
        showChannel: l,
        channel: r,
        inviteSource: (0, i.jsxs)("div", {
            className: V._z,
            children: [(0, i.jsx)(C.A, {
                game: o,
                size: C.M.XXSMALL
            }), (0, i.jsx)(f.Text, {
                className: V.PD,
                variant: "text-sm/normal",
                children: null == o ? void 0 : o.name
            })]
        }),
        uses: H.intl.string(H.t.jHpxwo),
        expiresAt: H.intl.string(H.t.PqEzn8),
        roles: [],
        guildId: r.guild_id,
        showRolesColumn: s,
        onRevokeInvite: () => {
            d && null != o ? (0, f.mMO)(async () => {
                let {
                    default: e
                } = await n.e("73380").then(n.bind(n, 106895));
                return t => (0, i.jsx)(e, Y(F({}, t), {
                    channel: r,
                    application: o
                }))
            }) : x.A.show({
                title: H.intl.string(H.t.JmUENg),
                body: H.intl.string(H.t.SrvsML)
            })
        }
    })
}

function Z(e) {
    let {
        invites: t,
        guild: l,
        hide: a,
        canCreateInvites: s,
        withV2Actions: c,
        channel: u = null,
        showChannel: p = !1,
        loading: b = !1
    } = e;
    o()(null != l, "guild is required");
    let h = (0, v.Ay)(),
        x = (0, U.Fi)(l),
        j = (0, U.Wr)(l),
        O = (0, I.E)(l.id, "SettingsInvites").enabled,
        A = r.useMemo(() => null == t || b ? [] : d()(t).sortBy(e => {
            var t, n;
            return (null != (t = null == (n = e.inviter) ? void 0 : n.username) ? t : "").toLowerCase()
        }).value(), [t, b]),
        _ = (0, m.yK)([L.A], () => L.A.getSortedLinkedChannelsForGuild(l.id).filter(e => null == u || e.id === u.id)),
        N = r.useMemo(() => b ? [] : [...A.map(e => ({
            type: "invite",
            data: e
        })), ..._.map(e => ({
            type: "channel",
            data: e
        }))], [A, _, b]),
        E = () => {
            (0, f.mMO)(async () => e => (0, i.jsx)(P.default, Y(F({}, e), {
                channel: u,
                guild: l,
                source: W.PE1.SETTINGS_INVITE
            })))
        },
        [C, k] = r.useState(62),
        R = () => {
            let e = {
                source: w.Eo.GUILD_SETTINGS
            };
            (0, f.mMO)(async () => t => (0, i.jsx)(S.default, Y(F({}, t), {
                guildId: l.id,
                analyticsData: e
            })))
        };
    return (0, i.jsx)(y.ic, {
        sections: [1, +!c, +!!c, Math.max(1, N.length)],
        renderSection: e => {
            let {
                section: t
            } = e;
            if (3 === t)
                if (0 === N.length && !b) return (0, i.jsx)("div", {
                    children: (0, i.jsxs)(f.ppr, {
                        theme: h,
                        children: [(0, i.jsx)(f.G8R, {
                            darkSrc: n(774125),
                            lightSrc: n(151803),
                            width: 256,
                            height: 130
                        }), (0, i.jsx)(f.SGT, {
                            note: H.intl.string(H.t.F53CAc),
                            children: H.intl.string(H.t["+nLJkZ"])
                        })]
                    })
                }, "empty-state");
                else return (0, i.jsxs)(T.A, {
                    children: [(0, i.jsx)(T.A.Child, {
                        grow: 4,
                        basis: 0,
                        className: K.Gf,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: H.intl.string(H.t.EgHyKy)
                        })
                    }), (0, i.jsx)(T.A.Child, {
                        basis: 0,
                        grow: 3,
                        className: K.Gf,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: _.length > 0 ? H.intl.string(H.t.l7VISQ) : H.intl.string(H.t.LBlFEN)
                        })
                    }), (0, i.jsx)(T.A.Child, {
                        grow: 1,
                        basis: 0,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: H.intl.string(H.t.erWrmA)
                        })
                    }), (0, i.jsx)(T.A.Child, {
                        grow: 2,
                        basis: 0,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: H.intl.string(H.t["1aM27d"])
                        })
                    }), O && (0, i.jsx)(T.A.Child, {
                        grow: 2,
                        basis: 0,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: H.intl.string(H.t["LPJmL/"])
                        })
                    })]
                }, "table-header");
            return null
        },
        renderRow: e => {
            let {
                section: t,
                row: n
            } = e;
            if (0 === t) return (0, i.jsx)(f.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: V.wx,
                children: H.intl.string(H.t["9F90ic"])
            });
            if (1 === t) return (0, i.jsxs)("div", {
                className: V.o1,
                children: [(0, i.jsx)(f.Text, {
                    className: K.SX,
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: !0 === s ? H.intl.format(H.t["97VdNm"], {
                        onCreateInvite: E
                    }) : H.intl.string(H.t.WDw38H)
                }), (0, i.jsxs)("div", {
                    className: V.N5,
                    children: [(0, i.jsx)(f.Button, {
                        size: "sm",
                        variant: j ? "primary" : "critical-primary",
                        text: j ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
                        onClick: R,
                        disabled: !x
                    }), j && (0, i.jsxs)("div", {
                        className: V.TJ,
                        children: [(0, i.jsx)(f.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: g.A.unsafe_rawColors.YELLOW_300.css
                        }), (0, i.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            children: H.intl.string(H.t["2LLbj9"])
                        })]
                    })]
                }), (0, i.jsx)(f.cGx, {
                    className: V.zN
                })]
            });
            if (2 === t) return (0, i.jsx)(B.K, {
                hasInvites: A.length > 0,
                setHeight: k,
                onShowDisableInvites: R,
                onShowInviteModal: E,
                hasInviteDisabledPermission: x,
                invitesDisabled: j,
                canCreateInvites: s
            }, "actions-v2");
            if (3 === t) {
                if (0 === N.length && 0 === n && b) return (0, i.jsx)(f.y$y, {
                    className: K.QX,
                    type: f.y$y.Type.SPINNING_CIRCLE
                }, "spinner");
                let e = N[n];
                switch (null == e ? void 0 : e.type) {
                    case "invite":
                        return (0, i.jsx)(J, {
                            hide: a,
                            invite: e.data,
                            showChannel: p,
                            inviteDisabled: j,
                            showRolesColumn: O
                        }, e.data.code);
                    case "channel":
                        var r;
                        return (0, i.jsx)(Q, {
                            applicationId: null == (r = e.data.linkedLobby) ? void 0 : r.application_id,
                            channel: e.data,
                            showChannel: p,
                            inviteDisabled: j,
                            showRolesColumn: O
                        }, e.data.id);
                    default:
                        return null
                }
            }
        },
        rowHeight: (e, t) => 0 === e ? 64 : 1 === e ? 109 : 2 === e ? C : 3 === e ? 0 === N.length && 0 === t && b ? 62 : 62 * (null != N[t]) : 0,
        sectionHeight: e => 3 === e ? 0 !== N.length || b ? 28 : 240 : 0
    })
}