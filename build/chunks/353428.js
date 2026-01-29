/** Chunk was on 1113 **/
/** chunk id: 353428, original params: e,t,n (module,exports,require) **/
n.d(t, {
    EP: () => U,
    i$: () => B,
    zF: () => k
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(990078),
    u = n(397927),
    d = n(429913),
    h = n(709066),
    p = n(47167),
    g = n(713654),
    f = n(379848),
    m = n(263063),
    b = n(394953),
    A = n(976860),
    y = n(622543),
    O = n(576622),
    _ = n(994500),
    x = n(967198),
    j = n(287809),
    v = n(486020),
    E = n(975571),
    C = n(149564),
    S = n(282978),
    I = n(95655),
    N = n(565265),
    T = n(742589),
    P = n(849205),
    w = n(652215),
    R = n(49999),
    D = n(985018),
    L = n(638990);

function M(e) {
    var t;
    let {
        channel: n,
        children: l
    } = e, i = (0, d.h)(null == (t = n.linkedLobby) ? void 0 : t.application_id), [s, a] = (0, f.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == i) return null;
    let h = v.Ay.getApplicationIconURL({
            id: i.id,
            icon: i.icon,
            size: 14
        }),
        [p, g] = s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [D.intl.string(D.t["XJVlf/"]), void 0] : [(0, r.jsxs)("div", {
            className: L.lE,
            children: [(0, r.jsx)(u.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: D.intl.string(D.t.YIVr4B)
            }), (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: D.intl.format(D.t["16aguo"], {
                    helpdeskArticle: E.A.getArticleURL(w.MVz.LINKED_LOBBIES)
                })
            }), (0, r.jsx)(u.DUT, {
                className: L.Q1,
                onClick: () => a(R.i.USER_DISMISS),
                children: (0, r.jsx)(u.PGe, {
                    className: L.U0,
                    color: "currentColor"
                })
            })]
        }, 0), D.intl.string(D.t.YIVr4B)];
    return (0, r.jsx)(c.m, {
        position: "bottom",
        align: "left",
        __unsupportedReactNodeAsText: p,
        "aria-label": g,
        forceOpen: s === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
        children: (0, r.jsxs)("div", {
            className: L.hl,
            children: [l, (0, r.jsxs)(u.Text, {
                className: L.iO,
                variant: "text-sm/medium",
                color: "text-strong",
                children: ["•", (0, r.jsx)("img", {
                    alt: "",
                    src: h,
                    className: L.NB
                }), i.name]
            })]
        })
    }, s)
}

function k(e) {
    let {
        channel: t,
        channelName: n,
        parentChannel: i,
        guild: a,
        inSidebar: o = !1,
        handleClick: c,
        handleContextMenu: d,
        handleParentClick: h,
        handleParentContextMenu: f,
        renderFollowButton: m
    } = e, b = (0, g.gU)(t, a), {
        prefix: A,
        level: y
    } = function(e, t) {
        var n, r;
        switch (e) {
            case w.rbe.DM:
                return {
                    prefix: D.intl.string(D.t.EJRzg7), level: 1
                };
            case w.rbe.GROUP_DM:
                return {
                    prefix: D.intl.string(D.t["e5y+gm"]), level: 1
                };
            case w.rbe.GUILD_DIRECTORY:
                return {
                    prefix: null != (n = null == t ? void 0 : t.name) ? n : "", level: 1
                };
            case w.rbe.GUILD_ANNOUNCEMENT:
            case w.rbe.GUILD_TEXT:
            case w.rbe.GUILD_FORUM:
            case w.rbe.GUILD_MEDIA:
            case w.rbe.GUILD_STAGE_VOICE:
            case w.rbe.GUILD_VOICE:
                return {
                    prefix: null != (r = null == t ? void 0 : t.name) ? r : "", level: 1
                };
            case w.rbe.ANNOUNCEMENT_THREAD:
            case w.rbe.PUBLIC_THREAD:
            case w.rbe.PRIVATE_THREAD:
                return {
                    prefix: D.intl.string(D.t["7Xm5QI"]), level: 2
                };
            default:
                return {
                    prefix: null, level: 1
                }
        }
    }(t.type, a), O = (0, r.jsxs)(r.Fragment, {
        children: [null != A ? (0, r.jsxs)(u.AC4, {
            children: [A, ":"]
        }) : null, " ", n]
    });
    switch (t.type) {
        case w.rbe.DM:
            return (0, r.jsx)(P.A, {
                level: y,
                channel: t,
                handleClick: c,
                handleContextMenu: d
            });
        case w.rbe.GROUP_DM:
            if (t.isManaged()) return O;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.AC4, {
                    children: D.intl.string(D.t["e5y+gm"])
                }), (0, r.jsx)(I.n, {
                    channel: t
                }, "channel-".concat(t.id))]
            });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_FORUM:
        case w.rbe.GUILD_MEDIA:
            return null != t.linkedLobby ? (0, r.jsxs)(M, {
                channel: t,
                children: [V(b, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: O
                })]
            }) : (0, r.jsxs)(l.Fragment, {
                children: [V(b, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: O
                }), null != m ? m() : null]
            });
        case w.rbe.GUILD_VOICE:
            return (0, r.jsxs)(l.Fragment, {
                children: [V(b, D.intl.string(D.t.BVZqJl)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: O
                })]
            });
        case w.rbe.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(l.Fragment, {
                children: [V(b, D.intl.string(D.t.EErMzA)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: O
                })]
            });
        case w.rbe.ANNOUNCEMENT_THREAD:
        case w.rbe.PUBLIC_THREAD:
        case w.rbe.PRIVATE_THREAD:
            let x = null;
            if (!o && null != i) {
                let e = (0, g.gU)(i, a);
                x = (0, r.jsxs)(l.Fragment, {
                    children: [V(e, D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
                        level: y,
                        onContextMenu: f,
                        onClick: h,
                        className: s()(L.rg, L.or),
                        children: (0, p.m1)(i, j.default, _.A)
                    }), (0, r.jsx)(T.A.Caret, {})]
                })
            }
            let v = (null == i ? void 0 : i.type) != null && w.kvI.GUILD_THREADS_ONLY.has(i.type);
            return (0, r.jsxs)(l.Fragment, {
                children: [x, V(v ? null : b, D.intl.string(D.t["7Xm5QI"])), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    className: s()({
                        [L.or]: o,
                        [L.ej]: v,
                        [L.q1]: o && v
                    }),
                    children: O
                })]
            });
        case w.rbe.GUILD_DIRECTORY:
            let E = (null == a ? void 0 : a.features.has(w.GuildFeatures.HUB)) ? D.intl.formatToPlainString(D.t.Dy2aht, {
                guildName: n
            }) : n;
            return (0, r.jsxs)(l.Fragment, {
                children: [null !== b ? (0, r.jsx)(T.A.ChannelIcon, {
                    icon: b,
                    "aria-hidden": !0
                }) : null, (0, r.jsxs)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: [null != A ? (0, r.jsxs)(u.AC4, {
                        children: [A, ":"]
                    }) : null, " ", E]
                })]
            });
        default:
            return null
    }
}
let G = e => {
    var t, n, i;
    let {
        channel: s
    } = e, o = (0, a.bG)([j.default], () => j.default.getCurrentUser()), c = (0, a.bG)([j.default], () => j.default.getUser(s.getRecipientId())), u = (0, C.x)(), d = (0, a.bG)([y.A], () => null != c ? y.A.getUserProfile(c.id) : null), p = null != d && (null != (t = null == d ? void 0 : d.fetchEndedAt) ? t : 0) > 0;
    return (l.useEffect(() => {
        (null == o ? void 0 : o.isStaff()) && null != c && !c.isStaff() && (0, O.A)(c.id, c.getAvatarURL(void 0, 80), {
            dispatchWait: !0,
            withMutualGuilds: !0,
            withMutualFriendsCount: !0
        })
    }, [o, c]), s.isDM() && (null == o ? void 0 : o.isStaff()) && null != c) ? c.isStaff() ? (0, r.jsx)(h.A, {
        type: h.A.Types.STAFF_ONLY_DM
    }) : u && p && !(null != (n = null == (i = d.badges) ? void 0 : i.some(e => e.id.startsWith("staff"))) && n) ? (0, r.jsx)(h.A, {
        type: h.A.Types.NOT_STAFF_WARNING
    }) : null : null
};

function U(e, t) {
    switch (e.type) {
        case w.rbe.DM:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(G, {
                    channel: e
                }), (0, r.jsx)(S.A, {
                    channel: e
                }, e.id)]
            });
        case w.rbe.GUILD_ANNOUNCEMENT:
        case w.rbe.GUILD_TEXT:
        case w.rbe.GUILD_VOICE:
        case w.rbe.GUILD_STAGE_VOICE:
        case w.rbe.GROUP_DM:
            return null != t ? (0, r.jsx)(N.A, {
                channel: e,
                guild: t
            }, e.id) : null;
        default:
            return null
    }
}

function V(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [null !== e && (0, r.jsx)(T.A.ChannelIcon, {
            icon: e,
            "aria-hidden": !0
        }), (0, r.jsx)(u.AC4, {
            children: t
        })]
    })
}

function B(e) {
    let {
        guild: t,
        channel: n,
        caretPosition: i = "left"
    } = e, s = (0, a.bG)([x.A], () => x.A.getGuildId()), o = (0, b.lI)(), d = l.useRef(null);
    return (s === w.YYv || o) && null != t ? (0, r.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        targetElementRef: d,
        position: "bottom",
        children: (0, r.jsxs)(u.DUT, {
            onClick: () => {
                (0, A.uh)(t.id, n.id)
            },
            className: L.ED,
            children: ["left" === i && (0, r.jsx)(T.A.Caret, {
                direction: "left"
            }), (0, r.jsx)("div", {
                ref: d,
                children: (0, r.jsx)(m.A, {
                    guild: t,
                    size: m.A.Sizes.SMALLER,
                    className: L.gL,
                    active: !0
                })
            }), "right" === i && (0, r.jsx)(T.A.Caret, {
                direction: "right"
            })]
        })
    }) : null
}