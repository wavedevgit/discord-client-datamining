/** chunk id: 217090 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(735438),
    a = n.n(i),
    l = n(179771),
    r = n(613057),
    s = n(652215);

function o(e, t) {
    return {
        [s.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [r.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ]
            },
            handler: () => t => {
                let {
                    prevState: n,
                    dispatch: i
                } = t, l = e();
                return a().isEqual(l, n) || i(l), l
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
                        dispatch: l
                    } = e;
                    if (null == n.application.id) return i;
                    let r = t(n.application.id);
                    return a().isEqual(r, i) || l(r), r
                }
            }
        }
    }
}