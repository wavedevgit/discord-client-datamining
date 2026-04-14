/** chunk id: 124786 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968);
l(64700);
var n = l(503698),
    i = l.n(n),
    a = l(567243),
    s = l(560856);
let o = RegExp("^music\\.amazon\\.(?:com|co\\.uk|de|co\\.jp|es|fr|it|com\\.au|in|ca|com\\.mx|com\\.br)");

function d(e) {
    let t = null,
        l = null,
        r = null;
    try {
        t = (r = a.parse(e, !0)).host, l = r.pathname
    } catch (e) {
        return null
    }
    return null != r && o.test(t ?? "") && null != l ? r : null
}

function c(e) {
    let {
        className: t,
        embed: {
            url: l,
            thumbnail: n
        }
    } = e;
    if (null == l || null == n) return null;
    let a = d(l);
    if (null == a) return null;
    let o = a.query.iframe_url;
    if (null == o || Array.isArray(o) || null == d(o)) return null;
    let {
        width: c,
        height: u
    } = n, h = c, m = u;
    return (c > 500 || u > 400) && (c > u ? (h = 500, m = 500 * u / c) : (h = 400 * c / u, m = 400)), (0, r.jsx)("iframe", {
        className: i()(s.FS, t),
        src: o,
        style: {
            width: h,
            height: m
        },
        frameBorder: 0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    })
}