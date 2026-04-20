/** chunk id: 559568 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(80703),
    a = n(311907),
    o = n(562465),
    c = n(506774),
    d = n(397927),
    u = n(73153),
    _ = n(830215),
    h = n(961350),
    p = n(954571),
    g = n(927813),
    m = n(104798),
    A = n(652215),
    f = n(985018),
    E = n(1959);
let x = "mweb_handoff_nonce",
    I = "mweb_handoff_nonce_expiration",
    N = +g.A.Millis.MINUTE,
    v = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    T = new Set(["deep_link_failed"]),
    C = () => {
        c.w.remove(x), c.w.remove(I)
    },
    j = () => {
        let e = (0, a.bG)([h.default], () => h.default.getFingerprint()),
            {
                fingerprint: t,
                handoff_token: n
            } = (0, r.parse)(window.location.search),
            g = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
            j = g ?? (null !== e ? e : void 0);
        s.useEffect(() => {
            null !== g && e !== g && u.h.dispatch({
                type: "FINGERPRINT",
                fingerprint: g
            })
        }, [g, e]);
        let [y, S] = s.useState(null), b = s.useCallback(e => {
            S(e), p.default.track(A.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, l.v)(j)
            }, {
                fingerprint: j
            })
        }, [S, j]), R = c.w.get(x);
        if ("null" === n && null === y && b("deep_link_failed"), null != n && "null" !== n && null == R && null === y && b("nonce_missing"), s.useEffect(() => {
                if (null != R) {
                    let e = c.w.get(I);
                    (null == e || Date.now() >= e) && (b("nonce_expired"), C())
                }
            }, [R, b]), s.useEffect(() => {
                null != n && "null" !== n && null != R && null == y && o.Bo.post({
                    url: A.Rsh.HANDOFF_EXCHANGE,
                    body: {
                        key: R,
                        handoff_token: n
                    },
                    rejectWithError: !0
                }).then(e => _.A.loginToken(e.body.token, !1)).then(() => {
                    p.default.track(A.HAw.LOGIN_SUCCESSFUL, {
                        source: A.mdB.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, l.v)(j)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    b("handoff_exchange")
                }).finally(() => {
                    C()
                })
            }, [n, R, y, j, b]), null == j) return null;
        let O = null == y ? (0, i.jsxs)(i.Fragment, {
            children: [f.intl.string(f.t.uJ1JsY), (0, i.jsx)("br", {}), f.intl.string(f.t.GHVWAs)]
        }) : T.has(y) ? f.intl.string(f.t.EPt55r) : v.has(y) ? f.intl.string(f.t.g87kTp) : void 0;
        return null != y && T.has(y) ? (0, i.jsx)("div", {
            className: E.Un,
            children: (0, i.jsx)(d.Text, {
                color: "interactive-text-default",
                variant: "text-sm/semibold",
                children: O
            })
        }) : (0, i.jsxs)("div", {
            className: E.kL,
            children: [(0, i.jsx)(d.Text, {
                variant: "text-sm/semibold",
                children: O
            }), (0, i.jsx)(d.Button, {
                variant: "overlay-primary",
                text: f.intl.string(f.t.NcC759),
                onClick: () => {
                    let e = m.A.generateNonce();
                    c.w.set(x, e), c.w.set(I, Date.now() + N);
                    let t = new URL(A.J$u),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let i = new URLSearchParams;
                    i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), i.set("key", e), i.set("fingerprint", j), t.search = i.toString(), p.default.track(A.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.v)(j),
                        source: "mobile_web_handoff",
                        destination: A.J$u
                    }, {
                        fingerprint: j,
                        flush: !0
                    }), window.location.href = t.toString()
                }
            })]
        })
    }