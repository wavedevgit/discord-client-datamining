/** chunk id: 976966, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(554146),
    o = n(342494),
    c = n(990078),
    u = n(397927),
    d = n(379848),
    h = n(253932),
    p = n(975571),
    g = n(822382),
    f = n(753806),
    m = n(345859),
    b = n(145331),
    A = n(121806),
    y = n(652215),
    O = n(49999),
    _ = n(985018),
    j = n(620168);

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function E(e) {
    let {
        searchContext: t,
        searchMode: n,
        onSearchModeChange: i,
        totalResults: o,
        isIndexing: c,
        isSearching: h,
        documentsIndexed: p,
        selectedChannelId: b
    } = e, x = (0, m.H)(t), {
        totalFilters: v
    } = (0, A.vj)(x, t), E = l.useMemo(() => {
        if (t.type === y.I4_.DMS) {
            var e, n;
            let t = null != (e = null == (n = (0, g.Zf)(x).channel_id) ? void 0 : n.length) ? e : 0;
            return t > 0 ? _.intl.format(_.t.A2dqWG, {
                filterCount: t
            }) : _.intl.string(_.t.tc619d)
        }
        return null
    }, [t.type, x]), [S, I] = l.useState(null), N = l.useMemo(() => h ? [] : [a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER], [h]), [T, R] = (0, d.kn)(N), D = T === a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER, L = l.useCallback(e => {
        null != e && D && R(O.i.USER_DISMISS), I(e)
    }, [D, R, I]), M = l.useCallback(e => {
        R("user:explicit" === e ? O.i.USER_DISMISS : O.i.AUTO_DISMISS)
    }, [R]), G = l.useCallback(() => {
        L(null), f.A.openSearchFiltersModal(t)
    }, [L, t]), k = l.useMemo(() => v > 0 ? _.intl.format(_.t.uaR4sI, {
        filterCount: v
    }) : _.intl.string(_.t.UdhTtk), [v]), U = t.type === y.I4_.DMS || t.type === y.I4_.CHANNEL;
    return (0, r.jsxs)("header", {
        className: s()(j.wL, {
            [j.g$]: null != E
        }),
        children: [(0, r.jsx)("div", {
            className: j.TN,
            role: "status",
            children: (0, r.jsx)(C, {
                totalResults: o,
                subtitle: E,
                isIndexing: c,
                isSearching: h,
                documentsIndexed: p
            })
        }), (0, r.jsxs)("div", {
            className: j.vd,
            children: [(0, r.jsx)(u.Button, {
                variant: "secondary",
                onClick: G,
                text: k,
                icon: u.RgP,
                size: "sm"
            }), (0, r.jsx)(w, {
                searchMode: n,
                onSearchModeChange: i,
                isPopoutOpen: "sort" === S,
                setOpenPopout: L
            }), U && (0, r.jsx)(P, {
                searchContext: t,
                selectedChannelId: b,
                isPopoutOpen: "settings" === S,
                setOpenPopout: L,
                isPopoverVisible: D,
                onPopoverRequestClose: M
            })]
        })]
    })
}

function C(e) {
    let {
        totalResults: t,
        subtitle: n,
        isSearching: l,
        isIndexing: i,
        documentsIndexed: s
    } = e;
    return i ? (0, r.jsx)(I, {
        documentsIndexed: s
    }) : l ? (0, r.jsx)(N, {}) : (0, r.jsx)(T, {
        totalResults: t,
        subtitle: n
    })
}

function S() {
    return (0, r.jsx)("div", {
        className: j.zp,
        children: (0, r.jsx)(u.y$y, {
            type: u.y$y.Type.SPINNING_CIRCLE,
            className: j.u1,
            itemClassName: j.pu
        })
    })
}

function I(e) {
    let {
        documentsIndexed: t
    } = e;
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: _.intl.formatToPlainString(_.t["4Y3O+O"], {
            count: null != t ? t : ""
        }),
        children: (0, r.jsxs)("div", {
            className: j.q_,
            children: [(0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-muted",
                children: (0, r.jsx)(u.MzZ, {
                    className: j.Zd,
                    href: p.A.getArticleURL(y.MVz.SEARCH_INDEXING),
                    children: _.intl.string(_.t["G3EA+4"])
                })
            }), (0, r.jsx)(S, {})]
        })
    })
}

function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-default",
            children: _.intl.string(_.t.uixzLf)
        }), (0, r.jsx)(S, {})]
    })
}

function T(e) {
    let {
        totalResults: t,
        subtitle: n
    } = e, l = (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: _.intl.format(_.t.ZGVL3g, {
            count: t
        })
    });
    return null != n ? (0, r.jsxs)("div", {
        className: j.hy,
        children: [l, (0, r.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-subtle",
            children: n
        })]
    }) : l
}

function P(e) {
    let {
        searchContext: t,
        selectedChannelId: n,
        isPopoutOpen: i,
        setOpenPopout: s,
        onPopoverRequestClose: a,
        isPopoverVisible: c
    } = e, d = l.useRef(null), p = h.Hu.useSetting(), g = l.useCallback(e => {
        if (p !== e) {
            if ((0, b._k)({
                    searchContext: t,
                    prevIsCrossDMSettingEnabled: h.Hu.getSetting(),
                    isCrossDMSettingEnabled: e,
                    location: b.vy.SEARCH_HEADER
                }), e) {
                let e = {
                    type: y.I4_.DMS
                };
                f.A.transitionStateToSearchContext(t, e, f.A.cleanUpPrivateChannelSearchState)
            } else {
                let e = {
                    type: y.I4_.CHANNEL,
                    channelId: n
                };
                f.A.transitionStateToSearchContext(t, e)
            }
            s(null), h.Hu.updateSetting(e)
        }
    }, [p, s, t, n]), [m, A] = l.useMemo(() => [p ? _.intl.string(_.t["8lklch"]) : _.intl.string(_.t.ji3jTF), p ? _.intl.string(_.t.RMQZCa) : _.intl.string(_.t["v/PagC"])], [p]), O = l.useMemo(() => ({
        align: "end"
    }), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.YNO, {
            targetElementRef: d,
            shouldShow: i,
            animation: u.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            onRequestClose: () => s(null),
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, r.jsx)(u.W1t, {
                    "data-menu-migrated-auto": !0,
                    navId: "search-settings-cog",
                    onClose: t,
                    "aria-label": _.intl.string(_.t.fb59v0),
                    onSelect: () => s(null),
                    children: (0, r.jsxs)(u.rXV, {
                        label: _.intl.string(_.t["/tMwrA"]),
                        children: [(0, r.jsx)(u.iDA, {
                            id: "xdm-search-disabled",
                            group: "xdm-search-items",
                            label: _.intl.string(_.t.jRkYAh),
                            checked: !p,
                            action: () => g(!1)
                        }), (0, r.jsx)(u.iDA, {
                            id: "xdm-search-enabled",
                            group: "xdm-search-items",
                            label: _.intl.string(_.t["lWpJ/t"]),
                            checked: p,
                            action: () => g(!0)
                        })]
                    }, "xdm-search-items")
                })
            },
            children: e => (0, r.jsx)(u.K0, v(x({}, e), {
                buttonRef: d,
                variant: "secondary",
                icon: u.Zes,
                onClick: () => {
                    s(i ? null : "settings")
                },
                "aria-label": _.intl.string(_.t["3D5yo/"]),
                size: "sm"
            }))
        }), (0, r.jsx)(o.AM, {
            targetElementRef: d,
            shouldShow: c,
            onRequestClose: a,
            title: m,
            body: A,
            caretConfig: O,
            badge: "new"
        })]
    })
}

function w(e) {
    let {
        searchMode: t,
        onSearchModeChange: n,
        isPopoutOpen: i,
        setOpenPopout: s
    } = e, a = l.useRef(null), o = l.useMemo(() => [{
        label: _.intl.string(_.t.CbaapP),
        value: y.BBH.NEWEST
    }, {
        label: _.intl.string(_.t.OukXZj),
        value: y.BBH.OLDEST
    }, {
        label: _.intl.string(_.t.q8gB52),
        value: y.BBH.MOST_RELEVANT
    }], []), c = l.useCallback(e => {
        s(null), n(e)
    }, [s, n]);
    return (0, r.jsx)(u.YNO, {
        targetElementRef: a,
        shouldShow: i,
        animation: u.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => s(null),
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, r.jsx)(u.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": _.intl.string(_.t.utp2hS),
                onSelect: () => s(null),
                children: (0, r.jsx)(u.rXV, {
                    children: o.map(e => {
                        let {
                            label: n,
                            value: l
                        } = e;
                        return (0, r.jsx)(u.iDA, {
                            group: "sort-by",
                            id: "sort-by-option-".concat(l),
                            label: n,
                            action: () => c(l),
                            checked: t === l
                        }, l)
                    })
                }, "sort-by")
            })
        },
        children: e => (0, r.jsx)(u.Button, v(x({}, e), {
            buttonRef: a,
            variant: "secondary",
            icon: u.JNJ,
            onClick: () => {
                s(i ? null : "sort")
            },
            text: _.intl.string(_.t.XvNMNk),
            "aria-label": _.intl.string(_.t.XvNMNk),
            size: "sm"
        }))
    })
}