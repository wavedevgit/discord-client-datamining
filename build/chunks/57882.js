/** chunk id: 57882, original params: e,r,t (module,exports,require) **/
t.d(r, {
    OW: () => R,
    _V: () => f,
    oO: () => u
});
var n = t(499979),
    a = t(381849),
    o = t(985018),
    s = t(532063),
    _ = t(367485),
    l = t(607374),
    c = t(862446),
    E = t(818952),
    C = t(443670),
    d = t(583623),
    i = t(620324),
    O = t(379043),
    A = t(979143);
let N = [n.pJ.HOURS, n.pJ.MINUTES];

function u(e) {
    let {
        unit: r,
        time: t
    } = (0, n.$l)(e, N), s = (0, a.i)();
    if (null == t) return o.intl.formatToPlainString(s.minutes, {
        minutes: 0
    });
    let _ = Math.round(t);
    return r === n.pJ.HOURS ? o.intl.formatToPlainString(s.hours, {
        hours: _
    }) : o.intl.formatToPlainString(s.minutes, {
        minutes: _
    })
}

function R(e) {
    switch (e) {
        case 0:
            return O.A;
        case 1:
            return C.A;
        case 2:
            return _.A;
        case 3:
            return E.A;
        case 4:
            return i.A;
        case 5:
            return A.A;
        case 6:
            return d.A;
        case 7:
            return s.A;
        case 8:
            return c.A;
        default:
            return l.A
    }
}

function f(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9)
}