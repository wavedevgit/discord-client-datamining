/** chunk id: 233959, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(111162),
    r = n(84002),
    l = n(603265),
    a = n(652215);
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
            (i.default.isLoggingOverlayEvents || e.cmd !== a.e$_.OVERLAY && e.evt !== a.ZE4.OVERLAY) && c.info(`Socket Emit: ${t}`, (0, r.A)(e))
        }
    })
}