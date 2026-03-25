/** chunk id: 165508 params = (module,exports,require) **/
t.r(e), t.d(e, {
    default: () => i
});
var c = t(627968);
t(64700);
var n = t(397927),
    r = t(80556),
    h = t(577015),
    o = t(320028);
let i = {
    showCaptcha: function(a, e) {
        let h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                sitekey: i,
                captchaService: p,
                options: s
            } = a;
        (0, n.mMO)(async () => {
            let {
                default: a
            } = await t.e("39522").then(t.bind(t, 252345));
            return t => (0, c.jsx)(a, {
                onCaptchaVerify: (a, t) => e({
                    captcha_key: a,
                    captcha_rqtoken: t
                }),
                captchaService: p,
                sitekey: i,
                ...h,
                ...s,
                ...t
            })
        }, {
            Layer: r.Ay,
            modalKey: o.f
        })
    },
    showCaptchaAsync: function(a) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                sitekey: i,
                captchaService: p,
                captchaSessionId: s,
                options: d
            } = a;
        return new Promise((a, l) => {
            (0, n.mMO)(async () => {
                let {
                    default: n
                } = await t.e("39522").then(t.bind(t, 252345));
                return t => (0, c.jsx)(n, {
                    onCaptchaVerify: (e, t) => a({
                        captcha_key: e,
                        captcha_rqtoken: t,
                        captcha_session_id: s
                    }),
                    captchaService: p,
                    sitekey: i,
                    onReject: a => {
                        a === h.CaptchaError.CANCEL ? l(new h.CaptchaCancelError) : l(Error("cancel captcha"))
                    },
                    ...e,
                    ...d,
                    ...t
                })
            }, {
                Layer: r.Ay,
                modalKey: o.f
            })
        })
    },
    useIsCaptchaModalOpen: function() {
        return (0, n.red)(a => (0, n.fDT)(a, o.f))
    }
}