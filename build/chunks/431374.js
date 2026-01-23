/** Chunk was on 41091 **/
/** chunk id: 431374, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => M
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(158954),
    s = n(311907),
    u = n(843282),
    c = n(421380),
    d = n(397927),
    m = n(565645),
    f = n(765671),
    p = n(964486),
    g = n(793574),
    h = n(688810),
    b = n(375499),
    A = n(937773),
    T = n(287809),
    y = n(954571),
    O = n(177975),
    S = n(576241),
    j = n(57990),
    v = n(569921),
    _ = n(267859),
    x = n(334310),
    P = n(685396),
    w = n(16663),
    D = n(403918),
    N = n(652215),
    R = n(307731),
    C = n(985018),
    E = n(501336);
let U = "CLEAR_AFTER";

function M(t) {
    var e, n;
    let {
        transitionState: i,
        onClose: M,
        sourceAnalyticsLocations: k = [],
        prompt: H = null
    } = t, Y = (0, S.h)({
        location: "CustomStatusModalWithPreview"
    }), I = (0, O.R)({
        location: "CustomStatusModalWithPreview"
    }), {
        analyticsLocations: L
    } = (0, h.Ay)(k, g.A.CUSTOM_STATUS_MODAL), F = (0, s.bG)([T.default], () => {
        var t;
        return null != (t = T.default.getCurrentUser()) ? t : null
    }), Z = (0, P.K)(), [z, B] = r.useState(null != (e = null == Z ? void 0 : Z.state) ? e : ""), [V, W] = r.useState(null != (n = null == Z ? void 0 : Z.emoji) ? n : null), [q, G] = r.useState((0, v.A)()), X = r.useRef(null), K = r.useRef(null), Q = r.useRef(null), J = Y && null != H ? H.label() : C.intl.string(C.t.xod367), [$, tt] = r.useState(J), {
        ref: te,
        width: tn
    } = (0, f.Ay)(J);
    r.useEffect(() => {
        let t = Q.current;
        if (null == tn || null == t) return;
        let e = tn - 78;
        t.textContent = J;
        let n = t.getBoundingClientRect().width;
        if (n <= e) tt(J);
        else {
            let t = n / J.length,
                l = Math.floor((e - 3 * t) / t);
            tt("".concat(J.substring(0, l)).concat("..."))
        }
    }, [tn, J]), r.useEffect(() => {
        y.default.track(N.HAw.OPEN_MODAL, {
            type: g.A.CUSTOM_STATUS_MODAL,
            location_stack: L
        })
    }, [L]), (0, p.Ay)(() => {
        var t, e;
        null == (t = X.current) || t.focus(), null == (e = X.current) || e.setSelection(z.length, z.length)
    });
    let tl = () => {
            q !== U && ((0, j.A)({
                text: z,
                emojiInfo: V,
                clearAfter: q,
                prompt: H,
                analyticsLocations: L
            }), M())
        },
        tr = Y ? C.intl.string(C.t.rp0ahn) : C.intl.string(C.t.UcdRn2),
        ti = "custom-status-input";
    return (0, l.jsxs)(o.Modal, {
        title: C.intl.string(C.t.Zx4jzN),
        actionBarInput: (0, l.jsx)("div", {
            className: E.l3,
            children: (0, l.jsx)(u.Te, {
                maxVisibleItems: D.SX.length + 1,
                value: q,
                options: I ? [{
                    value: U,
                    key: U,
                    label: C.intl.string(C.t.E45wvP),
                    disabled: !0
                }, ...D.SX.map(t => ({
                    value: t,
                    key: t,
                    label: (0, _.A)(t, !0)
                }))] : D.SX.map(t => ({
                    value: t,
                    key: t,
                    label: (0, _.A)(t)
                })),
                onChange: t => G(t),
                optionClassName: E.Pl,
                renderOptionLabel: t => {
                    let {
                        value: e,
                        label: n,
                        disabled: r
                    } = t;
                    return (0, l.jsx)("span", {
                        className: a()(E.j3, r ? E.r9 : void 0),
                        children: e === U ? n : (0, x.A)(e, I)
                    })
                },
                variant: "text-only",
                popoutWidth: "auto",
                popoutPosition: "right",
                "data-migration-pending": !0
            })
        }),
        onClose: async () => {
            await M()
        },
        transitionState: i,
        actions: [{
            text: C.intl.string(C.t["R3BPH+"]),
            variant: "primary",
            onClick: tl
        }],
        children: [null != F && (0, l.jsx)("div", {
            className: E.q5,
            children: (0, l.jsx)(w.A, {
                user: F,
                previewText: z,
                previewEmoji: V,
                placeHolderText: J,
                transitionState: i
            })
        }), (0, l.jsxs)("div", {
            className: E.eH,
            children: [(0, l.jsx)(d.Text, {
                tag: "label",
                htmlFor: ti,
                variant: "heading-md/semibold",
                className: E.wW,
                children: tr
            }), (0, l.jsxs)("div", {
                className: E.Kf,
                ref: te,
                children: [(0, l.jsx)("span", {
                    ref: Q,
                    className: E._D,
                    "aria-hidden": "true"
                }), (0, l.jsx)("div", {
                    className: E.S0,
                    children: (0, l.jsx)(d.YNO, {
                        targetElementRef: K,
                        renderPopout: t => {
                            let {
                                closePopout: e
                            } = t;
                            return (0, l.jsx)(A.A, {
                                closePopout: e,
                                onSelectEmoji: t => {
                                    let {
                                        emoji: n,
                                        willClose: l
                                    } = t;
                                    null == n || W(null != n.id ? {
                                        id: n.id,
                                        name: n.name,
                                        animated: n.animated
                                    } : {
                                        id: null,
                                        name: n.optionallyDiverseSequence,
                                        animated: !1
                                    }), l && e()
                                },
                                pickerIntention: R.b_.STATUS,
                                onNavigateAway: M
                            })
                        },
                        position: "left",
                        animation: d.YNO.Animation.NONE,
                        align: "top",
                        children: (t, e) => {
                            var n, r;
                            let {
                                isShown: i
                            } = e;
                            return (0, l.jsx)(b.A, (n = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        l = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                                    }))), l.forEach(function(e) {
                                        var l;
                                        l = n[e], e in t ? Object.defineProperty(t, e, {
                                            value: l,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[e] = l
                                    })
                                }
                                return t
                            }({}, t), r = r = {
                                ref: K,
                                active: i,
                                className: E.Z8,
                                spriteSize: 24,
                                tabIndex: 0,
                                renderButtonContents: null == V ? null : () => (0, l.jsx)(m.A, {
                                    className: E.Zg,
                                    emojiId: V.id,
                                    emojiName: V.name,
                                    animated: !!V.animated
                                })
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
                                var n = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(t);
                                    n.push.apply(n, l)
                                }
                                return n
                            })(Object(r)).forEach(function(t) {
                                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t))
                            }), n))
                        }
                    })
                }), (0, l.jsx)(c.f9, {
                    autosize: !0,
                    value: z,
                    maxLength: D.hp,
                    rows: 1,
                    showRemainingCharacterCount: !1,
                    placeholder: $,
                    onChange: t => {
                        B(t)
                    },
                    onKeyDown: t => {
                        "Enter" === t.key && tl()
                    },
                    className: E.hF,
                    inputRef: X,
                    id: ti
                }), (z.length > 0 || null != V) && (0, l.jsx)(d.DUT, {
                    "aria-label": C.intl.string(C.t.wfYTHe),
                    className: E.mt,
                    onClick: () => {
                        B(""), W(null)
                    },
                    children: (0, l.jsx)(d.aXh, {
                        size: "md",
                        color: "currentColor",
                        className: E.hj
                    })
                })]
            }), (0, l.jsx)(d.AC4, {
                children: "".concat(C.intl.string(C.t.EVV6uZ), ": ").concat(J)
            })]
        })]
    })
}