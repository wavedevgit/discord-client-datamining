/** chunk id: 271866 params = (module,exports,require) **/
"use strict";
n.d(t, {
    SH: () => E,
    cL: () => m,
    q1: () => b
});
var i = n(73153),
    r = n(795816),
    a = n(627363),
    l = n(587895),
    o = n(20015),
    s = n(793943),
    c = n(611010),
    _ = n(998218),
    u = n(110782),
    d = n(652215);
async function b(e, t) {
    i.h.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, r.Ir)(e)) throw Error("Do not have access!");
        let n = l.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await a.Ay.fetchApplication(e)));
        let s = (0, o.n)(n, d.gfo.EMBEDDED);
        if (s && (null == t || !_.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return s || u.Cd(n), i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
            applicationId: e,
            originURL: s ? t : null
        }), n
    } catch (t) {
        return i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
            applicationId: e,
            error: t.message
        }), null
    }
}

function m() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function E() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}