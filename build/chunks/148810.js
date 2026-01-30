/** chunk id: 148810, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    SB: () => _,
    Zk: () => d,
    iD: () => p,
    oA: () => f
});
var i = n(562465),
    a = n(961350),
    o = n(353835),
    s = n(380610);
let l = "/__development/build_overrides",
    c = "/__development/create_build_override_link",
    u = "/__development/link";
async function d(e) {
    try {
        var t;
        let n = await i.Bo.put({
            url: (0, s.i_)(l),
            body: {
                overrides: e,
                version: s.hl
            },
            headers: {
                Authorization: null != (t = a.default.getToken()) ? t : ""
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await r(n), n
    } catch (e) {
        return e
    }
}
async function f(e) {
    try {
        let t = await i.Bo.put({
            url: (0, s.i_)(u),
            body: {
                payload: e,
                token: a.default.getToken(),
                version: s.hl
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return await r(t), t
    } catch (e) {
        return e
    }
}
async function p() {
    let e = await i.Bo.del({
        url: (0, s.i_)(l),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return await r(e), e
}

function _(e) {
    var t;
    return i.Bo.post({
        url: (0, s.i_)(c),
        body: e,
        headers: {
            Authorization: null != (t = a.default.getToken()) ? t : ""
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => ({
        url: e.body.url,
        error: !1
    }), e => 400 === e.status ? {
        url: !1,
        error: e.body
    } : {
        url: !1,
        error: "Error making API request (".concat(e.status, ")")
    })
}
r = async e => {
    try {
        await o.A.flushCookies()
    } catch (e) {}
}