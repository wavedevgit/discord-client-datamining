/** chunk id: 634202, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => Y
}), n(228524), n(864466), n(443073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    f = n(582754),
    p = n(421380),
    _ = n(397927),
    h = n(686956),
    m = n(730134),
    g = n(736653),
    E = n(573648),
    y = n(58149),
    b = n(688810),
    O = n(709066),
    v = n(657331),
    A = n(427157),
    I = n(696451),
    S = n(954571),
    T = n(370480),
    C = n(633452),
    N = n(600260),
    w = n(63104),
    R = n(355971),
    P = n(293260),
    D = n(783419),
    L = n(652215),
    x = n(518477),
    M = n(985018),
    j = n(628972);

function k(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            k(e, t, n[t])
        })
    }
    return e
}

function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function V(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function F(e) {
    let t, {
        connectionType: n,
        connectionMetadataField: i,
        operator: a,
        value: o,
        description: s
    } = e;
    if (null != s) switch (a) {
        case D.so.LESS_THAN:
            t = M.intl.format(M.t["2p7dA3"], {
                description: s,
                count: Math.max(0, Number(o) - 1)
            });
            break;
        case D.so.GREATER_THAN:
            t = M.intl.format(M.t["2p7dA3"], {
                description: s,
                count: Math.max(0, Number(o) + 1)
            });
            break;
        default:
            t = s
    } else t = (0, T.RP)({
        connectionType: n,
        connectionMetadataField: i,
        operator: a,
        value: o
    });
    return null == t ? null : (0, r.jsxs)("div", {
        className: j.wL,
        children: [(0, r.jsx)(_.A9s, {
            size: "md",
            color: "currentColor",
            className: j.D$
        }), (0, r.jsx)(_.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: t
        })]
    })
}

function B(e) {
    let {
        eligibilityStates: t
    } = e, n = (0, g.Ay)(), i = (0, _.rdh)(u.A.unsafe_rawColors.GREEN_330).hex(), a = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
    return (0, r.jsx)(r.Fragment, {
        children: Object.keys(a).map(e => {
            var t, s;
            let l, c = a[e],
                u = c.filter(e => null != e.operator),
                d = c.find(e => null != e.application),
                p = E.A.get(e),
                h = null == d ? void 0 : d.application,
                g = (null == h ? void 0 : h.bot) != null ? new A.A(h.bot) : null;
            return T.iC.includes(null != (t = null == h ? void 0 : h.id) ? t : "") ? l = (0, r.jsx)(R.A, {
                className: j.AO,
                color: i,
                size: 16
            }) : null != g && (l = (0, r.jsx)(O.A, {
                className: j.AO,
                verified: g.isVerifiedBot()
            })), (0, r.jsxs)("div", {
                className: j.sV,
                children: [(0, r.jsxs)("div", {
                    className: j.ei,
                    children: [null != p ? (0, r.jsx)("img", {
                        src: (0, f.Mw)(n) ? p.icon.darkSVG : p.icon.lightSVG,
                        alt: "",
                        className: j.j$
                    }) : null, null != g ? (0, r.jsx)(m.A, {
                        user: g,
                        size: _._3J.SIZE_20,
                        className: j.j$
                    }) : null, (0, r.jsx)(_.Text, {
                        variant: "text-sm/medium",
                        color: "interactive-text-active",
                        children: null != (s = null == p ? void 0 : p.name) ? s : null == h ? void 0 : h.name
                    }), l]
                }), u.map(e => {
                    let {
                        connection_type: t,
                        connection_metadata_field: n,
                        operator: i,
                        value: a,
                        description: s
                    } = e;
                    return o()(null != n, "connectionMetadataField is null"), o()(null != i, "operator is null"), o()(null != a, "value is null"), (0, r.jsx)(F, {
                        connectionType: t,
                        connectionMetadataField: n,
                        operator: i,
                        value: a,
                        description: s
                    }, "".concat(t, ":").concat(n, ":").concat(i, ":").concat(a))
                })]
            }, e)
        })
    })
}

function H(e) {
    let t, {
        onGetRolesClicked: n,
        onOpenProfile: a,
        eligibilityStates: o,
        userId: s,
        roleId: l,
        channelId: u,
        guildId: d
    } = e;
    i.useEffect(() => {
        S.default.track(L.HAw.PASSPORT_ROLE_POPOUT_VIEWED, U({
            other_user_id: s,
            role_id: l
        }, (0, y.Ou)(u), (0, y.H$)(d)))
    }, [s, l, u, d]);
    let f = (0, c.bG)([I.Ay], () => {
        var e, t;
        return null != (e = null == (t = I.Ay.getSelfMember(d)) ? void 0 : t.roles.includes(l)) && e
    }, [d, l]);
    return t = 1 === o.length && 1 === o[0].length ? M.intl.string(M.t.jDym4E) : 1 === o.length ? M.intl.format(M.t["0eBj3x"], {}) : M.intl.format(M.t.D7uftB, {}), (0, r.jsxs)("div", {
        className: j.SW,
        children: [(0, r.jsx)("div", {
            className: j.oT,
            children: (0, r.jsx)(_.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: j.Io,
                children: t
            })
        }), (0, r.jsx)("div", {
            className: j.jf,
            children: (0, r.jsx)(B, {
                eligibilityStates: o.flat()
            })
        }), (0, r.jsxs)("div", {
            className: j.UD,
            children: [f ? null : (0, r.jsx)(p.$n, {
                className: j.wz,
                onClick: n,
                children: M.intl.string(M.t.T1t1WV)
            }), (0, r.jsx)(p.$n, {
                className: j.lQ,
                color: p.$n.Colors.PRIMARY,
                onClick: a,
                children: M.intl.string(M.t.hgKDnG)
            })]
        })]
    })
}

function Y(e) {
    let {
        userId: t,
        messageId: n,
        guild: a,
        channel: s
    } = e, {
        analyticsLocations: l
    } = (0, b.Ay)(), u = (0, N.A)(a, t, s.id, !0), f = (0, c.bG)([C.A], () => C.A.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)), [p, m] = i.useState(null == f), g = i.useRef(null);
    if (null == u) return null;
    async function E() {
        o()(null != u, "visibleConnectionsRole is null"), p && null == f && (await h.A.fetchGuildRoleConnectionsEligibility(a.id, u.id), m(!1))
    }

    function y() {
        return Promise.resolve(e => {
            let {
                closePopout: i
            } = e;
            return null == f ? (0, r.jsx)(r.Fragment, {}) : (o()(null != u, "visibleConnectionsRole is null"), (0, r.jsx)(H, {
                eligibilityStates: f,
                userId: t,
                roleId: u.id,
                channelId: s.id,
                guildId: a.id,
                onGetRolesClicked: () => {
                    (0, P.c0)(a.id)
                },
                onOpenProfile: () => {
                    (0, v.openUserProfileModal)({
                        userId: t,
                        messageId: n,
                        guildId: a.id,
                        channelId: s.id,
                        roleId: u.id,
                        scrollTarget: x.bk.CONNECTIONS,
                        sourceAnalyticsLocations: l
                    }), i()
                }
            }))
        })
    }
    return (0, r.jsx)(_.QCx, {
        targetElementRef: g,
        onRequestOpen: E,
        renderPopout: y,
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: e => (0, r.jsx)(d.m, {
            text: M.intl.string(M.t.Wpsnar),
            children: (0, r.jsxs)("div", V(U({
                ref: g,
                className: j.qS
            }, e), {
                children: [(0, r.jsx)(w.A, {
                    className: j.f7,
                    size: 16,
                    color: u.colorString
                }), (0, r.jsx)(_.Text, {
                    variant: "text-xs/bold",
                    color: "text-strong",
                    className: j.S3,
                    children: u.name
                })]
            }))
        })
    })
}