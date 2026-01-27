/** Chunk was on web.js **/
/** chunk id: 314739, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => d
});
var r = n(909144),
    i = n(64700),
    a = n(341221);
let o = Symbol.for("react-aria.i18n.locale");

function s() {
    let e = "u" > typeof window && window[o] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e])
    } catch {
        e = "en-US"
    }
    return {
        locale: e,
        direction: (0, r.V)(e) ? "rtl" : "ltr"
    }
}
let l = s(),
    c = new Set;

function u() {
    for (let e of (l = s(), c)) e(l)
}

function d() {
    let e = (0, a.wR)(),
        [t, n] = (0, i.useState)(l);
    return ((0, i.useEffect)(() => (0 === c.size && window.addEventListener("languagechange", u), c.add(n), () => {
        c.delete(n), 0 === c.size && window.removeEventListener("languagechange", u)
    }), []), e) ? {
        locale: "en-US",
        direction: "ltr"
    } : t
}