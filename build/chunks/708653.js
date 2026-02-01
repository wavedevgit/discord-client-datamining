/** chunk id: 708653, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $X: () => p,
    As: () => j,
    Ay: () => S
}), n(65821), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(95701),
    u = n(961350),
    o = n(576705),
    c = n(994500),
    d = n(996439),
    s = n(810412),
    f = n(914853),
    A = n(509295),
    b = n(406595),
    y = n(652215),
    g = n(895867),
    v = n(985018);

function E(e) {
    return e ? v.intl.string(v.t.Bou7lT) : v.intl.string(v.t["4wcdE/"])
}

function O(e) {
    return e ? v.intl.string(g.default.Xr8XHk) : v.intl.string(g.default.w1MU8Y)
}

function h(e, t, n) {
    let g = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        v = function(e, t) {
            let [n] = (0, i.bG)([b.A], () => b.A.isFavorite(e, t), [e, t], d.D);
            return n
        }(e, g);
    if (!(0, i.bG)([o.A, c.A, u.default], () => {
            switch (t.kind) {
                case "CHANNEL": {
                    let {
                        channel: n
                    } = t, r = n.isDM() || n.isMultiUserDM() || n.isPrivate();
                    switch (!0) {
                        case e === f.x.MESSAGES && r:
                            return !0;
                        case e === f.x.MESSAGES && (0, a.ke)(n.type):
                            return o.A.can(y.xBc.READ_MESSAGE_HISTORY, n);
                        case e === f.x.VOICE && (0, a.ay)(n.type):
                            return (0, a.ay)(n.type) && o.A.can(y.xBc.VIEW_CHANNEL, n);
                        case e === f.x.FRIENDS:
                        default:
                            return !1
                    }
                }
                case "USER": {
                    if (e !== f.x.FRIENDS) return !1;
                    let {
                        userId: n
                    } = t;
                    return u.default.getId() !== n && c.A.isFriend(n)
                }
                default:
                    throw Error("Unhandled overlay favorite target: ".concat(String(t)))
            }
        })) return {
        isFavorite: v,
        toggleFavoriteItem: null,
        addFavoriteItem: null,
        removeFavoriteItem: null
    };
    let h = "CHANNEL" === t.kind ? E : O,
        p = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        j = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        S = (0, r.jsx)(l.Drp, {
            id: p,
            label: h(!1),
            action: () => {
                (0, A.k)({
                    tab: e,
                    targetId: g,
                    isFavorite: !0
                }), (0, s.YX)(n, {
                    type: s.Z5.FAVORITE,
                    value: s.IP.ADDED_TO_FAVORITES,
                    secondaryValue: e,
                    userId: e === f.x.FRIENDS ? g : void 0
                })
            }
        }),
        I = (0, r.jsx)(l.Drp, {
            id: j,
            label: h(!0),
            color: "danger",
            action: () => {
                (0, A.k)({
                    tab: e,
                    targetId: g,
                    isFavorite: !1
                }), (0, s.YX)(n, {
                    type: s.Z5.FAVORITE,
                    value: s.IP.REMOVED_FROM_FAVORITES,
                    secondaryValue: e,
                    userId: e === f.x.FRIENDS ? g : void 0
                })
            }
        });
    return {
        isFavorite: v,
        toggleFavoriteItem: v ? I : S,
        addFavoriteItem: S,
        removeFavoriteItem: I
    }
}

function p(e, t, n) {
    return h(e, {
        kind: "CHANNEL",
        channel: t
    }, n)
}

function j(e, t) {
    return h(f.x.FRIENDS, {
        kind: "USER",
        userId: e
    }, t)
}

function S(e, t, n) {
    return p(e, t, n)
}