/** chunk id: 524134, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(110259),
    i = n(311907),
    s = n(562465),
    o = n(397927),
    c = n(830215),
    d = n(398590),
    u = n(631670),
    m = n(475743),
    p = n(775121),
    h = n(139286),
    x = n(80556),
    g = n(557722),
    f = n(544028),
    b = n(870570),
    v = n(446868),
    j = n(683589),
    _ = n(87404),
    y = n(652215),
    A = n(53516),
    C = n(985018);

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a
        })
    }
    return e
}

function O() {
    let {
        action: e,
        theme: t
    } = (0, i.cf)([b.A, f.A], () => ({
        action: b.A.getAction(),
        theme: f.A.theme
    })), O = v.A.getVerificationTypes(e), [T, E] = l.useState(0), N = (0, m.A)(O);
    (0, h.A)({
        type: r.ImpressionTypes.MODAL,
        name: r.ImpressionNames.USER_ACTION_REQUIRED,
        properties: {
            verification_type: O[0],
            verification_types: O
        }
    }, {}, [O.toString()]);
    let w = () => {
        (0, u.Cw)(), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("95988").then(n.bind(n, 946815));
            return t => (0, a.jsx)(e, S({}, t))
        }, {
            modalKey: _.H1,
            Layer: x.Ay
        })
    };
    return l.useEffect(() => (p.A.disable(), () => {
        p.A.enable()
    }), []), l.useEffect(() => {
        (null == N ? void 0 : N[0]) === y.Fz7.PHONE && (null == O ? void 0 : O[0]) === y.Fz7.EMAIL && (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("10919").then(n.bind(n, 556506));
            return t => {
                var n, l;
                return (0, a.jsx)(e, (n = S({}, t), l = l = {
                    title: C.intl.string(C.t.KLnLIP),
                    body: C.intl.string(C.t.XGbCq3),
                    confirmText: C.intl.string(C.t["3oK4qw"])
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, a)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            }
        }, {
            modalKey: _.Pr,
            Layer: x.Ay,
            onCloseCallback: w
        })
    }, [O, N]), (0, a.jsx)(j.A, {
        types: O,
        captchaKey: T,
        onCaptchaVerify: e => {
            s.Bo.post({
                url: y.Rsh.CAPTCHA,
                body: {
                    captcha_key: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(d.jH, () => {
                E(e => e + 1)
            })
        },
        theme: t,
        onClick: e => {
            e === y.Fz7.EMAIL_OR_PHONE || e === y.Fz7.EMAIL || e === y.Fz7.REVERIFY_EMAIL ? w() : (0, o.mMO)(async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 615715));
                return t => (0, a.jsx)(e, S({
                    layerContext: x.OH,
                    reason: g.d.USER_ACTION_REQUIRED
                }, t))
            }, {
                modalKey: A.V,
                Layer: x.Ay
            })
        },
        onLogout: () => {
            (0, o.mMO)(async () => {
                let {
                    ConfirmModal: e
                } = await Promise.resolve().then(n.bind(n, 732159));
                return t => (0, a.jsx)(e, S({
                    title: C.intl.string(C.t["2jxGer"]),
                    subtitle: C.intl.string(C.t.SUnWBB),
                    confirmText: C.intl.string(C.t["2jxGer"]),
                    cancelText: C.intl.string(C.t["ETE/oC"]),
                    onConfirm: () => c.A.logout("verification")
                }, t))
            }, {
                Layer: x.Ay
            })
        }
    })
}