/** chunk id: 37438 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(420970),
    a = n(795816),
    l = n(20015),
    r = n(636401),
    s = n(90924),
    o = n(592653),
    d = n(569475),
    c = n(652215);
let u = {
    [c.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: (0, i.T)(c.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: o.WW,
        handler(e) {
            let {
                socket: t
            } = e;
            return (0, s.lG)(t.transport), (0, o.Y$)()
        }
    }),
    [c.e$_.REQUEST_PROXY_TICKET_REFRESH]: (0, i.T)(c.e$_.REQUEST_PROXY_TICKET_REFRESH, {
        scope: o.WW,
        async handler(e) {
            let {
                socket: t
            } = e;
            (0, s.lG)(t.transport);
            let n = (0, s.D2)(t.application);
            if (!(0, l.n)(t.application, c.gfo.EMBEDDED)) throw new r.A({
                errorCode: c.Lw6.UNAUTHORIZED_FOR_APPLICATION
            }, "This application cannot access this API");
            let i = (0, d.A)();
            try {
                return {
                    ticket: await (0, a.D2)(n, i?.id)
                }
            } catch (e) {
                throw new r.A({
                    errorCode: c.Lw6.UNKNOWN_ERROR
                }, "Failed to create proxy ticket")
            }
        }
    })
}