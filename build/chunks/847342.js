/** chunk id: 847342 params = (module,exports,require) **/
n.d(e, {
    default: () => p
});
var i = n(627968);
n(64700);
var r = n(621466),
    s = n(397927),
    l = n(442433),
    a = n(50268),
    o = n(373963),
    c = n(777933),
    d = n(915193),
    g = n(345254),
    h = n(483768),
    A = n(20883),
    m = n(979766),
    u = n(985018);

function p(t) {
    let e, n, p, {
            channel: E,
            message: f,
            target: N,
            attachment: I,
            onSelect: _
        } = t,
        x = N;
    if (null != I) n = e = I.url;
    else
        for (;
            (0, r.vq)(x);)(0, r.vq)(x, HTMLImageElement) && null != x.src && (n = x.src), (0, r.vq)(x, HTMLAnchorElement) && null != x.href && (e = x.href, p = x.textContent), x = x.parentNode;
    let C = document.getSelection()?.toString(),
        S = (0, o.A)(C),
        v = (0, d.A)(C),
        b = (0, m.A)(f, E),
        M = (0, A.A)(f, E),
        T = (0, g.A)(f, E),
        j = (0, h.A)(f, E),
        P = (0, c.A)(e ?? n, p),
        D = (0, a.A)({
            id: f.id,
            label: u.intl.string(u.t.zBoHlf),
            shiftId: `${f.channel_id}-${f.id}`
        }),
        L = (0, a.A)({
            id: f.author.id,
            label: u.intl.string(u.t.Muw4wm)
        });
    return (0, i.jsxs)(s.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message",
        onClose: l.Z_,
        "aria-label": u.intl.string(u.t.ChPNkN),
        onSelect: _,
        children: [(0, i.jsx)(s.rXV, {
            children: S
        }), (0, i.jsx)(s.rXV, {
            children: v
        }), (0, i.jsxs)(s.rXV, {
            children: [b, M, T, j]
        }), (0, i.jsx)(s.rXV, {
            children: P
        }), (0, i.jsxs)(s.rXV, {
            children: [D, L]
        })]
    })
}