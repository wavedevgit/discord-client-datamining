/** chunk id: 633965, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ei: () => o,
    Ld: () => s,
    pc: () => a,
    u9: () => i
});
let r = (0, n(353640).v)(e => ({}));

function i(e) {
    r.setState({
        getVisibleGuildIds: e
    })
}

function a() {
    return r.getState().getVisibleGuildIds
}

function o(e) {
    r.setState({
        getVisibleChannelIds: e
    })
}

function s() {
    return r.getState().getVisibleChannelIds
}