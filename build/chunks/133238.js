/** chunk id: 133238, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => v,
    y: () => h
}), n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    l = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(808728),
    s = n(181079),
    u = n(422258),
    d = n(93055),
    f = n(616075),
    A = n(652215),
    p = n(985018);

function b(e, t) {
    return e.type === A.rbe.GROUP_DM ? t ? p.intl.string(p.t["0BWmSM"]) : p.intl.string(p.t.uuVTOK) : e.type === A.rbe.DM ? t ? p.intl.string(p.t["2wfKGo"]) : p.intl.string(p.t.wPbAse) : t ? p.intl.string(p.t.Bou7lT) : p.intl.string(p.t["4wcdE/"])
}

function v(e) {
    let t = (0, a.bG)([c.Ay], () => c.Ay.getChannels(A.YYv))[A.rbe.GUILD_CATEGORY],
        {
            isFavoritesPerk: n
        } = (0, f.l)("58e21a_1"),
        {
            notifyFavoriteAdded: i
        } = (0, d.CJ)();
    if (!(0, d.pe)(e)) return null;
    let [
        [s], p
    ] = l().partition(t, e => "null" === e.channel.id);

    function v(t) {
        i(), (0, u.Jz)(e.id, t)
    }
    return 0 === p.length ? (0, r.jsx)(o.Drp, {
        id: "favorite-channel",
        label: b(e, !1),
        action: () => v(null)
    }) : (0, r.jsxs)(o.Drp, {
        id: "favorite-channel",
        label: b(e, !1),
        action: () => v(null),
        children: [n && (0, r.jsx)(o.rXV, {
            children: (0, r.jsx)(o.Drp, {
                id: "favorite-".concat(s.channel.id),
                label: s.channel.name,
                action: () => v("null" === s.channel.id ? null : s.channel.id)
            }, s.channel.id)
        }), (0, r.jsx)(o.rXV, {
            children: p.map(e => (0, r.jsx)(o.Drp, {
                id: "favorite-".concat(e.channel.id),
                label: e.channel.name,
                action: () => v(e.channel.id)
            }, e.channel.id))
        })]
    })
}

function h(e) {
    let t = (0, a.bG)([s.A], () => s.A.isFavorite(e.id));
    return __OVERLAY__ || !t ? null : (0, r.jsx)(o.Drp, {
        id: "favorite-channel",
        label: b(e, !0),
        color: "danger",
        action: () => e.type === A.rbe.GUILD_CATEGORY ? (0, o.mMO)(async () => {
            let {
                default: t
            } = await n.e("52210").then(n.bind(n, 862377));
            return n => {
                var i, l;
                return (0, r.jsx)(t, (i = function(e) {
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
                }({}, n), l = l = {
                    onConfirm: () => {
                        n.onClose(), (0, u.i_)(e.id)
                    },
                    channel: e
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                }), i))
            }
        }) : (0, u.i_)(e.id)
    })
}