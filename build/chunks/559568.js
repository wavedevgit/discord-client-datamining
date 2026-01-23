/** Chunk was on 86142 **/
/** chunk id: 559568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048), n(747238), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(492834);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(80703),
    a = n(311907),
    o = n(562465),
    c = n(506774),
    u = n(421380),
    d = n(397927),
    h = n(73153),
    p = n(830215),
    g = n(961350),
    m = n(954571),
    f = n(927813),
    _ = n(104798),
    A = n(652215),
    x = n(985018),
    E = n(654626);
let v = "mweb_handoff_nonce",
    j = "mweb_handoff_nonce_expiration",
    y = +f.A.Millis.MINUTE,
    b = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    S = new Set(["deep_link_failed"]),
    I = () => {
        c.w.remove(v), c.w.remove(j)
    },
    N = () => {
        let e = (0, a.bG)([g.default], () => g.default.getFingerprint()),
            {
                fingerprint: t,
                handoff_token: n
            } = (0, s.parse)(window.location.search),
            f = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
            N = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f && e !== f && h.h.dispatch({
                type: "FINGERPRINT",
                fingerprint: f
            })
        }, [f, e]);
        let [O, C] = i.useState(null), T = i.useCallback(e => {
            C(e), m.default.track(A.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                reason: e,
                fingerprint: (0, l.v)(N)
            }, {
                fingerprint: N
            })
        }, [C, N]), R = c.w.get(v);
        if ("null" === n && null === O && T("deep_link_failed"), null != n && "null" !== n && null == R && null === O && T("nonce_missing"), i.useEffect(() => {
                if (null != R) {
                    let e = c.w.get(j);
                    (null == e || Date.now() >= e) && (T("nonce_expired"), I())
                }
            }, [R, T]), i.useEffect(() => {
                null != n && "null" !== n && null != R && null == O && o.Bo.post({
                    url: A.Rsh.HANDOFF_EXCHANGE,
                    body: {
                        key: R,
                        handoff_token: n
                    },
                    rejectWithError: !0
                }).then(e => p.A.loginToken(e.body.token, !1)).then(() => {
                    m.default.track(A.HAw.LOGIN_SUCCESSFUL, {
                        source: A.mdB.MOBILE_WEB_HANDOFF,
                        is_new_user: !1,
                        fingerprint: (0, l.v)(N)
                    });
                    let e = new URL(window.location.href),
                        t = new URLSearchParams(e.search);
                    t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                }).catch(() => {
                    T("handoff_exchange")
                }).finally(() => {
                    I()
                })
            }, [n, R, O, N, T]), null == N) return null;
        let w = null == O ? (0, r.jsxs)(r.Fragment, {
            children: [x.intl.string(x.t.uJ1JsY), (0, r.jsx)("br", {}), x.intl.string(x.t.GHVWAs)]
        }) : S.has(O) ? x.intl.string(x.t.EPt55r) : b.has(O) ? x.intl.string(x.t.g87kTp) : void 0;
        return null != O && S.has(O) ? (0, r.jsx)("div", {
            className: E.Un,
            children: (0, r.jsx)(d.Text, {
                color: "interactive-text-default",
                variant: "text-sm/semibold",
                children: w
            })
        }) : (0, r.jsxs)("div", {
            className: E.kL,
            children: [(0, r.jsx)(d.Text, {
                variant: "text-sm/semibold",
                children: w
            }), (0, r.jsx)(u.$n, {
                color: u.$n.Colors.BRAND_INVERTED,
                onClick: () => {
                    let e = _.A.generateNonce();
                    c.w.set(v, e), c.w.set(j, Date.now() + y);
                    let t = new URL(A.J$u),
                        n = new URLSearchParams(window.location.search);
                    n.delete("fingerprint"), n.delete("handoff_token");
                    let r = new URLSearchParams;
                    r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), r.set("key", e), r.set("fingerprint", N), t.search = r.toString(), m.default.track(A.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.v)(N),
                        source: "mobile_web_handoff",
                        destination: A.J$u
                    }, {
                        fingerprint: N,
                        flush: !0
                    }), window.location.href = t.toString()
                },
                children: (0, r.jsx)(d.Text, {
                    className: E._d,
                    variant: "text-sm/semibold",
                    children: x.intl.string(x.t.NcC759)
                })
            })]
        })
    }