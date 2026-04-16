/** chunk id: 645376 params = (module,exports,require) **/
s.d(e, {
    A: () => l
});
var i = s(627968);
s(64700);
var n = s(397927),
    r = s(205173),
    a = s(476324);

function l(t) {
    let {
        user: e,
        size: s
    } = t, l = (0, n.KjH)(s), c = null != e ? e.getAvatarURL(null, l.size) : a;
    return (0, i.jsx)("div", {
        className: r.oJ,
        children: (0, i.jsx)("div", {
            className: r.my,
            style: {
                width: l.size,
                height: l.size
            },
            children: (0, i.jsx)(n.euF, {
                src: c,
                "aria-hidden": !0,
                size: s
            })
        })
    })
}