/** chunk id: 905911 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(562465),
    a = n(954571),
    r = n(613057),
    l = n(652215);
let s = {
    [l.e$_.GET_NETWORKING_CONFIG]: {
        scope: r.hj,
        handler: () => Promise.all([i.Bo.get({
            url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
            retries: 3,
            rejectWithError: !1
        }).then(e => {
            let {
                body: {
                    address: t
                }
            } = e;
            return t
        }), i.Bo.post({
            url: l.Rsh.NETWORKING_TOKEN,
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let {
                body: {
                    token: t
                }
            } = e;
            return t
        })]).then(e => {
            let [t, n] = e;
            return {
                address: t,
                token: n
            }
        })
    },
    [l.e$_.NETWORKING_SYSTEM_METRICS]: {
        scope: r.hj,
        handler(e) {
            let {
                socket: t,
                args: n
            } = e;
            n.application_id = t.application.id, a.default.track(l.HAw.NETWORKING_SYSTEM_METRICS, n)
        }
    },
    [l.e$_.NETWORKING_PEER_METRICS]: {
        scope: r.hj,
        handler(e) {
            let {
                socket: t,
                args: n
            } = e;
            n.application_id = t.application.id, a.default.track(l.HAw.NETWORKING_PEER_METRICS, n)
        }
    },
    [l.e$_.NETWORKING_CREATE_TOKEN]: {
        scope: r.hj,
        handler: () => i.Bo.post({
            url: l.Rsh.NETWORKING_TOKEN,
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => e.body)
    }
}