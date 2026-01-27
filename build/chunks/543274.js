/** Chunk was on 77870 **/
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
    p = n(782091),
    h = n(641703),
    f = n(807067),
    g = n(521588),
    m = n(688810),
    b = n(975412),
    A = n(384059),
    y = n(379848),
    _ = n(267102),
    O = n(421773),
    j = n(168754),
    v = n(376086),
    x = n(652215),
    E = n(49999),
    C = n(985018);

function S(e) {
    let {
        channel: t,
        idle: n,
        whichPopoutIsOpen: S,
        setWhichPopoutIsOpen: I
    } = e, N = (0, i.bG)([u.Ay], () => u.Ay.isLaunchingActivity()), T = (0, p.et)(t.id), P = (0, p.dL)(T), w = T !== p.xy.CAN_LAUNCH || N, {
        isHovered: R,
        setIsHovered: D,
        onMouseEnter: M,
        onMouseLeave: L
    } = (0, O.A)(200, 300), k = (0, d.b)({
        surface: c.YI.VOICE_LAUNCHER
    }), G = (0, i.bG)([u.Ay], () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation())), U = !w, B = l.useCallback(e => {
        "focus" !== e.type && M()
    }, [M]), V = (0, _.Us)() === x.BRT.POPOUT, {
        parentAnalyticsLocation: F,
        newestAnalyticsLocation: H
    } = (0, m.Ay)(), K = l.useCallback(() => {
        (0, A.X)(F, A.O.ACTIVITY), (0, b.A)({
            context: null != t ? {
                type: "channel",
                channel: t
            } : {
                type: "contextless"
            },
            openInPopout: V,
            analyticsLocation: H
        })
    }, [t, V, H, F]), W = [];
    w || W.push(s.M.ACTIVITIES_MINI_SHELF_SPARKLES), (0, h.A)(t.id) && !w && W.push(s.M.ACTIVITY_GDM_ROCKET_SPARKLE), w || W.push(s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = l.useRef(!1),
        Y = l.useRef(null);
    return (0, r.jsx)(y.Ay, {
        contentTypes: W,
        children: e => {
            let {
                visibleContent: l,
                markAsDismissed: i
            } = e, c = l === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !R;
            return z.current && !c && i(E.i.AUTO_DISMISS), z.current !== c && (z.current = c), (0, r.jsx)(o.YNO, {
                targetElementRef: Y,
                fixed: !0,
                shouldShow: R && (S === v.P.ACTIVITY || null == S),
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
                    return U ? (0, r.jsx)(f.f, {
                        ref: e => {
                            null == l || l(e)
                        },
                        channel: t,
                        closePopout: n,
                        onMouseEnter: M,
                        onMouseLeave: L,
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
                                    ref: Y,
                                    children: (0, r.jsx)(j.A, {
                                        disabled: w,
                                        "aria-label": P,
                                        label: U ? void 0 : P,
                                        isActivityActive: G,
                                        onClick: () => {
                                            K(), (l === s.M.ACTIVITIES_MINI_SHELF_SPARKLES || l === s.M.ACTIVITY_GDM_ROCKET_SPARKLE || l === s.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || l === s.M.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || l === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && i(E.i.TAKE_ACTION), t === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(E.i.TAKE_ACTION)
                                        },
                                        onMouseEnter: B,
                                        onMouseLeave: L
                                    })
                                })
                            }), t === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE ? (0, r.jsx)(g.a, {
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