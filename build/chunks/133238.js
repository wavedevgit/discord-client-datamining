/** chunk id: 133238, original params: e,n,t (module,exports,require) **/
t.d(n, {
    m: () => O,
    y: () => h
}), t(896048);
var r = t(627968);
t(64700);
var i = t(735438),
    a = t.n(i),
    c = t(311907),
    l = t(397927),
    o = t(808728),
    s = t(181079),
    u = t(422258),
    d = t(93055),
    b = t(616075),
    f = t(652215),
    A = t(985018);

function p(e, n) {
    return e.type === f.rbe.GROUP_DM ? n ? A.intl.string(A.t["0BWmSM"]) : A.intl.string(A.t.uuVTOK) : e.type === f.rbe.DM ? n ? A.intl.string(A.t["2wfKGo"]) : A.intl.string(A.t.wPbAse) : n ? A.intl.string(A.t.Bou7lT) : A.intl.string(A.t["4wcdE/"])
}

function O(e) {
    let n = (0, c.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        {
            isFavoritesPerk: t
        } = (0, b.l)("58e21a_1"),
        {
            notifyFavoriteAdded: i
        } = (0, d.CJ)();
    if (!(0, d.pe)(e)) return null;
    let [
        [s], A
    ] = a().partition(n, e => "null" === e.channel.id);

    function O(n) {
        i(), (0, u.Jz)(e.id, n)
    }
    return 0 === A.length ? (0, r.jsx)(l.Drp, {
        id: "favorite-channel",
        label: p(e, !1),
        action: () => O(null)
    }) : (0, r.jsxs)(l.Drp, {
        id: "favorite-channel",
        label: p(e, !1),
        action: () => O(null),
        children: [t && (0, r.jsx)(l.rXV, {
            children: (0, r.jsx)(l.Drp, {
                id: "favorite-".concat(s.channel.id),
                label: s.channel.name,
                action: () => O("null" === s.channel.id ? null : s.channel.id)
            }, s.channel.id)
        }), (0, r.jsx)(l.rXV, {
            children: A.map(e => (0, r.jsx)(l.Drp, {
                id: "favorite-".concat(e.channel.id),
                label: e.channel.name,
                action: () => O(e.channel.id)
            }, e.channel.id))
        })]
    })
}

function h(e) {
    let n = (0, c.bG)([s.A], () => s.A.isFavorite(e.id));
    return __OVERLAY__ || !n ? null : (0, r.jsx)(l.Drp, {
        id: "favorite-channel",
        label: p(e, !0),
        color: "danger",
        action: () => e.type === f.rbe.GUILD_CATEGORY ? (0, l.mMO)(async () => {
            let {
                default: n
            } = await t.e("52210").then(t.bind(t, 862377));
            return t => {
                var i, a;
                return (0, r.jsx)(n, (i = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.forEach(function(n) {
                            var r;
                            r = t[n], n in e ? Object.defineProperty(e, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[n] = r
                        })
                    }
                    return e
                }({}, t), a = a = {
                    onConfirm: () => {
                        t.onClose(), (0, u.i_)(e.id)
                    },
                    channel: e
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, r)
                    }
                    return t
                })(Object(a)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                }), i))
            }
        }) : (0, u.i_)(e.id)
    })
}