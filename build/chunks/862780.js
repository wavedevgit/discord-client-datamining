/** chunk id: 862780 params = (module,exports,require) **/
n.d(t, {
    A2: () => d,
    d$: () => o,
    xt: () => c
});
var i = n(265690),
    a = n(121894),
    l = n(52133);
n(661191);
let s = {},
    r = (0, i.h)(e => ({
        pollsByChannelId: {},
        pollsByMessageId: {},
        updatePollState(t, n, i) {
            (0, a.r)(() => {
                e(e => {
                    let a = i(e.pollsByChannelId[t]?.[n]);
                    return {
                        pollsByChannelId: {
                            ...e.pollsByChannelId,
                            [t]: {
                                ...e.pollsByChannelId[t],
                                [n]: a
                            }
                        },
                        pollsByMessageId: {
                            ...e.pollsByMessageId,
                            [n]: a
                        }
                    }
                })
            })
        }
    }));

function o(e) {
    return r(t => t.pollsByChannelId[e] ?? s, l.A)
}

function d(e, t, n) {
    r.getState().updatePollState(e, t, n)
}

function c(e, t) {
    return r.getState().pollsByChannelId[e]?.[t]
}