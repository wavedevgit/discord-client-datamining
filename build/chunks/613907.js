/** chunk id: 613907 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(843472),
    d = n(631576),
    u = n(679382),
    h = n(148355),
    m = n(961350),
    A = n(320501),
    p = n(287809),
    g = n(954571),
    f = n(427262),
    _ = n(143413),
    E = n(652215),
    x = n(985018),
    C = n(867916);
let S = "749054660769218631";

function I(e) {
    let {
        channel: t
    } = e, [n, s] = l.useState("");
    l.useEffect(() => {
        (0, d.zk)("847199849233514549", !0)
    }, []);
    let I = (0, r.bG)([A.A, m.default], () => !!a()(A.A.getMessages(t.id).toArray()).reverse().find(e => e.author.id !== m.default.getId() && e.state === E.cmJ.SENT && !(0, _.A)(e))),
        T = (0, r.bG)([p.default], () => p.default.getUser(t.isPrivate() ? t.getRecipientId() : null)),
        v = f.Ay.useName(T) ?? x.intl.string(x.t.y1Wu2f),
        N = (0, r.bG)([u.A], () => u.A.getStickerById(S)),
        y = l.useCallback(async () => {
            if (null == n || "" === n) try {
                await c.A.sendGreetMessage(t.id, S), g.default.track(E.HAw.DM_EMPTY_ACTION, {
                    channel_id: t.id,
                    channel_type: t.type,
                    source: "Wave",
                    type: "Send wave"
                })
            } catch (e) {
                e.ok || 429 !== e.status || s(x.intl.string(x.t.Whhv4w))
            }
        }, [t.id, t.type, n]),
        b = x.intl.formatToPlainString(x.t.m0zYbV, {
            username: v
        }),
        j = null != n && "" !== n ? (0, i.jsx)(o.Text, {
            className: C.z3,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: n
        }) : null;
    return I ? (0, i.jsxs)("div", {
        className: C.ft,
        children: [(0, i.jsxs)(o.DUT, {
            className: null != n && "" !== n ? C.AO : C.Iq,
            "aria-label": x.intl.string(x.t.pJObYI),
            onClick: y,
            children: [(0, i.jsx)(h.A, {
                sticker: N,
                size: 24
            }), (0, i.jsx)(o.Text, {
                className: C.Qq,
                variant: "text-md/medium",
                children: b
            })]
        }), j]
    }) : (0, i.jsxs)("div", {
        className: C.nj,
        children: [(0, i.jsx)(h.A, {
            sticker: N,
            size: 160,
            className: C.Xr
        }), (0, i.jsx)(o.Button, {
            fullWidth: !0,
            variant: "primary",
            size: "md",
            onClick: y,
            disabled: !!n,
            text: b
        }), j]
    })
}