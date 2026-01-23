/** Chunk was on web.js **/
/** chunk id: 939538, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    CalendarPicker: () => p,
    default: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(77967),
    l = n.n(o),
    c = n(311907),
    u = n(11057),
    d = n(773669),
    f = n(731880);

function p(e) {
    var t, n;
    let {
        value: a = s()().local(),
        minDate: o,
        maxDate: p,
        onSelect: _,
        calendarClassName: h,
        autoFocus: m,
        onClickOutside: g
    } = e, E = i.useCallback((e, t) => {
        null == _ || _(s()(e), t)
    }, [_]), y = i.useMemo(() => a.toDate(), [a]), b = i.useMemo(() => null == p ? void 0 : p.toDate(), [p]), O = i.useMemo(() => null == o ? void 0 : o.toDate(), [o]), v = (0, c.bG)([d.default], () => d.default.locale), A = (0, u.QO)(), I = i.useRef(null), S = i.useCallback(e => {
        let t = e.currentTarget;
        t.classList.contains("react-datepicker__day") && setTimeout(() => {
            var e, n;
            if (null == (e = I.current) ? void 0 : e.contains(t)) return;
            let r = null == (n = I.current) ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
            null != r && r.focus()
        }, 100)
    }, []);
    return (0, r.jsx)("div", {
        ref: I,
        className: f.Xn,
        children: (0, r.jsx)(l(), {
            calendarClassName: h,
            selected: y,
            onChange: E,
            autoFocus: m,
            fixedHeight: !0,
            inline: !0,
            locale: v,
            calendarStartDay: null != (t = null == (n = A.options) ? void 0 : n.weekStartsOn) ? t : 0,
            maxDate: b,
            minDate: O,
            onKeyDown: S,
            onClickOutside: g
        })
    })
}
let _ = p