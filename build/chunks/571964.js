/** chunk id: 571964, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048), n(321073);
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(545059),
    a = n(870391),
    u = n(994500),
    d = n(985018);

function s(e) {
    let {
        user: t,
        onAction: s,
        groupId: c
    } = e, A = t.id, [f, b] = (0, l.yK)([u.A, a.A], () => [u.A.isFriend(A), a.A.getGroups()], [A]);
    if (!f || 0 === b.length) return null;
    let g = [];
    return b.length > 0 && g.push((0, r.jsxs)(i.Drp, {
        id: "add-to-group",
        label: "Add to Group",
        children: [b.map(e => (0, r.jsx)(i.Drp, {
            id: "add-".concat(e.id),
            label: e.name,
            action: () => {
                null == s || s(), o.A.addUsersToGroup(e.id, A)
            }
        }, e.id)), (0, r.jsx)(i.bXX, {}, "add-to-group-separator"), (0, r.jsx)(i.Drp, {
            id: "create-new-group",
            label: d.intl.string(d.t["3hF1W4"]),
            action: () => {
                null == s || s(), (0, i.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("51080").then(n.bind(n, 519528));
                    return t => {
                        var n, l;
                        return (0, r.jsx)(e, (n = function(e) {
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
                        }({}, t), l = l = {
                            initialUserIds: [A]
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(l)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                        }), n))
                    }
                })
            }
        }, "create-new-group")]
    }, "add-to-group")), null != c && g.push((0, r.jsx)(i.Drp, {
        id: "remove-from-group",
        label: "Remove from Group",
        action: () => {
            null == s || s(), o.A.removeUsersFromGroup(c, A)
        }
    }, "remove-from-group")), g
}