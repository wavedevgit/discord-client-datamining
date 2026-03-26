/** chunk id: 743674 params = (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => r
});
var i = n(64700),
    s = n(998304),
    l = n(515718);
async function a(e) {
    return (await new Promise((t, n) => {
        let i = new Image;
        i.crossOrigin = "Anonymous", i.onerror = e => {
            n(e), null != i && (i.onerror = null, i.onload = null), i = null
        }, i.onload = () => {
            null != i ? (t((0, l.Sf)(i, 2, 10)), i.onerror = null, i.onload = null, i = null) : n("image is null")
        }, i.src = e
    })).map(e => {
        let [t, n, i] = e;
        return (0, s.Ob)(t, n, i)
    })
}

function r(e) {
    let [t, n] = i.useState(), s = i.useRef(!1);
    return null == e || null != t || s.current || (s.current = !0, a(e).then(e => {
        n(e[0])
    })), t
}