/** Chunk was on web.js **/
/** chunk id: 577015, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    CaptchaCancelError: () => s,
    CaptchaError: () => i,
    emitCaptchaDistributionMetric: () => o,
    extractCaptchaPropsFromResponse: () => a
}), n(65821);
var r = n(1136);
n(320028);
var i = function(e) {
    return e.CANCEL = "cancel", e.ERROR = "error", e.EXPIRED = "expired", e
}({});

function a(e) {
    var t;
    return {
        captchaService: e.captcha_service,
        sitekey: e.captcha_sitekey,
        captchaSessionId: e.captcha_session_id,
        options: {
            rqdata: e.captcha_rqdata,
            rqtoken: e.captcha_rqtoken,
            serveInvisible: null != (t = e.should_serve_invisible) && t,
            userflow: e.user_flow
        }
    }
}

function o(e) {
    (0, r.N6)() && setTimeout(() => (0, r.il)(), 3e4), (0, r.di)(e)
}
class s extends Error {
    constructor() {
        super("Captcha cancelled")
    }
}