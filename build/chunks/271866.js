/** chunk id: 271866 params = (module,exports,require) **/
n.d(t, {
    SH: () => A,
    cL: () => T,
    q1: () => E
});
var i = n(73153),
    l = n(795816),
    r = n(627363),
    s = n(587895),
    a = n(20015),
    o = n(793943),
    c = n(611010),
    d = n(998218),
    u = n(110782),
    _ = n(652215);
async function E(e, t) {
    i.h.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, l.Ir)(e)) throw Error("Do not have access!");
        let n = s.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let o = (0, a.n)(n, _.gfo.EMBEDDED);
        if (o && (null == t || !d.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return o || u.Cd(n), i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
            applicationId: e,
            originURL: o ? t : null
        }), n
    } catch (t) {
        return i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
            applicationId: e,
            error: t.message
        }), null
    }
}

function T() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function A() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}