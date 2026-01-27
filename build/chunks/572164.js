/** Chunk was on web.js **/
/** chunk id: 572164, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ao: () => c,
    Et: () => l,
    TD: () => s,
    XT: () => u
});
var r = n(311907),
    i = n(723702),
    a = n(734066),
    o = n(274372);

function s() {
    let e = (0, a.Pm)(),
        t = o.A.getState().clipsSettings.clipsEnabled;
    return e && t
}

function l() {
    let e = (0, a.sw)(),
        t = (0, r.bG)([o.A], () => o.A.getState().clipsSettings.clipsEnabled);
    return e && t
}

function c() {
    let e = s(),
        t = (0, i.isWindows)(),
        n = o.A.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n
}

function u() {
    let e = l(),
        t = (0, i.isWindows)(),
        n = (0, r.bG)([o.A], () => o.A.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n
}