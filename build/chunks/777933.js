/** chunk id: 777933 params = (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(323874), n(14289), n(35956), n(321073);
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(803316),
    r = n(207133),
    a = n(253932),
    c = n(155078),
    o = n(954571),
    d = n(307600),
    u = n(723702),
    E = n(837921),
    A = n(179581),
    m = n(652215),
    p = n(985018);
let f = /^(tel|sms|mailto):([^?;]+)/,
    g = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    D = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    _ = /^\/emojis\/\d+\./;

function I(e, t, n, I) {
    let h = (0, r.A)(n?.getChannelId()),
        S = a.Q_.useSetting();
    if (!u.isPlatformEmbedded || null == e || "" === e || !S && function(e) {
            try {
                return _.test(new URL(e).pathname)
            } catch {
                return !1
            }
        }(e) || h || I?.shouldHideMediaOptions === !0 || !(0, l.fW)(e)) return null;
    let N = (0, c.E)(e),
        y = e => {
            o.default.track(m.HAw.CONTEXT_MENU_LINK_COPIED, {
                hostname: N,
                ...(0, A.N)()
            }), E.Ay.copy(e), (0, s.showToast)((0, s.createToast)(p.intl.string(p.t["L/PwZf"]), s.ToastType.SUCCESS))
        },
        L = (n, i) => {
            let s = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(m.HAw.CONTEXT_MENU_LINK_OPENED, {
                hostname: N,
                ...(0, A.N)()
            }), (0, d.h)({
                href: s,
                trusted: (0, d.m)(e, t),
                shouldConfirm: !0
            }, n)
        },
        O = [],
        v = e.match(f);
    if (null != v) {
        let e = p.intl.string("mailto" === v[1] ? p.t.ZYLVKo : p.t["3zozoR"]);
        O.push((0, i.jsx)(s.Drp, {
            id: "copy-native-contact",
            label: e,
            action: () => {
                y(v[2])
            }
        }, "copy-native-contact")), "tel" === v[1] && O.push((0, i.jsx)(s.Drp, {
            id: "native-send-sms",
            label: p.intl.string(p.t["+wbjMW"]),
            action: e => L(e, !0)
        }, "native-send-sms"))
    }
    let M = function(e) {
            try {
                let t = new URL(e);
                return "cdn.discordapp.com" === t.hostname && g.test(t.pathname)
            } catch {
                return !1
            }
        }(e),
        C = !M && function(e) {
            try {
                return D.test(new URL(e).pathname)
            } catch {
                return !1
            }
        }(e),
        T = M ? p.t["8xHmxo"] : C ? p.t["92CPQ+"] : p.t.WqhZss,
        b = M ? p.t.w8ldGK : C ? p.t.q5FbIB : p.t.wuRE8M;
    return [(0, i.jsx)(s.Drp, {
        id: "copy-native-link",
        label: p.intl.string(T),
        leadingAccessory: {
            type: "icon",
            icon: s.qYV
        },
        action: () => {
            y(e)
        }
    }, "copy-native-link"), ...O, (0, i.jsx)(s.Drp, {
        id: "open-native-link",
        label: p.intl.string(b),
        leadingAccessory: {
            type: "icon",
            icon: s.WxK
        },
        trailingIndicator: {
            type: "icon",
            icon: s.I9m
        },
        action: e => L(e)
    }, "open-native-link")]
}