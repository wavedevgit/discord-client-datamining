/** chunk id: 916494 params = (module,exports,require) **/
n.d(t, {
    $G: () => h,
    Mw: () => s,
    UM: () => c,
    Um: () => o,
    cP: () => l,
    eu: () => d,
    kz: () => u,
    uc: () => a
});
let i = 9 / 16,
    r = 16 / 9,
    l = (e, t) => e * t,
    s = (e, t) => e * t,
    a = e => l(e, i),
    o = e => s(e, r);

function u(e, t) {
    return t * (Math.max(1, e) - 1)
}

function d(e) {
    let {
        width: t,
        height: n,
        containerOffset: i,
        gapSize: r,
        tileCount: l,
        isVertical: s
    } = e, a = s ? t : t - u(l, r), o = s ? n - u(l, r) : n;
    return {
        verticalRatio: (o - i) / (a - i),
        horizontalRatio: (a - i) / (o - i)
    }
}

function c(e, t, n) {
    let {
        containerOffset: i,
        gapSize: r,
        tileCount: a,
        isVertical: o
    } = t, {
        maxWidth: c,
        maxHeight: h
    } = n, g = Math.max(1, a), m = e.width > c, f = e.height > h;
    if (!m && !f) return e;
    let A = u(a, r),
        {
            verticalRatio: I,
            horizontalRatio: E
        } = d({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: g,
            isVertical: o
        }),
        p = e.width - i,
        _ = e.height - i,
        S = c - i,
        x = h - i;
    return o ? (x -= A, _ -= A) : (S -= A, p -= A), m && f && (e.width > e.height ? _ = l(p = S, I) : p = s(_ = x, E), m = p > S, f = _ > x), m && (_ = l(p = S, I)), f && (p = s(_ = x, E)), o ? _ += u(a, r) : p += u(a, r), {
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