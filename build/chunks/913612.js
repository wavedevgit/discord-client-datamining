/** Chunk was on web.js **/
/** chunk id: 913612, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => s,
    K: () => l
});
var r = n(64700),
    i = n(506774),
    a = n(942405);
let o = "systemServiceAutoInstall";

function s() {
    i.w.set(o, !0)
}

function l() {
    r.useEffect(() => {
        null == i.w.get(o) && (s(), (0, a.sL)("first-start", !1))
    }, [])
}