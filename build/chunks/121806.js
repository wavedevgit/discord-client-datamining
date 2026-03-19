/** chunk id: 121806 params = (module,exports,require) **/
r.d(t, {
    CT: () => D,
    H3: () => w,
    Ht: () => W,
    KD: () => O,
    Ky: () => M,
    TT: () => F,
    _2: () => U,
    dY: () => q,
    ps: () => N,
    u2: () => k,
    vj: () => H,
    wf: () => P
}), r(321073), r(667532);
var n = r(627968),
    s = r(64700),
    l = r(735438),
    a = r(989349),
    i = r.n(a),
    o = r(835245),
    c = r(311907),
    u = r(397927),
    d = r(157559),
    h = r(713654),
    _ = r(734057),
    f = r(287809),
    S = r(403362),
    E = r(562153),
    g = r(427262),
    p = r(256796),
    A = r(692986),
    m = r(822382),
    R = r(771650),
    y = r(674142),
    x = r(907745),
    T = r(315059),
    I = r(652215),
    b = r(985018);

function L(e) {
    let {
        searchContext: t,
        filter: r,
        queryString: n
    } = e, l = (0, c.bG)([A.A], () => A.A.getState(t), [t], c.My), a = s.useMemo(() => {
        let e = l.autocompletes[0];
        return null != e && e.group === r ? e.results : []
    }, [l.autocompletes, r]), i = s.useMemo(() => {
        let e = R.Ay[r].key;
        return `${e} ${n}`
    }, [r, n]), o = s.useCallback(() => {
        let e = (0, m._o)(i),
            r = (0, m.zZ)(e, i.length - 1, i.length - 1);
        p.A.updateAutocompleteQuery({
            searchContext: t,
            tokens: e,
            cursorScope: r,
            queryString: i
        })
    }, [t, i]), u = s.useCallback(() => {
        o()
    }, [o]);
    return s.useEffect(() => {
        n.trim().length > 0 && o()
    }, [i, t, o, n]), {
        filterAutocompleteResults: a,
        handleFocusFilter: u,
        autocompleteStoreState: l
    }
}

function C(e) {
    let {
        user: t,
        guildId: r,
        channelId: n
    } = e, s = E.Ay.getName(r, n, t), l = t.getAvatarURL(r, (0, u.FT9)(u._3J.SIZE_24));
    return {
        value: t.id,
        label: s,
        key: t.id,
        id: t.id,
        leading: {
            type: "avatar",
            src: l
        },
        trailing: t.username
    }
}

function N(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = s.useMemo(() => (0, m.mt)(e), [e]),
        l = s.useMemo(() => (0, m._b)(e), [e]),
        [a, i] = s.useState(r),
        [o, c] = s.useState(""),
        {
            filterAutocompleteResults: u,
            handleFocusFilter: d,
            autocompleteStoreState: h
        } = L({
            searchContext: e,
            filter: t,
            queryString: o
        }),
        _ = s.useMemo(() => {
            let e = [],
                t = new Set;
            if (u.length > 0) u.forEach(r => {
                let s = r.user,
                    a = C({
                        user: s,
                        guildId: n,
                        channelId: l
                    });
                t.add(s.id), e.push(a)
            });
            else {
                let {
                    tokens: r
                } = h, s = r[r.length - 1];
                if (null != s && (s.type === I.LWr.ANSWER_USERNAME_FROM || s.type === I.LWr.ANSWER_USERNAME_MENTIONS) && (0, R.sC)(s)) {
                    let r = s.getData("userId"),
                        a = f.default.getUser(r);
                    if (null != a) {
                        let r = C({
                            user: a,
                            guildId: n,
                            channelId: l
                        });
                        t.add(a.id), e.push(r)
                    }
                }
            }
            return a.length > 0 && a.forEach(r => {
                if (t.has(r)) return;
                let s = f.default.getUser(r);
                if (null == s) return;
                let a = C({
                    user: s,
                    guildId: n,
                    channelId: l
                });
                t.add(r), e.unshift(a)
            }), e
        }, [h, u, a, n, l]),
        E = s.useCallback(() => {
            i([]), c("")
        }, []),
        p = s.useCallback(() => {
            c("")
        }, []),
        A = s.useCallback(e => {
            if (0 === a.length) return null;
            let t = R.Ay[e];
            return a.map(e => {
                let r = f.default.getUser(e);
                if (null == r) return null;
                let n = g.Ay.getUserTag(r);
                return "" === n ? null : `${t.key} ${n}`
            }).filter(S.Vq).join(" ")
        }, [a]);
    return {
        options: _,
        query: a,
        setQuery: i,
        setQueryString: c,
        handleClearFilter: E,
        getApplyQueryString: A,
        handleFocusFilter: d,
        handleBlurFilter: p
    }
}

function v(e) {
    let t, {
        channel: r
    } = e;
    if (r.isDM()) {
        let e = r.getRecipientId(),
            n = f.default.getUser(e);
        null != n && (t = {
            type: "avatar",
            src: n.getAvatarURL(null, (0, u.FT9)(u._3J.SIZE_20))
        })
    } else t = r.isGroupDM() ? (0, n.jsx)(T.A, {
        channel: r,
        avatarSize: u._3J.SIZE_20,
        iconSize: "refresh_sm"
    }) : (0, h.gU)(r);
    return {
        value: r.id,
        label: (0, m.E3)(r),
        key: r.id,
        id: r.id,
        leading: t
    }
}

function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        [l, a] = s.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: o,
            autocompleteStoreState: c
        } = L({
            searchContext: e,
            filter: I.LWr.FILTER_IN,
            queryString: l
        }),
        u = s.useMemo(() => {
            let t = [],
                n = new Set;
            if (i.length > 0) i.forEach(e => {
                let r = e.channel,
                    s = v({
                        channel: r
                    });
                n.add(r.id), t.push(s)
            });
            else {
                let {
                    tokens: r
                } = c, s = r[r.length - 1];
                if (null != s && s.type === I.LWr.ANSWER_IN && (0, R.Yd)(s, e)) {
                    let e = s.getData("channelIds");
                    null != e && e.length > 0 && e.forEach(e => {
                        let r = _.A.getChannel(e);
                        if (null != r) {
                            let e = v({
                                channel: r
                            });
                            n.add(r.id), t.push(e)
                        }
                    })
                }
            }
            return r.length > 0 && r.forEach(e => {
                if (n.has(e)) return;
                let r = _.A.getChannel(e);
                if (null == r) return;
                let s = v({
                    channel: r
                });
                n.add(e), t.unshift(s)
            }), t
        }, [c, i, r, e]),
        d = s.useCallback(() => {
            n([]), a("")
        }, []),
        h = s.useCallback(() => {
            a("")
        }, []),
        f = s.useCallback(e => {
            if (0 === r.length) return null;
            let t = R.Ay[e];
            return r.map(e => {
                let r = _.A.getChannel(e);
                if (null == r) return;
                let n = (0, m.E3)(r),
                    s = (0, m.TZ)(n);
                return `${t.key} ${s}`
            }).join(" ")
        }, [r]);
    return {
        options: u,
        query: r,
        setQuery: n,
        setQueryString: a,
        handleClearFilter: d,
        getApplyQueryString: f,
        handleFocusFilter: o,
        handleBlurFilter: h
    }
}

function O(e) {
    switch (e) {
        case b.intl.string(b.t.ZNR2fi):
            return u.qYV;
        case b.intl.string(b.t["20uQR3"]):
            return u.JD7;
        case b.intl.string(b.t.L4lxyE):
            return u.YRe;
        case b.intl.string(b.t["AV/v6i"]):
            return u.oSV;
        case b.intl.string(b.t.XM9XGP):
            return u.npA;
        case b.intl.string(b.t.TNLcpx):
            return u.xfq;
        case b.intl.string(b.t.F8Wf0e):
            return u.JMI;
        case b.intl.string(b.t.PJgX2h):
            return u.tEP;
        case b.intl.string(b.t.nrpA5E):
            return u.tuI;
        default:
            return null
    }
}

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        {
            filterAutocompleteResults: l,
            handleFocusFilter: a
        } = L({
            searchContext: e,
            filter: I.LWr.FILTER_HAS,
            queryString: ""
        }),
        i = s.useMemo(() => {
            if (0 === l.length && 0 === r.length) return [];
            let e = [],
                t = new Set;
            return r.length > 0 && r.forEach(r => {
                t.add(r), e.push({
                    value: r,
                    label: r,
                    key: r,
                    id: r,
                    leading: O(r)
                })
            }), l.length > 0 && l.forEach(r => {
                let {
                    text: n
                } = r;
                t.has(n) || (e.push({
                    value: n,
                    label: n,
                    key: n,
                    id: n,
                    leading: O(n)
                }), t.add(n))
            }), e
        }, [l, r]),
        o = s.useCallback(() => {
            n([])
        }, []),
        c = s.useCallback(e => {
            if (0 === r.length) return null;
            let t = R.Ay[e];
            return r.map(e => `${t.key} ${e}`).join(" ")
        }, [r]);
    return {
        options: i,
        query: r,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: c,
        handleFocusFilter: a
    }
}
let j = () => s.useMemo(() => {
    let e = R.Ay[I.LWr.FILTER_BEFORE],
        t = R.Ay[I.LWr.FILTER_AFTER],
        r = R.Ay[I.LWr.FILTER_ON];
    return {
        beforeFilter: e?.key ?? `${b.intl.string(b.t["qZ+7BA"])}:`,
        afterFilter: t?.key ?? `${b.intl.string(b.t.KSDx7M)}:`,
        duringFilter: r?.key ?? `${b.intl.string(b.t.h2NzSd)}:`
    }
}, []);

function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, r] = s.useState(e),
        n = s.useCallback(() => (0, o.A)(), []),
        l = s.useCallback(e => e.date.isValid(), []),
        a = s.useMemo(() => t.filter(l), [t, l]),
        {
            beforeFilter: c,
            afterFilter: u,
            duringFilter: d
        } = j(),
        h = s.useCallback(() => ({
            query: c,
            date: i()(),
            id: n()
        }), [c, n]),
        _ = s.useMemo(() => [{
            key: "Before",
            label: b.intl.string(b.t["ptL/DP"]),
            value: c
        }, {
            key: "After",
            label: b.intl.string(b.t.waQeEV),
            value: u
        }, {
            key: "During",
            label: b.intl.string(b.t.LT5TnZ),
            value: d
        }], [c, u, d]),
        f = s.useCallback(e => {
            let {
                query: t,
                index: n
            } = e;
            r(e => {
                let r = [...e];
                return r[n] = {
                    ...r[n],
                    query: t
                }, r
            })
        }, []),
        S = s.useCallback(e => {
            let {
                date: t,
                index: n
            } = e;
            r(e => {
                let r = [...e];
                return r[n] = {
                    ...r[n],
                    date: t
                }, r
            })
        }, []),
        E = s.useCallback(() => {
            r(e => [...e, h()])
        }, [h]),
        g = s.useCallback(e => {
            r(t => {
                let r = [...t];
                return r.splice(e, 1), r
            })
        }, []),
        p = s.useCallback(() => {
            r([])
        }, []),
        A = s.useCallback(() => 0 === a.length ? null : a.map(e => {
            let {
                query: t,
                date: r
            } = e, n = r.format(I.ump);
            return `${t} ${n}`
        }).join(" "), [a]);
    return {
        options: _,
        dates: t,
        validDates: a,
        handleDateQueryChange: f,
        handleDateChange: S,
        handleAddDateFilter: E,
        handleRemoveDateFilter: g,
        handleClearDateFilter: p,
        getDateQueryString: A
    }
}

function W(e) {
    switch (e) {
        case b.intl.string(b.t.tPZo4p):
            return u.nys;
        case b.intl.string(b.t.JL7sRS):
            return u.CnV;
        case b.intl.string(b.t.WjkIKU):
            return u.XC7
    }
}

function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        {
            filterAutocompleteResults: l,
            handleFocusFilter: a
        } = L({
            searchContext: e,
            filter: I.LWr.FILTER_AUTHOR_TYPE,
            queryString: ""
        }),
        i = s.useMemo(() => {
            if (0 === l.length && 0 === r.length) return [];
            let e = [],
                t = new Set;
            return r.length > 0 && r.forEach(r => {
                t.add(r), e.push({
                    value: r,
                    label: r,
                    key: r,
                    id: r,
                    leading: W(r)
                })
            }), l.length > 0 && l.forEach(r => {
                let {
                    text: n
                } = r;
                t.has(n) || (e.push({
                    value: n,
                    label: n,
                    key: n,
                    id: n,
                    leading: W(n)
                }), t.add(n))
            }), e
        }, [l, r]),
        o = s.useCallback(() => {
            n([])
        }, []),
        c = s.useCallback(e => {
            if (0 === r.length) return null;
            let t = R.Ay[e];
            return r.map(e => `${t.key} ${e}`).join(" ")
        }, [r]);
    return {
        options: i,
        query: r,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: c,
        handleFocusFilter: a
    }
}

function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [r, n] = s.useState(t),
        l = s.useMemo(() => {
            let t = R.Ay[I.LWr.FILTER_PINNED].getAutocompletions?.({
                query: "",
                maxResults: 10,
                searchContext: e
            }) ?? [];
            if (0 === t.length && null === r) return [];
            let n = [];
            return t.length > 0 && t.forEach(e => {
                let {
                    text: t
                } = e;
                n.push({
                    value: t,
                    label: t,
                    key: t
                })
            }), n
        }, [e, r]),
        a = s.useCallback(() => {
            n(null)
        }, []),
        i = s.useCallback(e => {
            if (null === r) return null;
            let t = R.Ay[e];
            return `${t.key} ${r}`
        }, [r]);
    return {
        options: l,
        query: r,
        setQuery: n,
        handleClearFilter: a,
        getApplyQueryString: i
    }
}

function H(e, t) {
    let {
        beforeFilter: r,
        afterFilter: n,
        duringFilter: l
    } = j(), a = (0, y.o)(t);
    return s.useMemo(() => {
        let t = {
                [I.LWr.FILTER_FROM]: [],
                [I.LWr.FILTER_MENTIONS]: [],
                [I.LWr.FILTER_HAS]: [],
                [I.LWr.FILTER_IN]: [],
                [I.LWr.FILTER_ON]: [],
                [I.LWr.FILTER_BEFORE]: [],
                [I.LWr.FILTER_AFTER]: [],
                [I.LWr.FILTER_PINNED]: null,
                [I.LWr.FILTER_AUTHOR_TYPE]: []
            },
            s = [],
            c = 0;
        e.forEach(e => {
            if (I.T2E.test(e.type)) switch (e.type) {
                case I.LWr.ANSWER_USERNAME_FROM:
                    if (a.has(I.LWr.FILTER_FROM)) {
                        let r = t[I.LWr.FILTER_FROM],
                            n = e.getData("userId");
                        r.push(n), c += 1
                    }
                    break;
                case I.LWr.ANSWER_USERNAME_MENTIONS:
                    if (a.has(I.LWr.FILTER_MENTIONS)) {
                        let r = t[I.LWr.FILTER_MENTIONS],
                            n = e.getData("userId");
                        r.push(n), c += 1
                    }
                    break;
                case I.LWr.ANSWER_HAS:
                    let u = t[I.LWr.FILTER_HAS],
                        d = e.getData("has");
                    u.push(d), c += 1;
                    break;
                case I.LWr.ANSWER_IN:
                    if (a.has(I.LWr.FILTER_IN)) {
                        let r = t[I.LWr.FILTER_IN],
                            n = e.getData("channelIds") ?? [];
                        r.push(...n), c += 1
                    }
                    break;
                case I.LWr.ANSWER_BEFORE:
                    let h = t[I.LWr.FILTER_BEFORE],
                        _ = e.getData("end"),
                        f = {
                            query: r,
                            date: i()(_),
                            id: (0, o.A)()
                        };
                    h.push(f), s.push(f), c += 1;
                    break;
                case I.LWr.ANSWER_ON:
                    let S = t[I.LWr.FILTER_ON],
                        E = e.getData("start"),
                        g = {
                            query: l,
                            date: i()(E),
                            id: (0, o.A)()
                        };
                    S.push(g), s.push(g), c += 1;
                    break;
                case I.LWr.ANSWER_AFTER:
                    let p = t[I.LWr.FILTER_AFTER],
                        A = e.getData("start"),
                        m = {
                            query: n,
                            date: i()(A),
                            id: (0, o.A)()
                        };
                    p.push(m), s.push(m), c += 1;
                    break;
                case I.LWr.ANSWER_PINNED:
                    let R = t[I.LWr.FILTER_PINNED],
                        y = e.getData("pinned").toString();
                    null === R ? R = y : "true" !== R && "true" === y && (R = y), t[I.LWr.FILTER_PINNED] = R, c += 1;
                    break;
                case I.LWr.ANSWER_AUTHOR_TYPE:
                    if (a.has(I.LWr.FILTER_AUTHOR_TYPE)) {
                        let r = t[I.LWr.FILTER_AUTHOR_TYPE],
                            n = e.getData("author_type");
                        r.push(n), c += 1
                    }
            }
        });
        let u = {
            [I.LWr.FILTER_FROM]: t[I.LWr.FILTER_FROM],
            [I.LWr.FILTER_MENTIONS]: t[I.LWr.FILTER_MENTIONS],
            [I.LWr.FILTER_HAS]: t[I.LWr.FILTER_HAS],
            [I.LWr.FILTER_IN]: t[I.LWr.FILTER_IN],
            dateFilters: s,
            [I.LWr.FILTER_AUTHOR_TYPE]: t[I.LWr.FILTER_AUTHOR_TYPE],
            [I.LWr.FILTER_PINNED]: t[I.LWr.FILTER_PINNED]
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: c,
            prefilledSearchFilters: u,
            eligibleFilterTokens: a
        }
    }, [e, r, n, l, a])
}

function P(e, t) {
    return e === t || (0, l.isEqual)(e, t)
}

function U(e, t) {
    if (e.length !== t.length) return !1;
    let r = new Map;
    for (let t of e) {
        let e = `${t.query}:${t.date.valueOf()}`,
            n = r.get(e) ?? 0;
        r.set(e, n + 1)
    }
    for (let e of t) {
        let t = `${e.query}:${e.date.valueOf()}`,
            n = r.get(t) ?? 0;
        if (0 === n) return !1;
        r.set(t, n - 1)
    }
    for (let e of r.values())
        if (0 !== e) return !1;
    return !0
}

function q(e) {
    let {
        nonFilterQueryString: t,
        filterQueryString: r
    } = e, n = +(r.length > 0), l = +(t.length > 0), a = x.E2 - t.length - l - n, i = s.useCallback(e => {
        let {
            newFilterString: t
        } = e;
        return r.length + t.length > a
    }, [r.length, a]), o = s.useMemo(() => r.length + 18 > a, [r.length, a]), c = s.useCallback(() => {
        d.A.show({
            title: b.intl.string(b.t.nOqJcX),
            body: b.intl.string(b.t.zzAcsv),
            confirmText: b.intl.string(b.t["qcYY+/"])
        })
    }, []);
    return {
        validateFilter: s.useCallback((e, t) => !i({
            newFilterString: function(e, t) {
                let r, n = R.Ay[e];
                switch (e) {
                    case I.LWr.FILTER_FROM:
                    case I.LWr.FILTER_MENTIONS:
                        let s = f.default.getUser(t);
                        r = null == s ? t : `${s.username}`;
                        break;
                    case I.LWr.FILTER_IN:
                        let l = _.A.getChannel(t);
                        if (null == l) r = t;
                        else {
                            let e = (0, m.E3)(l);
                            r = (0, m.TZ)(e)
                        }
                        break;
                    case I.LWr.FILTER_HAS:
                    case I.LWr.FILTER_PINNED:
                    case I.LWr.FILTER_AUTHOR_TYPE:
                    default:
                        r = t
                }
                return n.key + " " + r
            }(e, t)
        }) || (c(), !1), [i, c]),
        validateDateFilter: s.useCallback(() => !o || (c(), !1), [o, c])
    }
}