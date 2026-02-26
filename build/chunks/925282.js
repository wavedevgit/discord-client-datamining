/** chunk id: 925282, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => m
});
var n = l(627968);
l(64700);
var i = l(33851),
    s = l.n(i),
    a = l(989349),
    r = l.n(a),
    C = l(417597),
    o = l(266047),
    d = l(221950),
    c = l(487518),
    u = l(985018);

function m(e) {
    let {
        guildId: t,
        onClose: l
    } = e, i = (0, C.bG)([o.A], () => o.A.getSearchStateByGuildId(t), [t], s()), {
        selectedJoinDateOption: a
    } = i, {
        afterDate: m,
        beforeDate: x,
        optionId: h
    } = a, g = h === c.H_.CUSTOM, H = g && null != m ? r()(m).format(c.Ti) : null, j = g && null != x ? r()(x).format(c.Ti) : null;
    return (0, n.jsx)(c.Ay, {
        startDateLabel: H,
        endDateLabel: j,
        afterDate: m,
        beforeDate: x,
        selectedOption: h,
        isCustomDateRange: g,
        menuName: "joined-date",
        accessibilityLabel: u.intl.string(u.t.XMVinX),
        onClose: l,
        onSelectDateOption: function(e, l) {
            let n = null != l ? r()().subtract(l.input, l.unit).valueOf() : null;
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: {
                    optionId: e,
                    afterDate: n,
                    beforeDate: null
                }
            })
        },
        onToggleCustomDateRange: function() {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: {
                    optionId: c.H_.CUSTOM,
                    afterDate: g ? m : null,
                    beforeDate: g ? x : null
                }
            })
        },
        onSelectStartDate: function(e) {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: {
                    optionId: c.H_.CUSTOM,
                    afterDate: e.valueOf(),
                    beforeDate: x
                }
            })
        },
        onSelectEndDate: function(e) {
            (0, d.Ld)(t, {
                ...i,
                selectedJoinDateOption: {
                    optionId: c.H_.CUSTOM,
                    afterDate: m,
                    beforeDate: e.valueOf()
                }
            })
        }
    })
}