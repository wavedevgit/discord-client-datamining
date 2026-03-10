/** chunk id: 823991 params = (module,exports,require) **/
t.d(n, {
    A: () => c
});
var a = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    o = t(397927),
    l = t(985018),
    s = t(928103);

function c(e) {
    let {
        guild: n,
        speakers: t,
        speakerCount: i,
        className: c
    } = e, _ = t.slice(0, 5), d = _.map(e => (0, a.jsxs)("div", {
        className: s.dq,
        children: [(0, a.jsx)(o.euF, {
            src: e?.user?.getAvatarURL(n.id, 20),
            size: o._3J.SIZE_20,
            className: s.my,
            "aria-label": `${e?.userNick}-avatar`
        }), (0, a.jsx)("div", {
            className: s.CU,
            children: (0, a.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: s.br,
                children: e?.userNick
            })
        })]
    }, e?.user?.id)), u = i - _.length;
    return (0, a.jsxs)("div", {
        className: r()(s.Vg, c),
        children: [d, u > 0 && (0, a.jsxs)("div", {
            className: s.dq,
            children: [(0, a.jsx)("div", {
                className: s.Ko,
                children: (0, a.jsx)(o.cNw, {
                    size: "custom",
                    color: "currentColor",
                    height: 12
                })
            }), (0, a.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: s.br,
                children: l.intl.format(l.t["185ggO"], {
                    count: u
                })
            })]
        })]
    })
}