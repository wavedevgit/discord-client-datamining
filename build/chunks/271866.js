/** chunk id: 271866 params = (module,exports,require) **/
"use strict";
n.d(e, {
    SH: () => A,
    cL: () => T,
    q1: () => _
});
var i = n(73153),
    r = n(795816),
    s = n(627363),
    l = n(587895),
    a = n(20015),
    o = n(793943),
    c = n(611010),
    u = n(998218),
    d = n(110782),
    E = n(652215);
async function _(t, e) {
    i.h.dispatch({
        applicationId: t,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, r.Ir)(t)) throw Error("Do not have access!");
        let n = l.A.getApplication(t);
        null == n && (n = c.Ay.createFromServer(await s.Ay.fetchApplication(t)));
        let o = (0, a.n)(n, E.gfo.EMBEDDED);
        if (o && (null == e || !u.A.URL_REGEX.test(e))) throw Error("Invalid Origin URL for embedded application");
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