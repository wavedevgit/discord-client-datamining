/** Chunk was on web.js **/
/** chunk id: 379418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $z: () => l,
    EH: () => f,
    WA: () => d,
    kx: () => s,
    l9: () => u,
    tf: () => p
}), n(591487), n(727858), n(747238);
var r = n(989349),
    i = n.n(r),
    a = n(405269),
    o = n(927813);
let s = {
        t: e => (0, a.i$)(e, "LT"),
        T: e => (0, a.i$)(e, "LTS"),
        d: e => (0, a.i$)(e, "L"),
        D: e => (0, a.i$)(e, "LL"),
        f: e => (0, a.i$)(e, "LLL"),
        F: e => (0, a.i$)(e, "LLLL"),
        s: e => (0, a.i$)(e, "L LT"),
        S: e => (0, a.i$)(e, "L LTS"),
        R: e => {
            let t = i().relativeTimeThreshold("s");
            i().relativeTimeThreshold("s", 60);
            let n = i().relativeTimeThreshold("ss");
            i().relativeTimeThreshold("ss", -1);
            let r = i().relativeTimeThreshold("m");
            i().relativeTimeThreshold("m", 60);
            let a = null;
            try {
                a = i()(e.toDate()).fromNow()
            } catch (e) {}
            return i().relativeTimeThreshold("s", t), i().relativeTimeThreshold("ss", n), i().relativeTimeThreshold("m", r), null != a ? a : i()(e.toDate()).fromNow()
        }
    },
    l = "f";
Object.setPrototypeOf(s, null);
let c = Object.keys(s).join("|"),
    u = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(c, "))?>"));

function d(e) {
    let {
        timestamp: t,
        format: n
    } = e, r = i()(Number(t) * o.A.Millis.SECOND);
    if (!r.isValid()) return null;
    let a = null != n ? s[n] : void 0;
    return null == a && (a = s[l]), {
        timestamp: t,
        format: n,
        parsed: r,
        full: s.F(r),
        formatted: a(r)
    }
}

function f(e, t) {
    return d({
        timestamp: e,
        format: t
    })
}

function p(e, t) {
    return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
}