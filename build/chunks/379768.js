/** chunk id: 379768, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(136722),
    u = n(311907),
    d = n(342952),
    h = n(397927),
    p = n(435183),
    f = n(155718),
    m = n(47167),
    g = n(685374),
    A = n(569989),
    b = n(997509),
    _ = n(46054),
    y = n(34457),
    v = n(317525),
    E = n(71393),
    O = n(576705),
    C = n(287809),
    S = n(488926),
    x = n(427262),
    j = n(314307),
    I = n(234567),
    T = n(652215),
    N = n(985018),
    P = n(391514),
    w = n(206314);

function R(e) {
    let {
        channel: t
    } = e, [n, i] = r.useState(!1), s = (0, m.Ay)(t, !0), R = t.guild_id, D = (0, u.bG)([v.A], () => null != R ? v.A.getSortedRoles(R) : void 0), M = (0, u.bG)([C.default, E.A], () => {
        var e;
        return C.default.getUser(null == (e = E.A.getGuild(R)) ? void 0 : e.ownerId)
    }), L = r.useMemo(() => null != D ? D.filter(e => !(0, y.Oy)(e)) : [], [D]), k = r.useMemo(() => o()(L).filter(e => {
        if (null == R) return !1;
        let n = S.aH({
            forceRoles: {
                [e.id]: e
            },
            context: t
        });
        return c.X8(n, c.kg(T.xBc.ADMINISTRATOR, T.xBc.VIEW_CHANNEL))
    }).value(), [t, R, L]), U = (0, u.yK)([C.default], () => {
        let e = {};
        for (let n of (null != M && (e[M.id] = M), Object.values(t.permissionOverwrites))) {
            if (n.type !== f.r2.MEMBER || null != e[n.id]) continue;
            let t = C.default.getUser(n.id);
            null != t && (e[t.id] = t)
        }
        return o()(e).filter(e => {
            var n;
            let l = S.$3({
                    permission: T.xBc.ADMINISTRATOR,
                    user: e,
                    context: t
                }),
                r = null != (n = t.permissionOverwrites[e.id]) ? n : S.x3,
                i = c.zy(r.allow, T.xBc.VIEW_CHANNEL);
            return l || i
        }).value()
    }, [t, M]), G = O.A.can(T.xBc.MANAGE_CHANNELS, t) || O.A.can(T.xBc.MANAGE_ROLES, t), F = r.useCallback(() => i(!1), []);
    return (0, l.jsxs)(j.Ay, {
        channelId: t.id,
        children: [(0, l.jsx)(j.WK, {
            locked: !0,
            channelType: t.type
        }), (0, l.jsx)(j.cr, {
            children: N.intl.format(N.t.I3R7Vn, {
                channelName: s
            })
        }), (0, l.jsx)(j.j1, {
            className: w.PT,
            children: N.intl.format(N.t.QuwqjG, {
                channelName: s,
                topicHook: () => _.A.parseTopic(t.topic, !0, {
                    channelId: t.id
                })
            })
        }), G ? (0, l.jsxs)("div", {
            className: P.$x,
            children: [(0, l.jsx)(h.Button, {
                size: "sm",
                variant: "secondary",
                text: N.intl.string(N.t.dMJ3Y6),
                onClick: () => i(!0),
                icon: h.nFg
            }), (0, l.jsx)(h.Button, {
                size: "sm",
                variant: "secondary",
                text: N.intl.string(N.t["3gUsJb"]),
                onClick: function() {
                    p.Ay.open(t.id)
                },
                icon: h.R2l
            })]
        }) : null, (0, l.jsxs)("div", {
            className: P.ol,
            children: [function() {
                if (1 !== U.length || k.length > 0) return (0, l.jsx)(d.A, {
                    guildId: t.guild_id,
                    className: P.HD,
                    maxUsers: 5,
                    users: U
                });
                let e = U[0],
                    n = x.Ay.getName(e);
                return (0, l.jsxs)("div", {
                    className: P.HD,
                    children: [(0, l.jsx)(h.euF, {
                        src: e.getAvatarURL(t.guild_id, 24),
                        "aria-label": n,
                        size: h._3J.SIZE_24
                    }), (0, l.jsx)(h.Text, {
                        tag: "span",
                        className: P.Jk,
                        variant: "text-md/normal",
                        children: n
                    }), "\xa0", (0, l.jsx)(h.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: N.intl.string(N.t.rt0ERW)
                    })]
                })
            }(), k.map((e, n) => {
                var r, i;
                let s = null != (r = e.colorString) ? r : T.TpD,
                    o = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                return G ? (0, l.jsx)(I.A, {
                    className: a()(P.JC, {
                        [P.HV]: n === k.length - 1
                    }),
                    roleName: e.name,
                    roleColor: s,
                    disabled: !G,
                    verified: o,
                    onClick: () => {
                        b.A.open(t.guild_id, T.BEX.MEMBERS), b.A.selectRole(e.id)
                    }
                }, e.id) : (0, l.jsx)(A.A, {
                    className: a()(P.JC, {
                        [P.HV]: n === k.length - 1
                    }),
                    roleName: e.name,
                    roleColor: s,
                    verified: o
                }, e.id)
            })]
        }), n ? (0, l.jsx)(h.aFV, {
            renderModal: e => {
                var n, r;
                return (0, l.jsx)(g.default, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                            var l;
                            l = n[t], t in e ? Object.defineProperty(e, t, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = l
                        })
                    }
                    return e
                }({}, e), r = r = {
                    onClose: () => (F(), e.onClose()),
                    channelId: t.id
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, l)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            },
            onCloseRequest: () => i(!1)
        }) : null]
    })
}