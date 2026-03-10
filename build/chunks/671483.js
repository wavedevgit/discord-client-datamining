/** chunk id: 671483 params = (module,exports,require) **/
i.d(t, {
    A: () => g
});
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(435183),
    s = i(532622),
    d = i(136523),
    c = i(345640),
    o = i(576705),
    A = i(309698),
    u = i(652215),
    h = i(985018);

function g(n, t) {
    let g = (0, l.bG)([o.A], () => o.A.can(u.xBc.MANAGE_CHANNELS, t)),
        x = (0, s.Ay)(n),
        j = (0, c.b)(n),
        C = (0, l.bG)([A.A], () => A.A.getChannelStatus(n)),
        b = null != C && C.length > 0;
    return n.isGuildVoice() && (g || x) ? !j && g && b ? (0, e.jsx)(r.Drp, {
        id: "clear-status",
        label: h.intl.string(h.t["22CYiZ"]),
        action: () => {
            a.Ay.updateVoiceChannelStatus(n.id, "")
        }
    }) : j && x ? (0, e.jsx)(r.Drp, {
        id: "set-status",
        label: h.intl.string(h.t.RBd5PW),
        action: () => {
            (0, r.mMO)(async () => {
                let {
                    default: t
                } = await Promise.resolve().then(i.bind(i, 136523));
                return i => (0, e.jsx)(t, {
                    channel: n,
                    ...i
                })
            }, {
                modalKey: d.m
            })
        }
    }) : null : null
}