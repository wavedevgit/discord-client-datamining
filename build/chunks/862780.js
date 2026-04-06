/** chunk id: 862780 params = (module,exports,require) **/
n.d(t, {
    A2: () => d,
    d$: () => o,
    xt: () => c
});
var i = n(265690),
    l = n(121894),
    s = n(52133);
n(661191);
let a = {},
    r = (0, i.h)(e => ({
        pollsByChannelId: {},
        pollsByMessageId: {},
        updatePollState(t, n, i) {
            (0, l.r)(() => {
                e(e => {
                    let l = i(e.pollsByChannelId[t]?.[n]);
                    return {
                        pollsByChannelId: {
                            ...e.pollsByChannelId,
                            [t]: {
                                ...e.pollsByChannelId[t],
                                [n]: l
                            }
                        },
                        pollsByMessageId: {
                            ...e.pollsByMessageId,
                            [n]: l
                        }
                    }
                })
            })
        }
    }));

function o(e) {
    return r(t => t.pollsByChannelId[e] ?? a, s.A)
}

function d(e, t, n) {
    r.getState().updatePollState(e, t, n)
}

function c(e, t) {
    return r.getState().pollsByChannelId[e]?.[t]
}