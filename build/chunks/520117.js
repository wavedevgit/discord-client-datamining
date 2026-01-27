/** Chunk was on web.js **/
/** chunk id: 520117, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(64700),
    i = n(172218);

function a(e) {
    let {
        onVisible: t,
        threshold: n,
        minTimeVisibleMs: a
    } = e, o = r.useRef(!1), s = r.useRef(null);
    r.useEffect(() => () => {
        null != s.current && (clearTimeout(s.current), s.current = null)
    }, []);
    let l = e => {
        if (null == s.current || e || !1 !== o.current || (clearTimeout(s.current), s.current = null), !e || !0 === o.current) return;
        let n = () => {
            t(), o.current = !0, s.current = null
        };
        null != a ? s.current = setTimeout(n, a) : n()
    };
    return (0, i.K)(l, n)
}