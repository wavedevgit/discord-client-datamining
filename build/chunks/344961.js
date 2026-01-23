/** Chunk was on 86142 **/
/** chunk id: 344961, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P
}), n(896048), n(65821), n(457529);
var r = n(627968),
    i = n(64700),
    s = n(430370),
    l = n(158390),
    a = n(417597),
    o = n(562465),
    c = n(397927),
    u = n(830215),
    d = n(730134),
    h = n(598047),
    p = n(765548),
    g = n(854378),
    m = n(414121),
    f = n(626584),
    _ = n(961350),
    A = n(203982),
    x = n(723702),
    E = n(337905),
    v = n(427262),
    j = n(837921),
    y = n(652215),
    b = n(818348),
    S = n(985018),
    I = n(947089),
    N = n(473169);
let O = n(906118),
    C = new f.A("LoginQRSocket");

function T(e) {
    let {
        text: t = ""
    } = e, [n, s] = i.useState(!1);
    return i.useEffect(() => {
        let e = new Image;
        e.src = O, e.onload = () => s(!0), e.onerror = () => s(!0)
    }, [O]), i.useEffect(() => {
        n && c.ORC.announce(S.intl.string(S.t.j2p125))
    }, [n]), (0, r.jsx)("div", {
        className: I.Ac,
        children: "" !== t && n ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.Ay, {
                className: I.JB,
                size: 160,
                text: t
            }), (0, r.jsx)("div", {
                className: I.R6,
                children: (0, r.jsx)("img", {
                    src: O,
                    alt: ""
                })
            })]
        }) : (0, r.jsx)("div", {
            className: I.R6,
            "aria-label": S.intl.string(S.t.BUGkVF),
            "aria-busy": !0,
            children: (0, r.jsx)(c.y$y, {
                className: I.JB,
                type: c.y$y.Type.WANDERING_CUBES,
                "aria-hidden": !0
            })
        })
    })
}
let R = e => {
    let {
        className: t,
        children: n
    } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: t,
        children: n
    })
};

function w(e) {
    let {
        state: t,
        cancel: n,
        errorMessage: i,
        conditionalMediationAbortController: l,
        isPasswordlessActive: a
    } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(T, {
                    text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                }), (0, r.jsx)(g.hE, {
                    className: N.QB,
                    children: S.intl.string(S.t.UPiHaL)
                }), null != i ? (0, r.jsx)(R, {
                    children: i
                }) : (0, r.jsx)(g.tK, {
                    children: S.intl.format(S.t["Qq+A6i"], {})
                }), (0, r.jsx)(c.BJc, {
                    padding: 8,
                    align: "center",
                    children: (0, r.jsx)(c.QWc, {
                        text: S.intl.string(S.t["/kpMDt"]),
                        textVariant: "text-sm/normal",
                        onClick: () => {
                            let e;
                            return e = x.isPlatformEmbedded && j.Ay.supportsFeature(y.BYE.WEBAUTHN) ? j.Ay.webAuthnAuthenticate : e => {
                                let t = (0, s.d5)(JSON.parse(e));
                                return (0, s.Jt)(t).then(e => JSON.stringify(e))
                            }, void u.A.authenticatePasswordless({
                                authenticateFunc: e,
                                conditionalMediationAbortController: l
                            }).catch(() => {})
                        },
                        disabled: a
                    })
                })]
            });
        case 3:
        case 2: {
            let {
                user: e
            } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(d.A, {
                    className: I.b4,
                    user: e,
                    size: c._3J.SIZE_120,
                    isMobile: !0,
                    status: b.cl.ONLINE
                }), (0, r.jsx)(g.hE, {
                    className: N.QB,
                    children: S.intl.string(S.t.apGCUT)
                }), (0, r.jsx)(g.tK, {
                    children: S.intl.format(S.t.Cbl5JK, {
                        username: "".concat(v.Ay.getUserTag(e))
                    })
                }), (0, r.jsx)("div", {
                    className: I.Z,
                    children: (0, r.jsx)(c.QWc, {
                        text: S.intl.string(S.t.nOOhwo),
                        textVariant: "text-sm/normal",
                        onClick: n
                    })
                })]
            })
        }
        case 4:
        case 5:
            return (0, r.jsx)(c.y$y, {
                type: c.y$y.Type.WANDERING_CUBES
            })
    }
}

function P(e) {
    let {
        authTokenCallback: t,
        conditionalMediationAbortController: n
    } = e, s = (0, a.bG)([_.default], () => _.default.getIsPasswordlessActive()), {
        state: u,
        rsaKeyPair: d,
        cancel: g,
        handleFailure: m
    } = function(e) {
        let [t, n] = i.useState(0), [r, s] = i.useState(!1), [a, o] = i.useState({
            step: 0
        }), [c, u] = i.useState(null), d = (0, h.A)(), g = i.useMemo(() => new l.A(1500, 3e4), []), m = (0, p.A)(() => {
            o({
                step: 0
            }), d ? n(e => e + 1) : (C.info("document is not visible, will defer reconnection when document becomes visible."), s(!0))
        }), f = i.useCallback(() => {
            C.error("Could not complete QR code login, trying to restart with a new QR code."), o({
                step: 0
            }), g.pending || g.fail(m)
        }, [m, g]);
        return i.useEffect(() => {
            d && r && 0 === a.step && (C.info("reconnecting, now that document is visible"), s(!1), n(e => e + 1))
        }, [a, d, r, s]), i.useEffect(() => {
            let t = Date.now(),
                n = "".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2");
            n.startsWith("//") && (n = "wss:".concat(n));
            let r = new WebSocket(n);
            C.info("[0ms] connecting to ".concat(n));
            let i = e => C.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
                s = null,
                l = null,
                a = null,
                c = null,
                d = !0;

            function h() {
                if (null != s) return s;
                throw Error("No key pair set")
            }
            let p = () => {
                d ? (d = !1, r.send(JSON.stringify({
                    op: "heartbeat"
                }))) : (i("heartbeat timeout, reconnecting."), r.close(), f())
            };
            return r.onmessage = async t => {
                let {
                    data: n
                } = t, s = JSON.parse(n);
                switch (s.op) {
                    case "nonce_proof": {
                        let e = s.encrypted_nonce,
                            t = await (0, E.lU)(h(), e);
                        i("computed nonce proof"), r.send(JSON.stringify({
                            op: "nonce_proof",
                            nonce: t
                        }));
                        return
                    }
                    case "pending_remote_init": {
                        g.succeed(), A._.dispatch(y.jej.WAVE_EMPHASIZE);
                        let e = await (0, E.Fs)(h());
                        if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                        i("handshake complete awaiting remote auth."), o({
                            step: 1,
                            fingerprint: e
                        });
                        return
                    }
                    case "pending_login": {
                        let e = s.ticket;
                        null == e && f(), o({
                            step: 4,
                            ticket: e
                        });
                        return
                    }
                    case "pending_ticket": {
                        A._.dispatch(y.jej.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting ticket/cancel.");
                        let e = s.encrypted_user_payload;
                        o({
                            step: 3,
                            user: await (0, E.n7)(h(), e)
                        });
                        return
                    }
                    case "pending_finish": {
                        A._.dispatch(y.jej.WAVE_EMPHASIZE), i("remote auth handshake started, awaiting finish/cancel.");
                        let e = s.encrypted_user_payload;
                        o({
                            step: 2,
                            user: await (0, E.n7)(h(), e)
                        });
                        return
                    }
                    case "finish": {
                        A._.dispatch(y.jej.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                        let t = s.encrypted_token;
                        o({
                            step: 5
                        }), e(await (0, E.S4)(h(), t), await (0, E.Fs)(h()));
                        return
                    }
                    case "cancel":
                        i("remote auth handshake cancelled."), m();
                        return;
                    case "hello": {
                        i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                        let e = s.heartbeat_interval;
                        c = setTimeout(() => {
                            c = null, p(), a = setInterval(p, e)
                        }, Math.floor(e * Math.random()));
                        return
                    }
                    case "heartbeat_ack":
                        d = !0
                }
            }, r.onopen = async () => {
                s = await (0, E.T8)(), l = await (0, E.Jn)(s);
                let e = await (0, E.Fs)(s);
                i("connected, handshaking with fingerprint: ".concat(e)), r.send(JSON.stringify({
                    op: "init",
                    encoded_public_key: l
                })), u(s)
            }, r.onclose = e => {
                i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), f()
            }, r.onerror = e => {
                i("disconnected, error: ".concat(JSON.stringify(e))), f()
            }, () => {
                i("cleaning up"), r.onopen = () => null, r.onmessage = () => null, r.onclose = () => null, r.onerror = () => null, r.close(1e3), g.cancel(), null != c && clearTimeout(c), null != a && clearInterval(a)
            }
        }, [m, e, t, g, f]), {
            state: a,
            rsaKeyPair: c,
            cancel: m,
            handleFailure: f
        }
    }(t), f = function(e) {
        switch (e) {
            case 0:
            case 1:
                return 0;
            case 3:
            case 2:
            case 4:
            case 5:
                return 1
        }
    }(u.step);
    return i.useEffect(() => {
        4 === u.step && null != u.ticket && o.Bo.post({
            url: y.Rsh.REMOTE_AUTH_LOGIN,
            body: {
                ticket: u.ticket
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }).then(async e => {
            if (null != d) try {
                let n = await (0, E.S4)(d, e.body.encrypted_token),
                    r = await (0, E.Fs)(d);
                t(n, r)
            } catch (e) {
                m()
            } else m()
        }).catch(() => {
            m()
        })
    }, [u, t, d, m]), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: I.AC
        }), (0, r.jsx)(c.YC2, {
            fillParent: !0,
            className: I.ZF,
            step: f,
            steps: [0, 1],
            children: (0, r.jsx)("div", {
                className: I.vP,
                children: (0, r.jsx)(w, {
                    state: u,
                    cancel: g,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: s
                })
            })
        })]
    })
}