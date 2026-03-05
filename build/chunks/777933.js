/** chunk id: 777933 params = (module,exports,require) **/
n.d(e, {
    A: () => A
}), n(321073);
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(803316),
    o = n(207133),
    r = n(155078),
    s = n(954571),
    c = n(307600),
    d = n(723702),
    p = n(837921),
    u = n(179581),
    E = n(652215),
    T = n(985018);
let y = /^(tel|sms|mailto):([^?;]+)/;

function A(t, e, n, A) {
    let g = (0, o.A)(n?.getChannelId());
    if (!d.isPlatformEmbedded || null == t || "" === t || g || A?.shouldHideMediaOptions === !0 || !(0, l.fW)(t)) return null;
    let h = (0, r.E)(t),
        _ = t => {
            s.default.track(E.HAw.CONTEXT_MENU_LINK_COPIED, {
                hostname: h,
                ...(0, u.N)()
            }), p.Ay.copy(t), (0, i.showToast)((0, i.createToast)(T.intl.string(T.t["L/PwZf"]), i.ToastType.SUCCESS))
        },
        C = (n, a) => {
            let i = !0 === a ? t.replace("tel:", "sms:") : t;
            s.default.track(E.HAw.CONTEXT_MENU_LINK_OPENED, {
                hostname: h,
                ...(0, u.N)()
            }), (0, c.h)({
                href: i,
                trusted: (0, c.m)(t, e),
                shouldConfirm: !0
            }, n)
        },
        f = [],
        N = t.match(y);
    if (null != N) {
        let t = T.intl.string("mailto" === N[1] ? T.t.ZYLVKo : T.t["3zozoR"]);
        f.push((0, a.jsx)(i.Drp, {
            id: "copy-native-contact",
            label: t,
            action: () => {
                _(N[2])
            }
        }, "copy-native-contact")), "tel" === N[1] && f.push((0, a.jsx)(i.Drp, {
            id: "native-send-sms",
            label: T.intl.string(T.t["+wbjMW"]),
            action: t => C(t, !0)
        }, "native-send-sms"))
    }
    return [(0, a.jsx)(i.Drp, {
        id: "copy-native-link",
        label: T.intl.string(T.t.WqhZss),
        leadingAccessory: {
            type: "icon",
            icon: i.qYV
        },
        action: () => {
            _(t)
        }
    }, "copy-native-link"), ...f, (0, a.jsx)(i.Drp, {
        id: "open-native-link",
        label: T.intl.string(T.t.wuRE8M),
        leadingAccessory: {
            type: "icon",
            icon: i.WxK
        },
        trailingIndicator: {
            type: "icon",
            icon: i.I9m
        },
        action: t => C(t)
    }, "open-native-link")]
}