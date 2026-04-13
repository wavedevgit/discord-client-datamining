/** chunk id: 928348 params = (module,exports,require) **/
"use strict";
n.d(t, {
    H6: () => m,
    p3: () => A,
    qv: () => I,
    wP: () => T
}), n(321073);
var i = n(64700),
    r = n(942381),
    s = n(265690),
    a = n(121894),
    l = n(198982),
    o = n(137207),
    c = n(904813),
    u = n(411335),
    d = n(652215);
let _ = {},
    E = (0, s.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: n => {
            let {
                guildId: i,
                id: r,
                triggerType: s
            } = n, {
                rules: l
            } = t(), o = l[i] ?? {}, u = o[s] ?? [], d = u.some(e => e.id === r), _ = u.filter(e => !(0, c.R)(e.id) || e.triggerType !== s), E = d ? _.map(e => e.id === r ? n : e) : [..._, n];
            (0, a.r)(() => {
                e({
                    rules: {
                        ...l,
                        [i]: {
                            ...o,
                            [s]: E
                        }
                    },
                    error: null
                })
            })
        },
        removeRule: (n, i) => {
            let {
                rules: r
            } = t(), s = r[i], l = Object.keys(s).reduce((e, t) => {
                let i = Number(t),
                    r = s[i] ?? [];
                return e[i] = r.filter(e => e.id !== n), e
            }, {});
            (0, a.r)(() => {
                e({
                    rules: {
                        ...r,
                        [i]: l
                    },
                    error: null
                })
            })
        },
        syncRules: async n => {
            var i;
            let r;
            if (r = Date.now(), r - (_[n] ?? 0) > 2e4) {
                _[n] = Date.now();
                try {
                    let r, s = (i = await (0, o.H0)(n), r = {
                            [u.uh.KEYWORD]: [],
                            [u.uh.ML_SPAM]: [],
                            [u.uh.DEFAULT_KEYWORD_LIST]: [],
                            [u.uh.MENTION_SPAM]: [],
                            [u.uh.USER_PROFILE]: [],
                            [u.uh.SERVER_POLICY]: []
                        }, i.forEach(e => {
                            let {
                                triggerType: t
                            } = e;
                            r[t]?.push(e)
                        }), r),
                        l = t().rules;
                    (0, a.r)(() => {
                        e({
                            rules: {
                                ...l,
                                [n]: s
                            },
                            error: null
                        })
                    })
                } catch (n) {
                    let t = new l.LG(n);
                    (0, a.r)(() => {
                        e({
                            error: t
                        })
                    })
                }
            }
        }
    })),
    A = (e, t) => {
        let n = E.getState().rules;
        return (n[e]?.[t] ?? []).length
    };

function m(e) {
    let [t, n] = i.useState(!1), [s, a] = E(e => [e.syncRules, e.fetching], r.x);
    return [t, i.useCallback(async () => {
        if (!a && null != e) try {
            n(!0), await s(e)
        } finally {
            n(!1)
        }
    }, [e, a, s])]
}

function I(e) {
    let [t, n] = m(e);
    return i.useEffect(() => {
        (async () => {
            await n()
        })()
    }, [e, n]), [t, n]
}

function T(e) {
    return E(t => ({
        rulesByTriggerType: t.rules[e ?? d.dJq] ?? {},
        updateRule: t.updateRule,
        removeRule: t.removeRule
    }), r.x)
}