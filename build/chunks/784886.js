/** chunk id: 784886, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
}), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(3203),
    l = n(397927),
    c = n(308528),
    u = n(688810),
    d = n(355622),
    f = n(408018),
    p = n(133343),
    _ = n(195880),
    h = n(45787),
    m = n(95701),
    g = n(562153),
    E = n(183555),
    y = n(448613),
    b = n(633572),
    O = n(652215),
    v = n(788868),
    A = n(985018),
    I = n(787288);

function S(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            S(e, t, n[t])
        })
    }
    return e
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function N(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let w = (0, m.createChannelRecord)({
    id: "1",
    type: O.rbe.DM
});

function R(e) {
    let {
        user: t,
        guildId: a,
        channelId: m,
        onClose: O,
        disableAutoFocus: S = !1,
        upsell: C = !1
    } = e, {
        newestAnalyticsLocation: R,
        analyticsLocations: P
    } = (0, u.Ay)(), {
        trackUserProfileAction: D
    } = (0, E.NJ)(), [L, x] = i.useState(""), [M, j] = i.useState((0, f.x7)(L)), k = i.useRef(!1), U = i.useRef(null), G = i.useRef(null), {
        Component: F
    } = (0, s.V)(), V = i.useMemo(() => N(T({}, d.oU.USER_PROFILE), {
        disableAutoFocus: S
    }), [S]), B = i.useCallback(async () => {
        (0, h.xs)(t.id), await c.A.openPrivateChannel({
            recipientIds: [t.id]
        }), (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("95501").then(n.bind(n, 367516));
            return t => (0, r.jsx)(e, N(T({}, t), {
                giftIntentType: v.np.FRIEND_ANNIVERSARY,
                analyticsLocationHistory: P
            }))
        })
    }, [t.id, P]), H = i.useCallback(() => (0, r.jsxs)("div", {
        className: I.Uo,
        children: [(0, r.jsx)(l.K0, {
            size: "sm",
            variant: "icon-only",
            icon: F,
            "aria-label": A.intl.string(A.t.I61IsE),
            onClick: B
        }), (0, r.jsx)(b.A, {
            user: t,
            analyticsLocations: P
        })]
    }), [F, B, t, P]);
    return (0, r.jsx)(p.Ay, {
        className: o()(I.kL, {
            [I.UX]: C
        }),
        editorClassName: I.EN,
        type: V,
        placeholder: A.intl.formatToPlainString(A.t["0ZQw/X"], {
            name: g.Ay.getName(a, m, t)
        }),
        channel: w,
        textValue: L,
        richValue: M,
        onChange: (e, t, n) => {
            t !== L && (x(t), j(n))
        },
        focused: k.current,
        onFocus: () => {
            k.current = !0
        },
        onBlur: () => {
            k.current = !1
        },
        onSubmit: async e => {
            let {
                value: n
            } = e, r = n.trim();
            if ("" === r) return {
                shouldClear: !1,
                shouldRefocus: !0
            };
            (U.current !== r || null == G.current) && (U.current = r, G.current = (0, _.m)());
            try {
                var i;
                return D({
                    action: "SEND_DIRECT_MESSAGE"
                }), await (0, y.p)({
                    userId: t.id,
                    content: r,
                    openChannel: !0,
                    whenReady: !0,
                    location: R,
                    nonce: null != (i = G.current) ? i : void 0
                }), U.current = null, G.current = null, null == O || O(), {
                    shouldClear: !0,
                    shouldRefocus: !1
                }
            } catch (e) {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                }
            }
        },
        renderButtons: C ? H : void 0
    })
}