/** chunk id: 271866, original params: e,t,n (module,exports,require) **/
n.d(t, {
    SH: () => T,
    cL: () => A,
    q1: () => _
}), n(65821), n(938796), n(747238);
var r = n(665260),
    i = n(73153),
    l = n(795816),
    a = n(627363),
    o = n(587895),
    s = n(793943),
    c = n(611010),
    u = n(998218),
    E = n(110782),
    d = n(652215);
async function _(e, t) {
    i.h.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
    });
    try {
        if (!await (0, l.Ir)(e)) throw Error("Do not have access!");
        let n = o.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await a.Ay.fetchApplication(e)));
        let s = (0, r.Lt)(n.flags, d.gfo.EMBEDDED);
        if (s && (null == t || !u.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return s || E.Cd(n), i.h.dispatch({
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

function A() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET"
    })
}

function T() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(), i.h.dispatch({
        type: "DEVELOPER_TEST_MODE_RESET_ERROR"
    })
}