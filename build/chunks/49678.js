/** chunk id: 49678, original params: e,t,r (module,exports,require) **/
r.d(t, {
    MessageReminderEditMenu: () => d,
    S: () => u
}), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(397927),
    o = r(442433),
    c = r(164684),
    s = r(181504),
    l = r(985018);

function u(e) {
    let {
        createReminder: t
    } = e, o = a.useCallback(() => {
        (0, i.mMO)(async () => {
            let {
                default: e
            } = await r.e("49208").then(r.bind(r, 148216));
            return r => {
                var a, i;
                return (0, n.jsx)(e, (a = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n;
                            n = r[t], t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        })
                    }
                    return e
                }({}, r), i = i = {
                    createReminder: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
                }), a))
            }
        })
    }, [t]);
    return a.useMemo(() => {
        let e = s.b.map(e => {
            let {
                getDueAt: r,
                getLabel: a
            } = e;
            return (0, n.jsx)(i.Drp, {
                id: "create-reminder-".concat(a()),
                label: a(),
                action: () => t(r())
            }, "create-reminder-".concat(a()))
        });
        return e.push((0, n.jsx)(i.Drp, {
            id: "create-reminder-custom",
            label: l.intl.string(l.t.OLA8Zi),
            action: o
        }, "custom")), e
    }, [t, o])
}

function d(e) {
    let {
        message: t,
        label: r
    } = e, a = u({
        createReminder: e => (0, c.Y)({
            channelId: t.channel_id,
            messageId: t.id,
            dueAt: e
        })
    });
    return (0, n.jsx)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "message-reminder-create",
        onClose: o.Z_,
        "aria-label": l.intl.string(l.t.mJ3P0N),
        onSelect: () => null,
        children: (0, n.jsx)(i.rXV, {
            label: r,
            children: a
        })
    })
}