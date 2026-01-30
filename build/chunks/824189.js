/** chunk id: 824189, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(397927),
    l = n(975571),
    s = n(942405),
    a = n(652215),
    o = n(985018);

function c() {
    (0, s.sL)("overlay-settings")
}

function d(e) {
    let {
        className: t,
        game: n
    } = e;
    return (0, s.NP)() && null != n && n.elevated ? (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.po8, {
            messageType: i.YCn.WARNING,
            action: (0, r.jsx)(i.Button, {
                variant: "secondary",
                size: "sm",
                text: o.intl.string(o.t["1iI46O"]),
                onClick: c
            }),
            children: o.intl.format(o.t["LJzl+0"], {
                helpCenterLink: l.A.getArticleURL(a.MVz.SYSTEM_SERVICE)
            })
        })
    }) : null
}