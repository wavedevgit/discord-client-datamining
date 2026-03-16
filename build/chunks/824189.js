/** chunk id: 824189 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(397927),
    l = n(975571),
    a = n(942405),
    r = n(652215),
    o = n(985018);

function d() {
    (0, a.sL)("overlay-settings")
}

function c(e) {
    let {
        className: t,
        game: n
    } = e;
    return (0, a.NP)() && null != n && n.elevated ? (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(s.po8, {
            messageType: s.YCn.WARNING,
            action: (0, i.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: o.intl.string(o.t["1iI46O"]),
                onClick: d
            }),
            children: o.intl.format(o.t["LJzl+0"], {
                helpCenterLink: l.A.getArticleURL(r.MVz.SYSTEM_SERVICE)
            })
        })
    }) : null
}