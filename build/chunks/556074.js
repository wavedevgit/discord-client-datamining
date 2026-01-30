/** chunk id: 556074, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    VerifyAccountDeekLink: () => E,
    VerifyAccountLoading: () => w,
    default: () => g
}), n(896048), n(747238), n(812715), n(492834);
var r = n(627968),
    l = n(64700),
    c = n(960488),
    a = n(607399),
    o = n(590053),
    i = n(421380),
    s = n(397927),
    u = n(77468),
    d = n(964459),
    f = n(458518),
    p = n(573648),
    O = n(129014),
    N = n(998218),
    m = n(950198),
    y = n(652215),
    S = n(985018),
    C = n(538644);
let b = null != window.opener;

function g() {
    var e, t;
    let n = (0, c.W6)(),
        i = (0, f.o)(),
        s = i.get("code"),
        O = i.get("oauth_verifier"),
        S = null != (e = i.get("state")) ? e : "",
        C = i.get("loading"),
        g = null != (t = i.get("iss")) ? t : void 0,
        {
            type: j
        } = (0, c.g)(),
        A = (0, m.mw)(j),
        [R, T] = l.useState(!1),
        [D, x] = l.useState(!1),
        I = (0, d.A)(),
        k = null == O ? null != s ? s : "" : O;
    l.useEffect(() => {
        let e;
        if (null != C) return;
        for (let t of i.keys()) t.startsWith("openid.") && (null == e && (e = {}), e[t] = i.get(t));
        let t = (0, m.mw)(j);
        !async function() {
            if (null == t || !p.A.isSupported(t)) return;

            function r(e) {
                let {
                    status: r,
                    body: l
                } = e;
                if (null != t) {
                    if (null == l ? void 0 : l.redirect) {
                        window.location = l.redirect;
                        return
                    }
                    if ([200, 204].includes(r)) {
                        n.replace(y.BVt.CONNECTIONS_SUCCESS(t)), b && window.close();
                        return
                    }(null == l ? void 0 : l.code) != null && i.append("error-code", l.code), n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
                }
            }
            if (await _({
                    platformType: t,
                    code: k,
                    state: S,
                    openidParams: e,
                    iss: g,
                    handleCallbackResponse: r
                })) return;
            let l = await v(t, S, k, e, g);
            0 === l ? T(!0) : 1 === l ? n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : 3 === l ? a.Fr ? x(!0) : n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : h({
                platformType: t,
                state: S,
                handleCallbackResponse: r,
                handleCallbackError: e => {
                    var r;
                    (null == e || null == (r = e.body) ? void 0 : r.code) != null && i.append("error-code", e.body.code), n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
                },
                openidParams: e,
                code: k,
                iss: g
            })
        }()
    }, [k, n, C, j, i, S, g]), l.useEffect(() => {
        let e;
        if (!R) return;
        let t = 0;
        async function r() {
            if (null == A) return;
            let {
                handoff_status: l,
                success_redirect: c
            } = (await u.A.getHandoffStatus(A, S)).body;
            if (l === o.N.HANDOFF_SUCCESS)
                if (null == N.A.toURLSafe(c)) return n.replace(y.BVt.CONNECTIONS_SUCCESS(A));
                else {
                    window.location = c;
                    return
                } if (l === o.N.HANDOFF_ERROR || t >= 10) return n.replace(y.BVt.CONNECTIONS_ERROR(A));
            e = setTimeout(() => {
                I() && (t += 1, r())
            }, 1e3)
        }
        return r(), () => {
            null != e && clearTimeout(e)
        }
    }, [I, n, A, R, S]);
    let P = l.useMemo(() => {
        if (null != A) return "discord://".concat(y.BVt.CONNECTIONS(A), "/?").concat(i.toString())
    }, [A, i]);
    return null != A && p.A.isSupported(A) ? D ? (0, r.jsx)(E, {
        platformType: A,
        deeplink: P,
        onClick: () => {
            x(!1), T(!0)
        }
    }) : (0, r.jsx)(w, {
        platformType: A
    }) : null
}

function w(e) {
    let {
        platformType: t
    } = e, n = p.A.get(t);
    return (0, r.jsxs)(m.mP, {
        platformType: t,
        children: [(0, r.jsx)("div", {
            className: C.iU,
            children: S.intl.format(S.t.AOKOe7, {
                name: n.name
            })
        }), (0, r.jsx)("div", {
            className: C.UD,
            children: (0, r.jsx)(i.$n, {
                className: C.HM,
                disabled: !0,
                children: (0, r.jsx)(s.y$y, {
                    itemClassName: C.$N
                })
            })
        })]
    })
}

function E(e) {
    let {
        deeplink: t,
        onClick: n,
        platformType: l
    } = e, c = p.A.get(l);
    return (0, r.jsx)(m.mP, {
        platformType: l,
        children: (0, r.jsxs)("div", {
            className: C.UD,
            children: [(0, r.jsx)("div", {
                className: C.iU,
                children: S.intl.format(S.t["6ig6i5"], {
                    connectionName: c.name
                })
            }), (0, r.jsx)(s.DUT, {
                tag: "a",
                href: t,
                onClick: n,
                target: "_self",
                children: (0, r.jsx)(i.$n, {
                    className: C.HM,
                    children: S.intl.string(S.t.flvacA)
                })
            })]
        })
    })
}
async function _(e) {
    let {
        platformType: t,
        code: n,
        state: r,
        openidParams: l,
        iss: c,
        handleCallbackResponse: o
    } = e;
    if (a.Fr || b) return !1;
    try {
        var i, s;
        let e = await O.default.request(y.e$_.CONNECTIONS_CALLBACK, (i = function(e) {
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
        }({}, {
            code: n,
            openid_params: l,
            iss: c,
            state: r
        }), s = {
            providerType: t
        }, s = null != s ? s : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
        }), i)).finally(() => {
            O.default.disconnect()
        });
        return o(e), !0
    } catch (e) {
        return !1
    }
}
async function v(e, t, n, r, l) {
    try {
        return await u.A.sessionHandoff(e, t, n, r, l), 0
    } catch (e) {
        var c, a;
        if ((null == e || null == (c = e.body) ? void 0 : c.code) === 10020) return 2;
        if ((null == e || null == (a = e.body) ? void 0 : a.code) === 40001) return 3;
        return 1
    }
}
async function h(e) {
    let {
        platformType: t,
        state: n,
        handleCallbackResponse: r,
        handleCallbackError: l,
        openidParams: c,
        code: a,
        iss: o
    } = e;
    try {
        let e = await u.A.callback(t, {
            code: a,
            openid_params: c,
            state: n,
            iss: o
        }, !b);
        return r(e), !0
    } catch (e) {
        return l(e), !0
    }
}