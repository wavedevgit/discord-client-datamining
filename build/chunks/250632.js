/** chunk id: 250632 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(235986),
    s = n(957358),
    o = n(505806),
    d = n(985018),
    c = n(969891);
let u = function(e) {
    let {
        title: t,
        className: n,
        color: a,
        animate: u,
        getHistoricalTotalBytes: A
    } = e;
    return (0, i.jsx)(o.A, {
        getHistoricalTotalBytes: A,
        children: (e, o, A) => {
            var _;
            return (0, i.jsx)("div", {
                className: r()(c.dm, n),
                children: (0, i.jsxs)(l.A, {
                    align: l.A.Align.CENTER,
                    children: [(0, i.jsxs)(l.A, {
                        className: c.Qq,
                        direction: l.A.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: c.DD,
                            children: t
                        }), (0, i.jsx)("div", {
                            className: c.TS,
                            children: (_ = e[e.length - 1] / o * 1e3) > 1e3 ? d.intl.formatToPlainString(d.t["WU+gTX"], {
                                size: Math.round(_ / 1e3)
                            }) : d.intl.formatToPlainString(d.t.wnF6TH, {
                                size: Math.round(_)
                            })
                        })]
                    }), (0, i.jsx)("div", {
                        className: c.MQ,
                        children: (0, i.jsx)(s.A, {
                            data: e,
                            maxValue: Math.max(Math.max.apply(null, e), 1e3),
                            className: c.CD,
                            updateInterval: o,
                            color: a,
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