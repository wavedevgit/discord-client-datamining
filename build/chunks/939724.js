/** chunk id: 939724 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(989349),
    r = n.n(a),
    o = n(397927),
    d = n(496431),
    c = n(985018),
    u = n(338422);
let _ = e => {
    let {
        expiresAt: t,
        className: n
    } = e, s = (0, d.A)(r()(t).toDate(), 1e3);
    if (null == s) return null;
    let {
        days: a,
        hours: _,
        minutes: g,
        seconds: A
    } = s, m = [{
        unitValue: a,
        unitType: "days"
    }, {
        unitValue: _,
        unitType: "hours"
    }, {
        unitValue: g,
        unitType: "minutes"
    }, {
        unitValue: A,
        unitType: "seconds"
    }];
    return (0, i.jsxs)("div", {
        className: l()(u.Xl, n),
        children: [(0, i.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "always-white",
            children: c.intl.string(c.t["/ARFVE"])
        }), (0, i.jsx)("div", {
            className: u.$R,
            children: m.map((e, t) => (function(e, t) {
                let n, [s, l] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: u.bh,
                        children: [(0, i.jsxs)("div", {
                            className: u.kB,
                            children: [(0, i.jsx)("div", {
                                className: u.B2,
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    children: s
                                })
                            }), (0, i.jsx)("div", {
                                className: u.B2,
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    children: l
                                })
                            })]
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: function(e) {
                                switch (e) {
                                    case "days":
                                        return c.intl.string(c.t.ixASa2);
                                    case "hours":
                                        return c.intl.string(c.t["8sNvNn"]);
                                    case "minutes":
                                        return c.intl.string(c.t["Gv6kP/"]);
                                    case "seconds":
                                        return c.intl.string(c.t.JhaiLW);
                                    default:
                                        return ""
                                }
                            }(e.unitType)
                        })]
                    }, e.unitType), !t && (0, i.jsx)(o.Text, {
                        className: u.cV,
                        variant: "text-lg/normal",
                        color: "always-white",
                        children: ":"
                    })]
                })
            })(e, t === m.length - 1))
        })]
    })
}