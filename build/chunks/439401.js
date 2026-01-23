/** Chunk was on web.js **/
/** chunk id: 439401, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    c = n(497685),
    u = n(996566),
    d = n(203982),
    f = n(652215),
    p = n(985018),
    _ = n(623665);
let h = i.memo(function(e) {
    let {
        width: t,
        height: n,
        src: a,
        gifSrc: h,
        url: m,
        format: g,
        className: E
    } = e, [y, b] = i.useState(!1), O = (0, u.km)((0, c.xo)(m)), v = O ? p.intl.string(p.t["5/NS74"]) : p.intl.string(p.t.nIH0v8), A = O ? l.Gg5 : l.yA2;
    i.useEffect(() => {
        if (!y) return;
        let e = setTimeout(() => {
            b(!1)
        }, 500);
        return () => clearTimeout(e)
    }, [y]);
    let I = e => {
        e.preventDefault(), e.stopPropagation(), b(!0), O ? (0, c.Tr)(m) : ((0, c.wg)({
            url: m,
            src: a,
            gifSrc: h,
            width: t,
            height: n,
            format: g
        }), d._.dispatch(f.jej.FAVORITE_GIF))
    };
    return (0, r.jsx)(o.m, {
        text: v,
        children: (0, r.jsx)(l.sqX, {
            "aria-label": v,
            className: s()(E, _.jj, {
                [_.wH]: O,
                [_.TV]: y
            }),
            onMouseDown: e => e.preventDefault(),
            onClick: I,
            onDoubleClick: e => e.preventDefault(),
            children: (0, r.jsx)(A, {
                color: "currentColor",
                className: _.Kk,
                size: "custom",
                width: 20,
                height: 20
            })
        })
    })
})