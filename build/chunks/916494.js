/** chunk id: 916494 params = (module,exports,require) **/
n.d(t, {
    $G: () => h,
    Mw: () => r,
    UM: () => c,
    Um: () => o,
    cP: () => l,
    eu: () => u,
    kz: () => d,
    uc: () => a
});
let i = 9 / 16,
    s = 16 / 9,
    l = (e, t) => e * t,
    r = (e, t) => e * t,
    a = e => l(e, i),
    o = e => r(e, s);

function d(e, t) {
    return t * (Math.max(1, e) - 1)
}

function u(e) {
    let {
        width: t,
        height: n,
        containerOffset: i,
        gapSize: s,
        tileCount: l,
        isVertical: r
    } = e, a = r ? t : t - d(l, s), o = r ? n - d(l, s) : n;
    return {
        verticalRatio: (o - i) / (a - i),
        horizontalRatio: (a - i) / (o - i)
    }
}

function c(e, t, n) {
    let {
        containerOffset: i,
        gapSize: s,
        tileCount: a,
        isVertical: o
    } = t, {
        maxWidth: c,
        maxHeight: h
    } = n, g = Math.max(1, a), m = e.width > c, p = e.height > h;
    if (!m && !p) return e;
    let A = d(a, s),
        {
            verticalRatio: x,
            horizontalRatio: f
        } = u({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: s,
            tileCount: g,
            isVertical: o
        }),
        E = e.width - i,
        S = e.height - i,
        I = c - i,
        T = h - i;
    return o ? (T -= A, S -= A) : (I -= A, E -= A), m && p && (e.width > e.height ? S = l(E = I, x) : E = r(S = T, f), m = E > I, p = S > T), m && (S = l(E = I, x)), p && (E = r(S = T, f)), o ? S += d(a, s) : E += d(a, s), {
        width: E + i,
        height: S + i
    }
}

function h(e, t) {
    let {
        maxWidth: n,
        maxHeight: i
    } = t;
    return {
        width: Math.max(0, Math.min(e.width, n)),
        height: Math.max(0, Math.min(e.height, i))
    }
}