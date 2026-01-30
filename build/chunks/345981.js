/** chunk id: 345981, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => l
});
var r = n(652215),
    i = n(985018);

function l(e) {
    let {
        application: t,
        username: n,
        usernameHook: l = r.tEg
    } = e;
    return null != t ? i.intl.format(i.t.dXdgno, {
        username: n,
        applicationName: t.name,
        usernameHook: l
    }) : i.intl.format(i.t.O829Uu, {
        username: n,
        usernameHook: l
    })
}