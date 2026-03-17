/** chunk id: 600403 params = (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(142703);
var i = n(954571),
    a = n(636401),
    r = n(722306),
    l = n(105130),
    s = n(652215);
let o = {
    [s.e$_.SUBSCRIBE]: {
        async handler(e) {
            let {
                server: t,
                socket: n,
                evt: o,
                args: d
            } = e, c = t.events[o];
            if (null == c) throw new a.A({
                errorCode: s.Lw6.INVALID_EVENT
            }, `Invalid event: ${o}`);
            if (!(0, r.A)(n.authorization.scopes, c.scope)) throw new a.A({
                errorCode: s.Lw6.INVALID_PERMISSIONS
            }, "Not authenticated or invalid scope");
            if (i.default.track(s.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: o,
                    scope: "object" == typeof c.scope ? JSON.stringify(c.scope) : c.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString()
                }), null != c.validation) {
                let e = await t.getJoi();
                if (null != e.validate(d, c.validation(e), {
                        convert: !1
                    }).error) throw new a.A({
                    errorCode: s.Lw6.INVALID_PAYLOAD
                }, "Invalid subscription parameters provided")
            }
            let u = c.handler({
                    args: d,
                    socket: n
                }),
                A = (0, l.M)(n, o, d);
            return new Promise(e => {
                setImmediate(() => {
                    t.addSubscription(n, o, d, u), null != A && t.dispatchToSubscriptions(o, e => e.socket.id === n.id, A)
                }), e({
                    evt: o
                })
            })
        }
    },
    [s.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let {
                server: t,
                socket: n,
                evt: i,
                args: r
            } = e;
            if (null == t.events[i]) throw new a.A({
                errorCode: s.Lw6.INVALID_EVENT
            }, `Invalid event: ${i}`);
            return t.removeSubscription(n, i, r), {
                evt: i
            }
        }
    }
}