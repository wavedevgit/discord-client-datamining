/** chunk id: 491026, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    NS: () => s,
    YZ: () => a,
    p9: () => o
});
var r = n(130978),
    i = n(818337);

function a(e, t) {
    let {
        enabled: n
    } = i.E.useExperiment({
        location: t
    }), a = (0, r.w)(e, t);
    return n && a
}

function o(e, t) {
    let {
        enabled: n
    } = i.E.getCurrentConfig({
        location: t
    }), a = (0, r.$)(e, t);
    return n && a
}

function s(e) {
    let {
        enabled: t
    } = i.l.useExperiment({
        location: e
    });
    return t
}