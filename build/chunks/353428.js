/** Chunk was on 41727 **/
/** chunk id: 353428, original params: e,t,n (module,exports,require) **/
n.d(t, {
    EP: () => U,
    i$: () => V,
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
    p = n(709066),
    h = n(47167),
    f = n(713654),
    g = n(379848),
    m = n(263063),
    b = n(394953),
    A = n(976860),
    y = n(622543),
    _ = n(576622),
    O = n(994500),
    j = n(967198),
    v = n(287809),
    x = n(486020),
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
    M = n(638990);

function L(e) {
    var t;
    let {
        channel: n,
        children: l
    } = e, i = (0, d.h)(null == (t = n.linkedLobby) ? void 0 : t.application_id), [s, a] = (0, g.kn)([o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == i) return null;
    let p = x.Ay.getApplicationIconURL({
            id: i.id,
            icon: i.icon,
            size: 14
        }),
        [h, f] = s !== o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP ? [D.intl.string(D.t["XJVlf/"]), void 0] : [(0, r.jsxs)("div", {
            className: M.lE,
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
                className: M.Q1,
                onClick: () => a(R.i.USER_DISMISS),
                children: (0, r.jsx)(u.PGe, {
                    className: M.U0,
                    color: "currentColor"
                })
            })]
        }, 0), D.intl.string(D.t.YIVr4B)];
    return (0, r.jsx)(c.m, {
        position: "bottom",
        align: "left",
        __unsupportedReactNodeAsText: h,
        "aria-label": f,
        forceOpen: s === o.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
        children: (0, r.jsxs)("div", {
            className: M.hl,
            children: [l, (0, r.jsxs)(u.Text, {
                className: M.iO,
                variant: "text-sm/medium",
                color: "text-strong",
                children: ["•", (0, r.jsx)("img", {
                    alt: "",
                    src: p,
                    className: M.NB
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
        handleParentClick: p,
        handleParentContextMenu: g,
        renderFollowButton: m
    } = e, b = (0, f.gU)(t, a), {
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
    }(t.type, a), _ = (0, r.jsxs)(r.Fragment, {
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
            if (t.isManaged()) return _;
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
            return null != t.linkedLobby ? (0, r.jsxs)(L, {
                channel: t,
                children: [B(b, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: _
                })]
            }) : (0, r.jsxs)(l.Fragment, {
                children: [B(b, t.type === w.rbe.GUILD_ANNOUNCEMENT ? D.intl.string(D.t.l1dkSD) : D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: _
                }), null != m ? m() : null]
            });
        case w.rbe.GUILD_VOICE:
            return (0, r.jsxs)(l.Fragment, {
                children: [B(b, D.intl.string(D.t.BVZqJl)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: _
                })]
            });
        case w.rbe.GUILD_STAGE_VOICE:
            return (0, r.jsxs)(l.Fragment, {
                children: [B(b, D.intl.string(D.t.EErMzA)), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    children: _
                })]
            });
        case w.rbe.ANNOUNCEMENT_THREAD:
        case w.rbe.PUBLIC_THREAD:
        case w.rbe.PRIVATE_THREAD:
            let j = null;
            if (!o && null != i) {
                let e = (0, f.gU)(i, a);
                j = (0, r.jsxs)(l.Fragment, {
                    children: [B(e, D.intl.string(D.t.Pnajj0)), (0, r.jsx)(T.A.Title, {
                        level: y,
                        onContextMenu: g,
                        onClick: p,
                        className: s()(M.rg, M.or),
                        children: (0, h.m1)(i, v.default, O.A)
                    }), (0, r.jsx)(T.A.Caret, {})]
                })
            }
            let x = (null == i ? void 0 : i.type) != null && w.kvI.GUILD_THREADS_ONLY.has(i.type);
            return (0, r.jsxs)(l.Fragment, {
                children: [j, B(x ? null : b, D.intl.string(D.t["7Xm5QI"])), (0, r.jsx)(T.A.Title, {
                    level: y,
                    onContextMenu: d,
                    onClick: c,
                    className: s()({
                        [M.or]: o,
                        [M.ej]: x,
                        [M.q1]: o && x
                    }),
                    children: _
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
    } = e, o = (0, a.bG)([v.default], () => v.default.getCurrentUser()), c = (0, a.bG)([v.default], () => v.default.getUser(s.getRecipientId())), u = (0, C.x)(), d = (0, a.bG)([y.A], () => null != c ? y.A.getUserProfile(c.id) : null), h = null != d && (null != (t = null == d ? void 0 : d.fetchEndedAt) ? t : 0) > 0;
    return (l.useEffect(() => {
        (null == o ? void 0 : o.isStaff()) && null != c && !c.isStaff() && (0, _.A)(c.id, c.getAvatarURL(void 0, 80), {
            dispatchWait: !0,
            withMutualGuilds: !0,
            withMutualFriendsCount: !0
        })
    }, [o, c]), s.isDM() && (null == o ? void 0 : o.isStaff()) && null != c) ? c.isStaff() ? (0, r.jsx)(p.A, {
        type: p.A.Types.STAFF_ONLY_DM
    }) : u && h && !(null != (n = null == (i = d.badges) ? void 0 : i.some(e => e.id.startsWith("staff"))) && n) ? (0, r.jsx)(p.A, {
        type: p.A.Types.NOT_STAFF_WARNING
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

function B(e, t) {
    return (0, r.jsxs)(r.Fragment, {
        children: [null !== e && (0, r.jsx)(T.A.ChannelIcon, {
            icon: e,
            "aria-hidden": !0
        }), (0, r.jsx)(u.AC4, {
            children: t
        })]
    })
}

function V(e) {
    let {
        guild: t,
        channel: n,
        caretPosition: i = "left"
    } = e, s = (0, a.bG)([j.A], () => j.A.getGuildId()), o = (0, b.lI)(), d = l.useRef(null);
    return (s === w.YYv || o) && null != t ? (0, r.jsx)(c.m, {
        asContainer: !0,
        text: t.name,
        targetElementRef: d,
        position: "bottom",
        children: (0, r.jsxs)(u.DUT, {
            onClick: () => {
                (0, A.uh)(t.id, n.id)
            },
            className: M.ED,
            children: ["left" === i && (0, r.jsx)(T.A.Caret, {
                direction: "left"
            }), (0, r.jsx)("div", {
                ref: d,
                children: (0, r.jsx)(m.A, {
                    guild: t,
                    size: m.A.Sizes.SMALLER,
                    className: M.gL,
                    active: !0
                })
            }), "right" === i && (0, r.jsx)(T.A.Caret, {
                direction: "right"
            })]
        })
    }) : null
}