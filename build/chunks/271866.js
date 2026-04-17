/** chunk id: 271866 params = (module,exports,require) **/
n.d(t, {
    SH: () => m,
    cL: () => _,
    q1: () => A
});
var i = n(73153),
    l = n(795816),
    s = n(627363),
    a = n(587895),
    r = n(20015),
    o = n(793943),
    d = n(611010),
    c = n(998218),
    u = n(110782),
    h = n(652215);
async function A(e, t) {
    i.h.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, l.Ir)(e)) throw Error("Do not have access!");
        let n = a.A.getApplication(e);
        null == n && (n = d.Ay.createFromServer(await s.Ay.fetchApplication(e)));
        let o = (0, r.n)(n, h.gfo.EMBEDDED);
        if (o && (null == t || !c.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
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

function _() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function m() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}