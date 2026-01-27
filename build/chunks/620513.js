/** Chunk was on 20941 **/
/** chunk id: 620513, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(747238), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(718468),
    o = n(338717),
    c = n(96782),
    u = n(302031),
    d = n(985018),
    m = n(71433);

function f(e) {
    let {
        file: t,
        name: n,
        size: a,
        spoiler: f
    } = e, p = l.useMemo(() => null != t.contentType && -1 !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [h, b] = l.useState(f), [g, x] = l.useState(f);
    f !== h && (b(f), x(f));
    let y = l.useMemo(() => () => (0, r.jsx)(c.zB, {
            mimeType: p,
            downloadURL: t.url,
            showDownload: !0,
            isVisualMediaType: !1
        }), [t, p]),
        v = e => (0, r.jsx)(s.A, {
            className: i()({
                [m.V]: e
            }),
            url: t.url,
            fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
            fileSize: null != a ? a : 0,
            renderAdjacentContent: y
        });
    return (0, r.jsx)("div", {
        className: m.O,
        children: f ? (0, r.jsx)(u.Ay, {
            type: u.Ay.Types.ATTACHMENT,
            reason: o.Oc.SPOILER,
            obscured: g,
            onToggleObscurity: () => x(e => !e),
            children: e => v(e)
        }) : v(!1)
    })
}