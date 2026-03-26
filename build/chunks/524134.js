/** chunk id: 524134 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var a = n(627968),
    i = n(64700),
    s = n(110259),
    l = n(311907),
    r = n(562465),
    o = n(397927),
    d = n(830215),
    c = n(398590),
    u = n(631670),
    m = n(475743),
    h = n(775121),
    x = n(139286),
    p = n(80556),
    g = n(557722),
    f = n(544028),
    _ = n(870570),
    v = n(446868),
    b = n(683589),
    j = n(87404),
    A = n(652215),
    C = n(53516),
    y = n(985018);

function T() {
    let {
        action: e,
        theme: t
    } = (0, l.cf)([_.A, f.A], () => ({
        action: _.A.getAction(),
        theme: f.A.theme
    })), T = v.A.getVerificationTypes(e), [S, E] = i.useState(0), N = (0, m.A)(T);
    (0, x.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.USER_ACTION_REQUIRED,
        properties: {
            verification_type: T[0],
            verification_types: T
        }
    }, {}, [T.toString()]);
    let I = () => {
        (0, u.Cw)(), (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("95988").then(n.bind(n, 946815));
            return t => (0, a.jsx)(e, {
                ...t
            })
        }, {
            modalKey: j.H1,
            Layer: p.Ay
        })
    };
    return i.useEffect(() => (h.A.disable(), () => {
        h.A.enable()
    }), []), i.useEffect(() => {
        N?.[0] === A.Fz7.PHONE && T?.[0] === A.Fz7.EMAIL && (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("10919").then(n.bind(n, 556506));
            return t => (0, a.jsx)(e, {
                ...t,
                title: y.intl.string(y.t.KLnLIP),
                body: y.intl.string(y.t.XGbCq3),
                confirmText: y.intl.string(y.t["3oK4qw"])
            })
        }, {
            modalKey: j.Pr,
            Layer: p.Ay,
            onCloseCallback: I
        })
    }, [T, N]), (0, a.jsx)(b.A, {
        types: T,
        captchaKey: S,
        onCaptchaVerify: e => {
            r.Bo.post({
                url: A.Rsh.CAPTCHA,
                body: {
                    captcha_key: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(c.jH, () => {
                E(e => e + 1)
            })
        },
        theme: t,
        onClick: e => {
            e === A.Fz7.EMAIL_OR_PHONE || e === A.Fz7.EMAIL || e === A.Fz7.REVERIFY_EMAIL ? I() : (0, o.mMO)(async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 615715));
                return t => (0, a.jsx)(e, {
                    layerContext: p.OH,
                    reason: g.d.USER_ACTION_REQUIRED,
                    ...t
                })
            }, {
                modalKey: C.V,
                Layer: p.Ay
            })
        },
        onLogout: () => {
            (0, o.mMO)(async () => {
                let {
                    ConfirmModal: e
                } = await Promise.resolve().then(n.bind(n, 732159));
                return t => (0, a.jsx)(e, {
                    title: y.intl.string(y.t["2jxGer"]),
                    subtitle: y.intl.string(y.t.SUnWBB),
                    confirmText: y.intl.string(y.t["2jxGer"]),
                    cancelText: y.intl.string(y.t["ETE/oC"]),
                    onConfirm: () => d.A.logout("verification"),
                    ...t
                })
            }, {
                Layer: p.Ay
            })
        }
    })
}