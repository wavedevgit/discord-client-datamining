/** chunk id: 823991 params = (module,exports,require) **/
t.d(n, {
    A: () => o
});
var l = t(627968);
t(64700);
var i = t(503698),
    s = t.n(i),
    a = t(397927),
    r = t(985018),
    c = t(171097);

function o(e) {
    let {
        guild: n,
        speakers: t,
        speakerCount: i,
        className: o
    } = e, d = t.slice(0, 5), u = d.map(e => (0, l.jsxs)("div", {
        className: c.dq,
        children: [(0, l.jsx)(a.euF, {
            src: e?.user?.getAvatarURL(n.id, 20),
            size: a._3J.SIZE_20,
            className: c.my,
            "aria-label": `${e?.userNick}-avatar`
        }), (0, l.jsx)("div", {
            className: c.CU,
            children: (0, l.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: c.br,
                children: e?.userNick
            })
        })]
    }, e?.user?.id)), h = i - d.length;
    return (0, l.jsxs)("div", {
        className: s()(c.Vg, o),
        children: [u, h > 0 && (0, l.jsxs)("div", {
            className: c.dq,
            children: [(0, l.jsx)("div", {
                className: c.Ko,
                children: (0, l.jsx)(a.cNw, {
                    size: "custom",
                    color: "currentColor",
                    height: 12
                })
            }), (0, l.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: c.br,
                children: r.intl.format(r.t["185ggO"], {
                    count: h
                })
            })]
        })]
    })
}