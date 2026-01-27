/** Chunk was on web.js **/
/** chunk id: 22299, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $l: () => E,
    bf: () => O,
    id: () => g,
    nf: () => y,
    nz: () => _,
    o_: () => b
});
var r = n(233957),
    i = n(515702),
    a = n(99478),
    o = n(376472),
    s = n(352404),
    l = n(731692),
    c = n(944490),
    u = n(64700);

function d(e) {
    return e && e.__esModule ? e.default : e
}
let f = new(0, l.B)(d(r.A));

function p() {
    let e = "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        Intl.DateTimeFormat.supportedLocalesOf([e])
    } catch {
        e = "en-US"
    }
    return e
}

function _(e, t, n, r, a) {
    let o = null != e && null != n && e.compare(n) > 0,
        s = null != e && null != t && 0 > e.compare(t),
        u = null != e && (null == r ? void 0 : r(e)) || !1,
        d = o || s || u,
        _ = [];
    if (d) {
        let e = p(),
            r = l.B.getGlobalDictionaryForPackage("@react-stately/datepicker") || f,
            d = new(0, c.J)(e, r),
            h = new(0, i.p)(e, g({}, a)),
            m = h.resolvedOptions().timeZone;
        s && null != t && _.push(d.format("rangeUnderflow", {
            minValue: h.format(t.toDate(m))
        })), o && null != n && _.push(d.format("rangeOverflow", {
            maxValue: h.format(n.toDate(m))
        })), u && _.push(d.format("unavailableDate"))
    }
    return {
        isInvalid: d,
        validationErrors: _,
        validationDetails: {
            badInput: u,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: o,
            rangeUnderflow: s,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !d
        }
    }
}
let h = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    },
    m = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

function g(e, t) {
    var n;
    e = {
        ...t.shouldForceLeadingZeros ? m : h,
        ...e
    };
    let r = t.granularity || "minute",
        i = Object.keys(e),
        a = i.indexOf(null != (n = t.maxGranularity) ? n : "year");
    a < 0 && (a = 0);
    let o = i.indexOf(r);
    if (o < 0 && (o = 2), a > o) throw Error("maxGranularity must be greater than granularity");
    let s = i.slice(a, o + 1).reduce((t, n) => (t[n] = e[n], t), {});
    return null != t.hourCycle && (s.hour12 = 12 === t.hourCycle), s.timeZone = t.timeZone || "UTC", ("hour" === r || "minute" === r || "second" === r) && t.timeZone && !t.hideTimeZone && (s.timeZoneName = "short"), t.showEra && 0 === a && (s.era = "short"), s
}

function E(e) {
    return e && "hour" in e ? e : new(0, a.gX)
}

function y(e, t) {
    return null === e ? null : e ? (0, o.yP)(e, t) : void 0
}

function b(e, t, n, r) {
    if (e) return y(e, n);
    let i = (0, o.yP)((0, s.tB)(null != r ? r : (0, s.Xj)()).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }), n);
    return "year" === t || "month" === t || "day" === t ? (0, o.gw)(i) : r ? i : (0, o.tR)(i)
}

function O(e, t) {
    let n = e && "timeZone" in e ? e.timeZone : void 0,
        r = e && "minute" in e ? "minute" : "day";
    if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
    let [i, a] = (0, u.useState)([r, n]);
    return e && (i[0] !== r || i[1] !== n) && a([r, n]), t || (t = e ? r : i[0]), [t, e ? n : i[1]]
}