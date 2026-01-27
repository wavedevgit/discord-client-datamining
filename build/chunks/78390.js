/** Chunk was on web.js **/
/** chunk id: 78390, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => a,
    f: () => o
});
var r = n(317525),
    i = n(985018);
let a = e => {
        switch (e) {
            case "home":
            case "guide":
                return i.intl.string(i.t.VbpLyU);
            case "browse":
                return i.intl.string(i.t.et6wav);
            case "customize":
                return i.intl.string(i.t.h9mGOP);
            case "linked-roles":
                return i.intl.string(i.t.ghtnss)
        }
        return null
    },
    o = (e, t, n) => {
        if ("linked-roles" === e) {
            var i;
            if (null == n) return null;
            let e = r.A.getRole(n, t);
            return null == e || (null == (i = e.tags) ? void 0 : i.guild_connections) !== null ? null : e.name
        }
        return null
    }