/** chunk id: 526132 params = (module,exports,require) **/
i.d(e, {
    e: () => c,
    n: () => l
});
var t = i(311907),
    r = i(576705),
    a = i(652215);

function l(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return null != n && null != n.linkedLobby && e.can(a.xBc.MANAGE_CHANNELS, n) && e.can(a.xBc.VIEW_CHANNEL, n) && e.can(a.xBc.SEND_MESSAGES, n)
}

function c(n) {
    return (0, t.bG)([r.A], () => l(n, r.A))
}