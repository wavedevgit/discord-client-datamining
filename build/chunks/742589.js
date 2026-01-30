/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D,
    I: () => m
}), n(747238);
var r = n(627968);
n(64700);
var i = n(607399),
    l = n(311907),
    a = n(367513),
    o = n(793574),
    s = n(688810),
    c = n(313961),
    u = n(261718),
    E = n(966597),
    d = n(922281),
    _ = n(907745),
    A = n(772475),
    T = n(977997),
    I = n(723702),
    O = n(837921),
    N = n(58736),
    p = n(652215),
    R = n(746080),
    S = n(892513);

function P(e) {
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

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
async function m(e) {
    if (!e && (0, I.isMac)() && I.isPlatformEmbedded) {
        var t, n, r;
        let e = null != (t = await (null == (n = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : n.call(r))) ? t : "Maximize";
        "Minimize" === e ? O.Ay.minimize() : "Maximize" === e && O.Ay.maximize()
    }
}

function f(e) {
    let {
        children: t,
        className: n,
        channelId: o,
        channelType: s,
        guildId: I,
        innerClassname: O,
        transparent: P = !1,
        hidden: y = !1,
        toolbar: f,
        mobileToolbar: C,
        "aria-label": g,
        "aria-labelledby": D,
        scrollable: h,
        role: U,
        hideSearch: b,
        showDivider: M,
        disableDoubleClick: j
    } = e, v = null == o || (0, R.jq)(o) ? null : o, k = (0, l.bG)([T.A], () => T.A.isInChannel(v) || !1), L = (0, l.bG)([c.A], () => null != v && c.A.getParticipantsListOpen(v)), {
        enabled: x,
        inInbox: G
    } = E.A.useExperiment({
        location: "HeaderBar"
    }), {
        hasParticipantsPanel: w
    } = (0, u.A)({
        location: "HeaderBar"
    });
    return (0, r.jsx)(N.Ay, {
        className: n,
        innerClassName: O,
        toolbar: function() {
            if (null == f) return null;
            let e = null != o && !b;
            return i.Fr ? C : (0, r.jsxs)(r.Fragment, {
                children: [f, e && !(0, R.jq)(o) ? (0, r.jsx)(_.Ay, {
                    guildId: I,
                    channelId: o,
                    className: S.$P
                }, null != I ? I : o) : null, M && (0, r.jsx)(N.Ay.Divider, {}), x && !G ? (0, r.jsx)(d.A, {}) : null, w && k && null != v && !L && s === p.rbe.GROUP_DM && (0, r.jsxs)("div", {
                    className: S.pc,
                    children: [(0, r.jsx)(N.Ay.Divider, {}), (0, r.jsx)(A.A, {
                        onClick: () => a.A.toggleParticipantsList(v, !L)
                    })]
                })]
            })
        }(),
        transparent: P,
        hidden: y,
        onDoubleClick: () => m(j),
        "aria-label": g,
        "aria-labelledby": D,
        role: U,
        scrollable: h,
        children: t
    })
}

function C(e) {
    let {
        children: t,
        className: n,
        "aria-label": i,
        "aria-labelledby": l,
        role: a,
        disableDoubleClick: o
    } = e;
    return (0, r.jsx)(N.Ay, {
        className: n,
        onDoubleClick: () => m(o),
        "aria-label": i,
        "aria-labelledby": l,
        role: a,
        children: t
    })
}

function g(e) {
    let {
        isAuthenticated: t = !0
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
    }(e, ["isAuthenticated"]), {
        analyticsLocations: i
    } = (0, s.Ay)(o.A.HEADER_BAR);
    return (0, r.jsx)(s.f5, {
        value: i,
        children: t ? (0, r.jsx)(f, y(P({}, n), {
            className: n.className
        })) : (0, r.jsx)(C, y(P({}, n), {
            className: n.className
        }))
    })
}
g.Title = N.Ay.Title, g.Icon = N.Ay.Icon, g.ChannelIcon = N.Ay.ChannelIcon, g.Divider = N.Ay.Divider, g.Caret = N.Ay.Caret;
let D = g