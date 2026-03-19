/** chunk id: 345981 params = (module,exports,require) **/
n.d(t, {
    X: () => l
});
var i = n(652215),
    a = n(985018);

function l(e) {
    let {
        application: t,
        username: n,
        usernameHook: l = i.tEg
    } = e;
    return null != t ? a.intl.format(a.t.dXdgno, {
        username: n,
        applicationName: t.name,
        usernameHook: l
    }) : a.intl.format(a.t.O829Uu, {
        username: n,
        usernameHook: l
    })
}