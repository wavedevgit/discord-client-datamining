/** chunk id: 916494 params = (module,exports,require) **/
n.d(t, {
    $G: () => _,
    Mw: () => l,
    UM: () => u,
    Um: () => o,
    cP: () => r,
    eu: () => c,
    kz: () => d,
    uc: () => s
});
let i = 9 / 16,
    a = 16 / 9,
    r = (e, t) => e * t,
    l = (e, t) => e * t,
    s = e => r(e, i),
    o = e => l(e, a);

function d(e, t) {
    return t * (Math.max(1, e) - 1)
}

function c(e) {
    let {
        width: t,
        height: n,
        containerOffset: i,
        gapSize: a,
        tileCount: r,
        isVertical: l
    } = e, s = l ? t : t - d(r, a), o = l ? n - d(r, a) : n;
    return {
        verticalRatio: (o - i) / (s - i),
        horizontalRatio: (s - i) / (o - i)
    }
}

function u(e, t, n) {
    let {
        containerOffset: i,
        gapSize: a,
        tileCount: s,
        isVertical: o
    } = t, {
        maxWidth: u,
        maxHeight: _
    } = n, h = Math.max(1, s), m = e.width > u, p = e.height > _;
    if (!m && !p) return e;
    let g = d(s, a),
        {
            verticalRatio: f,
            horizontalRatio: A
        } = c({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: a,
            tileCount: h,
            isVertical: o
        }),
        x = e.width - i,
        I = e.height - i,
        E = u - i,
        b = _ - i;
    return o ? (b -= g, I -= g) : (E -= g, x -= g), m && p && (e.width > e.height ? I = r(x = E, f) : x = l(I = b, A), m = x > E, p = I > b), m && (I = r(x = E, f)), p && (x = l(I = b, A)), o ? I += d(s, a) : x += d(s, a), {
        width: x + i,
        height: I + i
    }
}

function _(e, t) {
    let {
        maxWidth: n,
        maxHeight: i
    } = t;
    return {
        width: Math.max(0, Math.min(e.width, n)),
        height: Math.max(0, Math.min(e.height, i))
    }
}