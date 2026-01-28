/** Chunk was on 78528 **/
/** chunk id: 220995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => C
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(353709),
    o = n(110259),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    p = n(964486),
    h = n(793574),
    f = n(688810),
    g = n(139286),
    m = n(576705),
    b = n(954571),
    A = n(778768),
    y = n(582904),
    _ = n(652215),
    O = n(985018),
    j = n(430023),
    v = n(77615);

function x(e) {
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
let E = e => 1 - Math.pow(1 - e, 4);

function C(e) {
    let {
        channel: t,
        onClose: n
    } = e, i = l.useRef(null), [C, S] = l.useState(!1), I = l.useRef(null), N = l.useRef(null), [T, P] = l.useState(0), {
        analyticsLocations: w
    } = (0, f.Ay)(h.A.VOICE_INVITE_SUGGESTIONS);
    (0, g.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: w
        }
    });
    let R = (0, c.bG)([m.A], () => m.A.can(_.xBc.CREATE_INSTANT_INVITE, t), [t]),
        [D, M] = l.useState(!1),
        [L, k] = l.useState("unknown"),
        U = l.useRef(null),
        {
            isHoveringOrFocusing: G
        } = (0, y.L7)(R ? i : U),
        [B, V] = l.useState(!1),
        F = G || B,
        H = l.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            b.default.track(_.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                reason: e,
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: w
            }), S(!1), null == n || n()
        }, [t, n, w]),
        K = (0, d.zhh)({
            from: {
                height: "0px"
            },
            to: {
                height: "".concat(32, "px")
            },
            reverse: D,
            config: {
                duration: 200,
                easing: E,
                clamp: !0
            },
            onRest: () => {
                D && H(L)
            }
        }),
        W = l.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            M(!0), k(e)
        }, []),
        z = l.useCallback(() => (null != I.current && clearTimeout(I.current), I.current = setTimeout(() => W("timeout"), 1e4), P(e => e + 1), () => {
            null != I.current && clearTimeout(I.current)
        }), [W]),
        Y = l.useCallback(() => (null != N.current && clearTimeout(N.current), N.current = setTimeout(() => {
            S(!1)
        }, 150), () => {
            null != N.current && clearTimeout(N.current)
        }), []);
    (0, p.Ay)(z), l.useEffect(() => {
        if (!F) {
            z(), Y();
            return
        }
        null != I.current && clearTimeout(I.current), null != N.current && clearTimeout(N.current), S(!0)
    }, [F, z, Y]);
    let q = l.useCallback(() => {
            S(!0)
        }, []),
        X = l.useCallback(() => {
            S(!1), V(!1)
        }, []);
    return R ? (0, r.jsx)(d.YNO, {
        targetElementRef: i,
        shouldShow: C,
        position: "right",
        align: "top",
        spacing: 8,
        popoutKey: "voice-invite-suggestions-button",
        renderPopout: e => (0, r.jsx)(A.w, x({
            channel: t,
            onHoverOrFocus: V
        }, e)),
        onRequestOpen: q,
        onRequestClose: X,
        children: e => {
            var t, n;
            return (0, r.jsx)(a.animated.div, {
                className: j.lY,
                style: K,
                children: (0, r.jsx)(d.DUT, (t = x({
                    innerRef: i,
                    className: s()({
                        [j.vk]: !D
                    }, v.q7, v.L9, v.vk),
                    "aria-disabled": D,
                    "aria-label": O.intl.string(O.t.F3qiJr)
                }, e), n = n = {
                    children: (0, r.jsxs)("div", {
                        className: s()(j.Qs, v.Qs),
                        children: [(0, r.jsxs)("div", {
                            className: j.R4,
                            style: {
                                "--custom-voice-invite-suggestions-timer-size": 24
                            },
                            children: [(0, r.jsxs)("svg", {
                                className: s()(j.O1, {
                                    [j.Ft]: F
                                }),
                                viewBox: "0 0 ".concat(24, " ").concat(24),
                                style: {
                                    "--custom-voice-invite-suggestions-timer-duration": 1e4
                                },
                                children: [(0, r.jsx)("circle", {
                                    className: j.qB
                                }), (0, r.jsx)("circle", {
                                    className: j.hN
                                })]
                            }, "voice-invite-suggestions-timer-".concat(T)), (0, r.jsx)(d.Rvf, {
                                size: "custom",
                                width: 14,
                                height: 14,
                                color: "currentColor",
                                className: s()(j.Hk, j.Kk)
                            })]
                        }), (0, r.jsx)(u.m_, {
                            text: O.intl.string(O.t["EE+P0H"]),
                            overflowOnly: !0,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                className: j.Pf,
                                lineClamp: 1,
                                children: O.intl.string(O.t["EE+P0H"])
                            })
                        }), G ? (0, r.jsx)(d.DUT, {
                            className: j.VN,
                            onClick: () => W("user_explicit"),
                            "aria-label": O.intl.string(O.t.cpT0Cq),
                            children: (0, r.jsx)(d.PGe, {
                                size: "xs",
                                color: "currentColor",
                                className: j.Kk
                            })
                        }) : (0, r.jsx)(d._BQ, {
                            size: "xs",
                            color: "currentColor",
                            className: j.Kk
                        })]
                    })
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
            })
        }
    }) : null
}