/** chunk id: 382807 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(123791),
    s = n(627363),
    o = n(985018);

function d(e) {
    let {
        applicationId: t,
        guildId: n
    } = e, {
        data: a
    } = (0, s.YY)(t);
    return null == a ? null : (0, i.jsx)(c, {
        app: a,
        guildId: n
    })
}

function c(e) {
    let {
        app: t,
        guildId: s
    } = e;
    (0, r.C)(t.id);
    let d = a.useCallback(() => {
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("33563"), n.e("7194")]).then(n.bind(n, 719847));
            return n => (0, i.jsx)(e, {
                appId: t.id,
                guildId: s,
                ...n
            })
        })
    }, [t, s]);
    return (0, i.jsx)(l.Button, {
        size: "sm",
        onClick: d,
        icon: l.Uzv,
        text: o.intl.format(o.t.XDRjs5, {
            appName: t.name
        })
    })
}