/** chunk id: 847342, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => b
});
var l = n(627968);
n(64700);
var r = n(621466),
    i = n(397927),
    s = n(442433),
    a = n(50268),
    c = n(373963),
    d = n(777933),
    o = n(826308),
    u = n(345254),
    h = n(483768),
    m = n(20883),
    p = n(979766),
    x = n(985018);

function b(e) {
    var t;
    let n, b, v, {
            channel: _,
            message: f,
            target: g,
            attachment: A,
            onSelect: N
        } = e,
        j = g;
    if (null != A) b = n = A.url;
    else
        for (;
            (0, r.vq)(j);)(0, r.vq)(j, HTMLImageElement) && null != j.src && (b = j.src), (0, r.vq)(j, HTMLAnchorElement) && null != j.href && (n = j.href, v = j.textContent), j = j.parentNode;
    let C = null == (t = document.getSelection()) ? void 0 : t.toString(),
        k = (0, c.A)(C),
        I = (0, o.A)(C),
        T = (0, p.A)(f, _),
        V = (0, m.A)(f, _),
        w = (0, u.A)(f, _),
        L = (0, h.A)(f, _),
        X = (0, d.A)(null != n ? n : b, v),
        q = (0, a.A)({
            id: f.id,
            label: x.intl.string(x.t.zBoHlf),
            shiftId: "".concat(f.channel_id, "-").concat(f.id)
        }),
        y = (0, a.A)({
            id: f.author.id,
            label: x.intl.string(x.t.Muw4wm)
        });
    return (0, l.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: s.Z_,
        "aria-label": x.intl.string(x.t.ChPNkN),
        onSelect: N,
        children: [(0, l.jsx)(i.rXV, {
            children: k
        }), (0, l.jsx)(i.rXV, {
            children: I
        }), (0, l.jsxs)(i.rXV, {
            children: [T, V, w, L]
        }), (0, l.jsx)(i.rXV, {
            children: X
        }), (0, l.jsxs)(i.rXV, {
            children: [q, y]
        })]
    })
}