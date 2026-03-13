/** chunk id: 57882 params = (module,exports,require) **/
t.d(a, {
    OW: () => O,
    _V: () => T,
    oO: () => m
});
var n = t(499979),
    r = t(381849),
    s = t(985018),
    o = t(532063),
    c = t(367485),
    _ = t(607374),
    i = t(862446),
    l = t(818952),
    d = t(443670),
    C = t(583623),
    E = t(620324),
    A = t(379043),
    u = t(979143);
let N = [n.pJ.HOURS, n.pJ.MINUTES];

function m(e) {
    let {
        unit: a,
        time: t
    } = (0, n.$l)(e, N), o = (0, r.i)();
    if (null == t) return s.intl.formatToPlainString(o.minutes, {
        minutes: 0
    });
    let c = Math.round(t);
    return a === n.pJ.HOURS ? s.intl.formatToPlainString(o.hours, {
        hours: c
    }) : s.intl.formatToPlainString(o.minutes, {
        minutes: c
    })
}

function O(e) {
    switch (e) {
        case 0:
            return A.A;
        case 1:
            return d.A;
        case 2:
            return c.A;
        case 3:
            return l.A;
        case 4:
            return E.A;
        case 5:
            return u.A;
        case 6:
            return C.A;
        case 7:
            return o.A;
        case 8:
            return i.A;
        default:
            return _.A
    }
}

function T(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9)
}