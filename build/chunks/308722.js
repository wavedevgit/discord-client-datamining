/** Chunk was on web.js **/
/** chunk id: 308722, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => u
});
var r = n(22299),
    i = n(376472),
    a = n(515702),
    o = n(339241),
    s = n(636478),
    l = n(492313),
    c = n(64700);

function u(e) {
    var t, n;
    let u = (0, s.T)(e),
        [d, f] = (0, l.P)(e.value, e.defaultValue || null, e.onChange),
        [p] = (0, c.useState)(d),
        _ = d || e.placeholderValue || null,
        [h, m] = (0, r.bf)(_, e.granularity),
        g = null != d ? d.toDate(null != m ? m : "UTC") : null,
        E = "hour" === h || "minute" === h || "second" === h,
        y = null == (t = e.shouldCloseOnSelect) || t,
        [b, O] = (0, c.useState)(null),
        [v, A] = (0, c.useState)(null);
    if (d && (b = d, "hour" in d && (v = d)), _ && !(h in _)) throw Error("Invalid granularity " + h + " for value " + _.toString());
    let I = (null == d ? void 0 : d.calendar.identifier) === "gregory" && "BC" === d.era,
        S = (0, c.useMemo)(() => ({
            granularity: h,
            timeZone: m,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            showEra: I
        }), [h, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, I]),
        {
            minValue: T,
            maxValue: C,
            isDateUnavailable: N
        } = e,
        w = (0, c.useMemo)(() => (0, r.nz)(d, T, C, N, S), [d, T, C, N, S]),
        R = (0, o.KZ)({
            ...e,
            value: d,
            builtinValidation: w
        }),
        P = R.displayValidation.isInvalid,
        D = e.validationState || (P ? "invalid" : null),
        L = (e, t) => {
            f("timeZone" in t ? t.set((0, i.gw)(e)) : (0, i.tR)(e, t)), O(null), A(null), R.commitValidation()
        },
        x = t => {
            let n = "function" == typeof y ? y() : y;
            E ? v || n ? L(t, v || (0, r.$l)(e.defaultValue || e.placeholderValue)) : O(t) : (f(t), R.commitValidation()), n && u.setOpen(!1)
        },
        M = e => {
            b && e ? L(b, e) : A(e)
        };
    return {
        ...R,
        value: d,
        defaultValue: null != (n = e.defaultValue) ? n : p,
        setValue: f,
        dateValue: b,
        timeValue: v,
        setDateValue: x,
        setTimeValue: M,
        granularity: h,
        hasTime: E,
        ...u,
        setOpen(t) {
            !t && !d && b && E && L(b, v || (0, r.$l)(e.defaultValue || e.placeholderValue)), u.setOpen(t)
        },
        validationState: D,
        isInvalid: P,
        formatValue(e, t) {
            if (!g) return "";
            let n = (0, r.id)(t, S);
            return new(0, a.p)(e, n).format(g)
        },
        getDateFormatter(e, t) {
            let n = {
                    ...S,
                    ...t
                },
                i = (0, r.id)({}, n);
            return new(0, a.p)(e, i)
        }
    }
}