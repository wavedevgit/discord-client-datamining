/** Chunk was on 39522 **/
/** chunk id: 354949, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => h,
    d: () => d
}), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(3745),
    o = r(582754),
    c = r(397927),
    s = r(954571),
    p = r(966284),
    l = r(652215);

function d(e) {
    let {
        sitekey: t,
        action: r,
        onVerify: i
    } = e, [o, d] = a.useState("uninitialized"), u = a.useCallback(e => {
        s.default.track(l.HAw.RECAPTCHA_MODAL_EVENT, {
            recaptcha_event_name: e
        })
    }, []), h = a.useCallback(e => {
        u("handle-verify"), i(e)
    }, [i, u]), f = a.useCallback(() => {
        var e, n, a;
        null == (a = window) || null == (n = a.grecaptcha) || null == (e = n.enterprise) || e.ready(async () => {
            var e;
            u("recaptcha-ready"), h(await (null == (e = window) ? void 0 : e.grecaptcha).enterprise.execute(t, null != r ? {
                action: r
            } : void 0)), d("loaded")
        })
    }, [t, r, h, u]), y = a.useCallback(() => {
        d("running"), u("recaptcha-loading"), p.Z.loadRecaptchaScript(t, f, u)
    }, [t, f, u]);
    return a.useEffect(() => {
        "uninitialized" === o && y()
    }, [y, o]), a.useEffect(() => () => {
        u("recaptcha-unloading"), document.querySelectorAll('script[src*="recaptcha/enterprise.js"],.grecaptcha-badge').forEach(e => {
            var t;
            return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
        }), null != window.grecaptcha && delete window.grecaptcha
    }, [u]), (0, n.jsx)(c.y$y, {})
}
let u = e => {
    var t, r;
    let {
        theme: a
    } = e, c = function(e, t) {
        if (null == e) return {};
        var r, n, a, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                    i = Object.getOwnPropertyNames(e);
                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a
            }(e, t), Object.getOwnPropertySymbols)
            for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
    }(e, ["theme"]), s = (0, o.Mw)(a) ? "dark" : "light";
    return (0, n.jsx)(i.A, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({
        sitekey: l._Ak
    }, c), r = r = {
        theme: s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
};
u.Themes = {
    LIGHT: "light",
    DARK: "dark"
}, u.Sizes = {
    COMPACT: "compact",
    NORMAL: "normal",
    INVISIBLE: "invisible"
};
let h = u