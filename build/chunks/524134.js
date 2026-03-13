/** chunk id: 524134 params = (module,exports,require) **/
n.d(t, {
    A: () => y
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
    p = n(139286),
    x = n(80556),
    g = n(557722),
    _ = n(544028),
    f = n(870570),
    v = n(446868),
    b = n(683589),
    j = n(87404),
    A = n(652215),
    C = n(53516),
    T = n(985018);

function y() {
    let {
        action: e,
        theme: t
    } = (0, l.cf)([f.A, _.A], () => ({
        action: f.A.getAction(),
        theme: _.A.theme
    })), y = v.A.getVerificationTypes(e), [S, E] = i.useState(0), N = (0, m.A)(y);
    (0, p.A)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.USER_ACTION_REQUIRED,
        properties: {
            verification_type: y[0],
            verification_types: y
        }
    }, {}, [y.toString()]);
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
            Layer: x.Ay
        })
    };
    return i.useEffect(() => (h.A.disable(), () => {
        h.A.enable()
    }), []), i.useEffect(() => {
        N?.[0] === A.Fz7.PHONE && y?.[0] === A.Fz7.EMAIL && (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("10919").then(n.bind(n, 556506));
            return t => (0, a.jsx)(e, {
                ...t,
                title: T.intl.string(T.t.KLnLIP),
                body: T.intl.string(T.t.XGbCq3),
                confirmText: T.intl.string(T.t["3oK4qw"])
            })
        }, {
            modalKey: j.Pr,
            Layer: x.Ay,
            onCloseCallback: I
        })
    }, [y, N]), (0, a.jsx)(b.A, {
        types: y,
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
                    layerContext: x.OH,
                    reason: g.d.USER_ACTION_REQUIRED,
                    ...t
                })
            }, {
                modalKey: C.V,
                Layer: x.Ay
            })
        },
        onLogout: () => {
            (0, o.mMO)(async () => {
                let {
                    ConfirmModal: e
                } = await Promise.resolve().then(n.bind(n, 732159));
                return t => (0, a.jsx)(e, {
                    title: T.intl.string(T.t["2jxGer"]),
                    subtitle: T.intl.string(T.t.SUnWBB),
                    confirmText: T.intl.string(T.t["2jxGer"]),
                    cancelText: T.intl.string(T.t["ETE/oC"]),
                    onConfirm: () => d.A.logout("verification"),
                    ...t
                })
            }, {
                Layer: x.Ay
            })
        }
    })
}