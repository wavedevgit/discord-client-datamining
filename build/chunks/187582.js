/** Chunk was on 97492 **/
/** chunk id: 187582, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(607399),
    s = n(311907),
    a = n(397927),
    o = n(442433),
    c = n(414798),
    u = n(110574),
    d = n(793574),
    p = n(688810),
    h = n(709066),
    f = n(87664),
    g = n(485947),
    m = n(111864),
    b = n(342296),
    A = n(290863),
    y = n(994500),
    _ = n(741961),
    O = n(287809),
    j = n(954571),
    v = n(203982),
    x = n(398219),
    E = n(427262),
    C = n(837921),
    S = n(652215),
    I = n(985018),
    N = n(701939);

function T(e) {
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
}
let P = [],
    w = C.Ay.getEnableHardwareAcceleration();

function R(e) {
    let {
        user: t,
        channel: a,
        status: d,
        activities: p
    } = e, h = (0, s.bG)([_.A], () => null != _.A.getTypingUsers(a.id)[t.id]), g = (0, s.bG)([O.default], () => O.default.getCurrentUser()), j = (0, s.bG)([A.A], () => A.A.isMobileOnline(t.id)), x = (0, s.bG)([y.A], () => y.A.getNickname(t.id)), C = (0, f.A)(t.id), N = l.useRef(null), P = e => {
        (0, o.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("29534"), n.e("62891"), n.e("42296")]).then(n.bind(n, 228006));
            return n => {
                var l, i;
                return (0, r.jsx)(e, (l = T({}, n), i = i = {
                    user: t,
                    channel: a
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
        })
    }, R = () => {
        let e = "@".concat(E.Ay.getUserTag(t, {
                decoration: "never"
            })),
            n = "<@".concat(t.id, ">");
        v._.dispatch(S.jej.TEXTAREA_FOCUS, {
            channelId: a.id
        }), v._.dispatchToLastSubscribed(S.jej.INSERT_TEXT, {
            plainText: e,
            rawText: n
        }), c.A.startTyping(a.id)
    }, D = (0, m.r)({
        user: t
    }), [M, L] = l.useState(!1);
    return (0, r.jsx)(b.A, {
        targetElementRef: N,
        user: t,
        channelId: a.id,
        position: i.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: R,
        shouldShow: M,
        onRequestClose: () => L(!1),
        children: e => {
            let {
                onClick: n,
                onMouseDown: l
            } = e, i = function(e, t) {
                if (null == e) return {};
                var n, r, l, i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }
                if (i = function(e, t) {
                        if (null == e) return {};
                        var n, r, l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        return l
                    }(e, t), Object.getOwnPropertySymbols)
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }(e, ["onClick", "onMouseDown"]);
            return (0, r.jsx)(u.A, T({
                ref: N,
                user: t,
                currentUser: g,
                isOwner: t.id === a.ownerId,
                ownerTooltipText: I.intl.string(I.t["MRXZ+x"]),
                shouldAnimateStatus: w,
                isTyping: h,
                status: d,
                activities: p,
                applicationStream: C,
                channel: a,
                onContextMenu: P,
                selected: M,
                isMobile: j,
                nick: x,
                nameplate: D,
                onClick: e => {
                    e.shiftKey ? null == R || R() : L(e => !e)
                },
                onMouseDown: e => {
                    M ? e.stopPropagation() : null == l || l(e)
                }
            }, i), t.id)
        }
    })
}

function D(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let r = e.listItems[n],
            l = t.listItems[n];
        if (r.user !== l.user || r.status !== l.status || r.activities !== l.activities) return !1
    }
    return !0
}

function M(e) {
    let {
        channel: t
    } = e, n = O.default.getCurrentUser(), i = null == n ? void 0 : n.isStaff(), {
        analyticsLocations: o
    } = (0, p.Ay)(d.A.MEMBER_LIST), {
        listItems: c
    } = (0, s.bG)([y.A, O.default, A.A], () => {
        let e = (0, x.F)(t.recipients, O.default),
            n = {};
        for (let t of e) {
            var r, l, i;
            y.A.isFriend(t.id) || t.id === (null == (r = O.default.getCurrentUser()) ? void 0 : r.id) ? n[t.id] = {
                status: null != (l = A.A.getStatus(t.id)) ? l : S.clD.OFFLINE,
                activities: null != (i = A.A.getActivities(t.id)) ? i : P
            } : n[t.id] = {
                status: S.clD.OFFLINE,
                activities: P
            }
        }
        let s = [];
        for (let t of e) {
            let e = {
                user: t,
                status: n[t.id].status,
                activities: n[t.id].activities
            };
            s.push(e)
        }
        return {
            listItems: s
        }
    }, [t], D);
    l.useEffect(() => {
        j.default.track(S.HAw.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id
        })
    }, [t.guild_id, t.id, t.type]);
    let u = i && c.every(e => e.user.isStaff());
    return (0, r.jsx)(p.f5, {
        value: o,
        children: (0, r.jsx)("div", {
            className: N.kL,
            children: (0, r.jsx)("aside", {
                className: N.yg,
                children: (0, r.jsxs)(a.HOs, {
                    className: N.ol,
                    fade: !0,
                    children: [(0, r.jsxs)(g.A, {
                        className: N.lL,
                        children: ["".concat(I.intl.string(I.t["9Oq93m"]), "—").concat(c.length, " "), u && (0, r.jsx)(h.A, {
                            type: h.A.Types.STAFF_ONLY_DM
                        })]
                    }), c.map(e => (0, r.jsx)(R, {
                        user: e.user,
                        status: e.status,
                        activities: e.activities,
                        channel: t
                    }, e.user.id))]
                })
            })
        })
    })
}