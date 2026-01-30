/** chunk id: 283354, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => p
});
var r = n(627968),
    l = n(64700),
    i = n(314116),
    s = n(397927),
    a = n(442433),
    o = n(50268),
    c = n(928658),
    u = n(208882),
    d = n(352123),
    h = n(985018);

function p(e) {
    let {
        entry: t,
        onSelect: p,
        closePopout: g,
        hideEditButton: f = !1
    } = e, {
        isEntryAdmin: m,
        canEdit: b,
        canRemove: A
    } = (0, d.A)(t), y = (0, o.A)({
        id: t.guildId,
        label: h.intl.string(h.t["94lLD7"]),
        onSuccess: g
    });
    l.useEffect(() => {
        b || A || null != y || (0, a.Z_)()
    });
    let O = () => {
        u.ZM(t.channelId, t.guildId)
    };

    function _() {
        (0, a.Z_)(), null == g || g()
    }
    return (0, r.jsxs)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-entry-context",
        onClose: _,
        "aria-label": h.intl.string(h.t.HpQykc),
        onSelect: p,
        children: [(0, r.jsxs)(s.rXV, {
            children: [b && !f ? (0, r.jsx)(s.Drp, {
                id: "update-entry",
                label: h.intl.string(h.t.XnuOvN),
                action: function() {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("88869").then(n.bind(n, 201700));
                        return n => {
                            var l, i;
                            return (0, r.jsx)(e, (l = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        var r;
                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r
                                    })
                                }
                                return e
                            }({}, n), i = i = {
                                entry: t
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(i)).forEach(function(e) {
                                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                            }), l))
                        }
                    }), _()
                },
                leadingAccessory: {
                    type: "icon",
                    icon: s.R2l
                }
            }) : null, A ? (0, r.jsx)(s.Drp, {
                id: "remove-from-hub",
                label: h.intl.string(h.t.KUxYWH),
                action: function() {
                    (0, i.A)({
                        title: h.intl.string(h.t.KUxYWH),
                        subtitle: h.intl.format(h.t["/5y0uV"], {
                            guildName: t.name
                        }),
                        confirmText: h.intl.string(h.t.N86XcP),
                        onConfirm: O
                    }), _()
                },
                color: "danger",
                leadingAccessory: {
                    type: "icon",
                    icon: s.ucK
                }
            }) : null, m ? null : (0, r.jsx)(s.Drp, {
                id: "report-server-listing",
                label: h.intl.string(h.t.Aen9eh),
                action: function() {
                    null != t && ((0, c.sJ)(t), _())
                },
                icon: s.iFK,
                leadingAccessory: {
                    type: "icon",
                    icon: s.iFK
                },
                color: "danger"
            })]
        }), (0, r.jsx)(s.rXV, {
            children: y
        })]
    })
}