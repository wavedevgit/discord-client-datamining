/** chunk id: 478620 params = (module,exports,require) **/
l.d(t, {
    A: () => m
});
var r = l(627968);
l(64700);
var n = l(503698),
    i = l.n(n),
    a = l(567243),
    s = l(311907),
    o = l(582754),
    d = l(544028),
    c = l(684290),
    u = l(278727),
    h = l(472840);

function m(e) {
    let {
        className: t,
        embed: {
            url: l
        }
    } = e, n = (0, s.bG)([d.A], () => (0, o.Mw)(d.A.theme));
    if (null == l) return null;
    let m = null,
        p = null,
        _ = null;
    try {
        let e = a.parse(l, !0);
        m = e.host, p = e.pathname, _ = e.query.i ?? null, Array.isArray(_) && (_ = _[0])
    } catch (e) {
        return null
    }
    if (!(0, c.k)(m) || null == p) return null;
    let b = /^\/([a-z]{2}(?:-[a-z]{2})?)\//.test(p) ? 2 : 1,
        g = p.split("/"),
        x = g[b]?.toLowerCase();
    null != _ && (x = "song");
    let f = 450;
    return "song" === x ? f = 175 : "music-video" === x && (f = 371), p = p.substr(1), (0, r.jsx)("iframe", {
        className: i()(h.li, t),
        src: u.q.EMBED(p, n ? "dark" : "light", _),
        style: {
            maxWidth: 660,
            minWidth: 300,
            width: "100%",
            height: f
        },
        frameBorder: 0,
        sandbox: "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation",
        allow: "encrypted-media *; fullscreen *; clipboard-write"
    })
}