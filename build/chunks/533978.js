/** Chunk was on 1113 **/
/** chunk id: 533978, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(621956),
    o = n(265872),
    c = n(442433),
    u = n(688810),
    d = n(384059),
    h = n(480890),
    p = n(160761),
    g = n(421773),
    f = n(536432),
    m = n(674168),
    b = n(989799),
    A = n(173660),
    y = n(430452),
    O = n(246356),
    _ = n(709562),
    x = n(376086),
    j = n(985018);

function v(e) {
    let {
        channel: t,
        themeable: v,
        whichPopoutIsOpen: E,
        setWhichPopoutIsOpen: C
    } = e, {
        parentAnalyticsLocation: S
    } = (0, u.Ay)(), {
        Component: I,
        play: N,
        events: {
            onMouseEnter: T,
            onMouseLeave: P
        }
    } = (0, a.E)(), w = t.getGuildId(), {
        mute: R,
        suppress: D
    } = (0, A.A)(t), L = (0, i.bG)([y.A], () => y.A.isDeaf()), M = R || D || L, k = (0, f.VE)({
        isSoundboardButtonDisabled: M
    }), [G, U] = (0, p.DP)(k), {
        analyticsLocations: V
    } = (0, u.Ay)(), {
        isHovered: B,
        setIsHovered: H,
        onMouseEnter: F,
        onMouseLeave: K
    } = (0, g.A)(200, 300);

    function Y(e) {
        null != w && (0, c.L3)(e, async () => {
            let {
                default: e
            } = await n.e("51111").then(n.bind(n, 323002));
            return t => {
                var n, l;
                return (0, r.jsx)(e, (n = function(e) {
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
                }({
                    guildId: w,
                    sourceAnalyticsLocations: V
                }, t), l = l = {
                    onInteraction: (0, h.s)("SoundboardContextMenu", S)
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
            }
        })
    }

    function W() {
        (0, d.X)(S, d.O.SOUNDBOARD), E === x.P.SOUNDBOARD ? (null == C || C(void 0), K()) : (null != E ? (N(), F()) : N(), null == C || C(x.P.SOUNDBOARD))
    }
    let z = l.useRef(null);
    return (0, r.jsx)(o.Y, {
        targetElementRef: z,
        shouldShow: B && (E === x.P.SOUNDBOARD || null == E) || E === x.P.SOUNDBOARD,
        animation: o.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            H(!1), null == C || C(void 0)
        },
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return M ? null : (0, r.jsx)(O.A, {
                children: (0, r.jsx)("div", {
                    onMouseEnter: F,
                    onMouseLeave: K,
                    children: (0, r.jsx)(b.A, {
                        guildId: w,
                        channel: t,
                        onClose: n,
                        gridNotice: G === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(m.m, {
                            onClose: n,
                            markAsDismissed: U
                        }),
                        analyticsSource: "action bar button"
                    })
                })
            })
        },
        children: () => (0, r.jsx)(_.l, {
            ref: z,
            isTrayButton: !0,
            themeable: v,
            label: R ? j.intl.string(j.t["Ox4/zU"]) : D ? j.intl.string(j.t["+YBKYI"]) : L ? j.intl.string(j.t.X1lQli) : void 0,
            iconComponent: I,
            disabled: M,
            onContextMenu: Y,
            onClick: W,
            onMouseEnter: e => {
                T(), "focus" !== e.type && F()
            },
            onMouseLeave: () => {
                null == E && (K(), P())
            },
            isActive: B || E === x.P.SOUNDBOARD,
            color: B || E === x.P.SOUNDBOARD ? "primaryDark" : void 0
        })
    })
}