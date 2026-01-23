/** Chunk was on 86142 **/
/** chunk id: 614986, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(108531),
    l = n(311907),
    a = n(397927),
    o = n(846293),
    c = n(900662),
    u = n(765671),
    d = n(854378),
    h = n(210714),
    p = n(961350),
    g = n(299091),
    m = n(954571),
    f = n(486020),
    _ = n(403362),
    A = n(21599),
    x = n(949155),
    E = n(663572),
    v = n(131929),
    j = n(652215),
    y = n(985018),
    b = n(446160);

function S(e) {
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

function I(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N() {
    return (0, r.jsx)("div", {
        className: b.$k,
        children: (0, r.jsx)(a.y$y, {})
    })
}
let O = e => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case j.elq.RESOLVED:
        case j.elq.ACCEPTED:
        case j.elq.APP_NOT_OPENED:
        case j.elq.APP_OPENED:
        case j.elq.ACCEPTING:
        case j.elq.APP_OPENING:
            return 1;
        case j.elq.EXPIRED:
        case j.elq.BANNED:
        case j.elq.ERROR:
            return 2;
        case j.elq.RESOLVING:
            return 0;
        default:
            (0, _.xb)(n)
    }
};

function C(e) {
    let {
        invite: t,
        onAcceptInvite: n
    } = e;
    return (null == t ? void 0 : t.state) === j.elq.BANNED ? (0, r.jsx)(c.N, {
        text: y.intl.string(y.t["5AkWAd"]),
        buttonCta: y.intl.string(y.t["8osdkn"]),
        onClick: n
    }) : (0, r.jsx)(c.N, {
        text: y.intl.string(y.t["usP+Mb"]),
        buttonCta: y.intl.string(y.t["8osdkn"]),
        onClick: n
    })
}

function T(e) {
    let {
        children: t,
        cardChildren: n,
        startAnimHeightPx: l,
        innerStyle: o
    } = e, {
        invite: c
    } = function(e, t) {
        if (null == e) return {};
        var n, r, i, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
            return s
        }
        if (s = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    s = Object.getOwnPropertyNames(e);
                for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
        return s
    }(e, ["children", "cardChildren", "startAnimHeightPx", "innerStyle"]), [d, h] = i.useState(O(c)), {
        ref: p,
        height: g
    } = (0, u.Ay)(), m = (0, a.zhh)({
        height: null != g && 0 !== g ? "".concat(g, "px") : "".concat(l, "px"),
        config: s.config.stiff
    });
    return i.useEffect(() => {
        let e = O(c);
        e !== d && h(e)
    }, [c, d]), (0, r.jsxs)(s.animated.div, {
        className: b.qF,
        style: m,
        children: [(0, r.jsx)(s.animated.div, {
            className: b.NS,
            style: m,
            children: (0, r.jsx)("section", {
                ref: p,
                className: null == o ? void 0 : o(d),
                children: t(d)
            })
        }), n]
    })
}

function R(e) {
    let {
        invite: t
    } = e;
    return null != t && (0, x.Fk)(t) ? (0, r.jsx)(T, I(S({
        startAnimHeightPx: 0,
        innerStyle: () => b.ui
    }, e), {
        children: e => null == t ? null : 1 === e ? (0, r.jsx)(v.s, {
            invite: t
        }) : null
    })) : null
}

function w(e) {
    let {
        invite: t
    } = e, n = {
        1: b._r,
        2: b.Gm,
        0: b.Kt
    };
    return (0, r.jsx)(T, I(S({
        startAnimHeightPx: 200,
        innerStyle: e => n[e]
    }, e), {
        children: n => (n => {
            if (null == t) return (0, r.jsx)(N, {});
            switch (n) {
                case 1:
                    return (0, r.jsx)(E.A, I(S({}, e), {
                        invite: t
                    }));
                case 2:
                    return (0, r.jsx)(C, I(S({}, e), {
                        invite: t
                    }));
                default:
                    return (0, r.jsx)(N, {})
            }
        })(n)
    }))
}

function P(e) {
    let {
        invite: t,
        onAcceptInvite: n
    } = e, {
        guild: i
    } = null != t ? t : {}, s = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = f.Ay.getGuildSplashURL({
            id: i.id,
            splash: i.splash
        });
        null != e && (s.backgroundImage = "url(".concat(e, ")"), s.backgroundSize = "cover")
    }
    return (0, r.jsxs)(d.Ay, {
        theme: j.NJ8.DARK,
        className: b.G3,
        style: s,
        contentClassName: b.__,
        children: [(0, r.jsx)(w, I(S({}, e), {
            onAcceptInvite: n
        })), (0, r.jsx)(R, S({}, e))]
    })
}

function L(e) {
    let {
        inviteKey: t,
        transitionTo: n
    } = e, s = (0, l.bG)([g.A], () => g.A.getInvite(t));
    return i.useEffect(() => {
        (0, h.d)("invite_mobile")
    }, []), i.useEffect(() => {
        null != s && s.state === j.elq.RESOLVED && m.default.track(j.HAw.INVITE_VIEWED, {
            invite_code: t,
            friends_count: null == s ? void 0 : s.friends_count
        }, {
            flush: !0
        })
    }, [s, t]), (0, r.jsx)(P, {
        invite: s,
        onAcceptInvite: e => {
            var n, r, i;
            let l, a, c, u;
            null == e || e.preventDefault(), m.default.track(j.HAw.INVITE_APP_OPENED, {
                invite_code: (0, A.m0)(t),
                guild_id: null == s || null == (n = s.guild) ? void 0 : n.id,
                channel_id: null == s || null == (r = s.channel) ? void 0 : r.id,
                inviter_id: null == s || null == (i = s.inviter) ? void 0 : i.id
            }), l = null != s && s.state !== j.elq.EXPIRED && s.state !== j.elq.BANNED ? t : void 0, c = null != (a = p.default.getFingerprint()) ? a : p.default.getId(), u = null != s && (null == s ? void 0 : s.type) != null ? Number(null == s ? void 0 : s.type) : void 0, o.Ay.openApp(l, void 0, c, void 0, u)
        },
        transitionTo: n
    })
}