/** chunk id: 217090 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(735438),
    a = n.n(i),
    r = n(179771),
    l = n(613057),
    s = n(652215);

function o(e, t) {
    return {
        [s.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [l.sm.ANY]: [r.F.RPC, r.F.RPC_VOICE_READ]
            },
            handler: () => t => {
                let {
                    prevState: n,
                    dispatch: i
                } = t, r = e();
                return a().isEqual(r, n) || i(r), r
            }
        },
        [s.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: l.hj,
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
                    let l = t(n.application.id);
                    return a().isEqual(l, i) || r(l), l
                }
            }
        }
    }
}