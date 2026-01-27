/** Chunk was on web.js **/
/** chunk id: 674378, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Tr: () => d,
    XZ: () => _,
    gW: () => s,
    kv: () => c,
    r0: () => l,
    uA: () => u,
    z0: () => f,
    zY: () => p
}), n(896048), n(747238);
var r = n(253932),
    i = n(287809),
    a = n(67480),
    o = n(652215);

function s(e, t) {
    return "".concat(e, ":").concat(t)
}

function l(e) {
    let [t, n] = e.split(":");
    return {
        applicationId: t,
        branchId: n
    }
}

function c(e, t) {
    if (!r.tz.getSetting() || r.jP.getSetting() === o.clD.INVISIBLE) return !1;
    let n = t.getActiveLibraryApplication(e);
    return null == n || !n.hasFlag(o.hM6.PRIVATE)
}

function u(e, t) {
    return 0 === t ? 100 : e / t * 100
}

function d(e, t, n) {
    return !(null == t || n.enabled && t.hasFlag(o.hM6.PRIVATE)) && !t.isHidden()
}

function f(e) {
    return null == e ? null : e.type === o.WTw.INSTALLING || e.type === o.WTw.UPDATING || e.type === o.WTw.UNINSTALLING ? e : null
}

function p(e) {
    return e.reduce((e, t) => {
        let n = f(t);
        return null == n || t.type === o.WTw.UP_TO_DATE ? e : {
            total: e.total + Number(n.total),
            progress: e.progress + Number(n.progress)
        }
    }, {
        total: 0,
        progress: 0
    })
}

function _(e) {
    return !!e.isDiscordApplication() && e.isEntitled(i.default.getCurrentUser(), a.A)
}