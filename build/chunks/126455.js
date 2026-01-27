/** Chunk was on web.js **/
/** chunk id: 126455, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(64700),
    i = n(711371);

function a(e, t, n) {
    let a = r.useCallback(e => {
            if (t) return !0;
            if (!0 === e.defaultPrevented) return !1;
            let r = n(e);
            return r && (e.preventDefault(), e.stopPropagation()), r
        }, [t, n]),
        o = r.useCallback(t => {
            let {
                event: n
            } = t;
            a(n) || (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.VW.focus(e)))
        }, [e, a]);
    return {
        handlePaste: a,
        handleGlobalPaste: o
    }
}