/** Chunk was on 86142 **/
/** chunk id: 163698, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(397927),
    a = n(854378),
    o = n(813516),
    c = n(524832),
    d = n(652215),
    u = n(985018),
    h = n(497039),
    p = n(473169);

function g(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("li", {
        className: h.Aw,
        children: (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t
        })
    })
}

function _(e) {
    let {
        setSlide: t,
        transitionTo: i
    } = e;
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a._V, {
            src: n(79418),
            className: s()(p.SX, p.Ot)
        }), (0, r.jsx)(a.hE, {
            className: p.QB,
            children: u.intl.string(u.t["8UcxI6"])
        }), (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            children: u.intl.string(u.t.O37hMl)
        }), (0, r.jsxs)(a.eB, {
            className: s()(p.SX, p.QX),
            children: [(0, r.jsx)(l.Text, {
                variant: "text-sm/normal"
            }), (0, r.jsxs)("ul", {
                className: h.qI,
                children: [(0, r.jsx)(g, {
                    children: u.intl.string(u.t.Gj1Zry)
                }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
                    children: u.intl.string(u.t["8C6t3B"])
                }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
                    children: u.intl.string(u.t.mToZMA)
                }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
                    children: u.intl.string(u.t.TPEvkc)
                }), (0, r.jsx)(o.A, {}), (0, r.jsx)(g, {
                    children: u.intl.string(u.t.H8Y1Ln)
                })]
            })]
        }), (0, r.jsxs)(l.ButtonGroup, {
            direction: "vertical",
            fullWidth: !0,
            className: h.UD,
            children: [(0, r.jsx)(l.Button, {
                text: u.intl.string(u.t.GgCRqR),
                onClick: () => t(c.k.PASSWORD)
            }), (0, r.jsx)(l.Button, {
                text: u.intl.string(u.t["B/yHcQ"]),
                variant: "secondary",
                onClick: () => i(d.BVt.LOGIN, {
                    source: "account_revert"
                })
            })]
        })]
    })
}