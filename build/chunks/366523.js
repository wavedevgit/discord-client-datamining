/** chunk id: 366523, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p,
    e: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(310784),
    o = n.n(a),
    s = n(503698),
    l = n.n(s),
    c = n(654107),
    u = n(871123),
    d = n(492075);
let f = "#000000";

function p(e) {
    let {
        cardImage: t,
        cardBackgroundImage: n,
        altText: a,
        containerClassName: s,
        backgroundImageClassName: u,
        foregroundImageClassName: p,
        shape: _
    } = e, [h, m] = (0, c.rh)(t.toString(), f), g = i.useMemo(() => {
        let e = o()(h).brighten(1.5).saturate(.3).alpha(.8).hex(),
            t = null != m ? m : o()(h).saturate(1.2).alpha(.9).hex();
        return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")")
    }, [h, m]);
    return (0, r.jsxs)("div", {
        className: l()(d.Ui, {
            [d.Ew]: "square" === _
        }, s),
        children: [(0, r.jsx)("div", {
            className: l()(d.GC, u),
            style: null != n ? {
                backgroundImage: "url(".concat(n.toString(), ")")
            } : {
                backgroundImage: g
            }
        }), (0, r.jsx)("img", {
            src: t.toString(),
            alt: a,
            draggable: !1,
            className: l()(d.LC, {
                [d.Ew]: "square" === _
            }, p)
        })]
    })
}

function _(e) {
    let {
        sku: t,
        containerClassName: n,
        backgroundImageClassName: i,
        foregroundImageClassName: a,
        shape: o
    } = e, s = (0, u.fq)(t), l = (0, u.xf)(t);
    return null == s ? null : (0, r.jsx)(p, {
        cardImage: s,
        cardBackgroundImage: l,
        altText: t.name,
        containerClassName: n,
        backgroundImageClassName: i,
        foregroundImageClassName: a,
        shape: o
    })
}