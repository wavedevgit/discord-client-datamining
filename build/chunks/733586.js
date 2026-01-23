/** Chunk was on 97492 **/
/** chunk id: 733586, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(962125),
    o = n(591329);
let c = 16 / 9;

function u(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1)
}

function d(e, t, n) {
    let r = t - e;
    for (; r > 0;) {
        let t = e,
            l = Math.floor(r / 2);
        n(t += l) ? (e = t + 1, r -= l + 1) : r = l
    }
    return e
}

function p(e) {
    var t;
    let {
        className: n,
        children: i,
        keyExtractor: p,
        paddingTop: h = 0,
        paddingBottom: f = 0
    } = e, [g, m] = l.useState({
        width: 0,
        height: 0
    }), {
        width: b,
        height: A
    } = g, y = null != (t = null == i ? void 0 : i.length) ? t : 0, _ = b - 16, O = A - (h + f), {
        tileStyle: j,
        tileWidth: v,
        rows: x,
        columns: E
    } = l.useMemo(() => (function(e, t, n) {
        var r, l, i;
        let s, a, o, p, {
            rows: h,
            columns: f,
            tileWidth: g
        } = (r = e, l = t, i = n, a = Math.floor(l / 25), s = r > 25 ? d(a, l, e => {
            let t;
            return u(e, l) * (Math.ceil((i - (t = e / c)) / (8 + t)) + 1) > 25
        }) : d(a, l, e => {
            let t;
            return u(e, l) * (Math.floor((i - (t = e / c)) / (8 + t)) + 1) >= r
        }) - 1, p = Math.ceil(r / (o = u(s, l))), {
            tileWidth: s,
            columns: Math.max(1, o),
            rows: p
        });
        return {
            tileStyle: {
                width: g
            },
            tileWidth: g,
            rows: h,
            columns: f
        }
    })(y, _, O), [y, _, O]), C = E + 1, S = C * v + (C - 1) * 8 <= b, I = Math.floor(v / c) + 8, N = Math.max(0, O - I * x) / 2;
    return (0, r.jsx)(a.A, {
        fade: !0,
        className: n,
        listPadding: [h + N, 0, f + N - 8, 8],
        renderRow: function(e) {
            var t;
            let n = e * E;
            return (0, r.jsx)("div", {
                className: o.nM,
                children: null == i || null == (t = i.slice(n, n + E)) ? void 0 : t.map((e, t) => {
                    var l;
                    let i = n + t;
                    return (0, r.jsx)("div", {
                        style: j,
                        className: s()(o.Vs, {
                            [o.E3]: S,
                            [o.k4]: i >= (x - 1) * E,
                            [o.Kk]: (i + 1) % E == 0 || i === y - 1
                        }),
                        children: (0, r.jsx)("div", {
                            className: o.eP,
                            children: e(v)
                        })
                    }, null != (l = null == p ? void 0 : p(i)) ? l : i)
                })
            }, e)
        },
        rowCount: x,
        rowCountBySection: [x],
        rowHeight: I,
        onResize: m
    })
}