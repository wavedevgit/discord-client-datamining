/** chunk id: 165508, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => c
}), n(65821);
var r = n(627968);
n(64700);
var s = n(397927),
    i = n(80556),
    a = n(577015),
    o = n(320028);

function l(e) {
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
}
let c = {
    showCaptcha: function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            {
                sitekey: c,
                captchaService: u,
                options: d
            } = e;
        (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("39522").then(n.bind(n, 252345));
            return n => (0, r.jsx)(e, l({
                onCaptchaVerify: (e, n) => t({
                    captcha_key: e,
                    captcha_rqtoken: n
                }),
                captchaService: u,
                sitekey: c
            }, a, d, n))
        }, {
            Layer: i.Ay,
            modalKey: o.f
        })
    },
    showCaptchaAsync: function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                sitekey: c,
                captchaService: u,
                captchaSessionId: d,
                options: m
            } = e;
        return new Promise((e, p) => {
            (0, s.mMO)(async () => {
                let {
                    default: s
                } = await n.e("39522").then(n.bind(n, 252345));
                return n => (0, r.jsx)(s, l({
                    onCaptchaVerify: (t, n) => e({
                        captcha_key: t,
                        captcha_rqtoken: n,
                        captcha_session_id: d
                    }),
                    captchaService: u,
                    sitekey: c,
                    onReject: e => {
                        e === a.CaptchaError.CANCEL ? p(new a.CaptchaCancelError) : p(Error("cancel captcha"))
                    }
                }, t, m, n))
            }, {
                Layer: i.Ay,
                modalKey: o.f
            })
        })
    },
    useIsCaptchaModalOpen: function() {
        return (0, s.red)(e => (0, s.fDT)(e, o.f))
    }
}