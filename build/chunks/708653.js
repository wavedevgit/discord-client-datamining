/** chunk id: 708653 params = (module,exports,require) **/
n.d(t, {
    $X: () => S,
    As: () => _,
    Ay: () => b
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(95701),
    d = n(961350),
    u = n(576705),
    s = n(994500),
    o = n(996439),
    c = n(810412),
    A = n(914853),
    E = n(589051),
    f = n(509295),
    g = n(406595),
    v = n(652215),
    h = n(499214),
    I = n(985018);

function N(e) {
    return e ? I.intl.string(I.t.Bou7lT) : I.intl.string(I.t["4wcdE/"])
}

function y(e) {
    return e ? I.intl.string(h.default.Xr8XHk) : I.intl.string(h.default.w1MU8Y)
}

function M(e, t, n) {
    let {
        hasFriendList: h
    } = (0, E.M8)("useOverlayFavoritesToggleMenuItems"), I = "CHANNEL" === t.kind ? t.channel.id : t.userId, M = function(e, t) {
        let [n] = (0, i.bG)([g.A], () => g.A.isFavorite(e, t), [e, t], o.D);
        return n
    }(e, I), S = (0, i.bG)([u.A, s.A, d.default], () => {
        switch (t.kind) {
            case "CHANNEL": {
                let {
                    channel: n
                } = t, r = n.isDM() || n.isMultiUserDM() || n.isPrivate();
                switch (!0) {
                    case e === A.x.MESSAGES && r:
                        return !0;
                    case e === A.x.MESSAGES && (0, a.ke)(n.type):
                        return u.A.can(v.xBc.READ_MESSAGE_HISTORY, n);
                    case e === A.x.VOICE && (0, a.ay)(n.type):
                        return (0, a.ay)(n.type) && u.A.can(v.xBc.VIEW_CHANNEL, n);
                    case e === A.x.FRIENDS:
                    default:
                        return !1
                }
            }
            case "USER": {
                if (e !== A.x.FRIENDS) return !1;
                let {
                    userId: n
                } = t;
                return d.default.getId() !== n && s.A.isFriend(n)
            }
            default:
                throw Error(`Unhandled overlay favorite target: ${String(t)}`)
        }
    });
    if (!h || !S) return {
        isFavorite: M,
        toggleFavoriteItem: null,
        addFavoriteItem: null,
        removeFavoriteItem: null
    };
    let _ = "CHANNEL" === t.kind ? N : y,
        b = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        x = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        D = (0, r.jsx)(l.Drp, {
            id: b,
            label: _(!1),
            action: () => {
                (0, f.k)({
                    tab: e,
                    targetId: I,
                    isFavorite: !0
                }), (0, c.YX)(n, {
                    type: c.Z5.FAVORITE,
                    value: c.IP.ADDED_TO_FAVORITES,
                    secondaryValue: e,
                    userId: e === A.x.FRIENDS ? I : void 0
                })
            }
        }),
        p = (0, r.jsx)(l.Drp, {
            id: x,
            label: _(!0),
            color: "danger",
            action: () => {
                (0, f.k)({
                    tab: e,
                    targetId: I,
                    isFavorite: !1
                }), (0, c.YX)(n, {
                    type: c.Z5.FAVORITE,
                    value: c.IP.REMOVED_FROM_FAVORITES,
                    secondaryValue: e,
                    userId: e === A.x.FRIENDS ? I : void 0
                })
            }
        });
    return {
        isFavorite: M,
        toggleFavoriteItem: M ? p : D,
        addFavoriteItem: D,
        removeFavoriteItem: p
    }
}

function S(e, t, n) {
    return M(e, {
        kind: "CHANNEL",
        channel: t
    }, n)
}

function _(e, t) {
    return M(A.x.FRIENDS, {
        kind: "USER",
        userId: e
    }, t)
}

function b(e, t, n) {
    return S(e, t, n)
}