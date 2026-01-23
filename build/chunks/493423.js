/** Chunk was on web.js **/
/** chunk id: 493423, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => _
});
var r = n(457312),
    i = n(701366),
    a = n(217512),
    s = n(290424),
    o = n(98909),
    l = n(723906),
    c = n(48284),
    u = n(803082),
    d = n(47276),
    f = n(64700);

function p(e) {
    return e && e.__esModule ? e.default : e
}

function _(e, t) {
    let n = (0, d.o)(p(i.A), "@react-aria/calendar"),
        _ = (0, s.$)(e),
        h = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
        m = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
    (0, o.w)(() => {
        t.isFocused || (0, a.iP)(m)
    }, [m]);
    let g = (0, r.ZI)(t);
    (0, o.w)(() => {
        g && (0, a.iP)(g, "polite", 4e3)
    }, [g]);
    let E = (0, l.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
    r.OX.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: E,
        selectedDateDescription: g
    });
    let [y, b] = (0, f.useState)(!1), O = e.isDisabled || t.isNextVisibleRangeInvalid();
    O && y && (b(!1), t.setFocused(!0));
    let [v, A] = (0, f.useState)(!1), I = e.isDisabled || t.isPreviousVisibleRangeInvalid();
    I && v && (A(!1), t.setFocused(!0));
    let S = (0, c.b)({
        id: e.id,
        "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"]
    });
    return {
        calendarProps: (0, u.v)(_, S, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0
        }),
        nextButtonProps: {
            onPress: () => t.focusNextPage(),
            "aria-label": n.format("next"),
            isDisabled: O,
            onFocusChange: b
        },
        prevButtonProps: {
            onPress: () => t.focusPreviousPage(),
            "aria-label": n.format("previous"),
            isDisabled: I,
            onFocusChange: A
        },
        errorMessageProps: {
            id: E
        },
        title: h
    }
}