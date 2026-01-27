/** Chunk was on 95336 **/
/** chunk id: 847342, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => m
});
var l = t(627968);
t(64700);
var i = t(621466),
    r = t(397927),
    s = t(442433),
    c = t(50268),
    d = t(373963),
    a = t(777933),
    o = t(826308),
    h = t(345254),
    u = t(483768),
    p = t(20883),
    _ = t(979766),
    f = t(985018);

function m(e) {
    var n;
    let t, m, A, {
            channel: b,
            message: g,
            target: x,
            attachment: v,
            onSelect: j
        } = e,
        k = x;
    if (null != v) m = t = v.url;
    else
        for (;
            (0, i.vq)(k);)(0, i.vq)(k, HTMLImageElement) && null != k.src && (m = k.src), (0, i.vq)(k, HTMLAnchorElement) && null != k.href && (t = k.href, A = k.textContent), k = k.parentNode;
    let V = null == (n = document.getSelection()) ? void 0 : n.toString(),
        C = (0, d.A)(V),
        X = (0, o.A)(V),
        w = (0, _.A)(g, b),
        N = (0, p.A)(g, b),
        q = (0, h.A)(g, b),
        H = (0, u.A)(g, b),
        I = (0, a.A)(null != t ? t : m, A),
        M = (0, c.A)({
            id: g.id,
            label: f.intl.string(f.t.zBoHlf),
            shiftId: "".concat(g.channel_id, "-").concat(g.id)
        }),
        S = (0, c.A)({
            id: g.author.id,
            label: f.intl.string(f.t.Muw4wm)
        });
    return (0, l.jsxs)(r.W1t, {
        "data-menu-mixed": !0,
        navId: "message",
        onClose: s.Z_,
        "aria-label": f.intl.string(f.t.ChPNkN),
        onSelect: j,
        children: [(0, l.jsx)(r.rXV, {
            children: C
        }), (0, l.jsx)(r.rXV, {
            children: X
        }), (0, l.jsxs)(r.rXV, {
            children: [w, N, q, H]
        }), (0, l.jsx)(r.rXV, {
            children: I
        }), (0, l.jsxs)(r.rXV, {
            children: [M, S]
        })]
    })
}