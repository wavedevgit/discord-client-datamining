/** Chunk was on 78528 **/
/** chunk id: 118277, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(317097),
    o = n(397927),
    c = n(573435),
    u = n(143245);
let d = [1752220, 3066993, 3447003, 0x9b59b6, 0xe91e63, 0xf1c40f];

function p(e) {
    return (0, a.Hl)(d[function(e) {
        let t = 5381,
            n = 0;
        for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
        return t >>> 0
    }(e) % d.length])
}

function h(e) {
    var t;
    let {
        title: n,
        className: i,
        icon: a
    } = e, [d, h] = l.useState(p(n));
    return l.useEffect(() => {
        h(p(n))
    }, [n]), (0, r.jsxs)("div", {
        className: s()(u.iE, i),
        children: [(0, r.jsx)(c.Ay, {
            mask: c.Ay.Masks.STATUS_SCREENSHARE,
            width: 32,
            height: 32,
            children: null == a || 0 === a.length ? (0, r.jsx)("div", {
                className: u.Kk,
                style: {
                    backgroundColor: d
                },
                children: null != (t = n[0]) ? t : "?"
            }) : (0, r.jsx)("img", {
                alt: "",
                src: a,
                className: u.Kk
            })
        }), (0, r.jsx)(o.npA, {
            size: "md",
            color: "currentColor",
            className: u.qS
        })]
    })
}