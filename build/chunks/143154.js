/** Chunk was on 98063 **/
/** chunk id: 143154, original params: e,l,a (module,exports,require) **/
a.d(l, {
    default: () => w
}), a(228524), a(321073);
var i = a(627968),
    n = a(64700),
    t = a(158954),
    s = a(311907),
    o = a(397927),
    r = a(565645),
    c = a(713654),
    d = a(573435),
    u = a(915089),
    m = a(508675),
    _ = a(7584),
    h = a(263063),
    x = a(714991),
    j = a(976860),
    p = a(734057),
    N = a(71393),
    g = a(576705),
    b = a(147925),
    A = a(954571),
    C = a(447696),
    E = a(684407),
    f = a(547716),
    v = a(652215),
    y = a(818348),
    I = a(985018),
    k = a(486856);
let T = e => {
        var l;
        let {
            channelData: a,
            onClose: n,
            trackOptionClick: t
        } = e, d = (0, s.bG)([p.A], () => p.A.getChannel(a.channel_id)), u = (0, s.bG)([g.A], () => null != d && g.A.can(y.xB.VIEW_CHANNEL, d)), h = (0, s.bG)([m.Ay], () => null != a.emoji_id ? m.Ay.getCustomEmojiById(a.emoji_id) : null, [a.emoji_id]), x = null != a.emoji_name ? _.Ay.getByName(_.Ay.convertSurrogateToName(a.emoji_name, !1)) : null, N = null != (l = (0, c.gU)(d)) ? l : o.N$i;
        return null != d && u ? (0, i.jsxs)(o.DUT, {
            className: k.NV,
            onClick: () => {
                t(), n(), (0, j.uh)(d.guild_id, d.id)
            },
            children: [null != h || null != x ? (0, i.jsx)(r.A, {
                emojiName: null != a.emoji_id ? null == h ? void 0 : h.name : a.emoji_name,
                animated: null != h && h.animated,
                emojiId: null == h ? void 0 : h.id,
                autoplay: !0,
                className: k.oK
            }) : (0, i.jsx)(N, {
                className: k.p
            }), (0, i.jsxs)("div", {
                className: k.uP,
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: k.I0,
                    children: a.description
                }), (0, i.jsxs)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: [(0, i.jsx)(N, {
                        className: k.nO,
                        size: "xxs",
                        color: "currentColor"
                    }), (0, i.jsx)("span", {
                        children: d.name
                    })]
                })]
            }), (0, i.jsx)(b.A, {
                direction: b.A.Directions.RIGHT,
                className: k.R_
            })]
        }) : null
    },
    w = e => {
        var l;
        let {
            onClose: a,
            transitionState: r,
            guildId: c,
            isPreview: m
        } = e, _ = (0, s.bG)([N.A], () => N.A.getGuild(c)), {
            welcomeScreen: j,
            fetching: p,
            hasError: g
        } = (0, s.cf)([E.A], () => ({
            welcomeScreen: E.A.get(c),
            fetching: E.A.isFetching(),
            hasError: E.A.hasError()
        })), b = (0, u.GV)();
        n.useEffect(() => {
            null == j && (0, C.Fy)(c)
        }, [c, j]), n.useEffect(() => {
            !1 === p && !0 === g && null == j && a()
        }, [p, g, a, j]), n.useEffect(() => {
            j === E.E && !1 === p && a()
        }, [a, j, p]), n.useEffect(() => {
            !0 !== m && A.default.track(v.HAw.OPEN_MODAL, {
                type: f.H,
                guild_id: c
            })
        }, [c, m]);
        let y = n.useCallback(e => {
            var l;
            if (null == j || !0 === m) return;
            let a = [],
                i = [],
                n = !1;
            null == (l = j.welcome_channels) || l.forEach(e => {
                a.push(e.description), i.push(e.channel_id), null != e.emoji_id && (n = !0)
            }), A.default.track(v.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                index: e,
                guild_id: c,
                options: a,
                options_channel_ids: i,
                guild_description: j.description,
                has_custom_emojis: n
            })
        }, [c, m, j]);
        return null == _ ? null : null == j ? (0, i.jsx)(t.Modal, {
            transitionState: r,
            "aria-label": I.intl.string(I.t.ZTNur7),
            title: I.intl.string(I.t.ZTNur7),
            onClose: () => Promise.resolve(a()),
            actions: [],
            children: (0, i.jsx)(o.y$y, {
                type: o.y$y.Type.SPINNING_CIRCLE
            })
        }) : (0, i.jsx)(t.Modal, {
            transitionState: r,
            "aria-labelledby": b,
            actions: [{
                text: I.intl.string(I.t.jizr82),
                onClick: a,
                variant: "secondary"
            }],
            title: I.intl.string(I.t["3iCBUn"]),
            onClose: () => Promise.resolve(a()),
            children: (0, i.jsxs)("div", {
                className: k.jE,
                children: [(0, i.jsx)(d.Ay, {
                    mask: d.Ay.Masks.SQUIRCLE,
                    width: 64,
                    height: 64,
                    className: k.$f,
                    children: (0, i.jsx)(h.A, {
                        size: h.A.Sizes.LARGER,
                        guild: _,
                        active: !0,
                        animate: !0,
                        tabIndex: -1
                    })
                }), (0, i.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    className: k.wx,
                    id: b,
                    children: I.intl.format(I.t["0aydCN"], {
                        guildName: _.name,
                        guildNameHook: (e, l) => (0, i.jsxs)("span", {
                            children: [(0, i.jsx)(x.A, {
                                guild: _,
                                className: k.eZ,
                                flowerStarClassName: k.mP,
                                tooltipColor: o.STz.Colors.PRIMARY
                            }), (0, i.jsx)("strong", {
                                className: k.aC,
                                children: e
                            })]
                        }, l)
                    })
                }), null != j.description ? (0, i.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: k.eF,
                    children: j.description
                }) : null, (0, i.jsx)(o.Heading, {
                    variant: "heading-sm/semibold",
                    className: k.XU,
                    children: I.intl.string(I.t["haj5+i"])
                }), (0, i.jsx)("div", {
                    className: k.fF,
                    children: null == (l = j.welcome_channels) ? void 0 : l.map((e, l) => (0, i.jsx)(T, {
                        channelData: e,
                        trackOptionClick: () => y(l),
                        onClose: a
                    }, "".concat(e.channel_id, "-").concat(l)))
                })]
            })
        })
    }