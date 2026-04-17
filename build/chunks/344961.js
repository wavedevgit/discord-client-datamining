/** chunk id: 344961 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var i = n(627968),
    s = n(64700),
    r = n(417597),
    l = n(397927),
    a = n(830215),
    o = n(730134),
    c = n(598047),
    d = n(854378),
    u = n(414121),
    _ = n(525711),
    h = n(787610),
    g = n(293731),
    p = n(961350),
    m = n(723702),
    A = n(427262),
    f = n(837921),
    E = n(652215),
    x = n(818348),
    I = n(985018),
    N = n(611008),
    v = n(818050);
let T = n(906118);

function j(e) {
    let {
        text: t = ""
    } = e, [n, r] = s.useState(!1);
    return s.useEffect(() => {
        let e = new Image;
        e.src = T, e.onload = () => r(!0), e.onerror = () => r(!0)
    }, [T]), s.useEffect(() => {
        n && l.ORC.announce(I.intl.string(I.t.j2p125))
    }, [n]), (0, i.jsx)("div", {
        className: N.Ac,
        children: "" !== t && n ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.Ay, {
                className: N.JB,
                size: 160,
                text: t
            }), (0, i.jsx)("div", {
                className: N.R6,
                children: (0, i.jsx)("img", {
                    src: T,
                    alt: ""
                })
            })]
        }) : (0, i.jsx)("div", {
            className: N.R6,
            "aria-label": I.intl.string(I.t.BUGkVF),
            "aria-busy": !0,
            children: (0, i.jsx)(l.y$y, {
                className: N.JB,
                type: l.y$y.Type.WANDERING_CUBES,
                "aria-hidden": !0
            })
        })
    })
}
let C = e => {
    let {
        className: t,
        children: n
    } = e;
    return (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: t,
        children: n
    })
};

function S(e) {
    let {
        state: t,
        cancel: n,
        errorMessage: s,
        conditionalMediationAbortController: r,
        isPasswordlessActive: c
    } = e;
    switch (t.step) {
        case _.b.INITIALIZING:
        case _.b.PENDING_REMOTE_INIT:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j, {
                    text: t.step === _.b.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : ""
                }), (0, i.jsx)(d.hE, {
                    className: v.QB,
                    children: I.intl.string(I.t.UPiHaL)
                }), null != s ? (0, i.jsx)(C, {
                    children: s
                }) : (0, i.jsx)(d.tK, {
                    children: I.intl.format(I.t["Qq+A6i"], {})
                }), (0, i.jsx)(l.BJc, {
                    padding: 8,
                    align: "center",
                    children: (0, i.jsx)(l.QWc, {
                        text: I.intl.string(I.t["/kpMDt"]),
                        textVariant: "text-sm/normal",
                        onClick: () => {
                            let e;
                            return e = m.isPlatformEmbedded && f.Ay.supportsFeature(E.BYE.WEBAUTHN) ? f.Ay.webAuthnAuthenticate : g.J, void a.A.authenticatePasswordless({
                                authenticateFunc: e,
                                conditionalMediationAbortController: r
                            }).catch(() => {})
                        },
                        disabled: c
                    })
                })]
            });
        case _.b.PENDING_TICKET: {
            let {
                user: e
            } = t;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.A, {
                    className: N.b4,
                    user: e,
                    size: l._3J.SIZE_120,
                    isMobile: !0,
                    status: x.cl.ONLINE
                }), (0, i.jsx)(d.hE, {
                    className: v.QB,
                    children: I.intl.string(I.t.apGCUT)
                }), (0, i.jsx)(d.tK, {
                    children: I.intl.format(I.t.Cbl5JK, {
                        username: `${A.Ay.getUserTag(e)}`
                    })
                }), (0, i.jsx)("div", {
                    className: N.Z,
                    children: (0, i.jsx)(l.QWc, {
                        text: I.intl.string(I.t.nOOhwo),
                        textVariant: "text-sm/normal",
                        onClick: n
                    })
                })]
            })
        }
        case _.b.PENDING_LOGIN:
        case _.b.FINISH:
            return (0, i.jsx)(l.y$y, {
                type: l.y$y.Type.WANDERING_CUBES
            })
    }
}

function y(e) {
    let {
        onAuthenticateSuccess: t,
        conditionalMediationAbortController: n
    } = e, s = (0, r.bG)([p.default], () => p.default.getIsPasswordlessActive()), a = (0, c.A)(), {
        state: o,
        cancel: d
    } = (0, h.H)(t, a), u = function(e) {
        switch (e) {
            case _.b.INITIALIZING:
            case _.b.PENDING_REMOTE_INIT:
                return 0;
            case _.b.PENDING_TICKET:
            case _.b.PENDING_LOGIN:
            case _.b.FINISH:
                return 1
        }
    }(o.step);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: N.AC
        }), (0, i.jsx)(l.YC2, {
            fillParent: !0,
            className: N.ZF,
            step: u,
            steps: [0, 1],
            children: (0, i.jsx)("div", {
                className: N.vP,
                children: (0, i.jsx)(S, {
                    state: o,
                    cancel: d,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: s
                })
            })
        })]
    })
}