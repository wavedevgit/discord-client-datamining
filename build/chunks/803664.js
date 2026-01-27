/** Chunk was on web.js **/
/** chunk id: 803664, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(49229),
    l = n(327166),
    c = n(994500),
    u = n(287809),
    d = n(985018);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e) {
    let {
        user: t,
        location: f = "ContextMenu",
        onFriendRequestSent: _,
        onFriendRemove: h,
        appContext: m
    } = e, {
        id: g,
        username: E,
        bot: y
    } = t, b = (0, a.bG)([u.default], () => {
        var e;
        return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === g
    }, [g]), O = (0, l.D)(g), [v, A] = (0, a.yK)([c.A], () => [c.A.isFriend(g), c.A.isBlocked(g)], [g]), [I, S] = i.useState(!1);
    if (y || b) return null;

    function T() {
        (0, o.mMO)(async () => {
            let {
                ConfirmModal: e
            } = await Promise.resolve().then(n.bind(n, 158954));
            return t => (0, r.jsx)(e, p({
                title: d.intl.formatToPlainString(d.t.fPLvZd, {
                    name: E
                }),
                subtitle: d.intl.format(d.t.l5FFq6, {
                    name: E
                }),
                confirmText: d.intl.string(d.t.cvSt1J),
                cancelText: d.intl.string(d.t["ETE/oC"]),
                onConfirm: () => {
                    s.A.removeFriend(g, {
                        location: f
                    }), S(!1), null == h || h()
                }
            }, t))
        }, {
            contextKey: null != m ? (0, o.TId)(m) : void 0
        })
    }
    return v ? (0, r.jsx)(o.Drp, {
        id: "remove-friend",
        label: d.intl.string(d.t.cvSt1J),
        action: T
    }) : (0, r.jsx)(o.Drp, {
        id: "add-friend",
        label: I ? d.intl.string(d.t.xMH6vD) : O,
        action: () => {
            I || (s.A.addRelationship({
                userId: g,
                context: {
                    location: f
                }
            }), S(!0), null == _ || _())
        },
        disabled: A || I && !v
    })
}