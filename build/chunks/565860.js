/** chunk id: 565860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    jP: () => o
}), n(733351), n(747238), n(346084);
var l = n(696451),
    r = n(994500),
    i = n(240248),
    s = n(427262);

function a(e) {
    return (0, i.sS)(e.toLocaleLowerCase()).trim()
}

function o(e) {
    let t = {},
        n = r.A.getNickname(e.id);
    null != n && (t[n] = a(n).split(" "));
    let i = s.Ay.getGlobalName(e);
    return null != i && null == t[i] && (t[i] = a(i).split(" ")), t[e.username] = a(e.username).split(" "), l.Ay.getNicknames(e.id).forEach(e => {
        null == t[e] && (t[e] = a(e).split(" "))
    }), {
        names: t,
        nick: n
    }
}
n(652215)