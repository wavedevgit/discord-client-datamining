/** chunk id: 34006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => s
}), n(321073);
let i = /[^0-9/]/g;

function s(e) {
    let t = e.replace(i, "").split("/"),
        n = t[0],
        s = t[1],
        a = [];
    return parseInt(n, 10) > 12 && (n = n.substring(0, 1)), a.push(n), (parseInt(n, 10) > 1 || 2 === n.length || null != s && "" !== s) && a.push("/"), null != s && "" !== s && parseInt(s, 10) > 99 && (s = (s + "").substring(0, 2)), a.push(s), a.join("")
}