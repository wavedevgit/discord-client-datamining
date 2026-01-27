/** Chunk was on 20941 **/
/** chunk id: 155286, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x,
    e: () => y
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(998304),
    m = n(854987),
    f = n(40333),
    p = n(398225),
    h = n(532294),
    b = n(79020);
let g = {
    [h.P7.WELCOME]: "Entry",
    [h.P7.MESSAGES]: "Messages",
    [h.P7.EMOJIS]: "Emojis",
    [h.P7.VOICE]: "Voice",
    [h.P7.GUILDS]: "Servers",
    [h.P7.FRIENDS]: "Friends",
    [h.P7.GAMING]: "Games",
    [h.P7.QUESTS]: "Quests",
    [h.P7.END]: "Entry"
};

function x(e) {
    let {
        slide: t,
        className: n
    } = e, a = l.useContext(m.P), p = (0, f.A)((0, c.rdh)(a.primaryColor).hex()), h = (0, d.j5)(p), x = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsx)("div", {
        className: i()(b.k, n),
        children: (0, r.jsx)(s.UR3, {
            artboard: g[t],
            dataBinding: {
                iconColor: {
                    r: h.r,
                    g: h.g,
                    b: h.b,
                    a: 255 * h.a
                },
                reducedMotion: x
            },
            fit: "layout",
            withReducedMotion: "short-loop"
        })
    })
}

function y(e) {
    let {
        slide: t,
        className: n
    } = e, l = (0, p.vy)();
    return (0, r.jsx)(p.vw, {
        spring: l,
        children: (0, r.jsx)(x, {
            slide: t,
            className: n
        })
    })
}