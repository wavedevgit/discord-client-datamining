/** chunk id: 253925 params = (module,exports,require) **/
n.d(i, {
    A: () => m
});
var e = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    o = n(554375),
    s = n(212245),
    u = n(822123),
    c = n(508675),
    d = n(7584),
    g = n(60587),
    p = n(631576),
    y = n(891090),
    A = n(256449),
    b = n(679382),
    E = n(378058),
    I = n(652215),
    f = n(985018);

function C(t) {
    return d.Ay.getByName(t.replace(/(^:|:$)/g, ""))
}

function m(t) {
    let {
        type: i,
        id: n,
        name: m,
        isInExpressionPicker: S = !1
    } = t, {
        location: x
    } = (0, s.p)(), j = l.useMemo(() => ({
        ...x,
        section: S ? I.JJy.EXPRESSION_PICKER : I.JJy.CONTEXT_MENU
    }), [x, S]), v = (0, A.ln)(), k = (0, a.bG)([b.A], () => i === g.g.STICKER && null != n ? b.A.getStickerById(n) : null), J = null != k && v.includes(k.id), h = (0, a.bG)([c.Ay], () => {
        if (i === g.g.EMOJI) {
            if (null != n) return c.Ay.getDisambiguatedEmojiContext().getById(n);
            else if (null != m) return C(m) ?? C(d.Ay.convertSurrogateToName(m))
        }
    }), K = (0, u.O7)(null, h);
    return null != k && i === g.g.STICKER ? (0, E.Xw)(k) && !(0, E.Y4)(k) ? null : J ? (0, e.jsx)(r.Drp, {
        id: "unfavorite",
        action: () => (0, p.vr)(k.id),
        label: f.intl.string(f.t.XhzKyF),
        leadingAccessory: {
            type: "icon",
            icon: r.yA2
        }
    }) : (0, e.jsx)(r.Drp, {
        id: "favorite",
        action: () => {
            (0, y.Dt)({
                sticker: k,
                location: {
                    ...j,
                    object: I.ZSU.STICKER
                }
            }), (0, p.uK)(k?.id)
        },
        label: f.intl.string(f.t.kWmiPW),
        leadingAccessory: {
            type: "icon",
            icon: r.Gg5
        }
    }) : null != h && i === g.g.EMOJI ? K ? (0, e.jsx)(r.Drp, {
        id: "unfavorite",
        action: () => (0, o.Sw)(h),
        label: f.intl.string(f.t.Ay49KA),
        leadingAccessory: {
            type: "icon",
            icon: r.yA2
        }
    }) : (0, e.jsx)(r.Drp, {
        id: "favorite",
        action: () => {
            (0, u.C5)({
                emoji: h,
                location: {
                    ...j,
                    object: I.ZSU.EMOJI
                }
            }), (0, o.V4)(h)
        },
        label: f.intl.string(f.t.nNsr67),
        leadingAccessory: {
            type: "icon",
            icon: r.Gg5
        }
    }) : void 0
}