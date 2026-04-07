/** chunk id: 834425 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(729937),
    s = n(307600),
    a = n(998218);

function o(t) {
    let {
        activity: e,
        user: n,
        variant: o = "secondary",
        onAction: u,
        ...d
    } = t;
    if (e?.buttons == null || e.buttons.length < 1) return null;
    async function c(t, e, n) {
        try {
            let i = await (0, r.yb)(t, e);
            if (i.button_urls.length <= n) return;
            let l = i.button_urls[n];
            if ("string" != typeof l) return;
            let o = a.A.safeParseWithQuery(l);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, s.h)({
                href: a.A.format(o),
                trusted: !1
            })
        } catch (t) {}
    }
    return (0, i.jsx)(i.Fragment, {
        children: e.buttons.map((t, r) => (0, i.jsx)(l.Button, {
            text: t,
            variant: o,
            size: "sm",
            fullWidth: !0,
            onClick: () => {
                u?.(), c(e, n.id, r)
            },
            ...d
        }, `customButton-${r}`))
    })
}