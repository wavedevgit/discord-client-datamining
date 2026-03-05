/** chunk id: 559568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(80703),
    a = n(311907),
    o = n(562465),
    d = n(506774),
    c = n(397927),
    u = n(73153),
    h = n(830215),
    _ = n(961350),
    p = n(954571),
    g = n(927813),
    m = n(104798),
    f = n(652215),
    A = n(985018),
    x = n(491732);
let E = "mweb_handoff_nonce",
    I = "mweb_handoff_nonce_expiration",
    v = +g.A.Millis.MINUTE,
    N = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    j = new Set(["deep_link_failed"]),
    S = () => {
        d.w.remove(E), d.w.remove(I)
    },
    C = () => {
        let e = (0, a.bG)([_.default], () => _.default.getFingerprint()),
            {
                fingerprint: t,
                handoff_token: n
            } = (0, r.parse)(window.location.search),
            g = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
            C = g ?? (null !== e ? e : void 0);
        s.useEffect(() => {
            null !== g && e !== g && u.h.dispatch({
                type: "FINGERPRINT",
                fingerprint: g
            })
        }, [g, e]);
        let [T, y] = s.useState(null), b = s.useCallback(e => {
            y(e), p.default.track(f.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, l.v)(C)
            }, {
                fingerprint: C
            })
        }, [y, C]), R = d.w.get(E);
        if ("null" === n && null === T && b("deep_link_failed"), null != n && "null" !== n && null == R && null === T && b("nonce_missing"), s.useEffect(() => {
                if (null != R) {
                    let e = d.w.get(I);
                    (null == e || Date.now() >= e) && (b("nonce_expired"), S())
                }
            }, [R, b]), s.useEffect(() => {
                null != n && "null" !== n && null != R && null == T && o.Bo.post({
                    url: f.Rsh.HANDOFF_EXCHANGE,
                    body: {
                        key: R,
                        handoff_token: n
                    },
                    rejectWithError: !0
                }).then(e => h.A.loginToken(e.body.token, !1)).then(() => {
                    p.default.track(f.HAw.LOGIN_SUCCESSFUL, {
                        source: f.mdB.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, l.v)(C)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    b("handoff_exchange")
                }).finally(() => {
                    S()
                })
            }, [n, R, T, C, b]), null == C) return null;
        let O = null == T ? (0, i.jsxs)(i.Fragment, {
            children: [A.intl.string(A.t.uJ1JsY), (0, i.jsx)("br", {}), A.intl.string(A.t.GHVWAs)]
        }) : j.has(T) ? A.intl.string(A.t.EPt55r) : N.has(T) ? A.intl.string(A.t.g87kTp) : void 0;
        return null != T && j.has(T) ? (0, i.jsx)("div", {
            className: x.Un,
            children: (0, i.jsx)(c.Text, {
                color: "interactive-text-default",
                variant: "text-sm/semibold",
                children: O
            })
        }) : (0, i.jsxs)("div", {
            className: x.kL,
            children: [(0, i.jsx)(c.Text, {
                variant: "text-sm/semibold",
                children: O
            }), (0, i.jsx)(c.Button, {
                variant: "overlay-primary",
                text: A.intl.string(A.t.NcC759),
                onClick: () => {
                    let e = m.A.generateNonce();
                    d.w.set(E, e), d.w.set(I, Date.now() + v);
                    let t = new URL(f.J$u),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let i = new URLSearchParams;
                    i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), i.set("key", e), i.set("fingerprint", C), t.search = i.toString(), p.default.track(f.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.v)(C),
                        source: "mobile_web_handoff",
                        destination: f.J$u
                    }, {
                        fingerprint: C,
                        flush: !0
                    }), window.location.href = t.toString()
                }
            })]
        })
    }