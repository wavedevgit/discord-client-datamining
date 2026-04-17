/** chunk id: 501187 params = (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => A
});
var i = n(627968);
n(64700);
var s = n(607399),
    r = n(49485),
    l = n(80703),
    a = n(492917),
    o = n(397927),
    c = n(976860),
    d = n(961350),
    u = n(954571),
    _ = n(877062),
    h = n(652215),
    g = n(985018),
    p = n(611346),
    m = n(604880);

function A(e) {
    let {
        token: t,
        hasError: n,
        errorReason: A
    } = e;
    return n ? (0, i.jsxs)("div", {
        className: p.MY,
        children: [(0, i.jsx)("div", {
            className: p.r$,
            children: (0, i.jsx)("img", {
                src: m,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: p.Qs,
            children: [(0, i.jsx)(a.DeQ, {
                alt: ""
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                className: p.ky,
                children: g.intl.string(g.t.RtCSr1)
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                className: p.G3,
                children: g.intl.string(g.t["S+YjYJ"])
            }), (0, i.jsx)(o.Button, {
                variant: "primary",
                text: g.intl.string(g.t.j3cG2p),
                fullWidth: !0,
                onClick: () => {
                    u.default.track(h.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
                        error_reason: A
                    }), (0, c.pX)(h.BVt.LOGIN)
                }
            })]
        })]
    }) : (0, i.jsxs)("div", {
        className: p.MY,
        children: [(0, i.jsx)("div", {
            className: p.r$,
            children: (0, i.jsx)("img", {
                src: m,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: p.Qs,
            children: [(0, i.jsx)(a.DeQ, {
                alt: ""
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                className: p.ky,
                children: g.intl.string(g.t["9h/0Rl"])
            }), (0, i.jsx)(o.Text, {
                variant: "text-md/normal",
                className: p.G3,
                children: g.intl.string(g.t.Wgm7Om)
            }), (0, i.jsx)(o.Button, {
                variant: "primary",
                text: g.intl.string(g.t.NydsTd),
                fullWidth: !0,
                onClick: () => {
                    let e, n;
                    e = function(e) {
                        let t = platform.os?.family;
                        if ("Android" === t || "iOS" === t) {
                            let t = d.default.getFingerprint(),
                                n = (0, r.I_)(),
                                i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                            return (0, r.Ay)(i, {
                                utmSource: "one-time-login",
                                fingerprint: t,
                                attemptId: n
                            })
                        }
                        return "discord://"
                    }(t), n = (0, r.X7)(e), u.default.track(h.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_button_clicked",
                        device_type: s.Fr ? "mobile" : "tablet",
                        platform: u.default.getSuperProperties()?.os
                    }), null != n && u.default.track(h.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, l.v)(n.fingerprint),
                        attempt_id: n.attemptId,
                        source: n.utmSource
                    }), _.A.launch(e, e => {
                        e || (0, c.bG)({
                            pathname: h.BVt.LOGIN
                        })
                    })
                }
            })]
        })]
    })
}