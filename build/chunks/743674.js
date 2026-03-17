/** chunk id: 743674 params = (module,exports,require) **/
n.d(t, {
    S: () => s
});
var i = n(64700),
    a = n(998304),
    r = n(515718);
async function l(e) {
    return (await new Promise((t, n) => {
        let i = new Image;
        i.crossOrigin = "Anonymous", i.onerror = e => {
            n(e), null != i && (i.onerror = null, i.onload = null), i = null
        }, i.onload = () => {
            null != i ? (t((0, r.Sf)(i, 2, 10)), i.onerror = null, i.onload = null, i = null) : n("image is null")
        }, i.src = e
    })).map(e => {
        let [t, n, i] = e;
        return (0, a.Ob)(t, n, i)
    })
}

function s(e) {
    let [t, n] = i.useState(), a = i.useRef(!1);
    return null == e || null != t || a.current || (a.current = !0, l(e).then(e => {
        n(e[0])
    })), t
}