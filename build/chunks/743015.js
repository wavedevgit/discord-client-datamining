/** chunk id: 743015, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => V
}), n(896048), n(321073), n(864466), n(443073);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(554146),
    c = n(827734),
    d = n(3026),
    u = n(990078),
    h = n(397927),
    p = n(442433),
    f = n(826673),
    _ = n(721592),
    m = n(35275),
    g = n(166444),
    x = n(46054),
    b = n(454058),
    A = n(976860),
    C = n(138298),
    j = n(323443),
    O = n(863005),
    v = n(637248),
    y = n(329255),
    N = n(197843),
    w = n(915644),
    I = n(652215),
    S = n(746080),
    E = n(650583),
    P = n(985018),
    D = n(282627),
    R = n(206314);

function T(e) {
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
}

function L(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let k = new Set([I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA]),
    H = new Set([I.rbe.GUILD_VOICE, I.rbe.GUILD_STAGE_VOICE]);

function M(e) {
    let {
        guild: t,
        channel: r,
        onCategoryClick: i
    } = e, s = (0, N.Rg)(t.id, r.id, r.id), o = (0, N.eK)(t.id, r.id, r.id);
    return (0, l.jsxs)("div", {
        className: a()(D.Fv, {
            [D.d0]: "null" === r.id
        }),
        onContextMenu: e => {
            (0, p.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("75149"), n.e("53378")]).then(n.bind(n, 725756));
                return n => (0, l.jsx)(e, L(T({}, n), {
                    channel: r,
                    guild: t
                }))
            })
        },
        children: [(0, l.jsx)(h.Text, {
            className: D.O1,
            color: "text-strong",
            variant: "text-lg/medium",
            lineClamp: 1,
            children: r.name
        }), "null" !== r.id && !o && (0, l.jsx)("div", {
            children: (0, l.jsx)(h.dOG, {
                label: P.intl.string(P.t.mSQwnW),
                checked: s,
                onChange: () => void(!o && i(t.id, r.id, r.id))
            })
        })]
    })
}
let G = r.memo(function() {
        return (0, l.jsx)("div", {
            className: D.me
        })
    }),
    B = r.memo(function(e) {
        let {
            index: t
        } = e;
        return (0, l.jsx)(h.Text, {
            variant: "text-xs/normal",
            className: D.Ks,
            children: "\xb7"
        }, "separator-".concat(t))
    }),
    U = r.memo(function(e) {
        let t, {
                channel: r,
                category: i,
                guild: o,
                isFirstChannel: f,
                isLastChannel: y,
                onChannelClick: w,
                tooltipDirection: M = "right"
            } = e,
            {
                isSubscriptionGated: U
            } = (0, _.A)(r.id),
            V = (0, N.Rg)(o.id, r.id, i.id),
            F = (0, N.eK)(o.id, r.id, i.id),
            W = (0, N.v)(o.id, i.id),
            q = (0, s.bG)([O.A], () => O.A.getActiveThreadCount(o.id, r.id)),
            K = (0, s.bG)([b.A], () => b.A.shouldIndicateNewChannel(o.id, r.id)),
            Z = (t = [], I.kvI.GUILD_THREADS_ONLY.has(r.type) && q >= 1 && t.push((0, l.jsx)(h.Text, {
                variant: "text-xs/normal",
                className: D.qy,
                children: P.intl.format(P.t.z0qML2, {
                    count: q
                })
            }, "thread-count")), H.has(r.type) || t.push((0, l.jsx)(h.Text, {
                variant: "text-xs/normal",
                className: D.qy,
                children: (0, v.YC)(r.id)
            }, "active")), null != r.topic && r.topic.length > 0 && t.push((0, l.jsx)(d.A, {
                className: R.PT,
                children: (0, l.jsx)(h.Text, {
                    className: D.At,
                    variant: "text-xs/normal",
                    children: x.A.parseTopic(r.topic, !0, {
                        channelId: r.id
                    })
                })
            }, "topic")), [t.map((e, t) => [e, (0, l.jsx)(B, {
                index: t
            }, "subtitle-separator-".concat(t))])].flat(2).slice(0, -1)),
            Y = e => ((e.stopPropagation(), k.has(r.type) || e.shiftKey) ? (0, A.uh)(o.id, r.id) : r.isGuildStageVoice() || r.isGuildVoice() ? (0, j.av)(r) : C.A.openChannelAsSidebar({
                guildId: r.guild_id,
                channelId: r.id,
                baseChannelId: S.VV.CHANNEL_BROWSER
            }), !0),
            z = P.intl.string(P.t.vetGQs);
        r.isGuildStageVoice() || r.isGuildVoice() ? z = P.intl.string(P.t.VJlc0S) : r.isForumLikeChannel() && (z = P.intl.string(P.t["3xjX0U"]));
        let J = F ? "text-muted" : "text-default",
            X = (0, h.rdh)(F ? c.A.colors.TEXT_MUTED : c.A.colors.TEXT_DEFAULT).hex();
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.m, {
                text: W,
                delay: 500,
                position: M,
                children: (0, l.jsxs)(h.DUT, {
                    className: a()(D.WG, {
                        [D.Qn]: f,
                        [D.wp]: y,
                        [D.r9]: F
                    }),
                    onClick: e => {
                        if (!F) return e.stopPropagation(), w(o.id, r.id, i.id), !0
                    },
                    onContextMenu: e => {
                        r.isGuildVocal() ? (0, p.L3)(e, async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(n.bind(n, 698193));
                            return t => (0, l.jsx)(e, L(T({}, t), {
                                channel: r,
                                guild: o
                            }))
                        }) : (0, p.L3)(e, async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(n.bind(n, 370372));
                            return t => (0, l.jsx)(e, L(T({}, t), {
                                channel: r,
                                guild: o
                            }))
                        })
                    },
                    children: [(0, l.jsxs)("div", {
                        className: D.yW,
                        children: [(0, l.jsxs)("div", {
                            className: D.HA,
                            children: [(0, l.jsx)(g.gm, {
                                channel: r,
                                guild: o
                            }), (0, l.jsx)(d.A, {
                                className: D.__invalid_name,
                                children: (0, l.jsx)(h.Text, {
                                    className: D.be,
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    color: J,
                                    children: r.name
                                })
                            }), U ? (0, l.jsx)(m.A, {
                                color: X,
                                className: D.PC
                            }) : null, K ? (0, l.jsx)(h.LpS, {
                                text: P.intl.string(P.t.y2b7CA),
                                color: c.A.unsafe_rawColors.BRAND_260.css,
                                className: D.wD
                            }) : null]
                        }), (0, l.jsx)("div", {
                            className: D.Ze,
                            children: Z
                        })]
                    }), (0, l.jsxs)("div", {
                        className: D.tN,
                        children: [(0, l.jsx)("div", {
                            className: D.Kx,
                            children: (0, l.jsx)(h.Button, {
                                size: "sm",
                                variant: "overlay-primary",
                                onClick: Y,
                                text: z,
                                onKeyDown: e => {
                                    (e.key === E.dh.ENTER || e.key === E.dh.SPACE) && (e.preventDefault(), e.stopPropagation(), Y(e))
                                }
                            })
                        }), (0, l.jsx)(h.P7L, {
                            checked: V,
                            disabled: F
                        })]
                    })]
                })
            }), !y && (0, l.jsx)(G, {})]
        })
    });

function V(e) {
    let {
        categories: t,
        guild: n,
        className: i,
        innerClassName: s,
        hasSidebar: c
    } = e, {
        onChannelClick: d
    } = (0, y.A)(n.id), u = (0, f.JZ)(o.M.CHANNEL_BROWSER_NUX) ? 0 : -1, p = r.useCallback(e => {
        let {
            section: r
        } = e;
        if (0 === r && -1 === u) return null;
        let i = t._categories[r + u];
        return (0, l.jsx)(M, {
            channel: i.channel,
            guild: n,
            onCategoryClick: d
        }, i.channel.id)
    }, [t, n, u, d]), _ = r.useCallback(e => {
        let {
            section: r,
            row: i
        } = e;
        if (0 === r && -1 === u) return (0, l.jsx)(w.A, {
            guild: n
        });
        let a = t._categories[r + u],
            s = t[a.channel.id][i];
        return null == s ? null : (0, l.jsx)(U, {
            category: a.channel,
            channel: s.channel,
            guild: n,
            isFirstChannel: 0 === i,
            isLastChannel: t[a.channel.id].length - 1 === i,
            tooltipDirection: c ? "right" : "top",
            onChannelClick: d
        }, s.channel.id)
    }, [t, n, u, c, d]), m = (0, w.C)(n.id), g = (0, v.zH)(n.id, t, 64, m);
    return (0, l.jsx)(h.Eie, {
        className: i,
        innerClassName: a()(s, D.bv),
        sectionHeight: 48,
        rowHeight: e => g[e].rowHeight,
        renderSection: p,
        renderRow: _,
        sections: g.map(e => e.rowCount)
    }, "channel-browser-list")
}