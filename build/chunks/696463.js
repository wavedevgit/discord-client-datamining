/** Chunk was on web.js **/
/** chunk id: 696463, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => l
});
var r = n(64700),
    i = n(787925),
    a = n(199773),
    o = n(256787),
    s = n(49999);

function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = !n && null != e && !i.C.has(e);
    r.useEffect(() => () => {
        l && (a.A.lastDCDismissed !== e || (0, o.vf)(e)) && t(s.i.AUTO_DISMISS, !0)
    }, [l, t, e])
}