/** Chunk was on web.js **/
/** chunk id: 862933, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var r = n(627968);
n(64700);
var i = n(417597),
    a = n(554146),
    s = n(397927),
    o = n(565645),
    l = n(775602),
    c = n(826673),
    u = n(724511),
    d = n(151271),
    f = n(338464),
    p = n(71393),
    _ = n(532624),
    h = n(531685),
    m = n(723702),
    g = n(350535),
    E = n(209932),
    y = n(652215),
    b = n(985018),
    O = n(735141);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e) {
    let {
        soundboardSound: t,
        closePicker: v
    } = e, I = (0, d.RQ)(e => e.searchQuery), S = (0, i.bG)([E.A], () => null != t && E.A.isFavoriteSound(t.soundId)), T = (0, i.bG)([p.A], () => p.A.getGuild(null == t ? void 0 : t.guildId)), C = (0, i.bG)([l.A], () => l.A.useReducedMotion, []), N = (0, i.bG)([h.A], () => h.A.isFocused()), w = (0, i.bG)([_.Ay], () => _.Ay.getKeybindForAction(y.hCu.SOUNDBOARD_HOLD));
    if (null != t && I.length > 0) return (0, r.jsx)(f.A, {
        graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, r.jsx)(o.A, {
            emojiId: t.emojiId,
            emojiName: t.emojiName,
            className: O.Zg
        }) : (0, r.jsx)(s.xfq, {
            size: "md",
            color: "currentColor",
            className: O.Zg
        }),
        graphicSecondary: null != T ? (0, r.jsx)(u.A, {
            guild: T,
            shouldAnimate: !C && N
        }) : null,
        titlePrimary: t.name,
        titleSecondary: null == T ? void 0 : T.name,
        isFavorite: S
    });
    let R = () => {
            v(), (0, s.mMO)(async () => {
                let {
                    default: e
                } = await n.e("12618").then(n.bind(n, 29681));
                return t => (0, r.jsx)(e, A({}, t))
            })
        },
        P = (0, c.k8)(a.M.SOUNDBOARD_KEYBIND_TIP),
        D = () => (0, c.Dr)(a.M.SOUNDBOARD_KEYBIND_TIP),
        x = null != w && (0, m.isWindows)() && !P ? b.intl.format(b.t.udMTth, {
            keybind: (0, g.dI)(w.shortcut, !0),
            openSettingsHook: (e, t) => (0, r.jsx)(s.MzZ, {
                onClick: R,
                children: e
            }, t)
        }) : null;
    return null == x ? null : (0, r.jsxs)("div", {
        className: O.g,
        children: [(0, r.jsx)(s.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: O.QW
        }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            className: O.L5,
            children: x
        }), (0, r.jsx)(s.DUT, {
            className: O.b,
            onClick: D,
            children: (0, r.jsx)(s.PGe, {
                size: "xs",
                color: "currentColor"
            })
        })]
    })
}