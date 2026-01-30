/** chunk id: 950198, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Jq: () => u,
    mP: () => d,
    mw: () => c
});
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    o = r(573648),
    i = r(652215),
    s = r(955964);

function c(e) {
    return null != e && Object.values(i.fg2).includes(e) ? e : null
}

function d(e) {
    let {
        children: t,
        platformType: r
    } = e, a = o.A.get(r);
    return (0, n.jsx)("div", {
        className: s.uX,
        children: (0, n.jsxs)("div", {
            children: [(0, n.jsx)(u, {
                platform: a
            }), t]
        })
    })
}

function u(e) {
    let {
        platform: t,
        className: r
    } = e;
    return (0, n.jsxs)("div", {
        className: l()(s.ry, r),
        children: [(0, n.jsx)("div", {
            className: l()(s.wm, s.Sn)
        }), (0, n.jsx)("div", {
            className: s.mM
        }), (0, n.jsx)("div", {
            className: s.wm,
            style: {
                backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")')
            }
        })]
    })
}