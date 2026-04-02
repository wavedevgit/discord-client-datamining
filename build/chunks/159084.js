/** chunk id: 159084 params = (module,exports,require) **/
n.d(t, {
    z: () => h
});
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(854378),
    r = n(10088),
    s = n(723702),
    o = n(652215),
    d = n(985018),
    c = n(776856);
let u = n(843020);

function A(e) {
    let {
        children: t
    } = e, n = (0, a.bG)([r.A], () => r.A.getHighestState());
    return (0, s.isDesktop)() || n !== o.fAW.OPENING ? (0, s.isDesktop)() || n !== o.fAW.OPEN ? t : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
            className: c.Lq,
            src: u,
            alt: ""
        }), (0, i.jsx)("div", {
            className: c.kL,
            children: (0, i.jsxs)(l.Ay, {
                children: [(0, i.jsx)(l.hE, {
                    className: c.Ns,
                    children: d.intl.string(d.t.csrAMJ)
                }), (0, i.jsx)(l.tK, {
                    children: d.intl.string(d.t.ghBJz9)
                })]
            })
        })]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
            className: c.Lq,
            src: u,
            alt: ""
        }), (0, i.jsx)("div", {
            className: c.kL,
            children: (0, i.jsxs)(l.Ay, {
                children: [(0, i.jsx)(l.hE, {
                    children: d.intl.string(d.t["Z+hCVU"])
                }), (0, i.jsx)(l.CK, {})]
            })
        })]
    })
}

function h(e) {
    function t(t) {
        return (0, i.jsx)(A, {
            children: (0, i.jsx)(e, {
                ...t
            }, "deeplink-wrapper")
        })
    }
    return t.displayName = `Deeplink(${e.displayName??e.name??"<Unknown>"})`, t
}