/** chunk id: 112753 params = (module,exports,require) **/
i.d(t, {
    default: () => el
}), i(321073), i(142703);
var n = i(627968),
    a = i(64700),
    l = i(503698),
    o = i.n(l),
    r = i(735438),
    s = i.n(r),
    c = i(317097),
    d = i(311907),
    u = i(990078),
    h = i(732955),
    m = i(582754),
    p = i(397927),
    g = i(565645),
    _ = i(297413),
    f = i(966327),
    A = i(775602),
    T = i(793574),
    b = i(688810),
    E = i(235986),
    x = i(7584),
    I = i(478840),
    N = i(969043),
    j = i(386467),
    R = i(505527),
    v = i(211180),
    C = i(60317),
    S = i(406704),
    y = i(454719),
    O = i(657331),
    M = i(544028),
    L = i(961350),
    P = i(734057),
    k = i(696451),
    w = i(956703),
    U = i(320501),
    G = i(576705),
    D = i(994500),
    B = i(287809),
    V = i(486020),
    H = i(690521),
    z = i(562153),
    $ = i(661191),
    W = i(841549),
    F = i(649963),
    X = i(815807),
    K = i(926588),
    J = i(652215),
    Q = i(985018),
    Z = i(565430),
    q = i(885106);

function Y(e) {
    return null == e.id ? x.Ay.convertSurrogateToName(e.name) : `:${e.name}:`
}
let ee = e => {
        let {
            emoji: t,
            channelId: i,
            messageId: l
        } = e, [r, s] = a.useState(!0), [c, d] = a.useState([]), u = a.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, C.eT)(t, c[0], i, {
                emojiSize: v.x.LARGE,
                messageId: l
            });
            return (0, n.jsx)(v.A, {
                className: Z.__invalid_effect,
                effect: e,
                emojiSize: v.x.LARGE,
                onComplete: () => s(!1)
            })
        }, [c, t, i, l]);
        return a.useEffect(() => {
            let e = !1;
            return s(!0), !async function() {
                let i = await (0, H.D_)(t);
                Array.isArray(i) && i.length > 0 && !e && d(i)
            }(), () => {
                e = !0
            }
        }, [t]), (0, n.jsxs)("div", {
            className: Z.sb,
            children: [u, (0, n.jsx)(g.A, {
                className: o()(Z.h_, {
                    [Z.bD]: r
                }),
                emojiId: t.id,
                emojiName: t.name,
                animated: t.animated,
                size: "reaction"
            }), (0, n.jsx)(p.Text, {
                variant: "text-md/medium",
                children: Y(t)
            })]
        })
    },
    et = a.memo(function(e) {
        let {
            emoji: t,
            count: i,
            isSelected: l,
            setSelected: r,
            reactionType: s,
            colors: d
        } = e, h = a.useMemo(() => Y(t), [t]), m = a.useMemo(() => {
            var e, i;
            let a;
            return e = Z.Zg, i = o()(Z.Zg, Z.at), null != (a = null == t.id ? H.Ay.getURL(t.name) : V.Ay.getEmojiURL({
                id: t.id,
                animated: t.animated,
                size: 24
            })) && "" !== a ? (0, n.jsx)("img", {
                className: e,
                src: a,
                alt: t.name
            }) : (0, n.jsx)("span", {
                className: i,
                children: t.name
            })
        }, [t]), g = s === R.v.BURST, _ = g ? Q.t.VmiNjd : Q.t["cNfs1/"], f = Q.intl.formatToPlainString(_, {
            name: h,
            n: i
        }), A = a.useMemo(() => {
            let e = {};
            if (g) {
                let {
                    backgroundColor: t = "",
                    opacity: i = 1
                } = d ?? {};
                l ? (e.background = (0, c.xp)(t, i) ?? "", e.border = `1px solid ${(0,c.xp)(t,1.1*i)??""}`) : (e.background = (0, c.xp)(t, .025) ?? "", e.border = `1px solid ${(0,c.xp)(t,.05)??""}`)
            }
            return e
        }, [g, d, l]), T = a.useMemo(() => {
            let e = {};
            if (g) {
                let {
                    accentColor: t = ""
                } = d ?? {};
                e.color = t
            }
            return e
        }, [g, d]), b = a.useCallback(() => {
            r({
                emoji: t,
                reactionType: s
            })
        }, [t, s, r]);
        return (0, n.jsx)(u.m, {
            position: "left",
            __unsupportedReactNodeAsText: h,
            asContainer: !0,
            children: (0, n.jsxs)(p.DUT, {
                className: o()({
                    [Z.X_]: !l,
                    [Z.HS]: l
                }),
                "aria-label": f,
                "aria-selected": l,
                onClick: b,
                style: A,
                children: [m, (0, n.jsx)(p.Text, {
                    variant: "text-sm/bold",
                    style: T,
                    children: i
                })]
            })
        })
    });

function ei(e) {
    let {
        emoji: t,
        user: i,
        message: a,
        channel: l,
        guildId: r,
        reactionType: s,
        onRemoveReactor: c,
        clickToProfileEnabled: u
    } = e, {
        analyticsLocations: m
    } = (0, b.Ay)(T.A.MESSAGE_REACTIONS), g = (0, d.bG)([L.default], () => L.default.getId()), A = (0, d.bG)([B.default], () => B.default.getUser(i.id), [i]), x = (0, S.Id)(l), I = (0, d.bG)([G.A], () => G.A.can(J.xBc.MANAGE_MESSAGES, l) && x) || g === i.id, N = (0, d.bG)([k.Ay, P.A, D.A], () => z.Ay.getName(r, l.id, i));
    async function j() {
        await (0, y.A)(i.id, i.getAvatarURL(r ?? void 0, 80), {
            guildId: r ?? void 0,
            channelId: l.id
        }), (0, O.openUserProfileModal)({
            userId: i.id,
            guildId: r ?? void 0,
            channelId: l.id,
            messageId: a.id,
            sourceAnalyticsLocations: m
        })
    }

    function v() {
        F.et({
            channelId: l.id,
            messageId: a.id,
            emoji: t,
            location: F.qN.MESSAGE,
            userId: i.id,
            options: {
                burst: s === R.v.BURST
            }
        }), c?.()
    }
    return u ? (0, n.jsxs)(E.A, {
        className: Z.Px,
        align: E.A.Align.CENTER,
        children: [(0, n.jsx)(p.DUT, {
            className: Z.Z7,
            onClick: j,
            onContextMenu: e => (0, W.wQ)(e, i, l),
            children: (0, n.jsxs)(E.A, {
                align: E.A.Align.CENTER,
                children: [(0, n.jsx)(E.A.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    className: q.Gf,
                    children: (0, n.jsx)(f.A, {
                        "aria-hidden": !0,
                        user: A ?? i,
                        size: p._3J.SIZE_32
                    })
                }), (0, n.jsxs)(E.A.Child, {
                    className: Z.Bi,
                    children: [(0, n.jsx)(p.Text, {
                        tag: "strong",
                        variant: "text-md/medium",
                        className: Z.UU,
                        children: null != N && "" !== N && (0, n.jsx)("span", {
                            className: Z.Ci,
                            children: N
                        })
                    }), (0, n.jsx)(_.A, {
                        user: i,
                        className: null != N && "" !== N ? Z.rW : null,
                        usernameClass: o()(Z.Xh, Z.Ci),
                        discriminatorClass: Z.D2,
                        forceUsername: !0
                    })]
                })]
            })
        }), I && (0, n.jsx)("div", {
            className: Z.TF,
            children: (0, n.jsx)(h.K0, {
                onClick: v,
                "aria-label": Q.intl.string(Q.t["+BdaDn"]),
                icon: p.PGe,
                size: "sm",
                variant: "icon-only"
            })
        })]
    }) : (0, n.jsxs)(E.A, {
        className: Z.Px,
        onContextMenu: e => (0, W.wQ)(e, i, l),
        align: E.A.Align.CENTER,
        tabIndex: 0,
        "aria-label": i.username,
        children: [(0, n.jsx)(E.A.Child, {
            wrap: !0,
            grow: 0,
            shrink: 0,
            className: q.Gf,
            children: (0, n.jsx)(f.A, {
                user: A ?? i,
                size: p._3J.SIZE_32
            })
        }), (0, n.jsxs)(E.A.Child, {
            className: Z.Bi,
            children: [(0, n.jsx)(p.Text, {
                tag: "strong",
                variant: "text-md/medium",
                className: Z.UU,
                children: null != N && "" !== N && (0, n.jsx)("span", {
                    className: Z.Ci,
                    children: N
                })
            }), (0, n.jsx)(_.A, {
                user: i,
                className: null != N && "" !== N ? Z.rW : null,
                usernameClass: o()(Z.Xh, Z.Ci),
                discriminatorClass: Z.D2,
                forceUsername: !0
            })]
        }), I && (0, n.jsx)("div", {
            className: Z.TF,
            children: (0, n.jsx)(h.K0, {
                onClick: v,
                "aria-label": Q.intl.string(Q.t["+BdaDn"]),
                icon: p.PGe,
                size: "sm",
                variant: "icon-only"
            })
        })]
    })
}
class en extends a.PureComponent {
    scrollerRef = a.createRef();
    state = {
        lastId: null,
        loadingMore: !0
    };
    componentDidMount() {
        this.loadMore()
    }
    componentDidUpdate(e) {
        s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType || this.setState({
            lastId: null,
            loadingMore: !1
        }, () => this.loadMore())
    }
    handleScroll = () => {
        let {
            current: e
        } = this.scrollerRef;
        if (null == e) return;
        let t = e.getScrollerState();
        t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    };
    loadMore() {
        let {
            message: e,
            reaction: t,
            reactionType: i
        } = this.props, {
            lastId: n
        } = this.state;
        this.setState({
            loadingMore: !0
        }), F.ao({
            channelId: e.getChannelId(),
            messageId: e.id,
            emoji: t.emoji,
            limit: J.WxW,
            after: n,
            type: i
        }).then(e => this.setState({
            loadingMore: !1,
            lastId: e[e.length - 1]?.id
        }))
    }
    renderSection() {
        return null
    }
    getRowHeight = (e, t) => {
        let {
            reactors: i
        } = this.props;
        return 1 === e ? 52 * (0 === t) : 52 * (0 === e && (0 === t && 0 === i.length || null != this.props.reactors[t]))
    };
    renderRow = e => {
        let {
            section: t,
            row: i
        } = e, {
            message: a,
            guildId: l,
            channel: o,
            reaction: r,
            reactors: s,
            reactionType: c,
            clickToProfileEnabled: d
        } = this.props, u = s[i];
        return 1 === t ? 0 === i ? (0, n.jsx)(p.y$y, {
            className: Z.u1
        }, "hasMore") : null : 0 === s.length && this.state.loadingMore ? (0, n.jsx)(p.y$y, {
            className: Z.u1
        }, "loadingMore") : null != u && (0, n.jsx)(ei, {
            message: a,
            emoji: r.emoji,
            guildId: l,
            channel: o,
            user: u,
            reaction: r,
            reactionType: c,
            clickToProfileEnabled: d
        }, u.id)
    };
    render() {
        let {
            hasMore: e,
            reactors: t,
            reaction: i,
            message: a,
            reactionType: l
        } = this.props, o = [];
        return 0 === t.length && this.state.loadingMore ? o.push(1) : (o.push(t.length), e && o.push(1)), (0, n.jsxs)("div", {
            className: Z.Ro,
            children: [l === R.v.BURST && (0, n.jsx)(ee, {
                emoji: i.emoji,
                channelId: a.getChannelId(),
                messageId: a.id
            }), (0, n.jsx)(p.Eie, {
                className: Z.OV,
                fade: !0,
                ref: this.scrollerRef,
                sections: o,
                sectionHeight: 0,
                rowHeight: this.getRowHeight,
                renderRow: this.renderRow,
                renderSection: this.renderSection,
                onScroll: e ? this.handleScroll : void 0
            })]
        })
    }
}
let ea = d.Ay.connectStores([w.A], e => {
    let {
        message: t,
        reaction: i,
        reactionType: n
    } = e, a = w.A.getReactions(t.getChannelId(), t.id, i.emoji, J.WxW, n);
    if (null == a) return {
        reactors: [],
        hasMore: !1
    };
    let l = Array.from(a.values()),
        o = (n === R.v.BURST ? i.burst_count : i.count) > l.length;
    return {
        reactors: l,
        hasMore: o
    }
})(en);

function el(e) {
    let {
        message: t,
        selectedReaction: i,
        onClose: l,
        transitionState: o,
        "aria-label": r = Q.intl.string(Q.t.gHp0C4)
    } = e, s = (0, d.bG)([P.A], () => P.A.getChannel(t.getChannelId())), c = s?.getGuildId(), {
        enabled: u
    } = K.y.useConfig({
        location: "MessageReactions"
    }), g = (0, d.bG)([U.A, N.A], () => {
        let e = U.A.getMessage(t.getChannelId(), t.id) ?? N.A.getMessage($.default.castMessageIdAsChannelId(t.id))?.firstMessage;
        return null != e ? e.reactions : []
    }, [t]), _ = a.useMemo(() => {
        let e = [];
        return g.forEach(t => {
            t.burst_count > 0 && e.push({
                ...t,
                count: 0
            }), t.count > 0 && e.push({
                ...t,
                burst_count: 0
            })
        }), e.sort((e, t) => {
            let i = e.burst_count > 0 ? e.burst_count : e.count;
            return (t.burst_count > 0 ? t.burst_count : t.count) - i
        }), e
    }, [g]), f = _[0], [T, b] = function(e, t, i) {
        let [n, l] = a.useState(e ?? t);
        return a.useEffect(() => {
            null != n && null == i.find(e => {
                let t = null != e.me_vote ? R.v.VOTE : e.burst_count > 0 ? R.v.BURST : R.v.NORMAL,
                    i = (0, X.i6)(e.emoji, n.emoji),
                    a = t === n.reactionType;
                return i && a
            }) && l(t)
        }, [n, l, i, t]), [n, l]
    }(i, null != f ? {
        emoji: f.emoji,
        reactionType: f.burst_count > 0 ? R.v.BURST : R.v.NORMAL
    } : null, _), E = a.useMemo(() => null == T ? null : g.find(e => (0, X.i6)(e.emoji, T.emoji)) ?? null, [g, T]), x = (0, d.bG)([A.A], () => A.A.saturation), v = (0, d.bG)([M.A], () => (0, m.Mw)(M.A.theme));
    if (a.useEffect(() => {
            (0 === g.length || null == T && null == E) && setImmediate(l)
        }, [l, g.length, E, T]), null == T || null == E) return (0, n.jsx)(p.y$y, {});
    if (null == s) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, n.jsx)(j.A.Provider, {
        value: c ?? void 0,
        children: (0, n.jsxs)(h.dWK, {
            transitionState: o,
            size: "md",
            onClose: l,
            "aria-label": r,
            children: [(0, n.jsx)(h.rQ0, {
                title: Q.intl.string(Q.t.gHp0C4)
            }), (0, n.jsx)("div", {
                className: Z.jH
            }), (0, n.jsxs)("div", {
                className: Z.kL,
                children: [(0, n.jsx)(p.HOs, {
                    className: Z.XG,
                    fade: !0,
                    children: _.map(e => {
                        let t = e.burst_count > 0;
                        return (0, n.jsx)(et, {
                            isSelected: eo(T, e, t ? R.v.BURST : R.v.NORMAL),
                            setSelected: b,
                            reactionType: t ? R.v.BURST : R.v.NORMAL,
                            emoji: e.emoji,
                            count: t ? e.burst_count : e.count,
                            colors: null != e.burst_colors ? (0, I.V)(e.burst_colors, x, v) : void 0
                        }, `${t?"burst-":"normal-"}${e.emoji.id??""}:${e.emoji.name}`)
                    })
                }), (0, n.jsx)(ea, {
                    message: t,
                    reaction: E,
                    guildId: c,
                    channel: s,
                    reactionType: T.reactionType,
                    clickToProfileEnabled: u
                })]
            })]
        })
    })
}
let eo = (e, t, i) => s().isEqual(e.emoji, t.emoji) && e.reactionType === i