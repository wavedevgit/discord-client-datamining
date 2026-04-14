/** chunk id: 543274 params = (module,exports,require) **/
n.d(t, {
    K: () => y
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(990078),
    o = n(397927),
    d = n(155718),
    c = n(933958),
    u = n(404522),
    h = n(782091),
    A = n(641703),
    _ = n(807067),
    m = n(521588),
    p = n(688810),
    g = n(975412),
    f = n(384059),
    E = n(379848),
    x = n(267102),
    I = n(421773),
    C = n(168754),
    N = n(376086),
    T = n(652215),
    S = n(49999),
    b = n(985018);

function y(e) {
    let {
        channel: t,
        idle: n,
        whichPopoutIsOpen: y,
        setWhichPopoutIsOpen: v
    } = e, R = (0, s.bG)([c.Ay], () => c.Ay.isLaunchingActivity()), j = (0, h.et)(t.id), O = (0, h.dL)(j), L = j !== h.xy.CAN_LAUNCH || R, {
        isHovered: M,
        setIsHovered: D,
        onMouseEnter: U,
        onMouseLeave: G
    } = (0, I.A)(200, 300), P = (0, u.b)({
        surface: d.YI.VOICE_LAUNCHER
    }), k = (0, s.bG)([c.Ay], () => null != c.Ay.getSelfEmbeddedActivityForLocation(c.Ay.getConnectedActivityLocation())), w = !L, B = l.useCallback(e => {
        "focus" !== e.type && U()
    }, [U]), V = (0, x.Us)() === T.BRT.POPOUT, {
        parentAnalyticsLocation: H,
        newestAnalyticsLocation: F
    } = (0, p.Ay)(), W = l.useCallback(() => {
        (0, f.X)(H, f.O.ACTIVITY), (0, g.A)({
            context: null != t ? {
                type: "channel",
                channel: t
            } : {
                type: "contextless"
            },
            openInPopout: V,
            analyticsLocation: F
        })
    }, [t, V, F, H]), K = [];
    L || K.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES), (0, A.A)(t.id) && !L && K.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE), L || K.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let Y = l.useRef(!1),
        z = l.useRef(null);
    return (0, i.jsx)(E.Ay, {
        contentTypes: K,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: s
            } = e, d = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !M;
            return Y.current && !d && s(S.i.AUTO_DISMISS), Y.current !== d && (Y.current = d), (0, i.jsx)(o.YNO, {
                targetElementRef: z,
                fixed: !0,
                shouldShow: M && (y === N.P.ACTIVITY || null == y),
                animation: o.YNO.Animation.FADE,
                animationPosition: "top",
                position: "top",
                align: "center",
                spacing: 16,
                onRequestClose: () => {
                    D(!1), v?.(void 0)
                },
                renderPopout: e => {
                    let {
                        closePopout: n,
                        setPopoutRef: l
                    } = e;
                    return w ? (0, i.jsx)(_.f, {
                        ref: e => {
                            l?.(e)
                        },
                        channel: t,
                        closePopout: n,
                        onMouseEnter: U,
                        onMouseLeave: G,
                        isHovered: M,
                        onClick: () => s(S.i.UNKNOWN)
                    }) : (0, i.jsx)(i.Fragment, {})
                },
                children: () => (0, i.jsx)(E.GY, {
                    contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                    latestVersion: P,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: n
                        } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r.m, {
                                text: b.intl.string(b.t.P8vmUv),
                                forceOpen: !0,
                                shouldShow: d,
                                children: (0, i.jsx)("div", {
                                    ref: z,
                                    children: (0, i.jsx)(C.A, {
                                        disabled: L,
                                        "aria-label": O,
                                        label: w ? void 0 : O,
                                        isActivityActive: k,
                                        onClick: () => {
                                            W(), (l === a.M.ACTIVITIES_MINI_SHELF_SPARKLES || l === a.M.ACTIVITY_GDM_ROCKET_SPARKLE || l === a.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === a.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && s(S.i.TAKE_ACTION), t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(S.i.TAKE_ACTION)
                                        },
                                        onMouseEnter: B,
                                        onMouseLeave: G
                                    })
                                })
                            }), t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, i.jsx)(m.a, {
                                top: 2,
                                right: 2,
                                size: 6
                            }) : null]
                        })
                    }
                })
            })
        }
    })
}