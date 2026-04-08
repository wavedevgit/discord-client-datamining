/** chunk id: 777933 params = (module,exports,require) **/
n.d(e, {
    A: () => _
}), n(323874), n(14289), n(35956), n(321073);
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(803316),
    l = n(207133),
    o = n(253932),
    s = n(155078),
    c = n(954571),
    d = n(307600),
    p = n(723702),
    u = n(837921),
    g = n(179581),
    h = n(652215),
    y = n(985018);
let E = /^(tel|sms|mailto):([^?;]+)/,
    m = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    T = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    A = /^\/emojis\/\d+\./;

function _(t, e, n, _) {
    let f = (0, l.A)(n?.getChannelId()),
        v = o.Q_.useSetting();
    if (!p.isPlatformEmbedded || null == t || "" === t || !v && function(t) {
            try {
                return A.test(new URL(t).pathname)
            } catch {
                return !1
            }
        }(t) || f || _?.shouldHideMediaOptions === !0 || !(0, r.fW)(t)) return null;
    let C = (0, s.E)(t),
        N = t => {
            c.default.track(h.HAw.CONTEXT_MENU_LINK_COPIED, {
                hostname: C,
                ...(0, g.N)()
            }), u.Ay.copy(t), (0, i.showToast)((0, i.createToast)(y.intl.string(y.t["L/PwZf"]), i.ToastType.SUCCESS))
        },
        w = (n, a) => {
            let i = !0 === a ? t.replace("tel:", "sms:") : t;
            c.default.track(h.HAw.CONTEXT_MENU_LINK_OPENED, {
                hostname: C,
                ...(0, g.N)()
            }), (0, d.h)({
                href: i,
                trusted: (0, d.m)(t, e),
                shouldConfirm: !0
            }, n)
        },
        I = [],
        b = t.match(E);
    if (null != b) {
        let t = y.intl.string("mailto" === b[1] ? y.t.ZYLVKo : y.t["3zozoR"]);
        I.push((0, a.jsx)(i.Drp, {
            id: "copy-native-contact",
            label: t,
            action: () => {
                N(b[2])
            }
        }, "copy-native-contact")), "tel" === b[1] && I.push((0, a.jsx)(i.Drp, {
            id: "native-send-sms",
            label: y.intl.string(y.t["+wbjMW"]),
            action: t => w(t, !0)
        }, "native-send-sms"))
    }
    let x = function(t) {
            try {
                let e = new URL(t);
                return "cdn.discordapp.com" === e.hostname && m.test(e.pathname)
            } catch {
                return !1
            }
        }(t),
        D = !x && function(t) {
            try {
                return T.test(new URL(t).pathname)
            } catch {
                return !1
            }
        }(t),
        O = x ? y.t["8xHmxo"] : D ? y.t["92CPQ+"] : y.t.WqhZss,
        S = x ? y.t.w8ldGK : D ? y.t.q5FbIB : y.t.wuRE8M;
    return [(0, a.jsx)(i.Drp, {
        id: "copy-native-link",
        label: y.intl.string(O),
        leadingAccessory: {
            type: "icon",
            icon: i.qYV
        },
        action: () => {
            N(t)
        }
    }, "copy-native-link"), ...I, (0, a.jsx)(i.Drp, {
        id: "open-native-link",
        label: y.intl.string(S),
        leadingAccessory: {
            type: "icon",
            icon: i.WxK
        },
        trailingIndicator: {
            type: "icon",
            icon: i.I9m
        },
        action: t => w(t)
    }, "open-native-link")]
}