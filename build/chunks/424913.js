/** chunk id: 424913, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => m
}), r(321073), r(896048), r(733351);
var n = r(627968),
    l = r(64700),
    s = r(397927),
    a = r(309010),
    i = r(203982),
    o = r(822382),
    c = r(771650),
    u = r(753806),
    d = r(272444),
    h = r(806595),
    p = r(949759),
    f = r(65600),
    g = r(145331),
    _ = r(835121),
    E = r(443486),
    A = r(768570),
    y = r(652215),
    S = r(985018),
    b = r(935606);

function m(e) {
    let {
        resultsState: t,
        searchContext: r,
        selectedChannel: m,
        setSearchQuery: O
    } = e, {
        autocompletes: I,
        mode: R
    } = t, v = (0, _.A)({
        autocompletes: I,
        mode: R
    }), T = (0, E.A)({
        setSearchQuery: O,
        searchContext: r,
        mode: R
    }), x = e => {
        let {
            searchEverywhere: t
        } = e;
        i._.dispatch(y.jej.PERFORM_SEARCH, {
            searchEverywhere: t,
            searchQuerySource: A.Q_.SEARCH_POPOUT
        })
    }, j = e => {
        var t;
        let {
            autocompleteCount: n,
            selectedIndex: l,
            searchAutocompleteSelectAction: s,
            selectedAutocomplete: i,
            selectedAutocompleteGroup: d
        } = e, h = R.type, p = R.filter, {
            token: _,
            group: E
        } = i, A = null != E && (0, c.If)(E) ? E : null, S = null != (t = null != _ ? _ : p) ? t : A, b = i.channel, m = S === y.LWr.FILTER_IN && null != b && b.id === a.A.getChannelId(), O = (0, o.bS)(r);
        (0, g.kc)({
            searchContext: r,
            searchQuery: f.A.getSearchResultsQuery(O),
            searchQueryString: u.A.getSearchInputText(r),
            searchTokenType: S,
            searchAutocompleteGroup: d,
            searchAutocompleteMode: R,
            searchAutocompleteResultIndex: l,
            searchAutocompleteTotalResults: n,
            isSearchFilterPrefix: h === y.o$q.EMPTY,
            isSearchFilterAnswer: h === y.o$q.FILTER,
            isSearchFilterComplete: h === y.o$q.FILTER_ALL,
            isInFilterForSelectedChannel: m,
            searchAutocompleteSelectAction: s
        })
    }, L = l.useCallback(e => {
        let {
            hasOtherSearchFiltersVisible: t
        } = e, l = t ? S.intl.string(S.t.diOL4i) : S.intl.string(S.t["M1tf+7"]);
        return (0, p.wE)(h.$.ROW, {
            icon: (0, n.jsx)(s.RgP, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: b.Fx
            }),
            label: (0, n.jsx)(d.bg, {
                label: l
            }),
            sublabel: t ? (0, n.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: S.intl.string(S.t["1axf1T"])
            }) : void 0,
            onSelect: () => u.A.openSearchFiltersModal(r)
        })
    }, [r]), {
        items: N
    } = (0, ({
        [y.o$q.EMPTY]: () => {
            let e = [];
            if (null != m && (0, o.Wg)(r) && r.type === y.I4_.DMS) {
                let t = (0, d.lF)(m),
                    l = (0, p.wE)(h.$.ROW, {
                        icon: (0, n.jsx)(s.$p$, {
                            size: "sm",
                            color: "currentColor",
                            className: b.Fx
                        }),
                        label: (0, n.jsx)(d.bg, {
                            label: S.intl.format(S.t["VGEH/0"], {
                                channelName: t
                            }),
                            className: b.YL
                        }),
                        onSelect: e => {
                            let {
                                searchAutocompleteSelectAction: t
                            } = e;
                            return (e => {
                                var t;
                                let {
                                    selectedChannel: n,
                                    searchAutocompleteSelectAction: l
                                } = e;
                                (0, g.rE)({
                                    searchContext: r,
                                    searchAutocompleteSelectAction: l
                                });
                                let s = y.LWr.FILTER_IN,
                                    a = c.Ay[s],
                                    i = (0, o.Rt)(n);
                                O({
                                    query: "".concat(null != (t = null == a ? void 0 : a.key) ? t : s.toString(), " ").concat(i),
                                    performSearch: !0,
                                    replace: !1
                                })
                            })({
                                selectedChannel: m,
                                searchAutocompleteSelectAction: t
                            })
                        }
                    });
                e.push(l)
            }
            let t = [...T, L({
                hasOtherSearchFiltersVisible: !0
            })];
            e.push((0, p.wE)(h.$.GROUP, {
                rows: t,
                title: S.intl.string(S.t.UdhTtk)
            }));
            let l = e.length + T.length,
                {
                    autocompleteCount: a,
                    autocompleteGroups: i
                } = v({
                    filterFn: e => e.group === y.x2k.HISTORY && e.results.length > 0,
                    getAutocompleteRowItem: e => {
                        let {
                            result: t,
                            modeType: n,
                            group: i
                        } = e, o = (0, p.pu)({
                            modeType: n,
                            result: t,
                            group: i
                        }), c = (0, d.ge)({
                            result: t,
                            group: i
                        }), {
                            label: u,
                            ariaLabel: f
                        } = (0, d.AX)({
                            value: t.text,
                            avatarSize: s._3J.SIZE_16,
                            iconSize: "xs"
                        });
                        return (0, p.wE)(h.$.ROW, {
                            icon: c,
                            label: u,
                            ariaLabel: S.intl.formatToPlainString(S.t.WoiGrV, {
                                suggestion: f
                            }),
                            resultText: o,
                            onSelect: e => {
                                let {
                                    selectedIndex: t
                                } = e;
                                (0, g.oR)({
                                    searchContext: r,
                                    searchHistoryIndex: t - l,
                                    searchHistoryTotalResults: a
                                }), O({
                                    query: o,
                                    performSearch: !0,
                                    replace: !1
                                })
                            }
                        })
                    },
                    getAutocompleteGroupItem: e => {
                        let {
                            group: t,
                            rows: l
                        } = e, s = (0, p.JU)(t), a = t === y.x2k.HISTORY ? (0, n.jsx)(d.k8, {
                            searchContext: r
                        }) : null;
                        return (0, p.wE)(h.$.GROUP, {
                            rows: l,
                            title: s,
                            trailingIcon: a
                        })
                    }
                });
            return a > 0 && e.push(...i), {
                items: e
            }
        },
        [y.o$q.FILTER_ALL]: () => {
            let e = [];
            if ("" !== t.query.trim()) {
                let {
                    label: l
                } = (0, d.AX)({
                    value: t.query,
                    avatarSize: s._3J.SIZE_16,
                    iconSize: "xs"
                }), a = (0, p.wE)(h.$.ROW, {
                    icon: (0, n.jsx)(s.$p$, {
                        size: "sm",
                        color: "currentColor",
                        className: b.Fx
                    }),
                    label: r.type === y.I4_.FAVORITES && (0, o.Eq)() ? (0, n.jsx)(d.bg, {
                        label: S.intl.string(S.t["6RVtLA"])
                    }) : (0, n.jsx)(d.bg, {
                        label: S.intl.format(S.t.rCnaoo, {
                            value: l
                        }),
                        className: b.YL
                    }),
                    ariaLabel: S.intl.formatToPlainString(S.t.rCnaoo, {
                        value: t.query
                    }),
                    onSelect: () => x({
                        searchEverywhere: !1
                    })
                });
                if (e.push(a), r.type === y.I4_.FAVORITES && (0, o.Eq)()) {
                    let t = (0, p.wE)(h.$.ROW, {
                        icon: (0, n.jsx)(s.$p$, {
                            size: "sm",
                            color: "currentColor",
                            className: b.Fx
                        }),
                        label: (0, n.jsx)(d.bg, {
                            label: S.intl.string(S.t.FtSUxc)
                        }),
                        onSelect: () => x({
                            searchEverywhere: !0
                        })
                    });
                    e.push(t)
                }
            }
            let {
                autocompleteCount: l,
                autocompleteGroups: a
            } = v({
                filterFn: e => e.group !== y.x2k.DATES && e.group !== y.x2k.SEARCH_OPTIONS && e.group !== y.LWr.FILTER_HAS && e.results.length > 0,
                getAutocompleteRowItem: e => {
                    var t;
                    let {
                        result: r,
                        modeType: s,
                        group: a
                    } = e, i = (0, p.pu)({
                        modeType: s,
                        result: r,
                        group: a
                    }), o = (0, d.ge)({
                        result: r,
                        group: a
                    }), {
                        label: c,
                        ariaLabel: u
                    } = (0, d.c$)(r), f = a === y.LWr.FILTER_FROM || a === y.LWr.FILTER_MENTIONS ? (0, n.jsx)(d.bj, {
                        searchTokenType: a,
                        answer: null == (t = r.user) ? void 0 : t.username
                    }) : void 0;
                    return (0, p.wE)(h.$.ROW, {
                        icon: o,
                        label: c,
                        sublabel: f,
                        ariaLabel: u,
                        resultText: i,
                        onSelect: e => {
                            let {
                                selectedIndex: t,
                                searchAutocompleteSelectAction: n
                            } = e;
                            j({
                                selectedIndex: t,
                                searchAutocompleteSelectAction: n,
                                selectedAutocomplete: r,
                                selectedAutocompleteGroup: a,
                                autocompleteCount: l
                            }), O({
                                query: i,
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
                    } = e, n = (0, p.JU)(t);
                    return (0, p.wE)(h.$.GROUP, {
                        rows: r,
                        title: n
                    })
                }
            });
            if (0 === l) {
                let t = [...T, L({
                    hasOtherSearchFiltersVisible: !0
                })];
                e.push((0, p.wE)(h.$.GROUP, {
                    rows: t,
                    title: S.intl.string(S.t.UdhTtk)
                }))
            } else {
                let t = L({
                    hasOtherSearchFiltersVisible: !1
                });
                e.push(t)
            }
            return l > 0 && e.push(...a), {
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
                        modeType: n,
                        group: l
                    } = t, s = (0, p.pu)({
                        modeType: n,
                        result: r,
                        group: l
                    }), a = (0, d._h)({
                        result: r,
                        group: l
                    }), {
                        label: i,
                        ariaLabel: o
                    } = (0, d.JK)(r);
                    return (0, p.wE)(h.$.ROW, {
                        icon: a,
                        label: i,
                        ariaLabel: o,
                        resultText: s,
                        onSelect: t => {
                            let {
                                selectedIndex: n,
                                searchAutocompleteSelectAction: a
                            } = t;
                            j({
                                selectedIndex: n,
                                searchAutocompleteSelectAction: a,
                                selectedAutocomplete: r,
                                selectedAutocompleteGroup: l,
                                autocompleteCount: e
                            }), O({
                                query: s,
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
                    } = e, n = (0, p.JU)(t);
                    return (0, p.wE)(h.$.GROUP, {
                        rows: r,
                        title: n
                    })
                }
            });
            return {
                items: [...t]
            }
        }
    })[R.type])(), C = l.useMemo(() => {
        let e = [];
        return N.forEach(t => {
            switch (t.type) {
                case h.$.ROW:
                    e.push(t);
                    break;
                case h.$.GROUP:
                    t.data.rows.forEach(t => e.push(t))
            }
        }), e
    }, [N]);
    return {
        items: N,
        itemsData: C
    }
}