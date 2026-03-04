/** chunk id: 526132, original params: n,e,t (module,exports,require) **/
t.d(e, {
    e: () => a,
    n: () => r
});
var c = t(311907),
    d = t(576705),
    u = t(652215);

function r(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.A;
    return null != n && null != n.linkedLobby && e.can(u.xBc.MANAGE_CHANNELS, n) && e.can(u.xBc.VIEW_CHANNEL, n) && e.can(u.xBc.SEND_MESSAGES, n)
}

function a(n) {
    return (0, c.bG)([d.A], () => r(n, d.A))
}