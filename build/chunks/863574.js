/** chunk id: 863574 params = (module,exports,require) **/
n.d(t, {
    Tm: () => o,
    Wb: () => c,
    ug: () => d
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(622413),
    r = n(546529);
let o = 660,
    d = e => (0, i.jsx)(s.A, {
        ...e,
        className: l()(e.className, {
            [r.sN]: !e.isHorizontal,
            [r.wO]: e.isHorizontal
        })
    }),
    c = e => {
        let {
            isHorizontal: t
        } = e;
        return (0, i.jsx)(d, {
            ...e,
            media: () => (0, i.jsx)("div", {
                className: r.FR,
                children: (0, i.jsx)("div", {
                    className: l()(r.Wv, {
                        [r._n]: t
                    }),
                    children: (0, i.jsx)("div", {
                        className: r.h$
                    })
                })
            }),
            title: () => (0, i.jsx)("div", {
                className: l()(r.GE, {
                    [r.E9]: t
                })
            })
        })
    }