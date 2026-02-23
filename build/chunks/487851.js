/** chunk id: 487851, original params: t,e,r (module,exports,require) **/
"use strict";
r.d(e, {
    h: () => function t(e, r, n = 2) {
        if (!r || "object" != typeof r || n <= 0) return r;
        if (e && r && 0 === Object.keys(r).length) return e;
        let s = {
            ...e
        };
        for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (s[e] = t(s[e], r[e], n - 1));
        return s
    }
})