/** chunk id: 779662 params = (module,exports,require) **/
E.d(e, {
    default: () => d
});
var _ = E(627968),
    a = E(64700),
    n = E(33851),
    r = E.n(n),
    s = E(417597),
    i = E(397927),
    l = E(70738),
    u = E(266047),
    R = E(221950),
    c = E(652215),
    A = E(985018);
let D = [l.mF.ORDER_BY_GUILD_JOINED_AT_DESC, l.mF.ORDER_BY_GUILD_JOINED_AT_ASC, l.mF.ORDER_BY_USER_ID_DESC, l.mF.ORDER_BY_USER_ID_ASC];

function d(t) {
    let {
        guildId: e,
        onClose: E
    } = t, n = (0, s.bG)([u.A], () => u.A.getSearchStateByGuildId(e), [e], r()), d = a.useCallback(t => {
        (0, R.Ld)(e, {
            ...n,
            selectedSort: t
        })
    }, [e, n]);
    return (0, _.jsx)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "members-table-sort-menu",
        onClose: () => {
            E?.()
        },
        "aria-label": A.intl.string(A.t["u/7Rdc"]),
        onSelect: c.tEg,
        children: (0, _.jsx)(i.rXV, {
            children: D.map(t => {
                var e;
                let E = function(t) {
                    switch (t) {
                        case l.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
                            return A.intl.string(A.t.V7zCwB);
                        case l.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
                            return A.intl.string(A.t.l2Zaet);
                        case l.mF.ORDER_BY_USER_ID_DESC:
                            return A.intl.string(A.t.xMA6RG);
                        case l.mF.ORDER_BY_USER_ID_ASC:
                            return A.intl.string(A.t.bUKkZx);
                        default:
                            return null
                    }
                }(t);
                return null != E && (0, _.jsx)(i.iDA, {
                    id: `members-table-sort-${t}`,
                    label: E,
                    checked: (e = n.selectedSort) === l.mF.ORDER_BY_UNSPECIFIED || null == e ? t === l.mF.ORDER_BY_GUILD_JOINED_AT_DESC : t === e,
                    disabled: !1,
                    action: () => d(t),
                    group: "members-table-sort"
                }, `members-table-sort-${t}`)
            })
        })
    })
}