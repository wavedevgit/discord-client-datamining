/** chunk id: 777933, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => E
}), n(747238), n(812715), n(321073), n(896048);
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(803316),
    o = n(207133),
    a = n(155078),
    c = n(954571),
    s = n(307600),
    u = n(723702),
    d = n(837921),
    p = n(179581),
    y = n(652215),
    v = n(985018);

function f(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), l.forEach(function(e) {
            var l;
            l = n[e], e in t ? Object.defineProperty(t, e, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = l
        })
    }
    return t
}
let g = /^(tel|sms|mailto):([^?;]+)/;

function E(t, e, n, E) {
    let b = (0, o.A)(null == n ? void 0 : n.getChannelId());
    if (!u.isPlatformEmbedded || null == t || "" === t || b || (null == E ? void 0 : E.shouldHideMediaOptions) === !0 || !(0, r.fW)(t)) return null;
    let h = (0, a.E)(t),
        T = t => {
            c.default.track(y.HAw.CONTEXT_MENU_LINK_COPIED, f({
                hostname: h
            }, (0, p.N)())), d.Ay.copy(t), (0, i.showToast)((0, i.createToast)(v.intl.string(v.t["L/PwZf"]), i.ToastType.SUCCESS))
        },
        A = (n, l) => {
            let i = !0 === l ? t.replace("tel:", "sms:") : t;
            c.default.track(y.HAw.CONTEXT_MENU_LINK_OPENED, f({
                hostname: h
            }, (0, p.N)())), (0, s.h)({
                href: i,
                trusted: (0, s.m)(t, e),
                shouldConfirm: !0
            }, n)
        },
        m = [],
        O = t.match(g);
    if (null != O) {
        let t = v.intl.string("mailto" === O[1] ? v.t.ZYLVKo : v.t["3zozoR"]);
        m.push((0, l.jsx)(i.Drp, {
            id: "copy-native-contact",
            label: t,
            action: () => {
                T(O[2])
            }
        }, "copy-native-contact")), "tel" === O[1] && m.push((0, l.jsx)(i.Drp, {
            id: "native-send-sms",
            label: v.intl.string(v.t["+wbjMW"]),
            action: t => A(t, !0)
        }, "native-send-sms"))
    }
    return [(0, l.jsx)(i.Drp, {
        id: "copy-native-link",
        label: v.intl.string(v.t.WqhZss),
        leadingAccessory: {
            type: "icon",
            icon: i.qYV
        },
        action: () => {
            T(t)
        }
    }, "copy-native-link"), ...m, (0, l.jsx)(i.Drp, {
        id: "open-native-link",
        label: v.intl.string(v.t.wuRE8M),
        trailingIndicator: {
            type: "icon",
            icon: i.I9m
        },
        action: t => A(t)
    }, "open-native-link")]
}