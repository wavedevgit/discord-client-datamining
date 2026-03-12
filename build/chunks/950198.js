/** chunk id: 950198 params = (module,exports,require) **/
r.d(t, {
    Jq: () => u,
    mP: () => c,
    mw: () => d
});
var a = r(627968);
r(64700);
var n = r(503698),
    s = r.n(n),
    i = r(573648),
    o = r(652215),
    l = r(248294);

function d(e) {
    return null != e && Object.values(o.fg2).includes(e) ? e : null
}

function c(e) {
    let {
        children: t,
        platformType: r
    } = e, n = i.A.get(r);
    return (0, a.jsx)("div", {
        className: l.uX,
        children: (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u, {
                platform: n
            }), t]
        })
    })
}

function u(e) {
    let {
        platform: t,
        className: r
    } = e;
    return (0, a.jsxs)("div", {
        className: s()(l.ry, r),
        children: [(0, a.jsx)("div", {
            className: s()(l.wm, l.Sn)
        }), (0, a.jsx)("div", {
            className: l.mM
        }), (0, a.jsx)("div", {
            className: l.wm,
            style: {
                backgroundImage: `url("${t.icon.whiteSVG}")`
            }
        })]
    })
}