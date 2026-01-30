/** chunk id: 130978, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => o,
    w: () => a
});
var r = n(503278),
    i = n(652215);

function a(e, t) {
    let {
        enabled: n
    } = r.l.useExperiment({
        guildId: null != e ? e : i.dJq,
        location: t
    });
    return n
}

function o(e, t) {
    let {
        enabled: n
    } = r.l.getCurrentConfig({
        guildId: null != e ? e : i.dJq,
        location: t
    });
    return n
}