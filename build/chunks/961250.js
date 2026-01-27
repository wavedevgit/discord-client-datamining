/** Chunk was on web.js **/
/** chunk id: 961250, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    t: () => s
});
var r = n(562465),
    i = n(73153),
    a = n(895944),
    o = n(652215);
async function s() {
    i.h.dispatch({
        type: "PROGRAM_REWARDS_FETCH"
    });
    try {
        var e;
        let t = null != (e = (await r.Bo.get({
            url: o.Rsh.PROGRAM_REWARDS,
            rejectWithError: !0
        })).body.rewards) ? e : [];
        i.h.dispatch({
            type: "PROGRAM_REWARDS_FETCH_SUCCESS",
            programRewards: t
        })
    } catch (e) {
        i.h.dispatch({
            type: "PROGRAM_REWARDS_FETCH_FAILURE"
        })
    }
}
async function l() {
    a.A.shouldFetch() && await s()
}