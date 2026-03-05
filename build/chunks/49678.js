/** chunk id: 49678 params = (module,exports,require) **/
a.d(e, {
    MessageReminderEditMenu: () => c,
    S: () => o
}), a(321073);
var r = a(627968),
    n = a(64700),
    d = a(397927),
    i = a(442433),
    s = a(164684),
    l = a(181504),
    u = a(985018);

function o(t) {
    let {
        createReminder: e
    } = t, i = n.useCallback(() => {
        (0, d.mMO)(async () => {
            let {
                default: t
            } = await a.e("49208").then(a.bind(a, 148216));
            return a => (0, r.jsx)(t, {
                ...a,
                createReminder: e
            })
        })
    }, [e]);
    return n.useMemo(() => {
        let t = l.b.map(t => {
            let {
                getDueAt: a,
                getLabel: n
            } = t;
            return (0, r.jsx)(d.Drp, {
                id: `create-reminder-${n()}`,
                label: n(),
                action: () => e(a())
            }, `create-reminder-${n()}`)
        });
        return t.push((0, r.jsx)(d.Drp, {
            id: "create-reminder-custom",
            label: u.intl.string(u.t.OLA8Zi),
            action: i
        }, "custom")), t
    }, [e, i])
}

function c(t) {
    let {
        message: e,
        label: a
    } = t, n = o({
        createReminder: t => (0, s.Y)({
            channelId: e.channel_id,
            messageId: e.id,
            dueAt: t
        })
    });
    return (0, r.jsx)(d.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: i.Z_,
        "aria-label": u.intl.string(u.t.mJ3P0N),
        onSelect: () => null,
        children: (0, r.jsx)(d.rXV, {
            label: a,
            children: n
        })
    })
}