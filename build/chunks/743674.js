/** chunk id: 743674 params = (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => d
});
var i = n(64700),
    s = n(635377),
    l = n.n(s),
    r = n(998304),
    a = n(515718);
let o = new(l())({
    max: 50
});
async function c(e) {
    let t = o.get(e);
    if (null != t) return t;
    let n = await new Promise((t, n) => {
            let i = new Image;
            i.crossOrigin = "Anonymous", i.onerror = e => {
                n(e), null != i && (i.onerror = null, i.onload = null), i = null
            }, i.onload = () => {
                null != i ? (t((0, a.Sf)(i, 2, 10)), i.onerror = null, i.onload = null, i = null) : n("image is null")
            }, i.src = e
        }),
        i = (0, r.Ob)(...n[0]);
    return o.set(e, i), i
}

function d(e) {
    let [t, n] = i.useState(() => null != e ? o.get(e) : void 0), [s, l] = i.useState();
    if (null != e && e !== s) {
        l(e);
        let t = o.get(e);
        null != t ? n(t) : c(e).then(e => {
            n(e)
        })
    }
    return t
}