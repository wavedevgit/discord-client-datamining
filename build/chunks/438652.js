/** Chunk was on web.js **/
/** chunk id: 438652, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => s
});
var r = n(311907),
    i = n(830215),
    a = n(121780),
    o = n(652215);
let s = (0, r.UT)(a.A, {
    getQueryId: o.fic.USER_COUNTRY_CODE,
    get: () => a.A.getCountryCode(),
    load: async () => {
        await i.A.getLocationMetadata()
    }
})