/** chunk id: 620513, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(747238), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(718468),
    s = n(338717),
    c = n(96782),
    u = n(302031),
    d = n(985018),
    p = n(71433);

function m(e) {
    let {
        file: t,
        name: n,
        size: a,
        spoiler: m
    } = e, f = l.useMemo(() => null != t.contentType && -1 !== t.contentType.indexOf("/") ? t.contentType.split("/") : ["unknown", "unknown"], [t.contentType]), [O, b] = l.useState(m), [y, h] = l.useState(m);
    m !== O && (b(m), h(m));
    let j = l.useMemo(() => () => (0, r.jsx)(c.zB, {
            mimeType: f,
            downloadURL: t.url,
            showDownload: !0,
            isVisualMediaType: !1
        }), [t, f]),
        g = e => (0, r.jsx)(o.A, {
            className: i()({
                [p.V]: e
            }),
            url: t.url,
            fileName: null != n ? n : d.intl.string(d.t.GnuJ5u),
            fileSize: null != a ? a : 0,
            renderAdjacentContent: j
        });
    return (0, r.jsx)("div", {
        className: p.O,
        children: m ? (0, r.jsx)(u.Ay, {
            type: u.Ay.Types.ATTACHMENT,
            reason: s.Oc.SPOILER,
            obscured: y,
            onToggleObscurity: () => h(e => !e),
            children: e => g(e)
        }) : g(!1)
    })
}