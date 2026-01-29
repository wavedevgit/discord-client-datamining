/** Chunk was on 2827 **/
/** chunk id: 34006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => i
}), n(747238), n(812715), n(321073);
let r = /[^0-9/]/g;

function i(e) {
    let t = e.replace(r, "").split("/"),
        n = t[0],
        i = t[1],
        l = [];
    return parseInt(n, 10) > 12 && (n = n.substring(0, 1)), l.push(n), (parseInt(n, 10) > 1 || 2 === n.length || null != i && "" !== i) && l.push("/"), null != i && "" !== i && parseInt(i, 10) > 99 && (i = (i + "").substring(0, 2)), l.push(i), l.join("")
}