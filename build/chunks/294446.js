/** chunk id: 294446 params = (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(851907),
    r = n(587895),
    s = n(200330),
    o = n(321987),
    d = n(595244),
    c = n(723702),
    u = n(837921),
    A = n(636401),
    h = n(990007),
    _ = n(546983),
    m = n(652215),
    g = n(985018);
let p = (0, h.A)(e => {
    let {
        clientId: t,
        authorizations: n,
        scopes: c,
        parsedPermissions: u,
        responseType: h,
        redirectUri: p,
        codeChallenge: E,
        codeChallengeMethod: I,
        state: f,
        guildId: C,
        channelId: T,
        prompt: N,
        disableGuildSelect: S,
        disclosures: x,
        integrationType: v,
        pid: y,
        signal: b
    } = e, O = `OAuth2Authorize_${t}_${C}_${T}`, L = null != v ? n?.get(v) : void 0, R = L?.application ?? r.A.getApplication(t);
    return new Promise((e, r) => {
        let L = (0, _.d5)(y),
            P = a.SYi;
        null != R && null != (0, l.Ay)({
            application: R,
            channelId: T
        }) ? P = a.KX8 : L.context === m.BRT.POPOUT && (P = a.KX8);
        let D = !1,
            M = n => {
                let {
                    clientId: l,
                    location: s
                } = n;
                if (null == l || l === t) {
                    if (D = !0, null == s) {
                        r(new A.A({
                            errorCode: m.Lw6.OAUTH2_ERROR
                        }, "OAuth2 Error: No location provided")), L.lock();
                        return
                    }(e(s), null == p || null == R) ? L.lock(): null == new URL(s).searchParams.get("error") ? (0, a.qfG)(e => (0, i.jsx)(d.Sm, {
                        application: R,
                        ...e
                    }), {
                        onCloseCallback: () => {
                            L.lock()
                        }
                    }, P) : (0, a.qfG)(e => (0, i.jsx)(d.xb, {
                        ...e
                    }), {
                        onCloseCallback: () => {
                            L.lock()
                        }
                    }, P)
                }
            },
            {
                cleanup: j
            } = function(e, t) {
                function n() {
                    (0, a.OoC)(e) && (0, a.qfG)(e => (0, i.jsx)(o.f, {
                        ...e,
                        title: g.intl.string(g.t.j2d6Km),
                        subtitle: g.intl.string(g.t["4LKmN5"]),
                        actions: [{
                            text: g.intl.string(g.t.cpT0Cq),
                            onClick: e.onClose
                        }]
                    }))
                }
                return t?.addEventListener("abort", n), {
                    cleanup: function() {
                        t?.removeEventListener("abort", n)
                    }
                }
            }(O, b);
        (0, a.qfG)(e => (0, i.jsx)(s.OAuth2AuthorizeModal, {
            ...e,
            authorizations: n,
            clientId: t,
            scopes: c ?? [],
            disclosures: x ?? [],
            callback: M,
            responseType: h,
            redirectUri: p,
            codeChallenge: E,
            codeChallengeMethod: I,
            state: f,
            permissions: u,
            guildId: C,
            channelId: T,
            prompt: N,
            disableGuildSelect: "boolean" == typeof S ? S : "true" === S,
            integrationType: v,
            cancelCompletesFlow: !0
        }), {
            modalKey: O,
            onCloseCallback: () => {
                j(), D || (r(new A.A({
                    errorCode: m.Lw6.OAUTH2_ERROR
                }, "User cancelled authorization")), L.lock())
            }
        }, P)
    })
}, function(e, t, n) {
    if ((0, _.kS)(n) || !c.isPlatformEmbedded) return;
    let i = (0, l.Ay)({
        application: e,
        channelId: t
    });
    (0, c.isWindows)() ? u.Ay.minimize(i): u.Ay.restore(i), u.Ay.focus(i)
})