/** chunk id: 487518, original params: e,t,l (module,exports,require) **/
l.d(t, {
    Ay: () => f,
    H_: () => _,
    Ti: () => g
});
var n, i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    C = l(989349),
    o = l.n(C),
    d = l(156828),
    c = l(397927),
    u = l(282054),
    m = l(652215),
    x = l(985018),
    h = l(614702);
let g = "MMM Do, YYYY",
    H = o()("2015-05-15").local(),
    j = (0, d.Fe)({
        createPromise: () => Promise.resolve().then(l.bind(l, 939538)),
        webpackId: 939538
    });
var _ = ((n = {})[n.ALL = 0] = "ALL", n[n["1_HOUR"] = 1] = "1_HOUR", n[n["24_HOURS"] = 2] = "24_HOURS", n[n["7_DAYS"] = 3] = "7_DAYS", n[n["2_WEEKS"] = 4] = "2_WEEKS", n[n["4_WEEKS"] = 5] = "4_WEEKS", n[n["3_MONTHS"] = 6] = "3_MONTHS", n[n.CUSTOM = 7] = "CUSTOM", n);

function f(e) {
    let {
        startDateLabel: t,
        endDateLabel: l,
        afterDate: n,
        beforeDate: a,
        selectedOption: C,
        isCustomDateRange: d,
        menuName: g,
        onClose: _,
        onSelectDateOption: f,
        onToggleCustomDateRange: p,
        onSelectStartDate: b,
        onSelectEndDate: v
    } = e, A = [{
        id: 0,
        option: null,
        label: x.intl.string(x.t.jelCib)
    }, {
        id: 1,
        option: {
            input: 1,
            unit: "h"
        },
        label: x.intl.string(x.t["91RDqi"])
    }, {
        id: 2,
        option: {
            input: 24,
            unit: "h"
        },
        label: x.intl.string(x.t["Lj/1Tq"])
    }, {
        id: 3,
        option: {
            input: 7,
            unit: "d"
        },
        label: x.intl.string(x.t.NnUMSZ)
    }, {
        id: 4,
        option: {
            input: 2,
            unit: "w"
        },
        label: x.intl.string(x.t.hY3XWH)
    }, {
        id: 5,
        option: {
            input: 4,
            unit: "w"
        },
        label: x.intl.string(x.t.kQTwT0)
    }, {
        id: 6,
        option: {
            input: 3,
            unit: "M"
        },
        label: x.intl.string(x.t.EPuP0s)
    }], [V, L] = s.useState(!1), N = 7 !== C ? null : null != t && null != l ? `${t} - ${l}` : null != t ? x.intl.formatToPlainString(x.t.ClmSzd, {
        date: t
    }) : null != l ? x.intl.formatToPlainString(x.t.YvNhsd, {
        date: l
    }) : null, R = s.useCallback(() => {
        L(!0), p()
    }, [p]), D = s.useCallback(e => {
        b(e)
    }, [b]), M = s.useCallback(e => {
        v(e)
    }, [v]), S = s.useCallback(() => {
        null == a && null == n && f(0, null), L(!1)
    }, [n, a, f]);
    return (0, i.jsx)(c.W1t, {
        "data-menu-needs-migration": !0,
        navId: `member-safety-guild-member-${g}-menu`,
        onClose: _,
        "aria-label": x.intl.string(x.t.k9m8Rg),
        onSelect: m.tEg,
        children: (0, i.jsx)(c.rXV, {
            children: V ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(c.Drp, {
                    id: "back",
                    action: S,
                    render: e => (0, i.jsxs)("span", {
                        ...e,
                        className: h.W6,
                        children: [(0, i.jsx)(c.n2b, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16
                        }), (0, i.jsx)(c.Text, {
                            variant: "eyebrow",
                            color: "text-strong",
                            children: x.intl.string(x.t.BTfN6g)
                        })]
                    })
                }), (0, i.jsx)(c.Drp, {
                    id: "after-date-menu-item",
                    label: x.intl.string(x.t.RDqVOD),
                    subtext: t,
                    subMenuClassName: h.aD,
                    children: (0, i.jsx)(c.Drp, {
                        id: "after-date-picker",
                        render: e => (0, i.jsx)(j, {
                            ...e,
                            calendarClassName: h.BJ,
                            value: d && null != n ? o()(n) : void 0,
                            onSelect: D,
                            maxDate: o()().local(),
                            minDate: H
                        })
                    })
                }), (0, i.jsx)(c.Drp, {
                    id: "before-date-menu-item",
                    label: x.intl.string(x.t.jF54hQ),
                    subtext: l,
                    subMenuClassName: h.aD,
                    children: (0, i.jsx)(c.Drp, {
                        id: "before-date-picker",
                        render: e => (0, i.jsx)(j, {
                            ...e,
                            calendarClassName: h.BJ,
                            value: d && null != a ? o()(a) : void 0,
                            onSelect: M,
                            maxDate: o()().local(),
                            minDate: d && null != n ? o()(n) : H
                        })
                    })
                })]
            }) : (0, i.jsxs)(i.Fragment, {
                children: [A.map(e => {
                    let {
                        id: t,
                        option: l,
                        label: n
                    } = e;
                    return (0, i.jsx)(c.iDA, {
                        group: `member-safety-guild-member-${g}-menu`,
                        id: `guild-member-${g}-option-${t}`,
                        label: n,
                        action: () => f(t, l),
                        checked: t === C
                    }, `option-${t}`)
                }), (0, i.jsx)(c.bXX, {}), (0, i.jsx)(c.Drp, {
                    id: `guild-member-${g}-custom-option}`,
                    action: R,
                    render: e => (0, i.jsxs)("div", {
                        className: r()(h.Dh, {
                            [h.in]: e.isFocused
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: h.jA,
                            children: [(0, i.jsx)(c.Text, {
                                className: r()(h.ty, {
                                    [h.in]: e.isFocused
                                }),
                                variant: "text-sm/medium",
                                children: x.intl.string(x.t.BTfN6g)
                            }), null != N && (0, i.jsx)(c.Text, {
                                className: r()(h.ty, {
                                    [h.in]: e.isFocused
                                }),
                                color: "text-muted",
                                variant: "text-xxs/medium",
                                children: N
                            })]
                        }), 7 === C ? (0, i.jsx)(u.A, {
                            foreground: h.QE,
                            width: 18,
                            height: 18
                        }) : (0, i.jsx)(c._BQ, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: r()(h.ty, {
                                [h.in]: e.isFocused
                            })
                        })]
                    })
                })]
            })
        })
    })
}