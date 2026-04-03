/** chunk id: 777933 params = (module,exports,require) **/
n.d(e, {
    A: () => A
}), n(323874), n(14289), n(35956), n(321073);
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(803316),
    r = n(207133),
    o = n(155078),
    s = n(954571),
    c = n(307600),
    d = n(723702),
    p = n(837921),
    u = n(179581),
    g = n(652215),
    E = n(985018);
let h = /^(tel|sms|mailto):([^?;]+)/,
    y = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    T = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i;

function A(t, e, n, A) {
    let m = (0, r.A)(n?.getChannelId());
    if (!d.isPlatformEmbedded || null == t || "" === t || m || A?.shouldHideMediaOptions === !0 || !(0, l.fW)(t)) return null;
    let _ = (0, o.E)(t),
        f = t => {
            s.default.track(g.HAw.CONTEXT_MENU_LINK_COPIED, {
                hostname: _,
                ...(0, u.N)()
            }), p.Ay.copy(t), (0, i.showToast)((0, i.createToast)(E.intl.string(E.t["L/PwZf"]), i.ToastType.SUCCESS))
        },
        v = (n, a) => {
            let i = !0 === a ? t.replace("tel:", "sms:") : t;
            s.default.track(g.HAw.CONTEXT_MENU_LINK_OPENED, {
                hostname: _,
                ...(0, u.N)()
            }), (0, c.h)({
                href: i,
                trusted: (0, c.m)(t, e),
                shouldConfirm: !0
            }, n)
        },
        C = [],
        N = t.match(h);
    if (null != N) {
        let t = E.intl.string("mailto" === N[1] ? E.t.ZYLVKo : E.t["3zozoR"]);
        C.push((0, a.jsx)(i.Drp, {
            id: "copy-native-contact",
            label: t,
            action: () => {
                f(N[2])
            }
        }, "copy-native-contact")), "tel" === N[1] && C.push((0, a.jsx)(i.Drp, {
            id: "native-send-sms",
            label: E.intl.string(E.t["+wbjMW"]),
            action: t => v(t, !0)
        }, "native-send-sms"))
    }
    let w = function(t) {
            try {
                let e = new URL(t);
                return "cdn.discordapp.com" === e.hostname && y.test(e.pathname)
            } catch {
                return !1
            }
        }(t),
        I = !w && function(t) {
            try {
                return T.test(new URL(t).pathname)
            } catch {
                return !1
            }
        }(t),
        b = w ? E.t["8xHmxo"] : I ? E.t["92CPQ+"] : E.t.WqhZss,
        x = w ? E.t.w8ldGK : I ? E.t.q5FbIB : E.t.wuRE8M;
    return [(0, a.jsx)(i.Drp, {
        id: "copy-native-link",
        label: E.intl.string(b),
        leadingAccessory: {
            type: "icon",
            icon: i.qYV
        },
        action: () => {
            f(t)
        }
    }, "copy-native-link"), ...C, (0, a.jsx)(i.Drp, {
        id: "open-native-link",
        label: E.intl.string(x),
        leadingAccessory: {
            type: "icon",
            icon: i.WxK
        },
        trailingIndicator: {
            type: "icon",
            icon: i.I9m
        },
        action: t => v(t)
    }, "open-native-link")]
}