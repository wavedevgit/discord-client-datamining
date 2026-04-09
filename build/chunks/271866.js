/** chunk id: 271866 params = (module,exports,require) **/
"use strict";
n.d(t, {
    SH: () => p,
    cL: () => b,
    q1: () => m
});
var a = n(73153),
    r = n(795816),
    i = n(627363),
    o = n(587895),
    s = n(20015),
    c = n(793943),
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
        if (!await (0, r.Ir)(e)) throw Error("Do not have access!");
        let n = o.A.getApplication(e);
        null == n && (n = l.Ay.createFromServer(await i.Ay.fetchApplication(e)));
        let c = (0, s.n)(n, d.gfo.EMBEDDED);
        if (c && (null == t || !_.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return c || u.Cd(n), a.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
            applicationId: e,
            originURL: c ? t : null
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
    c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(), a.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function p() {
    c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(), a.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}