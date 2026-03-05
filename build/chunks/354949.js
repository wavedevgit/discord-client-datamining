/** chunk id: 354949, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    d: () => u
});
var a = n(627968),
    i = n(64700),
    s = n(3745),
    l = n(582754),
    r = n(397927),
    o = n(954571),
    d = n(966284),
    c = n(652215);

function u(e) {
    let {
        sitekey: t,
        action: n,
        onVerify: s
    } = e, [l, u] = i.useState("uninitialized"), m = i.useCallback(e => {
        o.default.track(c.HAw.RECAPTCHA_MODAL_EVENT, {
            recaptcha_event_name: e
        })
    }, []), h = i.useCallback(e => {
        m("handle-verify"), s(e)
    }, [s, m]), p = i.useCallback(() => {
        window?.grecaptcha?.enterprise?.ready(async () => {
            m("recaptcha-ready"), h(await (window?.grecaptcha).enterprise.execute(t, null != n ? {
                action: n
            } : void 0)), u("loaded")
        })
    }, [t, n, h, m]), x = i.useCallback(() => {
        u("running"), m("recaptcha-loading"), d.Z.loadRecaptchaScript(t, p, m)
    }, [t, p, m]);
    return i.useEffect(() => {
        "uninitialized" === l && x()
    }, [x, l]), i.useEffect(() => () => {
        m("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => e.parentNode?.removeChild(e)), null != window.grecaptcha && delete window.grecaptcha
    }, [m]), (0, a.jsx)(r.y$y, {})
}
let m = e => {
    let {
        theme: t,
        ...n
    } = e, i = (0, l.Mw)(t) ? "dark" : "light";
    return (0, a.jsx)(s.A, {
        sitekey: c._Ak,
        ...n,
        theme: i
    })
};
m.Themes = {
    LIGHT: "light",
    DARK: "dark"
}, m.Sizes = {
    COMPACT: "compact",
    NORMAL: "normal",
    INVISIBLE: "invisible"
};
let h = m