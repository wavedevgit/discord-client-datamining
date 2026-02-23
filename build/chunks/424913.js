/** chunk id: 424913, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => L
}), r(321073);
var s = r(627968),
    n = r(64700),
    l = r(311907),
    a = r(397927),
    i = r(309010),
    o = r(351906),
    u = r(203982),
    c = r(822382),
    d = r(771650),
    h = r(753806),
    _ = r(272444),
    E = r(806595),
    S = r(949759),
    f = r(842716),
    g = r(65600),
    A = r(145331),
    p = r(835121),
    R = r(443486),
    m = r(768570),
    y = r(652215),
    T = r(985018),
    I = r(935606);
let x = [];

function L(e) {
    let {
        resultsState: t,
        searchContext: r,
        selectedChannel: L,
        setSearchQuery: b
    } = e, {
        autocompletes: N,
        mode: C
    } = t, v = (0, p.A)({
        autocompletes: N,
        mode: C
    }), F = (0, R.A)({
        setSearchQuery: b,
        searchContext: r,
        mode: C
    }), O = (0, l.yK)([o.A, i.A, f.A], () => {
        if (o.A.hidePersonalInformation) return x;
        let e = (0, c.Jl)(r, i.A);
        if (null == e) return x;
        let t = f.A.getHistory(e);
        if (null == t) return x;
        let s = new Set,
            n = [];
        return t.forEach(e => {
            let t = r.type === y.I4_.CHANNEL ? (0, c.EH)(e) : e;
            "" === t || s.has(t) || (s.add(t), n.push(t))
        }), n
    }), j = e => {
        let {
            searchEverywhere: t
        } = e;
        u._.dispatch(y.jej.PERFORM_SEARCH, {
            searchEverywhere: t,
            searchQuerySource: m.Q_.SEARCH_POPOUT
        })
    }, k = e => {
        let {
            autocompleteCount: t,
            selectedIndex: s,
            searchAutocompleteSelectAction: n,
            selectedAutocomplete: l,
            selectedAutocompleteGroup: a
        } = e, o = C.type, u = C.filter, {
            token: _,
            group: E
        } = l, S = null != E && (0, d.If)(E) ? E : null, f = _ ?? u ?? S, p = l.channel, R = f === y.LWr.FILTER_IN && null != p && p.id === i.A.getChannelId(), m = (0, c.bS)(r);
        (0, A.kc)({
            searchContext: r,
            searchQuery: g.A.getSearchResultsQuery(m),
            searchQueryString: h.A.getSearchInputText(r),
            searchTokenType: f,
            searchAutocompleteGroup: a,
            searchAutocompleteMode: C,
            searchAutocompleteResultIndex: s,
            searchAutocompleteTotalResults: t,
            isSearchFilterPrefix: o === y.o$q.EMPTY,
            isSearchFilterAnswer: o === y.o$q.FILTER,
            isSearchFilterComplete: o === y.o$q.FILTER_ALL,
            isInFilterForSelectedChannel: R,
            searchAutocompleteSelectAction: n
        })
    }, W = n.useCallback(e => {
        let {
            hasOtherSearchFiltersVisible: t
        } = e, n = t ? T.intl.string(T.t.diOL4i) : T.intl.string(T.t["M1tf+7"]);
        return (0, S.wE)(E.$.ROW, {
            icon: (0, s.jsx)(a.RgP, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: I.Fx
            }),
            label: (0, s.jsx)(_.bg, {
                label: n
            }),
            sublabel: t ? (0, s.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: T.intl.string(T.t["1axf1T"])
            }) : void 0,
            onSelect: () => h.A.openSearchFiltersModal(r)
        })
    }, [r]), {
        items: M
    } = (0, ({
        [y.o$q.EMPTY]: () => {
            let e = [];
            if (null != L && (0, c.Wg)(r) && r.type === y.I4_.DMS) {
                let t = (0, _.lF)(L),
                    n = (0, S.wE)(E.$.ROW, {
                        icon: (0, s.jsx)(a.$p$, {
                            size: "sm",
                            color: "currentColor",
                            className: I.Fx
                        }),
                        label: (0, s.jsx)(_.bg, {
                            label: T.intl.format(T.t["VGEH/0"], {
                                channelName: t
                            }),
                            className: I.YL
                        }),
                        onSelect: e => {
                            let {
                                searchAutocompleteSelectAction: t
                            } = e;
                            return (e => {
                                let {
                                    selectedChannel: t,
                                    searchAutocompleteSelectAction: s
                                } = e;
                                (0, A.rE)({
                                    searchContext: r,
                                    searchAutocompleteSelectAction: s
                                });
                                let n = y.LWr.FILTER_IN,
                                    l = d.Ay[n],
                                    a = (0, c.Rt)(t);
                                b({
                                    query: `${l?.key??n.toString()} ${a}`,
                                    performSearch: !0,
                                    replace: !1
                                })
                            })({
                                selectedChannel: L,
                                searchAutocompleteSelectAction: t
                            })
                        }
                    });
                e.push(n)
            }
            let t = [...F, W({
                hasOtherSearchFiltersVisible: !0
            })];
            if (e.push((0, S.wE)(E.$.GROUP, {
                    rows: t,
                    title: T.intl.string(T.t.UdhTtk)
                })), O.length > 0) {
                let t = O.map((e, t) => {
                        let {
                            label: n,
                            ariaLabel: l
                        } = (0, _.AX)({
                            value: e,
                            avatarSize: a._3J.SIZE_16,
                            iconSize: "xs"
                        });
                        return (0, S.wE)(E.$.ROW, {
                            icon: (0, s.jsx)(a.$p$, {
                                size: "sm",
                                color: "currentColor",
                                className: I.Fx
                            }),
                            label: n,
                            ariaLabel: T.intl.formatToPlainString(T.t.WoiGrV, {
                                suggestion: l
                            }),
                            resultText: e,
                            onSelect: () => {
                                (0, A.oR)({
                                    searchContext: r,
                                    searchHistoryIndex: t,
                                    searchHistoryTotalResults: O.length
                                }), b({
                                    query: e,
                                    performSearch: !0,
                                    replace: !1
                                })
                            }
                        })
                    }),
                    n = (0, S.wE)(E.$.GROUP, {
                        rows: t,
                        trailingIcon: (0, s.jsx)(_.k8, {
                            searchContext: r
                        }),
                        title: (0, S.JU)(y.x2k.HISTORY)
                    });
                e.push(n)
            }
            return {
                items: e
            }
        },
        [y.o$q.FILTER_ALL]: () => {
            let e = [];
            if ("" !== t.query.trim()) {
                let {
                    label: n
                } = (0, _.AX)({
                    value: t.query,
                    avatarSize: a._3J.SIZE_16,
                    iconSize: "xs"
                }), l = (0, S.wE)(E.$.ROW, {
                    icon: (0, s.jsx)(a.$p$, {
                        size: "sm",
                        color: "currentColor",
                        className: I.Fx
                    }),
                    label: r.type === y.I4_.FAVORITES && (0, c.Eq)() ? (0, s.jsx)(_.bg, {
                        label: T.intl.string(T.t["6RVtLA"])
                    }) : (0, s.jsx)(_.bg, {
                        label: T.intl.format(T.t.rCnaoo, {
                            value: n
                        }),
                        className: I.YL
                    }),
                    ariaLabel: T.intl.formatToPlainString(T.t.rCnaoo, {
                        value: t.query
                    }),
                    onSelect: () => j({
                        searchEverywhere: !1
                    })
                });
                if (e.push(l), r.type === y.I4_.FAVORITES && (0, c.Eq)()) {
                    let t = (0, S.wE)(E.$.ROW, {
                        icon: (0, s.jsx)(a.$p$, {
                            size: "sm",
                            color: "currentColor",
                            className: I.Fx
                        }),
                        label: (0, s.jsx)(_.bg, {
                            label: T.intl.string(T.t.FtSUxc)
                        }),
                        onSelect: () => j({
                            searchEverywhere: !0
                        })
                    });
                    e.push(t)
                }
            }
            let {
                autocompleteCount: n,
                autocompleteGroups: l
            } = v({
                filterFn: e => e.group !== y.x2k.DATES && e.group !== y.x2k.SEARCH_OPTIONS && e.group !== y.LWr.FILTER_HAS && e.results.length > 0,
                getAutocompleteRowItem: e => {
                    let {
                        result: t,
                        modeType: r,
                        group: l
                    } = e, a = (0, S.pu)({
                        modeType: r,
                        result: t,
                        group: l
                    }), i = (0, _.ge)({
                        result: t,
                        group: l
                    }), {
                        label: o,
                        ariaLabel: u
                    } = (0, _.c$)(t), c = l === y.LWr.FILTER_FROM || l === y.LWr.FILTER_MENTIONS ? (0, s.jsx)(_.bj, {
                        searchTokenType: l,
                        answer: t.user?.username
                    }) : void 0;
                    return (0, S.wE)(E.$.ROW, {
                        icon: i,
                        label: o,
                        sublabel: c,
                        ariaLabel: u,
                        resultText: a,
                        onSelect: e => {
                            let {
                                selectedIndex: r,
                                searchAutocompleteSelectAction: s
                            } = e;
                            k({
                                selectedIndex: r,
                                searchAutocompleteSelectAction: s,
                                selectedAutocomplete: t,
                                selectedAutocompleteGroup: l,
                                autocompleteCount: n
                            }), b({
                                query: a,
                                performSearch: !1,
                                replace: !1
                            })
                        }
                    })
                },
                getAutocompleteGroupItem: e => {
                    let {
                        group: t,
                        rows: r
                    } = e, s = (0, S.JU)(t);
                    return (0, S.wE)(E.$.GROUP, {
                        rows: r,
                        title: s
                    })
                }
            });
            if (0 === n) {
                let t = [...F, W({
                    hasOtherSearchFiltersVisible: !0
                })];
                e.push((0, S.wE)(E.$.GROUP, {
                    rows: t,
                    title: T.intl.string(T.t.UdhTtk)
                }))
            } else {
                let t = W({
                    hasOtherSearchFiltersVisible: !1
                });
                e.push(t)
            }
            return n > 0 && e.push(...l), {
                items: e
            }
        },
        [y.o$q.FILTER]: () => {
            let {
                autocompleteCount: e,
                autocompleteGroups: t
            } = v({
                filterFn: e => e.results.length > 0,
                getAutocompleteRowItem: t => {
                    let {
                        result: r,
                        modeType: s,
                        group: n
                    } = t, l = (0, S.pu)({
                        modeType: s,
                        result: r,
                        group: n
                    }), a = (0, _._h)({
                        result: r,
                        group: n
                    }), {
                        label: i,
                        ariaLabel: o
                    } = (0, _.JK)(r);
                    return (0, S.wE)(E.$.ROW, {
                        icon: a,
                        label: i,
                        ariaLabel: o,
                        resultText: l,
                        onSelect: t => {
                            let {
                                selectedIndex: s,
                                searchAutocompleteSelectAction: a
                            } = t;
                            k({
                                selectedIndex: s,
                                searchAutocompleteSelectAction: a,
                                selectedAutocomplete: r,
                                selectedAutocompleteGroup: n,
                                autocompleteCount: e
                            }), b({
                                query: l,
                                performSearch: !0,
                                replace: !1
                            })
                        }
                    })
                },
                getAutocompleteGroupItem: e => {
                    let {
                        group: t,
                        rows: r
                    } = e, s = (0, S.JU)(t);
                    return (0, S.wE)(E.$.GROUP, {
                        rows: r,
                        title: s
                    })
                }
            });
            return {
                items: [...t]
            }
        }
    })[C.type])(), w = n.useMemo(() => {
        let e = [];
        return M.forEach(t => {
            switch (t.type) {
                case E.$.ROW:
                    e.push(t);
                    break;
                case E.$.GROUP:
                    t.data.rows.forEach(t => e.push(t))
            }
        }), e
    }, [M]);
    return {
        items: M,
        itemsData: w
    }
}