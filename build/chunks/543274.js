/** Chunk was on 1113 **/
/** chunk id: 543274, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => S
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(990078),
    o = n(397927),
    c = n(155718),
    u = n(933958),
    d = n(404522),
    h = n(782091),
    p = n(641703),
    g = n(807067),
    f = n(521588),
    m = n(688810),
    b = n(975412),
    A = n(384059),
    y = n(379848),
    O = n(267102),
    _ = n(421773),
    x = n(168754),
    j = n(376086),
    v = n(652215),
    E = n(49999),
    C = n(985018);

function S(e) {
    let {
        channel: t,
        idle: n,
        whichPopoutIsOpen: S,
        setWhichPopoutIsOpen: I
    } = e, N = (0, i.bG)([u.Ay], () => u.Ay.isLaunchingActivity()), T = (0, h.et)(t.id), P = (0, h.dL)(T), w = T !== h.xy.CAN_LAUNCH || N, {
        isHovered: R,
        setIsHovered: D,
        onMouseEnter: L,
        onMouseLeave: M
    } = (0, _.A)(200, 300), k = (0, d.b)({
        surface: c.YI.VOICE_LAUNCHER
    }), G = (0, i.bG)([u.Ay], () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation())), U = !w, V = l.useCallback(e => {
        "focus" !== e.type && L()
    }, [L]), B = (0, O.Us)() === v.BRT.POPOUT, {
        parentAnalyticsLocation: H,
        newestAnalyticsLocation: F
    } = (0, m.Ay)(), K = l.useCallback(() => {
        (0, A.X)(H, A.O.ACTIVITY), (0, b.A)({
            context: null != t ? {
                type: "channel",
                channel: t
            } : {
                type: "contextless"
            },
            openInPopout: B,
            analyticsLocation: F
        })
    }, [t, B, F, H]), Y = [];
    w || Y.push(s.M.ACTIVITIES_MINI_SHELF_SPARKLES), (0, p.A)(t.id) && !w && Y.push(s.M.ACTIVITY_GDM_ROCKET_SPARKLE), w || Y.push(s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let W = l.useRef(!1),
        z = l.useRef(null);
    return (0, r.jsx)(y.Ay, {
        contentTypes: Y,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: i
            } = e, c = l === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !R;
            return W.current && !c && i(E.i.AUTO_DISMISS), W.current !== c && (W.current = c), (0, r.jsx)(o.YNO, {
                targetElementRef: z,
                fixed: !0,
                shouldShow: R && (S === j.P.ACTIVITY || null == S),
                animation: o.YNO.Animation.FADE,
                animationPosition: "top",
                position: "top",
                align: "center",
                spacing: 16,
                onRequestClose: () => {
                    D(!1), null == I || I(void 0)
                },
                renderPopout: e => {
                    let {
                        closePopout: n,
                        setPopoutRef: l
                    } = e;
                    return U ? (0, r.jsx)(g.f, {
                        ref: e => {
                            null == l || l(e)
                        },
                        channel: t,
                        closePopout: n,
                        onMouseEnter: L,
                        onMouseLeave: M,
                        isHovered: R,
                        onClick: () => i(E.i.UNKNOWN)
                    }) : (0, r.jsx)(r.Fragment, {})
                },
                children: () => (0, r.jsx)(y.GY, {
                    contentType: s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                    latestVersion: k,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: n
                        } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.m, {
                                text: C.intl.string(C.t.P8vmUv),
                                forceOpen: !0,
                                shouldShow: c,
                                children: (0, r.jsx)("div", {
                                    ref: z,
                                    children: (0, r.jsx)(x.A, {
                                        disabled: w,
                                        "aria-label": P,
                                        label: U ? void 0 : P,
                                        isActivityActive: G,
                                        onClick: () => {
                                            K(), (l === s.M.ACTIVITIES_MINI_SHELF_SPARKLES || l === s.M.ACTIVITY_GDM_ROCKET_SPARKLE || l === s.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === s.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && i(E.i.TAKE_ACTION), t === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(E.i.TAKE_ACTION)
                                        },
                                        onMouseEnter: V,
                                        onMouseLeave: M
                                    })
                                })
                            }), t === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(f.a, {
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