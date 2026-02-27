/** chunk id: 733586, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(962125),
    o = n(591329);
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
    } = e, [p, m] = s.useState({
        width: 0,
        height: 0
    }), {
        width: g,
        height: _
    } = p, f = n?.length ?? 0, x = g - 16, C = _ - (h + A), {
        tileStyle: E,
        tileWidth: I,
        rows: N,
        columns: b
    } = s.useMemo(() => (function(e, t, n) {
        var i, s, l;
        let a, r, o, h, {
            rows: A,
            columns: p,
            tileWidth: m
        } = (i = e, s = t, l = n, r = Math.floor(s / 25), a = i > 25 ? u(r, s, e => {
            let t;
            return d(e, s) * (Math.ceil((l - (t = e / c)) / (8 + t)) + 1) > 25
        }) : u(r, s, e => {
            let t;
            return d(e, s) * (Math.floor((l - (t = e / c)) / (8 + t)) + 1) >= i
        }) - 1, h = Math.ceil(i / (o = d(a, s))), {
            tileWidth: a,
            columns: Math.max(1, o),
            rows: h
        });
        return {
            tileStyle: {
                width: m
            },
            tileWidth: m,
            rows: A,
            columns: p
        }
    })(f, x, C), [f, x, C]), S = b + 1, T = S * I + (S - 1) * 8 <= g, y = Math.floor(I / c) + 8, v = Math.max(0, C - y * N) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [h + v, 0, A + v - 8, 8],
        renderRow: function(e) {
            let t = e * b;
            return (0, i.jsx)("div", {
                className: o.nM,
                children: n?.slice(t, t + b)?.map((e, n) => {
                    let s = t + n;
                    return (0, i.jsx)("div", {
                        style: E,
                        className: a()(o.Vs, {
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
        rowHeight: y,
        onResize: m
    })
}