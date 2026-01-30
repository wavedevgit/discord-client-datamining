/** chunk id: 501187, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => m
});
var r = n(627968);
n(64700);
var i = n(607399),
    s = n(49485),
    l = n(80703),
    a = n(492917),
    o = n(397927),
    c = n(976860),
    u = n(961350),
    d = n(954571),
    h = n(877062),
    p = n(652215),
    g = n(985018),
    f = n(886083),
    _ = n(604880);

function m(e) {
    let {
        token: t,
        hasError: n,
        errorReason: m
    } = e;
    return n ? (0, r.jsxs)("div", {
        className: f.MY,
        children: [(0, r.jsx)("div", {
            className: f.r$,
            children: (0, r.jsx)("img", {
                src: _,
                alt: ""
            })
        }), (0, r.jsxs)("div", {
            className: f.Qs,
            children: [(0, r.jsx)(a.DeQ, {
                alt: ""
            }), (0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                className: f.ky,
                children: g.intl.string(g.t.RtCSr1)
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: f.G3,
                children: g.intl.string(g.t["S+YjYJ"])
            }), (0, r.jsx)(o.Button, {
                variant: "primary",
                text: g.intl.string(g.t.j3cG2p),
                fullWidth: !0,
                onClick: () => {
                    d.default.track(p.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
                        error_reason: m
                    }), (0, c.pX)(p.BVt.LOGIN)
                }
            })]
        })]
    }) : (0, r.jsxs)("div", {
        className: f.MY,
        children: [(0, r.jsx)("div", {
            className: f.r$,
            children: (0, r.jsx)("img", {
                src: _,
                alt: ""
            })
        }), (0, r.jsxs)("div", {
            className: f.Qs,
            children: [(0, r.jsx)(a.DeQ, {
                alt: ""
            }), (0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                className: f.ky,
                children: g.intl.string(g.t["9h/0Rl"])
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: f.G3,
                children: g.intl.string(g.t.Wgm7Om)
            }), (0, r.jsx)(o.Button, {
                variant: "primary",
                text: g.intl.string(g.t.NydsTd),
                fullWidth: !0,
                onClick: () => {
                    var e;
                    let n, r;
                    n = function(e) {
                        var t;
                        let n = null == (t = platform.os) ? void 0 : t.family;
                        if ("Android" === n || "iOS" === n) {
                            let t = u.default.getFingerprint(),
                                n = (0, s.I_)(),
                                r = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/login/one-time?token=").concat(e);
                            return (0, s.Ay)(r, {
                                utmSource: "one-time-login",
                                fingerprint: t,
                                attemptId: n
                            })
                        }
                        return "discord://"
                    }(t), r = (0, s.X7)(n), d.default.track(p.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_button_clicked",
                        device_type: i.Fr ? "mobile" : "tablet",
                        platform: null == (e = d.default.getSuperProperties()) ? void 0 : e.os
                    }), null != r && d.default.track(p.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.v)(r.fingerprint),
                        attempt_id: r.attemptId,
                        source: r.utmSource
                    }), h.A.launch(n, e => {
                        e || (0, c.bG)({
                            pathname: p.BVt.LOGIN
                        })
                    })
                }
            })]
        })]
    })
}