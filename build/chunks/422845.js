/** chunk id: 422845 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(989349),
    r = n.n(i),
    a = n(397927),
    s = n(974930),
    c = n(280871),
    d = n(985018),
    o = n(495907);

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
        E = g.startDate,
        j = r()(),
        f = r()().add(s.IS, "days"),
        S = r()().add(s.Xy, "days");
    null != x && (f.add(s.Ze, "years"), S.add(s.Ze, "years"));
    let v = e => {
        n({
            ...g,
            endDate: e
        })
    };
    return _ && (T = null != g.endDate || m ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: o.U,
            children: [(0, l.jsx)(a.J3s, {
                label: d.intl.string(d.t.CTLgZJ),
                required: m,
                value: g.endDate,
                onSelect: v,
                minDate: g.startDate,
                maxDate: S
            }), (0, l.jsx)(a.czz, {
                label: d.intl.string(d.t.j2RuXF),
                required: m,
                value: g.endDate,
                onChange: v
            })]
        }), m ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(a.QWc, {
                onClick: () => {
                    v(void 0)
                },
                text: d.intl.string(d.t.petdfk),
                size: "sm"
            }), (0, l.jsx)(a.hKd, {
                size: 24
            })]
        })]
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.QWc, {
            onClick: () => {
                v(r()(g.startDate).add(1, "hour"))
            },
            text: d.intl.string(d.t.ncdPcn),
            size: "sm"
        }), (0, l.jsx)(a.hKd, {
            size: 24
        })]
    })), (0, l.jsxs)("div", {
        className: t,
        children: [(0, l.jsxs)("div", {
            className: o.U,
            children: [(0, l.jsx)(a.J3s, {
                label: d.intl.string(d.t.kKOIwJ),
                required: !0,
                value: g.startDate,
                onSelect: e => {
                    n({
                        ...g,
                        startDate: e
                    })
                },
                minDate: j,
                maxDate: f,
                disabled: A
            }), (0, l.jsx)(a.czz, {
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
        }), T, null != E && null != i && (0, l.jsx)(c.A, {
            onRecurrenceChange: i,
            startDate: E,
            recurrenceRule: x
        })]
    })
}