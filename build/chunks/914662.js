/** Chunk was on 77870 **/
/** chunk id: 914662, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(985018),
    s = n(135716);

function a(e) {
    let {
        onClose: t,
        guildName: n
    } = e;
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [(0, r.jsx)("div", {
            className: s.zc,
            children: (0, r.jsx)(l.gQi, {
                size: "custom",
                color: "currentColor",
                className: s.Kk,
                width: 20,
                height: 20
            })
        }), (0, r.jsxs)("div", {
            className: s.wx,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-md/semibold",
                className: s.TK,
                children: i.intl.string(i.t.LIIyeE)
            }), (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: i.intl.format(i.t["4/6vQh"], {
                    guildName: n
                })
            }), (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: s.x6,
                children: (0, r.jsx)(l.Button, {
                    variant: "primary",
                    text: i.intl.string(i.t.BddRzS),
                    onClick: t
                })
            })]
        })]
    })
}