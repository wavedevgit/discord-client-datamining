/** Chunk was on 1113 **/
/** chunk id: 613907, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
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
    h = n(148355),
    p = n(961350),
    g = n(320501),
    f = n(287809),
    m = n(954571),
    b = n(427262),
    A = n(143413),
    y = n(652215),
    O = n(985018),
    _ = n(455683);
let x = "749054660769218631";

function j(e) {
    var t;
    let {
        channel: n
    } = e, [i, j] = l.useState("");
    l.useEffect(() => {
        (0, u.zk)("847199849233514549", !0)
    }, []);
    let v = (0, a.bG)([g.A, p.default], () => !!s()(g.A.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== p.default.getId() && e.state === y.cmJ.SENT && !(0, A.A)(e))),
        E = (0, a.bG)([f.default], () => f.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
        C = null != (t = b.Ay.useName(E)) ? t : O.intl.string(O.t.y1Wu2f),
        S = (0, a.bG)([d.A], () => d.A.getStickerById(x)),
        I = l.useCallback(async () => {
            if (null == i || "" === i) try {
                await c.A.sendGreetMessage(n.id, x), m.default.track(y.HAw.DM_EMPTY_ACTION, {
                    channel_id: n.id,
                    channel_type: n.type,
                    source: "Wave",
                    type: "Send wave"
                })
            } catch (e) {
                e.ok || 429 !== e.status || j(O.intl.string(O.t.Whhv4w))
            }
        }, [n.id, n.type, i]),
        N = O.intl.formatToPlainString(O.t.m0zYbV, {
            username: C
        }),
        T = null != i && "" !== i ? (0, r.jsx)(o.Text, {
            className: _.z3,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: i
        }) : null;
    return v ? (0, r.jsxs)("div", {
        className: _.ft,
        children: [(0, r.jsxs)(o.DUT, {
            className: null != i && "" !== i ? _.AO : _.Iq,
            "aria-label": O.intl.string(O.t.pJObYI),
            onClick: I,
            children: [(0, r.jsx)(h.A, {
                sticker: S,
                size: 24
            }), (0, r.jsx)(o.Text, {
                className: _.Qq,
                variant: "text-md/medium",
                children: N
            })]
        }), T]
    }) : (0, r.jsxs)("div", {
        className: _.nj,
        children: [(0, r.jsx)(h.A, {
            sticker: S,
            size: 160,
            className: _.Xr
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