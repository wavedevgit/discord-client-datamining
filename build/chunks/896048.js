/** chunk id: 896048, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(487127),
    a = n(712573),
    o = n(39139),
    s = n(706938),
    l = n(174168),
    c = n(380744)("iterator"),
    u = o.values,
    d = function(e, t) {
        if (e) {
            if (e[c] !== u) try {
                s(e, c, u)
            } catch (t) {
                e[c] = u
            }
            if (l(e, t, !0), i[t]) {
                for (var n in o)
                    if (e[n] !== o[n]) try {
                        s(e, n, o[n])
                    } catch (t) {
                        e[n] = o[n]
                    }
            }
        }
    };
for (var f in i) d(r[f] && r[f].prototype, f);
d(a, "DOMTokenList")