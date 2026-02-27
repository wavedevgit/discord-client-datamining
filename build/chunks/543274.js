/** chunk id: 543274, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => y
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(990078),
    o = n(397927),
    c = n(155718),
    d = n(933958),
    u = n(404522),
    h = n(782091),
    A = n(641703),
    p = n(807067),
    m = n(521588),
    g = n(688810),
    _ = n(975412),
    f = n(384059),
    x = n(379848),
    C = n(267102),
    E = n(421773),
    I = n(168754),
    N = n(376086),
    b = n(652215),
    S = n(49999),
    T = n(985018);

function y(e) {
    let {
        channel: t,
        idle: n,
        whichPopoutIsOpen: y,
        setWhichPopoutIsOpen: v
    } = e, j = (0, l.bG)([d.Ay], () => d.Ay.isLaunchingActivity()), R = (0, h.et)(t.id), O = (0, h.dL)(R), L = R !== h.xy.CAN_LAUNCH || j, {
        isHovered: M,
        setIsHovered: D,
        onMouseEnter: G,
        onMouseLeave: U
    } = (0, E.A)(200, 300), P = (0, u.b)({
        surface: c.YI.VOICE_LAUNCHER
    }), w = (0, l.bG)([d.Ay], () => null != d.Ay.getSelfEmbeddedActivityForLocation(d.Ay.getConnectedActivityLocation())), k = !L, B = s.useCallback(e => {
        "focus" !== e.type && G()
    }, [G]), V = (0, C.Us)() === b.BRT.POPOUT, {
        parentAnalyticsLocation: H,
        newestAnalyticsLocation: F
    } = (0, g.Ay)(), K = s.useCallback(() => {
        (0, f.X)(H, f.O.ACTIVITY), (0, _.A)({
            context: null != t ? {
                type: "channel",
                channel: t
            } : {
                type: "contextless"
            },
            openInPopout: V,
            analyticsLocation: F
        })
    }, [t, V, F, H]), W = [];
    L || W.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES), (0, A.A)(t.id) && !L && W.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE), L || W.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let Y = s.useRef(!1),
        z = s.useRef(null);
    return (0, i.jsx)(x.Ay, {
        contentTypes: W,
        children: e => {
            let {
                visibleContent: s,
                markAsDismissed: l
            } = e, c = s === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !M;
            return Y.current && !c && l(S.i.AUTO_DISMISS), Y.current !== c && (Y.current = c), (0, i.jsx)(o.YNO, {
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
                        setPopoutRef: s
                    } = e;
                    return k ? (0, i.jsx)(p.f, {
                        ref: e => {
                            s?.(e)
                        },
                        channel: t,
                        closePopout: n,
                        onMouseEnter: G,
                        onMouseLeave: U,
                        isHovered: M,
                        onClick: () => l(S.i.UNKNOWN)
                    }) : (0, i.jsx)(i.Fragment, {})
                },
                children: () => (0, i.jsx)(x.GY, {
                    contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                    latestVersion: P,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: n
                        } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r.m, {
                                text: T.intl.string(T.t.P8vmUv),
                                forceOpen: !0,
                                shouldShow: c,
                                children: (0, i.jsx)("div", {
                                    ref: z,
                                    children: (0, i.jsx)(I.A, {
                                        disabled: L,
                                        "aria-label": O,
                                        label: k ? void 0 : O,
                                        isActivityActive: w,
                                        onClick: () => {
                                            K(), (s === a.M.ACTIVITIES_MINI_SHELF_SPARKLES || s === a.M.ACTIVITY_GDM_ROCKET_SPARKLE || s === a.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || s === a.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || s === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(S.i.TAKE_ACTION), t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(S.i.TAKE_ACTION)
                                        },
                                        onMouseEnter: B,
                                        onMouseLeave: U
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