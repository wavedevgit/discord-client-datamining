/** chunk id: 271866 params = (module,exports,require) **/
n.d(e, {
    SH: () => E,
    cL: () => h,
    q1: () => p
});
var i = n(73153),
    r = n(795816),
    a = n(627363),
    l = n(587895),
    s = n(20015),
    o = n(793943),
    c = n(611010),
    _ = n(998218),
    d = n(110782),
    u = n(652215);
async function p(t, e) {
    i.h.dispatch({
        applicationId: t,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, r.Ir)(t)) throw Error("Do not have access!");
        let n = l.A.getApplication(t);
        null == n && (n = c.Ay.createFromServer(await a.Ay.fetchApplication(t)));
        let o = (0, s.n)(n, u.gfo.EMBEDDED);
        if (o && (null == e || !_.A.URL_REGEX.test(e))) throw Error("Invalid Origin URL for embedded application");
        return o || d.Cd(n), i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
            applicationId: t,
            originURL: o ? e : null
        }), n
    } catch (e) {
        return i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
            applicationId: t,
            error: e.message
        }), null
    }
}

function h() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function E() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}