/** chunk id: 379768, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    c = n(136722),
    u = n(311907),
    d = n(342952),
    h = n(397927),
    p = n(435183),
    g = n(155718),
    f = n(47167),
    m = n(685374),
    b = n(569989),
    A = n(997509),
    y = n(46054),
    O = n(34457),
    _ = n(317525),
    j = n(71393),
    x = n(576705),
    v = n(287809),
    E = n(488926),
    C = n(427262),
    S = n(314307),
    I = n(234567),
    N = n(652215),
    T = n(985018),
    P = n(391514),
    w = n(206314);

function R(e) {
    let {
        channel: t
    } = e, [n, i] = l.useState(!1), a = (0, f.Ay)(t, !0), R = t.guild_id, D = (0, u.bG)([_.A], () => null != R ? _.A.getSortedRoles(R) : void 0), L = (0, u.bG)([v.default, j.A], () => {
        var e;
        return v.default.getUser(null == (e = j.A.getGuild(R)) ? void 0 : e.ownerId)
    }), M = l.useMemo(() => null != D ? D.filter(e => !(0, O.Oy)(e)) : [], [D]), G = l.useMemo(() => o()(M).filter(e => {
        if (null == R) return !1;
        let n = E.aH({
            forceRoles: {
                [e.id]: e
            },
            context: t
        });
        return c.X8(n, c.kg(N.xBc.ADMINISTRATOR, N.xBc.VIEW_CHANNEL))
    }).value(), [t, R, M]), k = (0, u.yK)([v.default], () => {
        let e = {};
        for (let n of (null != L && (e[L.id] = L), Object.values(t.permissionOverwrites))) {
            if (n.type !== g.r2.MEMBER || null != e[n.id]) continue;
            let t = v.default.getUser(n.id);
            null != t && (e[t.id] = t)
        }
        return o()(e).filter(e => {
            var n;
            let r = E.$3({
                    permission: N.xBc.ADMINISTRATOR,
                    user: e,
                    context: t
                }),
                l = null != (n = t.permissionOverwrites[e.id]) ? n : E.x3,
                i = c.zy(l.allow, N.xBc.VIEW_CHANNEL);
            return r || i
        }).value()
    }, [t, L]), U = x.A.can(N.xBc.MANAGE_CHANNELS, t) || x.A.can(N.xBc.MANAGE_ROLES, t), V = l.useCallback(() => i(!1), []);
    return (0, r.jsxs)(S.Ay, {
        channelId: t.id,
        children: [(0, r.jsx)(S.WK, {
            locked: !0,
            channelType: t.type
        }), (0, r.jsx)(S.cr, {
            children: T.intl.format(T.t.I3R7Vn, {
                channelName: a
            })
        }), (0, r.jsx)(S.j1, {
            className: w.PT,
            children: T.intl.format(T.t.QuwqjG, {
                channelName: a,
                topicHook: () => y.A.parseTopic(t.topic, !0, {
                    channelId: t.id
                })
            })
        }), U ? (0, r.jsxs)("div", {
            className: P.$x,
            children: [(0, r.jsx)(h.Button, {
                size: "sm",
                variant: "secondary",
                text: T.intl.string(T.t.dMJ3Y6),
                onClick: () => i(!0),
                icon: h.nFg
            }), (0, r.jsx)(h.Button, {
                size: "sm",
                variant: "secondary",
                text: T.intl.string(T.t["3gUsJb"]),
                onClick: function() {
                    p.Ay.open(t.id)
                },
                icon: h.R2l
            })]
        }) : null, (0, r.jsxs)("div", {
            className: P.ol,
            children: [function() {
                if (1 !== k.length || G.length > 0) return (0, r.jsx)(d.A, {
                    guildId: t.guild_id,
                    className: P.HD,
                    maxUsers: 5,
                    users: k
                });
                let e = k[0],
                    n = C.Ay.getName(e);
                return (0, r.jsxs)("div", {
                    className: P.HD,
                    children: [(0, r.jsx)(h.euF, {
                        src: e.getAvatarURL(t.guild_id, 24),
                        "aria-label": n,
                        size: h._3J.SIZE_24
                    }), (0, r.jsx)(h.Text, {
                        tag: "span",
                        className: P.Jk,
                        variant: "text-md/normal",
                        children: n
                    }), "\xa0", (0, r.jsx)(h.Text, {
                        tag: "span",
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: T.intl.string(T.t.rt0ERW)
                    })]
                })
            }(), G.map((e, n) => {
                var l, i;
                let a = null != (l = e.colorString) ? l : N.TpD,
                    o = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                return U ? (0, r.jsx)(I.A, {
                    className: s()(P.JC, {
                        [P.HV]: n === G.length - 1
                    }),
                    roleName: e.name,
                    roleColor: a,
                    disabled: !U,
                    verified: o,
                    onClick: () => {
                        A.A.open(t.guild_id, N.BEX.MEMBERS), A.A.selectRole(e.id)
                    }
                }, e.id) : (0, r.jsx)(b.A, {
                    className: s()(P.JC, {
                        [P.HV]: n === G.length - 1
                    }),
                    roleName: e.name,
                    roleColor: a,
                    verified: o
                }, e.id)
            })]
        }), n ? (0, r.jsx)(h.aFV, {
            renderModal: e => {
                var n, l;
                return (0, r.jsx)(m.default, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, e), l = l = {
                    onClose: () => (V(), e.onClose()),
                    channelId: t.id
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            },
            onCloseRequest: () => i(!1)
        }) : null]
    })
}