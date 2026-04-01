/** chunk id: 863574 params = (module,exports,require) **/
n.d(t, {
    Tm: () => o,
    Wb: () => c,
    ug: () => d
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(622413),
    s = n(546529);
let o = 660,
    d = e => (0, i.jsx)(l.A, {
        ...e,
        className: r()(e.className, {
            [s.sN]: !e.isHorizontal,
            [s.wO]: e.isHorizontal
        })
    }),
    c = e => {
        let {
            isHorizontal: t
        } = e;
        return (0, i.jsx)(d, {
            ...e,
            media: () => (0, i.jsx)("div", {
                className: s.FR,
                children: (0, i.jsx)("div", {
                    className: r()(s.Wv, {
                        [s._n]: t
                    }),
                    children: (0, i.jsx)("div", {
                        className: s.h$
                    })
                })
            }),
            title: () => (0, i.jsx)("div", {
                className: r()(s.GE, {
                    [s.E9]: t
                })
            })
        })
    }