/** chunk id: 354949 params = (module,exports,require) **/
n.d(t, {
    A: () => u,
    d: () => h
});
var a = n(627968),
    r = n(64700),
    i = n(3745),
    c = n(582754),
    o = n(397927),
    s = n(954571),
    p = n(966284),
    d = n(652215);

function h(e) {
    let {
        sitekey: t,
        action: n,
        onVerify: i
    } = e, [c, h] = r.useState("uninitialized"), l = r.useCallback(e => {
        s.default.track(d.HAw.RECAPTCHA_MODAL_EVENT, {
            recaptcha_event_name: e
        })
    }, []), u = r.useCallback(e => {
        l("handle-verify"), i(e)
    }, [i, l]), f = r.useCallback(() => {
        window?.grecaptcha?.enterprise?.ready(async () => {
            l("recaptcha-ready"), u(await (window?.grecaptcha).enterprise.execute(t, null != n ? {
                action: n
            } : void 0)), h("loaded")
        })
    }, [t, n, u, l]), y = r.useCallback(() => {
        h("running"), l("recaptcha-loading"), p.Z.loadRecaptchaScript(t, f, l)
    }, [t, f, l]);
    return r.useEffect(() => {
        "uninitialized" === c && y()
    }, [y, c]), r.useEffect(() => () => {
        l("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => e.parentNode?.removeChild(e)), null != window.grecaptcha && delete window.grecaptcha
    }, [l]), (0, a.jsx)(o.y$y, {})
}
let l = e => {
    let {
        theme: t,
        ...n
    } = e, r = (0, c.Mw)(t) ? "dark" : "light";
    return (0, a.jsx)(i.A, {
        sitekey: d._Ak,
        ...n,
        theme: r
    })
};
l.Themes = {
    LIGHT: "light",
    DARK: "dark"
}, l.Sizes = {
    COMPACT: "compact",
    NORMAL: "normal",
    INVISIBLE: "invisible"
};
let u = l