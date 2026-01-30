/** chunk id: 357746, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(793574),
    u = n(652793),
    d = n(186111),
    h = n(942975),
    p = n(379229),
    g = n(489306),
    f = n(828162),
    m = n(249584),
    b = n(49999),
    A = n(333354),
    y = n(985018),
    O = n(408392);

function _(e) {
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
}

function j(e) {
    let {
        indicator: t
    } = e;
    if (null == t) return null;
    switch (t.type) {
        case p.cD.WARNING:
            return (0, r.jsx)(o.EpV, {
                color: o.LU0.colors.STATUS_WARNING,
                size: "sm"
            });
        case p.cD.UNREAD:
            return (0, r.jsx)(o.hVq, {
                count: t.count,
                color: o.LU0.colors.BACKGROUND_MOD_STRONG.css
            });
        default:
            return null
    }
}
let x = {
        animation: {
            BEG: 0,
            END: 75
        },
        LOOP: {
            BEG: 76,
            END: 376
        }
    },
    v = l.memo(function(e) {
        let {
            guildId: t,
            selected: i
        } = e, v = (0, g.Ay)(t), E = l.useCallback(() => {
            var e;
            (0, h.Zm)(t), (0, f.A)(t, c.A.GUILD_POWERUPS_CHANNEL_LIST_ROW), null == v || null == (e = v.popout) || e.markAsDismissed(b.i.INDIRECT_ACTION)
        }, [t, v]), C = l.useRef(null), S = (0, o.red)(o.DXt), I = (0, a.bG)([d.A], () => d.A.hasLayers()), N = S || I, T = l.useCallback(() => {
            var e;
            if ((null == v ? void 0 : v.popout) == null || N) return null;
            switch (null == v || null == (e = v.popout) ? void 0 : e.type) {
                case p.o.LEVEL_REACHED:
                    return (0, r.jsx)(m.HW, _({
                        guildId: t,
                        channelRowRef: C
                    }, v.popout));
                case p.o.PERKS_AVAILABLE:
                    return (0, r.jsx)(m.UB, _({
                        guildId: t,
                        channelRowRef: C
                    }, v.popout));
                case p.o.PERKS_PURCHASABLE:
                    return (0, r.jsx)(m.lw, _({
                        guildId: t,
                        channelRowRef: C
                    }, v.popout));
                case p.o.NEW_PERK_AVAILABLE:
                    return (0, r.jsx)(m.bo, _({
                        guildId: t,
                        channelRowRef: C
                    }, v.popout));
                case p.o.GAME_SERVER_HOSTING_AVAILABLE:
                case p.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                    return (0, r.jsx)(m.jz, _({
                        guildId: t,
                        channelRowRef: C
                    }, v.popout));
                default:
                    return (0, r.jsx)("div", {})
            }
        }, [t, null == v ? void 0 : v.popout, C, N]), [P, w] = l.useState(null);
        l.useEffect(() => {
            (null == v ? void 0 : v.popout) == null && w(null)
        }, [null == v ? void 0 : v.popout]);
        let R = l.useCallback(e => {
            w(e)
        }, []);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.G, {
                ref: C,
                className: O.kL,
                id: "skill-trees-".concat(t),
                renderIcon: e => (0, r.jsx)(o._Jp, {
                    size: "md",
                    className: e,
                    color: "currentColor"
                }),
                background: (null == v ? void 0 : v.popout) != null && (0, r.jsx)("div", {
                    className: O.Fi,
                    children: (0, r.jsx)(o.tvC, {
                        nextScene: null == P ? "animation" : "LOOP",
                        className: O.UU,
                        sceneSegments: x,
                        importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                        onScenePlay: R,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice"
                        }
                    })
                }),
                text: (0, r.jsx)("span", {
                    className: s()({
                        [O.A7]: (null == v ? void 0 : v.showUnread) === !0
                    }),
                    children: y.intl.string(A.default.yv3DJJ)
                }),
                selected: i,
                onClick: E,
                showUnread: (null == v ? void 0 : v.showUnread) === !0,
                trailing: (0, r.jsx)(j, {
                    indicator: null == v ? void 0 : v.indicator
                })
            }), T()]
        })
    })