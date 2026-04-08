/** chunk id: 271866 params = (module,exports,require) **/
"use strict";
n.d(t, {
    SH: () => p,
    cL: () => b,
    q1: () => m
});
var a = n(73153),
    i = n(795816),
    r = n(627363),
    o = n(587895),
    c = n(20015),
    s = n(793943),
    l = n(611010),
    _ = n(998218),
    u = n(110782),
    d = n(652215);
async function m(e, t) {
    a.h.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, i.Ir)(e)) throw Error("Do not have access!");
        let n = o.A.getApplication(e);
        null == n && (n = l.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let s = (0, c.n)(n, d.gfo.EMBEDDED);
        if (s && (null == t || !_.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return s || u.Cd(n), a.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
            applicationId: e,
            originURL: s ? t : null
        }), n
    } catch (t) {
        return a.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
            applicationId: e,
            error: t.message
        }), null
    }
}

function b() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(), a.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function p() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(), a.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}