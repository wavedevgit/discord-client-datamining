/** Chunk was on 46132 **/
/** chunk id: 253925, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => S
}), n(747238), n(812715);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    o = n(397927),
    a = n(554375),
    c = n(212245),
    u = n(822123),
    s = n(508675),
    g = n(7584),
    p = n(60587),
    d = n(631576),
    b = n(891090),
    y = n(256449),
    f = n(679382),
    O = n(378058),
    j = n(652215),
    m = n(985018);

function A(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i
        })
    }
    return t
}

function v(t, e) {
    return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            n.push.apply(n, i)
        }
        return n
    })(Object(e)).forEach(function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
    }), t
}

function E(t) {
    return g.Ay.getByName(t.replace(/(^:|:$)/g, ""))
}

function S(t) {
    let {
        type: e,
        id: n,
        name: S,
        isInExpressionPicker: C = !1
    } = t, {
        location: I
    } = (0, c.p)(), x = l.useMemo(() => v(A({}, I), {
        section: C ? j.JJy.EXPRESSION_PICKER : j.JJy.CONTEXT_MENU
    }), [I, C]), P = (0, y.ln)(), h = (0, r.bG)([f.A], () => e === p.g.STICKER && null != n ? f.A.getStickerById(n) : null), w = null != h && P.includes(h.id), k = (0, r.bG)([s.Ay], () => {
        if (e === p.g.EMOJI) {
            if (null != n) return s.Ay.getDisambiguatedEmojiContext().getById(n);
            else if (null != S) {
                var t;
                return null != (t = E(S)) ? t : E(g.Ay.convertSurrogateToName(S))
            }
        }
    }), D = (0, u.O7)(null, k);
    return null != h && e === p.g.STICKER ? (0, O.Xw)(h) && !(0, O.Y4)(h) ? null : w ? (0, i.jsx)(o.Drp, {
        id: "unfavorite",
        action: () => (0, d.vr)(h.id),
        label: m.intl.string(m.t.XhzKyF),
        leadingAccessory: {
            type: "icon",
            icon: o.Gg5
        }
    }) : (0, i.jsx)(o.Drp, {
        id: "favorite",
        action: () => {
            (0, b.Dt)({
                sticker: h,
                location: v(A({}, x), {
                    object: j.ZSU.STICKER
                })
            }), (0, d.uK)(null == h ? void 0 : h.id)
        },
        label: m.intl.string(m.t.kWmiPW),
        leadingAccessory: {
            type: "icon",
            icon: o.Gg5
        }
    }) : null != k && e === p.g.EMOJI ? D ? (0, i.jsx)(o.Drp, {
        id: "unfavorite",
        action: () => (0, a.Sw)(k),
        label: m.intl.string(m.t.Ay49KA),
        leadingAccessory: {
            type: "icon",
            icon: o.Gg5
        }
    }) : (0, i.jsx)(o.Drp, {
        id: "favorite",
        action: () => {
            (0, u.C5)({
                emoji: k,
                location: v(A({}, x), {
                    object: j.ZSU.EMOJI
                })
            }), (0, a.V4)(k)
        },
        label: m.intl.string(m.t.nNsr67),
        leadingAccessory: {
            type: "icon",
            icon: o.Gg5
        }
    }) : void 0
}