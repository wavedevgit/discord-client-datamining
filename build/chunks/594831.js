/** chunk id: 594831 params = (module,exports,require) **/
n.d(t, {
    Ay: () => B,
    Dz: () => P,
    MV: () => j,
    S4: () => L,
    qZ: () => G
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(342952),
    u = n(397927),
    d = n(47167),
    c = n(713654),
    h = n(573435),
    g = n(145497),
    m = n(166444),
    f = n(565860),
    A = n(648427),
    I = n(379078),
    E = n(704554),
    p = n(21119),
    _ = n(95701),
    S = n(734057),
    x = n(808728),
    T = n(71393),
    C = n(576705),
    N = n(994500),
    v = n(287809),
    y = n(977997),
    M = n(403362),
    b = n(996439),
    R = n(652215),
    D = n(985018),
    O = n(211500);
let w = e => [e.userId, ... function(e) {
        let t = v.default.getUser(e.userId);
        if (null == t) return [];
        let n = t.username,
            i = (0, f.jP)(t);
        return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(M.Vq)))
    }(e)],
    j = {
        searchType: I.n.FUZZY,
        sortType: I.r.JARO_WINKLER,
        searchStringGenerator: e => {
            let {
                channel: t,
                voiceStates: n
            } = e;
            return [(0, d.m1)(t, v.default, N.A), t.id, t.guild_id, T.A.getGuild(t.guild_id)?.name ?? "", ...(n ?? []).flatMap(e => w(e))].filter(M.Vq)
        },
        throttleMs: 100
    },
    k = {
        searchType: I.n.FUZZY,
        sortType: I.r.JARO_WINKLER,
        searchStringGenerator: w,
        throttleMs: 100
    },
    U = r.memo(function(e) {
        let {
            channel: t,
            query: n
        } = e, [l] = (0, a.bG)([y.A], () => [y.A.getVoiceStatesForChannel(t.id), y.A.getVoiceStateVersion()], [t.id], b.D), [s, d] = r.useState([]);
        (0, E.RT)(n, Object.values(l), d, k);
        let c = (0, a.yK)([y.A, v.default, p.A, N.A], () => Object.values(y.A.getVoiceStatesForChannel(t.id)).map(e => v.default.getUser(e.userId)).filter(M.Vq).sort((e, t) => {
                if (s.length > 0 && "" !== n.trim()) {
                    if (s.some(t => t.userId === e.id)) return -1;
                    if (s.some(e => e.userId === t.id)) return 1
                }
                return N.A.isFriend(e.id) && !N.A.isFriend(t.id) ? -1 : !N.A.isFriend(e.id) && N.A.isFriend(t.id) ? 1 : (p.A.getUserAffinity(t.id)?.vcProbability ?? 0) - (p.A.getUserAffinity(e.id)?.vcProbability ?? 0)
            }), [t.id, s, n]),
            h = t.getGuildId(),
            g = Math.max(s.length, 2);
        return null == h ? null : (0, i.jsx)(o.A, {
            users: c,
            guildId: h,
            maxUsers: Math.min(g, 4),
            size: u._3J.SIZE_24,
            overflowCountClassName: O.mB,
            overflowCountVariant: "text-xs/semibold",
            disableUserPopout: !0,
            "aria-label": D.intl.string(D.t.TxqPQR)
        })
    });

function L() {
    let e, t = (e = (0, a.yK)([v.default, N.A, p.A], () => N.A.getFriendIDs().sort((e, t) => null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (p.A.getUserAffinity(t)?.communicationProbability ?? 0) - (p.A.getUserAffinity(e)?.communicationProbability ?? 0)).reduce((e, t) => {
            let n = v.default.getUser(t);
            return null != n && e.push(n), e
        }, []), []), (0, a.yK)([y.A, S.A, C.A], () => Array.from(e.map(e => y.A.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
            let n = t?.channelId;
            if (null == n) return e;
            let i = S.A.getChannel(n);
            return null != i && C.A.can(R.xBc.VIEW_CHANNEL, i) && C.A.can(R.xBc.CONNECT, i) && e.add(n), e
        }, new Set)).filter(M.Vq), [e])),
        n = (0, a.yK)([A.A, S.A, C.A], () => {
            let e = A.A.getVoiceChannelHistory(),
                n = new Set(t);
            return Array.from(new Set(e.reduce((e, t) => {
                let i = S.A.getChannel(t);
                return null != i && C.A.can(R.xBc.VIEW_CHANNEL, i) && C.A.can(R.xBc.CONNECT, i) && !n.has(t) && e.push(t), e
            }, [])))
        }, [t]);
    return {
        friendVoiceChannelIds: t,
        recentVoiceChannelIds: n
    }
}

function G() {
    return (0, a.yK)([T.A, x.Ay, y.A, N.A, C.A], () => T.A.getGuildsArray().reduce((e, t) => [...e, ...x.Ay.getChannels(t.id)[x.vM].filter(e => C.A.can(R.xBc.VIEW_CHANNEL, e.channel) && C.A.can(R.xBc.CONNECT, e.channel)).map(e => {
        let {
            channel: t
        } = e;
        return t
    })], []).map(e => ({
        channel: e,
        voiceStates: Object.values(y.A.getVoiceStatesForChannel(e.id)).filter(e => N.A.isFriend(e.userId))
    })), [])
}

function P() {
    return (0, a.yK)([T.A, x.Ay, C.A], () => T.A.getGuildsArray().reduce((e, t) => [...e, ...x.Ay.getChannels(t.id)[x.I6].map(e => {
        let {
            channel: t
        } = e;
        return t
    }).filter(e => null != e && !!(0, _.pQ)(e.type) && C.A.can(R.xBc.VIEW_CHANNEL, e))], []).map(e => ({
        channel: e,
        voiceStates: []
    })), [])
}
let F = r.memo(function(e) {
        let {
            channel: t
        } = e, n = t.getGuildId(), r = (0, a.bG)([T.A], () => T.A.getGuild(n), [n]);
        if (null == r) switch (t.type) {
            case R.rbe.DM:
                return (0, i.jsx)(m.Pk, {
                    channel: t,
                    size: u._3J.SIZE_32
                });
            case R.rbe.GROUP_DM:
                return (0, i.jsx)(m.IC, {
                    channel: t,
                    size: u._3J.SIZE_32
                });
            default:
                return null
        }
        return (0, i.jsx)(h.Ay, {
            mask: h.hW.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: O.Ko,
                children: (0, i.jsx)(g.j, {
                    guildId: r.id,
                    guildName: r.name ?? D.intl.string(D.t.DmIUGK),
                    guildIcon: r.icon,
                    iconSize: 32
                })
            })
        })
    }),
    V = r.memo(function(e) {
        let {
            channelId: t,
            isHighlighted: n,
            currentVoiceChannel: r,
            onClick: l,
            onMouseOver: o,
            onMouseLeave: h,
            query: g,
            showVoiceAvatars: m = !0
        } = e, f = (0, a.bG)([S.A], () => S.A.getChannel(t), [t]), A = (0, d.Ay)(f), I = f?.getGuildId(), E = (0, a.bG)([T.A], () => T.A.getGuild(I), [I]), p = (0, c.gU)(f, E), _ = r?.id === t, x = _ ? "text-feedback-positive" : n ? "interactive-text-active" : "text-muted", C = _ ? u.LU0.colors.TEXT_FEEDBACK_POSITIVE : n ? u.LU0.colors.INTERACTIVE_TEXT_ACTIVE : u.LU0.colors.ICON_MUTED;
        return null == f ? null : (0, i.jsxs)(u.sqX, {
            className: s()(O.Uw, n && O.gt),
            "aria-label": A ?? "",
            onClick: () => l(t),
            onMouseOver: () => o(t),
            onMouseLeave: () => h(t),
            children: [(0, i.jsx)("div", {
                className: O._N,
                children: (0, i.jsx)(F, {
                    channel: f
                })
            }), (0, i.jsxs)("div", {
                className: O.rg,
                children: [(0, i.jsxs)("div", {
                    className: O.Ks,
                    children: [null != p ? (0, i.jsx)(p, {
                        color: C,
                        size: "xs",
                        className: O.p
                    }) : void 0, (0, i.jsx)(u.Text, {
                        variant: _ ? "text-sm/semibold" : "text-sm/medium",
                        color: x,
                        className: O.rU,
                        children: (0, d.m1)(f, v.default, N.A)
                    })]
                }), (0, i.jsx)(u.Text, {
                    variant: _ ? "text-xs/semibold" : "text-xs/medium",
                    color: x,
                    children: E?.name ?? A
                })]
            }), (0, i.jsx)("div", {
                className: O.vU,
                children: m ? (0, i.jsx)(U, {
                    channel: f,
                    currentVoiceChannel: r,
                    query: g
                }) : null
            })]
        })
    }),
    z = r.memo(function(e) {
        let {
            emptyText: t
        } = e;
        return (0, i.jsx)("div", {
            className: O.KJ,
            children: (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: t
            })
        })
    }),
    H = r.memo(function(e) {
        let {
            sectionHeader: t,
            channelIds: n,
            currentVoiceChannel: l,
            onSelect: s,
            hasQuery: a,
            query: o,
            scrollable: d = !0,
            showVoiceAvatars: c = !0
        } = e, [h, g] = r.useState(null), m = e => {
            g(e)
        }, f = () => {
            g(null)
        }, A = d ? u.IpV : "div";
        return (0, i.jsxs)("div", {
            children: [(0, i.jsx)("div", {
                className: O.qs,
                children: (0, i.jsx)(u.Text, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    children: t
                })
            }), (0, i.jsxs)(A, {
                className: O.o5,
                children: [a && 0 === n.length && (0, i.jsx)(z, {
                    emptyText: D.intl.string(D.t.nxSS03)
                }), n.map(e => (0, i.jsx)(V, {
                    channelId: e,
                    isHighlighted: e === h,
                    currentVoiceChannel: l,
                    onClick: () => {
                        s(e)
                    },
                    onMouseOver: m,
                    onMouseLeave: f,
                    query: o,
                    showVoiceAvatars: c
                }, e))]
            })]
        })
    });

function Y(e) {
    let {
        searchQuery: t,
        currentVoiceChannel: n,
        onSelect: r
    } = e, {
        recentVoiceChannelIds: l,
        friendVoiceChannelIds: a
    } = L();
    return l.length > 0 || a.length > 0 ? (0, i.jsxs)(u.IpV, {
        className: s()(O.o5, O.Hc),
        children: [l.length > 0 && (0, i.jsx)(H, {
            sectionHeader: D.intl.string(D.t.lnk2NQ),
            channelIds: l.slice(0, 3),
            hasQuery: !1,
            query: t,
            currentVoiceChannel: n,
            onSelect: e => r(e, "recent channel"),
            scrollable: !1
        }), a.length > 0 && (0, i.jsx)(H, {
            sectionHeader: D.intl.string(D.t["0lvb9O"]),
            channelIds: a.slice(0, 8),
            hasQuery: !1,
            query: t,
            currentVoiceChannel: n,
            onSelect: e => r(e, "friend channel"),
            scrollable: !1
        })]
    }) : (0, i.jsx)(z, {
        emptyText: D.intl.string(D.t["3ET7Ay"])
    })
}

function W(e) {
    e.stopPropagation()
}

function B(e) {
    let {
        currentVoiceChannel: t,
        onClose: n,
        onSelect: l,
        allAvailableChannelRows: s
    } = e, [a, o] = r.useState(""), [d, c] = r.useState([]);
    (0, E.RT)(a, s, c, j);
    let h = r.useCallback(e => {
            "Escape" === e.key && n()
        }, [n]),
        g = r.useCallback((e, t) => {
            l(e, t), n()
        }, [l, n]);
    r.useEffect(() => (document.addEventListener("keydown", h, !0), () => {
        document.removeEventListener("keydown", h, !0)
    }), [n, h]);
    let m = "" !== a.trim(),
        f = d.length > 20,
        A = {
            count: f ? 20 : d.length
        },
        I = r.useMemo(() => ({
            onMouseDown: W,
            onMouseMove: W,
            onMouseUp: W,
            onMouseEnter: W,
            onMouseLeave: W
        }), []);
    return (0, i.jsxs)("div", {
        className: O.Dz,
        ...I,
        children: [(0, i.jsx)("div", {
            className: O.PP,
            children: (0, i.jsx)(u.IWV, {
                autoFocus: !0,
                query: a,
                placeholder: D.intl.string(D.t.UyA6ST),
                onClear: () => {
                    o("")
                },
                onKeyDown: h,
                onChange: e => {
                    o(e)
                },
                inputProps: {
                    "aria-label": D.intl.string(D.t.UyA6ST)
                }
            })
        }), m ? (0, i.jsx)(H, {
            sectionHeader: f ? D.intl.format(D.t.qdXiQ1, A) : D.intl.format(D.t["Aq+8wB"], A),
            channelIds: d.map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            }).slice(0, 20),
            hasQuery: m,
            query: a,
            currentVoiceChannel: t,
            onSelect: e => g(e, "search channel"),
            showVoiceAvatars: !0
        }) : (0, i.jsx)(Y, {
            searchQuery: a,
            currentVoiceChannel: t,
            onSelect: g
        })]
    })
}