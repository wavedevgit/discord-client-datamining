/** Chunk was on 342 **/
/** chunk id: 300153, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    s = n(21599),
    a = n(279208),
    o = n(708051),
    c = n(489673),
    u = n(808728),
    d = n(71393),
    x = n(958590),
    g = n(954571),
    m = n(957565),
    h = n(735547),
    j = n(9448),
    v = n(652215),
    f = n(985018),
    p = n(671353);
let {
    INVITE_OPTIONS_7_DAYS: b,
    INVITE_OPTIONS_UNLIMITED: y
} = h.Ay;

function O(e) {
    var t, n, O;
    let {
        onClose: A,
        event: E
    } = e, N = null == E ? void 0 : E.guild_id, P = (0, r.bG)([u.Ay], () => {
        var e;
        return null != N ? null == (e = u.Ay.getDefaultChannel(N)) ? void 0 : e.id : null
    }, [N]), C = (0, r.bG)([d.A], () => d.A.getGuild(N), [N]), {
        channel_id: S,
        id: T
    } = null != E ? E : {}, w = (0, r.bG)([x.A], () => {
        let e = null != S ? S : P;
        return null == e ? null : x.A.getInvite(e)
    }, [S, P]);
    if (null == E) return A(), null;
    let I = null != (t = null == C ? void 0 : C.vanityURLCode) ? t : null == w ? void 0 : w.code,
        D = null != I ? (0, s.WU)({
            baseCode: I,
            guildScheduledEventId: T
        }) : null,
        k = null == D || null == w,
        G = (0, a.A)(null != D ? D : ""),
        R = null != (n = null == w ? void 0 : w.maxAge) ? n : b.value,
        _ = null != (O = null == w ? void 0 : w.maxUses) ? O : y.value;
    return (0, l.jsxs)("div", {
        className: p.kL,
        children: [(0, l.jsx)(i.DUT, {
            onClick: A,
            className: p.VN,
            "aria-label": f.intl.string(f.t.cpT0Cq),
            children: (0, l.jsx)(i.PGe, {
                size: "md",
                color: "currentColor"
            })
        }), (0, l.jsx)(c.A, {
            children: (0, l.jsx)("div", {
                className: p.zc,
                children: (0, l.jsx)(i.CTc, {
                    size: "custom",
                    color: "currentColor",
                    height: 30,
                    width: 30,
                    className: p.Kk
                })
            })
        }), (0, l.jsx)(i.Heading, {
            variant: "heading-xl/semibold",
            className: p.wx,
            children: f.intl.string(f.t.UzNv7u)
        }), (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: p.rf,
            children: f.intl.string(f.t.UetJjH)
        }), (0, l.jsxs)("div", {
            className: p.EZ,
            children: [(0, l.jsx)(o.I, {
                value: G,
                autoFocus: !1,
                onCopy: e => {
                    if (k) return;
                    (0, m.C)(e);
                    let t = (0, j.dy)(E.entity_type);
                    g.default.track(v.HAw.COPY_INSTANT_INVITE, {
                        server: E.guild_id,
                        channel: S,
                        channel_type: t,
                        location: v.PE1.GUILD_EVENTS,
                        code: w.code,
                        guild_scheduled_event_id: null == E ? void 0 : E.id
                    })
                }
            }), (null == C ? void 0 : C.vanityURLCode) == null && (0, l.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: p.x6,
                children: (0, h.Be)(R, _)
            })]
        })]
    })
}