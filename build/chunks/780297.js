/** chunk id: 780297 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968);
l(64700);
var n = l(503698),
    i = l.n(n),
    a = l(567243),
    s = l(644119),
    o = l(272984),
    d = l(560856);

function c(e) {
    let {
        className: t,
        embed: {
            url: l
        }
    } = e;
    if (null == l) return null;
    let n = null,
        c = null;
    try {
        let e = a.parse(l.replace(/intl-[^/]+\//, ""), !0);
        n = e.host, c = e.pathname
    } catch (e) {
        return null
    }
    if (!(0, s.b)(n) || null == c) return null;
    let u = c.split("/"),
        h = null != u[1] ? u[1].toLowerCase() : null,
        m = null != u[3] ? u[3].toLowerCase() : null,
        p = u[4];
    if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(h ?? "") || "user" === h && "playlist" !== m) return null;
    "user" === h && "playlist" === m && null != p && (c = `/playlist/${p}`);
    let _ = 352;
    return "track" === h ? _ = 80 : ("episode" === h || "show" === h) && (_ = 232), (0, r.jsx)("iframe", {
        className: i()(d.IL, t),
        src: o.RQ.EMBED(c),
        style: {
            maxWidth: 400,
            minWidth: 300,
            width: "100%",
            height: _
        },
        frameBorder: 0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
        allow: "clipboard-write"
    })
}