/** chunk id: 777933 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(323874), n(14289), n(35956), n(321073);
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(803316),
    l = n(207133),
    a = n(253932),
    c = n(155078),
    o = n(954571),
    d = n(307600),
    u = n(723702),
    E = n(837921),
    A = n(179581),
    p = n(652215),
    m = n(985018);
let f = /^(tel|sms|mailto):([^?;]+)/,
    g = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i,
    D = /\.(png|jpe?g|webp|avif|bmp|svg|gif|mp4|webm|mov)(\?|$)/i,
    h = /^\/emojis\/\d+\./;

function _(e, t, n, _) {
    let I = (0, l.A)(n?.getChannelId()),
        S = a.Q_.useSetting();
    if (!u.isPlatformEmbedded || null == e || "" === e || !S && function(e) {
            try {
                return h.test(new URL(e).pathname)
            } catch {
                return !1
            }
        }(e) || I || _?.shouldHideMediaOptions === !0 || !(0, r.fW)(e)) return null;
    let L = (0, c.E)(e),
        N = e => {
            o.default.track(p.HAw.CONTEXT_MENU_LINK_COPIED, {
                hostname: L,
                ...(0, A.N)()
            }), E.Ay.copy(e), (0, s.showToast)((0, s.createToast)(m.intl.string(m.t["L/PwZf"]), s.ToastType.SUCCESS))
        },
        O = (n, i) => {
            let s = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(p.HAw.CONTEXT_MENU_LINK_OPENED, {
                hostname: L,
                ...(0, A.N)()
            }), (0, d.h)({
                href: s,
                trusted: (0, d.m)(e, t),
                shouldConfirm: !0
            }, n)
        },
        y = [],
        C = e.match(f);
    if (null != C) {
        let e = m.intl.string("mailto" === C[1] ? m.t.ZYLVKo : m.t["3zozoR"]);
        y.push((0, i.jsx)(s.Drp, {
            id: "copy-native-contact",
            label: e,
            action: () => {
                N(C[2])
            }
        }, "copy-native-contact")), "tel" === C[1] && y.push((0, i.jsx)(s.Drp, {
            id: "native-send-sms",
            label: m.intl.string(m.t["+wbjMW"]),
            action: e => O(e, !0)
        }, "native-send-sms"))
    }
    let v = function(e) {
            try {
                let t = new URL(e);
                return "cdn.discordapp.com" === t.hostname && g.test(t.pathname)
            } catch {
                return !1
            }
        }(e),
        M = !v && function(e) {
            try {
                return D.test(new URL(e).pathname)
            } catch {
                return !1
            }
        }(e),
        G = v ? m.t["8xHmxo"] : M ? m.t["92CPQ+"] : m.t.WqhZss,
        w = v ? m.t.w8ldGK : M ? m.t.q5FbIB : m.t.wuRE8M;
    return [(0, i.jsx)(s.Drp, {
        id: "copy-native-link",
        label: m.intl.string(G),
        leadingAccessory: {
            type: "icon",
            icon: s.qYV
        },
        action: () => {
            N(e)
        }
    }, "copy-native-link"), ...y, (0, i.jsx)(s.Drp, {
        id: "open-native-link",
        label: m.intl.string(w),
        leadingAccessory: {
            type: "icon",
            icon: s.WxK
        },
        trailingIndicator: {
            type: "icon",
            icon: s.I9m
        },
        action: e => O(e)
    }, "open-native-link")]
}