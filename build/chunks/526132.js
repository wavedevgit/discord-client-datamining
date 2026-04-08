/** chunk id: 526132 params = (module,exports,require) **/
t.d(e, {
    e: () => c,
    n: () => a
});
var i = t(311907),
    r = t(576705),
    l = t(652215);

function a(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return null != n && null != n.linkedLobby && e.can(l.xBc.MANAGE_CHANNELS, n) && e.can(l.xBc.VIEW_CHANNEL, n) && e.can(l.xBc.SEND_MESSAGES, n)
}

function c(n) {
    return (0, i.bG)([r.A], () => a(n, r.A))
}