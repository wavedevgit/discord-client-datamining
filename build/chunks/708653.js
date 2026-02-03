/** chunk id: 708653, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $X: () => j,
    As: () => S,
    Ay: () => I
}), n(65821), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(95701),
    u = n(961350),
    o = n(576705),
    c = n(994500),
    s = n(996439),
    d = n(810412),
    f = n(914853),
    A = n(589051),
    b = n(509295),
    g = n(406595),
    y = n(652215),
    v = n(895867),
    E = n(985018);

function O(e) {
    return e ? E.intl.string(E.t.Bou7lT) : E.intl.string(E.t["4wcdE/"])
}

function h(e) {
    return e ? E.intl.string(v.default.Xr8XHk) : E.intl.string(v.default.w1MU8Y)
}

function p(e, t, n) {
    let {
        hasFriendList: v
    } = (0, A.M8)("useOverlayFavoritesToggleMenuItems"), E = "CHANNEL" === t.kind ? t.channel.id : t.userId, p = function(e, t) {
        let [n] = (0, i.bG)([g.A], () => g.A.isFavorite(e, t), [e, t], s.D);
        return n
    }(e, E), j = (0, i.bG)([o.A, c.A, u.default], () => {
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
    });
    if (!v || !j) return {
        isFavorite: p,
        toggleFavoriteItem: null,
        addFavoriteItem: null,
        removeFavoriteItem: null
    };
    let S = "CHANNEL" === t.kind ? O : h,
        I = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        N = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        m = (0, r.jsx)(l.Drp, {
            id: I,
            label: S(!1),
            action: () => {
                (0, b.k)({
                    tab: e,
                    targetId: E,
                    isFavorite: !0
                }), (0, d.YX)(n, {
                    type: d.Z5.FAVORITE,
                    value: d.IP.ADDED_TO_FAVORITES,
                    secondaryValue: e,
                    userId: e === f.x.FRIENDS ? E : void 0
                })
            }
        }),
        M = (0, r.jsx)(l.Drp, {
            id: N,
            label: S(!0),
            color: "danger",
            action: () => {
                (0, b.k)({
                    tab: e,
                    targetId: E,
                    isFavorite: !1
                }), (0, d.YX)(n, {
                    type: d.Z5.FAVORITE,
                    value: d.IP.REMOVED_FROM_FAVORITES,
                    secondaryValue: e,
                    userId: e === f.x.FRIENDS ? E : void 0
                })
            }
        });
    return {
        isFavorite: p,
        toggleFavoriteItem: p ? M : m,
        addFavoriteItem: m,
        removeFavoriteItem: M
    }
}

function j(e, t, n) {
    return p(e, {
        kind: "CHANNEL",
        channel: t
    }, n)
}

function S(e, t) {
    return p(f.x.FRIENDS, {
        kind: "USER",
        userId: e
    }, t)
}

function I(e, t, n) {
    return j(e, t, n)
}