/** Chunk was on web.js **/
/** chunk id: 773669, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => g
});
var r, i = n(311907),
    a = n(73153),
    o = n(11057),
    s = n(77729),
    l = n(617617),
    c = n(985018);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
async function d() {
    var e;
    if ((null === s.A || void 0 === s.A || null == (e = s.A.app) ? void 0 : e.getPreferredSystemLanguages) != null) {
        let e = await s.A.app.getPreferredSystemLanguages().then(e => e[0]);
        if (null != e && "" !== e) return e
    }
    return c.systemLocale
}
let f = c.intl.currentLocale,
    p = c.systemLocale;

function _() {
    var e, t;
    let n = null == (t = l.A.settings.localization) || null == (e = t.locale) ? void 0 : e.value;
    return null != n && "" !== n && n !== f && (f = n, (0, o.Av)(f), !0)
}

function h(e) {
    f = e.locale, (0, o.Av)(f)
}
d().then(e => {
    p = e
});
class m extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(l.A), _(), (0, o.Av)(f)
    }
    get locale() {
        return f
    }
    get systemLocale() {
        return p
    }
}
u(m, "displayName", "LocaleStore");
let g = new m(a.h, {
    OVERLAY_INITIALIZE: _,
    CACHE_LOADED: _,
    CONNECTION_OPEN: _,
    USER_SETTINGS_PROTO_UPDATE: _,
    USER_SETTINGS_LOCALE_OVERRIDE: h
})