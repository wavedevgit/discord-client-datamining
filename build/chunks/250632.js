/** chunk id: 250632 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(235986),
    s = n(957358),
    o = n(505806),
    d = n(985018),
    c = n(969891);
let u = function(e) {
    let {
        title: t,
        className: n,
        color: r,
        animate: u,
        getHistoricalTotalBytes: A
    } = e;
    return (0, i.jsx)(o.A, {
        getHistoricalTotalBytes: A,
        children: (e, o, A) => {
            var h;
            return (0, i.jsx)("div", {
                className: l()(c.dm, n),
                children: (0, i.jsxs)(a.A, {
                    align: a.A.Align.CENTER,
                    children: [(0, i.jsxs)(a.A, {
                        className: c.Qq,
                        direction: a.A.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: c.DD,
                            children: t
                        }), (0, i.jsx)("div", {
                            className: c.TS,
                            children: (h = e[e.length - 1] / o * 1e3) > 1e3 ? d.intl.formatToPlainString(d.t["WU+gTX"], {
                                size: Math.round(h / 1e3)
                            }) : d.intl.formatToPlainString(d.t.wnF6TH, {
                                size: Math.round(h)
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        className: c.MQ,
                        children: (0, i.jsx)(s.A, {
                            data: e,
                            maxValue: Math.max(Math.max.apply(null, e), 1e3),
                            className: c.CD,
                            updateInterval: o,
                            color: r,
                            numUpdatesToShow: A,
                            animate: u,
                            pixelWidth: 600,
                            pixelHeight: 48,
                            lineWidth: 4
                        })
                    })]
                })
            })
        }
    })
}