/** chunk id: 779662, original params: t,e,_ (module,exports,require) **/
_.d(e, {
    default: () => m
});
var r = _(627968),
    l = _(64700),
    n = _(33851),
    s = _.n(n),
    a = _(417597),
    D = _(397927),
    i = _(70738),
    E = _(266047),
    R = _(221950),
    u = _(652215),
    c = _(985018);
let d = [i.mF.ORDER_BY_GUILD_JOINED_AT_DESC, i.mF.ORDER_BY_GUILD_JOINED_AT_ASC, i.mF.ORDER_BY_USER_ID_DESC, i.mF.ORDER_BY_USER_ID_ASC];

function m(t) {
    let {
        guildId: e,
        onClose: _
    } = t, n = (0, a.bG)([E.A], () => E.A.getSearchStateByGuildId(e), [e], s()), m = l.useCallback(t => {
        (0, R.Ld)(e, {
            ...n,
            selectedSort: t
        })
    }, [e, n]);
    return (0, r.jsx)(D.W1t, {
        "data-menu-migrated": !0,
        navId: "members-table-sort-menu",
        onClose: () => {
            _?.()
        },
        "aria-label": c.intl.string(c.t["u/7Rdc"]),
        onSelect: u.tEg,
        children: (0, r.jsx)(D.rXV, {
            children: d.map(t => {
                var e;
                let _ = function(t) {
                    switch (t) {
                        case i.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                            return c.intl.string(c.t.V7zCwB);
                        case i.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                            return c.intl.string(c.t.l2Zaet);
                        case i.mF.ORDER_BY_USER_ID_DESC:
                            return c.intl.string(c.t.xMA6RG);
                        case i.mF.ORDER_BY_USER_ID_ASC:
                            return c.intl.string(c.t.bUKkZx);
                        default:
                            return null
                    }
                }(t);
                return null != _ && (0, r.jsx)(D.iDA, {
                    id: `members-table-sort-${t}`,
                    label: _,
                    checked: (e = n.selectedSort) === i.mF.ORDER_BY_UNSPECIFIED || null == e ? t === i.mF.ORDER_BY_GUILD_JOINED_AT_DESC : t === e,
                    disabled: !1,
                    action: () => m(t),
                    group: "members-table-sort"
                }, `members-table-sort-${t}`)
            })
        })
    })
}