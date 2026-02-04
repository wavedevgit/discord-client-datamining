/** chunk id: 594831, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => B,
    Dz: () => k,
    MV: () => P,
    S4: () => G,
    qZ: () => L
}), n(114821), n(339614), n(896048), n(638769), n(733351), n(321073), n(864466), n(443073);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(342952),
    u = n(397927),
    c = n(47167),
    d = n(713654),
    h = n(573435),
    g = n(145497),
    f = n(166444),
    p = n(565860),
    I = n(648427),
    m = n(379078),
    E = n(704554),
    A = n(21119),
    y = n(95701),
    S = n(734057),
    v = n(808728),
    O = n(71393),
    b = n(576705),
    N = n(994500),
    T = n(287809),
    _ = n(977997),
    C = n(403362),
    x = n(996439),
    D = n(652215),
    M = n(985018),
    j = n(953679);
let w = e => [e.userId, ... function(e) {
        let t = T.default.getUser(e.userId);
        if (null == t) return [];
        let n = t.username,
            l = (0, p.jP)(t);
        return Array.from(new Set([n, l.nick, ...Object.values(l.names)].flat().filter(C.Vq)))
    }(e)],
    P = {
        searchType: m.n.FUZZY,
        sortType: m.r.JARO_WINKLER,
        searchStringGenerator: e => {
            var t, n;
            let {
                channel: l,
                voiceStates: r
            } = e;
            return [l.name, l.id, l.guild_id, null != (t = null == (n = O.A.getGuild(l.guild_id)) ? void 0 : n.name) ? t : "", ...(null != r ? r : []).flatMap(e => w(e))].filter(C.Vq)
        },
        throttleMs: 100
    },
    R = {
        searchType: m.n.FUZZY,
        sortType: m.r.JARO_WINKLER,
        searchStringGenerator: w,
        throttleMs: 100
    },
    U = r.memo(function(e) {
        let {
            channel: t,
            query: n
        } = e, [i] = (0, a.bG)([_.A], () => [_.A.getVoiceStatesForChannel(t.id), _.A.getVoiceStateVersion()], [t.id], x.D), [s, c] = r.useState([]);
        (0, E.RT)(n, Object.values(i), c, R);
        let d = (0, a.yK)([_.A, T.default, A.A, N.A], () => Object.values(_.A.getVoiceStatesForChannel(t.id)).map(e => T.default.getUser(e.userId)).filter(C.Vq).sort((e, t) => {
                var l, r, i, a;
                if (s.length > 0 && "" !== n.trim()) {
                    if (s.some(t => t.userId === e.id)) return -1;
                    if (s.some(e => e.userId === t.id)) return 1
                }
                return N.A.isFriend(e.id) && !N.A.isFriend(t.id) ? -1 : !N.A.isFriend(e.id) && N.A.isFriend(t.id) ? 1 : (null != (l = null == (i = A.A.getUserAffinity(t.id)) ? void 0 : i.vcProbability) ? l : 0) - (null != (r = null == (a = A.A.getUserAffinity(e.id)) ? void 0 : a.vcProbability) ? r : 0)
            }), [t.id, s, n]),
            h = t.getGuildId(),
            g = Math.max(s.length, 2);
        return null == h ? null : (0, l.jsx)(o.A, {
            users: d,
            guildId: h,
            maxUsers: Math.min(g, 4),
            size: u._3J.SIZE_24,
            overflowCountClassName: j.mB,
            overflowCountVariant: "text-xs/semibold",
            disableUserPopout: !0,
            "aria-label": M.intl.string(M.t.TxqPQR)
        })
    });

function G() {
    let e, t = (e = (0, a.yK)([T.default, N.A, A.A], () => N.A.getFriendIDs().sort((e, t) => {
            var n, l, r, i;
            return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null != (n = null == (r = A.A.getUserAffinity(t)) ? void 0 : r.communicationProbability) ? n : 0) - (null != (l = null == (i = A.A.getUserAffinity(e)) ? void 0 : i.communicationProbability) ? l : 0)
        }).reduce((e, t) => {
            let n = T.default.getUser(t);
            return null != n && e.push(n), e
        }, []), []), (0, a.yK)([_.A, S.A, b.A], () => Array.from(e.map(e => _.A.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
            let n = null == t ? void 0 : t.channelId;
            if (null == n) return e;
            let l = S.A.getChannel(n);
            return null != l && b.A.can(D.xBc.VIEW_CHANNEL, l) && b.A.can(D.xBc.CONNECT, l) && e.add(n), e
        }, new Set)).filter(C.Vq), [e])),
        n = (0, a.yK)([I.A, S.A, b.A], () => {
            let e = I.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(new Set(e.reduce((e, t) => {
                let l = S.A.getChannel(t);
                return null != l && b.A.can(D.xBc.VIEW_CHANNEL, l) && b.A.can(D.xBc.CONNECT, l) && !n.has(t) && e.push(t), e
            }, [])))
        }, [t]);
    return {
        friendVoiceChannelIds: t,
        recentVoiceChannelIds: n
    }
}

function L() {
    return (0, a.yK)([O.A, v.Ay, _.A, N.A, b.A], () => O.A.getGuildsArray().reduce((e, t) => [...e, ...v.Ay.getChannels(t.id)[v.vM].filter(e => b.A.can(D.xBc.VIEW_CHANNEL, e.channel) && b.A.can(D.xBc.CONNECT, e.channel)).map(e => {
        let {
            channel: t
        } = e;
        return t
    })], []).map(e => ({
        channel: e,
        voiceStates: Object.values(_.A.getVoiceStatesForChannel(e.id)).filter(e => N.A.isFriend(e.userId))
    })), [])
}

function k() {
    return (0, a.yK)([O.A, v.Ay, b.A], () => O.A.getGuildsArray().reduce((e, t) => [...e, ...v.Ay.getChannels(t.id)[v.I6].map(e => {
        let {
            channel: t
        } = e;
        return t
    }).filter(e => null != e && !!(0, y.pQ)(e.type) && b.A.can(D.xBc.VIEW_CHANNEL, e))], []).map(e => ({
        channel: e,
        voiceStates: []
    })), [])
}
let F = r.memo(function(e) {
        var t;
        let {
            channel: n
        } = e, r = n.getGuildId(), i = (0, a.bG)([O.A], () => O.A.getGuild(r), [r]);
        if (null == i) switch (n.type) {
            case D.rbe.DM:
                return (0, l.jsx)(f.Pk, {
                    channel: n,
                    size: u._3J.SIZE_32
                });
            case D.rbe.GROUP_DM:
                return (0, l.jsx)(f.IC, {
                    channel: n,
                    size: u._3J.SIZE_32
                });
            default:
                return null
        }
        return (0, l.jsx)(h.Ay, {
            mask: h.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, l.jsx)("div", {
                className: j.Ko,
                children: (0, l.jsx)(g.j, {
                    guildId: i.id,
                    guildName: null != (t = i.name) ? t : M.intl.string(M.t.DmIUGK),
                    guildIcon: i.icon,
                    iconSize: 32
                })
            })
        })
    }),
    V = r.memo(function(e) {
        var t;
        let {
            channelId: n,
            isHighlighted: r,
            currentVoiceChannel: i,
            onClick: o,
            onMouseOver: h,
            onMouseLeave: g,
            query: f,
            showVoiceAvatars: p = !0
        } = e, I = (0, a.bG)([S.A], () => S.A.getChannel(n), [n]), m = null == I ? void 0 : I.getGuildId(), E = (0, a.bG)([O.A], () => O.A.getGuild(m), [m]), A = (0, d.gU)(I, E), y = (null == i ? void 0 : i.id) === n, v = y ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted", b = y ? u.LU0.colors.TEXT_FEEDBACK_POSITIVE : r ? u.LU0.colors.INTERACTIVE_TEXT_ACTIVE : u.LU0.colors.ICON_MUTED;
        return null == I ? null : (0, l.jsxs)(u.sqX, {
            className: s()(j.Uw, r && j.gt),
            "aria-label": I.name,
            onClick: () => o(n),
            onMouseOver: () => h(n),
            onMouseLeave: () => g(n),
            children: [(0, l.jsx)("div", {
                className: j._N,
                children: (0, l.jsx)(F, {
                    channel: I
                })
            }), (0, l.jsxs)("div", {
                className: j.rg,
                children: [(0, l.jsxs)("div", {
                    className: j.Ks,
                    children: [null != A ? (0, l.jsx)(A, {
                        color: b,
                        size: "xs",
                        className: j.p
                    }) : void 0, (0, l.jsx)(u.Text, {
                        variant: y ? "text-sm/semibold" : "text-sm/medium",
                        color: v,
                        className: j.rU,
                        children: (0, c.m1)(I, T.default, N.A)
                    })]
                }), (0, l.jsx)(u.Text, {
                    variant: y ? "text-xs/semibold" : "text-xs/medium",
                    color: v,
                    children: null != (t = null == E ? void 0 : E.name) ? t : I.name
                })]
            }), (0, l.jsx)("div", {
                className: j.vU,
                children: p ? (0, l.jsx)(U, {
                    channel: I,
                    currentVoiceChannel: i,
                    query: f
                }) : null
            })]
        })
    }),
    H = r.memo(function(e) {
        let {
            emptyText: t
        } = e;
        return (0, l.jsx)("div", {
            className: j.KJ,
            children: (0, l.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: t
            })
        })
    }),
    Y = r.memo(function(e) {
        let {
            sectionHeader: t,
            channelIds: n,
            currentVoiceChannel: i,
            onSelect: s,
            hasQuery: a,
            query: o,
            scrollable: c = !0,
            showVoiceAvatars: d = !0
        } = e, [h, g] = r.useState(null), f = e => {
            g(e)
        }, p = () => {
            g(null)
        }, I = c ? u.IpV : "div";
        return (0, l.jsxs)("div", {
            children: [(0, l.jsx)("div", {
                className: j.qs,
                children: (0, l.jsx)(u.Text, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: t
                })
            }), (0, l.jsxs)(I, {
                className: j.o5,
                children: [a && 0 === n.length && (0, l.jsx)(H, {
                    emptyText: M.intl.string(M.t.nxSS03)
                }), n.map(e => (0, l.jsx)(V, {
                    channelId: e,
                    isHighlighted: e === h,
                    currentVoiceChannel: i,
                    onClick: () => {
                        s(e)
                    },
                    onMouseOver: f,
                    onMouseLeave: p,
                    query: o,
                    showVoiceAvatars: d
                }, e))]
            })]
        })
    });

function W(e) {
    let {
        searchQuery: t,
        currentVoiceChannel: n,
        onSelect: r
    } = e, {
        recentVoiceChannelIds: i,
        friendVoiceChannelIds: a
    } = G();
    return i.length > 0 || a.length > 0 ? (0, l.jsxs)(u.IpV, {
        className: s()(j.o5, j.Hc),
        children: [i.length > 0 && (0, l.jsx)(Y, {
            sectionHeader: M.intl.string(M.t.lnk2NQ),
            channelIds: i.slice(0, 3),
            hasQuery: !1,
            query: t,
            currentVoiceChannel: n,
            onSelect: e => r(e, "recent channel"),
            scrollable: !1
        }), a.length > 0 && (0, l.jsx)(Y, {
            sectionHeader: M.intl.string(M.t["0lvb9O"]),
            channelIds: a.slice(0, 8),
            hasQuery: !1,
            query: t,
            currentVoiceChannel: n,
            onSelect: e => r(e, "friend channel"),
            scrollable: !1
        })]
    }) : (0, l.jsx)(H, {
        emptyText: M.intl.string(M.t["3ET7Ay"])
    })
}

function z(e) {
    e.stopPropagation()
}

function B(e) {
    var t, n;
    let {
        currentVoiceChannel: i,
        onClose: s,
        onSelect: a,
        allAvailableChannelRows: o
    } = e, [c, d] = r.useState(""), [h, g] = r.useState([]);
    (0, E.RT)(c, o, g, P);
    let f = r.useCallback(e => {
            "Escape" === e.key && s()
        }, [s]),
        p = r.useCallback((e, t) => {
            a(e, t), s()
        }, [a, s]);
    r.useEffect(() => (document.addEventListener("keydown", f, !0), () => {
        document.removeEventListener("keydown", f, !0)
    }), [s, f]);
    let I = "" !== c.trim(),
        m = h.length > 20,
        A = {
            count: m ? 20 : h.length
        },
        y = r.useMemo(() => ({
            onMouseDown: z,
            onMouseMove: z,
            onMouseUp: z,
            onMouseEnter: z,
            onMouseLeave: z
        }), []);
    return (0, l.jsxs)("div", (t = function(e) {
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
    }({
        className: j.Dz
    }, y), n = n = {
        children: [(0, l.jsx)("div", {
            className: j.PP,
            children: (0, l.jsx)(u.IWV, {
                autoFocus: !0,
                query: c,
                placeholder: M.intl.string(M.t.UyA6ST),
                onClear: () => {
                    d("")
                },
                onKeyDown: f,
                onChange: e => {
                    d(e)
                },
                inputProps: {
                    "aria-label": M.intl.string(M.t.UyA6ST)
                }
            })
        }), I ? (0, l.jsx)(Y, {
            sectionHeader: m ? M.intl.format(M.t.qdXiQ1, A) : M.intl.format(M.t["Aq+8wB"], A),
            channelIds: h.map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            }).slice(0, 20),
            hasQuery: I,
            query: c,
            currentVoiceChannel: i,
            onSelect: e => p(e, "search channel"),
            showVoiceAvatars: !0
        }) : (0, l.jsx)(W, {
            searchQuery: c,
            currentVoiceChannel: i,
            onSelect: p
        })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
}