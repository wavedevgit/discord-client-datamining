/** chunk id: 733586 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(962125),
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
    } = e, [m, _] = s.useState({
        width: 0,
        height: 0
    }), {
        width: g,
        height: p
    } = m, f = n?.length ?? 0, x = g - 16, E = p - (h + A), {
        tileStyle: C,
        tileWidth: I,
        rows: N,
        columns: S
    } = s.useMemo(() => (function(e, t, n) {
        var i, s, l;
        let a, r, o, h, {
            rows: A,
            columns: m,
            tileWidth: _
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
                width: _
            },
            tileWidth: _,
            rows: A,
            columns: m
        }
    })(f, x, E), [f, x, E]), b = S + 1, T = b * I + (b - 1) * 8 <= g, v = Math.floor(I / c) + 8, y = Math.max(0, E - v * N) / 2;
    return (0, i.jsx)(r.A, {
        fade: !0,
        className: t,
        listPadding: [h + y, 0, A + y - 8, 8],
        renderRow: function(e) {
            let t = e * S;
            return (0, i.jsx)("div", {
                className: o.nM,
                children: n?.slice(t, t + S)?.map((e, n) => {
                    let s = t + n;
                    return (0, i.jsx)("div", {
                        style: C,
                        className: a()(o.Vs, {
                            [o.E3]: T,
                            [o.k4]: s >= (N - 1) * S,
                            [o.Kk]: (s + 1) % S == 0 || s === f - 1
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
        onResize: _
    })
}