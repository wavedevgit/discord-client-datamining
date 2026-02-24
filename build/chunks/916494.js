/** chunk id: 916494, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $G: () => h,
    Mw: () => s,
    UM: () => c,
    Um: () => o,
    cP: () => r,
    eu: () => d,
    kz: () => u,
    uc: () => a
});
let i = 9 / 16,
    l = 16 / 9,
    r = (e, t) => e * t,
    s = (e, t) => e * t,
    a = e => r(e, i),
    o = e => s(e, l);

function u(e, t) {
    return t * (Math.max(1, e) - 1)
}

function d(e) {
    let {
        width: t,
        height: n,
        containerOffset: i,
        gapSize: l,
        tileCount: r,
        isVertical: s
    } = e, a = s ? t : t - u(r, l), o = s ? n - u(r, l) : n;
    return {
        verticalRatio: (o - i) / (a - i),
        horizontalRatio: (a - i) / (o - i)
    }
}

function c(e, t, n) {
    let {
        containerOffset: i,
        gapSize: l,
        tileCount: a,
        isVertical: o
    } = t, {
        maxWidth: c,
        maxHeight: h
    } = n, m = Math.max(1, a), g = e.width > c, p = e.height > h;
    if (!g && !p) return e;
    let A = u(a, l),
        {
            verticalRatio: f,
            horizontalRatio: x
        } = d({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: l,
            tileCount: m,
            isVertical: o
        }),
        E = e.width - i,
        S = e.height - i,
        v = c - i,
        C = h - i;
    return o ? (C -= A, S -= A) : (v -= A, E -= A), g && p && (e.width > e.height ? S = r(E = v, f) : E = s(S = C, x), g = E > v, p = S > C), g && (S = r(E = v, f)), p && (E = s(S = C, x)), o ? S += u(a, l) : E += u(a, l), {
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