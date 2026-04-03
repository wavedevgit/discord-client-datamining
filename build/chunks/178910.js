/** chunk id: 178910 params = (module,exports,require) **/
n.d(t, {
    $: () => d,
    y: () => c
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(104171),
    s = n(652215),
    a = n(985018),
    o = n(582056);

function d(e) {
    let {
        activityUsers: t,
        guildId: n,
        activityText: s
    } = e;
    return (0, i.jsxs)("div", {
        className: o.i,
        children: [(0, i.jsx)(r.Ay, {
            guildId: n,
            users: t,
            max: 6,
            size: r.DN.SIZE_16
        }), (0, i.jsx)(l.Text, {
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
                text: a.intl.formatToPlainString(a.t.tyCw2q, {
                    count: n
                }), Icon: l.ofK
            };
        case s.$pd.LISTENING:
            return {
                text: a.intl.formatToPlainString(a.t["2l8yka"], {
                    count: n
                }), Icon: l.T7G
            };
        default:
            return {
                text: a.intl.formatToPlainString(a.t.yJj035, {
                    count: n
                }), Icon: l._xR
            }
    }
}