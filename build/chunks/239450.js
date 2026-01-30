/** chunk id: 239450, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(264879);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(610145);

function s(e) {
    let {
        thumbnails: t,
        variant: n = "gallery",
        className: i
    } = e;
    if ("stacked" === n) {
        let e = Math.min(t.length, 2);
        return (0, r.jsx)("div", {
            className: l()(a.qH, i, {
                [a.qK]: 1 === e,
                [a.xs]: 2 === e
            }),
            children: t.slice(0, 2).map((e, t) => (0, r.jsx)("img", {
                alt: "Clip preview",
                className: a.M3,
                src: e,
                "data-index": t
            }, "".concat(e, "-").concat(t)))
        })
    }
    let s = Math.min(t.length, 4);
    return (0, r.jsx)("div", {
        className: l()(a.bF, i, {
            [a.tK]: 1 === s,
            [a.y0]: 2 === s,
            [a.rm]: 3 === s,
            [a.E1]: s >= 4
        }),
        children: t.slice(0, 4).map((e, t) => (0, r.jsx)("img", {
            alt: "Clip preview",
            className: a.N3,
            src: e,
            "data-index": t
        }, "".concat(e, "-").concat(t))).reverse()
    })
}