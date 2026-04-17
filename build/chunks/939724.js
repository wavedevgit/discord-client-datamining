/** chunk id: 939724 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(989349),
    l = n.n(s),
    o = n(397927),
    c = n(496431),
    d = n(985018),
    u = n(116689);
let _ = e => {
    let {
        expiresAt: t,
        className: n
    } = e, r = (0, c.A)(l()(t).toDate(), 1e3);
    if (null == r) return null;
    let {
        days: s,
        hours: _,
        minutes: m,
        seconds: p
    } = r, A = [{
        unitValue: s,
        unitType: "days"
    }, {
        unitValue: _,
        unitType: "hours"
    }, {
        unitValue: m,
        unitType: "minutes"
    }, {
        unitValue: p,
        unitType: "seconds"
    }];
    return (0, i.jsxs)("div", {
        className: a()(u.Xl, n),
        children: [(0, i.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: d.intl.string(d.t["/ARFVE"])
        }), (0, i.jsx)("div", {
            className: u.$R,
            children: A.map((e, t) => (function(e, t) {
                let n, [r, a] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: u.bh,
                        children: [(0, i.jsxs)("div", {
                            className: u.kB,
                            children: [(0, i.jsx)("div", {
                                className: u.B2,
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: r
                                })
                            }), (0, i.jsx)("div", {
                                className: u.B2,
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: a
                                })
                            })]
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-xs/semibold",
                            color: "text-strong",
                            children: function(e) {
                                switch (e) {
                                    case "days":
                                        return d.intl.string(d.t.ixASa2);
                                    case "hours":
                                        return d.intl.string(d.t["8sNvNn"]);
                                    case "minutes":
                                        return d.intl.string(d.t["Gv6kP/"]);
                                    case "seconds":
                                        return d.intl.string(d.t.JhaiLW);
                                    default:
                                        return ""
                                }
                            }(e.unitType)
                        })]
                    }, e.unitType), !t && (0, i.jsx)(o.Text, {
                        className: u.cV,
                        variant: "text-lg/normal",
                        color: "text-strong",
                        children: ":"
                    })]
                })
            })(e, t === A.length - 1))
        })]
    })
}