/** chunk id: 690595 params = (module,exports,require) **/
l.d(t, {
    A: () => u,
    o: () => c
});
var r = l(627968);
l(64700);
var n = l(503698),
    i = l.n(n),
    a = l(567243),
    s = l(985018),
    o = l(191704);
let d = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    c = ["PlayStation"];

function u(e) {
    let t = e.embed.url,
        l = e.embed.provider?.name;
    if (null == t || null == l) return null;
    let n = null;
    try {
        n = a.parse(t, !0)
    } catch (e) {
        return null
    }
    let c = ((e, t) => {
        let {
            host: l,
            pathname: r
        } = t, n = [];
        if (null != r && (n = r.split("/")), "PlayStation" === e) {
            let e;
            if (null == l || !d.includes(l) || 2 !== n.length) return null;
            let t = n[1];
            return {
                embedUrl: (e = s.intl.currentLocale, `https://${l}/embed/${t}?locale=${e}`),
                style: {
                    width: 400,
                    height: 300,
                    borderRadius: 6
                }
            }
        }
        return null
    })(l, n);
    return null == c ? null : (0, r.jsx)("iframe", {
        src: c.embedUrl,
        className: i()(o.u, e.className),
        style: c.style,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    })
}