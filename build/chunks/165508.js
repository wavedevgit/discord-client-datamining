/** chunk id: 165508 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => l
});
var a = n(627968);
n(64700);
var r = n(397927),
    s = n(80556),
    o = n(577015),
    i = n(320028);
let l = {
    showCaptcha: function(e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                sitekey: l,
                captchaService: d,
                options: c
            } = e;
        (0, r.mMO)(async () => {
            let {
                default: e
            } = await n.e("39522").then(n.bind(n, 252345));
            return n => (0, a.jsx)(e, {
                onCaptchaVerify: (e, n) => t({
                    captcha_key: e,
                    captcha_rqtoken: n
                }),
                captchaService: d,
                sitekey: l,
                ...o,
                ...c,
                ...n
            })
        }, {
            Layer: s.Ay,
            modalKey: i.f
        })
    },
    showCaptchaAsync: function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                sitekey: l,
                captchaService: d,
                captchaSessionId: c,
                options: u
            } = e;
        return new Promise((e, C) => {
            (0, r.mMO)(async () => {
                let {
                    default: r
                } = await n.e("39522").then(n.bind(n, 252345));
                return n => (0, a.jsx)(r, {
                    onCaptchaVerify: (t, n) => e({
                        captcha_key: t,
                        captcha_rqtoken: n,
                        captcha_session_id: c
                    }),
                    captchaService: d,
                    sitekey: l,
                    onReject: e => {
                        e === o.CaptchaError.CANCEL ? C(new o.CaptchaCancelError) : C(Error("cancel captcha"))
                    },
                    ...t,
                    ...u,
                    ...n
                })
            }, {
                Layer: s.Ay,
                modalKey: i.f
            })
        })
    },
    useIsCaptchaModalOpen: function() {
        return (0, r.red)(e => (0, r.fDT)(e, i.f))
    }
}