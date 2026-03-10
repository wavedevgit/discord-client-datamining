/** chunk id: 57882 params = (module,exports,require) **/
t.d(a, {
    OW: () => m,
    _V: () => R,
    oO: () => O
});
var n = t(499979),
    r = t(381849),
    o = t(985018),
    s = t(532063),
    _ = t(367485),
    c = t(607374),
    i = t(862446),
    l = t(818952),
    d = t(443670),
    E = t(583623),
    C = t(620324),
    A = t(379043),
    u = t(979143);
let N = [n.pJ.HOURS, n.pJ.MINUTES];

function O(e) {
    let {
        unit: a,
        time: t
    } = (0, n.$l)(e, N), s = (0, r.i)();
    if (null == t) return o.intl.formatToPlainString(s.minutes, {
        minutes: 0
    });
    let _ = Math.round(t);
    return a === n.pJ.HOURS ? o.intl.formatToPlainString(s.hours, {
        hours: _
    }) : o.intl.formatToPlainString(s.minutes, {
        minutes: _
    })
}

function m(e) {
    switch (e) {
        case 0:
            return A.A;
        case 1:
            return d.A;
        case 2:
            return _.A;
        case 3:
            return l.A;
        case 4:
            return C.A;
        case 5:
            return u.A;
        case 6:
            return E.A;
        case 7:
            return s.A;
        case 8:
            return i.A;
        default:
            return c.A
    }
}

function R(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9)
}