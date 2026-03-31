/** chunk id: 862780 params = (module,exports,require) **/
n.d(t, {
    A2: () => d,
    d$: () => o,
    xt: () => c
});
var i = n(265690),
    a = n(121894),
    r = n(52133);
n(661191);
let l = {},
    s = (0, i.h)(e => ({
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
    return s(t => t.pollsByChannelId[e] ?? l, r.A)
}

function d(e, t, n) {
    s.getState().updatePollState(e, t, n)
}

function c(e, t) {
    return s.getState().pollsByChannelId[e]?.[t]
}