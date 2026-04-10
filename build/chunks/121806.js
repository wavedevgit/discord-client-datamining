/** chunk id: 121806 params = (module,exports,require) **/
r.d(t, {
    CT: () => j,
    H3: () => w,
    Ht: () => H,
    KD: () => O,
    Ky: () => M,
    TT: () => v,
    _2: () => U,
    dY: () => $,
    ps: () => b,
    u2: () => W,
    vj: () => D,
    wf: () => P
}), r(321073), r(667532);
var n = r(627968),
    s = r(64700),
    l = r(735438),
    a = r(989349),
    i = r.n(a),
    o = r(835245),
    u = r(311907),
    c = r(397927),
    h = r(157559),
    d = r(713654),
    _ = r(734057),
    S = r(287809),
    E = r(403362),
    f = r(562153),
    p = r(427262),
    g = r(256796),
    A = r(692986),
    y = r(822382),
    R = r(771650),
    T = r(674142),
    I = r(907745),
    m = r(315059),
    L = r(652215),
    x = r(985018);

function C(e) {
    let {
        searchContext: t,
        filter: r,
        queryString: n
    } = e, l = (0, u.bG)([A.A], () => A.A.getState(t), [t], u.My), a = s.useMemo(() => {
        let e = l.autocompletes[0];
        return null != e && e.group === r ? e.results : []
    }, [l.autocompletes, r]), i = s.useMemo(() => {
        let e = R.Ay[r].key;
        return `${e} ${n}`
    }, [r, n]), o = s.useCallback(() => {
        let e = (0, y._o)(i),
            r = (0, y.zZ)(e, i.length - 1, i.length - 1);
        g.A.updateAutocompleteQuery({
            searchContext: t,
            tokens: e,
            cursorScope: r,
            queryString: i
        })
    }, [t, i]), c = s.useCallback(() => {
        o()
    }, [o]);
    return s.useEffect(() => {
        n.trim().length > 0 && o()
    }, [i, t, o, n]), {
        filterAutocompleteResults: a,
        handleFocusFilter: c,
        autocompleteStoreState: l
    }
}

function N(e) {
    let {
        user: t,
        guildId: r,
        channelId: n
    } = e, s = f.Ay.getName(r, n, t), l = t.getAvatarURL(r, (0, c.FT9)(c._3J.SIZE_24));
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

function b(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = s.useMemo(() => (0, y.mt)(e), [e]),
        l = s.useMemo(() => (0, y._b)(e), [e]),
        [a, i] = s.useState(r),
        [o, u] = s.useState(""),
        {
            filterAutocompleteResults: c,
            handleFocusFilter: h,
            autocompleteStoreState: d
        } = C({
            searchContext: e,
            filter: t,
            queryString: o
        }),
        _ = s.useMemo(() => {
            let e = [],
                t = new Set;
            if (c.length > 0) c.forEach(r => {
                let s = r.user,
                    a = N({
                        user: s,
                        guildId: n,
                        channelId: l
                    });
                t.add(s.id), e.push(a)
            });
            else {
                let {
                    tokens: r
                } = d, s = r[r.length - 1];
                if (null != s && (s.type === L.LWr.ANSWER_USERNAME_FROM || s.type === L.LWr.ANSWER_USERNAME_MENTIONS) && (0, R.sC)(s)) {
                    let r = s.getData("userId"),
                        a = S.default.getUser(r);
                    if (null != a) {
                        let r = N({
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
                let s = S.default.getUser(r);
                if (null == s) return;
                let a = N({
                    user: s,
                    guildId: n,
                    channelId: l
                });
                t.add(r), e.unshift(a)
            }), e
        }, [d, c, a, n, l]),
        f = s.useCallback(() => {
            i([]), u("")
        }, []),
        g = s.useCallback(() => {
            u("")
        }, []),
        A = s.useCallback(e => {
            if (0 === a.length) return null;
            let t = R.Ay[e];
            return a.map(e => {
                let r = S.default.getUser(e);
                if (null == r) return null;
                let n = p.Ay.getUserTag(r);
                return "" === n ? null : `${t.key} ${n}`
            }).filter(E.Vq).join(" ")
        }, [a]);
    return {
        options: _,
        query: a,
        setQuery: i,
        setQueryString: u,
        handleClearFilter: f,
        getApplyQueryString: A,
        handleFocusFilter: h,
        handleBlurFilter: g
    }
}

function F(e) {
    let t, {
        channel: r
    } = e;
    if (r.isDM()) {
        let e = r.getRecipientId(),
            n = S.default.getUser(e);
        null != n && (t = {
            type: "avatar",
            src: n.getAvatarURL(null, (0, c.FT9)(c._3J.SIZE_20))
        })
    } else t = r.isGroupDM() ? (0, n.jsx)(m.A, {
        channel: r,
        avatarSize: c._3J.SIZE_20,
        iconSize: "refresh_sm"
    }) : (0, d.gU)(r);
    return {
        value: r.id,
        label: (0, y.E3)(r),
        key: r.id,
        id: r.id,
        leading: t
    }
}

function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        [l, a] = s.useState(""),
        {
            filterAutocompleteResults: i,
            handleFocusFilter: o,
            autocompleteStoreState: u
        } = C({
            searchContext: e,
            filter: L.LWr.FILTER_IN,
            queryString: l
        }),
        c = s.useMemo(() => {
            let t = [],
                n = new Set;
            if (i.length > 0) i.forEach(e => {
                let r = e.channel,
                    s = F({
                        channel: r
                    });
                n.add(r.id), t.push(s)
            });
            else {
                let {
                    tokens: r
                } = u, s = r[r.length - 1];
                if (null != s && s.type === L.LWr.ANSWER_IN && (0, R.Yd)(s, e)) {
                    let e = s.getData("channelIds");
                    null != e && e.length > 0 && e.forEach(e => {
                        let r = _.A.getChannel(e);
                        if (null != r) {
                            let e = F({
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
                let s = F({
                    channel: r
                });
                n.add(e), t.unshift(s)
            }), t
        }, [u, i, r, e]),
        h = s.useCallback(() => {
            n([]), a("")
        }, []),
        d = s.useCallback(() => {
            a("")
        }, []),
        S = s.useCallback(e => {
            if (0 === r.length) return null;
            let t = R.Ay[e];
            return r.map(e => {
                let r = _.A.getChannel(e);
                if (null == r) return;
                let n = (0, y.E3)(r),
                    s = (0, y.TZ)(n);
                return `${t.key} ${s}`
            }).join(" ")
        }, [r]);
    return {
        options: c,
        query: r,
        setQuery: n,
        setQueryString: a,
        handleClearFilter: h,
        getApplyQueryString: S,
        handleFocusFilter: o,
        handleBlurFilter: d
    }
}

function O(e) {
    switch (e) {
        case x.intl.string(x.t.ZNR2fi):
            return c.qYV;
        case x.intl.string(x.t["20uQR3"]):
            return c.JD7;
        case x.intl.string(x.t.L4lxyE):
            return c.YRe;
        case x.intl.string(x.t["AV/v6i"]):
            return c.oSV;
        case x.intl.string(x.t.XM9XGP):
            return c.npA;
        case x.intl.string(x.t.TNLcpx):
            return c.xfq;
        case x.intl.string(x.t.F8Wf0e):
            return c.JMI;
        case x.intl.string(x.t.PJgX2h):
            return c.tEP;
        case x.intl.string(x.t.nrpA5E):
            return c.tuI;
        default:
            return null
    }
}

function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        {
            filterAutocompleteResults: l,
            handleFocusFilter: a
        } = C({
            searchContext: e,
            filter: L.LWr.FILTER_HAS,
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
        u = s.useCallback(e => {
            if (0 === r.length) return null;
            let t = R.Ay[e];
            return r.map(e => `${t.key} ${e}`).join(" ")
        }, [r]);
    return {
        options: i,
        query: r,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: u,
        handleFocusFilter: a
    }
}
let k = () => s.useMemo(() => {
    let e = R.Ay[L.LWr.FILTER_BEFORE],
        t = R.Ay[L.LWr.FILTER_AFTER],
        r = R.Ay[L.LWr.FILTER_ON];
    return {
        beforeFilter: e?.key ?? `${x.intl.string(x.t["qZ+7BA"])}:`,
        afterFilter: t?.key ?? `${x.intl.string(x.t.KSDx7M)}:`,
        duringFilter: r?.key ?? `${x.intl.string(x.t.h2NzSd)}:`
    }
}, []);

function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        [t, r] = s.useState(e),
        n = s.useCallback(() => (0, o.A)(), []),
        l = s.useCallback(e => e.date.isValid(), []),
        a = s.useMemo(() => t.filter(l), [t, l]),
        {
            beforeFilter: u,
            afterFilter: c,
            duringFilter: h
        } = k(),
        d = s.useCallback(() => ({
            query: u,
            date: i()(),
            id: n()
        }), [u, n]),
        _ = s.useMemo(() => [{
            key: "Before",
            label: x.intl.string(x.t["ptL/DP"]),
            value: u
        }, {
            key: "After",
            label: x.intl.string(x.t.waQeEV),
            value: c
        }, {
            key: "During",
            label: x.intl.string(x.t.LT5TnZ),
            value: h
        }], [u, c, h]),
        S = s.useCallback(e => {
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
        E = s.useCallback(e => {
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
        f = s.useCallback(() => {
            r(e => [...e, d()])
        }, [d]),
        p = s.useCallback(e => {
            r(t => {
                let r = [...t];
                return r.splice(e, 1), r
            })
        }, []),
        g = s.useCallback(() => {
            r([])
        }, []),
        A = s.useCallback(() => 0 === a.length ? null : a.map(e => {
            let {
                query: t,
                date: r
            } = e, n = r.format(L.ump);
            return `${t} ${n}`
        }).join(" "), [a]);
    return {
        options: _,
        dates: t,
        validDates: a,
        handleDateQueryChange: S,
        handleDateChange: E,
        handleAddDateFilter: f,
        handleRemoveDateFilter: p,
        handleClearDateFilter: g,
        getDateQueryString: A
    }
}

function H(e) {
    switch (e) {
        case x.intl.string(x.t.tPZo4p):
            return c.nys;
        case x.intl.string(x.t.JL7sRS):
            return c.CnV;
        case x.intl.string(x.t.WjkIKU):
            return c.XC7
    }
}

function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        [r, n] = s.useState(t),
        {
            filterAutocompleteResults: l,
            handleFocusFilter: a
        } = C({
            searchContext: e,
            filter: L.LWr.FILTER_AUTHOR_TYPE,
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
                    leading: H(r)
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
                    leading: H(n)
                }), t.add(n))
            }), e
        }, [l, r]),
        o = s.useCallback(() => {
            n([])
        }, []),
        u = s.useCallback(e => {
            if (0 === r.length) return null;
            let t = R.Ay[e];
            return r.map(e => `${t.key} ${e}`).join(" ")
        }, [r]);
    return {
        options: i,
        query: r,
        setQuery: n,
        handleClearFilter: o,
        getApplyQueryString: u,
        handleFocusFilter: a
    }
}

function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        [r, n] = s.useState(t),
        l = s.useMemo(() => {
            let t = R.Ay[L.LWr.FILTER_PINNED].getAutocompletions?.({
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

function D(e, t) {
    let {
        beforeFilter: r,
        afterFilter: n,
        duringFilter: l
    } = k(), a = (0, T.o)(t);
    return s.useMemo(() => {
        let t = {
                [L.LWr.FILTER_FROM]: [],
                [L.LWr.FILTER_MENTIONS]: [],
                [L.LWr.FILTER_HAS]: [],
                [L.LWr.FILTER_IN]: [],
                [L.LWr.FILTER_ON]: [],
                [L.LWr.FILTER_BEFORE]: [],
                [L.LWr.FILTER_AFTER]: [],
                [L.LWr.FILTER_PINNED]: null,
                [L.LWr.FILTER_AUTHOR_TYPE]: []
            },
            s = [],
            u = 0;
        e.forEach(e => {
            if (L.T2E.test(e.type)) switch (e.type) {
                case L.LWr.ANSWER_USERNAME_FROM:
                    if (a.has(L.LWr.FILTER_FROM)) {
                        let r = t[L.LWr.FILTER_FROM],
                            n = e.getData("userId");
                        r.push(n), u += 1
                    }
                    break;
                case L.LWr.ANSWER_USERNAME_MENTIONS:
                    if (a.has(L.LWr.FILTER_MENTIONS)) {
                        let r = t[L.LWr.FILTER_MENTIONS],
                            n = e.getData("userId");
                        r.push(n), u += 1
                    }
                    break;
                case L.LWr.ANSWER_HAS:
                    let c = t[L.LWr.FILTER_HAS],
                        h = e.getData("has");
                    c.push(h), u += 1;
                    break;
                case L.LWr.ANSWER_IN:
                    if (a.has(L.LWr.FILTER_IN)) {
                        let r = t[L.LWr.FILTER_IN],
                            n = e.getData("channelIds") ?? [];
                        r.push(...n), u += 1
                    }
                    break;
                case L.LWr.ANSWER_BEFORE:
                    let d = t[L.LWr.FILTER_BEFORE],
                        _ = e.getData("end"),
                        S = {
                            query: r,
                            date: i()(_),
                            id: (0, o.A)()
                        };
                    d.push(S), s.push(S), u += 1;
                    break;
                case L.LWr.ANSWER_ON:
                    let E = t[L.LWr.FILTER_ON],
                        f = e.getData("start"),
                        p = {
                            query: l,
                            date: i()(f),
                            id: (0, o.A)()
                        };
                    E.push(p), s.push(p), u += 1;
                    break;
                case L.LWr.ANSWER_AFTER:
                    let g = t[L.LWr.FILTER_AFTER],
                        A = e.getData("start"),
                        y = {
                            query: n,
                            date: i()(A),
                            id: (0, o.A)()
                        };
                    g.push(y), s.push(y), u += 1;
                    break;
                case L.LWr.ANSWER_PINNED:
                    let R = t[L.LWr.FILTER_PINNED],
                        T = e.getData("pinned").toString();
                    null === R ? R = T : "true" !== R && "true" === T && (R = T), t[L.LWr.FILTER_PINNED] = R, u += 1;
                    break;
                case L.LWr.ANSWER_AUTHOR_TYPE:
                    if (a.has(L.LWr.FILTER_AUTHOR_TYPE)) {
                        let r = t[L.LWr.FILTER_AUTHOR_TYPE],
                            n = e.getData("author_type");
                        r.push(n), u += 1
                    }
            }
        });
        let c = {
            [L.LWr.FILTER_FROM]: t[L.LWr.FILTER_FROM],
            [L.LWr.FILTER_MENTIONS]: t[L.LWr.FILTER_MENTIONS],
            [L.LWr.FILTER_HAS]: t[L.LWr.FILTER_HAS],
            [L.LWr.FILTER_IN]: t[L.LWr.FILTER_IN],
            dateFilters: s,
            [L.LWr.FILTER_AUTHOR_TYPE]: t[L.LWr.FILTER_AUTHOR_TYPE],
            [L.LWr.FILTER_PINNED]: t[L.LWr.FILTER_PINNED]
        };
        return {
            allPrefilledSearchFilters: t,
            totalFilters: u,
            prefilledSearchFilters: c,
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

function $(e) {
    let {
        nonFilterQueryString: t,
        filterQueryString: r
    } = e, n = +(r.length > 0), l = +(t.length > 0), a = I.E2 - t.length - l - n, i = s.useCallback(e => {
        let {
            newFilterString: t
        } = e;
        return r.length + t.length > a
    }, [r.length, a]), o = s.useMemo(() => r.length + 18 > a, [r.length, a]), u = s.useCallback(() => {
        h.A.show({
            title: x.intl.string(x.t.nOqJcX),
            body: x.intl.string(x.t.zzAcsv),
            confirmText: x.intl.string(x.t["qcYY+/"])
        })
    }, []);
    return {
        validateFilter: s.useCallback((e, t) => !i({
            newFilterString: function(e, t) {
                let r, n = R.Ay[e];
                switch (e) {
                    case L.LWr.FILTER_FROM:
                    case L.LWr.FILTER_MENTIONS:
                        let s = S.default.getUser(t);
                        r = null == s ? t : `${s.username}`;
                        break;
                    case L.LWr.FILTER_IN:
                        let l = _.A.getChannel(t);
                        if (null == l) r = t;
                        else {
                            let e = (0, y.E3)(l);
                            r = (0, y.TZ)(e)
                        }
                        break;
                    case L.LWr.FILTER_HAS:
                    case L.LWr.FILTER_PINNED:
                    case L.LWr.FILTER_AUTHOR_TYPE:
                    default:
                        r = t
                }
                return n.key + " " + r
            }(e, t)
        }) || (u(), !1), [i, u]),
        validateDateFilter: s.useCallback(() => !o || (u(), !1), [o, u])
    }
}