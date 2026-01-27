/** Chunk was on 86142 **/
/** chunk id: 957622, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(747238), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(960488),
    a = n(607399),
    o = n(397927),
    c = n(830215),
    d = n(854378),
    u = n(309165),
    h = n(976860),
    p = n(961350),
    g = n(954571),
    _ = n(723702),
    f = n(877062),
    m = n(501187),
    A = n(652215),
    x = n(613057),
    E = n(985018);
let v = e => {
    let {
        title: t,
        subtitle: n,
        buttonText: i,
        buttonOnClick: s
    } = e;
    return (0, r.jsx)(d.Ay, {
        children: (0, r.jsxs)(o.BJc, {
            gap: 24,
            children: [(0, r.jsxs)(o.BJc, {
                gap: 8,
                children: [(0, r.jsx)(d.hE, {
                    children: t
                }), (0, r.jsx)(d.tK, {
                    children: n
                })]
            }), (0, r.jsx)(o.Button, {
                onClick: s,
                text: i,
                fullWidth: !0
            })]
        })
    })
};

function b(e) {
    let {
        match: t,
        location: l
    } = e, o = (0, s.parse)(l.search).token, [u, b] = i.useState("loading"), y = i.useRef(!1), j = i.useCallback(async e => {
        try {
            g.default.track(A.HAw.ONE_TIME_LOGIN_ATTEMPTED, {
                source: "web_page"
            }), await c.A.oneTimeLogin(e), b("login_success"), g.default.track(A.HAw.LOGIN_SUCCESSFUL, {
                source: "web_page",
                login_method: "one_time_login"
            }), n.g.location.assign(A.BVt.APP)
        } catch (t) {
            let e = t instanceof Error ? t.message : "Unknown error";
            g.default.track(A.HAw.ONE_TIME_LOGIN_ERROR, {
                source: "web_page",
                error_reason: "api_error",
                error_message: e
            }), b("error")
        }
    }, []), I = i.useCallback(e => {
        var t;
        let n = null != (t = p.default.getFingerprint()) ? t : p.default.getId(),
            r = "discord://login/one-time?token=".concat(encodeURIComponent(e));
        f.A.launch(r, e => {
            e ? (g.default.track(A.HAw.DEEP_LINK_CLICKED, {
                source: "web_page",
                destination: "discord://login/one-time",
                deep_link_provider: "protocol",
                fingerprint: n
            }), b("app_launched")) : b("app_launch_not_supported")
        })
    }, []), O = i.useCallback(e => {
        var t;
        let r = null != (t = p.default.getFingerprint()) ? t : p.default.getId();
        Promise.resolve().then(n.bind(n, 129014)).then(t => {
            let {
                default: n
            } = t;
            n.request(A.e$_.DEEP_LINK, {
                type: x.XK.ONE_TIME_LOGIN,
                params: {
                    token: e,
                    fingerprint: r
                }
            }).then(t => {
                null != t && t ? (g.default.track(A.HAw.DEEP_LINK_CLICKED, {
                    source: "web_page",
                    destination: "one_time_login_modal",
                    deep_link_provider: "rpc",
                    fingerprint: r
                }), b("app_launched")) : I(e)
            }).catch(() => {
                I(e)
            }).then(() => n.disconnect())
        })
    }, [I]);
    if (i.useEffect(() => {
            let e = null != o && "string" == typeof o,
                t = a.Fr ? "mobile" : a.v1 ? "tablet" : (0, _.isDesktop)() ? "desktop_app" : "web";
            if (g.default.track(A.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, {
                    has_token: e,
                    device_type: t
                }), !e) return void b("error");
            if (a.Fr || a.v1) {
                var n;
                let e = null == (n = g.default.getSuperProperties()) ? void 0 : n.os;
                g.default.track(A.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_ui_shown",
                    device_type: t,
                    platform: e
                });
                return
            }(0, _.isDesktop)() ? j(o): y.current || (y.current = !0, b("rpc_attempting"), O(o))
        }, [o, l, j, O]), a.Fr || a.v1) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(m.W, {
            token: o,
            hasError: "error" === u,
            errorReason: e
        })
    }
    if ((0, h.MX)()) return null;
    if ("app_launched" === u) return (0, r.jsx)(v, {
        title: E.intl.string(E.t.RvUUOy),
        subtitle: E.intl.string(E.t["5/lR0g"]),
        buttonText: E.intl.string(E.t["2ixEBi"]),
        buttonOnClick: () => {
            g.default.track(A.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, {
                previous_status: u
            }), j(o)
        }
    });
    if ("app_launch_not_supported" === u) return (0, r.jsx)(v, {
        title: E.intl.string(E.t.qq4tjT),
        subtitle: E.intl.string(E.t.CVxYRo),
        buttonText: E.intl.string(E.t["2ixEBi"]),
        buttonOnClick: () => j(o)
    });
    if ("error" === u) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(v, {
            title: E.intl.string(E.t.RtCSr1),
            subtitle: E.intl.string(E.t["S+YjYJ"]),
            buttonText: E.intl.string(E.t.j3cG2p),
            buttonOnClick: () => {
                g.default.track(A.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
                    error_reason: e
                }), (0, h.pX)(A.BVt.LOGIN)
            }
        })
    }
    return (0, r.jsx)(d.Ay, {
        children: (0, r.jsx)(d.CK, {})
    })
}
let y = function(e) {
    let {
        enabled: t
    } = (0, u.lq)("OneTimeLoginCardWrapper");
    return t ? (0, r.jsx)(b, function(e) {
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
    }({}, e)) : (0, r.jsx)(l.rd, {
        to: A.BVt.LOGIN
    })
}