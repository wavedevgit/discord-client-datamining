/** Chunk was on 64935 **/
/** chunk id: 178910, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => c,
    y: () => u
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(104171),
    a = n(652215),
    s = n(985018),
    o = n(958505);

function c(e) {
    let {
        activityUsers: t,
        guildId: n,
        activityText: a
    } = e;
    return (0, r.jsxs)("div", {
        className: o.i,
        children: [(0, r.jsx)(l.Ay, {
            guildId: n,
            users: t,
            max: 6,
            size: l.DN.SIZE_16
        }), (0, r.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "none",
            children: a
        })]
    })
}

function u(e) {
    let {
        activity: t,
        activityUsersCount: n
    } = e;
    switch (null == t ? void 0 : t.type) {
        case a.$pd.STREAMING:
            return {
                text: s.intl.formatToPlainString(s.t.tyCw2q, {
                    count: n
                }), Icon: i.ofK
            };
        case a.$pd.LISTENING:
            return {
                text: s.intl.formatToPlainString(s.t["2l8yka"], {
                    count: n
                }), Icon: i.T7G
            };
        default:
            return {
                text: s.intl.formatToPlainString(s.t.yJj035, {
                    count: n
                }), Icon: i._xR
            }
    }
}