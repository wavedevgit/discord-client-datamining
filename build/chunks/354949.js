/** chunk id: 354949 params = (module,exports,require) **/
n.d(t, {
    A: () => u,
    d: () => p
});
var r = n(627968),
    a = n(64700),
    i = n(3745),
    c = n(582754),
    o = n(397927),
    s = n(954571),
    d = n(966284),
    l = n(652215);

function p(e) {
    let {
        sitekey: t,
        action: n,
        onVerify: i
    } = e, [c, p] = a.useState("uninitialized"), h = a.useCallback(e => {
        s.default.track(l.HAw.RECAPTCHA_MODAL_EVENT, {
            recaptcha_event_name: e
        })
    }, []), u = a.useCallback(e => {
        h("handle-verify"), i(e)
    }, [i, h]), f = a.useCallback(() => {
        window?.grecaptcha?.enterprise?.ready(async () => {
            h("recaptcha-ready"), u(await (window?.grecaptcha).enterprise.execute(t, null != n ? {
                action: n
            } : void 0)), p("loaded")
        })
    }, [t, n, u, h]), y = a.useCallback(() => {
        p("running"), h("recaptcha-loading"), d.Z.loadRecaptchaScript(t, f, h)
    }, [t, f, h]);
    return a.useEffect(() => {
        "uninitialized" === c && y()
    }, [y, c]), a.useEffect(() => () => {
        h("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => e.parentNode?.removeChild(e)), null != window.grecaptcha && delete window.grecaptcha
    }, [h]), (0, r.jsx)(o.y$y, {})
}
let h = e => {
    let {
        theme: t,
        ...n
    } = e, a = (0, c.Mw)(t) ? "dark" : "light";
    return (0, r.jsx)(i.A, {
        sitekey: l._Ak,
        ...n,
        theme: a
    })
};
h.Themes = {
    LIGHT: "light",
    DARK: "dark"
}, h.Sizes = {
    COMPACT: "compact",
    NORMAL: "normal",
    INVISIBLE: "invisible"
};
let u = h