/** chunk id: 928348 params = (module,exports,require) **/
n.d(t, {
    H6: () => E,
    p3: () => m,
    qv: () => T,
    wP: () => I
}), n(321073);
var i = n(64700),
    l = n(942381),
    a = n(265690),
    r = n(121894),
    s = n(198982),
    o = n(137207),
    c = n(904813),
    d = n(411335),
    u = n(652215);
let _ = {},
    A = (0, a.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: n => {
            let {
                guildId: i,
                id: l,
                triggerType: a
            } = n, {
                rules: s
            } = t(), o = s[i] ?? {}, d = o[a] ?? [], u = d.some(e => e.id === l), _ = d.filter(e => !(0, c.R)(e.id) || e.triggerType !== a), A = u ? _.map(e => e.id === l ? n : e) : [..._, n];
            (0, r.r)(() => {
                e({
                    rules: {
                        ...s,
                        [i]: {
                            ...o,
                            [a]: A
                        }
                    },
                    error: null
                })
            })
        },
        removeRule: (n, i) => {
            let {
                rules: l
            } = t(), a = l[i], s = Object.keys(a).reduce((e, t) => {
                let i = Number(t),
                    l = a[i] ?? [];
                return e[i] = l.filter(e => e.id !== n), e
            }, {});
            (0, r.r)(() => {
                e({
                    rules: {
                        ...l,
                        [i]: s
                    },
                    error: null
                })
            })
        },
        syncRules: async n => {
            var i;
            let l;
            if (l = Date.now(), l - (_[n] ?? 0) > 2e4) {
                _[n] = Date.now();
                try {
                    let l, a = (i = await (0, o.H0)(n), l = {
                            [d.uh.KEYWORD]: [],
                            [d.uh.ML_SPAM]: [],
                            [d.uh.DEFAULT_KEYWORD_LIST]: [],
                            [d.uh.MENTION_SPAM]: [],
                            [d.uh.USER_PROFILE]: [],
                            [d.uh.SERVER_POLICY]: []
                        }, i.forEach(e => {
                            let {
                                triggerType: t
                            } = e;
                            l[t]?.push(e)
                        }), l),
                        s = t().rules;
                    (0, r.r)(() => {
                        e({
                            rules: {
                                ...s,
                                [n]: a
                            },
                            error: null
                        })
                    })
                } catch (n) {
                    let t = new s.LG(n);
                    (0, r.r)(() => {
                        e({
                            error: t
                        })
                    })
                }
            }
        }
    })),
    m = (e, t) => {
        let n = A.getState().rules;
        return (n[e]?.[t] ?? []).length
    };

function E(e) {
    let [t, n] = i.useState(!1), [a, r] = A(e => [e.syncRules, e.fetching], l.x);
    return [t, i.useCallback(async () => {
        if (!r && null != e) try {
            n(!0), await a(e)
        } finally {
            n(!1)
        }
    }, [e, r, a])]
}

function T(e) {
    let [t, n] = E(e);
    return i.useEffect(() => {
        (async () => {
            await n()
        })()
    }, [e, n]), [t, n]
}

function I(e) {
    return A(t => ({
        rulesByTriggerType: t.rules[e ?? u.dJq] ?? {},
        updateRule: t.updateRule,
        removeRule: t.removeRule
    }), l.x)
}