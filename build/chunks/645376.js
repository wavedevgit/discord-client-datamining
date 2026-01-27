/** Chunk was on 7803 **/
/** chunk id: 645376, original params: t,e,s (module,exports,require) **/
s.d(e, {
    A: () => r
});
var i = s(627968);
s(64700);
var n = s(397927),
    a = s(900722),
    l = s(476324);

function r(t) {
    let {
        user: e,
        size: s
    } = t, r = (0, n.KjH)(s), c = null != e ? e.getAvatarURL(null, r.size) : l;
    return (0, i.jsx)("div", {
        className: a.oJ,
        children: (0, i.jsx)("div", {
            className: a.my,
            style: {
                width: r.size,
                height: r.size
            },
            children: (0, i.jsx)(n.euF, {
                src: c,
                "aria-hidden": !0,
                size: s
            })
        })
    })
}