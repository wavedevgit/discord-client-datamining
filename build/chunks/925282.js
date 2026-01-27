/** Chunk was on 35894 **/
/** chunk id: 925282, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(33851),
    i = n.n(l),
    o = n(989349),
    a = n.n(o),
    s = n(417597),
    c = n(266047),
    u = n(221950),
    d = n(487518),
    C = n(985018);

function m(e) {
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

function p(e, t) {
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

function f(e) {
    let {
        guildId: t,
        onClose: n
    } = e, l = (0, s.bG)([c.A], () => c.A.getSearchStateByGuildId(t), [t], i()), {
        selectedJoinDateOption: o
    } = l, {
        afterDate: f,
        beforeDate: b,
        optionId: j
    } = o, g = j === d.H_.CUSTOM, h = g && null != f ? a()(f).format(d.Ti) : null, x = g && null != b ? a()(b).format(d.Ti) : null;
    return (0, r.jsx)(d.Ay, {
        startDateLabel: h,
        endDateLabel: x,
        afterDate: f,
        beforeDate: b,
        selectedOption: j,
        isCustomDateRange: g,
        menuName: "joined-date",
        accessibilityLabel: C.intl.string(C.t.XMVinX),
        onClose: n,
        onSelectDateOption: function(e, n) {
            let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
            (0, u.Ld)(t, p(m({}, l), {
                selectedJoinDateOption: {
                    optionId: e,
                    afterDate: r,
                    beforeDate: null
                }
            }))
        },
        onToggleCustomDateRange: function() {
            (0, u.Ld)(t, p(m({}, l), {
                selectedJoinDateOption: {
                    optionId: d.H_.CUSTOM,
                    afterDate: g ? f : null,
                    beforeDate: g ? b : null
                }
            }))
        },
        onSelectStartDate: function(e) {
            (0, u.Ld)(t, p(m({}, l), {
                selectedJoinDateOption: {
                    optionId: d.H_.CUSTOM,
                    afterDate: e.valueOf(),
                    beforeDate: b
                }
            }))
        },
        onSelectEndDate: function(e) {
            (0, u.Ld)(t, p(m({}, l), {
                selectedJoinDateOption: {
                    optionId: d.H_.CUSTOM,
                    afterDate: f,
                    beforeDate: e.valueOf()
                }
            }))
        }
    })
}