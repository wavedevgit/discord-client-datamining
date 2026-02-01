/** chunk id: 565860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    jP: () => o
}), n(733351), n(747238), n(346084);
var i = n(696451),
    r = n(994500),
    l = n(240248),
    a = n(427262);

function s(e) {
    return (0, l.sS)(e.toLocaleLowerCase()).trim()
}

function o(e) {
    let t = {},
        n = r.A.getNickname(e.id);
    null != n && (t[n] = s(n).split(" "));
    let l = a.Ay.getGlobalName(e);
    return null != l && null == t[l] && (t[l] = s(l).split(" ")), t[e.username] = s(e.username).split(" "), i.Ay.getNicknames(e.id).forEach(e => {
        null == t[e] && (t[e] = s(e).split(" "))
    }), {
        names: t,
        nick: n
    }
}
n(652215)