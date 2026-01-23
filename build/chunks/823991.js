/** Chunk was on 96110 **/
/** chunk id: 823991, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => _
});
var a = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    l = t(397927),
    o = t(985018),
    c = t(928103);

function _(e) {
    let {
        guild: n,
        speakers: t,
        speakerCount: r,
        className: _
    } = e, s = t.slice(0, 5), d = s.map(e => {
        var t, r;
        return (0, a.jsxs)("div", {
            className: c.dq,
            children: [(0, a.jsx)(l.euF, {
                src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                size: l._3J.SIZE_20,
                className: c.my,
                "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
            }), (0, a.jsx)("div", {
                className: c.CU,
                children: (0, a.jsx)(l.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: c.br,
                    children: null == e ? void 0 : e.userNick
                })
            })]
        }, null == e || null == (r = e.user) ? void 0 : r.id)
    }), u = r - s.length;
    return (0, a.jsxs)("div", {
        className: i()(c.Vg, _),
        children: [d, u > 0 && (0, a.jsxs)("div", {
            className: c.dq,
            children: [(0, a.jsx)("div", {
                className: c.Ko,
                children: (0, a.jsx)(l.cNw, {
                    size: "custom",
                    color: "currentColor",
                    height: 12
                })
            }), (0, a.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: c.br,
                children: o.intl.format(o.t["185ggO"], {
                    count: u
                })
            })]
        })]
    })
}