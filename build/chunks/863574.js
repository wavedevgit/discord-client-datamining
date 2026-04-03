/** chunk id: 863574 params = (module,exports,require) **/
n.d(t, {
    Tm: () => o,
    Wb: () => c,
    ug: () => d
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(622413),
    a = n(546529);
let o = 660,
    d = e => (0, i.jsx)(s.A, {
        ...e,
        className: r()(e.className, {
            [a.sN]: !e.isHorizontal,
            [a.wO]: e.isHorizontal
        })
    }),
    c = e => {
        let {
            isHorizontal: t
        } = e;
        return (0, i.jsx)(d, {
            ...e,
            media: () => (0, i.jsx)("div", {
                className: a.FR,
                children: (0, i.jsx)("div", {
                    className: r()(a.Wv, {
                        [a._n]: t
                    }),
                    children: (0, i.jsx)("div", {
                        className: a.h$
                    })
                })
            }),
            title: () => (0, i.jsx)("div", {
                className: r()(a.GE, {
                    [a.E9]: t
                })
            })
        })
    }