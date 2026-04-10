/** chunk id: 217090 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(735438),
    l = n.n(i),
    r = n(179771),
    a = n(613057),
    s = n(652215);

function o(e, t) {
    return {
        [s.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [a.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ]
            },
            handler: () => t => {
                let {
                    prevState: n,
                    dispatch: i
                } = t, r = e();
                return l().isEqual(r, n) || i(r), r
            }
        },
        [s.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: a.hj,
            handler(e) {
                let {
                    socket: n
                } = e;
                return e => {
                    let {
                        prevState: i,
                        dispatch: r
                    } = e;
                    if (null == n.application.id) return i;
                    let a = t(n.application.id);
                    return l().isEqual(a, i) || r(a), a
                }
            }
        }
    }
}