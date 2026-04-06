/** chunk id: 233959 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(111162),
    a = n(84002),
    r = n(603265),
    l = n(652215);
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
    return new r.A({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: d,
        logger: c,
        postClose: u,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || e.cmd !== l.e$_.OVERLAY && e.evt !== l.ZE4.OVERLAY) && c.info(`Socket Emit: ${t}`, (0, a.A)(e))
        }
    })
}