/** chunk id: 422845 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(989349),
    a = n.n(i),
    r = n(397927),
    s = n(974930),
    c = n(280871),
    d = n(985018),
    o = n(329139);

function u(e) {
    let {
        className: t,
        onScheduleChange: n,
        onRecurrenceChange: i,
        onTimeChange: u,
        timeSelected: h = !0,
        schedule: g,
        recurrenceRule: x,
        showEndDate: _ = !1,
        requireEndDate: m = !1,
        disableStartDateTime: A = !1
    } = e;
    if (null == g) return null;
    let T = null,
        j = g.startDate,
        f = a()(),
        E = a()().add(s.IS, "days"),
        v = a()().add(s.Xy, "days");
    null != x && (E.add(s.Ze, "years"), v.add(s.Ze, "years"));
    let S = e => {
        n({
            ...g,
            endDate: e
        })
    };
    return _ && (T = null != g.endDate || m ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: o.U,
            children: [(0, l.jsx)(r.J3s, {
                label: d.intl.string(d.t.CTLgZJ),
                required: m,
                value: g.endDate,
                onSelect: S,
                minDate: g.startDate,
                maxDate: v
            }), (0, l.jsx)(r.czz, {
                label: d.intl.string(d.t.j2RuXF),
                required: m,
                value: g.endDate,
                onChange: S
            })]
        }), m ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(r.QWc, {
                onClick: () => {
                    S(void 0)
                },
                text: d.intl.string(d.t.petdfk),
                size: "sm"
            }), (0, l.jsx)(r.hKd, {
                size: 24
            })]
        })]
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.QWc, {
            onClick: () => {
                S(a()(g.startDate).add(1, "hour"))
            },
            text: d.intl.string(d.t.ncdPcn),
            size: "sm"
        }), (0, l.jsx)(r.hKd, {
            size: 24
        })]
    })), (0, l.jsxs)("div", {
        className: t,
        children: [(0, l.jsxs)("div", {
            className: o.U,
            children: [(0, l.jsx)(r.J3s, {
                label: d.intl.string(d.t.kKOIwJ),
                required: !0,
                value: g.startDate,
                onSelect: e => {
                    n({
                        ...g,
                        startDate: e
                    })
                },
                minDate: f,
                maxDate: E,
                disabled: A
            }), (0, l.jsx)(r.czz, {
                label: d.intl.string(d.t["6dGmCD"]),
                required: !0,
                value: g.startDate,
                onChange: e => {
                    e.isValid() && (u?.(!0), n({
                        ...g,
                        startDate: e
                    }))
                },
                hideValue: !h,
                disabled: A
            })]
        }), T, null != j && null != i && (0, l.jsx)(c.A, {
            onRecurrenceChange: i,
            startDate: j,
            recurrenceRule: x
        })]
    })
}