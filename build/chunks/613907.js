/** Chunk was on 77870 **/
/** chunk id: 613907, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048), n(264879);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(843472),
    u = n(631576),
    d = n(679382),
    p = n(148355),
    h = n(961350),
    f = n(320501),
    g = n(287809),
    m = n(954571),
    b = n(427262),
    A = n(143413),
    y = n(652215),
    _ = n(985018),
    O = n(455683);
let j = "749054660769218631";

function v(e) {
    var t;
    let {
        channel: n
    } = e, [i, v] = l.useState("");
    l.useEffect(() => {
        (0, u.zk)("847199849233514549", !0)
    }, []);
    let x = (0, a.bG)([f.A, h.default], () => !!s()(f.A.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === y.cmJ.SENT && !(0, A.A)(e))),
        E = (0, a.bG)([g.default], () => g.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        C = null != (t = b.Ay.useName(E)) ? t : _.intl.string(_.t.y1Wu2f),
        S = (0, a.bG)([d.A], () => d.A.getStickerById(j)),
        I = l.useCallback(async () => {
            if (null == i || "" === i) try {
                await c.A.sendGreetMessage(n.id, j), m.default.track(y.HAw.DM_EMPTY_ACTION, {
                    channel_id: n.id,
                    channel_type: n.type,
                    source: "Wave",
                    type: "Send wave"
                })
            } catch (e) {
                e.ok || 429 !== e.status || v(_.intl.string(_.t.Whhv4w))
            }
        }, [n.id, n.type, i]),
        N = _.intl.formatToPlainString(_.t.m0zYbV, {
            username: C
        }),
        T = null != i && "" !== i ? (0, r.jsx)(o.Text, {
            className: O.z3,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: i
        }) : null;
    return x ? (0, r.jsxs)("div", {
        className: O.ft,
        children: [(0, r.jsxs)(o.DUT, {
            className: null != i && "" !== i ? O.AO : O.Iq,
            "aria-label": _.intl.string(_.t.pJObYI),
            onClick: I,
            children: [(0, r.jsx)(p.A, {
                sticker: S,
                size: 24
            }), (0, r.jsx)(o.Text, {
                className: O.Qq,
                variant: "text-md/medium",
                children: N
            })]
        }), T]
    }) : (0, r.jsxs)("div", {
        className: O.nj,
        children: [(0, r.jsx)(p.A, {
            sticker: S,
            size: 160,
            className: O.Xr
        }), (0, r.jsx)(o.Button, {
            fullWidth: !0,
            variant: "primary",
            size: "md",
            onClick: I,
            disabled: !!i,
            text: N
        }), T]
    })
}