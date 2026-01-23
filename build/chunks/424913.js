/** Chunk was on web.js **/
/** chunk id: 424913, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(321073), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(309010),
    o = n(203982),
    l = n(822382),
    c = n(771650),
    u = n(753806),
    d = n(272444),
    f = n(806595),
    p = n(949759),
    _ = n(65600),
    h = n(145331),
    m = n(835121),
    g = n(443486),
    E = n(768570),
    y = n(652215),
    b = n(985018),
    O = n(935606);

function v(e) {
    let {
        resultsState: t,
        searchContext: n,
        selectedChannel: v,
        setSearchQuery: A
    } = e, {
        autocompletes: I,
        mode: S
    } = t, T = (0, m.A)({
        autocompletes: I,
        mode: S
    }), C = (0, g.A)({
        setSearchQuery: A,
        searchContext: n,
        mode: S
    }), N = e => {
        let {
            searchEverywhere: t
        } = e;
        o._.dispatch(y.jej.PERFORM_SEARCH, {
            searchEverywhere: t,
            searchQuerySource: E.Q_.SEARCH_POPOUT
        })
    }, w = e => {
        var t;
        let {
            autocompleteCount: r,
            selectedIndex: i,
            searchAutocompleteSelectAction: a,
            selectedAutocomplete: o,
            selectedAutocompleteGroup: d
        } = e, f = S.type, p = S.filter, {
            token: m,
            group: g
        } = o, E = null != g && (0, c.If)(g) ? g : null, b = null != (t = null != m ? m : p) ? t : E, O = o.channel, v = b === y.LWr.FILTER_IN && null != O && O.id === s.A.getChannelId(), A = (0, l.bS)(n);
        (0, h.kc)({
            searchContext: n,
            searchQuery: _.A.getSearchResultsQuery(A),
            searchQueryString: u.A.getSearchInputText(n),
            searchTokenType: b,
            searchAutocompleteGroup: d,
            searchAutocompleteMode: S,
            searchAutocompleteResultIndex: i,
            searchAutocompleteTotalResults: r,
            isSearchFilterPrefix: f === y.o$q.EMPTY,
            isSearchFilterAnswer: f === y.o$q.FILTER,
            isSearchFilterComplete: f === y.o$q.FILTER_ALL,
            isInFilterForSelectedChannel: v,
            searchAutocompleteSelectAction: a
        })
    }, R = i.useCallback(e => {
        let {
            hasOtherSearchFiltersVisible: t
        } = e, i = t ? b.intl.string(b.t.diOL4i) : b.intl.string(b.t["M1tf+7"]);
        return (0, p.wE)(f.$.ROW, {
            icon: (0, r.jsx)(a.RgP, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: O.Fx
            }),
            label: (0, r.jsx)(d.bg, {
                label: i
            }),
            sublabel: t ? (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: b.intl.string(b.t["1axf1T"])
            }) : void 0,
            onSelect: () => u.A.openSearchFiltersModal(n)
        })
    }, [n]), {
        items: P
    } = (0, ({
        [y.o$q.EMPTY]: () => {
            let e = [];
            if (null != v && (0, l.Wg)(n) && n.type === y.I4_.DMS) {
                let t = (0, d.lF)(v),
                    i = e => {
                        var t;
                        let {
                            selectedChannel: r,
                            searchAutocompleteSelectAction: i
                        } = e;
                        (0, h.rE)({
                            searchContext: n,
                            searchAutocompleteSelectAction: i
                        });
                        let a = y.LWr.FILTER_IN,
                            s = c.Ay[a],
                            o = (0, l.Rt)(r);
                        A({
                            query: "".concat(null != (t = null == s ? void 0 : s.key) ? t : a.toString(), " ").concat(o),
                            performSearch: !0,
                            replace: !1
                        })
                    },
                    s = (0, p.wE)(f.$.ROW, {
                        icon: (0, r.jsx)(a.$p$, {
                            size: "sm",
                            color: "currentColor",
                            className: O.Fx
                        }),
                        label: (0, r.jsx)(d.bg, {
                            label: b.intl.format(b.t["VGEH/0"], {
                                channelName: t
                            }),
                            className: O.YL
                        }),
                        onSelect: e => {
                            let {
                                searchAutocompleteSelectAction: t
                            } = e;
                            return i({
                                selectedChannel: v,
                                searchAutocompleteSelectAction: t
                            })
                        }
                    });
                e.push(s)
            }
            let t = [...C, R({
                hasOtherSearchFiltersVisible: !0
            })];
            e.push((0, p.wE)(f.$.GROUP, {
                rows: t,
                title: b.intl.string(b.t.UdhTtk)
            }));
            let i = e.length + C.length,
                {
                    autocompleteCount: s,
                    autocompleteGroups: o
                } = T({
                    filterFn: e => e.group === y.x2k.HISTORY && e.results.length > 0,
                    getAutocompleteRowItem: e => {
                        let {
                            result: t,
                            modeType: r,
                            group: o
                        } = e, l = (0, p.pu)({
                            modeType: r,
                            result: t,
                            group: o
                        }), c = (0, d.ge)({
                            result: t,
                            group: o
                        }), {
                            label: u,
                            ariaLabel: _
                        } = (0, d.AX)({
                            value: t.text,
                            avatarSize: a._3J.SIZE_16,
                            iconSize: "xs"
                        }), m = e => {
                            let {
                                selectedIndex: t
                            } = e;
                            (0, h.oR)({
                                searchContext: n,
                                searchHistoryIndex: t - i,
                                searchHistoryTotalResults: s
                            }), A({
                                query: l,
                                performSearch: !0,
                                replace: !1
                            })
                        };
                        return (0, p.wE)(f.$.ROW, {
                            icon: c,
                            label: u,
                            ariaLabel: b.intl.formatToPlainString(b.t.WoiGrV, {
                                suggestion: _
                            }),
                            resultText: l,
                            onSelect: m
                        })
                    },
                    getAutocompleteGroupItem: e => {
                        let {
                            group: t,
                            rows: i
                        } = e, a = (0, p.JU)(t), s = t === y.x2k.HISTORY ? (0, r.jsx)(d.k8, {
                            searchContext: n
                        }) : null;
                        return (0, p.wE)(f.$.GROUP, {
                            rows: i,
                            title: a,
                            trailingIcon: s
                        })
                    }
                });
            return s > 0 && e.push(...o), {
                items: e
            }
        },
        [y.o$q.FILTER_ALL]: () => {
            let e = [];
            if ("" !== t.query.trim()) {
                let {
                    label: i
                } = (0, d.AX)({
                    value: t.query,
                    avatarSize: a._3J.SIZE_16,
                    iconSize: "xs"
                }), s = (0, p.wE)(f.$.ROW, {
                    icon: (0, r.jsx)(a.$p$, {
                        size: "sm",
                        color: "currentColor",
                        className: O.Fx
                    }),
                    label: n.type === y.I4_.FAVORITES && (0, l.Eq)() ? (0, r.jsx)(d.bg, {
                        label: b.intl.string(b.t["6RVtLA"])
                    }) : (0, r.jsx)(d.bg, {
                        label: b.intl.format(b.t.rCnaoo, {
                            value: i
                        }),
                        className: O.YL
                    }),
                    ariaLabel: b.intl.formatToPlainString(b.t.rCnaoo, {
                        value: t.query
                    }),
                    onSelect: () => N({
                        searchEverywhere: !1
                    })
                });
                if (e.push(s), n.type === y.I4_.FAVORITES && (0, l.Eq)()) {
                    let t = (0, p.wE)(f.$.ROW, {
                        icon: (0, r.jsx)(a.$p$, {
                            size: "sm",
                            color: "currentColor",
                            className: O.Fx
                        }),
                        label: (0, r.jsx)(d.bg, {
                            label: b.intl.string(b.t.FtSUxc)
                        }),
                        onSelect: () => N({
                            searchEverywhere: !0
                        })
                    });
                    e.push(t)
                }
            }
            let {
                autocompleteCount: i,
                autocompleteGroups: s
            } = T({
                filterFn: e => e.group !== y.x2k.DATES && e.group !== y.x2k.SEARCH_OPTIONS && e.group !== y.LWr.FILTER_HAS && e.results.length > 0,
                getAutocompleteRowItem: e => {
                    var t;
                    let {
                        result: n,
                        modeType: a,
                        group: s
                    } = e, o = (0, p.pu)({
                        modeType: a,
                        result: n,
                        group: s
                    }), l = (0, d.ge)({
                        result: n,
                        group: s
                    }), {
                        label: c,
                        ariaLabel: u
                    } = (0, d.c$)(n), _ = s === y.LWr.FILTER_FROM || s === y.LWr.FILTER_MENTIONS ? (0, r.jsx)(d.bj, {
                        searchTokenType: s,
                        answer: null == (t = n.user) ? void 0 : t.username
                    }) : void 0, h = e => {
                        let {
                            selectedIndex: t,
                            searchAutocompleteSelectAction: r
                        } = e;
                        w({
                            selectedIndex: t,
                            searchAutocompleteSelectAction: r,
                            selectedAutocomplete: n,
                            selectedAutocompleteGroup: s,
                            autocompleteCount: i
                        }), A({
                            query: o,
                            performSearch: !1,
                            replace: !1
                        })
                    };
                    return (0, p.wE)(f.$.ROW, {
                        icon: l,
                        label: c,
                        sublabel: _,
                        ariaLabel: u,
                        resultText: o,
                        onSelect: h
                    })
                },
                getAutocompleteGroupItem: e => {
                    let {
                        group: t,
                        rows: n
                    } = e, r = (0, p.JU)(t);
                    return (0, p.wE)(f.$.GROUP, {
                        rows: n,
                        title: r
                    })
                }
            });
            if (0 === i) {
                let t = [...C, R({
                    hasOtherSearchFiltersVisible: !0
                })];
                e.push((0, p.wE)(f.$.GROUP, {
                    rows: t,
                    title: b.intl.string(b.t.UdhTtk)
                }))
            } else {
                let t = R({
                    hasOtherSearchFiltersVisible: !1
                });
                e.push(t)
            }
            return i > 0 && e.push(...s), {
                items: e
            }
        },
        [y.o$q.FILTER]: () => {
            let {
                autocompleteCount: e,
                autocompleteGroups: t
            } = T({
                filterFn: e => e.results.length > 0,
                getAutocompleteRowItem: t => {
                    let {
                        result: n,
                        modeType: r,
                        group: i
                    } = t, a = (0, p.pu)({
                        modeType: r,
                        result: n,
                        group: i
                    }), s = (0, d._h)({
                        result: n,
                        group: i
                    }), {
                        label: o,
                        ariaLabel: l
                    } = (0, d.JK)(n), c = t => {
                        let {
                            selectedIndex: r,
                            searchAutocompleteSelectAction: s
                        } = t;
                        w({
                            selectedIndex: r,
                            searchAutocompleteSelectAction: s,
                            selectedAutocomplete: n,
                            selectedAutocompleteGroup: i,
                            autocompleteCount: e
                        }), A({
                            query: a,
                            performSearch: !0,
                            replace: !1
                        })
                    };
                    return (0, p.wE)(f.$.ROW, {
                        icon: s,
                        label: o,
                        ariaLabel: l,
                        resultText: a,
                        onSelect: c
                    })
                },
                getAutocompleteGroupItem: e => {
                    let {
                        group: t,
                        rows: n
                    } = e, r = (0, p.JU)(t);
                    return (0, p.wE)(f.$.GROUP, {
                        rows: n,
                        title: r
                    })
                }
            });
            return {
                items: [...t]
            }
        }
    })[S.type])(), D = i.useMemo(() => {
        let e = [];
        return P.forEach(t => {
            switch (t.type) {
                case f.$.ROW:
                    e.push(t);
                    break;
                case f.$.GROUP:
                    t.data.rows.forEach(t => e.push(t))
            }
        }), e
    }, [P]);
    return {
        items: P,
        itemsData: D
    }
}