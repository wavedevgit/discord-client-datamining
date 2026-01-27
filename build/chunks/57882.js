/** Chunk was on 40215 **/
/** chunk id: 57882, original params: r,E,a (module,exports,require) **/
a.d(E, {
    OW: () => u,
    Xq: () => d,
    _V: () => c,
    oO: () => P,
    od: () => f
});
var _ = a(64700),
    o = a(499979),
    C = a(381849),
    e = a(985018),
    n = a(532063),
    A = a(367485),
    N = a(607374),
    s = a(862446),
    O = a(818952),
    t = a(443670),
    I = a(583623),
    R = a(620324),
    l = a(379043),
    T = a(979143);
let S = [o.pJ.HOURS, o.pJ.MINUTES];

function d(r) {
    let {
        unit: E,
        time: a
    } = (0, o.$l)(r, S), _ = (0, C.i)();
    if (null == a) return e.intl.formatToPlainString(_.minutes, {
        minutes: 0
    });
    let n = Math.round(a);
    return E === o.pJ.HOURS ? e.intl.formatToPlainString(_.hours, {
        hours: n
    }) : e.intl.formatToPlainString(_.minutes, {
        minutes: n
    })
}

function P(r) {
    let {
        unit: E,
        time: a
    } = (0, o.$l)(r, S);
    return {
        duration: Math.round(null != a ? a : 0),
        unit: E
    }
}

function u(r) {
    switch (r) {
        case 0:
            return l.A;
        case 1:
            return t.A;
        case 2:
            return A.A;
        case 3:
            return O.A;
        case 4:
            return R.A;
        case 5:
            return T.A;
        case 6:
            return I.A;
        case 7:
            return n.A;
        case 8:
            return s.A;
        default:
            return N.A
    }
}

function f(r, E) {
    return {
        monthName: (0, _.useMemo)(() => {
            let a = new Date;
            return a.setDate(1), a.setMonth(r - 1), a.toLocaleString(E, {
                month: "long"
            })
        }, [r, E])
    }
}

function c(r) {
    return Math.min(Math.max(Math.round(r / 10), 1), 9)
}