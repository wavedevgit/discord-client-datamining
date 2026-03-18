/** chunk id: 194362 params = (module,exports,require) **/
n.d(t, {
    a: () => i
});
var l = n(104798),
    a = n(652215);
async function i(e) {
    let t = l.A.generateNonce();
    try {
        let n = await l.A.createHandoffToken(t);
        return a.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e)
    } catch {
        return `//${window.GLOBAL_ENV.DEVELOPERS_ENDPOINT}/${e}`
    }
}