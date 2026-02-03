/** chunk id: 613907, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048), n(264879);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(843472),
    u = n(631576),
    d = n(679382),
    h = n(148355),
    p = n(961350),
    f = n(320501),
    m = n(287809),
    g = n(954571),
    A = n(427262),
    b = n(143413),
    _ = n(652215),
    y = n(985018),
    v = n(455683);
let E = "749054660769218631";

function O(e) {
    var t;
    let {
        channel: n
    } = e, [i, O] = r.useState("");
    r.useEffect(() => {
        (0, u.zk)("847199849233514549", !0)
    }, []);
    let C = (0, s.bG)([f.A, p.default], () => !!a()(f.A.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== p.default.getId() && e.state === _.cmJ.SENT && !(0, b.A)(e))),
        S = (0, s.bG)([m.default], () => m.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        x = null != (t = A.Ay.useName(S)) ? t : y.intl.string(y.t.y1Wu2f),
        j = (0, s.bG)([d.A], () => d.A.getStickerById(E)),
        I = r.useCallback(async () => {
            if (null == i || "" === i) try {
                await c.A.sendGreetMessage(n.id, E), g.default.track(_.HAw.DM_EMPTY_ACTION, {
                    channel_id: n.id,
                    channel_type: n.type,
                    source: "Wave",
                    type: "Send wave"
                })
            } catch (e) {
                e.ok || 429 !== e.status || O(y.intl.string(y.t.Whhv4w))
            }
        }, [n.id, n.type, i]),
        T = y.intl.formatToPlainString(y.t.m0zYbV, {
            username: x
        }),
        N = null != i && "" !== i ? (0, l.jsx)(o.Text, {
            className: v.z3,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: i
        }) : null;
    return C ? (0, l.jsxs)("div", {
        className: v.ft,
        children: [(0, l.jsxs)(o.DUT, {
            className: null != i && "" !== i ? v.AO : v.Iq,
            "aria-label": y.intl.string(y.t.pJObYI),
            onClick: I,
            children: [(0, l.jsx)(h.A, {
                sticker: j,
                size: 24
            }), (0, l.jsx)(o.Text, {
                className: v.Qq,
                variant: "text-md/medium",
                children: T
            })]
        }), N]
    }) : (0, l.jsxs)("div", {
        className: v.nj,
        children: [(0, l.jsx)(h.A, {
            sticker: j,
            size: 160,
            className: v.Xr
        }), (0, l.jsx)(o.Button, {
            fullWidth: !0,
            variant: "primary",
            size: "md",
            onClick: I,
            disabled: !!i,
            text: T
        }), N]
    })
}