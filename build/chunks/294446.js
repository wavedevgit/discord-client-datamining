/** Chunk was on 21738 **/
/** chunk id: 294446, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(851907),
    a = n(587895),
    s = n(200330),
    o = n(321987),
    c = n(595244),
    u = n(723702),
    d = n(837921),
    p = n(636401),
    h = n(990007),
    g = n(546983),
    f = n(652215),
    m = n(985018);

function A(e) {
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

function _(e, t) {
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
let b = (0, h.A)(e => {
    var t;
    let {
        clientId: n,
        authorizations: u,
        scopes: d,
        parsedPermissions: h,
        responseType: b,
        redirectUri: E,
        codeChallenge: O,
        codeChallengeMethod: y,
        state: I,
        guildId: v,
        channelId: S,
        prompt: C,
        disableGuildSelect: N,
        disclosures: T,
        integrationType: j,
        pid: x,
        signal: P
    } = e, w = "OAuth2Authorize_".concat(n, "_").concat(v, "_").concat(S), L = null != j ? null == u ? void 0 : u.get(j) : void 0, R = null != (t = null == L ? void 0 : L.application) ? t : a.A.getApplication(n);
    return new Promise((e, t) => {
        let a = (0, g.d5)(x),
            L = i.SYi;
        null != R && null != (0, l.Ay)({
            application: R,
            channelId: S
        }) ? L = i.KX8 : a.context === f.BRT.POPOUT && (L = i.KX8);
        let D = !1,
            M = l => {
                let {
                    clientId: s,
                    location: o
                } = l;
                if (null == s || s === n) {
                    if (D = !0, null == o) {
                        t(new p.A({
                            errorCode: f.Lw6.OAUTH2_ERROR
                        }, "OAuth2 Error: No location provided")), a.lock();
                        return
                    }(e(o), null == E || null == R) ? a.lock(): null == new URL(o).searchParams.get("error") ? (0, i.qfG)(e => (0, r.jsx)(c.Sm, A({
                        application: R
                    }, e)), {
                        onCloseCallback: () => {
                            a.lock()
                        }
                    }, L) : (0, i.qfG)(e => (0, r.jsx)(c.xb, A({}, e)), {
                        onCloseCallback: () => {
                            a.lock()
                        }
                    }, L)
                }
            },
            {
                cleanup: k
            } = function(e, t) {
                function n() {
                    (0, i.OoC)(e) && (0, i.qfG)(e => (0, r.jsx)(o.f, _(A({}, e), {
                        title: m.intl.string(m.t.j2d6Km),
                        subtitle: m.intl.string(m.t["4LKmN5"]),
                        actions: [{
                            text: m.intl.string(m.t.cpT0Cq),
                            onClick: e.onClose
                        }]
                    })))
                }
                return null == t || t.addEventListener("abort", n), {
                    cleanup: function() {
                        null == t || t.removeEventListener("abort", n)
                    }
                }
            }(w, P);
        (0, i.qfG)(e => (0, r.jsx)(s.OAuth2AuthorizeModal, _(A({}, e), {
            authorizations: u,
            clientId: n,
            scopes: null != d ? d : [],
            disclosures: null != T ? T : [],
            callback: M,
            responseType: b,
            redirectUri: E,
            codeChallenge: O,
            codeChallengeMethod: y,
            state: I,
            permissions: h,
            guildId: v,
            channelId: S,
            prompt: C,
            disableGuildSelect: "boolean" == typeof N ? N : "true" === N,
            integrationType: j,
            cancelCompletesFlow: !0
        })), {
            modalKey: w,
            onCloseCallback: () => {
                k(), D || (t(new p.A({
                    errorCode: f.Lw6.OAUTH2_ERROR
                }, "User cancelled authorization")), a.lock())
            }
        }, L)
    })
}, function(e, t, n) {
    if ((0, g.kS)(n) || !u.isPlatformEmbedded) return;
    let r = (0, l.Ay)({
        application: e,
        channelId: t
    });
    (0, u.isWindows)() ? d.Ay.minimize(r): d.Ay.restore(r), d.Ay.focus(r)
})