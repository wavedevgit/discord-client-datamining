/** chunk id: 796111, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048), n(938796);
var r = n(665260),
    i = n(562465),
    l = n(10716),
    a = n(458664),
    s = n(587895),
    o = n(147964),
    c = n(954571),
    u = n(636401),
    d = n(90924),
    p = n(629471),
    h = n(569475),
    g = n(613057),
    m = n(652215);
let f = {
    [m.e$_.SEND_ANALYTICS_EVENT]: {
        validation: e => (0, p.A)(e).required().keys({
            event_name: e.string().required(),
            event_properties: (0, p.A)(e).required()
        }),
        handler(e) {
            var t;
            let {
                socket: n,
                args: {
                    event_name: i,
                    event_properties: l
                }
            } = e;
            (0, d.lG)(n.transport), (0, d.D2)(n.application);
            let o = n.application.id,
                p = (0, h.A)(),
                g = null == p ? void 0 : p.getGuildId(),
                f = s.A.getApplication(o);
            if (!(0, r.Lt)(null != (t = null == f ? void 0 : f.flags) ? t : 0, m.gfo.EMBEDDED_FIRST_PARTY)) throw new u.A({
                errorCode: m.Lw6.INVALID_COMMAND
            }, "This application cannot access this API");
            let A = (0, a.D)(o),
                _ = {
                    activity_application_id: o,
                    activity_channel_type: null == p ? void 0 : p.type,
                    activity_guild_id: g,
                    activity_user_session_id: null == A ? void 0 : A.activityUserSessionId
                };
            c.default.track(i, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, _, l))
        }
    },
    [m.e$_.GET_APPLICATION_TICKET]: {
        scope: g.hj,
        handler(e) {
            let {
                socket: t
            } = e, n = t.application.id;
            if (null == n) throw new u.A({
                errorCode: m.Lw6.INVALID_COMMAND
            }, "No application.");
            return i.Bo.post({
                url: m.Rsh.APPLICATION_TICKET(n),
                body: {
                    test_mode: o.A.inTestModeForApplication(n) || l.A.inDevModeForApplication(n)
                },
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !1
            }).then(e => {
                let {
                    body: t
                } = e;
                return t
            })
        }
    }
}