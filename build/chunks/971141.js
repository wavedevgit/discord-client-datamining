/** chunk id: 971141, original params: e,t,r (module,exports,require) **/
"use strict";

function a(e, t) {
    var r = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
        var a, n, o, s, i = [],
            c = !0,
            l = !1;
        try {
            if (o = (r = r.call(e)).next, 0 === t) {
                if (Object(r) !== r) return;
                c = !1
            } else
                for (; !(c = (a = o.call(r)).done) && (i.push(a.value), i.length !== t); c = !0);
        } catch (e) {
            l = !0, n = e
        } finally {
            try {
                if (!c && null != r.return && (s = r.return(), Object(s) !== s)) return
            } finally {
                if (l) throw n
            }
        }
        return i
    }
}
r.d(t, {
    A: () => a
})