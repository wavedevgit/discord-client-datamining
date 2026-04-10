/** chunk id: 916494 params = (module,exports,require) **/
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
    } = n, g = Math.max(1, a), m = e.width > c, f = e.height > h;
    if (!m && !f) return e;
    let A = u(a, l),
        {
            verticalRatio: I,
            horizontalRatio: E
        } = d({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: l,
            tileCount: g,
            isVertical: o
        }),
        p = e.width - i,
        _ = e.height - i,
        S = c - i,
        x = h - i;
    return o ? (x -= A, _ -= A) : (S -= A, p -= A), m && f && (e.width > e.height ? _ = r(p = S, I) : p = s(_ = x, E), m = p > S, f = _ > x), m && (_ = r(p = S, I)), f && (p = s(_ = x, E)), o ? _ += u(a, l) : p += u(a, l), {
        width: p + i,
        height: _ + i
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