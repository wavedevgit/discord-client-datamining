/** chunk id: 487851, original params: t,e,r (module,exports,require) **/
"use strict";
r.d(e, {
    h: () => function t(e, r, s = 2) {
        if (!r || "object" != typeof r || s <= 0) return r;
        if (e && r && 0 === Object.keys(r).length) return e;
        let i = {
            ...e
        };
        for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (i[e] = t(i[e], r[e], s - 1));
        return i
    }
})