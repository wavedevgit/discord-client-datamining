/** Chunk was on 71138 **/
/** chunk id: 140539, original params: e,t,r (module,exports,require) **/
r.r(t), r.d(t, {
    default: () => F
});
var n = r(627968),
    a = r(503698),
    i = r.n(a),
    l = r(284009),
    s = r.n(l),
    o = r(417597),
    d = r(197808),
    c = r(738876),
    u = r(877991),
    m = r(332779),
    p = r(568765),
    y = r(512513),
    h = r(795816),
    g = r(933958),
    A = r(47294),
    f = r(386467),
    v = r(923917),
    b = r(734057),
    C = r(31717),
    E = r(164617),
    x = r(540462),
    D = r(678035);
let R = [u.L, m.T, p.w, y.z];

function F(e) {
    let {
        windowKey: t,
        channelId: r
    } = e, a = (0, o.bG)([b.A], () => b.A.getChannel(r));
    s()(null != a, "channel cannot be null for popout");
    let l = (0, o.bG)([g.Ay], () => g.Ay.getSelfEmbeddedActivityForChannel(a.id), [a]);
    return (0, n.jsx)(v.A, {
        withTitleBar: !0,
        keybinds: R,
        windowKey: t,
        title: a.name,
        channelId: a.id,
        onBeforeUnload: e => {
            let {
                e: t,
                unmountWindow: r
            } = e;
            if (null != l) {
                let e = (0, h.od)(l.applicationId, a.id);
                t.preventDefault(), (0, A.A)({
                    onConfirm: async () => {
                        await e, r()
                    },
                    usesPopoutContext: !0
                })
            } else r()
        },
        children: (0, n.jsx)("div", {
            className: i()("root", D.M),
            children: (0, n.jsxs)(f.A.Provider, {
                value: a.guild_id,
                children: [(0, n.jsx)(c.A, {
                    channel: a,
                    draftType: C.C.ChannelMessage
                }), (0, n.jsx)(x.A, {
                    channel: a,
                    popoutType: E.N.VOICE_UI
                }), (0, n.jsx)(d.A, {
                    popoutWindowKey: t,
                    popoutWindowHasTitleBar: !0
                })]
            })
        })
    })
}