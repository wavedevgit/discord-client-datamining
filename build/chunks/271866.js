/** chunk id: 271866 params = (module,exports,require) **/
n.d(e, {
    SH: () => A,
    cL: () => T,
    q1: () => _
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
    E = n(652215);
async function _(t, e) {
    i.h.dispatch({
        applicationId: t,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, l.Ir)(t)) throw Error("Do not have access!");
        let n = s.A.getApplication(t);
        null == n && (n = c.Ay.createFromServer(await r.Ay.fetchApplication(t)));
        let o = (0, a.n)(n, E.gfo.EMBEDDED);
        if (o && (null == e || !d.A.URL_REGEX.test(e))) throw Error("Invalid Origin URL for embedded application");
        return o || u.Cd(n), i.h.dispatch({
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