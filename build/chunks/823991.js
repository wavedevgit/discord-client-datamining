/** chunk id: 823991 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var a = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    c = t(397927),
    l = t(985018),
    o = t(171097);

function _(e) {
    let {
        guild: n,
        speakers: t,
        speakerCount: i,
        className: _
    } = e, s = t.slice(0, 5), d = s.map(e => (0, a.jsxs)("div", {
        className: o.dq,
        children: [(0, a.jsx)(c.euF, {
            src: e?.user?.getAvatarURL(n.id, 20),
            size: c._3J.SIZE_20,
            className: o.my,
            "aria-label": `${e?.userNick}-avatar`
        }), (0, a.jsx)("div", {
            className: o.CU,
            children: (0, a.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: o.br,
                children: e?.userNick
            })
        })]
    }, e?.user?.id)), u = i - s.length;
    return (0, a.jsxs)("div", {
        className: r()(o.Vg, _),
        children: [d, u > 0 && (0, a.jsxs)("div", {
            className: o.dq,
            children: [(0, a.jsx)("div", {
                className: o.Ko,
                children: (0, a.jsx)(c.cNw, {
                    size: "custom",
                    color: "currentColor",
                    height: 12
                })
            }), (0, a.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: o.br,
                children: l.intl.format(l.t["185ggO"], {
                    count: u
                })
            })]
        })]
    })
}