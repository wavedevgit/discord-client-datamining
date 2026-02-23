/** chunk id: 253925, original params: t,i,e (module,exports,require) **/
e.d(i, {
    A: () => I
});
var n = e(627968),
    l = e(64700),
    a = e(311907),
    r = e(397927),
    o = e(554375),
    s = e(212245),
    c = e(822123),
    u = e(508675),
    d = e(7584),
    g = e(60587),
    p = e(631576),
    y = e(891090),
    A = e(256449),
    b = e(679382),
    E = e(378058),
    f = e(652215),
    m = e(985018);

function C(t) {
    return d.Ay.getByName(t.replace(/(^:|:$)/g, ""))
}

function I(t) {
    let {
        type: i,
        id: e,
        name: I,
        isInExpressionPicker: S = !1
    } = t, {
        location: x
    } = (0, s.p)(), j = l.useMemo(() => ({
        ...x,
        section: S ? f.JJy.EXPRESSION_PICKER : f.JJy.CONTEXT_MENU
    }), [x, S]), v = (0, A.ln)(), k = (0, a.bG)([b.A], () => i === g.g.STICKER && null != e ? b.A.getStickerById(e) : null), J = null != k && v.includes(k.id), h = (0, a.bG)([u.Ay], () => {
        if (i === g.g.EMOJI) {
            if (null != e) return u.Ay.getDisambiguatedEmojiContext().getById(e);
            else if (null != I) return C(I) ?? C(d.Ay.convertSurrogateToName(I))
        }
    }), K = (0, c.O7)(null, h);
    return null != k && i === g.g.STICKER ? (0, E.Xw)(k) && !(0, E.Y4)(k) ? null : J ? (0, n.jsx)(r.Drp, {
        id: "unfavorite",
        action: () => (0, p.vr)(k.id),
        label: m.intl.string(m.t.XhzKyF),
        leadingAccessory: {
            type: "icon",
            icon: r.yA2
        }
    }) : (0, n.jsx)(r.Drp, {
        id: "favorite",
        action: () => {
            (0, y.Dt)({
                sticker: k,
                location: {
                    ...j,
                    object: f.ZSU.STICKER
                }
            }), (0, p.uK)(k?.id)
        },
        label: m.intl.string(m.t.kWmiPW),
        leadingAccessory: {
            type: "icon",
            icon: r.Gg5
        }
    }) : null != h && i === g.g.EMOJI ? K ? (0, n.jsx)(r.Drp, {
        id: "unfavorite",
        action: () => (0, o.Sw)(h),
        label: m.intl.string(m.t.Ay49KA),
        leadingAccessory: {
            type: "icon",
            icon: r.yA2
        }
    }) : (0, n.jsx)(r.Drp, {
        id: "favorite",
        action: () => {
            (0, c.C5)({
                emoji: h,
                location: {
                    ...j,
                    object: f.ZSU.EMOJI
                }
            }), (0, o.V4)(h)
        },
        label: m.intl.string(m.t.nNsr67),
        leadingAccessory: {
            type: "icon",
            icon: r.Gg5
        }
    }) : void 0
}