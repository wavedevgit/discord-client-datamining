/** Chunk was on 86317 **/
/** chunk id: 422845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var r = n(989349),
    i = n.n(r),
    a = n(397927),
    s = n(974930),
    c = n(280871),
    o = n(985018),
    u = n(659621);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function h(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: r,
        onTimeChange: h,
        timeSelected: f = !0,
        schedule: x,
        recurrenceRule: m,
        showEndDate: j = !1,
        requireEndDate: b = !1,
        disableStartDateTime: p = !1
    } = e;
    if (null == x) return null;
    let _ = null,
        O = x.startDate,
        y = i()(),
        v = i()().add(s.IS, "days"),
        A = i()().add(s.Xy, "days");
    null != m && (v.add(s.Ze, "years"), A.add(s.Ze, "years"));
    let T = e => {
        n(g(d({}, x), {
            endDate: e
        }))
    };
    return j && (_ = null != x.endDate || b ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: u.U,
            children: [(0, l.jsx)(a.J3s, {
                label: o.intl.string(o.t.CTLgZJ),
                required: b,
                value: x.endDate,
                onSelect: T,
                minDate: x.startDate,
                maxDate: A
            }), (0, l.jsx)(a.czz, {
                label: o.intl.string(o.t.j2RuXF),
                required: b,
                value: x.endDate,
                onChange: T
            })]
        }), b ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(a.QWc, {
                onClick: () => {
                    T(void 0)
                },
                text: o.intl.string(o.t.petdfk),
                size: "sm"
            }), (0, l.jsx)(a.hKd, {
                size: 24
            })]
        })]
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.QWc, {
            onClick: () => {
                T(i()(x.startDate).add(1, "hour"))
            },
            text: o.intl.string(o.t.ncdPcn),
            size: "sm"
        }), (0, l.jsx)(a.hKd, {
            size: 24
        })]
    })), (0, l.jsxs)("div", {
        className: t,
        children: [(0, l.jsxs)("div", {
            className: u.U,
            children: [(0, l.jsx)(a.J3s, {
                label: o.intl.string(o.t.kKOIwJ),
                required: !0,
                value: x.startDate,
                onSelect: e => {
                    n(g(d({}, x), {
                        startDate: e
                    }))
                },
                minDate: y,
                maxDate: v,
                disabled: p
            }), (0, l.jsx)(a.czz, {
                label: o.intl.string(o.t["6dGmCD"]),
                required: !0,
                value: x.startDate,
                onChange: e => {
                    e.isValid() && (null == h || h(!0), n(g(d({}, x), {
                        startDate: e
                    })))
                },
                hideValue: !f,
                disabled: p
            })]
        }), _, null != O && null != r && (0, l.jsx)(c.A, {
            onRecurrenceChange: r,
            startDate: O,
            recurrenceRule: m
        })]
    })
}