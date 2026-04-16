/** chunk id: 178910 params = (module,exports,require) **/
n.d(t, {
    $: () => d,
    y: () => c
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(104171),
    s = n(652215),
    r = n(985018),
    o = n(695320);

function d(e) {
    let {
        activityUsers: t,
        guildId: n,
        activityText: s
    } = e;
    return (0, i.jsxs)("div", {
        className: o.i,
        children: [(0, i.jsx)(l.Ay, {
            guildId: n,
            users: t,
            max: 6,
            size: l.DN.SIZE_16
        }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "none",
            children: s
        })]
    })
}

function c(e) {
    let {
        activity: t,
        activityUsersCount: n
    } = e;
    switch (t?.type) {
        case s.$pd.STREAMING:
            return {
                text: r.intl.formatToPlainString(r.t.tyCw2q, {
                    count: n
                }), Icon: a.ofK
            };
        case s.$pd.LISTENING:
            return {
                text: r.intl.formatToPlainString(r.t["2l8yka"], {
                    count: n
                }), Icon: a.T7G
            };
        default:
            return {
                text: r.intl.formatToPlainString(r.t.yJj035, {
                    count: n
                }), Icon: a._xR
            }
    }
}