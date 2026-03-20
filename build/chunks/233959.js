/** chunk id: 233959 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(111162),
    a = n(84002),
    l = n(603265),
    r = n(652215);
let s = e => {
    let {
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: d,
        logger: c,
        postClose: u
    } = e;
    return new l.A({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: d,
        logger: c,
        postClose: u,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || e.cmd !== r.e$_.OVERLAY && e.evt !== r.ZE4.OVERLAY) && c.info(`Socket Emit: ${t}`, (0, a.A)(e))
        }
    })
}