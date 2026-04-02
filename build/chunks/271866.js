/** chunk id: 271866 params = (module,exports,require) **/
"use strict";
n.d(t, {
    SH: () => m,
    cL: () => E,
    q1: () => b
});
var i = n(73153),
    r = n(795816),
    a = n(627363),
    o = n(587895),
    s = n(20015),
    l = n(793943),
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
        let n = o.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await a.Ay.fetchApplication(e)));
        let l = (0, s.n)(n, d.gfo.EMBEDDED);
        if (l && (null == t || !_.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return l || u.Cd(n), i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
            applicationId: e,
            originURL: l ? t : null
        }), n
    } catch (t) {
        return i.h.dispatch({
            type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
            applicationId: e,
            error: t.message
        }), null
    }
}

function E() {
    l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function m() {
    l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}