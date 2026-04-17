/** chunk id: 957622 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(607399),
    a = n(397927),
    o = n(830215),
    c = n(854378),
    d = n(976860),
    u = n(961350),
    _ = n(954571),
    h = n(723702),
    g = n(877062),
    p = n(501187),
    m = n(652215),
    A = n(613057),
    f = n(985018);
let E = e => {
        let {
            title: t,
            subtitle: n,
            buttonText: s,
            buttonOnClick: r
        } = e;
        return (0, i.jsx)(c.Ay, {
            children: (0, i.jsxs)(a.BJc, {
                gap: 24,
                children: [(0, i.jsxs)(a.BJc, {
                    gap: 8,
                    children: [(0, i.jsx)(c.hE, {
                        children: t
                    }), (0, i.jsx)(c.tK, {
                        children: n
                    })]
                }), (0, i.jsx)(a.Button, {
                    onClick: r,
                    text: s,
                    fullWidth: !0
                })]
            })
        })
    },
    x = function(e) {
        let {
            match: t,
            location: a
        } = e, x = (0, r.parse)(a.search).token, [I, N] = s.useState("loading"), v = s.useRef(!1), T = s.useCallback(async e => {
            try {
                _.default.track(m.HAw.ONE_TIME_LOGIN_ATTEMPTED, {
                    source: "web_page"
                }), await o.A.oneTimeLogin(e), N("login_success"), _.default.track(m.HAw.LOGIN_SUCCESSFUL, {
                    source: "web_page",
                    login_method: "one_time_login"
                }), n.g.location.assign(m.BVt.APP)
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                _.default.track(m.HAw.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e
                }), N("error")
            }
        }, []), j = s.useCallback(e => {
            let t = u.default.getFingerprint() ?? u.default.getId(),
                n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
            g.A.launch(n, e => {
                e ? (_.default.track(m.HAw.DEEP_LINK_CLICKED, {
                    source: "web_page",
                    destination: "discord://login/one-time",
                    deep_link_provider: "protocol",
                    fingerprint: t
                }), N("app_launched")) : N("app_launch_not_supported")
            })
        }, []), C = s.useCallback(e => {
            let t = u.default.getFingerprint() ?? u.default.getId(),
                i = u.default.getInstallationForTracking();
            Promise.resolve().then(n.bind(n, 129014)).then(n => {
                let {
                    default: s
                } = n;
                s.request(m.e$_.DEEP_LINK, {
                    type: A.XK.ONE_TIME_LOGIN,
                    params: {
                        token: e,
                        fingerprint: t,
                        installationId: i
                    }
                }).then(n => {
                    n ? (_.default.track(m.HAw.DEEP_LINK_CLICKED, {
                        source: "web_page",
                        destination: "one_time_login_modal",
                        deep_link_provider: "rpc",
                        fingerprint: t
                    }), N("app_launched")) : j(e)
                }).catch(() => {
                    j(e)
                }).then(() => s.disconnect())
            })
        }, [j]);
        if (s.useEffect(() => {
                let e = null != x && "string" == typeof x,
                    t = l.Fr ? "mobile" : l.v1 ? "tablet" : (0, h.isDesktop)() ? "desktop_app" : "web";
                if (_.default.track(m.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, {
                        has_token: e,
                        device_type: t
                    }), !e) return void N("error");
                if (l.Fr || l.v1) {
                    let e = _.default.getSuperProperties()?.os;
                    _.default.track(m.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e
                    });
                    return
                }(0, h.isDesktop)() ? T(x): v.current || (v.current = !0, N("rpc_attempting"), C(x))
            }, [x, a, T, C]), l.Fr || l.v1) {
            let e = null == x || "string" != typeof x ? "missing_token" : "invalid_token";
            return (0, i.jsx)(p.W, {
                token: x,
                hasError: "error" === I,
                errorReason: e
            })
        }
        if ((0, d.MX)()) return null;
        if ("app_launched" === I) return (0, i.jsx)(E, {
            title: f.intl.string(f.t.RvUUOy),
            subtitle: f.intl.string(f.t["5/lR0g"]),
            buttonText: f.intl.string(f.t["2ixEBi"]),
            buttonOnClick: () => {
                _.default.track(m.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, {
                    previous_status: I
                }), T(x)
            }
        });
        if ("app_launch_not_supported" === I) return (0, i.jsx)(E, {
            title: f.intl.string(f.t.qq4tjT),
            subtitle: f.intl.string(f.t.CVxYRo),
            buttonText: f.intl.string(f.t["2ixEBi"]),
            buttonOnClick: () => T(x)
        });
        if ("error" === I) {
            let e = null == x || "string" != typeof x ? "missing_token" : "invalid_token";
            return (0, i.jsx)(E, {
                title: f.intl.string(f.t.RtCSr1),
                subtitle: f.intl.string(f.t["S+YjYJ"]),
                buttonText: f.intl.string(f.t.j3cG2p),
                buttonOnClick: () => {
                    _.default.track(m.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
                        error_reason: e
                    }), (0, d.pX)(m.BVt.LOGIN)
                }
            })
        }
        return (0, i.jsx)(c.Ay, {
            children: (0, i.jsx)(c.CK, {})
        })
    }