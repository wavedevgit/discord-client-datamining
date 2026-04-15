/** chunk id: 217090 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(735438),
    l = n.n(i),
    a = n(179771),
    r = n(613057),
    s = n(652215);

function o(e, t) {
    return {
        [s.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [r.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ]
            },
            handler: () => t => {
                let {
                    prevState: n,
                    dispatch: i
                } = t, a = e();
                return l().isEqual(a, n) || i(a), a
            }
        },
        [s.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: r.hj,
            handler(e) {
                let {
                    socket: n
                } = e;
                return e => {
                    let {
                        prevState: i,
                        dispatch: a
                    } = e;
                    if (null == n.application.id) return i;
                    let r = t(n.application.id);
                    return l().isEqual(r, i) || a(r), r
                }
            }
        }
    }
}