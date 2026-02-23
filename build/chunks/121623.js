/** chunk id: 121623, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(400253),
    s = n(49485),
    r = n(80703),
    l = n(197111),
    a = n(954571),
    o = n(877062),
    d = n(292572),
    c = n(652215);
let u = "template",
    h = {
        ...d.A,
        openNativeAppModal(e) {
            l.A.openNativeAppModal(e, c.e$_.GUILD_TEMPLATE_BROWSER)
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
            let n = null != e ? (0, i.FH)(e) : (0, i.BH)(),
                l = (0, s.I_)(),
                d = (0, s.Ay)(n, {
                    utmSource: u,
                    fingerprint: t,
                    attemptId: l
                });
            a.default.track(c.HAw.DEEP_LINK_CLICKED, {
                fingerprint: (0, r.v)(t),
                attempt_id: l,
                source: u,
                guild_template_code: e
            }), o.A.launch(d, () => {})
        }
    }