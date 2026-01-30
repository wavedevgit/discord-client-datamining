/** chunk id: 595244, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => M,
    Sm: () => G,
    bc: () => H,
    dR: () => k,
    gz: () => V,
    i8: () => B,
    jX: () => j,
    xb: () => F
}), n(142703), n(321073), n(747238);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(492462),
    l = n(960488),
    c = n(158954),
    u = n(311907),
    d = n(571356),
    f = n(397927),
    p = n(573435),
    _ = n(726249),
    h = n(310419),
    m = n(976860),
    g = n(345942),
    E = n(734057),
    y = n(576705),
    b = n(309010),
    O = n(954571),
    v = n(486020),
    A = n(203982),
    I = n(998218),
    S = n(321987),
    T = n(652215),
    C = n(985018),
    N = n(756302);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            w(e, t, n[t])
        })
    }
    return e
}

function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function D(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function L(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = x(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function x(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function M(e) {
    let {
        message: t,
        footer: n,
        headerClassName: i,
        showsCloseWindowText: a,
        spinner: s
    } = e;
    return (0, _.HU)({
        location: C.intl.string(C.t["3S2494"])
    }), (0, r.jsxs)("div", {
        className: N.iE,
        children: [s ? (0, r.jsx)(f.y$y, {}) : null, (0, r.jsx)("div", {
            className: o()(N.wx, i)
        }), (0, r.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            className: N.Qq,
            children: t
        }), null != n ? n : null, a ? (0, r.jsx)(d.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: N.lO,
            children: C.intl.string(C.t["k7J/w/"])
        }) : null]
    })
}

function j(e) {
    return (0, r.jsx)(M, D(R({}, e), {
        headerClassName: N.nQ
    }))
}

function k(e) {
    let {
        guild: t,
        application: n
    } = e, a = L(e, ["guild", "application"]), {
        onClose: o
    } = a, s = i.useCallback(() => {
        (null == t ? void 0 : t.id) != null && ((0, g.u)(null == t ? void 0 : t.id), null == o || o(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
            application_id: null == n ? void 0 : n.id,
            guild_id: null == t ? void 0 : t.id
        }))
    }, [o, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), l = h.h.getField("entrypoint"), c = i.useCallback(() => {
        null == o || o(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
            application_id: null == n ? void 0 : n.id
        })
    }, [o, null == n ? void 0 : n.id]), d = window.location.pathname.startsWith(T.BVt.APPLICATION_DIRECTORY), f = i.useCallback(() => {
        (null == n ? void 0 : n.id) != null && (null == o || o(), null != l && (0, m.pX)(""), setImmediate(() => {
            A._.dispatchToLastSubscribed(T.jej.OPEN_APP_LAUNCHER, {
                applicationId: n.id
            }), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, {
                application_id: n.id
            })
        }))
    }, [null == n ? void 0 : n.id, o, l]), p = (0, u.bG)([b.A, E.A], () => E.A.getChannel(b.A.getChannelId())), _ = (0, u.bG)([y.A], () => y.A.can(T.xBc.SEND_MESSAGES, p)), v = null != t, I = null == t && _ && (!d || null != l), N = [];
    return (null != t || null != o) && (null != o && N.push({
        variant: "secondary",
        text: C.intl.string(C.t.cpT0Cq),
        onClick: c
    }), v && N.push({
        variant: "primary",
        text: (null == t ? void 0 : t.name.length) > 30 ? C.intl.string(C.t.M35zFB) : C.intl.format(C.t.UdYYP3, {
            guildName: null == t ? void 0 : t.name
        }),
        onClick: s
    }), I && N.push({
        variant: "primary",
        text: C.intl.string(C.t["0cCDKP"]),
        onClick: f
    })), (0, r.jsx)(S.f, D(R({}, a), {
        actions: N,
        children: (0, r.jsx)(U, R({
            guild: t,
            application: n
        }, a))
    }))
}

function U(e) {
    let {
        guild: t,
        application: n
    } = e, a = L(e, ["guild", "application"]), o = C.intl.string(C.t.se5gLj);
    i.useEffect(() => {
        O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
            application_id: null == n ? void 0 : n.id
        })
    }, [null == n ? void 0 : n.id]);
    let s = i.useMemo(() => null != n ? null != t ? C.intl.format(C.t.IlF6IY, {
            installedApplicationName: null == n ? void 0 : n.name,
            guildName: null == t ? void 0 : t.name
        }) : C.intl.format(C.t.vTVC5T, {
            installedApplicationName: null == n ? void 0 : n.name
        }) : C.intl.string(C.t["Dp+rgP"]), [n, t]),
        l = (0, r.jsx)(d.E, {
            variant: "text-md/normal",
            className: N.OY,
            children: s
        });
    return (0, r.jsx)(j, R({
        message: o,
        footer: l
    }, a))
}

function G(e) {
    let {
        application: t
    } = e, n = L(e, ["application"]), {
        onClose: a
    } = n;
    i.useEffect(() => {
        O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
            application_id: t.id
        })
    }, [t.id]);
    let o = i.useCallback(() => {
        null == a || a(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
            application_id: t.id
        })
    }, [a, t.id]);
    return (0, r.jsx)(S.f, D(R({}, n), {
        actions: [{
            variant: "primary",
            text: C.intl.string(C.t["31Bci5"]),
            onClick: o
        }],
        children: (0, r.jsxs)("div", {
            className: N.kV,
            children: [(0, r.jsx)(p.Ay, {
                mask: p.hW.SQUIRCLE,
                className: N.LR,
                children: (0, r.jsx)("img", {
                    alt: t.name,
                    src: v.Ay.getApplicationIconURL({
                        id: t.id,
                        icon: t.icon
                    })
                })
            }), (0, r.jsxs)("div", {
                className: N.fv,
                children: [(0, r.jsx)(f.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: C.intl.format(C.t["1Q+p1k"], {
                        appName: t.name
                    })
                }), (0, r.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: C.intl.format(C.t.Mr7x5U, {
                        appName: t.name
                    })
                })]
            })]
        })
    }))
}

function F(e) {
    return (0, r.jsx)(S.f, D(R({}, e), {
        title: C.intl.string(C.t.j2d6Km),
        subtitle: C.intl.string(C.t["/B7kXy"]),
        actions: [{
            text: C.intl.string(C.t["31Bci5"]),
            onClick: e.onClose
        }]
    }))
}

function V(e) {
    return (0, r.jsx)(M, D(R({}, e), {
        headerClassName: N.gW
    }))
}

function B() {
    var e, t;
    let n = (0, l.zy)();
    return (0, r.jsx)(S.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(S.f, {
            transitionState: c.ip4.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(U, {
                guild: null == (e = n.state) ? void 0 : e.guild,
                application: null == (t = n.state) ? void 0 : t.application,
                showsCloseWindowText: !0
            })
        })
    })
}

function H(e) {
    var t, n;
    let {
        location: a
    } = e;
    i.useEffect(() => {
        if (null == a || "" === a.search) return;
        let e = null != document.referrer && "" !== document.referrer ? I.A.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== T.BVt.OAUTH2_AUTHORIZE) && (0, m.pX)(T.BVt.INDEX)
    }, [a]);
    let o = null != a ? (0, s.parse)(a.search) : {},
        l = null != (t = null != (n = o.error_description) ? n : o.error) ? t : C.intl.string(C.t.mqn873);
    return (0, r.jsx)(S.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(S.f, {
            transitionState: c.ip4.ENTERED,
            hideHeader: !0,
            children: (0, r.jsx)(V, {
                message: l,
                showsCloseWindowText: !0
            })
        })
    })
}