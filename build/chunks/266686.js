/** chunk id: 266686 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => A
});
var r = n(626584),
    l = n(111162),
    a = n(84002),
    s = n(538665),
    o = n(546983),
    d = n(233959),
    c = n(652215);
let u = new r.A("RPCServer:PostMessage"),
    A = (i = new s.A(o.j7, u, d.A, (e, t, n) => {
        (l.default.isLoggingOverlayEvents || e.cmd !== c.e$_.OVERLAY) && t.info(`Socket Message: ${n.id}`, (0, a.A)(e))
    }), window.addEventListener("message", e => {
        if (window === e.source) return;
        if (null == e.source || null == e.source.postMessage) return void u.error("Unknown event source");
        let t = e.source,
            n = e.data,
            r = e.origin;
        i.handleMessage(n, r, (e, n) => {
            ! function(e) {
                try {
                    return e.closed
                } catch {
                    return !1
                }
            }(t) && t.postMessage(e, n)
        })
    }), i)