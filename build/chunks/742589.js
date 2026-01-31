/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    I: () => C
}), n(747238);
var i = n(627968);
n(64700);
var l = n(607399),
    s = n(311907),
    r = n(367513),
    a = n(793574),
    o = n(688810),
    c = n(313961),
    d = n(261718),
    u = n(966597),
    h = n(922281),
    g = n(907745),
    x = n(772475),
    p = n(977997),
    m = n(723702),
    A = n(837921),
    b = n(58736),
    j = n(652215),
    O = n(746080),
    E = n(892513);

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
async function C(e) {
    if (!e && (0, m.isMac)() && m.isPlatformEmbedded) {
        var t, n, i;
        let e = null != (t = await (null == (n = (i = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? void 0 : n.call(i))) ? t : "Maximize";
        "Minimize" === e ? A.Ay.minimize() : "Maximize" === e && A.Ay.maximize()
    }
}

function v(e) {
    let {
        children: t,
        className: n,
        channelId: a,
        channelType: o,
        guildId: m,
        innerClassname: A,
        transparent: S = !1,
        hidden: f = !1,
        toolbar: v,
        mobileToolbar: y,
        "aria-label": T,
        "aria-labelledby": _,
        scrollable: N,
        role: I,
        hideSearch: P,
        showDivider: R,
        disableDoubleClick: L
    } = e, G = null == a || (0, O.jq)(a) ? null : a, D = (0, s.bG)([p.A], () => p.A.isInChannel(G) || !1), k = (0, s.bG)([c.A], () => null != G && c.A.getParticipantsListOpen(G)), {
        enabled: w,
        inInbox: V
    } = u.A.useExperiment({
        location: "HeaderBar"
    }), {
        hasParticipantsPanel: M
    } = (0, d.A)({
        location: "HeaderBar"
    });
    return (0, i.jsx)(b.Ay, {
        className: n,
        innerClassName: A,
        toolbar: function() {
            if (null == v) return null;
            let e = null != a && !P;
            return l.Fr ? y : (0, i.jsxs)(i.Fragment, {
                children: [v, e && !(0, O.jq)(a) ? (0, i.jsx)(g.Ay, {
                    guildId: m,
                    channelId: a,
                    className: E.$P
                }, null != m ? m : a) : null, R && (0, i.jsx)(b.Ay.Divider, {}), w && !V ? (0, i.jsx)(h.A, {}) : null, M && D && null != G && !k && o === j.rbe.GROUP_DM && (0, i.jsxs)("div", {
                    className: E.pc,
                    children: [(0, i.jsx)(b.Ay.Divider, {}), (0, i.jsx)(x.A, {
                        onClick: () => r.A.toggleParticipantsList(G, !k)
                    })]
                })]
            })
        }(),
        transparent: S,
        hidden: f,
        onDoubleClick: () => C(L),
        "aria-label": T,
        "aria-labelledby": _,
        role: I,
        scrollable: N,
        children: t
    })
}

function y(e) {
    let {
        children: t,
        className: n,
        "aria-label": l,
        "aria-labelledby": s,
        role: r,
        disableDoubleClick: a
    } = e;
    return (0, i.jsx)(b.Ay, {
        className: n,
        onDoubleClick: () => C(a),
        "aria-label": l,
        "aria-labelledby": s,
        role: r,
        children: t
    })
}

function T(e) {
    let {
        isAuthenticated: t = !0
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, i, l, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
            return s
        }
        if (s = function(e, t) {
                if (null == e) return {};
                var n, i, l = {},
                    s = Object.getOwnPropertyNames(e);
                for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
        return s
    }(e, ["isAuthenticated"]), {
        analyticsLocations: l
    } = (0, o.Ay)(a.A.HEADER_BAR);
    return (0, i.jsx)(o.f5, {
        value: l,
        children: t ? (0, i.jsx)(v, f(S({}, n), {
            className: n.className
        })) : (0, i.jsx)(y, f(S({}, n), {
            className: n.className
        }))
    })
}
T.Title = b.Ay.Title, T.Icon = b.Ay.Icon, T.ChannelIcon = b.Ay.ChannelIcon, T.Divider = b.Ay.Divider, T.Caret = b.Ay.Caret;
let _ = T