/** chunk id: 733586 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(962125),
    o = n(602096);
let c = 16 / 9;

function d(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1)
}

function u(e, t, n) {
    let i = t - e;
    for (; i > 0;) {
        let t = e,
            s = Math.floor(i / 2);
        n(t += s) ? (e = t + 1, i -= s + 1) : i = s
    }
    return e
}

function h(e) {
    let {
        className: t,
        children: n,
        keyExtractor: l,
        paddingTop: h = 0,
        paddingBottom: A = 0
    } = e, [m, p] = s.useState({
        width: 0,
        height: 0
    }), {
        width: _,
        height: g
    } = m, f = n?.length ?? 0, x = _ - 16, C = g - (h + A), {
        tileStyle: E,
        tileWidth: I,
        rows: N,
        columns: b
    } = s.useMemo(() => (function(e, t, n) {
        var i, s, l;
        let r, a, o, h, {
            rows: A,
            columns: m,
            tileWidth: p
        } = (i = e, s = t, l = n, a = Math.floor(s / 25), r = i > 25 ? u(a, s, e => {
            let t;
            return d(e, s) * (Math.ceil((l - (t = e / c)) / (8 + t)) + 1) > 25
        }) : u(a, s, e => {
            let t;
            return d(e, s) * (Math.floor((l - (t = e / c)) / (8 + t)) + 1) >= i
        }) - 1, h = Math.ceil(i / (o = d(r, s))), {
            tileWidth: r,
            columns: Math.max(1, o),
            rows: h
        });
        return {
            tileStyle: {
                width: p
            },
            tileWidth: p,
            rows: A,
            columns: m
        }
    })(f, x, C), [f, x, C]), S = b + 1, T = S * I + (S - 1) * 8 <= _, v = Math.floor(I / c) + 8, y = Math.max(0, C - v * N) / 2;
    return (0, i.jsx)(a.A, {
        fade: !0,
        className: t,
        listPadding: [h + y, 0, A + y - 8, 8],
        renderRow: function(e) {
            let t = e * b;
            return (0, i.jsx)("div", {
                className: o.nM,
                children: n?.slice(t, t + b)?.map((e, n) => {
                    let s = t + n;
                    return (0, i.jsx)("div", {
                        style: E,
                        className: r()(o.Vs, {
                            [o.E3]: T,
                            [o.k4]: s >= (N - 1) * b,
                            [o.Kk]: (s + 1) % b == 0 || s === f - 1
                        }),
                        children: (0, i.jsx)("div", {
                            className: o.eP,
                            children: e(I)
                        })
                    }, l?.(s) ?? s)
                })
            }, e)
        },
        rowCount: N,
        rowCountBySection: [N],
        rowHeight: v,
        onResize: p
    })
}