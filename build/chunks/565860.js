/** chunk id: 565860 params = (module,exports,require) **/
n.d(t, {
    jP: () => o
}), n(346084);
var i = n(696451),
    l = n(994500),
    r = n(240248),
    s = n(427262);

function a(e) {
    return (0, r.sS)(e.toLocaleLowerCase()).trim()
}

function o(e) {
    let t = {},
        n = l.A.getNickname(e.id);
    null != n && (t[n] = a(n).split(" "));
    let r = s.Ay.getGlobalName(e);
    return null != r && null == t[r] && (t[r] = a(r).split(" ")), t[e.username] = a(e.username).split(" "), i.Ay.getNicknames(e.id).forEach(e => {
        null == t[e] && (t[e] = a(e).split(" "))
    }), {
        names: t,
        nick: n
    }
}
n(652215)